// this syntax using 'require' is common javascript which is traditionally what node.js used.
// on the frontend we are using the import syntax which is ES modules
// with node 14.4 you can use ES modules now without babel
const express = require ('express');

// initialize express with a variable
const app = express();


// take variable app and listen on port 5000
app.listen(5000, console.log('Server running on port 5000'));

//RUN  ' node backend/server '
