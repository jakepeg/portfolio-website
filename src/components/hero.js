import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion';
import Wave from './wave'
import './hero.css'
import './cta.css'

const buttonVariants = {
  hover: {
    scale: 1.1,
    background: 'rgba(95, 143, 216, 0)',
    transition: {
      duration: 0.8,
      yoyo: 4
    }
  },
  rest: {
    scale: 1,
    background: 'rgba(233, 73, 105, 1)',
    transition: {
      duration: 0.3
    }
  }
}

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2
    }
  }
}

const Hero = props => {
  return (
    <div className="hero">
      <motion.div className="heroGroup"
          variants={heroVariants}
          initial="hidden" 
          animate="visible"
      >
        <h1>
          Jake Kemsley
          <br />
          at your service
        </h1>
        <p>
          creative digital developer
          <br />
          with a zest for
          <br />
          fresh technology
        </p>
        <div>
        <Link to="/#work">
        <motion.div className="cta"
          variants={buttonVariants}
          initial="rest" 
          whileHover="hover" 
          animate="rest"
        >
          SEE MY WORK
        </motion.div>
        </Link>
        </div>
        <Wave />
      </motion.div>
    </div>
  )
}

export default Hero
