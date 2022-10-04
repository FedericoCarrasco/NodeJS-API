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

controller.get('/', async (req, res) => {
    try {
        genres = await service.getAll(req.query)
        res.status(200).json(genres)
    } catch (error) {
        res.json(error.message)
    }
})

controller.get('/:id', async (req, res) => {
    try {
        genre = await service.getById(req.params.id)
        res.json(genre)
    } catch (error) {
        res.json(error.message)
    }
})

controller.patch('/:id', async (req, res) => {
    try {
        genre = await service.patch(req.params.id, req.body)
        res.json(genre)
    } catch (error) {
        res.json(error.message)
    }
})

controller.put('/:id', (req, res) => {
    
})

module.exports = controller