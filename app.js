const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());   // Anytime we hit any request the body-parser will run


// Import Routes
const cantorsRoute = require('./routes/cantors');

app.use('/cantors', cantorsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, options, () =>
    console.log('connected to db!')
);


app.listen(process.env.PORT || 3000);