import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch for reservations, events, or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-black flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">{restaurantInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-black flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">{restaurantInfo.phone}</p>
                    <p className="text-gray-700">WhatsApp: {restaurantInfo.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-black flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">{restaurantInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-black flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Operating Hours</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Restaurant:</strong><br/>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                      <p><strong>Bar:</strong><br/>Monday - Sunday: 5:00 PM - 2:00 AM</p>
                      <p><strong>Liquor Store:</strong><br/>Mon-Sat: 10:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Mamalisa Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3!2d29.45!3d-23.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzAwLjAiUyAyOcKwMjcnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="reservation">Reservation</option>
                  <option value="events">Events & Private Functions</option>
                  <option value="catering">Catering</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 bg-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Ready to Experience Mamalisa?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us now to make a reservation or visit us at our location in Polokwane
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-200 inline-flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
