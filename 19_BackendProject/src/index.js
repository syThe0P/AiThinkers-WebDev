import dotenv from "dotenv";
import { app } from "./app.js"; // Import the app instance from app.js
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({
    path: './env'
})

// Connect to MongoDB database
connectDB()
.then(()=>{
    // If the database connection is successful, start the server
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listening!!! : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    // Log error if MongoDB connection fails
    console.log("Mongo DB connection failure !!", err);
})
