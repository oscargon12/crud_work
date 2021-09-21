const Model = require("../models/User")
const modelController = {}

//Primer endpoint (Create)
modelController.createModel = async (req, res) => {
    try {
        const { name, type, price, size, color, file } = req.body

        const newModel = new Model({ name, type, price, size, color, file })

        await newModel.save() //Mongoose traduce save del insert de mongo

        res.status(201).json({message: "Producto creado", newModel})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "error al crear el producto", error})
    }
}

//Update
modelController.updateModel = async (req, res) => {
    try {
        console.log(req.params);
        const idModel = req.params.id_model

        const updateModel = await Model.findByIdAndUpdate(idModel, req.body, {new: true})

        if(updateModel) res.status(201).json ({message: "Producto actualizado", updateModel})
        else res.status(202).json({message: "El producto no existe"})
    } catch (error) {
        
    }
}

//Mostrar todos (Read)
modelController.getAllModels = async (req, res) => {
    try {
        const models = await Model.find()

        if(models) res.status(200).json(models)
        else res.status(202).json({message: "Producto no encontrado"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

//Mostrar por ID
modelController.getById = async (req, res) => {
    try {
        const models = await Model.findById(req.params.id_model)

        if(models) res.status(200).json(models)
        else res.status(202).json({message: "Producto no encontrado"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}
module.exports = modelController

//Eliminar
modelController.deleteModel = async(req, res) => {
    try {
        const deleted = await Model.findByIdAndDelete(req.params.id_model)

        res.status(202).json({messaege: "Producto eliminado"})
    } catch (error) {
        res.status(400).json({messaege: "Error", error})
    }
}