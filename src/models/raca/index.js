const mongoose = require('../../database/connection');

const RacaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    aprhabilidade:{
        type: Number,
        required: true
    },
    tendencia:[{
        type: String,
        required: true
    }],
    tamanho:{
        type: String,
        required: true
    },
    deslocamento:{
        type: Number,
        required: true
    },
    idioma:[{
        type: String,
        required: true
    }],
    subraca:[{
        type: String
    }],
    habilidade:{
        type: JSON
    },
    descricao:{
        type: String,
        required: true
    },
    criador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    oficial:{
        type: Boolean,
        default: false
    }
});

const Raca = mongoose.model('Raca', RacaSchema);

module.exports = Raca;