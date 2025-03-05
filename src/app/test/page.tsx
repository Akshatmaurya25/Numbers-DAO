import React from "react";
import MilestoneCard from "../dashboard/_components/milestone-card";
import WorkExperienceCard from "../dashboard/_components/work-experience-card";
import ProjectCard from "../dashboard/_components/projects-card";
import MileCard from "../dashboard/edit/_components/MilestoneCard";
import ProCard from "../dashboard/edit/_components/ProjectCard";
import WorkCard from "../dashboard/edit/_components/WorkExperienceCard";
const page = () => {
  return (
    <div>
      {/* <MilestoneCard
        milestones={[
          {
            title: "dada",
            description: "description",
            reference: "reference",
          },
        ]}
      />
      <ProjectCard
        projects={[
          {
            projectName: "project",
            projectDescription: "project",
            liveLink: "project",
            imageLink: "project",
            sourceLink: "project",
          },
        ]}
      />
      <WorkExperienceCard
        workExperience={[
          {
            tag: ["wefwef", "aefeaf", "aefaef"],
            orgName: "Example Org",
            positionName: "Example Position",
            from: new Date(),
            to: new Date(),
            orgLogoLink: "https://example.com/logo.png",
          },
        ]}
      /> */}
    </div>
  );
};

export default page;
