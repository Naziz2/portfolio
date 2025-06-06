import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, EyeOff } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const togglePreview = () => {
    if (project.livePreview && project.link) {
      setShowPreview(!showPreview);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`group rounded-xl overflow-hidden bg-gray-800 border border-gray-700 transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500 hover:translate-y-[-5px] ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        {showPreview && project.link ? (
          <iframe
            src={project.link}
            className="w-full h-full border-0 scale-50 origin-top-left"
            style={{ width: '200%', height: '200%' }}
            title={`${project.title} preview`}
          />
        ) : (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-75" />
        
        {project.livePreview && project.link && (
          <button
            onClick={togglePreview}
            className="absolute top-3 right-3 p-2 bg-gray-900/80 text-white rounded-full hover:bg-indigo-600 transition-colors duration-200"
            title={showPreview ? 'Hide preview' : 'Show live preview'}
          >
            {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-200 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm group/link"
              >
                <ExternalLink size={16} className="mr-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                View Live
              </a>
            )}
            
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm group/github"
              >
                <Github size={16} className="mr-1 group-hover/github:rotate-12 transition-transform duration-200" />
                Source
              </a>
            )}
          </div>
          
          {project.livePreview && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-xs text-green-400 font-medium">Live</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;