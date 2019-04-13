const express = require('express')
const router = express.Router()

const projectService = require('./projectService')

// GET /project/
router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const projects = await projectService.listProjects()
      res.json({
        data: projects,
      })
    } catch (e) {
      next(e)
    }
  })
  // POST /project/ (create new project)
  .post(async (req, res, next) => {
    const {body} = req
    try {
      const project = await projectService.createProject(body)
      res.status(201).json({
        data: [project],
      })
    } catch (e) {
      next(e)
    }
  })

exports.router = router
