const mongoose = require('mongoose')
const express = require('express')
const http = require('http')

const router = express()

const {applyMiddleware} = require('./utils')
const middleWare = require('./middleware')
const errorHandlers = require('./middleware/errorHandlers')

const {router: projectRoutes} = require('./routes/projects/projectRoutes')
const {router: userRoutes} = require('./routes/users/userRoutes')
const {PORT, URL} = require('./utils/constants')

applyMiddleware(middleWare, router)

router.use('/api/projects', projectRoutes)
router.use('/api/users', userRoutes)

applyMiddleware(errorHandlers, router)

const server = http.createServer(router)

mongoose.connect(URL, {useNewUrlParser: true}).then(async () => {
  console.log(`Connected to database at: ${URL}`)
  try {
    await require('./utils/seed').truncate()
    await require('./utils/seed').seed()

    server.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`)
      if (process.send) {
        // NOTE: process is being run by pm2
        process.send('ready')
      }
    })
  } catch (e) {
    console.error(`Error starting server: ${e}`)
    throw e
  }
})
