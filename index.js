require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/status', (req, res)=>{
    res.send({status: "running", uptime: process.uptime()})
})

app.get('/blazox', (req, res) => {
    res.send('<h1>blazox</h1><p>Welcome, the blazox is live!</p>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
