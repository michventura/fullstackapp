const {model: User} = require('../routes/users/userModel')
const {model: Project} = require('../routes/projects/projectModel')
const {model: Task} = require('../routes/tasks/taskModel')

exports.truncate = async () => {
  await User.deleteMany()
  await Project.deleteMany()
  await Task.deleteMany()
}

exports.seed = async () => {
  try {
    const userData = [
      {
        username: 'Mich',
        email: 'michcodes@hotmail.com',
        password: '123456',
        projects,
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
    const users = await Promise.all(userPromises)

    const projectData = [
      {
        title: 'Landing page mockup',
        users,
        tasks,
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

    const taskData = [
      {
        taskName: 'Landing page assets',
        taskDescription: 'Create landing page copy and images',
        date: new Date(),
        completed: false,
        users,
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

    console.log('Seeding completed.')
  } catch (e) {
    console.error('Seeding failed...')
    throw e
  }
}
