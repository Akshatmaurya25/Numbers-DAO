"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface MilestoneFormProps {
  authId: string;
  onClose: () => void;
  onSuccess: (data: any) => void;
  initialData?: {
    projects?: string[];
    milestones?: string[];
    workExperience?: string[];
  };
}

export function MilestoneForm({ authId, onClose, onSuccess, initialData }: MilestoneFormProps) {
  const [formData, setFormData] = useState({
    projects: initialData?.projects || [""],
    milestones: initialData?.milestones || [""],
    workExperience: initialData?.workExperience || [""],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleAddField = (section: keyof typeof formData) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], ""]
    }));
  };

  const handleRemoveField = (section: keyof typeof formData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleChange = (section: keyof typeof formData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => i === index ? value : item)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const cleanedFormData = {
        projects: formData.projects.filter(p => p.trim() !== "") || [],
        milestones: formData.milestones.filter(m => m.trim() !== "") || [],
        workExperience: formData.workExperience.filter(w => w.trim() !== "") || []
      };

      console.log('Sending data:', { authId, achievements: cleanedFormData });

      const response = await axios.patch('/api/user/', {
        authId,
        achievements: cleanedFormData
      });

      console.log('Server response:', response.data);

      if (response.data.success) {
        // Pass just the achievements data
        onSuccess({
          achievements: cleanedFormData
        });
      } else {
        throw new Error(response.data.error || 'Failed to update achievements');
      }
    } catch (error: any) {
      console.error('Submit error:', error);
      setError(error.response?.data?.error || "Failed to update achievements");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white">
      {Object.entries(formData).map(([section, items]) => (
        <div key={section} className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold capitalize">{section}</h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => handleAddField(section as keyof typeof formData)}
            >
              + Add {section}
            </Button>
          </div>
          {items.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleChange(section as keyof typeof formData, index, e.target.value)}
                className="flex-1 bg-zinc-800 border-0 rounded-md p-2"
                placeholder={`Enter ${section} details`}
              />
              {items.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveField(section as keyof typeof formData, index)}
                >
                  ×
                </Button>
              )}
            </div>
          ))}
        </div>
      ))}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
