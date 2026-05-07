const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage()});
const { addProduct } = require('../controllers/product');

const routerr = express.Router();

routerr.post('/AddProduct',upload.single('image'),  addProduct);

module.exports = routerr;