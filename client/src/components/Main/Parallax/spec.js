import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Parallax from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props={}) => {
  return shallow(<Parallax {...props} />)
}

// image sources
const ibm360 = 'IBM360_91.jpg'
const switchboard = 'switchboard.jpg'

describe('Parallax rendering', () => {

  let component
  beforeAll(() => {
    const props = { position: 'first' }
    component = setUp(props)
  })

  it('should render 1 parallax container', () => {
    const wrapper = findByTestAttr(component, 'container')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 parallax div', () => {
    const wrapper = findByTestAttr(component, 'parallax')
    expect(wrapper.length).toBe(1)
  })

  describe('rendering when it is the first parallax', () => {

    it('should render the IBM 360/90 image', () => {
      const wrapper = findByTestAttr(component, 'parallax-1')
      expect(wrapper.length).toBe(1)
      expect(wrapper.props().src).toBe(ibm360)
    })

  })

  describe('rendering when it is the second parallax', () => {

    // send props as if it is the second parallax
    const component2 = setUp({ position: 'second' })

    it('should render the switchboard image', () => {
      const wrapper = findByTestAttr(component2, 'parallax-2')
      expect(wrapper.length).toBe(1)
      expect(wrapper.props().src).toBe(switchboard)
    })

  })

})

describe('Parallax mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Parallax position={'first'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})

// describe('Parallax snapshot', () => {

//   it('should have a valid snapshot', () => {
//     const component = renderer.create(<Parallax />)
//     let tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })

// })
