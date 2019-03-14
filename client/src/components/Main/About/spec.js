import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import About from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<About {...props} />)
}

describe('About rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 about section', () => {
    const wrapper = findByTestAttr(component, 'about')
    expect(wrapper.length).toBe(1)
  })

  it('should render 3 row divs', () => {
    const wrapper = findByTestAttr(component, 'row')
    expect(wrapper.length).toBe(3)
  })

  it('should render 6 column divs', () => {
    const wrapper = findByTestAttr(component, 'col')
    expect(wrapper.length).toBe(6)
  })

  it('should render 3 images', () => {
    const wrapper = findByTestAttr(component, 'about-img')
    expect(wrapper.length).toBe(3)
  })

  it('should render 3 titles', () => {
    const wrapper = findByTestAttr(component, 'title')
    expect(wrapper.length).toBe(3)
  })

  it('should render 3 info paragraphs', () => {
    const wrapper = findByTestAttr(component, 'info')
    expect(wrapper.length).toBe(3)
  })

})

describe('About mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<About />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
