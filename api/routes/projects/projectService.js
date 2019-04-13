const {model: Project} = require('./projectModel')

exports.listProjects = async () => {
  return await Project.find({})
}

exports.createProject = async projectData => {
  try {
    const project = new Project(projectData)
    return await project.save()
  } catch (e) {
    throw e
  }
}
