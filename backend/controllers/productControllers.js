import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
});


// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    // p stands for singular product much like (p : product) in the new array set up and then req.params reads the url and grabs that product that equals p._id
    const product = await Product.findById(req.params.id);

    // setting status is optional if not set it will automatically be a 500 error
    if (product) {
        res.json(product)
    }else{
        res.status(404);
        throw new Error('Product not found')
    }
});

export {
    getProducts,
    getProductById
}