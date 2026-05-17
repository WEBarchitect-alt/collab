require('dotenv').config();
// const cors = require('cors');


const app = require('./src/app');

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173',
// }));

const connectdb = require('./src/config/db');

connectdb();

app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
})