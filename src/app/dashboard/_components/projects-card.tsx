import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  projectName: string;
  projectDescription: string;
  liveLink: string;
  imageLink: string;
  sourceLink: string;
}

interface ProjectsCardProps {
  projects: Project[];
}

export default function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto h-[300px]  custom-scrollbar">
      <div className=" rounded-xl shadow-md ">
        <div className="p-6">
          <h2 className="text-2xl text-center font-semibold text-[#D58929] mb-2">
            Projects
          </h2>
          <p className="text-zinc-400 text-center text-sm mt-1 mb-4">
            Launched communities for designers to exceed the threshold of their
            creativity
          </p>
          <div className="space-y-6  gap-2 items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col  min-w-[250px] sm:flex-row gap-4 bg-[#131313] rounded-lg p-4 transition-all hover:shadow-md"
              >
                {/* Project Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden bg-gray-200 dark:bg-gray-600">
                    <Image
                      src={project.imageLink || "/placeholder.svg"}
                      alt={project.projectName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.projectName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.projectDescription}
                  </p>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Project
                      </a>
                    )}
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
