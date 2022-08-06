const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send("Bem vindo ao meu site")
})

app.listen(8000, () => { console.log("Programa rodando!") })