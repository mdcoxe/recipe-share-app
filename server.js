const express = require('express');
const app = require('./recipe-sharing-api/app');
app.use(express.static('web-build'));