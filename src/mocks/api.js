const express = require('express')
const { topics, articles } = require('./data')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use(cors())

api.get('/api/articles', (req, res) => {
  res.json(articles)
})

api.get('/api/topics', (req, res) => {
  res.json(topics)
})

api.listen(5001, () => {
  console.log('listening on 5001')
})
