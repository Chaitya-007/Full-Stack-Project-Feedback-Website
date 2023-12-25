const fs = require("node:fs"); // Importing fs module
const express = require("express"); // Importing express
const mongoose = require("mongoose");   // Importing mongoose

const app = express(); // Creating an express app
const port = process.env.PORT || 5000; // Setting up the port

const User = require("./model/user") // Importing the user model

const DB = 'mongodb+srv://chaitya:chaitya007@atlascluster.7dddwr1.mongodb.net/mernstack?retryWrites=true&w=majority'

// Middleware
 app.use(express.urlencoded({ extended: true })); // For parsing the data
// Yeh karna hoga agar hum store kar rahe hai data

app.use(express.static("public")); // For serving static files

// mongoose.connect("mongodb://127.0.0.1:27017/UserDataDB").then(() => {
//     console.log("Database connected");
// }).catch((e)=>{
//     console.log(e) // for printing the error
//     console.log("Database not connected");
// })
// Yaha par hum mongoose ko connect karenge
// copy and paste url from mongodb database
// remove the localhost
// 127.0.0.1 => add in case the localhost is not working
// localhost:27017 => default port of mongodb
// UserDataDB => Database name

// ** This section is of this youtuber thapa technical
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(() => {
//     console.log("Connection Successfull");
// }).catch((e)=>{
//     console.log(e) // for printing the error
//     console.log("Database not connected");
// })

mongoose.connect(DB).then(() => {
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e) // for printing the error
    console.log("Database not connected");
})

app.post("/formPost",async(req,res) => {
    const userData = new User(req.body)
    await userData.save() // save the data
    res.sendFile(__dirname + '/public/thanks.html');
})
// Yaha par hum data ko store karenge
// The first argument of post must be same as the form action
// req => request
// res => response
// async => jab mera data store nahi hoga tab tak we aage nahi badega

// Jab hum main page par honge "/"
// Browser will request to the server
// Server will send the file in get like res.send("Hello World") or index.html
app.get("/", (req, res) => {

    // **
    // res.send("Hello World, Kya bolta bhidu");
    // let a = fs.readFileSync("./index.html") // read the file
    // res.send(a.toString()) // send the file
    // ** This section is of this youtuber

    // ** The below line is of another youtuber
    res.sendFile(__dirname + '/public/index.html');

    // ** The below line is of copilot
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));


});

// Jab hum about section mai honge toh "/about"
// app.get("/about", (req, res) => {
//     res.send("This is about section");
// });

// Jab hum contact section mai honge toh "/contact"
// app.get("/contact", (req, res) => {
//     res.send("This is contact section");
// });

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});