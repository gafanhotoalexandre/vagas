const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/'))

// respondendo as requisições por meio da rota GET
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, function () {
    console.log('Servidor Web rodando com Express')
})