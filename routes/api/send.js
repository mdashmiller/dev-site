const express = require('express')

const router = express.Router()

// @route   POST api/send
// @desc    Send a message
// @access  Public
router.post('/', (req, res) => {
  const { email, message } = req.body

  res.json({
    status: 'success!',
    email,
    message
  })
})

module.exports = router
