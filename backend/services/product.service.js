const Product = require('../models/products.model')

exports.getAllProducts = () => {
    return Product.find()
}