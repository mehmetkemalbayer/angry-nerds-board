const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_CONN_STR)

const VoteSchema = Schema({
  bungee_inline: {
    type: Number,
    required: true
  },
  fontdiner_swanky: {
    type: Number,
    required: true
  },
  press_start_2p: {
    type: Number,
    required: true    
  },
  special_elite: {
    type: Number,
    required: true
  },
  cabin_condensed: {
  type: Number,
  required: true
  },
  comfortaa: {
    type: Number,
    required: true
  },
  exo: {
    type: Number,
    required: true    
  },
  orbitron: {
    type: Number,
    required: true
  },
  arvo: {
    type: String,
    required: true
  },
  sansita: {
    type: Number,
    required: true
  },
  amarante: {
    type: Number,
    required: true
  },
  sicil: {
    type: Number,
    required: true,
    unique: true
  }
})
module.exports.Vote = mongoose.model('Vote', VoteSchema)
