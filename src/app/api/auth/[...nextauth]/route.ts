import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
        console.log("jwt", { token, user, account });
        if (user) {
            token.id = user.id;
            token.provider = account.provider;

            // Fetch GitHub additional data
            const response = await fetch("https://api.github.com/user", 
                {
                    headers: { Authorization: `token ${account.access_token}` },
                }
            );
            const data = await response.json();


            // Fetch GitHub Repo additional data
            const reposResponse = await fetch("https://api.github.com/user/repos?per_page=100", 
                {
                    headers: { Authorization: `token ${account.access_token}` },
                }
            );
            const repos = await reposResponse.json();

            // Count occurrences of each language
            const languageCount: Record<string, number> = {};
            repos.forEach((repo: any) => {
            if (repo.language) {
                languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
            }
            });

            // Find the most used language
            const mostUsedLanguage = Object.keys(languageCount).reduce((a, b) =>
                languageCount[a] > languageCount[b] ? a : b, "Unknown"
            );
    
            // Fetch Contribution Count via GraphQL API
            const graphqlResponse = await fetch("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${account.access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                query: `
                    {
                    user(login: "${data.login}") {
                        contributionsCollection {
                        contributionCalendar {
                            totalContributions
                        }
                        }
                    }
                    }
                `,
                }),
            });
    
            const graphqlData = await graphqlResponse.json();
            const contributionCount =
                graphqlData?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
    
    
            token.followers = data.followers;
            token.public_repos = data.public_repos;
            token.most_used_language = mostUsedLanguage;
            token.contribution_count = contributionCount;

        }
        return token;
    },
    async session({ session, token }) {
        console.log("session", { session, token });
        if (session.user) {
            session.user.id = token.id;
            session.user.provider = token.provider;
            session.user.followers = token.followers;
            session.user.public_repos = token.public_repos;
            session.user.most_used_language = token.most_used_language;
            session.user.contribution_count = token.contribution_count;
        }
        return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
