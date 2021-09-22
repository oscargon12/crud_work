const express = require("express")
const router = express.Router() //Llama a la clase q hace los enrutamientos en express

//Controladores
const RolController = require('../controllers/rolController')
console.log(RolController)

//Rutas
router.post("/createRol", RolController.createRol)
router.put("/updateRol/:id_rol", RolController.updateRol)
router.get("/getAllRols", RolController.getAllRols)
router.get("/getById/:id_rol", RolController.getById)
router.delete("/deleteRol/:id_rol", RolController.deleteRol)
// router.get("/menu", (req, res) => res.status(200).json({message: "Soy una ruta"}))


module.exports = router //Exportando las rutas
