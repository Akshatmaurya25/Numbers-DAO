import DbConnect from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

import SocialMedia from "@/modal/social";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await DbConnect();

  switch (req.method) {
    case "POST":
      try {
        const { userId, socialScore, ...socialLinks } = req.body;
        const socialMedia = new SocialMedia({ userId, socialScore, ...socialLinks });
        await socialMedia.save();
        return res.status(201).json(socialMedia);
      } catch (error) {
        return res.status(500).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
      }
    
    case "GET":
      try {
        const { userId } = req.query;
        if (!userId || typeof userId !== "string") {
          return res.status(400).json({ message: "Invalid User ID" });
        }
        const socialMedia = await SocialMedia.findOne({ userId });
        if (!socialMedia) {
          return res.status(404).json({ message: "Social media reference not found" });
        }
        return res.json(socialMedia);
      } catch (error) {
        return res.status(500).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
      }
    
    case "PUT":
      try {
        const { userId } = req.query;
        if (!userId || typeof userId !== "string") {
          return res.status(400).json({ message: "Invalid User ID" });
        }
        const { socialScore, ...socialLinks } = req.body;
        const updatedSocialMedia = await SocialMedia.findOneAndUpdate(
          { userId },
          { socialScore, ...socialLinks },
          { new: true }
        );
        if (!updatedSocialMedia) {
          return res.status(404).json({ message: "Social media reference not found" });
        }
        return res.json(updatedSocialMedia);
      } catch (error) {
        return res.status(500).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
      }
    
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
