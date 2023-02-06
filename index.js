//index.js is the main file of the Issue Tracker 
//loading express
const express = require('express');
//path of the file stored locally is obatined
const path = require('path');
//a port is stored in a variable
const port = 8000
//express is assigned to a constant variable
const app = express();
//The express.urlencoded() function is a built-in middleware function in Express. 
//It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded());
//loading the database javascript file 
const db = require('./config/mongoose');
//setting the view engine "ejs"
//A template engine enables you to use static template files in your application.
// At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. 
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

//setting the home route to routes.js file where further routing takes place
app.use('/', require('./routes'));

//seting our app to listen in th designated port aand console logging the status
app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log("The Issue Tracker Server is up and Running On the Port :", port);
});