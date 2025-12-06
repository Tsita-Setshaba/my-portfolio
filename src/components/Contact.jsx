
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // This is frontend only - will be connected to backend later
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#1e2a38]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg">Let's work together on your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-[#2c3e50] border-none p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e91e63] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-gray-300">tsitasettshaba@gmail.com</p>
              </div>
            </Card>

            <Card className="bg-[#2c3e50] border-none p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e91e63] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <p className="text-gray-300">+2779-274-3603</p>
              </div>
            </Card>

            <Card className="bg-[#2c3e50] border-none p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e91e63] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-gray-300">Polokwane, South Africa</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#2c3e50] border-none p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1a2332] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#e91e63]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1a2332] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#e91e63]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-[#1a2332] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#e91e63]"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#1a2332] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#e91e63] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#e91e63] hover:bg-[#c2185b] text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#e91e63]/50"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
