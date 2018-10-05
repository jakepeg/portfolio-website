import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className='hero'>
      <div className='heroGroup'>
        <h1>Hi, I'm Jake Kemsley</h1>
        <p>a freelance digital <br />designer and developer <br />currently based in <br />Vaud, Switzerland</p>
        <Link to="/page-2/">See my work</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
