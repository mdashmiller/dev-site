// const expect = require('chai').expect
// const request = require('supertest')
// const mockery = require('mockery')
// const nodemailerMock = require('nodemailer-mock')

// describe('POST to /api/send', () => {

//   // testable message data sent
//   // on the req object
//   const testReqData = {
//     email: 'test@test.com',
//     message: 'this is a test...'
//   }

//   // expected mail options in the
//   // test environment
//   const testMailOptions = {
//     from: 'testUser',
//     to: 'testReceiver',
//     subject: 'test subject',
//     html: 'test html'
//   }

//   let app

//   before(() => {
//     mockery.enable({ warnOnUnregistered: false })
//     mockery.registerMock('nodemailer', nodemailerMock)

//     app = require('../../../server')
//   })

//   after(function () {
//     mockery.deregisterAll()
//     mockery.disable()
//   })

//   // describe('send failure', () => {

//   //   it('should respond with JSON failure message', done => {

//   //   })

//   //   it('should fail to send an email', done => {

//   //   })

//   // })

//   describe('send success', () => {

//     it('should respond with JSON success message', done => {
//       request(app)
//         .post('/api/send')
//         .send(testReqData)
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .then(res => {
//           expect(res.body.msg).to.equal('success')
//           done()
//         })
//         .catch(err => done(err))

//       nodemailerMock.mock.reset()
//     })

//     it('should send email using nodemailer-mock with expected properties', done => {
//       request(app)
//         .post('/api/send')
//         .send(testReqData)

//       let sentMail = nodemailerMock.mock.sentMail()

//       expect(sentMail.length).to.equal(1)
//       expect(sentMail[0].from).to.equal(testMailOptions.from)
//       expect(sentMail[0].to).to.equal(testMailOptions.to)
//       expect(sentMail[0].subject).to.equal(testMailOptions.subject)
//       expect(sentMail[0].html).to.equal(testMailOptions.html)

//       done()

//       nodemailerMock.mock.reset()
//     })

//     it('should send email with expected values from req.body', done => {
//       let response = request(app)
//         .post('/api/send')
//         .send(testReqData)

//       expect(response).to.have.nested.property('_data.email', testReqData.email)
//       expect(response).to.have.nested.property('_data.message', testReqData.message)

//       done()

//       nodemailerMock.mock.reset()
//     })

//   })

// })

// // testing the nodemailer middleware
// const chai = require('chai')
// const sinon = require('sinon')
// const sinonChai = require('sinon-chai')
// const nodemailer = require('nodemailer')
// const transporter = require('../../../services/nodemailer/createTransport')

// chai.use(sinonChai)

// describe('nodemailer middleware', () => {

//   // create a testable transporter
//   let createTransportSpy
//   beforeEach(() => {
//     createTransportSpy = sinon.spy(nodemailer, 'createTransport')
//   })

//   afterEach(() => {
//     createTransportSpy.restore()
//   })

//   it('calls transporter.sendMail()', () => {
//     let sendMailSpy = sinon.spy(transporter, 'sendMail')

//     transporter.sendMail({}, () => { })

//     expect(sendMailSpy).to.have.been.calledOnce

//     sendMailSpy.restore()
//   })

//   describe('sendMail()', () => {

//     // create a stub of transporter.sendMail() 
//     let sendMailStub
//     beforeEach(() => {
//       sendMailStub = sinon.stub(transporter, 'sendMail')
//     })

//     afterEach(() => {
//       sendMailStub.restore()
//     })

//     it('should invoke callback after sending the email', () => {
//       // create a test callback and set the
//       // sendMail stub to invoke it
//       let callbackSpy = sinon.spy()
//       sendMailStub.yields()

//       transporter.sendMail({}, callbackSpy)

//       expect(callbackSpy).to.have.be.calledOnce
//     })

//     it('should send email with the expected mail options', () => {
//       // create a test mailOptions object
//       const mailOptions = {
//         from: 'test@test.com',
//         to: 'send@to.com',
//         subject: 'test email',
//         html: 'some html'
//       }

//       transporter.sendMail(mailOptions, () => { })

//       expect(sendMailStub).to.be.calledWith(mailOptions)
//     })

//   })

// })
