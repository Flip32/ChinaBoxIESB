const express = require('express')
const router = express.Router()
const PedidoController = require('../controllers/PedidoController')

/* PEDIDOS */
// Lista todos os pedidos
router.get('/', PedidoController.index)

// Lista um pedido por id
router.get('/:id', PedidoController.indexOne)

// Cadastra um pedido
router.post('/', PedidoController.store)

// Deleta um pedido
router.delete('/:id', PedidoController.erase)

module.exports = router
