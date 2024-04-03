//Carlos Yesid Varela Bernal
const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

//las siguientes son las rutas de nuestro crud para el control de proveedores

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.buscarProveedores);
router.get('/:id', proveedorController.buscarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);
//router.patch('/:id', proveedorController.modificarProveedor);

//Alternativas a la funcion de patch modificarProveedor
//router.put('/:id', proveedorController.actualizarProveedor);
router.put('/:id', proveedorController.actualizarUnProveedor);

module.exports = router;