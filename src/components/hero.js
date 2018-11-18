import React from 'react'
import { Link } from 'gatsby'
import Wave from './wave';
import './hero.css'

const Hero = props => (

<div className='hero'>
    <div className='heroGroup'>
        <h1>Jake Kemsley<br />at your service</h1>
        <p>creative digital developer<br />with a zest for<br />fresh technology</p>
        <Link className="Button" to="/#work">See my work</Link>
        {/* <div className="Logos">
            <a href="https://www.linkedin.com/in/jkemsley/"><img src={require('../images/logo-linkedin.svg')} width="40" /></a>
            <a href="https://twitter.com/kempstead"><img src={require('../images/logo-twitter.svg')} width="40" /></a>
            <a href="https://www.instagram.com/jakekempo/"><img src={require('../images/logo-instagram.svg')} width="40" /></a>
            <a href="https://github.com/jakepeg"><img src={require('../images/logo-git.svg')} width="40" /></a>
        </div> */}

  <Wave />

    </div>
</div>
)
export default Hero