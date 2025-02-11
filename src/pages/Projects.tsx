import React from "react";
import ProjectCard from "../components/ProjectCard";
import { sampleProjects } from "../data/sampleProjects";

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
