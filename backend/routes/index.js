import { Router } from 'express';
import getProducts from '../controllers/products-get.controller.js';

const router = Router()

router.get('/', getProducts);

export default router;