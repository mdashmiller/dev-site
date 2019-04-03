const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const nodemailer = require('nodemailer')
const transporter = require('../../../services/nodemailer/createTransport')

const expect = chai.expect
chai.use(sinonChai)

describe('createTransport()', () => {

  // provide options for test transporter
  let testOptions
  before(() => {
    testOptions = {
      host: 'smtp.testmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'testUser',
        pass: 'testPass'
      }
    }
  })

  // create testable stand-in for 
  // nodemailer.createTransport()
  let createTransportSpy
  beforeEach(() => {
    createTransportSpy = sinon.spy(nodemailer, 'createTransport')
  })

  afterEach(() => {
    createTransportSpy.restore()
  })

  it('should be called with the given options', () => {
    nodemailer.createTransport(testOptions)
    
    expect(createTransportSpy).to.have.been.calledOnce
    expect(createTransportSpy).to.have.been.calledWith(testOptions)
  })

  it('should create a transporter object with the options provided', () => {
    let testTransporter = nodemailer.createTransport(testOptions)

    expect(testTransporter)
      .to.have.nested.property('transporter.options.host', testOptions.host)
    expect(testTransporter)
      .to.have.nested.property('transporter.options.auth.user', testOptions.auth.user)
    expect(testTransporter)
      .to.have.nested.property('transporter.options.auth.pass', testOptions.auth.pass)
  })

})

describe('transporter.verify()', () => {

  // create a stub of transporter.verify() 
  let verifyStub
  beforeEach(() => {
    verifyStub = sinon.stub(transporter, 'verify')
  })

  afterEach(() => {
    verifyStub.restore()
  })

  it('should invoke the provided callback', () => {
    // create a test callback and set the
    // verify stub to invoke it
    let callbackSpy = sinon.spy()
    verifyStub.yields()

    transporter.verify(callbackSpy)

    expect(callbackSpy).to.have.been.calledOnce
  })

  // describe('successful verification', () => {

  //   it('should invoke the callback with undefined parameters', () => {

  //   })

  // })

  // describe('verification fail', () => {

  //   it('should invoke the callback with the error', () => {

  //   })

  // })

})
