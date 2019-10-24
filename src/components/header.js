import React from 'react'
import { Link } from 'gatsby'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              alt="Jake Kemsley Logo"
              src={require('../images/jk-logo.svg')}
              width="40"
            />
          </Link>
          <nav className="actions">
            <Link className="actionLink" to="/#work">
              Work
            </Link>
            <Link className="actionLink" to="/#skills">
              Skills
            </Link>
            <Link className="actionLink sayHi" to="/#contact">
              Say Hi
            </Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
