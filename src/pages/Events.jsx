import React from 'react';
import { upcomingEvents } from '../data/mockData';
import { Calendar, Clock, DollarSign, Music, Users, Ticket } from 'lucide-react';

const Events = () => {
  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Live Music & Events
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience unforgettable nights with celebrity performances, live music, and special events
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1656369895489-e24a2d0816e9?q=85"
            alt="Live performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Where Music Comes Alive</h2>
              <p className="text-xl">Every weekend is a celebration at Mamalisa</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={event.image}
                      alt={event.performer}
                      className="w-full h-full object-cover min-h-64"
                    />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-3xl font-bold mb-4">{event.performer}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{event.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-black" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-semibold">
                            {new Date(event.date).toLocaleDateString('en-ZA', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-black" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Time</p>
                          <p className="font-semibold">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="text-black" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Cover Charge</p>
                          <p className="font-semibold">{event.coverCharge}</p>
                        </div>
                      </div>
                    </div>
                    <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5">
                      Reserve Your Spot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            Event Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Music size={40} />,
                title: "Live Music Nights",
                description: "Regular performances featuring local and international artists across various genres",
                image: "https://images.pexels.com/photos/35556757/pexels-photo-35556757.jpeg"
              },
              {
                icon: <Users size={40} />,
                title: "Celebrity Performances",
                description: "Special appearances by renowned artists and celebrities for unforgettable nights",
                image: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9"
              },
              {
                icon: <DollarSign size={40} />,
                title: "Private Events",
                description: "Host your corporate functions, weddings, and private parties in our versatile venue",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              }
            ].map((eventType, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={eventType.image}
                    alt={eventType.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-black mb-4">{eventType.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{eventType.title}</h3>
                  <p className="text-gray-700 text-sm">{eventType.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            Event Booking Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Public Events</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Walk-ins welcome (subject to capacity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Table reservations recommended for groups of 6+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Cover charges apply for special performances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Advance booking ensures guaranteed seating</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Private Events</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Venue capacity: up to 150 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Customizable packages available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Catering and entertainment options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Contact us for quotes and availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Don't Miss Out on the Action
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your table now and experience the best entertainment in Polokwane
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all duration-200">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-200">
              Contact for Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
