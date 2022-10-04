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
    list = await Genre.find(query)
    return list
}

module.exports = service