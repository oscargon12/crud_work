const Rol = require("../models/Rol")
const rolController = {}

//Create
rolController.createRol = async (req, res) => {
    try {
        const { name, email, rol, password } = req.body

        const newRol = new Rol({ name, email, rol, password })

        await newRol.save() //Mongoose traduce save del insert de mongo

        res.status(201).json({message: "Usuario creado", newRol})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "error al crear el usuario", error})
    }
}

//Update
rolController.updateRol = async (req, res) => {
    try {
        console.log(req.params);
        const idRol = req.params.id_rol

        const updateRol = await Rol.findByIdAndUpdate(idRol, req.body, {new: true})

        if(updateRol) res.status(201).json ({message: "Usuario actualizado", updateRol})
        else res.status(202).json({message: "El usuario no existe"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "error al actualizar el usuario", error})
    }
}

//Mostrar todos (Read)
rolController.getAllRols = async (req, res) => {
    try {
        const rols = await Rol.find()

        if(rols) res.status(200).json(rols)
        else res.status(202).json({message: "Usuario no encontrado"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

//Mostrar por ID
rolController.getById = async (req, res) => {
    try {
        const rols = await Rol.findById(req.params.id_rol)

        if(rols) res.status(200).json(rols)
        else res.status(202).json({message: "usuario no encontrado"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

module.exports = rolController

//Eliminar
rolController.deleteRol = async(req, res) => {
    try {
        const deleted = await Rol.findByIdAndDelete(req.params.id_rol)

        res.status(202).json({messaege: "usuario eliminado"})
    } catch (error) {
        res.status(400).json({messaege: "Error", error})
    }
}