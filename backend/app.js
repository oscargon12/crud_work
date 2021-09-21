//Este app.js es el archivo principal que controla el backend

//Requiero los modulos
// import express from "express" // ecs6 pero debo usar babel
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
//const authRoutes = require('./routes/user.routes')

const db = require("./database") //Requiriendo la base de datos desde database.js

const MenuRoutes = require("./routes/menu.routes") //Requiriendo la ruta 

//== Modulos ==
const app = express(); // Alias de express
app.use(cors()) //use es una función de express

const port = (process.env.PORT || 4000) // Puerto (Trabaje en otro oooo el 5000)

// Middlewares - intermedarios
app.use(morgan("dev"))
app.use(express.json()) //Para que el entienda formatos json

//Llamando a la ruta
app.use("/api", MenuRoutes)

//Api
app.listen(port, () => console.log('App conectada al puerto', port)) // Escucha el api desde un puerto