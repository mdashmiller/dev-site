const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  gmailUser: process.env.SMPT_USER,
  gmailPass: process.env.SMPT_PASS,
  sendTo: process.env.SEND_TO
}
