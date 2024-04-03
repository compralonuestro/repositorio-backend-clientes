const mongoose = require('mongoose');
require('dotenv').config();

//conexion con mongo db
const conectarBD = () => {
//se hace una promesa
mongoose
.connect(process.env.DB_MONGO)
.then(() => console.log('estamos conectados con mongo'))
.catch((err) => console.error(err));
}

module.exports = conectarBD;