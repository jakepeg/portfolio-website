import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/gatsby-icon.png')} width="30" /></Link>
    <Link to="/courses">Portfolio</Link>
    <Link to="/downloads">Toolbox</Link>
    <Link to="/workshops">Contact</Link>
    <Link to="/buy"><button>Hire Me</button></Link>
  </div>
</div>
)

export default Header
