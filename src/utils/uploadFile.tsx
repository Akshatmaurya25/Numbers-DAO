"use client";
import React, { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const cloudName = "duogkpk5c";
  const uploadPreset = "Numbersdaopresent";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (response.ok) {
      console.log("Upload successful:", data);
      return data.secure_url;
    } else {
      console.error("Upload failed:", data.error.message);
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

const UploadField = ({
  label,
  setValue,
}: {
  label?: string;
  setValue: (url: string) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (!selectedFile) return;

    if (selectedFile.size > 1024 * 1024) {
      // Restrict file size to 1MB
      toast("❌ File size exceeds 1MB. Please upload a smaller image.");
      return;
    }

    setLoading(true);
    try {
      const url = await uploadImageToCloudinary(selectedFile);
      setImageUrl(url);
      setValue(url);
    } catch (error) {
      toast("❌ Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-white text-lg font-medium">{label}</p>}
      <div className="flex gap-3 items-center">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <div
          className="bg-[#0C0C0E] border border-[#27272A] rounded-md w-20 h-20 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => fileInputRef.current?.click()}
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} color="#fff" />
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm text-[#a1a1aa]">Upload</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadField;
