import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="relative z-20 flex justify-between items-center w-full px-6 md:px-16 py-6">
      {/* Logo */}
      <div className="logo">
        <h1 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: "#FFD700",
            fontWeight: "700",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
          }}
        >
          BiteHeaven
        </h1>
      </div>

      {/* Navigation Links - Important: z-20 and higher opacity for visibility */}
      <div className={`navLinks ${showMenu ? "showmenu" : ""} z-20`}>
        <div className="links">
          <a 
            href="#home" 
            style={{ 
              color: "#FFD700", 
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              fontWeight: "500"
            }}
          >
            Home
          </a>
          <a 
            href="#menu" 
            style={{ 
              color: "#FFD700", 
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              fontWeight: "500"
            }}
          >
            Menu
          </a>
          <a 
            href="#about" 
            style={{ 
              color: "#FFD700", 
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              fontWeight: "500"
            }}
          >
            About
          </a>
          <a 
            href="#contact" 
            style={{ 
              color: "#FFD700", 
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              fontWeight: "500"
            }}
          >
            Contact
          </a>
        </div>
        <button 
          className="menuBtn hover:bg-amber-700 transition-all duration-300"
          style={{ 
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#FFD700", 
            borderColor: "#FFD700",
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          Book Now
        </button>
      </div>

      {/* Hamburger Icon */}
      <div 
        className="hamburger cursor-pointer z-30" 
        onClick={() => setShowMenu(!showMenu)}
      >
        <Menu color="#FFD700" size={32} />
      </div>

      {/* Additional CSS for navigation elements */}
      <style jsx>{`
        .navLinks {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .links {
          display: flex;
          gap: 35px;
        }
        
        .links a {
          text-decoration: none;
          font-size: 18px;
          letter-spacing: 1.4px;
          position: relative;
          padding-bottom: 5px;
          transition: all 0.3s ease;
        }
        
        .links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #FFD700;
          transition: width 0.3s ease;
        }
        
        .links a:hover::after {
          width: 100%;
        }
        
        .menuBtn {
          padding: 10px 25px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-left: 35px;
        }
        
        .menuBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
        }
        
        .hamburger {
          display: none;
        }
        
        @media (max-width: 1100px) {
          .hamburger {
            display: flex;
          }
          
          .navLinks {
            position: absolute;
            flex-direction: column;
            top: -100%;
            background: rgba(0, 0, 0, 0.9);
            width: 100%;
            left: 0;
            padding: 25px 20px;
            transition: 0.3s;
            opacity: 0;
            visibility: hidden;
          }
          
          .showmenu {
            position: absolute;
            flex-direction: column;
            top: 80px;
            background: rgba(0, 0, 0, 0.9);
            width: 100%;
            left: 0;
            padding: 25px 20px;
            transition: 0.3s;
            opacity: 1;
            visibility: visible;
            border-top-right-radius: 7px;
            border-top-left-radius: 7px;
          }
          
          .links {
            flex-direction: column;
            text-align: center;
            margin-bottom: 20px;
          }
          
          .menuBtn {
            margin: 10px auto 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;