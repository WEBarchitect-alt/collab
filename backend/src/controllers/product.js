const productmodel = require('../models/products.model');

const IMAGEKIT = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const { URLEndpoints } = require('@imagekit/nodejs/resources/accounts/url-endpoints.js');

const imagekit = new IMAGEKIT({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});






async function addProduct(req,res){
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: req.file.originalname,
        folder: 'products',
    })
    const {name, price, category, isAvailable, rating, numReviews} = req.body;
    const product = await productmodel.create({
        name,
        price,
        image: file.url,
        category,
        isAvailable,
        rating,
        numReviews,
    });
    return res.status(201).json({
        "message": "product added successfully",
        product: product,
    })
}

async function getProducts(req,res){
    const products = await productmodel.find();
    return res.status(200).json({
        "message": "product fetched successfully",
        products: products,
    })
}



module.exports = { addProduct, getProducts };