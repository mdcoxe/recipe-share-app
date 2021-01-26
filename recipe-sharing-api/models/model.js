const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    qty: { type: Number, required: true }
})

module.exports = mongoose.model('Recipe', recipeSchema);