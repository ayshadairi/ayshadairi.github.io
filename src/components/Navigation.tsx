import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Code2 className="text-white" size={20} />
            </div>
            <span className={`text-xl font-bold ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              Alexandra
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-purple-600 ${
                  scrolled ? 'text-slate-700' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-slate-700 font-medium hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;