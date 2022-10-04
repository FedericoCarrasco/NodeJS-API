const express = require('express')
const Genre = require('../models/Genre')
const service = require('../services/GenreService')
const controller = express.Router()

controller.post('/', async (req, res) => {
    // Genre.remove({}, () => 'all removed')
    try {
        newGenre = await service.create(req.body)
        res.status(201).json(newGenre)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

controller.get('/', (req, res) => {
    
})

controller.get('/:id', (req, res) => {
    
})

controller.patch('/:id', (req, res) => {
    
})

controller.put('/:id', (req, res) => {
    
})

module.exports = controller