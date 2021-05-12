const mongoose = require('mongoose')

const PedidosSchema = new mongoose.Schema(
    {
        produtos: [
            {
                idProduto: {
                    type: mongoose.Schema.Types.ObjectId, ref: "Produtos",
                    required: true
                },
                qnt: {
                    type: String,
                    required: true
                },
                comentario: {
                    type: String,
                    required: false
                }
            }
        ],
        clienteNome: {
            type: String,
            required: true
        },
        ativo:{
            type: Boolean,
            required: false,
            default: true
        },
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Pedidos', PedidosSchema)
