const express = require ('express');

const app = express();

//settings
app.set('AppName','DnaExpress'); //Define variable global para nombre de la aplicación
app.set ('port','5000'); //define variable global para puerto del servidor
app.set('view engine','ejs');

//middlewares
app.use(express.json());

