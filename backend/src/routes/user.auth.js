const express = require('express');

const router = express.Router();

router.post('/register', (req,res)=>{
    res.status(200).send(
        {
            "message": "user registered"
        }
    )
})
router.post('/login', (req,res)=>{
    res.status(201).send({
        "message": "user logged in"
    });
})

module.exports = router;