import jwt from 'jsonwebtoken'

// expires in 30 days can set the time to however long
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
};

export default generateToken