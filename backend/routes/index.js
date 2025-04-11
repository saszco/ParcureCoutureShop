import { Router } from 'express';
import getProductsData from './controllers/productsController.js';

const router = Router();

router.get('/products', async (req, res) => {
    try{
        const products = await getProductsData();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({error: 'Failed to fetch product data'});
    }
})

export default router;