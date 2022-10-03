const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    image: String,
    age: Number,
    weight: Number,
    story: String,
    movies: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Movie"
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("Character", schema)