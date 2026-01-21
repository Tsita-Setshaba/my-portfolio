import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Wine, Music, ChefHat, Star } from 'lucide-react';
import { restaurantInfo, upcomingEvents, testimonials } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#ECEC75]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768051297578-1ea70392c307?q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            {restaurantInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience premium dining and live entertainment in the heart of Polokwane
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              View Menu <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/events"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Welcome to Mamalisa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Where culinary excellence meets entertainment. Mamalisa Restaurant offers a unique blend of fine dining, premium beverages, and unforgettable live performances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ChefHat size={40} />,
                title: "Premium Dining",
                description: "Exquisite dishes crafted by our expert chefs using the finest ingredients"
              },
              {
                icon: <Music size={40} />,
                title: "Live Entertainment",
                description: "Celebrity performances and live music that create unforgettable nights"
              },
              {
                icon: <Wine size={40} />,
                title: "Extensive Selection",
                description: "Wide range of premium wines, spirits, and craft cocktails"
              },
              {
                icon: <Star size={40} />,
                title: "Elegant Atmosphere",
                description: "Sophisticated ambiance perfect for any occasion"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#e6e67c] p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-black mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 bg-[#ECEC75]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1623073284788-0d846f75e329?q=85"
                alt="Featured dish"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                Chef's Special This Week
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience our signature dishes prepared with passion and precision. Our chefs create culinary masterpieces that combine traditional flavors with modern techniques.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Locally sourced, fresh ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Award-winning chef creations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Dietary accommodations available</span>
                </li>
              </ul>
              <Link
                to="/menu"
                className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center"
              >
                Explore Full Menu <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">Don't miss out on our exciting live performances</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-[#e6e67c] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={event.image}
                  alt={event.performer}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-700 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {new Date(event.date).toLocaleDateString('en-ZA', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })} • {event.time}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.performer}</h3>
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">Cover: {event.coverCharge}</span>
                    <Link
                      to="/events"
                      className="text-black font-semibold text-sm hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center"
            >
              View All Events <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#ECEC75]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-black">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your table now and experience the finest dining and entertainment in Polokwane
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Book a Table
            </Link>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
