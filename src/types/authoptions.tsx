import NextAuth, { Account, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
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
        authorization: {
          url: "https://www.linkedin.com/oauth/v2/authorization",
          params: { scope: "openid profile email" },
      },
      }),
    ],
    callbacks: {
      async jwt({ token, user, account }: {
          token: JWT,
          user?: User | undefined;
          account: Account | null;
       
      }) {
          console.log("jwt", { token, user, account });
      
          if (account && account.provider === "github") {  // Ensure 'account' is defined
              if (user) {
                  token.id = user.id;
                  token.provider = account.provider;
                  const response = await fetch("https://api.github.com/user", {
                      headers: { Authorization: `token ${account.access_token}` },
                  });
                  const data = await response.json();
                  
                 
                  // Get contributions data via GraphQL
                  const contributionsQuery = await fetch("https://api.github.com/graphql", {
                    method: "POST",
                    headers: {
                      "Authorization": `Bearer ${account.access_token}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      query: `
                        query {
                          viewer {
                            contributionsCollection {
                              totalCommitContributions
                              totalIssueContributions
                              totalPullRequestContributions
                              totalPullRequestReviewContributions
                              contributionCalendar {
                                totalContributions
                              }
                            }
                          }
                        }
                      `
                    }),
                  });
  
  
                  const contributionsData = await contributionsQuery.json();
                  const contributions = contributionsData.data.viewer.contributionsCollection;
  
                  const reposResponse = await fetch("https://api.github.com/user/repos?per_page=100", {
                    headers: { Authorization: `token ${account.access_token}` },
                  });
                  const repos = await reposResponse.json();
                  
  
                  const languageCount: Record<string, number> = {};
                  let totalReposWithLanguage = 0;
                  repos.forEach((repo: any) => {
                    if (repo.language) {
                      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
                      totalReposWithLanguage++;
                    }
                  });
                  
  
                  const languagePercentages = Object.entries(languageCount).map(([language, count]) => ({
                    language,
                    percentage: ((count / totalReposWithLanguage) * 100).toFixed(1),
                  }));
        
                  languagePercentages.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
  
                  token.followers = data.followers;
              token.public_repos = data.public_repos;
              token.most_used_language = languagePercentages.length ? languagePercentages[0].language : "Unknown";
              token.language_percentages = languagePercentages;
              token.total_contributions = contributions.contributionCalendar.totalContributions;
              token.commit_contributions = contributions.totalCommitContributions;
              token.issue_contributions = contributions.totalIssueContributions;
              token.pr_contributions = contributions.totalPullRequestContributions;
              token.review_contributions = contributions.totalPullRequestReviewContributions;
  
        
  
              }
          } 
          else if (account && account.provider === "linkedin") { // Ensure 'account' is defined
              if (user) {
                  // Fetch LinkedIn User Profile Data
                  const res = await fetch("https://api.linkedin.com/v2/me", {
                      headers: { Authorization: `Bearer ${account.access_token}` },
                  });
                  const profile = await res.json();
      
                  token.id = profile.id;
                  token.firstName = profile.localizedFirstName;
                  token.lastName = profile.localizedLastName;
                  token.headline = profile.localizedHeadline;
                  token.profilePicture = profile.profilePicture?.displayImage || null;
              }
          }
      
          return token;
      },
      
      async session({ session, token }:{
          session:Session,
          token:JWT
      }
  
      ) {
          console.log("session", { session, token });
          if (token.provider === "github") {
              if (session.user) {
                session.user.id = token.id;
                session.user.provider = token.provider;
                session.user.followers = token.followers;
                session.user.public_repos = token.public_repos;
                session.user.most_used_language = token.most_used_language;
                session.user.language_percentages = token.language_percentages;
                session.user.total_contributions = token.total_contributions;
                session.user.commit_contributions = token.commit_contributions;
                session.user.issue_contributions = token.issue_contributions;
                session.user.pr_contributions = token.pr_contributions;
                session.user.review_contributions = token.review_contributions;
      
              }
          }
          else if (token?.provider === "linkedin") {
              if (session.user) {
                  session.user.id = token.id;
                  session.user.firstName = token.firstName;
                  session.user.lastName = token.lastName;
                  session.user.headline = token.headline;
                  session.user.profilePicture = token.profilePicture;
                  session.user.email = token.email;
              }
          }
          return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };


  export default NextAuth(authOptions);