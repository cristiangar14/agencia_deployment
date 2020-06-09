//importar sequelize
const Sequelize = require('sequelize');

//importar la base de datos 
const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
})

module.exports = Testimonial;