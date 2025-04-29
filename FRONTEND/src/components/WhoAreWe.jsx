import React from 'react';
import { data } from '../../src/restApi.json';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
  // Animation variants for numbers
  const numberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
      }
    }
  };

  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <motion.div 
            className="text_banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {
              data[0].who_we_are.slice(0,2).map(element => (
                <motion.div 
                  className="card" 
                  key={element.id}
                  variants={cardVariants}
                >
                  <motion.h1 
                    className='heading' 
                    style={{fontWeight: "300"}}
                    variants={numberVariants}
                  >
                    {element.number}
                  </motion.h1>
                  <motion.p
                    variants={textVariants}
                  >
                    {element.title}
                  </motion.p>
                </motion.div>
              ))
            }
          </motion.div>

          <div className="image_banner">
            <img className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img src="bb.png" alt="food" />
          </div>

          <motion.div 
            className="text_banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {
              data[0].who_we_are.slice(2).map(element => (
                <motion.div 
                  className="card" 
                  key={element.id}
                  variants={cardVariants}
                >
                  <motion.h1 
                    className='heading' 
                    style={{fontWeight: "300"}}
                    variants={numberVariants}
                  >
                    {element.number}
                  </motion.h1>
                  <motion.p
                    variants={textVariants}
                  >
                    {element.title}
                  </motion.p>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </section> 
    </>
  );
};

export default WhoAreWe;