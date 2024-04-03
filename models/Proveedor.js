
//Carlos Yesid Varela Bernal

const mongoose = require ('mongoose');

//El modelo que se cree aca debe ser igual al de la base de datos   

const proveedorSchema = mongoose.Schema({

    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    provision:{
        type: String,
        required: true
    },
},{ versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);