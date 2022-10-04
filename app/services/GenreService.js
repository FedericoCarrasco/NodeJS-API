const Genre = require("../models/Genre")
const service = {}

service.post = async (genre) => {
    const newGenre = new Genre({
        name: genre.name,
        image: genre.image
    })
    try {
        return await newGenre.save()
    } catch (error) {
        throw new Error(error.message)
    }
}

service.getAll = async (queryList) => {
    const query = {}
    if (queryList.name) query.name = queryList.name
    return await Genre.find(query, 'name')
}

service.getById = async (id) => {
    return await Genre.findById(id, 'name image')
}

service.patch = async (id, newGenre) => {
    const genreToPatch = await Genre.findById(id)
    if (newGenre.name) genreToPatch.name = newGenre.name
    if (newGenre.image) genreToPatch.image = newGenre.image
    genreToPatch.updatedAt = Date.now()
    return await genreToPatch.save()
}

service.put = async (id, newGenre) => {
    const genreToPut = await Genre.findById(id)
    genreToPut.name = newGenre.name
    genreToPut.image = newGenre.image
    genreToPut.updatedAt = Date.now()
    return await genreToPut.save()
}

module.exports = service