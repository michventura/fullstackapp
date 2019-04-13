const express = require('express')
const http = require('http')

const router = express()
const {applyMiddleware} = require('./utils')

const middleWare = require('./middleware')
const errorHandlers = require('./middleware/errorHandlers')

const {PORT} = require('./utils/constants')

applyMiddleware(middleWare, router)

applyMiddleware(errorHandlers, router)

const server = http.createServer(router)

server.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`)
  if (process.send) {
    process.send('ready')
  }
})
