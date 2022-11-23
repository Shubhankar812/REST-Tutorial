import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";

import userRoutes from './routes/users.js'

// initializing our express app
const app = express();

const port=3000 || process.env.PORT;

// for body parser 
app.use(bodyParser.json());

app.use('/users', userRoutes); 

app.get("/",(req,res)=>{
    console.log("Testing...")
    res.send("Hello from the home page!");
});

app.listen(port , ()=>{
    console.log(`listening at http://localhost:${port}`);
});