const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const nodemailer = require('nodemailer')
const transporter = require('../../../services/nodemailer/createTransport')

const expect = chai.expect
chai.use(sinonChai)

describe('nodemailer middleware', () => {

  // create a testable transporter
  let createTransportSpy
  beforeEach(() => {
    createTransportSpy = sinon.spy(nodemailer, 'createTransport')
  })

  afterEach(() => {
    createTransportSpy.restore()
  })

  it('calls transporter.sendMail()', () => {
    let sendMailSpy = sinon.spy(transporter, 'sendMail')

    transporter.sendMail({}, () => { })

    expect(sendMailSpy).to.have.been.calledOnce

    sendMailSpy.restore()
  })

  describe('sendMail()', () => {

    // create a stub of transporter.sendMail() 
    let sendMailStub
    beforeEach(() => {
      sendMailStub = sinon.stub(transporter, 'sendMail')
    })

    afterEach(() => {
      sendMailStub.restore()
    })

    it('should invoke callback after sending the email', () => {
      // create a test callback and set the
      // sendMail stub to invoke it
      let callbackSpy = sinon.spy()
      sendMailStub.yields()

      transporter.sendMail({}, callbackSpy)

      expect(callbackSpy).to.have.been.calledOnce
    })

    it('should send email with the expected mail options', () => {
      // create a test mailOptions object
      const mailOptions = {
        from: 'test@test.com',
        to: 'send@to.com',
        subject: 'test email',
        html: 'some html'
      }

      transporter.sendMail(mailOptions, () => {})

      expect(sendMailStub).to.be.calledWith(mailOptions)
    })

  })

})
