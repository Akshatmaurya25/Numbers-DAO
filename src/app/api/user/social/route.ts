import DbConnect from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import SocialMedia from "@/modal/social";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await DbConnect();

  switch (req.method) {
    case "POST":
      try {
        const { userId, socialScore, ...socialLinks } = req.body;

        if (!userId || typeof userId !== "string") {
          return res.status(400).json({ message: "Invalid or missing User ID" });
        }

        const existingSocialMedia = await SocialMedia.findOne({ userId });

        if (existingSocialMedia) {
          // Update existing social media data
          const updatedSocialMedia = await SocialMedia.findOneAndUpdate(
            { userId },
            { $set: { socialScore, ...socialLinks } },
            { new: true }
          );
          return res.status(200).json(updatedSocialMedia);
        } else {
          // Create new entry if not found
          const newSocialMedia = new SocialMedia({ userId, socialScore, ...socialLinks });
          await newSocialMedia.save();
          return res.status(201).json(newSocialMedia);
        }
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
          return res.status(404).json({ message: "No social media data found for this user" });
        }

        return res.status(200).json(socialMedia);
      } catch (error) {
        return res.status(500).json({ message: error instanceof Error ? error.message : "An unknown error occurred" });
      }

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
