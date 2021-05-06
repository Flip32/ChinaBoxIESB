const mongoose = require('mongoose')

const ProdutosSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            unique: true
        },
        preco: {
            type: Number,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        imagem: String,
        permiteAlteracao: {
            type: Boolean,
            default: false
        }
    }, {
    timestamps: true
}
)

module.exports = mongoose.model('Produtos', ProdutosSchema)
