require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to the database'))

app.use(express.json())
app.listen(3000, () => console.log('Server started'))
