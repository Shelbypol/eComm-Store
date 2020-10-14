// this syntax using 'require' is common javascript which is traditionally what node.js used.
// on the frontend we are using the import syntax which is ES modules
// with node 14.4 you can use ES modules now without babel
const express = require ('express');
// bring over common ES export from root package.json
const products = require ('./data/products');

// initialize express with a variable
const app = express();

// create routes for GET POST PUT DELETE
// set up route and then run a function that takes in a request and a response object and then take that response object and
// call send to send to the client message that api is running (check port 5000 for message )
app.get('/', (req,res) => {
    res.send('API is running...')
} );

// create API route
// then set up respond with json (could do send but only json is sent to and from, although send would work because it would convert it to json type )
// and call products which is the variable on line 6 requiring the products.js from the data folder (save and check port 5000/api/products and will see all products in array)
app.get('/api/products', (req,res) => {
    res.json(products)
} );

// take variable app and listen on port 5000
app.listen(5000, console.log('Server running on port 5000'));

