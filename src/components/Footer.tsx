import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Alexandra
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate full-stack developer creating beautiful, functional digital experiences. 
              Always excited to take on new challenges and collaborate on amazing projects.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="text-pink-500 mx-2" size={16} /> by Alexandra © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;