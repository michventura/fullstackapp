const project = require('./projectModel')

const listProjects = () => {
  return project.find({}).exec()
}

const getProject = projectId => {
  return project.findById(projectId).exec()
}

const createProject = projectData => {
  return project.create(projectData).exec()
}

const updateProject = (projectId, update) => {
  return project.findByIdAndUpdate(projectId, update, {new: true}).exec()
}

const removeProject = projectId => {
  return project.findByIdAndDelete(projectId).exec()
}

module.exports = {
  listProjects,
  getProject,
  createProject,
  updateProject,
  removeProject,
}
