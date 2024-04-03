const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');


//las siguientes son las rutas de nuestro crud para el control de clientes

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);



module.exports = router;