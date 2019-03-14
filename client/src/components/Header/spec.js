import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Header from './index'
import DesktopNav from './DesktopNav/index'
import MobileNav from './MobileNav/index'

import { findByTestAttr } from '../../../Utils'

// render component for testing
const setUp = (props={}) => {
  return shallow(<Header {...props} />)
}

describe('Header rendering', () => {

  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should render 1 header', () => {
    const wrapper = findByTestAttr(component, 'header')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 nav', () => {
    const wrapper = findByTestAttr(component, 'nav')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 nav-wrapper div', () => {
    const wrapper = findByTestAttr(component, 'nav-wrapper')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 brand logo', () => {
    const wrapper = findByTestAttr(component, 'brand-logo')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 logo img', () => {
    const wrapper = findByTestAttr(component, 'logo-img')
    expect(wrapper.length).toBe(1)
  })

  describe('mobile specific rendering', () => {

    // change viewport to mobile size
    beforeAll(() => {
      global.innerWidth = 992
      global.dispatchEvent(new Event('resize'))
    })

    it('should render 1 MobileNav component', () => {
      const wrapper = findByTestAttr(component, 'mobile-nav')
      expect(wrapper.length).toBe(1)
    })

    it('should not render the DesktopNav component', () => {
      const wrapper = findByTestAttr(component, 'desktop-nav')
      expect(wrapper.length).toBe(0)
    })

  })

  describe('desktop specific rendering', () => {

    // change viewport to desktop size
    beforeAll(() => {
      global.innerWidth = 993
      global.dispatchEvent(new Event('resize'))
    })

    it('should render 1 DesktopNav component', () => {
      const wrapper = findByTestAttr(component, 'desktop-nav')
      expect(wrapper.length).toBe(1)
    })

    it('should not render the MobileNav component', () => {
      const wrapper = findByTestAttr(component, 'mobile-nav')
      expect(wrapper.length).toBe(0)
    })

  })

})

describe('setWindowWidth()', () => {

  let component
  let instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  describe('spying on setWindowWidth()', () => {
    
    it('should be called when the browser window is resized', () => {
      jest.spyOn(instance, 'setWindowWidth')

      // resize browser window
      global.innerWidth = 1000
      global.dispatchEvent(new Event('resize'))

      expect(instance.setWindowWidth).toHaveBeenCalledTimes(1)
    })

  })

  describe('directly invoking setWindowWidth()', () => {

    it('should set state.windowWidth with value of window.innerWidth', () => {
      global.innerWidth = 800

      instance.setWindowWidth()
      
      expect(component.state('windowWidth')).toBe(800)
    })

  })

})

// describe('componentDidMount()', () => {

//   describe('directly invoking componentDidMount()', () => {

//     it('should attach the "resize" event listener to the window', () => {

//     })

//   })

// })

describe('Header mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})

// describe('Header snapshot', () => {

//   it('should have a valid snapshot', () => {
//     const component = renderer.create(<Header />)
//     let tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })

// })
