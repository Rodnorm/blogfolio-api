'use strict'

const mongoose = require('mongoose');
const Article = mongoose.model('Article');

exports.post = async(body) => {
    
    const res = await Article(body).save();
    return res;
}
