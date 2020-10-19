const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    formacao: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    // CPF com índice único para evitar duplicidades
    cpf: { type: String, required: true, index: { unique: true } },
    rg: { type: String, required: true },
    valor_hora_aula: { type: Number, required: true, default: 20.15 },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    // e-mail com índice único para evitar duplicidade
    email: { type: String, required: true, index: { unique: true} }
})

// Parâmetros do mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema montada anteriormente
// 3º -> o nome da coleção no BD que irá receber os objetos que serão
//       criados a partir des motel (inicial minúscula, plural do nome do model)
module.exports = mongoose.model('Professor', esquema, 'professores')