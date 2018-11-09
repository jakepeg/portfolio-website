import React from 'react'
import Photo from './frame'
import './newmodal.css'

export default class extends React.Component {

  dismiss (e) {
    if (this._shim === e.target ||
       this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render () {
    if(this.props.id === window.location.search.slice(1)){
      return (
        <div ref={el => (this._shim = el)} className='shim' onClick={(e) => this.dismiss(e)}>
          <div ref={el => (this._photoWrap = el)} className='photo'>
            <Photo {...this.props} />
          </div>
        </div>
      )
    }
    else{
      return null;
    }
  }
}