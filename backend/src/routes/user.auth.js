const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');   
const JWT_SECRET = process.env.JWT_SECRET

router.post('/register', async (req,res)=>{
    const {username,email,password,phoneNumber} = req.body;
    // check karenge user exist karta hai ya nahi 
    const isexisted = await userModel.findOne({
        $or:[{username:username},{email:email},{phoneNumber:phoneNumber}]
    });

    if(isexisted){
        return res.status(409).json({
            "message": "user already existed"
        })
    }

    // ab user create karunga 
    const user = await userModel.create({
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
    });

    // ab token generate karenge
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email,
        },
        
    )

    // setting up cookie
    res.cookie("token",token,{
        httpOnly: true,
    })

    return res.status(201).json({
        "message": "user registered successfully",
        user:{
            _id: user._id,
            username: user.username,
            email: user.email,
        }
    });
})
router.post('/login', async (req,res)=>{
    res.status(201).send({
        "message": "user logged in"
    });
})


// module.exports = {regi}
module.exports = router;






