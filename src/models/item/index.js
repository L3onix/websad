//require
const mongoose = require('../../database/connection');

const ItemSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
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
    },
    atributos:{
        type: JSON
    },
    oficial:{
        type: Boolean,
        default: false,
        required: true
    },
    criador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;