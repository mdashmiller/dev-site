const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const greeting = 'Future Home of the Greatest Dev-site Ever!-ever!-ever!...'

  res.send(greeting)
})

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
