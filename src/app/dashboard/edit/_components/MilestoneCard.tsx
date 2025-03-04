import { Trophy } from "lucide-react";
import React from "react";

const MilestoneCard = (props: any) => {
  return (
    <div className="p-4 bg-[#131313] rounded ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-white font-bold mb-2">{props.title}</h2>
        <Trophy className="text-yellow-500" size={28} />
      </div>
      <p className="text-gray-300 mb-4">{props.description}</p>
      <a
        href={props.reference}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 ml-auto hover:underline"
      >
        Reference
      </a>
    </div>
  );
};

export default MilestoneCard;
