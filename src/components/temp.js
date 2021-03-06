
import React from 'react'
import styled from 'styled-components'

const showModalStyle = styled.div`
  display: block;
`

const hideModalStyle = styled.div`
  display: none;
`

class Modal extends React.Component {
  state = { visible: true }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  showModal = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
        <div className={this.state.visible ? 'showModalStyle' : 'hideModalStyle'}>

                        <Iframe url={edge.node.link}
                            width={edge.node.width}
                            height={edge.node.height}
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                            allowFullScreen/>

        </div>
      </div>
    );
  }
}

export default Modal