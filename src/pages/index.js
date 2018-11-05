import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Cards from '../components/cards';
import staticdata from '../../staticdata.json'
import Cell from '../components/cell';
import Header from '../components/header'
import './index.css'
import { Link } from 'gatsby'
import Wave from '../components/wave';
import styled from 'styled-components'

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
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
				allContentfulProject(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              client
              project
              role
              technology
              link  
              poster {
                file {
                  url
                }
              }
              createdAt
              width
              height
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


    <div className='hero'>
      <div className='heroGroup'>
        <h1>Hi, I'm Jake Kemsley</h1>
        <p>a freelance digital <br />designer and developer <br />currently based in <br />Vaud, Switzerland</p>
        <Link to="/page-2/">See my work</Link>


        <div className="Logos">
          <img src={require('../images/logo-git.svg')} width="40" />
          <img src={require('../images/logo-behance.svg')} width="40" />
          <img src={require('../images/logo-codepen.svg')} width="40" />
          <img src={require('../images/logo-linkedin.svg')} width="40" />
          <img src={require('../images/logo-twitter.svg')} width="40" />
          <img src={require('../images/logo-instagram.svg')} width="40" />
        </div>

        <Wave />
      </div>
    </div>

        <Cards data={data} />

      <h2>Tools and Skills</h2>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
      </>
    )}
  />
)

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage