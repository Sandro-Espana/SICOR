
const mysql = require('mysql');//Paquete MySql para NodeJs

const connection = mysql.createConnection(// Configuración de la conexión a la base de datos
  {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pruebas'
});

function conectarDB() {// Función para conectar a la base de datos
    connection.connect((error) => {
      if (error) {
        console.error('Error al conectar a la base de datos: ' + error.stack);
        return;
      }
      console.log('Conexión exitosa a la base de datos con el ID ' + connection.threadId);
    });
    return connection;// Devolver la conexión para poder usarla en otros archivos
  }


  module.exports = conectarDB(); //Exporta funcion para otros modulos