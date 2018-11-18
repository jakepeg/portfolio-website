import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Card} from '../components/card'
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

				allContentfulProject(
          sort:{ fields: [createdAt], order: ASC }
          ) {
          edges {
            node {
              client
              project
              role
              technology
              link
              id
              width
              height
              type
              poster {
                file {
                  url
                }
              }
              createdAt
              }
          }
        }
      }
    `}
    render={data => (
      <>


        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        {children}


  <Hero />
  <div id="work"> <br /> </div>


    <div className="Cards">
        <h2>Selected Works</h2>

        {/* <Filter /> */}

        <div className="CardGroup">


      <CardWebsite 
          poster="//www.digz.com.au/portfolio/WorkingParty/Aussie/poster.jpg" 
          client="WorkingParty Melbourne"
          project="Aussie Website Redesign"
          role="Frontend Developer"
          technology="HTML5, CSS3, BEM, LESS, JS, GIT, Gulp"
          link="https://www.aussie.com.au/"
        />

      <CardWebsite 
          poster="//www.digz.com.au/portfolio/Clemenger/NAB/creditcards/poster.jpg" 
          client="Clemenger BBDO Melbourne"
          project="NAB Cards Template"
          role="Frontend Developer"
          technology="HTML5, Bootstrap, JADE, LESS, JS, GIT, Gulp"
          link="https://www.nab.com.au/personal/banking/credit-cards"
        />

      <CardWebsite 
          poster="//www.digz.com.au/portfolio/hardwire/esssuper/poster.jpg" 
          client="Hardwire Melbourne"
          project="ESS Super Interactive SVG"
          role="Frontend Developer"
          technology="SVG, JS, GSAP, ScrollMagic"
          link="https://www.esssuper.com.au/investments/investment-approach/investment-approach-tool"
        />

      <CardWebsite 
          poster="//www.digz.com.au/portfolio/AirActive/website/poster.jpg" 
          client="AirActive"
          project="Pomotional Webiste"
          role="Frontend Developer"
          technology="Wordpress"
          link="http://airactiveapp.com"
        />

      <CardWebsite 
          poster="//www.digz.com.au/portfolio/hardwire/meningococcal/poster.jpg" 
          client="Hardwire Melbourne"
          project="GSK Know Meningococcal"
          role="Frontend Developer"
          technology="HTML5, CSS3, BEM, LESS, JS, GIT, Gulp"
          link="https://www.knowmeningococcal.com.au/"
        />

      <CardWebsite 
          poster="//www.digz.com.au/portfolio/Clemenger/NAB/loans/poster.jpg" 
          client="Clemenger BBDO Melbourne"
          project="NAB Loans Template"
          role="Frontend Developer"
          technology="HTML5, Bootstrap, JADE, LESS, JS, GIT, Gulp"
          link="https://www.nab.com.au/personal/loans/personal-loans"
        />
      
      {data.allContentfulProject.edges.map(edge => {
      //const windowGlobal = typeof window !== 'undefined' && window
      //const param = windowGlobal.location.search.slice(1);
      return <Card client={edge.node.client}
              project={edge.node.project}
              role={edge.node.role}
              technology={edge.node.technology}
              poster={edge.node.poster.file.url}
              id={edge.node.id}
              link={edge.node.link}
              createdAt={edge.node.createdAt}
              projecttype={edge.node.type}
              width={edge.node.width}
              height={edge.node.height}
              />
      })}

      </div>
      </div>
      <div id="skills"> <br /> </div>
      <h2>Tools and Skills</h2>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
        <Footer />
      </>
    )}
  />
)

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage