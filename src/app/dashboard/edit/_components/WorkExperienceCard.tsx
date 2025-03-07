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
    .replace(" ", "-");
}

const WorkExperienceCard = (props: any) => {
  return (
    <div className="flex items-center max-w-xl justify-between p-4 bg-[#131313] rounded-lg shadow-lg w-full text-white relative">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-gray-500">
          <img
            src={props.orgLogoLink}
            alt={props.orgName}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2 justify-between w-full max-w-full items-start mb-1">
            <div className="w-[200px] ">
              <h2 className="text-[16px] font-bold text-left truncate">
                {props.positionName}
              </h2>
              <p className="text-gray-400 text-xs text-left truncate">
                {props.orgName}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <div className="text-sm min-w-[64px] text-right flex items-end text-gray-300 px-3 py-1 rounded-lg">
                {props.to === null
                  ? "Present"
                  : formatDateToShortString(props.from)}
              </div>
            </div>
          </div>
          <div className="flex  w-full h-fit">
            {props.tag?.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 mx-1 h-fit max-w-[100px] truncate bg-[#1385F9]/20 border-[#1385F9] border    text-xs rounded-lg"
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
