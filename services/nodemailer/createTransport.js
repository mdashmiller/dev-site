const nodemailer = require('nodemailer')
const { gmailUser, gmailPass } = require('../../config')

// SMPT details
const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: gmailUser,
    pass: gmailPass
  }
}

// create transporter object using gmail SMTP
const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('server ready to take messages')
  }
})

module.exports = transporter
