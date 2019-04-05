import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Counter from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Counter {...props} />)
}

const props = { chars: 2 }

describe('Counter rendering', () => {

  let component
  beforeAll(() => {
    component = setUp(props)
  })

  // it('should receive props', () => {
  //   expect(component.props().chars).toBe(1)
  // })

  it('should render 1 counter div', () => {
    const wrapper = findByTestAttr(component, 'counter')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 count span', () => {
    const wrapper = findByTestAttr(component, 'count')
    expect(wrapper.length).toBe(1)
  })

})

describe('Counter mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Counter {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
