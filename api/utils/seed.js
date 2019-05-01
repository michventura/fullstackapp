const User = require('../routes/users/userModel')
const Project = require('../routes/projects/projectModel')

exports.truncate = async () => {
  await User.deleteMany()
  await Project.deleteMany()
}

exports.seed = async () => {
  try {
    const userData = [
      {
        name: 'laura',
        email: 'reyna.lau@gmail.com',
        password: 'password',
        userRole: 'manager',
      },
      {
        name: 'mich',
        email: 'michcodes@hotmail.com',
        password: 'password',
        userRole: 'developer',
      },
      {
        name: 'gabriel',
        email: 'wolve_21@yahoo.com',
        password: 'password',
        userRole: 'designer',
      },
      {
        name: 'renata',
        email: 'showbo@hotmail.com',
        password: 'password',
        userRole: 'copywriter',
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
        title: 'Design the presentation for fundraising',
        members: [users],
        tasks: [
          {
            taskName: 'Presentation copywriting',
            taskDescription:
              'Make sure the copywriting for the presentation is ready to convert skepticals into raving fans',
            createdAt: Date.now(),
            completed: false,
          },
          {
            taskName: 'Presentation design',
            taskDescription:
              'Have the desing fully flesh out to have it real pretty',
            createdAt: Date.now(),
            completed: false,
          },
        ],
      },
      {
        title: 'Develop and deploy the MVP Application',
        members: [users],
        tasks: [
          {
            taskName: "Application's backend design and development",
            taskDescription: 'Create the API and DBL for the backend',
            createdAt: Date.now(),
            completed: false,
          },
          {
            taskName: "Application's frontend design and development",
            taskDescription:
              'Create the design assets and frontend of the application',
            createdAt: Date.now(),
            completed: false,
          },
        ],
      },
      {
        title: 'Showcase the presentation and application demo to VC',
        members: [users],
        tasks: [
          {
            taskName: 'Application market impact and ROI for VC lecture',
            taskDescription:
              'Explanation of the impact the application will have on the market and ROI',
            createdAt: Date.now(),
            completed: false,
          },
          {
            taskName: 'Application technological features lecture',
            taskDescription:
              'Explanation of the technological features the application will have',
            createdAt: Date.now(),
            completed: false,
          },
        ],
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

    await Promise.all(projectPromises)
  } catch (e) {
    console.error('Seeding failed...')
    throw e // This `throw` will be caught in the server.js file
  }
}
