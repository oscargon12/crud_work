const mongoose = require("mongoose")

//Conectando con DB en atlas
const atlas = "mongodb+srv://oscargon12:dataPass21@cluster0.shuqb.mongodb.net/productData?retryWrites=true&w=majority"

mongoose.connect(atlas)
    .then(db => console.log("Holaaa, conectadoo a la DB ;)"))
    .catch(err => console.log(err))

//Exportando modulo
module.exports = mongoose;