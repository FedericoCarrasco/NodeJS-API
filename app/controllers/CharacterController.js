const express = require('express')
const service = require('../services/CharacterService')
const controller = express.Router()

controller.post('/', async (req, res) => {
    try {
        newCharacter = await service.post(req.body)
        res.status(201).json(newCharacter)
    } catch (error) {
        res.json(error.message)
    }
})

controller.get('/', async (req, res) => {
    try {
        characters = await service.getAll(req.query)
        res.status(200).json(characters)
    } catch (error) {
        res.json(error.message)
    }
})

controller.get('/:id', async (req, res) => {
    try {
        character = await service.getById(req.params.id)
        res.json(character)
    } catch (error) {
        res.json(error.message)
    }
})

controller.patch('/:id', (req, res) => {
    
})

controller.put('/:id', (req, res) => {
    
})

controller.delete('/:id', (req, res) => {
    
})

module.exports = controller