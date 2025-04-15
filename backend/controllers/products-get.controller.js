import fetchProductsData from '../services/products-get.service.js'

const getProducts = async (req, res) => {
    try {
        const products = await fetchProductsData();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}

export default getProducts;