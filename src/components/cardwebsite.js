import React from 'react'
import { Link } from 'gatsby'
import './card.css'

const Cardwebsite = props => (
  <div className="Card">
    <img src={props.poster} />
    <a href={props.link} target="_blank">
      <div className="Card-info">
        <p>
          <span className="Card-label">Client</span>
          <br />
          {props.client}
        </p>
        <p>
          <span className="Card-label">Project</span>
          <br />
          {props.project}
        </p>
        <p>
          <span className="Card-label">Role</span>
          <br />
          {props.role}
        </p>
        <p>
          <span className="Card-label">Tech</span>
          <br />
          {props.technology}
        </p>
      </div>
    </a>
  </div>
)

export default Cardwebsite
