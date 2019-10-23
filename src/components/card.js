import React from 'react'
import './card.css'
import Modal from '../components/newmodal'
import { navigate } from 'gatsby'
import Overdrive from 'react-overdrive'

class Card extends React.Component {
  dismissModal() {
    navigate('/')
  }

  showPhoto(e, id) {
    e.preventDefault()
    navigate(`/?${id}`, `/page-2/?${id}`)
  }

  render() {
    const windowGlobal = typeof window !== 'undefined' && window
    //const urlID = windowGlobal.location.search.slice(1);
    const urlID = windowGlobal.location
    console.log(urlID)
    return (
      <div className="cardBanner">
        {urlID && (
          <Modal
            width={this.props.width}
            height={this.props.height}
            link={this.props.link}
            createdAt={this.props.createdAt}
            id={this.props.id}
            onDismiss={() => this.dismissModal()}
          />
        )}

        <Overdrive
          key={this.props.id}
          id={this.props.id.toString()}
          animationDelay={1}
          style={{ display: 'inline-block' }}
        >
          <div
            className={'Card ' + this.props.projecttype}
            onClick={e => this.showPhoto(e, this.props.id)}
          >
            {/* <img src={'https:' + this.props.poster} /> */}
            <img src={this.props.poster} alt={this.props.technology} />
            <div className="Card-info">
              <p>
                <span className="Card-label">Client</span>
                <br />
                {this.props.client}
              </p>
              <p>
                <span className="Card-label">Project</span>
                <br />
                {this.props.project}
              </p>
              <p>
                <span className="Card-label">Role</span>
                <br />
                {this.props.role}
              </p>
              <p>
                <span className="Card-label">Tech</span>
                <br />
                {this.props.technology}
              </p>
            </div>
          </div>
        </Overdrive>
      </div>
    )
  }
}

export { Card }
