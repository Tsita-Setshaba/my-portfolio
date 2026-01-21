import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/bar', label: 'Bar & Drinks' },
    { path: '/liquor', label: 'Liquor Store' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>
              Mamalisa
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-black p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2 text-base font-medium ${location.pathname === link.path ? 'text-black font-semibold' : 'text-gray-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center bg-black text-white px-6 py-3 rounded-md font-semibold mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
