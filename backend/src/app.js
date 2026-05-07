const express = require('express');
const router = require('./routes/user.auth');
const routerr = require('./routes/product.auth');
const app = express();


app.use('/api/auth', router);
app.use('/api/product', routerr)

module.exports = app;