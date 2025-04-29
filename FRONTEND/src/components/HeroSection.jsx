import React, { useEffect } from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  useEffect(() => {
    // Simple animation for elements to fade in
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 300 * index);
    });
  }, []);

  return (
    <section
      className="heroSection min-h-screen relative bg-black"
      id="heroSection"
      style={{
        backgroundImage: `url('/IMGFOOD.jpg')`, // Replace with your actual image path
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
    >
      <Navbar />
      {/* Dark overlay for left side only */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-80"></div>
      
      {/* Main content - positioned to left side where space is available */}
      <div className="container mx-auto relative z-10">
        {/* First Banner section */}
        <div className="banner flex flex-col h-screen">
          <div className="flex flex-col justify-center h-3/5 pl-8 md:pl-16 pt-20">
            <div className="largeBox max-w-lg fade-in">
              {/* Elegant welcome text - gold */}
              <h1
                className="text-sm md:text-base uppercase tracking-wider mb-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.25em",
                  color: "#d4af37",
                }}
              >
                Welcome to
              </h1>
              
              {/* Restaurant name with improved styling and positioning */}
              <div className="restaurant-name-container mb-6">
                <div className="restaurant-title-wrapper flex flex-col items-start">
                  {/* "Bite" text now golden and using same font as Heaven */}
                  <h2
                    className="text-5xl md:text-6xl lg:text-7xl mb-0"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: "700",
                      color: "#d4af37", // Gold color
                      letterSpacing: "0.08em",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                      textTransform: "uppercase",
                      lineHeight: "0.8"
                    }}
                  >
                    Bite
                  </h2>
                  
                  {/* Main "HEAVEN" text below */}
                  <h2
                    className="text-5xl md:text-6xl lg:text-7xl"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: "700",
                      color: "#d4af37", // Gold color
                      letterSpacing: "0.08em",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                      textTransform: "uppercase"
                    }}
                  >
                    Heaven
                  </h2>
                </div>
                
                {/* Refined subtitle */}
                <p 
                  className="text-xs md:text-sm uppercase tracking-widest mt-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#ffffff",
                    letterSpacing: "0.2em"
                  }}
                >
                  Fine Dining Experience
                </p>
              </div>
              
              {/* Elegant divider */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-0.5" style={{ backgroundColor: "#d4af37" }}></div>
                <div className="w-3 h-3 mx-3 rotate-45" style={{ backgroundColor: "#d4af37" }}></div>
                <div className="w-32 h-0.5" style={{ backgroundColor: "#d4af37" }}></div>
              </div>
              
              {/* Enhanced tagline */}
              <p
                className="text-base mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.05em",
                  color: "#d4af37",
                  lineHeight: "1.8"
                }}
              >
                Where every plate tells a story of flavor, finesse, and fine dining.
              </p>
              
              {/* Call to action button */}
              
            </div>
          </div>
          
          {/* Second section - with accent design element */}
          <div className="flex flex-col justify-start h-2/5 pl-8 md:pl-16">
            <div className="textAndLogo fade-in mt-4">
              <div className="flex items-center gap-6 mb-4">
                <div className="h-16 w-0.5" style={{ backgroundColor: "rgba(212, 175, 55, 0.6)" }}></div>
                <p 
                  className="text-sm italic"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: "rgba(255, 255, 255, 0.8)"
                  }}
                >
                  "Culinary excellence in every bite"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple fade-in animation and professional font imports */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
       
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
       
        /* Import professional font selection */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
      `}</style>
    </section>
  );
};

export default HeroSection;