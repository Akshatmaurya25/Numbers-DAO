import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  joined: { type: Date, default: Date.now },
  authId: { type: String, required: true, unique: true },
  bio: { type: String },
  socials: {
    github: String,
    instagram: String,
    linkedin: String,
    telegram: String,
    x: String,
    discord: String
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