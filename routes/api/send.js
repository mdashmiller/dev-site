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
  
  const mailOptions = {
    from: gmailUser,
    to: sendTo,
    subject: 'mattmiller.com contact form submission',
    html: message
  }

  // send mail with imported transport object
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })

})

module.exports = router
