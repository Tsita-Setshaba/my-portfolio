import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';
import { Card } from './ui/card';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#1e2a38]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#2c3e50] border-none overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] via-[#2c3e50]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#e91e63] mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-[#1a2332] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-[#1a2332] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
