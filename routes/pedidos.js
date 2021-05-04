const express = require('express')
const router = express.Router()
const PedidoController = require('../controllers/PedidoController')

let pedidos = [
    {
        id: 1,
        numeroDoPedido: 1,
        produtos: [
            {
                id: 2,
                qnt: 2,
                subTotal: 38.50
            },
            {
                id: 3,
                qnt: 5,
                subTotal: 9.95
            },
        ],
        clienteNome: 'José Marciano',
        total: 48.45
    },
    {
        id: 2,
        numeroDoPedido: 2,
        produtos: [
            {
                id: 1,
                qnt: 1,
                subTotal: 25.55
            },
            {
                id: 3,
                qnt: 2,
                subTotal: 3.98
            },
        ],
        clienteNome: 'Gretchel M',
        total: 29.53
    },
]


/* PEDIDOS */
// Lista todos os pedidos
router.get('/', PedidoController.index)

// Lista um pedido por id
router.get('/:id', (req, res) => {

})

// Cadastra um pedido
router.post('/', PedidoController.store)

// Deleta um pedido
router.delete('/:id', (req, res) => {

})

module.exports = router
