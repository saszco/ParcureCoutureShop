const productService = require('../services/product.service')

exports.fetchProductsAsync = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}