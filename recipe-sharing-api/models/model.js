const { Schema, model } = require('mongoose');

const ingredSchema = Schema({
    name: { type: String },
    qty: { type: String },
    measurement: { type: String }
});

const recipeSchema = Schema({
    title: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    servings: { type: Number },
    //id of user who created the recipe
    creator: { type: String, required: true },
    prep: { type: Number },
    cook: { type: Number },
    temp: { type: Number },
    ingredients: [ingredSchema],
    public: { type: Boolean },
    tags: [{ type: String, lowercase: true }]
});

module.exports = model('Recipe', recipeSchema);