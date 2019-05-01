const Project = require('../routes/projects/projectModel')
const Task = require('../routes/tasks/taskModel')
const User = require('../routes/users/userModel')
const Collaborator = require('../routes/collaborators/collaboratorModel')

exports.truncate = async () => {
  await Project.deleteMany()
  await Task.deleteMany()
  await User.deleteMany()
  await Collaborator.deleteMany()
}

exports.seed = async () => {
  try {
    const taskData = [
      {
        taskTitle: 'Deploy application to test functionality and performance',
        taskDescription:
          'The deployment workflow must include all the requirements to be able to test the application UI',
        taskMembers: ['manager', 'developer', 'designer', 'copywriter'],
        createdAt: Date.now(),
        completed: false,
      },
    ]
    const taskPromises = taskData.map(async data => {
      try {
        const task = new Task(data)
        return await task.save()
      } catch (e) {
        throw e
      }
    })
    const tasks = await Promise.all(taskPromises)
    const collaborators = await Promise.all(collaboratorPromises)

    const projectData = [
      {
        title: 'FullStack Project',
        author: 'Mich',
        tasks,
        collaborators,
      },
    ]
    const projectPromises = projectData.map(async data => {
      try {
        const project = new Project(data)
        return await project.save()
      } catch (e) {
        throw e
      }
    })
    const projects = await Promise.all(projectPromises)

    const collaboratorData = [
      {
        firstName: 'Pablo',
        lastName: 'Ventura',
        avatar: '',
        role: 'manager',
        projects,
      },
    ]
    const collaboratorPromises = collaboratorData.map(async data => {
      try {
        const collaborator = new Collaborator(data)
        return await collaborator.save()
      } catch (e) {
        throw e
      }
    })
    await Promise.all(collaboratorPromises)

    const userData = [
      {
        email: 'email@email.com',
        password: 'password',
      },
    ]
    const userPromises = userData.map(async data => {
      try {
        const user = new User(data)
        return await user.save()
      } catch (e) {
        throw e
      }
    })
    await Promise.all(userPromises)

    console.log('Seeding completed.')
  } catch (e) {
    console.error('Seeding failed...')
    throw e // This `throw` will be caught in the server.js file
  }
}
