const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
//Database



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    res.send("Fomulário recebido")
})

app.listen(8000, () => { console.log("Programa rodando!") })