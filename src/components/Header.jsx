
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '#features' },
    { name: 'Projects', path: '#projects' },
    { name: 'Resume', path: '#resume' },
    { name: 'Contact', path: '#contact' }
  ];

  const scrollToSection = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2332] border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={personalInfo.avatarImage}
              alt={personalInfo.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#e91e63] ring-offset-2 ring-offset-[#1a2332] transition-transform group-hover:scale-105"
            />
            <div>
              <h3 className="text-white font-semibold text-lg">{personalInfo.name}</h3>
              <p className="text-gray-400 text-sm">{personalInfo.title}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="text-gray-300 hover:text-[#e91e63] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="text-gray-300 hover:text-[#e91e63] transition-colors duration-300 font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
