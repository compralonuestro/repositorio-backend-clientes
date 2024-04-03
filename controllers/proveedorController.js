//Carlos Yesid Varela Bernal

const Proveedor = require('../models/proveedor');

//funcion para buscar los proveedores que esten en la base de datos
exports.buscarProveedores = async(req, res) => {
    try {

        const proveedor = await Proveedor.find();
        res.json(proveedor)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los proveedores');     
    }
}

//funcion agregar proveedor
exports.agregarProveedores = async(req, res) => {

    try {

        let proveedor;
        proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.send(proveedor);
        
    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al agregar un proveedor');   
    }
}

//esta funcion es para mostrar un solo proveedor
exports.buscarProveedor = async(req, res) => {

    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg: "proveedor no encontrado con ese ID"});
            return
        }
        res.send(proveedor);
        
        
    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al buscar un proveedor');   
    }
} 

//esta funcion nos sirve para eliminar un proveedor
exports.eliminarProveedor = async(req, res) => {

    try {

        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:"El proveedor no existe"})
            return
        }
        await Proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El proveedor ha sido eliminado"});
        return

    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al eliminar un proveedor');  
    }
}

//Esta funcion es para actualizar o modificar un proveedor
exports.modificarProveedor = async(req,res) => {

    try {
        const Proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!Proveedor){
            return res.status(404).send('Proveedor no encontrado');
        }
        res.json(Proveedor)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el proveedor');
    }
}


//Esta funcion es para actualizar un proveedor
//Alternativa 1

/*exports.actualizarProveedor = async(req, res) =>{

    try {
        
        const {nombres, apellidos, documento, correo, telefono, direccion, provision} = req.body
        let proveedor = await Proveedor.findById(req.params.id);

        if(!proveedor){
            res.status(404).json({msg:"El proveedor no existe"});
            return
        }else{
            proveedor.nombres = nombres;
            proveedor.apellidos = apellidos;
            proveedor.documento = documento;
            proveedor.correo = correo;
            proveedor.telefono = telefono;
            proveedor.direccion = direccion;
            proveedor.provision = provision;
            

            proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id}, proveedor,{new:true});
            res.json(proveedor);
        }

    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al actualizar un proveedor'); 
     return
    }
} 
*/
//Alernativa 2
exports.actualizarUnProveedor = async (req, res) => {
  try {

    if (req.params.id.length != 24) {
      res.status(404).send("Proveedor no encontrado (string muy corto)");
    return; }

    const proveedor = await Proveedor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

    if (!proveedor) res.status(404).send("Proveedor no encontrado");
    else res.json(proveedor);

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el proveedor");
  }
}

