import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/data';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mini'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-700 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing my technical skills and problem-solving abilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-700 text-white dark:bg-blue-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'web'
                  ? 'bg-blue-700 text-white dark:bg-blue-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('mini')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'mini'
                  ? 'bg-blue-700 text-white dark:bg-blue-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Mini Projects
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                {project.badge && (
                  <div className="absolute top-3 right-3 bg-blue-700 text-white text-xs font-medium px-2 py-1 rounded">
                    {project.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{project.name}</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">{project.tagline}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;