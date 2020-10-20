import mongoose from 'mongoose'

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

// set to mongoose.Model b/c we want to create a model from this schema
const User = mongoose.Model('User', userSchema);

export default User