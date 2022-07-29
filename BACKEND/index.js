var express=require('express');
var mongoose=require('mongoose');//step 1 
var usermodel=require('./models/user.model')

//step2 create properties.js file in a folder

var dbURL=require('./properties/properties').DBURL;//step 3

mongoose.connect(dbURL);//step 4

//step 5
mongoose.connection.on("connected",()=>{
    console.log("Connected");
})
var app=new express();

var user=require('./routes/user');

app.use('/user',user);

app.listen(3000);