import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Footer from './index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Footer {...props} />)
}

describe('Footer rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 footer element', () => {
    const wrapper = findByTestAttr(component, 'footer')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 row div', () => {
    const wrapper = findByTestAttr(component, 'row')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 column divs', () => {
    const wrapper = findByTestAttr(component, 'col')
    expect(wrapper.length).toBe(2)
  })

  it('should render 2 titles', () => {
    const wrapper = findByTestAttr(component, 'title')
    expect(wrapper.length).toBe(2)
  })

  it('should render 3 content paragraphs', () => {
    const wrapper = findByTestAttr(component, 'content')
    expect(wrapper.length).toBe(3)
  })

  it('should render 2 links', () => {
    const wrapper = findByTestAttr(component, 'link')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 copyright div', () => {
    const wrapper = findByTestAttr(component, 'copy-div')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 copyright statement', () => {
    const wrapper = findByTestAttr(component, 'copyright')
    expect(wrapper.length).toBe(1)
  })

})

describe('Footer mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
