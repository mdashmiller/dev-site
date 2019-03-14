import React from 'react'
import './styles.scss'

const DesktopNav = () => {
  return (
    <ul data-test="links" className="right">
      <li><a data-test="about" href="#about">ABOUT</a></li>
      <li><a data-test="portfolio" href="#portfolio">PORTFOLIO</a></li>
      <li><a data-test="contact" href="#contact">CONTACT</a></li>
      <li>
        <a data-test="linkedin"
          href="linkedin.com"
          className="btn-floating btn-small tooltipped"
          data-tooltip="Linked In"
        >
          <i data-test="linkedin-icon" className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a data-test="github"
          href="gitub.com"
          className="btn-floating btn-small tooltipped"
          data-tooltip="GitHub"
        >
          <i data-test="github-icon" className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  )
}

export default DesktopNav
