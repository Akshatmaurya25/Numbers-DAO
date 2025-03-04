import { Link2Icon } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props: any) => {
  return (
    <div className="flex flex-col  items-center p-4 bg-[#131313] border-1 border-[#acacac] border-solid rounded-lg shadow-lg w-full">
      <div className="flex  items-start gap-4">
        <div className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center text-gray-300">
          <img
            src={
              props.imageLink ||
              "https://static.vecteezy.com/system/resources/previews/019/551/975/non_2x/error-page-page-not-found-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg"
            }
            alt={props.projectName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{props.projectName}</h2>
          <p className="text-gray-300 text-sm">{props.projectDescription}</p>
        </div>
      </div>
      <div className="text-right text-sm flex gap-3 self-end">
        {props.sourceLink && (
          <a
            href={props.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 flex items-center gap-2  hover:underline mr-2"
          >
            Source <FaGithub className="text-[12px]" />
          </a>
        )}
        {props.liveLink && (
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 flex  items-center gap-2 hover:underline"
          >
            Link <Link2Icon size={12} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
