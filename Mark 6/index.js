const expresss = require("express");
const mongoose = require("mongoose");   // Importing mongoose

const app = expresss(); // Creating an express app
const port = process.env.PORT || 5000; // Setting up the port



// Jab hum main page par honge "/"
app.get("/", (req, res) => {
    res.send("Hello World, Kya bolta bhidu");
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