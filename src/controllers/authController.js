//requires
const express = require('express'),
    User = require('../models/user'),
    bcrypt = require('bcryptjs');

//variáveis
router = express.Router();

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
        const user = await Use.create(req.body);

        //limpa o campo password do user
        user.password = undefined;

        //resposta da requisição com sucesso
        //retorna os dados do user e o token de acesso
        return res.send({
            user
        });
    }catch(err){    //tratamento de 

    }
})