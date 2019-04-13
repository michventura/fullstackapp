const {model: Task} = require('./taskModel')

exports.listTasks = async () => {
  return await Task.find({})
}

exports.createTask = async taskData => {
  try {
    const task = new Task(taskData)
    return await task.save()
  } catch (e) {
    throw e
  }
}
