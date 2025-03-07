interface SocialsType {
  github?: string;
  instagram?: string;
  linkedin?: string;
  telegram?: string;
  x?: string;
  discord?: string;
  medium?: string;
  hashNode?: string;
}

interface ProjectType {
  projectName: string;
  projectDescription: string;
  liveLink: string;
  imageLink: string;
  sourceLink: string;
}

interface MilestoneType {
  title: string;
  description: string;
  reference: string;
  _id?: string;
}

interface WorkExperienceType {
  tag: string[];
  orgName: string;
  positionName: string;
  from: Date;
  to: Date | null;
  orgLogoLink: string;
}

interface CommunityStatsType {
  discordMembers: number;
  governanceParticipants: number;
}

export interface UserDocument {
  _id?: string;
  username: string;
  name?: string;
  profileImage?: string;
  joined: Date;
  authId: string;
  bio?: string;
  socials?: SocialsType;
  status: "available" | "notAvailable" | "busy";
  projects: ProjectType[];
  milestones: MilestoneType[];
  domains: string[];
  authData: [];
  workExperience: WorkExperienceType[];
  stack: string[];
  communityStats?: CommunityStatsType;
}

export type {
  SocialsType,
  ProjectType,
  MilestoneType,
  WorkExperienceType,
  CommunityStatsType,
};
