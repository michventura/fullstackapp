const mongoose = require('mongoose')
const {Schema} = mongoose

const {schema: projectSchema} = require('../projects/projectModel')

const userSchema = (exports.schema = new Schema({
  username: String,
  email: String,
  password: String,
  projects: [projectSchema],
}))

exports.model = mongoose.model('Users', userSchema)
