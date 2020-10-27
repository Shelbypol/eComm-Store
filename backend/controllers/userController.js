import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Want to find email that matches line 7 email
    const user = await User.findOne({ email: email });

//    Check if user exists with compare method inside of userModel if true return user json data
    if(user && (await user.matchPassword(password))){
        res.json({
            __id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    }else {
        // 401 unauthorized
        res.status(401);
        throw new Error('Invalid email or password')
    }
});

export {authUser}