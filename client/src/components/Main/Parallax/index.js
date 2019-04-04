import React from 'react'
import './styles.scss'

import ibm360 from '../../../assets/images/IBM360_91.jpg'
import switchboard from '../../../assets/images/switchboard.jpg'

const Parallax = ({ position }) => {

  let dt, src, alt
  if (position === 'first') {
    dt = "parallax-1"
    src = ibm360
    alt = "2 men in the 1960s working with an IBM 360 91 computer at the Goddard Space Flight Center"
  } else {
    dt = "parallax-2"
    src = switchboard
    alt = "ladies working at a giant switchboard"
  }

  return (
    <div data-test="container" className="parallax-container">
      <div data-test="parallax" className="parallax">
        <img
          data-test={dt}
          src={src}
          alt={alt}
          className="responsive-img"
        />
      </div>
    </div>
  )
}

export default Parallax
