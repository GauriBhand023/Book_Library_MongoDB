const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema9({
    name: String,
    required: true
})

module.exports = mongoose.model('Author', authorSchema)