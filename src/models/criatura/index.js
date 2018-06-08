const mongoose = require('../../database/connection');

const CriaturaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    tamanho:{
        type: String,
        required: true
    },
    tendencias:[{
        type: String
    }],
    classedearmadura:{
        type: String,
        required: true
    },
    pontosdevida:{
        type: Number,
        required: true
    },
    descolamentos:{
        type: JSON
    },
    atributos:{
        type: JSON
    },
    pericias:{
        type: JSON
    },
    sentido:{
        type: String
    },
    idioma:[{
        type: String
    }],
    niveldesafio:{
        type: Number
    },
    habilidades:{
        type: JSON
    },
    acoes:{
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

const Criatura = mongoose.model('Criatura', CriaturaSchema);

module.exports = Criatura;