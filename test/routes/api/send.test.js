const expect = require('chai').expect
const request = require('supertest')
const app = require('../../../server')

describe('POST to /api/send', () => {

  const data = {
    email: 'test@test.com',
    message: 'this is a test...'
  }

  it('should respond with JSON success message', done => {
    request(app)
      .post('/api/send')
      .send(data)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.status).to.equal('success!')
        expect(res.body.email).to.equal(data.email)
        expect(res.body.message).to.equal(data.message)
        done()
      })
      .catch(err => done(err))
  })

})
