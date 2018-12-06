'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();
const config = require('./config');

mongoose.connect(config.connectionString, { useNewUrlParser: true });
const Article = require('./models/post.models');

const index = require('./routes/index');
const post = require('./routes/post.route');


app.use(bodyParser.json());
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, x-access-token');
    res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/posts', post);

module.exports = app;