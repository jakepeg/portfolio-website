import React from 'react'
import './header.css'
import styled from 'styled-components'

const Banner = styled.style`
    display: ${props => props.bannerProjects ? 'block' : 'none'}
`



class Filter extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
        bannerProjects: true,
        webProjects: true,
        gameProjects: true
      }
    }

    // i'm sure this is not the right way to do this!
  
    handleFilterChange (selectedType) {

        this.setState({ bannerProjects: false });
        this.setState({ webProjects: false });
        this.setState({ gameProjects: false });

        if (selectedType === "wesite") {
            this.setState({ websiteProjects: true });
        } else if (selectedType === "banner") {
            this.setState({ bannerProjects: true });
        } else {
            this.setState({ gameProjects: true });
        }
  }
  
    render() {
        return (
            <div class="filter">
                <a onClick="handleFilterChange('website')">WEBSITES</a>
                <a onClick="handleFilterChange('banner')">BANNERS</a>
                <a onClick="handleFilterChange('game')">GAMES</a>
            </div>
        )
    }
}

export default Filter