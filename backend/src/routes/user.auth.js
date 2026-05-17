const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');   
const JWT_SECRET = process.env.JWT_SECRET

router.post('/register', async (req,res)=>{
    const {username,email,password,phoneNumber,isAdmin} = req.body;
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
        isAdmin: isAdmin
    });

    // ab token generate karenge
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
        },
        JWT_SECRET,
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
            isAdmin: user.isAdmin
        }
    });
})


router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find User
        const user = await userModel.findOne({
            email: email
        });

        // User Not Found
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Compare Password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        // Wrong Password
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Generate Token
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        // Set Cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });

        // Success Response
        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
            
        });

    }

});

// module.exports = {regi}
module.exports = router;





