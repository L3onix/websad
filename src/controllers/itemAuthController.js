const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Item = require('../models/item'),
    Tipo = require('../models/item/tipo');

router.use(authMid);

//buscar todos os itens que o usuário criou
router.get('/', async (req, res) => {
    //res.send({ok: true});
    try{
        const itens = await Item.find({criador: req.userId});

        return res.status(200).send({itens});
    }catch(err){
        console.log(err);
        return res.status(200).send({err: 'Erro ao carregar itens'});
    }
});

//TODO: checar se o item procurado pertence a quem está fazendo a requisição
//buscar um item
router.get('/:itemId', async (req, res) => {
    try{
        const item = await Item.findById(req.params.itemId);

        return res.status(200).send({item});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar o item'});
    }
})

//criar item
router.post('/', async (req, res) => {
    try{
        //const tipo = req.body.tipo;
        //const tipoId = await buscarTipo(req.body.tipo);
        //console.log(tipoId._id);

        //req.body.tipo = tipoId._id;
        //console.log(req.body.tipo);

        const item = await Item.create({...req.body, criador: req.userId});

        return res.status(200).send({item});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar novo tipo'});
    }
});

//TODO: criar método para checar se quem está fazendo a requisição é realmente dono do item
//editar item
router.put('/:itemId', async (req, res) => {
    try{
        //passando o Id do tipo para dentro da requisição
        //const tipoId = buscarTipo(req.body.tipo);
        //req.body.tipo = tipoId._id;

        const {nome, tipo, valor, peso, descricao} = req.body
        const item = await Item.findByIdAndUpdate(req.params.itemId, {
            nome,
            tipo,
            valor,
            peso,
            descricao
        }, {new: true});

        return res.status(200).send(item);
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao editar item'});
    }
});

//TODO: criar método para checar se o usuário fez a requisição é dono do item
//deletar item
router.delete('/:itemId', async (req, res) => {
    try{
        await  Item.findByIdAndRemove(req.params.itemId);

        return res.status(200).send({delete: true});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao deletar item'});
    }
})

//TODO: checar quando não existe o tipo selecionado
function buscarTipo(nomeTipo){
    const tipoId = Tipo.findOne({nome: nomeTipo}, '_id');
    return tipoId;
}

module.exports = app => app.use('/itemAuth', router);