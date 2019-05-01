const express = require('express')
const router = express.Router()

const projectService = require('./projectService')

// listProjects
router.get('/projects', async (req, res, next) => {
  const projects = await projectService.listProjects()
  res
    .json({
      data: projects,
    })
    .catch(error => next(error))
})

// getProject
router.get('/projects/:projectId', async (req, res, next) => {
  const project = await projectService.getProject()
  res
    .json({
      data: project,
    })
    .catch(error => next(error))
})

// createProject
router.post('/projects/:projectId', async (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(403).end()
  }
  const {body} = req
  const project = await projectService.createProject(body)
  res
    .status(201)
    .json({
      data: [project],
    })
    .catch(error => next(error))
})

// updateProject
router.put('/projects/:projectId', async (req, res, next) => {
  const project = await projectService.updateProject()
  res
    .json({
      data: project,
    })
    .catch(error => next(error))
})

// removeProject
router.delete('/projects/:projectId', async (req, res, next) => {
  const user = await projectService.removeProject()
  res
    .json({
      data: user,
    })
    .catch(error => next(error))
})

module.exports = router
