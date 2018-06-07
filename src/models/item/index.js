//require
const mongoose = require('../../database/connection');

const ItemSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    tipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
    valor:{
        type: String,
        required: true
    },
    peso:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;