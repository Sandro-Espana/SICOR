
const connection = require('../dbMysql'); // Importa el módulo MySQL

const usuarioSchema = { // Define el esquema del usuario
  name: {
    type: 'VARCHAR(255)',
    allowNull: false
  },
  username: {
    type: 'VARCHAR(255)',
    allowNull: false,
    unique: true
  },
  password: {
    type: 'VARCHAR(255)',
    allowNull: false
  }
};

const createUser = (newUsuario, callback) => { // Función para crear un nuevo usuario
  connection.query('INSERT INTO usuarios SET ?', newUsuario, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.insertId);
    }
  });
};



const findUserByUsername = (username, callback) => { // Función para encontrar un usuario por nombre de usuario
  connection.query('SELECT * FROM usuarios WHERE username = ?', [username], (error, results) => {
    if (error) { // Manejo del error: se pasa el error al callback
      callback(error, null);
    } else {// No hay error: se pasa null como primer argumento y los resultados como segundo argumento
      callback(null, results[0]); // Se asume que solo se espera un usuario
    }
  });
};


const findUserById = (userId, callback) => {// Función para encontrar un usuario por su ID
  connection.query('SELECT * FROM usuarios WHERE id = ?', [userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results[0]);
    }
  });
};


const deleteUser = (userId, callback) => { // Función para eliminar un usuario por su ID
  connection.query('DELETE FROM usuarios WHERE id = ?', [userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.affectedRows);
    }
  });
};



module.exports = {  //Se exportan el esquema de usuario y las funciones para ser usadas en otros modulos
  usuarioSchema,
  createUser,
  findUserByUsername,
  deleteUser,
  findUserById
};


//Este archivo proporciona funciones que permiten la manipulacion de datos de usuarios
//en una base de datos MySql. Este modulo se pude usar para:
//CREAR NUEVOS USUARIOS
//BUSCAR NUEVOS USUARIOS POR NOMBRE O POR ID
//ELIMINAR USUARIOS DE LA DB