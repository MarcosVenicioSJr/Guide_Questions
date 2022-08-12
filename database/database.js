const sequelize = require('sequelize')

const connection = new sequelize('Guia_Perguntas', 'MARCOSVENICIO', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection