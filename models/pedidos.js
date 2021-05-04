const mongoose = require('mongoose')

const PedidosSchema = new mongoose.Schema(
    {
        produtos: [
            {
                id: {
                    type: String,
                    required: true
                },
                qnt: {
                    type: String,
                    required: true
                },
                subTotal: {
                    type: Number,
                    required: true
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
