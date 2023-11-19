const express = require('express')
const countries = require('./countries.json')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/api/search', (req, res) => {
  const filter = req.query.filter
  const re = new RegExp(filter, 'i')
  res.json(countries.filter(item => re.test(item.name)).slice(0, 10))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})