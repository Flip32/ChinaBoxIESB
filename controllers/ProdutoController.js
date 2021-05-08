const ControllerDefault = require('../utils/controllerDefault')
const Produto = require('../models/produtos')
const Yup = require('yup')

const validationSchema = Yup.object().shape({
    nome: Yup.string().required(),
    preco: Yup.number().required(),
    descricao: Yup.string().required(),
    imagem: Yup.string()
})

class ProdutoController extends ControllerDefault {

    constructor() {
        super(validationSchema, Produto)
    }

}

module.exports = new ProdutoController()
