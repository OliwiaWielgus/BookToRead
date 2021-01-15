const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
//połączenie z bazą danych
//dodaj własną bazę, a w pliku nodemon.js zaszyfruj hasło 
mongoose.connect('mongodb+srv://leniuchowo1:'+ process.env.hasloAtlasa +'@project0.ourzn.mongodb.net/shop?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true}
);

app.use('/uploads', express.static('uploads'))
//logger
app.use(morgan('combined'))
//parsowanie
app.use(bodyParser.json());

const bookRoutes =  require('./api/routes/books');
const userRoutes =  require('./api/routes/users');

app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) =>{
    const error = new Error('Nie znaleziono');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        blad: 
        {wiadomosc: error.message}

    });
});

module.exports = app;
