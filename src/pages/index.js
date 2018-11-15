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
// import Filter from '../components/filter'
import Footer from '../components/footer'
import styled from 'styled-components'
import Wave from '../components/wave';

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
          limit: 30
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
      {data.allContentfulProject.edges.map(edge => {
      const param = window.location.search.slice(1);
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
      </div></div>
      <div id="skills"> <br /> </div>
      <h2>Tools and Skills</h2>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
        <Wave />
        <Footer />
      </>
    )}
  />
)

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage