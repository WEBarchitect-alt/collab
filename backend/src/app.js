const express = require('express');
const router = require('./routes/user.auth');
const app = express();

app.use('/api/auth', router);

module.exports = app;