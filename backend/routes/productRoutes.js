import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router();
import Product from '../models/productModel'


// GET ALL products MOVED FROM SERVER
// create API route then set up respond with json (could do send but only json is sent to and from, although send would work because it would convert it to json type )
// and call products which is the variable on line 6 requiring the products.js from the data folder (save and check port 5000/api/products and will see all products in array)
// anything that is /api etc wil get pointed to this file so we can just have /
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products)
}));

// GET SINGLE product
router.get('/:id', asyncHandler(async (req, res) => {
    // p stands for singular product much like (p : product) in the new array set up and then req.params reads the url and grabs that product that equals p._id
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    }else{
        res.status(404).json({message: 'Product not found'})
    }

}));

export default router