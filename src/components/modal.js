import React from 'react'
import './card.css'
import Iframe from 'react-iframe'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false
        }
    }

    showModal = () => {
      this.setState({
        visible: true
      });
    }
  
    hideModal = () => {
      this.setState({
        visible: false
      });
    }

    render() {
        return (
            <div className={this.state.visible ? 'showModalStyle' : 'hideModalStyle'}>
                <Iframe url={this.props.link}
                        width={this.props.width}
                        height={this.props.height}
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
            </div>
        );
    }
}

export default Modal