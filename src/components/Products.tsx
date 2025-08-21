import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Products: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const products = [
    {
      id: 1,
      title: "Red Clay Bricks",
      description: "Standard red clay bricks perfect for traditional construction. High strength and excellent thermal properties.",
      size: "230mm x 110mm x 70mm",
      strength: "3.5 N/mm²",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Fly Ash Bricks",
      description: "Eco-friendly bricks made from fly ash. Lightweight with superior thermal insulation properties.",
      size: "230mm x 110mm x 70mm",
      strength: "4.0 N/mm²",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Hollow Bricks",
      description: "Lightweight hollow bricks ideal for modern construction. Excellent thermal and acoustic insulation.",
      size: "400mm x 200mm x 200mm",
      strength: "3.0 N/mm²",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Fire Bricks",
      description: "Heat-resistant fire bricks perfect for furnaces, kilns, and fireplace construction.",
      size: "230mm x 110mm x 65mm",
      strength: "20 N/mm²",
      image: "https://images.unsplash.com/photo-1574762499149-3b24b51b6b0f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Concrete Blocks",
      description: "High-strength concrete blocks for structural applications. Durable and weather-resistant.",
      size: "390mm x 190mm x 190mm",
      strength: "5.0 N/mm²",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=300&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section id="products" ref={ref} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <div className="w-24 h-1 bg-brick-primary mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality bricks and blocks, 
            each crafted to meet specific construction needs and standards.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(178, 34, 34, 0.15)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-brick-light group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Product Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute top-4 right-4 bg-brick-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  #{product.id}
                </motion.div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-2xl font-bold text-charcoal mb-3 group-hover:text-brick-primary transition-colors duration-300"
                >
                  {product.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-gray-600 mb-4 leading-relaxed"
                >
                  {product.description}
                </motion.p>

                {/* Product Specifications */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="space-y-2 mb-6"
                >
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Size:</span>
                    <span className="text-charcoal font-semibold">{product.size}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Strength:</span>
                    <span className="text-charcoal font-semibold">{product.strength}</span>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="flex gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-brick-primary hover:bg-brick-secondary text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 hover:bg-gray-200 text-charcoal font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Details
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brick-primary to-brick-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              We offer customized brick solutions tailored to your specific project requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brick-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Our Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
