import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  
  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;
  
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-pop-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-xl text-gray-300">
              Explore a collection of my recent work spanning web development, mobile apps, and more.
            </p>
          </div>
          
          {/* Filter by technology */}
          <div className="mt-10 mb-12 animate-pop-in delay-1">
            <h3 className="text-gray-300 text-sm font-medium mb-3">Filter by technology:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech(null)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  selectedTech === null
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All
              </button>
              
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    selectedTech === tech
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 100} 
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 animate-pop-in">
              <p className="text-gray-400 text-lg">
                No projects found with the selected technology. Try another filter.
              </p>
              <button
                onClick={() => setSelectedTech(null)}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;