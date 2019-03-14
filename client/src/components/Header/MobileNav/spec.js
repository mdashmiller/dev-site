import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import MobileNav from './index'

import { findByTestAttr } from '../../../../Utils'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<MobileNav {...props} />)
}

describe('MobileNav rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 burger button', () => {
    const wrapper = findByTestAttr(component, 'burger-btn')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 menu icon', () => {
    const wrapper = findByTestAttr(component, 'menu-icon')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 menu div', () => {
    const wrapper = findByTestAttr(component, 'menu')
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

})

describe('conditional class "toggle"', () => {

  let component
  beforeEach(() => {
    component = setUp()
  })

  describe('state.mobileNavOpen is true', () => {

    it('should add className "visible" to menu div', () => {
      component.setState({ mobileNavOpen: true })
      const wrapper = findByTestAttr(component, 'menu')

      expect(wrapper.hasClass('visible')).toBe(true)
      expect(wrapper.hasClass('null')).toBe(false)
    })

  })

  describe('state.mobileNavOpen is false', () => {

    it('should add className "null" to menu div', () => {
      component.setState({ mobileNavOpen: false })
      const wrapper = findByTestAttr(component, 'menu')

      expect(wrapper.hasClass('visible')).toBe(false)
      expect(wrapper.hasClass('null')).toBe(true)
    })

  })

})

describe('handleClick', () => {
  
  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleClick')
  })

  describe('spying on handleClick', () => {

    it('should be called when burger button is clicked', () => {
      const burger = findByTestAttr(component, 'burger-btn')
      burger.simulate('click')

      expect(instance.handleClick).toHaveBeenCalledTimes(1)
    })

    it('should be called when a link is clicked', () => {
      const about = findByTestAttr(component, 'about')
      const portfolio = findByTestAttr(component, 'portfolio')
      const contact = findByTestAttr(component, 'contact')

      about.simulate('click')
      portfolio.simulate('click')
      contact.simulate('click')

      expect(instance.handleClick).toHaveBeenCalledTimes(3)
    })

  })

  describe('directly invoking handleClick', () => {

    it('should toggle state.mobileNavOpen', () => {
      instance.handleClick()
      expect(component.state('mobileNavOpen')).toBe(true)

      instance.handleClick()
      expect(component.state('mobileNavOpen')).toBe(false)
    })

    it('should add the class "visible" to the mobile-menu ul', () => {
      let menu = findByTestAttr(component, 'menu')
      expect(menu.hasClass('visible')).toBe(false)

      instance.handleClick()
      
      menu = findByTestAttr(component, 'menu')
      expect(menu.hasClass('visible')).toBe(true)
    })

  })

})

describe('handleOutsideClick()', () => {

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  // describe('spying on handleOutsideClick()', () => {

  //   it('should be called when any part of document is clicked', () => {
  //     jest.spyOn(instance, 'handleOutsideClick')

  //   })

  // })

  describe('directly invoking handleOutsideClick()', () => {

    describe('mobile-nav is not visible', () => {

      it('should not change state.mobileNavOpen', () => {
        component.setState({ mobileNavOpen: false })
        instance.handleOutsideClick()
        expect(component.state('mobileNavOpen')).toBe(false)
      })

    })

    // describe('mobile-nav is visible', () => {

    //   describe('user clicks the mobile-nav', () => {

    //     it('should not change state.mobileNavOpen', () => {

    //     })

    //   })

    //   describe('user clicks anything other than mobile-nav', () => {

    //     it('should set state.mobileNavOpen to false', () => {
          
    //     })

    //   })


    // })

  })

})

// describe('componentDidMount()', () => {

//   it('should attach a "click" event listener to the document', () => {

//   })

// })

describe('MobileNav mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MobileNav />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
