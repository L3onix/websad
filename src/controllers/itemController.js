//TODO: Preencher este arquivo
const jwt = require('jsonwebtoken'),
    authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: 'Nenhum token encontrado'});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return 
    }
}