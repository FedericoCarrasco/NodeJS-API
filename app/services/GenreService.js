const Genre = require("../models/Genre")
const service = {}

service.create = async (genre) => {
    const newGenre = new Genre({
        name: genre.name,
        image: genre.image
    })
    try {
        const savedGenre = await newGenre.save()
        return savedGenre
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = service