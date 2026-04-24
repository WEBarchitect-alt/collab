const app = require('./src/app');
require('dotenv').config();
const connectDB = require('./src/config/db');

connectDB();

app.listen(3000, (req,res)=>{
    console.log(`server run on ${3000} port`);
})