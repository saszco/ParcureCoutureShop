const mongoose = require('mongoose')

const clientsSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    country: String,
    city: String,
    address: String,
    mobile_phone: Number
})

module.exports = mongoose.model('Clients', clientsSchema)