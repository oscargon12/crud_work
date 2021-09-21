const express = require("express")
const router = express.Router() //Llama a la clase q hace los enrutamientos en express

//Controladores
const ModelController = require("../controllers/modelController")
console.log(ModelController);

//Rutas
router.post("/createModel", ModelController.createModel)
router.put("/updateModel/:id_model", ModelController.updateModel)
router.get("/getAllModels", ModelController.getAllModels)
router.get("/getById/:id_model", ModelController.getById)
router.delete("/deleteModel/:id_model", ModelController.deleteModel)
// router.get("/menu", (req, res) => res.status(200).json({message: "Soy una ruta"}))


module.exports = router //Exportando las rutas