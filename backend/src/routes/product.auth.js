const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage()});
const { addProduct, getProducts } = require('../controllers/product');

const routerr = express.Router();

routerr.post('/AddProduct',upload.single('image'),  addProduct);
routerr.get('/getProducts', getProducts);

module.exports = routerr;