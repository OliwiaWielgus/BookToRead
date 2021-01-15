const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title:{
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    bookImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema);