const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Personagem = require('../models/personagem');

router.use(authMid);

//buscar todos as personagens do usuário
router.get('/', async (req, res) => {
    //res.send({ok: true});
    try{
        const personagens = await Personagem.find({criador: req.userId});

        return res.status(200).send({personagens});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar personagens'});
    }
});

//TODO: checar se o usuário da req é igual ao dono do personagem
//buscar uma personagem
router.get('/:personagemId', async (req, res) => {
    try{
        const personagem = await Personagem.findById(req.params.personagemId);

        return res.status(200).send({personagem});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar personagem'});
    }
});

//criar personagem
router.post('/', async (req, res) => {
    try{
        const personagem = await Personagem.create({...req.body, criador: req.userId});

        return res.status(200).send({personagem});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar novo personagem'});
    }
});

//TODO: checar se o usuário do token é dono do personagem
//editar personagem
router.put('/:personagemId', async (req, res) => {
    try{
        const personagem = await Personagem.findByIdAndUpdate(req.params.personagemId, req.body, {new: true});
        
        return res.status(200).send({personagem});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao editar magia'});
    }
});

//TODO: checar se o usuário da req é dono do personagem
//deletar personagem
router.delete('/:personagemId', async (req, res) => {
    try{
        await Personagem.findByIdAndRemove(req.params.personagemId);

        return res.status(200).send({delete: true});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao deletar personagem'});
    }
});

module.exports = app => app.use('/personagemAuth', router);