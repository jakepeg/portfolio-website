import React from 'react'
import './grid.css'
import Overdrive from 'react-overdrive'
import Modal from '../components/newmodal'
import { navigate } from 'gatsby';
 
export default class extends React.Component {
  // static getInitialProps () {
  //   return {
  //     photos: new Array(10).fill(0).map((v, k) => k + 1)
  //   }
  // }

  // constructor (props) {
  //   super(props)
  //   this.onKeyDown = this.onKeyDown.bind(this)
  // }

  // handling escape close
  // componentDidMount () {
  //   document.addEventListener('keydown', this.onKeyDown)
  // }

  // componentWillUnmount () {
  //   document.removeEventListener('keydown', this.onKeyDown)
  // }

  // onKeyDown (e) {
  //   if (!this.props.url.query.photoId) return
  //   if (e.keyCode === 27) {
  //     this.props.url.back()
  //   }
  // }

  dismissModal () {
    navigate('/grid');
  }

  showPhoto (e, id) {
    e.preventDefault()
    // Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
    navigate(`/grid/?${id}` , `/page-2/?${id}`);
  }

  render () {
    // console.log(this.props);
    // const { url, photos } = this.props
    const urlID = this.props.location.search.slice(1);
    const id = "test2";

    return (
      <div className='list'>
        {
          urlID &&
            <Modal
              id={urlID}
              client="MCN Sydney"
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          <Overdrive key={id} id={id.toString()} animationDelay={1} style={{display: 'inline-block'}}>
            <div className='photo'>
              <h1>HELLO</h1>
              <a
                className='photoLink'
                href={`/page-2/?${id}`}
                onClick={(e) => this.showPhoto(e, id)}
              >
                {id}
              </a>
            </div>
          </Overdrive>
        }
      </div>
    )
  }
}
