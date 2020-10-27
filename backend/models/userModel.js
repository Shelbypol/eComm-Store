import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    // could just be name:String but since we have multiple fields we make it an object
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    //add this second argument and it will add date and time automatically
    timestamps: true
});

// methods to instantiate user and use in userController (we are calling it matchPassword
userSchema.methods.matchPassword = async function(enteredPassword) {
//    compared method will compare plain text to the encrypted pass
//     use await b/c we are returning a promise
    return await bcrypt.compare(enteredPassword, this.password)
};

// set to mongoose.Model b/c we want to create a model from this schema
const User = mongoose.model('User', userSchema);

export default User