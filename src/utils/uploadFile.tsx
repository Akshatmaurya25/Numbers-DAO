"use client";
import React, { useState } from "react";

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
      return data.secure_url; // Return the uploaded image URL
    } else {
      console.error("Upload failed:", data.error.message);
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    try {
      const url = await uploadImageToCloudinary(file);
      setImageUrl(url);
      alert("File uploaded successfully!");
    } catch (error) {
      alert("Upload failed.");
    }
  };

  return (
    <div className="pt-24">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default Page;
