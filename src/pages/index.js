import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Card } from '../components/card'
import staticdata from '../../staticdata.json'
import Cell from '../components/cell'
import Header from '../components/header'
import './index.css'
import Hero from '../components/hero'
import Footer from '../components/footer'
import styled from 'styled-components'
import CardWebsite from '../components/cardwebsite'

const SectionCellGroup = styled.div`
  max-width: 1160px;
  margin: 0 auto 10px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

// const moreWork = () => {
//   console.log('more work please')
//   let MoreCards = document.querySelector('.MoreCards')
//   let SeeMore = document.querySelector('.SeeMore')
//   MoreCards.classList.remove('Hidden')
//   SeeMore.classList.add('Hidden')
//   //MoreCards.classList.add('MoreCardsVisible')
// }

const IndexPage = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }

        # allContentfulProject(sort: { fields: [createdAt], order: ASC }) {
        #   edges {
        #     node {
        #       client
        #       project
        #       role
        #       technology
        #       link
        #       id
        #       width
        #       height
        #       type
        #       poster {
        #         file {
        #           url
        #         }
        #       }
        #       createdAt
        #     }
        #   }
        # }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
          {/* <script src={'../delaunator.min.js'} />
          <script src={'../delaunator-script.js'} /> */}
        </Helmet>
        <Header />
        {children}

        <Hero />
        <div id="work">
          {' '}
          <br />{' '}
        </div>
        <div className="zContainer">
          <div className="Cards">
            <h2>Selected Works</h2>

            <div className="skillz">
              <p className="italica">
                I’ve built hundreds of digital products over the last 20 years,
                working for creative agencies and start-ups. Here’s a selection
                of projects I’ve worked on
              </p>
            </div>

            {/* <Filter /> */}

            <div className="CardGroup">
              <CardWebsite
                poster="../evooq-poster.jpg"
                client="Evooq Switzerland"
                project="Company Webiste"
                role="Frontend Developer"
                technology="React, Gatsby, Contentful, GIT, Netlify"
                link="https://www.evooq.ch"
              />

              <CardWebsite
                poster="../dootools-poster.jpg"
                client="DooTools"
                project="SAAS Landing Page"
                role="Designer / Developer"
                technology="React, Gatsby, i18next, GIT, Netlify"
                link="https://www.doo.co"
              />

              <CardWebsite
                poster="../demo.png"
                client="Personal"
                project="Parallax demo"
                role="Developer"
                technology="React, React-Spring, Code Snadbox"
                link="https://b6bby.csb.app"
              />

              <CardWebsite
                poster="../discodoo-poster.jpg"
                client="DiscoverDoo"
                project="Directory Website"
                role="Designer / Developer"
                technology="React, NextJS, Express, Node, MongoDB"
                link="https://www.discoverdoo.com"
              />

              <CardWebsite
                poster="../aussie-poster.jpg"
                client="WorkingParty Melbourne"
                project="Aussie Website Redesign"
                role="Frontend Developer"
                technology="HTML5, CSS3, BEM, LESS, JS, GIT, Gulp"
                link="https://www.aussie.com.au/"
              />

              <CardWebsite
                poster="../esssuper-poster.jpg"
                client="Hardwire Melbourne"
                project="ESS Super Interactive SVG"
                role="Developer / Animator"
                technology="SVG, JS, GSAP, ScrollMagic"
                link="https://www.esssuper.com.au/investments/investment-approach/investment-approach-tool"
              />

              <CardWebsite
                poster="../meningococcal-poster.jpg"
                client="Hardwire Melbourne"
                project="GSK Know Meningococcal"
                role="Frontend Developer"
                technology="HTML5, CSS3, LESS, JS, GIT, Gulp"
                link="https://www.knowmeningococcal.com.au/"
              />

              <CardWebsite
                poster="../nab-loans-poster.jpg"
                client="Clemenger BBDO Melbourne"
                project="NAB Loans Template"
                role="Frontend Developer"
                technology="HTML5, Bootstrap, JADE, LESS, JS, GIT, Gulp"
                link="https://www.nab.com.au/personal/loans/personal-loans"
              />

              <Card
                client="MCN Sydney"
                project="Alvin Chipmonks Movie Game"
                role="Developer"
                technology="Javascript, PhaserJS, Sizmek"
                poster="../chipmonks-poster.jpg"
                id="001"
                link="../chipmunks-movie/"
                createdAt="yesterday"
                projecttype="Banner Game"
                width="600"
                height="500"
              />

              {/* <Card
                client="Leo Burnett Melbourne"
                project="Old El Paso Pachanga"
                role="Developer"
                technology="HTML5, CSS, JS, Sizmek"
                poster="../elpasso-poster.jpg"
                id="002"
                link="../pachanga/index.html"
                createdAt="monday"
                projecttype="Banner"
                width="300"
                height="600"
              /> */}

              <Card
                client="Clemenger BBDO Melbourne"
                project="Mercedes Instantly Thrilling"
                role="Developer"
                technology="HTML5, CSS, JS, DoubleClick"
                poster="../mercedes-poster.jpg"
                id="003"
                link="../adrenalin-lightbox/index.html"
                createdAt="tuesday"
                projecttype="Banner"
                width="970"
                height="660"
              />




            </div>
            {/* 
            <div className="SeeMore">
              <Link className="cta" onClick={moreWork} to="/#MoreWork">
                See more work
              </Link>
            </div>

            <div id="MoreWork" className="CardGroup MoreCards Hidden">
              <Card
                client="MCN Sydney"
                project="Twozies Game"
                role="Developer"
                technology="Javascript, HTML5, Sizmek"
                poster="../twozies/poster.jpg"
                id="004"
                link="../twozies/index.html"
                createdAt="yesterday"
                projecttype="Banner Game"
                width="600"
                height="350"
              />

              <Card
                client="MCN Sydney"
                project="McDonalds Footy"
                role="Developer"
                technology="HTML5, CSS, JS, Sizmek"
                poster="../mcdonalds/poster.jpg"
                id="005"
                link="../mcdonalds/index.html"
                createdAt="monday"
                projecttype="Banner"
                width="300"
                height="250"
              />

              <Card
                client="Clemenger BBDO Melbourne"
                project="TAC - How safe is your car"
                role="Developer"
                technology="HTML5, CSS, JS, DoubleClick"
                poster="../tac/poster.jpg"
                id="006"
                link="../tac/index.html"
                createdAt="tuesday"
                projecttype="Banner"
                width="300"
                height="250"
              />

              <Card
                client="Loud and Clear"
                project="VicRoads - ABS"
                role="Developer"
                technology="HTML5, CSS, JS, DoubleClick"
                poster="../vicroads/poster.jpg"
                id="007"
                link="../vicroads/index.html"
                createdAt="tuesday"
                projecttype="Banner"
                width="300"
                height="250"
              />

              <Card
                client="Accelerator Melbourne"
                project="Honda - Starts First TIme"
                role="Developer"
                technology="HTML5, CSS, JS, DoubleClick"
                poster="../honda/poster.jpg"
                id="009"
                link="../honda/index.html"
                createdAt="tuesday"
                projecttype="Banner"
                width="300"
                height="250"
              />

              <Card
                client="Cummins Melbourne"
                project="Specsaves - Designer Glasses"
                role="Developer"
                technology="HTML5, CSS, JS, DoubleClick"
                poster="../specsavers/poster.jpg"
                id="010"
                link="../specsavers/index.html"
                createdAt="tuesday"
                projecttype="Banner"
                width="300"
                height="600"
              />
            </div> */}
          </div>
          <div id="skills">
            {' '}
            <br />{' '}
          </div>
          <h2>Skills</h2>

          <div className="skillz">
            <p className="italica">
              Tons of experience creating scalable, accessible, search
              optimised, secure and blazingly fast websites, apps, SPAs, and PWAs using the following tools
            </p>
          </div>

          <SectionCellGroup>
            {staticdata.cells.map(cell => (
              <Cell title={cell.title} image={cell.image} />
            ))}
          </SectionCellGroup>
          <Footer />
        </div>
      </>
    )}
  />
)

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage