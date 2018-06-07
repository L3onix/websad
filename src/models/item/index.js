//require
const mongoose = require('../../database/connection');

const ItemSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    tipo:{
        moeda:{
            type: Boolean
        },
        gema:{
            type: Boolean
        },
        objetodearte:{
            type: Boolean
        },
        itemcomum:{
           armadura:{
               type: Boolean
           },
           arma:{
               type: Boolean
           },
           equipamento:{
               type: Boolean
           }
        },
        itemmagico:{
            anel:{type: Boolean},
            armadura:{type: Boolean},
            arma:{type: Boolean},
            bastao:{type: Boolean},
            cajado:{type: Boolean},
            itemmaravilhoso:{type: Boolean},
            pergaminho:{type: Boolean},
            pocao:{type: Boolean},
            varinha:{type: Boolean},
        },
        ferramenta:{
            type: Boolean
        }
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