import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
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


    const logoVariants = {
      hover: {
        scale: 1.3,
        rotate: 280,
        transition: {
          duration: 1,
          yoyo: Infinity
        }
      },
      rest: {
        scale: 1,
        transition: {
          duration: 0.3
        }
      }
    }

    const navVariants = {
      hidden: {
        opacity: 0,
        y: -20
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: 1
        }
      }
    }


    const linkVariants = {
      hover: {
        scale: 1.2,
        opacity: 1,
        y: -3,
        transition: {
          duration: 0.4
        }
      }
    }

    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <motion.img
              variants={logoVariants}
              initial="rest" 
              whileHover="hover" 
              animate="rest"
              alt="Jake Kemsley Logo"
              src={require('../images/jk-logo.svg')}
              width="40"
            />
          </Link>
          <motion.nav className="actions"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <Link className="actionLink" to="/#work">
              <motion.div
                variants={linkVariants}
                whileHover="hover" 
              >Work</motion.div>
            </Link>
            <Link className="actionLink" to="/#skills">
            <motion.div
              variants={linkVariants}
              whileHover="hover" 
            >Skills</motion.div>
            </Link>
            <Link className="actionLink sayHi" to="/#contact">
            <motion.div
              variants={linkVariants}
              whileHover="hover" 
            >Say Hi</motion.div>
            </Link>
          </motion.nav>
        </div>
      </div>
    )
  }
}

export default Header
