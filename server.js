const express = require('express')
const helmet = require('helmet')

const carsRouter = require('./cars/cars-router.js')

const server = express()

server.use(helmet('dev'))
server.use(express.json())

server.use('/api/cars', carsRouter)
server.get('/', (req, res) => {
    res.send(`<h2>WebDB II Challenge - Travis Little</h2>`)
})

module.exports = server