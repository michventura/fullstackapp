exports.URL =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstackapp'
exports.PORT = process.env.PORT || 3001
exports.SECRET = process.env.SECRET || 'super-secret-passphrase'
exports.PUBLIC_FOLDER =
  process.env.NODE_ENV === 'production' ? 'build' : 'public'
