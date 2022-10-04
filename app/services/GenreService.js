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

service.getAll = async (queryList) => {
    query = {}
    if (queryList.name) query.name = queryList.name
    return await Genre.find(query)
}

service.getById = async (id) => {
    return await Genre.findById(id)
}

service.patch = async (id, newGenre) => {
    genreToPatch = await Genre.findById(id)
    if (newGenre.name) genreToPatch.name = newGenre.name
    if (newGenre.image) genreToPatch.image = newGenre.image
    return await genreToPatch.save()
}

module.exports = service