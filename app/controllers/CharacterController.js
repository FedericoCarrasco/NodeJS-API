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

controller.get('/', (req, res) => {
    
})

controller.get('/:id', (req, res) => {
    
})

controller.patch('/:id', (req, res) => {
    
})

controller.put('/:id', (req, res) => {
    
})

controller.delete('/:id', (req, res) => {
    
})

module.exports = controller