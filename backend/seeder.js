import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

//looks like server.js but aren't connected at all

//create .env file in root
dotenv.config();

// call the db.js file we imported and we should connect
connectDB();

// IMPORT DATA
const importData = async () => {
    try {
        // mongoose method deleteMany with nothing passed in so will delete everything b/c you don't want to import anything with stuff already in the db
        // returns a promise need 'await'
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // passing users to import to db (mongoose method insertMany)
        // createdUser is array of users
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        // user spread operator to add the adminUser id to each product (see it set up in productModel )
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        process.exit()

    }catch(error){
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
}

// DESTROY DATA
const destroyData = async () => {
    try {
        // mongoose method deleteMany with nothing passed in so will delete everything b/c you don't want to import anything with stuff already in the db
        // returns a promise need 'await'
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit()

    }catch(error){
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
}

//call it with 'node backend/seeder' or 'node backend/seeder -d' in terminal
// 2 index is what will be destroyed (-d)
if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}