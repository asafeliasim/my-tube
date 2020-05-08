const express = require("express");
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.get('/',(req,res)=>res.json({msg: 'Welcome to MY-TUBE API'}));

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/playlist',require('./routes/platlists'));
app.listen(PORT,()=>{
    console.log('Server started on port '+ PORT);
});