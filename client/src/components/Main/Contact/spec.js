import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Contact from './index'

import { findByTestAttr } from '../../../../Utils'
import mockAxios from 'axios'

// render component for testing
const setUp = (props = {}) => {
  return shallow(<Contact {...props} />)
}

describe('Contact rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 contact section', () => {
    const wrapper = findByTestAttr(component, 'contact')
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

  it('should render 1 title', () => {
    const wrapper = findByTestAttr(component, 'title')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 content paragraphs', () => {
    const wrapper = findByTestAttr(component, 'content')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 form', () => {
    const wrapper = findByTestAttr(component, 'form')
    expect(wrapper.length).toBe(1)
  })

  it('should render 3 input field divs', () => {
    const wrapper = findByTestAttr(component, 'input-field')
    expect(wrapper.length).toBe(3)
  })

  it('should render 2 form icons', () => {
    const wrapper = findByTestAttr(component, 'form-icon')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 email input', () => {
    const wrapper = findByTestAttr(component, 'email')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 message input', () => {
    const wrapper = findByTestAttr(component, 'message')
    expect(wrapper.length).toBe(1)
  })

  it('should render 2 input labels', () => {
    const wrapper = findByTestAttr(component, 'label')
    expect(wrapper.length).toBe(2)
  })

  it('should render 1 form-ui div', () => {
    const wrapper = findByTestAttr(component, 'form-ui')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 submit button', () => {
    const wrapper = findByTestAttr(component, 'submit')
    expect(wrapper.length).toBe(1)
  })

  describe('user exceeds email input char limit', () => {

    beforeEach(() => {
      component.setState({ emailError: true })
    })

    afterEach(() => {
      component.setState({ emailError: false })
    })

    it('should render 1 email-char-error p', () => {
      const wrapper = findByTestAttr(component, 'email-char-err')
      expect(wrapper.length).toBe(1)
    })

  })

  describe('user exceeds message input char limit', () => {

    beforeEach(() => {
      component.setState({ messageError: true })
    })

    afterEach(() => {
      component.setState({ messageError: false })
    })

    it('should render 1 msg-char-error p', () => {
      const wrapper = findByTestAttr(component, 'msg-char-err')
      expect(wrapper.length).toBe(1)
    })

  })

  describe('redering upon submission', () =>  {

    describe('disabling the form', () => {

      beforeAll(() => {
        component.setState({ submitClicked: true })
      })

      afterAll(() => {
        component.setState({ submitClicked: false })
      })

      it('should set disabled attr to true for the email input', () => {
        const wrapper = findByTestAttr(component, 'email')
        expect(wrapper.props().disabled).toBe(true)
      })

      it('should set disabled attr to true for the message text-area', () => {
        const wrapper = findByTestAttr(component, 'message')
        expect(wrapper.props().disabled).toBe(true)
      })

      it('should set disabled attr to true for the submit button', () => {
        const wrapper = findByTestAttr(component, 'submit')
        expect(wrapper.props().disabled).toBe(true)
      })

    })

    describe('there is no form error', () => {

      beforeAll(() => {
        component.setState({ submitClicked: true })
      })

      afterAll(() => {
        component.setState({ submitClicked: false })
      })

      it('should render 1 spinner icon', () => {
        const wrapper = findByTestAttr(component, 'sending-icon')
        expect(wrapper.length).toBe(1)
      })

      it('should render 1 loading-message span', () => {
        const wrapper = findByTestAttr(component, 'sending-message')
        expect(wrapper.length).toBe(1)
      }) 

    })

    describe('user leaves a form field blank', () => {

      beforeAll(() => {
        component.setState({ formError: true })
      })

      afterAll(() => {
        component.setState({ formError: false })
      })  

      it('should render the form error p tag', () => {
        const wrapper = findByTestAttr(component, 'form-err')
        expect(wrapper.length).toBe(1)
      })

    })

    describe('user fills in both fields', () => {

      describe('nodemailer returns an error', () => {

        beforeAll(() => {
          component.setState({ sendError: true })
        })

        afterAll(() => {
          component.setState({ sendError: false })
        })

        it('should render 1 error message', () => {
          const wrapper = findByTestAttr(component, 'error')
          expect(wrapper.length).toBe(1)
        })

      })

      describe('nodemailer returns success', () => {

        beforeAll(() => {
          component.setState({ sendSuccess: true })
        })

        afterAll(() => {
          component.setState({ sendSuccess: false })
        })

        it('should render 1 success message', () => {
          const wrapper = findByTestAttr(component, 'success')
          expect(wrapper.length).toBe(1)
        })

        it('should not render the submit button', () => {
          const wrapper = findByTestAttr(component, 'submit')
          expect(wrapper.length).toBe(0)
        })

      })

    })

  })

})

describe('handleKeyDown()', () => {

  const createCharEvent = field => {
    return {
      target: {
        id: field
      },
      key: 'k'
    }
  }

  const createNonCharEvent = field => {
    return {
      target: {
        id: field
      },
      key: 'Backspace'
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleKeyDown')
  })

  describe('spying on handleKeyDown()', () => {

    it('should be called when user types in "email" field', () => {
      const event = createCharEvent('email')
      const wrapper = findByTestAttr(component, 'email')

      wrapper.simulate('keydown', event)

      expect(instance.handleKeyDown).toHaveBeenCalledTimes(1)
      expect(instance.handleKeyDown).toHaveBeenCalledWith(event)
    })

    it('should be called when user types in "message" field', () => {
      const event = createCharEvent('message')
      const wrapper = findByTestAttr(component, 'message')

      wrapper.simulate('keydown', event)

      expect(instance.handleKeyDown).toHaveBeenCalledTimes(1)
      expect(instance.handleKeyDown).toHaveBeenCalledWith(event)
    })

  })

  describe('directly invoking handleKeyDown()', () => {

    describe('typing in the email field of the form', () => {

      describe('the char limit has not been reached', () => {

        it('should return without setting an email error', () => {
          const event = createCharEvent('email')
          instance.handleKeyDown(event)

          expect(instance.handleKeyDown).toHaveReturned()
          expect(component.state('emailError')).toBe(false)
        })

      })

      describe('the char limit has been reached', () => {

        describe('user presses a char key', () => {

          it('should set the state of email error to true', () => {
            component.setState({ freezeEmail: true })
            const event = createCharEvent('email')

            instance.handleKeyDown(event)

            expect(component.state('emailError')).toBe(true)
          })

        })

        describe('user presses a non-char key', () => {

          it('should return without setting an email error', () => {
            component.setState({ freezeEmail: true })
            const event = createNonCharEvent('email')

            instance.handleKeyDown(event)

            expect(instance.handleKeyDown).toHaveReturned()
            expect(component.state('emailError')).toBe(false)
          })

        })

      })

    })

    describe('typing in the message field of the form', () => {

      describe('the char limit has not been reached', () => {

        it('should return without setting a message error', () => {
          const event = createCharEvent('message')
          instance.handleKeyDown(event)

          expect(instance.handleKeyDown).toHaveReturned()
          expect(component.state('messageError')).toBe(false)
        })

      })

      describe('the char limit has been reached', () => {

        describe('user presses a char key', () => {

          it('should set the state of message error to true', () => {
            component.setState({ freezeMessage: true })
            const event = createCharEvent('message')

            instance.handleKeyDown(event)

            expect(component.state('messageError')).toBe(true)
          })

        })

        describe('user presses a non-char key', () => {

          it('should return without setting a message error', () => {
            component.setState({ freezeMessage: true })
            const event = createNonCharEvent('message')

            instance.handleKeyDown(event)

            expect(instance.handleKeyDown).toHaveReturned()
            expect(component.state('messageError')).toBe(false)
          })

        })

      })

    })

  })

})

describe('handleChange()', () => {

  // functions to create different test events
  const typeUnderLimit = field => {
    return {
      key: 'c',
      target: {
        id: field,
        value: 'abc'
      }
    }
  }

  const typeOverLimit = field => {
    return {
      key: 'd',
      target: {
        id: field,
        value: 'abcd'
      }
    }
  }

  const pasteUnderLimit = field => {
    return {
      target: {
        id: field,
        value: 'abc'
      }
    }
  }

  const pasteOverLimit = field => {
    return {
      target: {
        id: field,
        value: 'abcd'
      }
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleChange')
  })

  describe('spying on handleChange()', () => {

    it('should be called when user types in the email field', () => {
      const event = typeUnderLimit('email')
      const wrapper = findByTestAttr(component, 'email')
      wrapper.simulate('change', event)

      expect(instance.handleChange).toHaveBeenCalledTimes(1)
      expect(instance.handleChange).toHaveBeenCalledWith(event)
    })

    it('should be called when user pastes in the email field', () => {
      const event = pasteUnderLimit('email')
      const wrapper = findByTestAttr(component, 'email')
      wrapper.simulate('change', event)

      expect(instance.handleChange).toHaveBeenCalledTimes(1)
      expect(instance.handleChange).toHaveBeenCalledWith(event)
    })

    it('should be called when user types in the message field', () => {
      const event = typeUnderLimit('message')
      const wrapper = findByTestAttr(component, 'message')
      wrapper.simulate('change', event)

      expect(instance.handleChange).toHaveBeenCalledTimes(1)
      expect(instance.handleChange).toHaveBeenCalledWith(event)
    })

    it('should be called when user pastes in the message field', () => {
      const event = pasteUnderLimit('message')
      const wrapper = findByTestAttr(component, 'message')
      wrapper.simulate('change', event)

      expect(instance.handleChange).toHaveBeenCalledTimes(1)
      expect(instance.handleChange).toHaveBeenCalledWith(event)
    })

  })

  describe('directly invoking handleChange()', () => {

    describe('when called from the email field', () => {

      describe('user pastes into the field', () => {

        describe('char limit is exceeded', () => {

          it('should set the value of email field to the truncated email', () => {
            const event = pasteOverLimit('email')
            instance.handleChange(event)

            expect(component.state('email')).toBe('abc')
          })

          it('should set the number of email chars to the max value', () => {
            const event = pasteOverLimit('email')
            instance.handleChange(event)

            expect(component.state('emailChars')).toBe(3)
          })

          it('should freeze the email field', () => {
            const event = pasteOverLimit('email')
            instance.handleChange(event)

            expect(component.state('freezeEmail')).toBe(true)
          })

          it('should set email error to true', () => {
            const event = pasteOverLimit('email')
            instance.handleChange(event)

            expect(component.state('emailError')).toBe(true)
          })

        })

        describe('char limit is not exceeded', () => {

          it('should set the value of the email field in state', () => {
            const event = pasteUnderLimit('email')
            instance.handleChange(event)

            expect(component.state('email')).toBe('abc')
          })

          it('should set the number of email chars in state', () => {
            const event = pasteUnderLimit('email')
            instance.handleChange(event)

            expect(component.state('emailChars')).toBe(3)
          })

        })

      })

      describe('user types in the field', () => {

        describe('char limit is exceeded', () => {

          it('should set the value of email field to the truncated email', () => {
            const event = typeOverLimit('email')
            instance.handleChange(event)

            expect(component.state('email')).toBe('abc')
          })

          it('should set the number of email chars to the max value', () => {
            const event = typeOverLimit('email')
            instance.handleChange(event)

            expect(component.state('emailChars')).toBe(3)
          })

          it('should freeze the email field', () => {
            const event = typeOverLimit('email')
            instance.handleChange(event)

            expect(component.state('freezeEmail')).toBe(true)
          })

          it('should set email error to true', () => {
            const event = typeOverLimit('email')
            instance.handleChange(event)

            expect(component.state('emailError')).toBe(true)
          })

        })

        describe('char limit is not exceeded', () => {

          it('should set the value of the email field in state', () => {
            const event = typeUnderLimit('email')
            instance.handleChange(event)

            expect(component.state('email')).toBe('abc')
          })

          it('should set the number of email chars in state', () => {
            const event = typeUnderLimit('email')
            instance.handleChange(event)

            expect(component.state('emailChars')).toBe(3)
          })

        })

      })

    })

    describe('when called from the message field', () => {

      describe('user pastes into the field', () => {

        describe('char limit is exceeded', () => {

          it('should set the value of message field to the truncated message', () => {
            const event = pasteOverLimit('message')
            instance.handleChange(event)

            expect(component.state('message')).toBe('abc')
          })

          it('should set the number of message chars to the max value', () => {
            const event = pasteOverLimit('message')
            instance.handleChange(event)

            expect(component.state('messageChars')).toBe(3)
          })

          it('should freeze the message field', () => {
            const event = pasteOverLimit('message')
            instance.handleChange(event)

            expect(component.state('freezeMessage')).toBe(true)
          })

          it('should set email message to true', () => {
            const event = pasteOverLimit('message')
            instance.handleChange(event)

            expect(component.state('messageError')).toBe(true)
          })

        })

        describe('char limit is not exceeded', () => {

          it('should set the value of the message field in state', () => {
            const event = pasteUnderLimit('message')
            instance.handleChange(event)

            expect(component.state('message')).toBe('abc')
          })

          it('should set the number of message chars in state', () => {
            const event = pasteUnderLimit('message')
            instance.handleChange(event)

            expect(component.state('messageChars')).toBe(3)
          })

        })

      })

      describe('user types in the field', () => {

        describe('char limit is exceeded', () => {

          it('should set the value of message field to the truncated message', () => {
            const event = typeOverLimit('message')
            instance.handleChange(event)

            expect(component.state('message')).toBe('abc')
          })

          it('should set the number of message chars to the max value', () => {
            const event = typeOverLimit('message')
            instance.handleChange(event)

            expect(component.state('messageChars')).toBe(3)
          })

          it('should freeze the message field', () => {
            const event = typeOverLimit('message')
            instance.handleChange(event)

            expect(component.state('freezeMessage')).toBe(true)
          })

          it('should set message error to true', () => {
            const event = typeOverLimit('message')
            instance.handleChange(event)

            expect(component.state('messageError')).toBe(true)
          })

        })

        describe('char limit is not exceeded', () => {

          it('should set the value of the message field in state', () => {
            const event = typeUnderLimit('message')
            instance.handleChange(event)

            expect(component.state('message')).toBe('abc')
          })

          it('should set the number of message chars in state', () => {
            const event = typeUnderLimit('message')
            instance.handleChange(event)

            expect(component.state('messageChars')).toBe(3)
          })

        })

      })

    })

  })

})

describe('handleFocus()', () => {

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  describe('spying on handleFocus()', () => {

    it('should be called when user focuses on a form field', () => {
      jest.spyOn(instance, 'handleFocus')
      const email = findByTestAttr(component, 'email')
      const message = findByTestAttr(component, 'message')

      email.simulate('focus')
      message.simulate('focus')

      expect(instance.handleFocus).toHaveBeenCalledTimes(2)
    })

  })

  describe('directly invoking handleFocus()', () => {

    it('should reset all form-interaction variables in state', () => {
      component.setState({
        formError: true,
        freezeEmail: true,
        freezeMessage: true,
        emailError: true,
        messageError: true,
        sendSuccess: true,
        sendError: true
      })

      instance.handleFocus()

      expect(component.state('formError')).toBe(false)
      expect(component.state('freezeEmail')).toBe(false)
      expect(component.state('freezeMessage')).toBe(false)
      expect(component.state('emailError')).toBe(false)
      expect(component.state('messageError')).toBe(false)
      expect(component.state('messageError')).toBe(false)
      expect(component.state('sendSuccess')).toBe(false)
      expect(component.state('sendError')).toBe(false)
    })

  })

})

describe('trackChars()', () => {

  const createEvent = field => {
    return {
      target: {
        id: field,
        value: 'abc'
      }
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'trackChars')
  })

  describe('spying on trackChars()', () => {

    describe('typing in the email field of the form', () => {

      it('should be called with any changes to the field', () => {
        const event = createEvent('email')
        const wrapper = findByTestAttr(component, 'email')

        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('email')
      })

    })

    describe('typing in the message field of the form', () => {

      it('should be called with any changes to the field', () => {
        const event = createEvent('message')
        const wrapper = findByTestAttr(component, 'message')

        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('message')
      })

    })

  })

  describe('directly invoking trackChars()', () => {

    describe('typing in email form field', () => {

      it('should set state to freeze the field once char limit is reached', () => {
        component.setState({ emailChars: 3 })
        instance.trackChars('email')
        expect(component.state('freezeEmail')).toBe(true)
      })

      it('should set state to un-freeze the field when under the char limit', () => {
        component.setState({ emailChars: 2, freezeEmail: true })
        instance.trackChars('email')
        expect(component.state('freezeEmail')).toBe(false)
      })

      it('should set state to remove emailError when under the char limit', () => {
        component.setState({ emailError: true, emailChars: 2 })
        instance.trackChars('email')
        expect(component.state('emailError')).toBe(false)
      })

    })

    describe('typing in message form field', () => {

      it('should set state to freeze the field once char limit is reached', () => {
        component.setState({ messageChars: 3 })
        instance.trackChars('message')
        expect(component.state('freezeMessage')).toBe(true)
      })

      it('should set state to un-freeze the field when under the char limit', () => {
        component.setState({ messageChars: 2, freezeMessage: true })
        instance.trackChars('message')
        expect(component.state('freezeMessage')).toBe(false)
      })

      it('should set state to remove messageError when under the char limit', () => {
        component.setState({ messageError: true, messageChars: 2 })
        instance.trackChars('message')
        expect(component.state('messageError')).toBe(false)
      })

    })

  })

})

describe('handleSubmit()', () => {

  const event = {
    preventDefault: jest.fn()
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
    jest.spyOn(instance, 'handleSubmit')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('spying on handleSubmit()', () => {

    it('should be called when user clicks submit', () => {
      const wrapper = findByTestAttr(component, 'form')
      wrapper.simulate('submit', event)

      expect(instance.handleSubmit).toHaveBeenCalledTimes(1)
      expect(instance.handleSubmit).toHaveBeenCalledWith(event)
    })

  })

  describe('directly invoking handleSubmit()', () => {

    it('should call e.preventDefault()', () => {
      jest.spyOn(event, 'preventDefault')

      instance.handleSubmit(event)

      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    it('should set errors in state to false', () => {
      component.setState({
        sendError: true,
        emailError: true,
        messageError: true
      })

      instance.handleSubmit(event)

      expect(component.state('sendError')).toBe(false)
      expect(component.state('emailError')).toBe(false)
      expect(component.state('messageError')).toBe(false)
    })

    describe('user leaves a form field blank', () => {

      it('should set state.formError to true', () =>  {
        component.setState({
          email: '',
          message: 'Hi-dilly ho!'
        })
        instance.handleSubmit(event)

        expect(component.state('formError')).toBe(true)

        component.setState({
          email: 'ned@flanders.com',
          message: '',
          formError: false
        })
        instance.handleSubmit(event)

        expect(component.state('formError')).toBe(true)
      })

    })

    describe('user fills in both fields', () => {

      it('should set state.submitClicked to true', () => {
        component.setState({
          email: 'selma@dmv.com',
          message: 'Come over and watch vacation slides with Jubjub and me.'
        })
        instance.handleSubmit(event)

        expect(component.state('submitClicked')).toBe(true)
      })

      it('should call axios.post()', done => {
        component.setState({
          email: 'ralph@wiggum.com',
          message: 'sleep is where i\'m a viking'
        })

        mockAxios.post.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              msg: 'success'
            }
          })
        )

        instance.handleSubmit(event)

        done()

        expect(mockAxios.post).toHaveBeenCalledTimes(1)
        expect(mockAxios.post).toHaveBeenCalledWith(
          '/api/send',
          {
            email: 'ralph@wiggum.com',
            message: 'sleep is where i\'m a viking'
          }
        )
      })

      describe('http POST request with axios', () => {

        describe('POST success', () => {

          describe('receive message-send-success response', () => {

            beforeEach(() => {
              component.setState({
                email: 'moe@gargoyle.com',
                message: 'get these fries offa my head, kid'
              })

              mockAxios.post.mockImplementationOnce(() =>
                Promise.resolve({
                  data: {
                    msg: 'success'
                  }
                })
              )
            })

            it('should call resetForm()', done => {
              jest.spyOn(instance, 'resetForm')

              instance.handleSubmit(event)

              setTimeout(() => {
                expect(instance.resetForm).toHaveBeenCalledTimes(1)

                done()
              })
            })

            it('should set state.submitClicked to false', done => {
              instance.handleSubmit(event)

              setTimeout(() => {
                expect(component.state('submitClicked')).toBe(false)

                done()
              })
            })

          })

          describe('receive message-send-fail response', () => {

            it('should set state.submitClicked to false and state.sendError to true', done => {
              component.setState({
                email: 'barney@gumble.com',
                message: 'i made a movie?!'
              })

              mockAxios.post.mockImplementationOnce(() =>
                Promise.resolve({
                  data: {
                    msg: 'fail'
                  }
                })
              )

              instance.handleSubmit(event)

              setTimeout(() => {
                expect(component.state('submitClicked')).toBe(false)
                expect(component.state('sendError')).toBe(true)

                done()
              })
            })

          })

        })

        describe('POST error', () => {

          it('should set state.submitClicked to false and state.sendError to true', done => {
            component.setState({
              email: 'stu@disco.com',
              message: 'disco stu doesn\'t advertise'
            })

            mockAxios.post.mockImplementationOnce(() =>
              Promise.reject({})
            )

            instance.handleSubmit(event)

            setTimeout(() => {
              expect(component.state('submitClicked')).toBe(false)
              expect(component.state('sendError')).toBe(true)

              done()
            })

          })

        })

      })

    })

  })

})

describe('resetForm()', () => {

  let component, instance
  beforeAll(() => {
    component = setUp()
    instance = component.instance()

    component.setState({
      sendSuccess: false,
      email: 'millhouse@bartsfriend.com',
      message: 'everything is coming up millhouse!'
    })
  })

  it('should set sendSuccess to true and clear the form fields', done => {
    instance.resetForm()

    setTimeout(() => {
      expect(component.state('sendSuccess')).toBe(true)
      expect(component.state('email')).toBe('')
      expect(component.state('message')).toBe('')

      done()
    })
  })

})

describe('componentDidUpdate()', () => {

  const createEvent = field => {
    return {
      target: {
        id: field,
        value: 'abc'
      }
    }
  }

  let component, instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  describe('directly invoking componentDidUpdate()', () => {

    describe('updating the email field on the form', () => {

      it('should call trackChars() for the email field', () => {
        const event = createEvent('email')
        const wrapper = findByTestAttr(component, 'email')

        jest.spyOn(instance, 'trackChars')
        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('email')
      })

    })

    describe('updating the message field on the form', () => {

      it('should call trackChars() for the message field', () => {
        const event = createEvent('message')
        const wrapper = findByTestAttr(component, 'message')

        jest.spyOn(instance, 'trackChars')
        wrapper.simulate('change', event)

        expect(instance.trackChars).toHaveBeenCalledTimes(1)
        expect(instance.trackChars).toHaveBeenCalledWith('message')
      })

    })

    // describe('resetting the form', () => {

    //   // beforeAll(() => {
    //   //   component.setState({ sendSuccess: true })
    //   // })

    //   it('should set the form labels to inactive after a successful submission', () => {
    //     const email = findByTestAttr(component, 'email')
    //     const labels = findByTestAttr(component, 'label')

    //     email.simulate('focus')

    //     expect(labels.find('label').at(0).hasClass('active')).toBe(true)
        
    //     // wrapper.forEach(label =>
    //     //   expect(label.hasClass('active')).toBe(false)
    //     // )
    //   })

    // })

  })

})

describe('Contact mounting and unmounting', () => {

  it('should render without error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Contact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
