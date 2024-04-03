const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');
// creamos nuestro servidor
const app = express();

//enlazamos la conexion con nuestra base de datos
conectarBD();
app.use(cors());

app.use(express.json());

//ruta principal del proyecto
app.use('/api/clientes', require('../routers/rutas'));
app.use('/api/proveedores', require('../routers/rutasProveedor'));


//Definir ruta para verificar el servidor
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

// se define una constante para el puerto que tendra configuracion local o en la nube del puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('El servidor esta conectado http://localhost:3000/');
})

