const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const {Schema} = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    unique: true,
    enum: ['manager', 'developer', 'designer', 'copywriter'],
  },
})

userSchema.pre('save', async function(next) {
  const user = this
  if (user.isModified('password') || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10)
      user.password = hash
      return next()
    } catch (e) {
      return next(e)
    }
  } else {
    return next()
  }
})

userSchema.method('comparePassword', function(password) {
  return bcrypt.compare(password, this.password)
})

module.exports = mongoose.model('user', userSchema)
