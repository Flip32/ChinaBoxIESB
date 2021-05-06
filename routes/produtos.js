const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

/* PRODUTOS */
// Lista todos os produtos
router.get('/', ProdutoController.index)

// Lista um produto pelo id
router.get('/:id', ProdutoController.indexOne)

// Cadastra um produto novo
router.post('/', ProdutoController.store)

// Delete um produto
router.delete('/:id', ProdutoController.erase)

// Atualiza um ou mais ítens do produto
router.patch('/:id', ProdutoController.updateOne)

module.exports = router
