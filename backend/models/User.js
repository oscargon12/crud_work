const mongoose = require("mongoose")
const { Schema } = mongoose

// Creando el objeto molde
const modelSchema = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        price: {type: String, required: true},
        size: {type: String, required: true},
        color: {type: String, required: true},
        file: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

//Exportando el molde
module.exports = mongoose.model("Model", modelSchema)
