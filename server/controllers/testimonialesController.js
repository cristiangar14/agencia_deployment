const Testimonial = require('../models/Testimoniales');

exports.mostrarTetimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        })
}

exports.agregarTestimonial = async (req, res) => {
    //validar que todos los campos esten llenos 
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje': 'agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje': 'agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje': 'agrega tu mensaje'})
    }

    //revisar por errores
    if(errores.length > 0){
        //muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'testimoniales',
            testimoniales
        })
    }else{
        //almacenar en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error =>console.log(error));
    }
    
}