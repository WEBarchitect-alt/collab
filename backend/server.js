const app = require('./src/app');
require('dotenv').config();
const connectdb = require('./src/config/db');

connectdb();

app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
})