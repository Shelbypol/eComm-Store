import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

// let to initialize
const protect = async (req, res, next) => {
  let token

    console.log(req.headers.authorization);
     next()
};

export { protect }