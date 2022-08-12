const sequelize = require('sequelize')

const connection = new sequelize('guia_perguntas', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection