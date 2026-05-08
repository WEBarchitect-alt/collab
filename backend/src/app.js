const express = require('express');
const router = require('./routes/user.auth');
const routerr = require('./routes/product.auth');
const rou = require('./routes/order');
const app = express();


app.use('/api/auth', router);
app.use('/api/product', routerr);
app.use('/api/order', rou);

module.exports = app;