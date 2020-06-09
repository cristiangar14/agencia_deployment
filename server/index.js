// importar express
const express = require('express');
//para acceder a los archivos del sistema
const path = require('path');
//
const bodyParser = require('body-parser')

//importar rutas 
const routes = require('./routes');
//importar config
const configs = require('./config');

require('dotenv').config({ path:'variables.env' })

/*db.authenticate()
  .then(() => console.log('DB conectada'))
  .catch(error => console.log(error));
*/

//configurar express

const app = express();


//habilitar pug 
app.set('view engine', 'pug');
//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada public 
app.use(express.static('public'));


//validar si estamos en desarrollo o en produccion

const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;



//muestra el año actual y genera la ruta
app.use((req, res, next) => {
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    
    return next();
})



// ejecutamos el bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//cargar las rutas

app.use('/', routes());


/* Puesrto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () =>{
  console.log('El servidor esta funcionando');
})

//aplicacion escucha por el puerto
//app.listen(3000);


