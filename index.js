const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const perguntaModel = require('./database/Pergunta')

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão estabelecida")
    })
    .catch((err) => { console.log(err) })

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
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.listen(8000, () => { console.log("Programa rodando!") })