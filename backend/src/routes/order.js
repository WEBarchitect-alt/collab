const express = require('express');
const { createorder } = require('../controllers/order.controller');
const { identify } = require('../middlewares/user.middleware');

const rou = express.Router();

rou.post('/create', identify, createorder);


module.exports=rou;