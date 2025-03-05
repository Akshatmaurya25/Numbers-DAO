import React from "react";
import { Trash2 } from "lucide-react";
function formatDateToShortString(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "short",
  };
  return date
    .toLocaleDateString("en-US", options)
    .toLowerCase()
    .replace(" ", "-");
}

const WorkExperienceCard = (props: any) => {
  return (
    <div className="flex items-center max-w-xl justify-between p-4 bg-[#131313] rounded-lg shadow-lg w-full text-white relative">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-gray-500">
          <img
            src={props.orgLogoLink}
            alt={props.orgName}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <div>
            <div className="flex gap-1 items-start mb-1">
              <div>
                <h2 className="text-xl font-bold">{props.positionName}</h2>
                <p className="text-gray-400 text-sm">{props.orgName}</p>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <div className="text-sm  inline text-gray-300 px-3 py-1 rounded-lg">
                  {formatDateToShortString(props.from)}
                </div>
              </div>
            </div>
            {props.tag?.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 mx-1  bg-yellow-700 text-gray-300 text-xs rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
