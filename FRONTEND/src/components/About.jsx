import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FaUtensils, FaCocktail, FaClock } from "react-icons/fa";

const About = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewItems, setPreviewItems] = useState([]);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Items");

  // Sample menu preview items
  useEffect(() => {
    setPreviewItems([
      {
        id: 1,
        name: "Truffle Risotto",
        category: "Main Course",
        description: "Creamy arborio rice with black truffle and parmesan",
        image: "/truffle-risotto.jpg" // FIXED PATH
      },
      {
        id: 2,
        name: "Seafood Paella",
        category: "Signature Dish",
        description: "Traditional Spanish rice with fresh seafood selection",
        image: "/seafood-paella.jpg" // FIXED PATH
      },
      {
        id: 3,
        name: "Chocolate Soufflé",
        category: "Dessert",
        description: "Light and airy chocolate dessert with vanilla cream",
        image: "/tt.jpg" // FIXED PATH
      }
    ]);
  }, []);

  // Full menu items for the popup - FIXED IMAGE PATHS
  const fullMenuItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      category: "Main Course",
      price: "$28",
      description: "Creamy arborio rice with black truffle and parmesan",
      image: "/truffle-risotto.jpg"
    },
    {
      id: 2,
      name: "Seafood Paella",
      category: "Signature Dish",
      price: "$32",
      description: "Traditional Spanish rice with fresh seafood selection",
      image: "/seafood-paella.jpg"
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      category: "Dessert",
      price: "$14",
      description: "Light and airy chocolate dessert with vanilla cream",
      image: "/tt.jpg"
    },
    {
      id: 4,
      name: "Filet Mignon",
      category: "Main Course",
      price: "$38",
      description: "Premium cut beef with red wine reduction and roasted vegetables",
      image: "/dd.jpg" // FIXED PATH
    },
    {
      id: 5,
      name: "Mediterranean Mezze",
      category: "Appetizer",
      price: "$18",
      description: "Selection of hummus, baba ganoush, and fresh pita",
      image: "/pp.jpg" // FIXED PATH
    },
    {
      id: 6,
      name: "Tiramisu",
      category: "Dessert",
      price: "$12",
      description: "Classic Italian dessert with espresso and mascarpone",
      image: "/oo.jpg" // FIXED PATH
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textReveal = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: 0.15 * i,
        duration: 0.5
      }
    })
  };

  const previewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4
      }
    }),
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  // Icon features
  const features = [
    {
      icon: <FaUtensils />,
      title: "Culinary Excellence",
      description: "Award-winning chefs creating memorable dishes"
    },
    {
      icon: <FaCocktail />,
      title: "Unique Experience",
      description: "Unforgettable ambiance and exceptional service"
    },
    {
      icon: <FaClock />,
      title: "Traditional Methods",
      description: "Time-honored recipes with modern execution"
    }
  ];

  // Modal animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filter menu items based on selected category
  const filteredMenuItems = selectedCategory === "All Items" 
    ? fullMenuItems 
    : fullMenuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="about relative min-h-screen w-full overflow-hidden bg-black py-16" id="about">
      {/* Background image with overlay - FIXED IMAGE PATH */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/yy.jpg')",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Main content container - centered */}
      <div className="container relative z-10 mx-auto px-8 flex flex-col items-center justify-center text-center h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl py-12"
        >
          {/* Small header text */}
          <motion.p
            variants={fadeIn}
            className="text-sm tracking-widest uppercase font-light mb-4 text-gray-400"
            style={{
              letterSpacing: "0.25em",
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            ABOUT DJAEN
          </motion.p>
          
          {/* Main heading with elegant typography */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-light mb-8 md:mb-12 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#d4af37", // Gold color
              letterSpacing: "0.02em",
              lineHeight: "1.1"
            }}
          >
            Serving Great-Tasting Food Since 1991
          </motion.h1>
          
          {/* Main paragraph text */}
          <motion.div
            custom={2}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="space-y-4 md:space-y-6 mb-8 md:mb-12"
          >
            <p 
              className="text-gray-300 leading-relaxed"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "1.05rem"
              }}
            >
              At Bite Heaven, we believe every bite should feel like a little piece of heaven.
              What started as a passion has now become our purpose — to serve dishes that not only 
              satisfy hunger but bring joy to our valued guests.
            </p>
            
            <p 
              className="text-gray-300 leading-relaxed"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "1.05rem"
              }}
            >
              Our team is committed to crafting meals with love, exceptional flavor, and an 
              unwavering dedication to quality. From our kitchen to your table, we bring 
              you culinary excellence that has stood the test of time.
            </p>
          </motion.div>
          
          {/* Feature icons section */}
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.2) }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-2xl mb-3 text-gold p-3 rounded-full border border-gold"
                  style={{ color: "#d4af37", borderColor: "#d4af37" }}
                >
                  {feature.icon}
                </motion.div>
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ 
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#f0f0f0"
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced CTA Button with elegant styling */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-block"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            <button
              onClick={() => setShowFullMenu(true)}
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-transparent py-4 px-8 transition-all duration-300"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                letterSpacing: "0.1em"
              }}
            >
              {/* Background fill animation */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"
                style={{ backgroundColor: "#d4af37" }}
              />
              
              {/* Button border */}
              <span
                className="absolute inset-0 border border-gold z-10 rounded-2xl transition-all duration-300 group-hover:rounded-xl"
                style={{ borderColor: "#d4af37" }}
              />
              
              {/* Button text and icon */}
              <span className="relative z-20 text-gold group-hover:text-black transition-colors duration-300" 
                style={{ color: "#d4af37" }}>
                EXPLORE MENU
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-20 text-gold group-hover:text-black transition-colors duration-300"
                style={{ color: "#d4af37" }}
              >
                <HiOutlineArrowRight />
              </motion.span>
            </button>
          </motion.div>
          
          {/* Menu Preview Panel */}
          <AnimatePresence>
            {showPreview && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, height: 0 },
                  visible: { 
                    opacity: 1, 
                    height: 'auto',
                    transition: { duration: 0.3, staggerChildren: 0.1 }
                  },
                  exit: { 
                    opacity: 0, 
                    height: 0,
                    transition: { duration: 0.2 }
                  }
                }}
                className="mt-8 bg-black bg-opacity-80 p-6 rounded-lg border border-gray-800"
              >
                <h3 className="text-lg font-medium mb-4 text-gold"
                  style={{ color: "#d4af37", fontFamily: "'Montserrat', sans-serif" }}>
                  Preview Our Signature Dishes
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {previewItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      custom={index + 1}
                      variants={previewVariants}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setShowFullMenu(true)}
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                        {/* PREVIEW ITEM IMAGE - FIXED */}
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-3">
                        <span className="text-xs text-gold mb-1" 
                          style={{ color: "#d4af37" }}>
                          {item.category}
                        </span>
                        <h4 className="text-white font-medium">{item.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button 
                    onClick={() => setShowFullMenu(true)}
                    className="text-sm text-gold hover:underline"
                    style={{ color: "#d4af37" }}
                  >
                    View Full Menu →
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-gray-700"
        />
      </motion.div>
      
      {/* Full Menu Modal */}
      <AnimatePresence>
        {showFullMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="bg-black border border-gold/30 rounded-lg p-8 max-w-4xl w-full max-h-screen overflow-y-auto m-4"
              style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 
                  className="text-3xl font-light"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#d4af37"
                  }}
                >
                  Our Menu
                </h2>
                <button 
                  onClick={() => setShowFullMenu(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                >
                  ✕
                </button>
              </div>
              
              {/* Menu category tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button 
                  onClick={() => handleCategorySelect("All Items")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === "All Items" 
                      ? "bg-gold text-black" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === "All Items" ? "#d4af37" : "",
                    fontFamily: "'Montserrat', sans-serif" 
                  }}
                >
                  All Items
                </button>
                <button 
                  onClick={() => handleCategorySelect("Appetizer")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === "Appetizer" 
                      ? "bg-gold text-black" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === "Appetizer" ? "#d4af37" : "",
                    fontFamily: "'Montserrat', sans-serif" 
                  }}
                >
                  Appetizers
                </button>
                <button 
                  onClick={() => handleCategorySelect("Main Course")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === "Main Course" 
                      ? "bg-gold text-black" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === "Main Course" ? "#d4af37" : "",
                    fontFamily: "'Montserrat', sans-serif" 
                  }}
                >
                  Main Course
                </button>
                <button 
                  onClick={() => handleCategorySelect("Signature Dish")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === "Signature Dish" 
                      ? "bg-gold text-black" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === "Signature Dish" ? "#d4af37" : "",
                    fontFamily: "'Montserrat', sans-serif" 
                  }}
                >
                  Signature Dishes
                </button>
                <button 
                  onClick={() => handleCategorySelect("Dessert")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === "Dessert" 
                      ? "bg-gold text-black" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === "Dessert" ? "#d4af37" : "",
                    fontFamily: "'Montserrat', sans-serif" 
                  }}
                >
                  Desserts
                </button>
              </div>
              
              {/* Menu items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gold/50 transition-colors group"
                    style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}
                  >
                    <div className="h-48 bg-gray-800 relative overflow-hidden">
                      {/* MENU ITEM IMAGE - FIXED */}
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div 
                        className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium"
                        style={{ backgroundColor: "#d4af37", color: "#000" }}
                      >
                        {item.price}
                      </div>
                    </div>
                    <div className="p-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      <span 
                        className="text-xs block mb-1"
                        style={{ color: "#d4af37" }}
                      >
                        {item.category}
                      </span>
                      <h3 
                        className="text-lg font-medium mb-2"
                        style={{ color: "#f0f0f0" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                      <button 
                        className="mt-4 flex items-center text-sm hover:text-gold transition-colors"
                        style={{ color: "#d4af37" }}
                      >
                        Order Now <HiOutlineArrowRight className="ml-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Special offers */}
              <div 
                className="mt-12 p-6 border border-dashed rounded-lg text-center"
                style={{ borderColor: "rgba(212, 175, 55, 0.4)", backgroundColor: "#000" }}
              >
                <h3 
                  className="text-xl mb-2"
                  style={{ color: "#d4af37", fontFamily: "'Playfair Display', serif" }}
                >
                  Special Offer
                </h3>
                <p 
                  className="mb-4"
                  style={{ color: "#f0f0f0", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Book a table now and receive a complimentary welcome drink!
                </p>
                <button 
                  className="px-6 py-3 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: "#d4af37", 
                    color: "#000",
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  Reserve Now
                </button>
              </div>
              
              {/* Close button at bottom */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowFullMenu(false)}
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Close Menu <span className="ml-2">✕</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Add custom styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -468px 0 }
          100% { background-position: 468px 0 }
        }
        
        .aspect-w-16 {
          position: relative;
          padding-bottom: 56.25%;
        }
        
        .aspect-h-9 {
          position: relative;
        }
        
        .aspect-w-16 > *, .aspect-h-9 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        
        .bg-gold {
          background-color: #d4af37;
        }
        
        .text-gold {
          color: #d4af37;
        }
        
        .border-gold {
          border-color: #d4af37;
        }
      `}</style>
    </section>
  );
};

export default About;