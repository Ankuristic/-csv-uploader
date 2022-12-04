const express = require('express');   
const port = process.env.PORT || 8000;
const path = require('path');
const fs = require('fs');

const app = express();         
app.set('view engine','ejs');  //setting up view engine as ejs
app.set('views',path.join(__dirname,'views'));   //setting path of views folder

app.use(express.urlencoded({extended: true}));  //using parser to read form data

app.use(express.static('assets'));    //accesing static files from assets folder
app.use('/uploads',express.static(__dirname+'/uploads'));   //accesing uploaded files from uploads folder 


app.use('/',require('./routes/home'));    //using index file of routes for all the routes


app.listen(port, () => {
  console.log("Server running on port " + port);
});