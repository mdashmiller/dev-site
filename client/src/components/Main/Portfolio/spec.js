import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Portfolio from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Portfolio {...props} />)
}

describe('Portfolio rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 portfolio section', () => {
    const wrapper = findByTestAttr(component, 'portfolio')
    expect(wrapper.length).toBe(1)
  })

  it('should 1 section-title h2', () => {
    const wrapper = findByTestAttr(component, 'section-title')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 row divs', () => {
    const wrapper = findByTestAttr(component, 'row')
    expect(wrapper.length).toBe(2)
  })

  it('should render 4 column divs', () => {
    const wrapper = findByTestAttr(component, 'col')
    expect(wrapper.length).toBe(4)
  })

  it('should render 4 cards', () => {
    const wrapper = findByTestAttr(component, 'card')
    expect(wrapper.length).toBe(4)
  })

  it('should render 4 links', () => {
    const wrapper = findByTestAttr(component, 'link')
    expect(wrapper.length).toBe(4)
  })

  it('should render 4 images', () => {
    const wrapper = findByTestAttr(component, 'portfolio-img')
    expect(wrapper.length).toBe(4)
  })

  it('should render 4 card titles', () => {
    const wrapper = findByTestAttr(component, 'card-title')
    expect(wrapper.length).toBe(4)
  })

  it('should render 4 paragraphs of content', () => {
    const wrapper = findByTestAttr(component, 'content')
    expect(wrapper.length).toBe(4)
  })

})

describe('Portfolio mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Portfolio />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
