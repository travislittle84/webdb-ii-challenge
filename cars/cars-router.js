const express = require('express')

const db = require('../data/dbConfig.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars')
        res.status(200).json(cars)
    } catch (error) {
        console.log('GET ERROR', error)
        if (!error.code) {
            res.status(500).json({ 
                message: 'Server error',
                error: error})
        } else {
            res.status(error.code).json(error)
        }
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('cars').where('id', id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(500).json({ message: `Error getting car with id: ${id}`})
    })
})

router.post('/', (req, res) => {
    const newCarData = req.body
    db('cars').insert(newCarData)
    .then(newTotalCarCount => {
        res.status(201).json({ "Total cars in database:": newTotalCarCount})       
    })
    .catch(error => {
        res.status(500).json({ message: "Error creating Car", error: error })
    })
})




module.exports = router