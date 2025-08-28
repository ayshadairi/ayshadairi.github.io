import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Alexandra
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
            I craft beautiful, functional digital experiences with clean code and thoughtful design. 
            Passionate about creating solutions that make a difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;