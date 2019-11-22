import React from 'react'
import { Link } from 'gatsby'
import Wave from './wave'
import './hero.css'
import './cta.css'

const Hero = props => (
  <div className="hero">
    <div className="heroGroup">
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
      <Link className="cta" to="/#work">
        See my work
      </Link>
      <Wave />
    </div>
  </div>
)
export default Hero
