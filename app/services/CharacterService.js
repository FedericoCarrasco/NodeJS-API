const { query } = require('express')
const Character = require('../models/Character')
const service = {}

service.post = async (character) => {
    const newCharacter = new Character({
        name: character.name,
        image: character.image,
        age: character.age,
        weight: character.weight,
        story: character.story,
        movies: character.movies
    })
    try {
        return await newCharacter.save()
    } catch (error) {
        throw new Error(error.message)
    }
}

service.getAll = async (queryList) => {
    const query = {}
    if (queryList.name) query.name = queryList.name
    if (queryList.age) query.age = queryList.age
    if (queryList.weight) query.weight = queryList.weight
    const characters = await Character.find(query, 'name')
    return characters
}

service.getById = async (id) => {
    return await Character.findById(id, 'name image age weight story')
}

module.exports = service