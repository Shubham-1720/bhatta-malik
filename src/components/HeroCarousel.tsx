import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder brick manufacturing images
  const heroImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
      alt: 'Brick Manufacturing Process',
      title: 'Premium Quality Bricks',
      subtitle: 'Manufactured with precision and care'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop',
      alt: 'Red Clay Bricks',
      title: 'Traditional Red Clay Bricks',
      subtitle: 'Time-tested strength and durability'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop',
      alt: 'Brick Wall Construction',
      title: 'Expert Craftsmanship',
      subtitle: 'Building foundations that last'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop',
      alt: 'Brick Production Line',
      title: 'Modern Production Facility',
      subtitle: 'State-of-the-art manufacturing process'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1920&h=1080&fit=crop',
      alt: 'Finished Brick Products',
      title: 'Quality Assurance',
      subtitle: 'Every brick meets our high standards'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-4 text-gray-200"
            >
              {heroImages[currentSlide].subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {currentSlide === 0 ? (
                <>
                  Trusted Brick Manufacturer{' '}
                  <span className="text-brick-light">for 20+ Years</span>
                </>
              ) : (
                heroImages[currentSlide].title
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
            >
              {currentSlide === 0 
                ? "Delivering Quality Bricks with Strength & Durability"
                : "Building the foundation of tomorrow with superior quality and craftsmanship"
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToProducts}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                View Products
              </motion.button>
              
              <motion.button
                onClick={() => scrollToProducts()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Pagination Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brick-primary scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
