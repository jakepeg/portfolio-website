import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
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
                poster="../aussie-poster.jpg"
                client="WorkingParty Melbourne"
                project="Aussie Website Redesign"
                role="Frontend Developer"
                technology="HTML5, CSS3, BEM, LESS, JS, GIT, Gulp"
                link="https://www.aussie.com.au/"
              />

              <CardWebsite
                poster="../nab-cards-poster.jpg"
                client="Clemenger BBDO Melbourne"
                project="NAB Cards Template"
                role="Frontend Developer"
                technology="HTML5, Bootstrap, JADE, LESS, JS, GIT, Gulp"
                link="https://www.nab.com.au/personal/banking/credit-cards"
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

              <Card
                client="Leo Burnett Melbournne"
                project="Old El Paso Pachanga"
                role="Developer"
                technology="HTML5, CSS, JS, Sizmek"
                poster="../elpasso-poster.jpg"
                id="002"
                link="../pachanga/index.html"
                createdAt="monnday"
                projecttype="Banner"
                width="300"
                height="600"
              />

              <Card
                client="Clemenger BBDO Melbournne"
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
          </div>
          <div id="skills">
            {' '}
            <br />{' '}
          </div>
          <h2>Skills</h2>

          <div className="skillz">
            <p className="italica">
              Tons of experience creating scalable, accessible, search
              optimised, secure and blazingly fast (JAMStack) websites, apps,
              EDM’s and rich media banners using the following tools
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
