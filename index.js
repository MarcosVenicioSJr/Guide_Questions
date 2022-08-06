const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("perguntar", (res, req) => {
    res.render("perguntar")
})

app.listen(8000, () => { console.log("Programa rodando!") })