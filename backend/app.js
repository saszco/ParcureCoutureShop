const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'public/images')));

const productRoutes = require('./routes/product.routes')

app.use('/products', productRoutes)

module.exports = app;