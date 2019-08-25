const express = require('express')

const db = '../data/dbConfig.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const cars = db('cars')
        res.status(200).json(cars)
    } catch (error) {
        if (!error.code) {
            res.status(500).json({ 
                message: 'Server error',
                error: error})
        } else {
            res.status(error.code).json(error)
        }
    }
})

module.exports = router