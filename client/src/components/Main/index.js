import React from 'react'
import './styles.scss'

import About from './About/index'
import Portfolio from './Portfolio/index'
import Contact from './Contact/index'
import Parallax from './Parallax/index'

const Main = () => {
  return (
    <div>
      <About data-test="about" />
      <Parallax data-test="parallax-1" position={'first'} />
      <Portfolio data-test="portfolio" />
      <Parallax data-test="parallax-2" position={'second'} />
      <Contact data-test="contact" />
    </div>
  )
}

export default Main
