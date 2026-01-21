import React, { useState } from 'react';
import { menuCategories } from '../data/mockData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' }
  ];

  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Our Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our carefully curated selection of exquisite dishes, prepared with passion and the finest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories[activeCategory].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-lg font-semibold text-black">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                {item.dietary && (
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#e6e67c] text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            Dining Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Operating Hours</h3>
              <p className="text-gray-700">Monday - Sunday</p>
              <p className="text-gray-700">11:00 AM - 11:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Reservations</h3>
              <p className="text-gray-700">Recommended for parties of 6+</p>
              <p className="text-gray-700">Call us to book</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Dietary Options</h3>
              <p className="text-gray-700">Vegetarian, Vegan,</p>
              <p className="text-gray-700">and Gluten-Free available</p>
            </div>
          </div>
        </div>

        {/* Chef's Note */}
        <div className="mt-12 bg-[#e6e67c] rounded-lg p-8 text-center">
          <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
            "Our menu is a celebration of flavors, combining traditional techniques with modern innovation. Each dish is crafted with locally sourced ingredients and prepared with love."
          </p>
          <p className="mt-4 font-semibold">— Chef's Kitchen, Mamalisa Restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
