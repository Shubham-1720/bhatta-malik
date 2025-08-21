import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Clock, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Industrial Area, Sector 15, Faridabad, Haryana 121007"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 98765 43210"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@bhattamalik.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      content: "Mon - Sat: 8:00 AM - 6:00 PM"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Quality Assurance", href: "#quality" },
    { name: "Contact Us", href: "#contact" },
    { name: "Get Quote", href: "#quote" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      href: "https://facebook.com/bhattamalik",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram", 
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/bhattamalik",
      color: "hover:text-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/919876543210",
      color: "hover:text-green-600"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-charcoal text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 brick-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brick-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Bhatta Malik</h3>
                    <p className="text-gray-400 text-sm">Brick Manufacturing</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Building the foundation of tomorrow with superior quality bricks. 
                  Trusted by thousands for over 20 years in the construction industry.
                </p>

                <div className="flex items-center space-x-2 text-brick-light">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">ISO 9001:2015 Certified</span>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-brick-light transition-colors duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h4 className="text-xl font-bold mb-6 text-white">Contact Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-300"
                    >
                      <div className="text-brick-light mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">{info.title}</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700">
          <div className="container-max py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-right"
              >
                <p className="text-gray-400 text-sm">
                  © {currentYear} <span className="text-brick-light font-semibold">Bhatta Malik</span>. 
                  All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Designed with ❤️ for quality construction
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brick-primary to-brick-secondary py-6"
        >
          <div className="container-max">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h4 className="text-xl font-bold mb-1">Ready to Start Your Project?</h4>
                <p className="text-gray-200">Get a free quote for your brick requirements today!</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brick-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
