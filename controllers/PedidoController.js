const Pedido = require('../models/pedidos')

    async function store(req, res) {
        try{
            const data = await Pedido.create(req.body)
            console.log('data no store => ', data)
            return res.json(data)
        } catch (e) {
            console.log('Deu ruim ao salvar pedido. ', e)
            return res.status(500)
        }
    }

    async function index(req, res) {
        try{
            const data = await Pedido.find({})
            console.log('data no store => ', data)
            return res.json(data)
        } catch (e) {
            console.log('Deu ruim ao consultar pedidos. ', e)
            return res.status(500)
        }
    }


module.exports = { store, index }
