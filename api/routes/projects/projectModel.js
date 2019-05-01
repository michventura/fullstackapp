const mongoose = require('mongoose')
const {Schema} = mongoose

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  ],
  tasks: [
    {
      taskName: {
        type: String,
        required: true,
        unique: true,
      },
      taskDescription: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      completed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
})

module.exports = mongoose.model('project', projectSchema)
