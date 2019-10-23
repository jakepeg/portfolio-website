import React from 'react'
import styled from 'styled-components'
import './footer.css'
import Wave from './wave'

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Footer = props => (
  <div className="footer">
    <WaveTop>
      <Wave />
    </WaveTop>
    <div id="contact">
      <br />
    </div>
    <div className="footerGroup">
      <h2>Hi!</h2>

      <div className="skillz">
        <p className="italica">
          If you're looking for someone with my skills then please drop me a
          line. I'm currently based in St Prex, Switzerland - if you're in the
          area let's hook up for coffee (or a beer)
        </p>
      </div>

      <img alt="Mugshot" src={require('../images/poly-jake.svg')} width="200" />
      <p>
        +41 (0)76 536 2302 <br />
        jakepeg@gmail.com
      </p>
      <div className="Logos">
        <span />
        <a
          aria-label="Link to my Linkedin profile"
          href="https://www.linkedin.com/in/jkemsley/"
        >
          <img
            alt="Linkedin logo"
            src={require('../images/logo-linkedin.svg')}
            width="40"
          />
        </a>
        <a aria-label="Link to Twitter" href="https://twitter.com/On1Digital">
          <img
            alt="Twitter logo"
            src={require('../images/logo-twitter.svg')}
            width="40"
          />
        </a>
        <a
          aria-label="Link to my Instagram profile"
          href="https://www.instagram.com/jakekempo/"
        >
          <img
            alt="Instagram logo"
            src={require('../images/logo-instagram.svg')}
            width="40"
          />
        </a>
        <a
          aria-label="Link to my GIT profile"
          href="https://github.com/jakepeg"
        >
          <img
            alt="GIT logo"
            src={require('../images/logo-git.svg')}
            width="40"
          />
        </a>
        <span />
      </div>
    </div>
  </div>
)

export default Footer
