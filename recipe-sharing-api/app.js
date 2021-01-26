require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3009;
const MONGOURI = process.env.MONGODB_URI;
const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencodeded({ extended: true }));

//Routes from the controllers directory
const controller = require('./controllers/controllers');

//Database Connection
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

app.listen(PORT, () => {
    console.log('Coming in loud and clear on ', PORT);
});

module.exports = app;