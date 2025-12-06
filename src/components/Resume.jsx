
import React, { useState } from 'react';
import { education, skills, experience, achievements } from '../data/mock';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-[#1a2332]">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="w-full bg-[#2c3e50] p-2 rounded-lg mb-12 grid grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger
              value="education"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:border-2 data-[state=active]:border-[#e91e63] data-[state=active]:text-white py-4 rounded-lg transition-all duration-300"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:border-2 data-[state=active]:border-[#e91e63] data-[state=active]:text-white py-4 rounded-lg transition-all duration-300"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:border-2 data-[state=active]:border-[#e91e63] data-[state=active]:text-white py-4 rounded-lg transition-all duration-300"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:border-2 data-[state=active]:border-[#e91e63] data-[state=active]:text-white py-4 rounded-lg transition-all duration-300"
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent value="education" className="mt-8">
            <div className="mb-8">
              <p className="text-[#e91e63] text-sm uppercase tracking-wider mb-2">2019 - present</p>
              <h3 className="text-3xl font-bold text-white mb-8">Education Background</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-[#2c3e50] border-l-4 border-[#e91e63] p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">{edu.institution}</h4>
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                    <span className="text-[#e91e63] font-semibold bg-[#e91e63]/10 px-4 py-2 rounded-lg ml-4">
                      {edu.grade}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="mt-8">
            <div className="mb-8">
              <p className="text-[#e91e63] text-sm uppercase tracking-wider mb-2">FEATURES</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Design Skills */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Design Skill</h3>
                <div className="space-y-6">
                  {skills.design.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-[#1a2332] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#e91e63] to-[#c2185b] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Skills */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Development Skill</h3>
                <div className="space-y-6">
                  {skills.development.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-[#1a2332] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#e91e63] to-[#c2185b] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="mt-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-8">Work Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((exp) => (
                <Card key={exp.id} className="bg-[#2c3e50] border-l-4 border-[#e91e63] p-8">
                  <p className="text-[#e91e63] text-sm uppercase tracking-wider mb-2">{exp.period}</p>
                  <h4 className="text-2xl font-bold text-white mb-1">{exp.position}</h4>
                  <p className="text-gray-400 mb-3">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="mt-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-8">Achievements & Awards</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="bg-[#2c3e50] border-none p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e91e63] rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {achievement.year.slice(-2)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
