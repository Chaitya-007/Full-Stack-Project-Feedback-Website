// Importing the express module to create an express application
const express = require('express');

// Setting the port for the application to listen on, defaulting to 5000 if no environment variable is set
const port = process.env.PORT || 5000;

// Creating an instance of an express application
// this is our app or instanace of our express application
const app = express();


// Api Middlewares

app.use(express.json()); // This is to accept data in json format

app.use(express.urlencoded()); //This is basically to decode the data send through html form

app.use(express.static('public')); // This is to serve static files like html,css,js,images etc from public folder

// Api Routes

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/formPost',(req,res)=>{

    // const {username,email,} = req.body; // This is called object destructuring

    // console.log(username);
    // console.log(email);

    // *** This is to get the data from the form field by filed name
    // console.log(req.body.username);
    // console.log(req.body.email);

    // console.log(req.body);// the data we get is in body of the request
    //  res.send('Form Submitted');
    // res.send(req.body); // This will send the data back to the client
    // res.sendStatus(200); // Sends the data with status code 200 that is 'ok'


    const {username,password,email,age} = req.body;

    if(!username ||  !password  || !email || !age)
    {
        return res.status(422).json({error:'Please fill all the fields'});
    }

    res.sendFile(__dirname + '/public/thanks.html');
})


// This is Basically to listen on port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

