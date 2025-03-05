"use client";

import { format } from "date-fns";
import Image from "next/image";

interface WorkExperienceProps {
  workExperience: {
    tag: string[];
    orgName: string;
    positionName: string;
    from: Date;
    to: Date | null; // null represents "Present"
    orgLogoLink?: string;
  }[];
}

export default function WorkExperienceCard({
  workExperience,
}: WorkExperienceProps) {
  const formatDate = (date: Date | null): string => {
    if (!date) return "Present";
    return format(date, "MM/yy");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className=" w-full rounded-xl shadow-md overflow-hidden">
        <div className="p-6 w-96">
          <h2 className="text-xl font-semibold text-start text-gray-800 dark:text-white mb-4">
            Work Experience
          </h2>

          <div className="space-y-6 w-full overflow-y-auto h-[14.3rem] custom-scrollbar">
            {workExperience.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    {experience.orgLogoLink ? (
                      <Image
                        src={experience.orgLogoLink || "/placeholder.svg"}
                        alt={experience.orgName}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold text-gray-400">
                        {experience.orgName.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-base font-medium text-start text-gray-900 dark:text-white truncate">
                      {experience.positionName}
                    </h3>

                    <span className="text-sm text-start text-gray-500 dark:text-gray-400 sm:ml-2 whitespace-nowrap">
                      {formatDate(experience.from)} -{" "}
                      {formatDate(experience.to)}
                    </span>
                  </div>

                  <p className="text-sm text-start text-gray-600 dark:text-gray-300 mb-3">
                    {experience.orgName}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.tag.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
