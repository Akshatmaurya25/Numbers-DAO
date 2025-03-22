// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    provider?: string;
    followers?: number;
    public_repos?: number;
    most_used_language?: string;
    language_percentages?: { language: string; percentage: string }[];
    total_contributions?: number;
    commit_contributions?: number;
    issue_contributions?: number;
    pr_contributions?: number;
    review_contributions?: number;
    firstName?: string;
    lastName?: string;
    headline?: string;
    profilePicture?: string | null;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    provider?: string;
    followers?: number;
    public_repos?: number;
    most_used_language?: string;
    language_percentages?: { language: string; percentage: string }[];
    total_contributions?: number;
    commit_contributions?: number;
    issue_contributions?: number;
    pr_contributions?: number;
    review_contributions?: number;
    firstName?: string;
    lastName?: string;
    headline?: string;
    profilePicture?: string | null;
    email?: string;
  }
}
