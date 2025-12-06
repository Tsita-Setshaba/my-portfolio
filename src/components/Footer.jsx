
import React from 'react';
import { Facebook, Linkedin, Github, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              {personalInfo.subtitle} passionate about creating innovative solutions and building impactful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025. Made with <Heart size={16} className="text-[#e91e63]" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
