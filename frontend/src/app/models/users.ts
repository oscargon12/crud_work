export class Rol {
    constructor(_id = "", name = "", email = "", rol = "", password = ""){

        this._id = _id;
        this.name = name;
        this.email = email;
        this.rol = rol;
        this.password = password;
        
    }

    _id:string
    name:string
    email:string
    rol:string
    password:string
}