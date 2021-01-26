//===============================//
//+++++++Dependencies, ect+++++++//
//===============================//
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3009;
const MONGOURI = process.env.MONGODB_URI;
const cors = require('cors');


//===============================//
//+++++AUTHENTICATION VARS+++++++//
//===============================//
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//===============================//
//++++++++++MIDDLEWARE+++++++++++//
//===============================//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//===============================//
//++++++++++++ROUTES+++++++++++++//
//===============================//
const controller = require('./controllers/controllers');
app.use('/recipe', controller);

//===============================//
//+++++DATABASE CONNECTION+++++++//
//===============================//
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
mongoose.connection.on('error',  (err) => {
    console.log('You\'re disconnected from MongoDB, you should refresh');
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

//====================================================//
//++++++++++++++++++++AUTH ROUTES+++++++++++++++++++++//
//====================================================//

//===============================//
//+++++++REGISTER ROUTE++++++++++//
//===============================//
app.post('/register', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(createdUser);
        }
    })
});
//===============================//
//+++++++++LOGIN ROUTE+++++++++++//
//===============================//
app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({ username })
        if(bcrypt.compareSync(password, user.password)){
            const token = jwt.sign({
                username: user.username            
            }, SECRET)
            res.status(200).json({
                token, 
                username,
                authenticated: true
            })
        }
    } catch (error) {
        console.error(400).json(error);
    }
});

app.listen(PORT, () => {
    console.log('Coming in loud and clear on ', PORT);
});

module.exports = app;