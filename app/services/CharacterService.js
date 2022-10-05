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
    const character = await Character.findById(id, 'name image age weight story')
    return character
}

service.patch = async (id, newCharacter) => {
    const characterToPatch = await Character.findById(id)
    if (newCharacter.name) characterToPatch.name = newCharacter.name
    if (newCharacter.image) characterToPatch.image = newCharacter.image
    if (newCharacter.age) characterToPatch.age = newCharacter.age
    if (newCharacter.weight) characterToPatch.weight = newCharacter.weight
    if (newCharacter.story) characterToPatch.story = newCharacter.story
    if (newCharacter.movies) characterToPatch.movies = newCharacter.movies
    characterToPatch.updatedAt = Date.now()
    return await characterToPatch.save()
}

service.put = async (id, newCharacter) => {
    const characterToPatch = await Character.findById(id)
    characterToPatch.name = newCharacter.name
    characterToPatch.image = newCharacter.image
    characterToPatch.age = newCharacter.age
    characterToPatch.weight = newCharacter.weight
    characterToPatch.story = newCharacter.story
    characterToPatch.movies = newCharacter.movies
    characterToPatch.updatedAt = Date.now()
    return await characterToPatch.save()
}

service.delete = async (id) => {
    return await Character.findByIdAndRemove(id)
}

module.exports = service