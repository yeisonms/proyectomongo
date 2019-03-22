const mongoose = require('mongoose');
const uri = 'mongodb://localhost/biblioteca';
mongoose.connect(uri, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))