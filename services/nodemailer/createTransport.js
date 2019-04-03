const nodemailer = require('nodemailer')
const { gmailUser, gmailPass } = require('../../config')
const nodemailerMock = require('nodemailer-mock')

// create transporter dependent on NODE_ENV
let transport, transporter

if (process.env.NODE_ENV === 'test') {
  // fake SMTP details for testing
  transport = {
    host: 'test.smtp',
    port: 000,
    secure: false,
    auth: {
      user: 'test user',
      pass: 'test pass'
    }
  }

  // create stand-in transporter for tests
  transporter = nodemailerMock.createTransport(transport)

} else {
  // SMPT details
  transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: gmailPass
    }
  }

  // create transporter object using gmail SMTP
  transporter = nodemailer.createTransport(transport)
}

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('server ready to take messages')
  }
})

module.exports = transporter
