const express = require('express');
const route = express.Router();
const Model = require('../models/model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    if(authorization){
        const token = authorization.split(' ')[1]
        try{
            const payload = await jwt.verify(token, SECRET)
            req.user = payload
            next();
        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        res.status(400).json(new Error('No token in header'))
    };
};

//===============================//
//+++++++++INDEX ROUTE+++++++++++//
//===============================//
route.get('/', async (req, res) => {
    try{
        const foundRecipes = await Model.find({});
        res.status(200).json(foundRecipes);
    } catch (error) {
        req.status(400).json(error);
    }
});

//===============================//
//+++++++++DELETE ROUTE++++++++++//
//===============================//
route.delete('/:id', async (req, res) => {
// route.delete('/:id', auth, async (req, res) => {
    try {
        const deleteRecipe = await Model.findByIdAndRemove(req.params.id);
        res.status(200).json(deleteRecipe);
    } catch (error) {
        res.status(400).json(error);
    }
});

//===============================//
//+++++++++UPDATE ROUTE++++++++++//
//===============================//
route.put('/:id',  async (req, res) => {
// route.put('/:id', auth, async (req, res) => {
    try {
        const updateRecipe = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updateRecipe);
    } catch (error) {
        res.status(400).json(error);
    }
});

//===============================//
//+++++++++CREATE ROUTE++++++++++//
//===============================//
route.post('/',  async (req, res) => {
// route.post('/', auth, async (req, res) => {
    try {
        const createRecipe = await Model.create(req.body);
        res.status(200).json(createRecipe);
    } catch (error) {
        res.status(400).json(error);
    }
});

//===============================//
//++++++++++EDIT ROUTE+++++++++++//
//===============================//
route.get('/:id/edit', async (req, res) => {
    try{
        const editRecipe = await Model.findById(req.params.id);
        res.status(200).json(editRecipe);
    } catch (error) {
        res.status(400).json(error);
    } 
});

//===============================//
//++++++++++SHOW ROUTE+++++++++++//
//===============================//
route.get('/:id', async (req, res) => {
    try{
        const findRecipe = await Model.findById(req.params.id);
        res.status(200).json(findRecipe);
    } catch (error) {
        res.status(400).json(error);
    } 
});

module.exports = route;