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
    perguntaModel.findAll({
        raw: true, order: [
            ['id', 'DESC'] // muda a ordem que as perguntas aparecem. ASC(crescente), DESC(decrescente)
        ]
    }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        })
    })

})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id
    perguntaModel.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            res.render("pergunta", {
                pergunta: pergunta
            })
        } else {
            res.redirect("/")
        }
    })
})

app.listen(8000, () => { console.log("Programa rodando!") })