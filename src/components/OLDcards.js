import React from 'react'
import Modal from '../components/modal';
import './card.css'


const Cards = ({data, children}) => (

    <div className="Cards">
        <h2>Selected Works</h2>
        <div className="CardGroup">
            {data.allContentfulProject.edges.map(edge => (
                <div>
                    <div className={'Card' + edge.node.type}>
                        <img src={'https:' + edge.node.poster.file.url} />
                        <div className="Card-info">
                            <p><span className="Card-label">Client</span><br />{edge.node.client}</p>
                            <p><span className="Card-label">Project</span><br />{edge.node.project}</p>
                            <p><span className="Card-label">Role</span><br />{edge.node.role}</p>
                            <p><span className="Card-label">Tech</span><br />{edge.node.technology}</p>
                        </div>
                    </div>

                    <Modal />
                </div>
            ))}
        </div>
    </div>
)

export default Cards