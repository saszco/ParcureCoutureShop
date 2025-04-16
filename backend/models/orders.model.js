const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clients',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    items: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
})

module.exports = mongoose.model('Orders', ordersSchema)