import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, },
  profileImage: { type: String, },
  joined: { type: Date, default: Date.now },
  authId: { type: String, required: true, unique: true },
  bio: { type: String, default: 'Hey there! This is my bios' },
  socials: {
    github: String,
    instagram: String,
    linkedin: String,
    telegram: String,
    x: String,
    discord: String,
    medium: String,
    hashNode: String,
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
      tag: String,
      orgName: String,
      positionName: String,
      from: Date,
      to: Date,
      orgLogoLink: String
    }
  ],
  stack: [String]
});

// Export model
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;