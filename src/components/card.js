import React from 'react'
import './card.css'

const Card = props => (
    <div className="Card">
        {/* <img src={props.image} /> */}
        <div className="Card-info">
            <p><span className="Card-label">Client</span><br />{props.client}</p>
            <p><span className="Card-label">Project</span><br />{props.project}</p>
            <p><span className="Card-label">Role</span><br />{props.role}</p>
            <p><span className="Card-label">Tech</span><br />{props.technology}</p>
        </div>>
    </div>
)

export default Card