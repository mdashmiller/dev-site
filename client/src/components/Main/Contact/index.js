import React, { Component } from 'react'
import './styles.scss'

import notChars from '../../../../src/notChars'

class Contact extends Component {

  state = {
    key: '',
    email: '',
    message: '',
    emailChars: 0,
    messageChars: 0,
    freezeEmail: false,
    freezeMessage: false,
    emailError: false,
    messageError: false,
    formError: false,
    submitClicked: false,
    // sendError: null
  }

  // component methods

  handleKeyDown = e => {
    const { freezeEmail, freezeMessage } = this.state
    const field = e.target.id
    const key = e.key

    this.setState({ key })

    switch (field) {
      case 'email':
        if (freezeEmail && !notChars.list.includes(key)) {
          this.setState({ emailError: true })
        }
        break
      case 'message':
        if (freezeMessage && !notChars.list.includes(key)) {
          this.setState({ messageError: true })
        }
        break
      default:
        return
    }
  }

  handleChange = e => {
    const { key, freezeEmail, freezeMessage } = this.state
    const field = e.target.id
    const chars = e.target.value.length
    
    switch (field) {
      case 'email':
        if (chars > 3) {
          // if char limit has been reached and user types another
          // char or if user attempts to paste in something that
          // exceeds the char limit only accept the under-the-limit
          // chars, freeze the field and set the char
          // count and error message appropriately
          const email = e.target.value
          const truncatedEmail = email.substring(0, 3)

          this.setState({
            email: truncatedEmail,
            emailChars: 3,
            freezeEmail: true,
            emailError: true
          })
        } else {
          // if char limit has not been met or the user pushes
				  // a key from the notChars list take the user's input
          if (!freezeEmail || notChars.list.includes(key)) {
            this.setState({
              email: e.target.value,
              emailChars: chars
            })
          }
        }
        break
      case 'message':
        // same as above but for the message field
        if (chars > 3) {
          const message = e.target.value
          const truncatedMessage = message.substring(0, 3)

          this.setState({
            message: truncatedMessage,
            messageChars: 3,
            freezeMessage: true,
            messageError: true
          })
        } else {
          if (!freezeMessage || notChars.list.includes(key)) {
            this.setState({
              message: e.target.value,
              messageChars: chars
            })
          }
        }
        break
      default:
        return
    }
  }

  handleFocus = () => {
    // clears any error messages when user
    // focuses on a form field
    this.setState({
      formError: false,
      freezeEmail: false,
      freezeMessage: false,
      emailError: false,
      messageError: false,
      // sendError: null
    })
  }

  trackChars = field => {
    const { emailChars, messageChars } = this.state
    
    switch (field) {
      case 'email':
        if (emailChars >= 3) {
          this.setState({ freezeEmail: true })
        } else {
          this.setState({ freezeEmail: false })
        }
        break
      case 'message':
        if (messageChars >= 3) {
          this.setState({ freezeMessage: true })
        } else {
          this.setState({ freezeMessage: false })
        }
        break
      default:
        return
    } 
  }

  handleSubmit = e => {
    const { email, message } = this.state

    // check that user has filled both form fields
    if (!email || !message) {
      this.setState({ formError: true })
    } else {
      this.setState({ submitClicked: true })
    }

    e.preventDefault()
  }

  // lifecycle hooks

  componentDidUpdate(prevProps, prevState) {
    const {
      emailChars,
      messageChars
    } = this.state

    // if user has entered or deleted anything in the
    // form call trackChars() and tell it which
    // field has changed
    if (emailChars !== prevState.emailChars) {
      this.trackChars('email')
    } else if (messageChars !== prevState.messageChars) {
      this.trackChars('message')
    }

  }

  render() {
    const {
      email,
      message,
      emailError,
      messageError,
      formError } = this.state
    
    return (
      <section
        data-test="contact"
        className="container section scrollspy"
        id="contact"
      >
        <div data-test="row" className="row">
          <div data-test="col" className="col sm12 l5">
            <h2 data-test="title">Contact Me</h2>
            <p data-test="content">
              Questions? Comments? Got a job that needs doing?
              Drop me a line.
          	</p>
            <p data-test="content">
              I'd love to work remotely but don't mind going in
              to an office either, and I'm willing to relocate
              for the right company or team. Happy hunting!
        	  </p>
          </div>
          <div data-test="col" className="col s12 l5 offset-l2">
            <form data-test="form" onSubmit={(e) => this.handleSubmit(e)}>
              {/* JS disabled message */}
              <noscript data-test="nojs">
                <p id="no-js">Enable JavaScript to use this form</p>
              </noscript>
              <div data-test="input-field" className="input-field">
                <i data-test="form-icon" className="material-icons prefix">
                  email
                </i>
                <input
                  data-test="email"
                  type="email"
                  id="email"
                  value={email}
                  onKeyDown={(e) => this.handleKeyDown(e)}
                  onChange={(e) => this.handleChange(e)}
                  onFocus={() => this.handleFocus()}
                />
                <label data-test="label" htmlFor="email">Your Email</label>
              </div>
              <div data-test="input-field" className="input-field">
                <i data-test="form-icon" className="material-icons prefix">
                  message
                </i>
                <textarea
                  data-test="message"
                  className="materialize-textarea"
                  id="message"
                  value={message}
                  onKeyDown={(e) => this.handleKeyDown(e)}
                  onChange={(e) => this.handleChange(e)}
                  onFocus={() => this.handleFocus()}
                >
                </textarea>
                <label data-test="label" htmlFor="message">Message</label>
              </div>
              <div data-test="input-field" className="input-field center">
                <button data-test="submit" className="btn" id="submit">
                  Submit
                </button>
                {
                  formError && 
                    <p data-test="form-err" className="fail">
                      Need more input! Please complete both fields.
                    </p>
                }
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
