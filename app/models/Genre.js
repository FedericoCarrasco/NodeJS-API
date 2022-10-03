const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    image: String,
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

module.exports = mongoose.model("Genre", schema)