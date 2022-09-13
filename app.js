// port number
const port = 4000;

// importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./routes/route');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');
//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongoDB @ 27017');
});
//on error
mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error in database connection: ' + err);
    }
});

// adding middlewares
app.use(cors());
app.use(bodyParser.json());

//homepage
app.get('/', (req, res) => {
    res.send(
        `<h2 style="text-align:center">Welcome to the server</h2>`
    )
});

app.use('/api', route);

// static files like pics, css, ecc...
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log('Server up and listening on port ' + port);
});