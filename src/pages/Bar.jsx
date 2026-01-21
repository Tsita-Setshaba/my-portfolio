import React, { useState } from 'react';
import { drinksMenu } from '../data/mockData';
import { Wine, Beer, Martini, Sparkles } from 'lucide-react';

const Bar = () => {
  const [activeCategory, setActiveCategory] = useState('cocktails');

  const categories = [
    { id: 'cocktails', label: 'Cocktails', icon: <Martini size={20} /> },
    { id: 'beers', label: 'Beers', icon: <Beer size={20} /> },
    { id: 'wines', label: 'Wines', icon: <Wine size={20} /> },
    { id: 'spirits', label: 'Spirits', icon: <Sparkles size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=85"
            alt="Bar interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                Bar & Drinks
              </h1>
              <p className="text-xl">Expertly crafted cocktails and premium selections</p>
            </div>
          </div>
        </div>

        {/* Happy Hour Banner */}
        <div className="bg-black text-white rounded-lg p-6 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Happy Hour Special!</h2>
          <p className="text-lg">Monday - Friday, 5:00 PM - 7:00 PM • 20% off all cocktails and selected beers</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Drinks List */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            {categories.find(c => c.id === activeCategory)?.label}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drinksMenu[activeCategory].map((drink) => (
              <div
                key={drink.id}
                className="border-b border-gray-200 pb-4 hover:bg-[#e6e67c]/20 p-4 rounded transition-colors duration-200"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{drink.name}</h3>
                    {drink.description && (
                      <p className="text-gray-600 text-sm">{drink.description}</p>
                    )}
                  </div>
                  <span className="text-lg font-bold text-black ml-4">{drink.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#e6e67c] p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Expert Mixologists</h3>
            <p className="text-gray-700">
              Our bartenders are trained professionals who craft each drink with precision and flair
            </p>
          </div>
          <div className="bg-[#e6e67c] p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Premium Selection</h3>
            <p className="text-gray-700">
              We source only the finest spirits, wines, and craft beers from around the world
            </p>
          </div>
          <div className="bg-[#e6e67c] p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Vibrant Atmosphere</h3>
            <p className="text-gray-700">
              Our bar transforms into an energetic entertainment hub as the night unfolds
            </p>
          </div>
        </div>

        {/* Bar Hours */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Bar Operating Hours
          </h2>
          <p className="text-xl text-gray-700 mb-2">Monday - Sunday</p>
          <p className="text-2xl font-semibold">5:00 PM - 2:00 AM</p>
          <p className="text-sm text-gray-600 mt-4">
            Last call at 1:30 AM • Kitchen closes at 11:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bar;
