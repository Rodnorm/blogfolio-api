'use strict'

const repository = require('../repositories/post.repository')

exports.post = async (req, res, next) => {
    try {        
        await repository
            .post(req.body);

        res.status(201).send({
            message: 'Post Salvo'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha',
            data: e
        });
    }
}