import React, { useState } from 'react';
import { liquorProducts } from '../data/mockData';
import { ShoppingBag, Clock, CreditCard, Truck } from 'lucide-react';

const Liquor = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Whiskey', 'Wine', 'Vodka', 'Gin', 'Rum'];

  const filteredProducts = selectedCategory === 'all'
    ? liquorProducts
    : liquorProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Liquor Store
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Premium selection of wines, spirits, and beers. Take home your favorites or discover something new.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-80 rounded-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?q=85"
            alt="Wine collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Extensive Collection</h2>
              <p className="text-lg">Browse our carefully curated selection of premium beverages</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-black">{product.price}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Clock size={32} />, title: "Convenient Hours", description: "Open 7 days a week for your convenience" },
            { icon: <CreditCard size={32} />, title: "Multiple Payment Options", description: "Cash, card, and digital payments accepted" },
            { icon: <Truck size={32} />, title: "Bulk Orders", description: "Special pricing for large quantity purchases" },
            { icon: <ShoppingBag size={32} />, title: "Gift Sets", description: "Beautifully packaged gift options available" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-black mb-3 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Store Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            Store Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3">Operating Hours</h3>
              <p className="text-gray-700">Monday - Saturday</p>
              <p className="text-gray-700 font-semibold">10:00 AM - 8:00 PM</p>
              <p className="text-gray-700 mt-2">Sunday</p>
              <p className="text-gray-700 font-semibold">10:00 AM - 6:00 PM</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3">Special Offers</h3>
              <p className="text-gray-700">Weekly specials on selected items</p>
              <p className="text-gray-700">Loyalty rewards program</p>
              <p className="text-gray-700">Seasonal promotions</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3">Contact</h3>
              <p className="text-gray-700">In-store assistance available</p>
              <p className="text-gray-700">Expert recommendations</p>
              <p className="text-gray-700">Call ahead for availability</p>
            </div>
          </div>
        </div>

        {/* Responsible Drinking Notice */}
        <div className="mt-12 bg-black text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Drink Responsibly</h3>
          <p className="text-lg mb-2">Not for sale to persons under the age of 18</p>
          <p className="text-gray-300">We promote responsible consumption and adhere to all South African liquor laws</p>
        </div>
      </div>
    </div>
  );
};

export default Liquor;
