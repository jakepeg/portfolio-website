import React from 'react'
import { Link } from 'gatsby'
import Wave from './wave';
import './hero.css'

const Hero = props => (

<div className='hero'>
    <div className='heroGroup'>
        <h1>Jake Kemsley <br />at your service</h1>
        <p>creative digital developer <br />with a passion for <br />modern technology</p>
        <Link to="/">See my work</Link>
        <div className="Logos">
            {/* <img src={require('../images/logo-behance.svg')} width="40" /> */}
            {/* <img src={require('../images/logo-codepen.svg')} width="40" /> */}
            <img src={require('../images/logo-linkedin.svg')} width="40" />
            <img src={require('../images/logo-twitter.svg')} width="40" />
            <img src={require('../images/logo-instagram.svg')} width="40" />
            <img src={require('../images/logo-git.svg')} width="40" />
        </div>

  <Wave />

    </div>
</div>



)
export default Hero