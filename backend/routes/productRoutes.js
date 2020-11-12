import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router();
// import Product from '../models/productModel.js'
import { getProducts, getProductById } from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import {deleteProduct, createProduct, updateProduct} from "../controllers/productControllers.js";

// GET ALL products MOVED FROM SERVER
// create API route then set up respond with json (could do send but only json is sent to and from, although send would work because it would convert it to json type )
// and call products which is the variable on line 6 requiring the products.js from the data folder (save and check port 5000/api/products and will see all products in array)
// anything that is /api etc wil get pointed to this file so we can just have /

router.route('/').get(getProducts).post(protect, admin, createProduct);

router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct);



export default router