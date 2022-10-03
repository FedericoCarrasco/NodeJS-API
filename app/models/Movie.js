const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    image: String,
    releaseDate: Date,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Genre"
    },
    characters: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Character"
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

module.exports = mongoose.model("Movie", schema)