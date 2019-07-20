const Sequelize = require('sequelize')
const conn = new Sequelize('08icawsoaw', '08icawsoaw', 'V19voL7it3', { host: 'remotemysql.com', dialect: 'mysql' })

conn.authenticate().then(() => {
    console.log('connection OK')
}).catch((err) => {
    console.log('connection error')
})

module.exports = conn;