const Cliente = require('../models/Cliente');

//funcion para buscar los clientes que esten en la base de datos
exports.buscarClientes = async(req, res) => {
    try {

        const cliente = await Cliente.find();
        res.json(cliente)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los cliente');     
    }

}



//funcion agregar cliente
exports.agregarClientes = async(req, res) => {

    try {

        let cliente;
        cliente = new Cliente(req.body)
        await cliente.save();
        res.send(cliente);
        
    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al agregar un cliente');   
    }
}

//esta funcion es para mostrar un solo cliente
exports.buscarCliente = async(req, res) => {

    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: "cliente no encontrado con ese ID"});
            return
        }
        res.send(cliente);
        
        
    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al buscar un cliente');   
    }
} 

//esta funcion nos sirve para eliminar un cliente
exports.eliminarCliente = async(req, res) => {

    try {

        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"})
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente ha sido eliminado"});
        return

    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al eliminar un cliente');  
    }
}

//Esta funcion es para actualizar un cliente
exports.actualizarCliente = async(req, res) =>{

    try {
        
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"});
            return
        }else{
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);
        }

    } catch (error) {
     console.log(error)
     res.status(500).send('hubo un error al actualizar un cliente'); 
     return
    }
}
