const ControllerDefault = require('../utils/controllerDefault')
const Pedido = require('../models/pedidos')
const Yup = require('yup')


const validationSchema = Yup.object().shape({
    clienteNome: Yup.string().required(),
    produtos: Yup.array(Yup.object().shape({
        idProduto: Yup.string().required(),
        qnt: Yup.string().required(),
        comentario: Yup.string()
    }))
})

class PedidoController extends ControllerDefault {

    constructor() {
        super(validationSchema, Pedido, 'pedido')
    }

}

module.exports = new PedidoController()
