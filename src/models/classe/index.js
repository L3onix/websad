const mongoose = require('../../database/connection');

const ClasseSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    dadodevida:{
        type: String,
        required: true
    },
    armaduras:[{
        type: String
    }],
    armas:[{
        type: String
    }],
    ferramentas:[{
        type: String
    }],
    resistencias:[{
        type: String
    }],
    pericias:[{
        type: String
    }],
    habilidades:{
        type: JSON
    },
    subclasse:{
       type: JSON
    },
    progressao:{
        type: JSON
    },
    criador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    oficial:{
        type: Boolean,
        default: false,
        required: true
    }
});

const Classe = mongoose.model('Classe', ClasseSchema);

module.exports = Classe;