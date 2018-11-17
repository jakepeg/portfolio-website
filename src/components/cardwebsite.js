import React from 'react'
import { Link } from 'gatsby'
import './card.css'

const Cardwebsite = props => (

    <div className="Card" >
        <a href={props.link} target="_blank"><img src={'https:' + props.poster} /></a>
        <div className="Card-info">
            <p><span className="Card-label"><a href={props.link} target="_blank">Client</a></span><br />{props.client}</p>
            <p><span className="Card-label">Project</span><br />{props.project}</p>
            <p><span className="Card-label">Role</span><br />{props.role}</p>
            <p><span className="Card-label">Tech</span><br />{props.technology}</p>
        </div>
    </div>
)

export default Cardwebsite