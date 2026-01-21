import React from 'react';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#ECEC75] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Our Story
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mamalisa Restaurant has been serving Polokwane with passion, excellence, and unforgettable experiences since our inception.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                A Legacy of Excellence
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with a vision to bring world-class dining and entertainment to Polokwane, Mamalisa Restaurant has become a beloved destination for locals and visitors alike. Our commitment to quality, service, and creating memorable experiences has made us a cornerstone of the community.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By day, we offer an elegant fine dining experience with carefully crafted menus that celebrate both local and international cuisine. As the sun sets, our space transforms into a vibrant entertainment venue, hosting live music performances, celebrity acts, and special events that bring the community together.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our on-site liquor store ensures that our guests can take home their favorite beverages and continue the celebration. We're more than just a restaurant—we're a destination, a gathering place, and a celebration of the vibrant culture of Limpopo.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#e6e67c] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the premier destination in Polokwane for exceptional dining and entertainment, creating unforgettable experiences that bring people together and celebrate the rich culture of our region.
            </p>
          </div>
          <div className="bg-[#e6e67c] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver excellence in every aspect—from the quality of our food and beverages to the warmth of our service and the vibrancy of our entertainment—while fostering a welcoming environment for all.
            </p>
          </div>
        </div>

        {/* What Makes Us Unique */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            What Makes Mamalisa Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award size={40} />,
                title: "Award-Winning Cuisine",
                description: "Our chefs have received recognition for their innovative dishes and commitment to quality"
              },
              {
                icon: <Users size={40} />,
                title: "Community Hub",
                description: "A gathering place where locals and visitors come together to celebrate life"
              },
              {
                icon: <Heart size={40} />,
                title: "Passionate Service",
                description: "Our team is dedicated to making every visit memorable with warm, attentive service"
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Constantly Evolving",
                description: "We continuously update our menu and entertainment lineup to exceed expectations"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-black mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Venue */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "'Crimson Text', serif" }}>
            Our Venue
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?q=85"
                alt="Venue interior"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our beautifully designed space offers a versatile environment that adapts to the time of day and occasion. With elegant décor, state-of-the-art sound and lighting systems, and comfortable seating arrangements, we create the perfect atmosphere for any experience.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2 font-bold">•</span>
                  <span><strong>Seating Capacity:</strong> Up to 150 guests in our main dining area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2 font-bold">•</span>
                  <span><strong>Private Dining:</strong> Exclusive spaces available for special events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2 font-bold">•</span>
                  <span><strong>Entertainment Stage:</strong> Professional setup for live performances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2 font-bold">•</span>
                  <span><strong>Event Hosting:</strong> Corporate functions, weddings, and private parties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-[#e6e67c] rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            Our Team
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Behind every exceptional experience at Mamalisa is a dedicated team of professionals who are passionate about hospitality. From our award-winning chefs to our friendly service staff, entertainment coordinators to our liquor specialists, every team member plays a vital role in creating the magic that is Mamalisa.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe in nurturing talent, fostering creativity, and maintaining the highest standards of professionalism. Our team's commitment to excellence is what makes every visit to Mamalisa truly special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
