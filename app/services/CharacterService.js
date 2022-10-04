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

module.exports = service