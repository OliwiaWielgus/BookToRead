const Book = require('../models/book');
const mongoose = require('mongoose');
exports.books_get_all = (req, res, next)=>{
    Book.find()
    .then(doc =>{
        res.status(200).json({
            wiadomosc: 'Lista książek do przeczytania',
            info: docs
        });
    })
    .catch(err => res.status(500).json({error: err})) ;  
};
exports.books_create = (req, res, next)=>{
    console.log(req.file);
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
        bookImage: req.file.path
    })
    book.save()
    .then(doc =>{
        res.status(201).json({
            wiadomosc: 'Dodano nową książkę do przeczytania',
            info: book
        });
    })
    .catch(err => res.status(500).json({error: err}));
    
};


exports.books_get = (req, res, next)=>{
    const id = req.params.bookId;
    Book.findById(id)
    .then(doc => {
        res.status(200).json({
            wiadomosc: 'Szczegóły książki o numerze ' + id,
            info: doc
        });
    })
    .catch(err => res.status(500).json({error: err}));    
};
exports.books_update = (req, res, next)=>{
    const id = req.params.bookId;
    Book.findByIdAndUpdate(id, { title: req.body.title, author: req.body.author}, {
        new: true})
    .then(doc =>{
        res.status(200).json({
            wiadomosc: 'Zmiana książki o numerze ' + id,
            info: doc
        });
    })
    .catch(err => res.status(500).json({error: err}))  
};
exports.book_delete = (req, res, next)=>{
    const id = req.params.bookId;
    Book.findByIdAndDelete(id)
    .then(doc => {
        res.status(200).json({
            wiadomosc: 'Usunięcie książki z listy do przeczytania o numerze ' + id,
            info : doc
        });
    })
    .catch(err => res.status(500).json({error: err}))   
};