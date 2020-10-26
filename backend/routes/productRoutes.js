import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router();
import Product from '../models/productModel.js'


// GET ALL products MOVED FROM SERVER
// create API route then set up respond with json (could do send but only json is sent to and from, although send would work because it would convert it to json type )
// and call products which is the variable on line 6 requiring the products.js from the data folder (save and check port 5000/api/products and will see all products in array)
// anything that is /api etc wil get pointed to this file so we can just have /

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products)
}));

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
    // p stands for singular product much like (p : product) in the new array set up and then req.params reads the url and grabs that product that equals p._id
    const product = await Product.findById(req.params.id);

    // setting status is optional if not set it will automatically be a 500 error
    if (product) {
        res.json(product)
    }else{
        res.status(404);
        throw new Error('Product not found')
    }

}));

export default router