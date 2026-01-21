import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Mamalisa
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fine dining by day, live entertainment by night. Experience the best of Polokwane's culinary and entertainment scene.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href={restaurantInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href={restaurantInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={restaurantInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="font-medium text-white">Restaurant:</span><br/>Mon-Sun: 11AM - 11PM</p>
              <p><span className="font-medium text-white">Bar:</span><br/>Mon-Sun: 5PM - 2AM</p>
              <p><span className="font-medium text-white">Liquor Store:</span><br/>Mon-Sat: 10AM - 8PM<br/>Sun: 10AM - 6PM</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mamalisa Restaurant. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <p className="mt-4 text-xs">Please drink responsibly. Not for sale to persons under the age of 18.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
