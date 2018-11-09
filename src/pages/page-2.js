import React from 'react'
import { Link } from 'gatsby'
import Chickens from '../components/frame';

class SecondPage extends React.Component{
  render()
  { 
    const id = this.props.location.search.slice(1);
    return(
      <div>
        <Chickens id={id} />
      </div>
    )
  }
}


export default SecondPage