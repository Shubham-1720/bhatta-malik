import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+916388773206";
    const message = "Hi! I'm interested in your brick products. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+916388773206";
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0, y: 100 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* WhatsApp Button - Right Corner */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.1 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={24} />
            </motion.button>
            
            {/* Pulsing Ring Animation for WhatsApp */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Call Button - Left Corner */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.2 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <motion.button
              onClick={handlePhoneClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              title="Call Now"
            >
              <Phone size={24} />
            </motion.button>
            
            {/* Pulsing Ring Animation for Call */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
