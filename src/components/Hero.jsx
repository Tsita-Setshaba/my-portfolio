
import React from 'react';
import { Download, Facebook, Linkedin, Github, Twitter } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#1e2a38] pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-400 text-sm uppercase tracking-wider">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-[#e91e63]">{personalInfo.name}</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">a {personalInfo.subtitle}</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            <Button
              className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#e91e63]/50"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-400 text-sm uppercase mb-4">FIND ME IN</p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#e91e63] hover:text-white transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-400 text-sm uppercase mb-4">BEST SKILL ON</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center text-[#e91e63]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center text-[#e91e63]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full max-w-md h-auto rounded-lg shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a38] via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
