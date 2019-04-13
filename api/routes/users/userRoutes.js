const express = require('express')
const router = express.Router()

const userService = require('./userService')

// GET /users/
router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const users = await userService.listUsers()
      res.json({
        data: users,
      })
    } catch (e) {
      next(e)
    }
  })
  // POST /users/ (create new user)
  .post(async (req, res, next) => {
    const {body} = req
    try {
      const user = await userService.createUser(body)
      res.status(201).json({
        data: [user],
      })
    } catch (e) {
      next(e)
    }
  })

exports.router = router
