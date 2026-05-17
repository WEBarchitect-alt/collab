const express = require('express');
const router = require('./routes/user.auth');
const routerr = require('./routes/product.auth');
const rou = require('./routes/order');
const cors = require('cors');
const cookieParser = require('cookie-parser');



const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use('/api/auth', router);
app.use('/api/product', routerr);
app.use('/api/order', rou);

module.exports = app;