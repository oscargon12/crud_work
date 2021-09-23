const mongoose = require("mongoose")
const { Schema } = mongoose

// Creando el objeto molde
const userSchema = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        rol: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Rol", userSchema)
