import React from 'react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential clients, and amazing people. 
            Let's create something beautiful together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">alexandra.dev@example.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Let's Chat</h3>
                  <p className="text-gray-300">Available for freelance projects</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;