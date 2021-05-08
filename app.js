const express = require('express')
const mongoose = require('mongoose')
const produtosRoute = require('./routes/produtos')
const pedidosRoute = require('./routes/pedidos')

const app = express()
const port = process.env.PORT || 3330
const mongoUri = process.env.MONGO_URL

console.log('========================================')
console.log('mongUri => ', mongoUri)

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('Mongo conectado')).catch(e => console.log('Erro ao tentar conectar com o mongo. ', e))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/produtos', produtosRoute)
app.use('/pedidos', pedidosRoute)

app.listen(port, () => console.log('Api está ativa'))
