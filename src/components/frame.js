import React from 'react'
import Overdrive from 'react-overdrive'
import Iframe from 'react-iframe'
import './frame.css'

export default ( props ) => (
  <Overdrive id={props.id.toString()} animationDelay={0} duration={500} style={{display: 'inline-block'}}>

      <div className='image'>
        <Iframe url={props.link}
          width={props.width}
          height={props.height}
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>
      </div>

  </Overdrive>
)
