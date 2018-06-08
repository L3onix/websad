const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Classe = require('../models/classe');

router.use(authMid);

//buscar todos as classes do usuário
router.get('/', async (req, res) => {
    //res.send({ok: true});
    try{
        const classes = await Classe.find({criador: req.userId});

        return res.status(200).send({classes});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar classes'});
    }
});

//TODO: checar se o usuário da req é igual ao dono da classe
//buscar uma classe
router.get('/:classeId', async (req, res) => {
    try{
        const classe = await Classe.findById(req.params.classeId);

        return res.status(200).send({classe});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar classe'});
    }
});

//criar classe
router.post('/', async (req, res) => {
    try{
        const classe = await Classe.create({...req.body, criador: req.userId});

        return res.status(200).send({classe});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar nova classe'});
    }
});

//TODO: checar se o usuário do token é dono da classe
//editar classe
router.put('/:classeId', async (req, res) => {
    try{
        const classe = await Classe.findByIdAndUpdate(req.params.classeId, req.body, {new: true});
        
        return res.status(200).send({classe})
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao editar classe'});
    }
});

//TODO: checar se o usuário da req é dono da classe
//deletar classe
router.delete('/:classeId', async (req, res) => {
    try{
        await Classe.findByIdAndRemove(req.params.classeId);

        return res.status(200).send({delete: true});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao deletar classe'});
    }
});

module.exports = app => app.use('/classeAuth', router);