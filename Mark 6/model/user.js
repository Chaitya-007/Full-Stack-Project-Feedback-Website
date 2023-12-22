const mongoose = require("mongoose");

// Define Schemes
const userData = new mongoose.Schema(
    {
        username:{
            type: String,
            // required: true,
            // min: 6,
            // max: 255
        },
        password:{
            type: String,
            // required: true,
            // min: 6,
            // max: 1024
        },
        email:{
            type: String,
        },
        age:
        {
            type: Number,
            // required: true,
            // min: 6,
            // max: 1024
        }
   
    }
)

// Model mai wrap karke jo bhi data hoga hamara usko collection mai wrap karenge
const User = mongoose.model("User", userData);
// User is the name of the collection

module.exports = User;
// Yaha par hum usko export karenge taki hum usko dusre file mai use kar sake like index.js mai