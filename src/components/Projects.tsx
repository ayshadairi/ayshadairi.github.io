import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EcoTrack - Sustainability App",
      description: "A React Native app helping users track their carbon footprint with beautiful data visualizations and gamification elements.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      gradient: "from-green-400 to-teal-600"
    },
    {
      title: "TaskFlow - Project Management",
      description: "Modern project management dashboard with real-time collaboration, built with React and Socket.io.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "MoodBoard - Design Tool",
      description: "Creative mood board application for designers with drag-and-drop functionality and collaboration features.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["Vue.js", "Python", "AWS S3", "WebSockets"],
      gradient: "from-rose-400 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;