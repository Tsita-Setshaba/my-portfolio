import React, { useState } from 'react';
import { galleryImages } from '../data/mockData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'venue', label: 'Venue' },
    { id: 'food', label: 'Food' },
    { id: 'bar', label: 'Bar' },
    { id: 'events', label: 'Events' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the beauty and atmosphere of Mamalisa Restaurant through our collection of images
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-gray-200 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Gallery Information */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Share Your Mamalisa Moments
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Tag us on social media with #MamalisaMoments to be featured in our gallery. We love seeing our guests enjoy their experience!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/mamalisarestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Follow on Instagram
            </a>
            <a
              href="https://facebook.com/mamalisarestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Like on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
