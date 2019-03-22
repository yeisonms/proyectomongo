if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();

}


const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//inicializacion
const app = express();
require('./dbHelper');

//settinngs
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));


//routes



//stattic files



// star the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});