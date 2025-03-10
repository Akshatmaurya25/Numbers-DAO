import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, },
  profileImage: { type: String, },
  gender: { type: String },
  email: { type: String },
  contact: { type: String },
  joined: { type: Date, default: Date.now },
  authId: { type: String, required: true, unique: true },
  bio: { type: String, default: 'Hey there! This is my bios' },
 socials: {
  Instagram: String,
  GitHub: String,
  X: String,
  Dribbble: String,
  Hashnode: String,
  YouTube: String,
  HackerRank: String,
  LeetCode: String,
  HackerEarth: String,
  Discord: String,
  Twitter: String,
  CodePen: String,
  StackOverflow: String,
  Figma: String,
  Behance: String,
  Medium: String,
  CodeChef: String,
  Codeforces: String,
  Telegram: String,
  },
  
  status: { 
    type: String, 
    enum: ['available', 'notAvailable', 'busy'],
    default: 'available'
  },
  projects: [
    {
      projectName: String,
      projectDescription: String,
      liveLink: String,
      imageLink: String,
      sourceLink: String
    }
  ],
  milestones: [
    {
      title: String,
      description: String,
      reference: String
    }
  ],
  domains: [String],
  authData:[],
  workExperience: [
    {
      tag: [String],
      orgName: String,
      positionName: String,
      from: Date,
      to: Date,
      orgLogoLink: String
    }
  ],
  stack: [String],
  achievements: {
    projects: [String],
    milestones: [String],
    workExperience: [String]
  }
});

// Export model
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;