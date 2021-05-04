const Pedido = require('../models/pedidos')

async function store(req, res) {
    try{
        const data = await Pedido.create(req.body)
        return res.json(data)
    } catch (e) {
        console.log('Deu ruim ao salvar pedido. ', e)
        return res.status(500)
    }
}

async function index(req, res) {
    try{
        const data = await Pedido.find({})
        return res.json(data)
    } catch (e) {
        console.log('Deu ruim ao consultar pedidos. ', e)
        return res.status(500)
    }
}

async function indexOne(req, res) {
    const { id } = req.params
    try{
        const pedido = await Pedido.findById(id)

        if(!pedido){
            return res.status(404).json({ error: 'Order not found' })
        }

        return res.json(pedido)
    } catch (e) {
        console.log('Deu ruim ao indexar um pedido. ', e)
        return res.status(500)
    }
}

async function erase(req, res) {
    const { id } = req.params

    try{
        const pedido = await Pedido.findById(id)

        if(!pedido){
            return res.status(404).json({ error: "Order not found" })
        }

        await Pedido.remove({_id: id})

        return res.json({ message: 'Order deleted successfully'})
    } catch (e) {
        console.log('Deu ruim ao consultar pedidos. ', e)
        return res.status(500)
    }
}

module.exports = { store, index, indexOne, erase }
