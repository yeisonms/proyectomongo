const { Schema, model } = require('mongoose');
const bookSchema = new Schema({
    title: { type: String, required: true },
    autor: { type: String, required: true },
    isbn: { type: String, required: true },
    imgPath: { type: String },
    create_at: { type: Date, default: Date.nom }


});


module.exports = model('Book', bookSchema);