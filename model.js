const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_CONN_STR)

const UserSchema = Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports.User = mongoose.model('User', UserSchema)
