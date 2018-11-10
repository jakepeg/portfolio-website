import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Card} from '../components/card';
import staticdata from '../../staticdata.json'
import Cell from '../components/cell';
import Header from '../components/header'
import './index.css'
import { Link } from 'gatsby'
import Hero from '../components/hero';
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

				allContentfulProject(
          limit: 3
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



    <div className="Cards">
        <h2>Display Work</h2>
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
              width={edge.node.width}
              height={edge.node.height}
              />
      })}
      </div></div>

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