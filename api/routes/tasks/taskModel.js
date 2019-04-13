const mongoose = require('mongoose')
const {Schema} = mongoose

const {schema: userSchema} = require('../users/userModel')

const taskSchema = (exports.schema = new Schema({
  taskName: String,
  taskDescription: String,
  date: new Date(),
  collaborators: [userSchema],
  completed: false,
}))

exports.model = mongoose.model('Tasks', taskSchema)
