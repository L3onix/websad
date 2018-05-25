//requires
const mongoose = require('mongoose');

//conexão com o banco de dados 'websad'
mongoose.connect('mongodb://localhost/websad');
mongoose.Promise = global.Promise;

//exports
module.exports = mongoose;