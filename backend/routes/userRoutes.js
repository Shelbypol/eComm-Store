import express from 'express'
const router = express.Router();

import { authUser, getUserProfile} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// GET ALL products MOVED FROM SERVER
// create API route then set up respond with json (could do send but only json is sent to and from, although send would work because it would convert it to json type )
// and call products which is the variable on line 6 requiring the products.js from the data folder (save and check port 5000/api/products and will see all products in array)
// anything that is /api etc wil get pointed to this file so we can just have /

router.post('/login', authUser);

//to implement middleware use it as a first argument
router.route('/profile').get(protect, getUserProfile);

export default router