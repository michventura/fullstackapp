const express = require('express')
const router = express.Router()

const taskService = require('./taskService')

// GET /task/
router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const tasks = await taskService.listTasks()
      res.json({
        data: tasks,
      })
    } catch (e) {
      next(e)
    }
  })
  // POST /task/ (create new task)
  .post(async (req, res, next) => {
    const {body} = req
    try {
      const task = await taskService.createTask(body)
      res.status(201).json({
        data: [task],
      })
    } catch (e) {
      next(e)
    }
  })

exports.router = router
