import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import DesktopNav from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<DesktopNav {...props} />)
}

describe('DesktopNav rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 ul of links', () => {
    const wrapper = findByTestAttr(component, 'links')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to the about section', () => {
    const wrapper = findByTestAttr(component, 'about')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to the portfolio section', () => {
    const wrapper = findByTestAttr(component, 'portfolio')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to the contact section', () => {
    const wrapper = findByTestAttr(component, 'contact')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to linkedin', () => {
    const wrapper = findByTestAttr(component, 'linkedin')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 link to github', () => {
    const wrapper = findByTestAttr(component, 'github')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 linkedin icon', () => {
    const wrapper = findByTestAttr(component, 'linkedin-icon')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 github icon', () => {
    const wrapper = findByTestAttr(component, 'github-icon')
    expect(wrapper.length).toBe(1)
  })

})

describe('DesktopNav mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DesktopNav />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
