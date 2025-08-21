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
    console.log('WhatsApp button clicked');
    const phoneNumber = "+916388773206";
    const message = "Hi! I'm interested in your brick products. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    console.log('Opening WhatsApp URL:', whatsappUrl);
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    console.log('Phone button clicked');
    const phoneUrl = "tel:+916388773206";
    console.log('Opening phone URL:', phoneUrl);
    window.location.href = phoneUrl;
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
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
            
            {/* Pulsing Ring Animation for WhatsApp */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-500 pointer-events-none -z-10"
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
            className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50"
          >
            <motion.button
              onClick={handlePhoneClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
              title="Call Now"
            >
              <Phone size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
            
            {/* Pulsing Ring Animation for Call */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500 pointer-events-none -z-10"
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
