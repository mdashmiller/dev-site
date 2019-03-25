const nodemailer = require('nodemailer')
const nodemailerMock = require('nodemailer-mock')
const { gmailUser, gmailPass } = require('../../config')

// SMPT details
let transport, transporter
if (process.env.NODE_ENV = 'test') {
  transport = {
    host: 'smtp.test',
    port: 000,
    secure: false,
    auth: {
      user: 'testUser',
      pass: 'testPass'
    }
  }

  // create mock transporter for tests
  transporter = nodemailerMock.createTransport(transport)

} else {
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
