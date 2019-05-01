const User = require('./userModel')
const {HTTP401Error} = require('../../utils/httpErrors')

const createUser = async userData => {
  const user = new User(userData)
  return await user
    .save()
    .exec()
    .catch(error => error)
}

const findUser = async userId => {
  return await User.findById(userId)
    .exec()
    .catch(error => error)
}

const isUser = async ({email, password}) => {
  const [user] = await User.find({email})
  if (user) {
    const match = await user.comparePassword(password)
    if (match) {
      return user
    }
  }
  throw new HTTP401Error().catch(error => error)
}

module.exports = {
  createUser,
  findUser,
  isUser,
}
