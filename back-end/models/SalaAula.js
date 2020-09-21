const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    capacidade: { type: Number, required: true, desault: 15, min: 5, max: 25 },
    recursos_didaticos: { type: String }
})

// Parâmetros do mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema montada anteriormente
// 3º -> o nome da coleção no BD que irá receber os objetos que serão
//       criados a partir des motel (inicial minúscula, plural do nome do model)
module.exports = mongoose.model('SalaAula', esquema, 'salas_aula')