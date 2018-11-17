import React from 'react'
import Chickens from '../components/frame';

class SecondPage extends React.Component{
  render()
  { 
    //const id = this.props.location.search.slice(1);
    const id = this.props.location;
    return(
      <div>
        <Chickens id={id} />
      </div>
    )
  }
}


export default SecondPage