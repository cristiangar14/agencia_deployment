
// importar el modelo de la db
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');


exports.consultasHomepage = async (req, res) => {
    
    const viajes = await Viaje.findAll({ limit: 3 }); 

    const testimoniales = await Testimonial.findAll({ limit: 3 }); 

    res.render('index',{
        pagina:'proximos viajes',
        clase: 'home',
        viajes,
        testimoniales
    })    

}