//requires
const express = require('express'),
    User = require('../models/user'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    authConfig = require('../config/auth');

//variáveis
router = express.Router();

//function para gerar token
function gerateToken(params = []){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

//rota para efetuar cadastro de user
router.post('/register', async(req, res) => {
    //separa a variável email da requisição
    const {email} = req.body;

    //tentativa de cadastrar usuário
    try{
        //checa se já existe uma conta cadastrada com este email
        if(await User.findOne({email})){
            return res.status(400).send({error: 'Usuário já existe'});
        }

        //cria usuário com os dados da requisição
        const user = await User.create(req.body);

        //limpa o campo password do user
        user.password = undefined;

        //resposta da requisição com sucesso
        //retorna os dados do user e o token de acesso
        return res.send({
            user,
            token: gerateToken({id: user.id})
        });
    }catch(err){    //tratamento de erro
        //resposta da requisição com falha
        return res.status(400).send({error: 'Falha no cadastro'});
    }
});

//rota para efetuar autenticação do user
router.post('/authenticate', async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user){
        return res.status(400).send({error: 'Usuário não encontrado'});
    }
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({error: 'Senha inválida'});
    }

    user.password = undefined;

    res.status(200).send({
        user,
        token: gerateToken({id: user.id})
    });
});

module.exports = app => app.use('/auth', router);