import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card';
import Section from '../components/section';
import Wave from '../components/wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

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

const IndexPage = () => (
  <Layout>
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

      <div className="Cards">
      
          <h2>Selected Works</h2>
          <div className="CardGroup">
            <Card 
            client="Clemenger BBDO"
            project="Mercedes New A Class"
            role="Developer"
            technology="HTML5 CSS"
            image={require('../images/poster.jpg')} />
            <Card 
            client="Clemenger BBDO"
            project="Mercedes New A Class"
            role="Developer"
            technology="HTML5 CSS"
            image={require('../images/backup.jpg')} />
            <Card 
            client="Clemenger BBDO"
            project="Mercedes New A Class"
            role="Developer"
            technology="HTML5 CSS"
            image={require('../images/nab.jpg')} />
      </div>
      </div>

      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." 

        />

      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>


    </div>
  </Layout>
)
export default IndexPage