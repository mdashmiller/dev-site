import React, { Component } from 'react'
import './styles.scss'

class MobileNav extends Component {

  state = {
    mobileNavOpen: false
  }

  handleClick = () => {
    const { mobileNavOpen } = this.state
    this.setState({
      mobileNavOpen: !mobileNavOpen
    })
  }

  handleOutsideClick = (e) => {
    // close mobile nav menu if
    // user clicks away from it
    const { mobileNavOpen } = this.state
    if (mobileNavOpen) {
      if (!this.node.contains(e.target)) {
        this.setState({
          mobileNavOpen: false
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', (e) => this.handleOutsideClick(e))
  }

  render() {
    const { mobileNavOpen } = this.state
    const toggle = mobileNavOpen ? 'visible' : null

    return (
      <div ref={node => this.node = node}>
        <button
          data-test="burger-btn"
          className="burger"
          onClick={(e) => this.handleClick(e)}
        >
          <i data-test="menu-icon" className="material-icons">menu</i>
        </button>
        <div
          data-test="menu"
          className={`mobile-menu ${toggle}`}
        >
          <ul>
            <li>
              <a
                data-test="about"
                href="#about"
                onClick={(e) => this.handleClick(e)}
              >
                About
              </a>
            </li>
            <li>
              <a
                data-test="portfolio"
                href="#portfolio"
                onClick={(e) => this.handleClick(e)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                data-test="contact"
                href="#contact"
                onClick={(e) => this.handleClick(e)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileNav
