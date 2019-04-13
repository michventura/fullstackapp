const {model: User} = require('./userModel')

exports.listUsers = async () => {
  return await User.find({})
}

exports.createUser = async userData => {
  try {
    const user = new User(userData)
    return await user.save()
  } catch (e) {
    throw e
  }
}
