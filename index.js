const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

//Database
require('./db/db');

//Importing routes
const auth = require('./routes/auth');

app.set('port', process.env.PORT || 5000);

//Use routes
app.use("/api/auth", auth);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log("Server on port: ", app.get('port'))
})