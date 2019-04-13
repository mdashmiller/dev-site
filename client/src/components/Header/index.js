import React, { Component } from 'react'
import './styles.scss'
import logo from '../../assets/images/logo.jpg'
import DesktopNav from './DesktopNav/index'
import MobileNav from './MobileNav/index'

class Header extends Component {

  state = {
    windowWidth: window.innerWidth
  }

  setWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentDidMount() {
    // track changes in browser width
    window.addEventListener('resize', () => this.setWindowWidth())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setWindowWidth())
  }

  render() {
    const { windowWidth } = this.state
    
    return (
      <header data-test="header" id="top" className="scrollspy">
        <nav data-test="nav">
          <div data-test="nav-wrapper" className="nav-wrapper container">
            <a href="#top" data-test="brand-logo" className="brand-logo">
              <img src={logo} data-test="logo-img" alt="Matt Miller Web Developer" />
            </a>
            { windowWidth > 992 && <DesktopNav data-test="desktop-nav" /> }
          </div>
        </nav>
        { windowWidth < 993 && <MobileNav data-test="mobile-nav" /> }
      </header>
    )
  }
}

export default Header
