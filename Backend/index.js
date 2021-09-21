const express = require('express');
const morgan = require('morgan');
const path = require('path');

//initializations
const app = express();
const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
//procesan todas las peticiones antes de que lleguen
app.use(morgan('dev'));//todos los middleware de express son funciones
app.use(express.json()); //entiende Json y AJAX

//routes
app.use('/api/users',require('./routes/users'));//importa las rutas del server desde ubicación
app.use('/api/articles',require('./routes/articles'));

//statis files
app.use(express.static(path.join(__dirname,'public')));//permite al navegador leer archivos estaticos


//start the server
app.listen(app.get('port'), () =>{
    console.log('server on port ',app.get('port'));
});