import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
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
            token: generateToken(user._id)
        })
    }else {
        // 401 unauthorized
        res.status(401);
        throw new Error('Invalid email or password')
    }
});


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Want to find email that matches line 7 email
    const userExist = await User.findOne({ email: email });

//    Check if user exists with compare method inside of userModel if true return user json data
    if(userExist){
        //bad request
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        //201 something was created
        res.status(201).json({
            __id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(400);
        throw new Error('Invalid user data')
    }

});


// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    // return this for the logged in user
    if(user){
        res.json({
            __id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        // 404 not found
        res.status(404);
        throw new Error('User not found')
    }

});

// @desc    UPDATE user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save();

        res.json({
            __id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        })
    } else {
        // 404 not found
        res.status(404);
        throw new Error('User not found')
    }
});


// @desc    GET all users
// @route   GET /api/users/
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users)
});


// @desc    DELETE delete user
// @route   DELETE pi/users/:di
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(user){
        await user.remove();
        res.json({ message: 'User removed' })
    }else{
        res.status(404);
        throw new Error('User not found')
    }


    res.json(users)
});

// @desc    GET user by id
// @route   GET /api/users/id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(user){
        res.json(user)
    }else{
        res.status(404);
        throw new Error('User not found')
    }

});

// @desc    UPDATE user
// @route   PUT /api/users/id
// @access  Private/admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin;

        const updatedUser = await user.save();

        res.json({
            __id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        // 404 not found
        res.status(404);
        throw new Error('User not found')
    }
});

export {authUser, registerUser ,getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser}