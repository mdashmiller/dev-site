import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Main from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Main {...props} />)
}

describe('Main rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 About component', () => {
    const wrapper = findByTestAttr(component, 'about')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 Portfolio component', () => {
    const wrapper = findByTestAttr(component, 'portfolio')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 Contact component', () => {
    const wrapper = findByTestAttr(component, 'contact')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 first-parallax component', () => {
    const wrapper = findByTestAttr(component, 'parallax-1')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 second-parallax component', () => {
    const wrapper = findByTestAttr(component, 'parallax-2')
    expect(wrapper.length).toBe(1)
  })

})

describe('Main mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Main />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})

// describe('Main snapshot', () => {

//   it('should have a valid snapshot', () => {
//     const component = renderer.create(<Main />)
//     let tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })

// })
