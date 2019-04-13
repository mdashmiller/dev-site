import React, { Component } from 'react'
import './styles.scss'

class MiniNav extends Component {

  state = {
    windowWidth: window.innerWidth,
    scrollPosition: 0,
    menuOpen: false
  }

  setWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth 
    })
  }

  setScrollPosition = () => {
    const position = window.scrollY

    if (!position) this.toggleMenu(true)

    this.setState({
      scrollPosition: position
    })
  }

  toggleMenu = (top = false) => {
    if (top) {
      // if user is at the top of
      // browser window always
      // set menuOpen to false
      this.setState({
        menuOpen: false
      })
    } else {
      const { menuOpen } = this.state
      this.setState({
        menuOpen: !menuOpen
      })
    }
  }

  componentDidMount() {
    // track window width and scroll position
    window.addEventListener('resize', () => this.setWindowWidth())
    window.addEventListener('scroll', () => this.setScrollPosition())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setWindowWidth())
    window.removeEventListener('scroll', () => this.setScrollPosition())
  }

  render() {
    const {
      windowWidth,
      scrollPosition,
      menuOpen
    } = this.state

    if (windowWidth < 993) {
      if (scrollPosition) {
        return (
          <div data-test="up-btn" className="mini-nav-btn to-top">
            <a data-test="arrow-up" href="#top" className="arrow-up">^</a>
          </div>
        )
      } else {
        return null
      }
    } else {
      if (scrollPosition) {
        return (
          <div>
            <div 
              data-test="menu-btn"
              className="mini-nav-btn"
              onMouseEnter={() => this.toggleMenu()}
            >
              MENU
            </div>
            {
              menuOpen &&
                <div
                  data-test="menu"
                  className="mini-nav-menu"
                  onMouseLeave={() => this.toggleMenu()}
                >
                  <ul>
                    <li>
                      <a
                        data-test="link"
                        href="#top"
                        onClick={() => this.toggleMenu()}
                      >
                        Top
                      </a>
                    </li>
                    <li>
                      <a
                        data-test="link"
                        href="#about"
                        onClick={() => this.toggleMenu()}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        data-test="link"
                        href="#portfolio"
                        onClick={() => this.toggleMenu()}
                      >
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        data-test="link"
                        href="#contact"
                        onClick={() => this.toggleMenu()}
                      >
                        Contact
                      </a>
                    </li>
                    <li data-test="menu-title">Menu</li>
                  </ul>
                </div>
            }
          </div>
        )
      } else {
        return null
      }
    }
  }
}

export default MiniNav
