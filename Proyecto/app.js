// Importación de módulos
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const rutasViews = require('./routes/routesViews');
const auth = require('./routes/routesAuth'); // Importa las rutas de autenticación desde el archivo auth.js
const crud = require('./routes/routesCrud'); 

// Creación de una aplicación Express
const app = express();

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configurar la carpeta 'views' para las vistas EJS
app.set('views', path.join(__dirname, 'views'));

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Puerto en el que el servidor escuchará las solicitudes
const port = 3000;

// Habilita CORS para permitir solicitudes desde otros dominios
//app.use(cors());

// Configuración para manejar solicitudes JSON
app.use(express.json());

// Uso de las rutas desde rutasViews.js
app.use('/', rutasViews);

//Define las rutas en tu aplicación, en este caso, la ruta de autenticación '/api'
  app.use('/api', auth);

// rutas de los end-points
// Define las rutas en tu aplicación
app.use('/', crud);

// Conexión a MongoDB
mongoose.connect('mongodb+srv://jmmaponte:282311Chio@cluster0.ps28jmv.mongodb.net/cluster0?retryWrites=true&w=majority&appName=AtlasApp');
const db = mongoose.connection;

// Manejo de eventos de conexión y error a MongoDB
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/*
El código que se proporciona es un servidor web básico utilizando Node.js y 
Express, con integración de MongoDB mediante Mongoose. Además, 
incluye configuraciones para manejar vistas con EJS, CORS para 
permitir solicitudes desde otros dominios, 
y una ruta de autenticación definida en el archivo auth.js. 

*/