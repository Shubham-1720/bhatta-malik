import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "20+ Years Experience",
      description: "Decades of expertise in brick manufacturing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every brick undergoes rigorous quality testing"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted by Thousands",
      description: "Serving customers across the region with excellence"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leaders",
      description: "Setting standards in brick manufacturing industry"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 brick-pattern opacity-30"></div>
      
      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6"
          >
            About <span className="text-gradient">Bhatta Malik</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-brick-primary mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            For over two decades, <strong className="text-brick-primary">Bhatta Malik</strong> has been the cornerstone of 
            quality brick manufacturing in the region. Our commitment to excellence, combined with 
            state-of-the-art manufacturing processes, has earned us the trust of thousands of customers 
            who rely on our products to build their dreams.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(178, 34, 34, 0.1)"
              }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-brick-primary text-white rounded-full mb-6"
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-charcoal mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "20+", label: "Years in Business" },
            { number: "50M+", label: "Bricks Produced" },
            { number: "10K+", label: "Happy Customers" },
            { number: "15+", label: "Product Varieties" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-brick-primary mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              To provide superior quality bricks that form the foundation of strong, durable, and 
              beautiful structures. We are committed to innovation, sustainability, and customer 
              satisfaction in every brick we manufacture.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
