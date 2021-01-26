const { Schema, model } = require('mongoose');

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // list of recipe id's that were favorited/created by user...used to pull index for user profile?? or filter.
  favs: [{type: String}] 
})
module.exports = model('User', userSchema);