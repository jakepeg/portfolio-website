import React from 'react'
import styled from 'styled-components'
import './footer.css'
import Wave from './wave';

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const Footer = props => (
    <div className='footer'>
        <WaveTop><Wave /></WaveTop>
        <div id="contact"><br /></div>
        <div className='footerGroup'>
            <p>Say Hi!</p>
            <p>+41 (0)76 536 2302 <br />hello@jakekemsley.com</p>
            <div className="Logos">
                <a href="https://www.linkedin.com/in/jkemsley/"><img src={require('../images/logo-linkedin.svg')} width="40" /></a>
                <a href="https://twitter.com/kempstead"><img src={require('../images/logo-twitter.svg')} width="40" /></a>
                <a href="https://www.instagram.com/jakekempo/"><img src={require('../images/logo-instagram.svg')} width="40" /></a>
                <a href="https://github.com/jakepeg"><img src={require('../images/logo-git.svg')} width="40" /></a>
            </div>
        </div>
    </div>
)

export default Footer