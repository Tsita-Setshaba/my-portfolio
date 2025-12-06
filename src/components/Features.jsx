
import React from 'react';
import { Briefcase, Smartphone, Signal, Layout, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';
import { Card } from './ui/card';

const iconMap = {
  briefcase: Briefcase,
  smartphone: Smartphone,
  signal: Signal,
  layout: Layout
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#1a2332]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Do</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Briefcase;
            return (
              <Card
                key={service.id}
                className="bg-[#2c3e50] border-none p-8 hover:bg-[#34495e] transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e91e63] to-[#c2185b] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-[#e91e63] group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight size={20} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
