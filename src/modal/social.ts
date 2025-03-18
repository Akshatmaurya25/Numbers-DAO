import mongoose, { Schema, Document } from "mongoose";

export interface ISocialMedia extends Document {
  userId: mongoose.Types.ObjectId; // Reference to User model
  builderScore:number;
  socialScore: number;
  instagram?: string;
  facebook?: string;
  twitter?: {
    username: string;
    followers: number;
    tweets: number;
  };
  youtube?: string;
  threads?: string;
  lens?: string;
  linkedin?: string;
  medium?: string;
  telegram?: string;
  farcaster?: string;
  github?: {
    username: string;
    repos: number;
    followers: number;
    contributions: number;
    languages: Array<{ name: string; value: number }>;
  };
}

const SocialMediaSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    builderScore: { type: Number, default:0 },
    socialScore: { type: Number, default:0 },
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
    twitter: {
      username: String,
      followers: Number,
      tweets: Number
    },
    youtube: { type: String, default: "" },
    threads: { type: String, default: "" },
    lens: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    medium: { type: String, default: "" },
    telegram: { type: String, default: "" },
    farcaster: { type: String, default: "" },
    github: {
      username: String,
      repos: Number,
      followers: Number,
      contributions: Number,
      languages: [{ name: String, value: Number }]
    }
  },
  { timestamps: true }
);

// Add check before model creation
const SocialMedia = mongoose.models.SocialMedia || mongoose.model<ISocialMedia>("SocialMedia", SocialMediaSchema);

export default SocialMedia;
