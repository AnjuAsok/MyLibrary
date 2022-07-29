var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var usermodel=require('../models/user.model');

router.get('/',(req,res)=>{
    res.send("User router succes");
});

router.get('/register',(req,res,next)=>{
    let newuser=new usermodel({
        name:'anju',
        email:'anju@gmail.com',
        password:'12345'
    });
    newuser.save((err,newuser)=>{
        if(err)
        res.send(err);
        else
        res.send("new user registered")
    });
   
});
router.get('*',(req,res)=>{
    res.send("404:Page not found");
});



module.exports=router;
