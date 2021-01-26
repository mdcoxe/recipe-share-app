const { Schema, model } = require('mongoose');

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  favs: [{type: String}] 
})
module.exports = model('User', userSchema);