const express = require('express')
const app = express()
const port = 3000

app.get('/hey', (req, res) => {
  res.send('Hello Sogilis !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})