import React from 'react';
import { Code2, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-teal-400 rounded-full p-1">
              <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="text-white" size={24} />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Code2 className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">My Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience creating 
                digital solutions that blend functionality with beautiful design. I love 
                turning complex problems into simple, elegant solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Heart className="text-pink-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">What Drives Me</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I believe technology should be accessible, beautiful, and meaningful. 
                I'm particularly passionate about creating inclusive digital experiences 
                and mentoring other women in tech.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-3">Fun Facts</h3>
              <ul className="space-y-2 text-purple-100">
                <li>☕ Coffee enthusiast & morning person</li>
                <li>🎨 UI/UX design hobbyist</li>
                <li>🌱 Always learning new technologies</li>
                <li>🐱 Cat mom to two adorable furballs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;