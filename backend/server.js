// this syntax using 'require' is common javascript which is traditionally what node.js used.
// on the frontend we are using the import syntax which is ES modules
// with node 14.4 you can use ES modules now without babel was ( const express = require ('express') now wit
import express from 'express'

// import colors to change command line colors
import colors from 'colors'
// bring in env that installed in root (npm i dotenv) environmental variables to set up database connectio
import dotenv from 'dotenv'

// import middleware
import { notFound, errHandler } from './middleware/errorMiddleware.js'

// ES modules with node means add .js
// import db.js file to connect mongo
import connectDB from "./config/db.js";

// bring over common ES export from root package.json
// with type modules in root package.json we now need to add .js extension to file name (not on packages but on files)
// will switch this with mongo instead of locally pulling products
 import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'

//create .env file in root
dotenv.config();

// call the db.js file we imported and we should connect
connectDB();

// initialize express with a variable
const app = express();

// create routes for GET POST PUT DELETE
// set up route and then run a function that takes in a request and a response object and then take that response object and
// call send to send to the client message that api is running (check port 5000 for message )
app.get('/', (req,res) => {
    res.send('API is running...')
} );

//mount the productRoutes we imported
// anything that links to api/products we want to point to productRoutes
app.use('/api/products', productRoutes);


// 404 not found
app.use(notFound);

// MIDDLEWARE (error)
// func that looks at req and res
// 500 means server error
app.use(errHandler);

// // GET ALL products
// // create API route then set up respond with json (could do send but only json is sent to and from, although send would work because it would convert it to json type )
// // and call products which is the variable on line 6 requiring the products.js from the data folder (save and check port 5000/api/products and will see all products in array)
// app.get('/api/products', (req,res) => {
//     res.json(products)
// } );

// // GET SINGLE product
// app.get('/api/products/:id', (req,res) => {
//     // p stands for singular product much like (p : product) in the new array set up and then req.params reads the url and grabs that product that equals p._id
//     const product = products.find(p => p._id === req.params.id);
//     res.json(product)
// } );

const PORT = process.env.PORT || 5000;

// take variable app and listen on port 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

