import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Counter = ({ chars }) => {
  return (
    <div data-test="counter" id="counter">
      <span data-test="count">{chars}/3</span>
    </div>
  )
}

Counter.propTypes = {
  chars: PropTypes.number.isRequired
}

export default Counter
