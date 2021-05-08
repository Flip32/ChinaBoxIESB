const ControllerDefault = require('../utils/controllerDefault')
const Pedido = require('../models/pedidos')
const Yup = require('yup')


const validationSchema = Yup.object().shape({
    clienteNome: Yup.string().required(),
    produtos: Yup.array(Yup.object().shape({
        id: Yup.string().required(),
        qnt: Yup.string().required(),
        subTotal: Yup.number().required()
    }))
})
class PedidoController extends ControllerDefault {

    constructor() {
        super(validationSchema, Pedido)
    }

}

module.exports = new PedidoController()
