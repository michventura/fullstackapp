const mongoose = require('mongoose')
const {Schema} = mongoose

const {schema: userSchema} = require('../users/userModel')
const {schema: taskSchema} = require('../tasks/taskModel')

const projectSchema = (exports.schema = new Schema({
  title: String,
  author: [userSchema],
  tasks: [taskSchema],
}))

exports.model = mongoose.model('Projects', projectSchema)
