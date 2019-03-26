const express = require('express')
const transporter = require('../../services/nodemailer/createTransport')
const { gmailUser, sendTo } = require('../../config')

const router = express.Router()

// @route   POST api/send
// @desc    Send a message
// @access  Public
router.post('/', (req, res) => {
  const message = `
    <p>From: ${req.body.email}</p>
    <p>Message: ${req.body.message}</p>
    `
  
  // setup email data
  let mailOptions
  if (process.env.NODE_ENV = 'test') {
    mailOptions = {
      from: 'testUser',
      to: 'testReceiver',
      subject: 'test subject',
      html: 'test html'
    }
  } else {
    mailOptions = {
      from: gmailUser,
      to: sendTo,
      subject: 'mattmiller.com contact form submission',
      html: message
    }
  }

  // send mail with imported transport object
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })

})

module.exports = router
