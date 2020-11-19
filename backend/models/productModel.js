import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // individual rating
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true
});

const productSchema = mongoose.Schema({
    // want to know what user/admin created a product so ref adds that relationship
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // could just be name:String but since we have multiple fields we make it an object
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    isWishList: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    //add this second argument and it will add date and time automatically
    timestamps: true
});

// set to mongoose.Model b/c we want to create a model from this schema
const Product = mongoose.model('Product', productSchema);

export default Product