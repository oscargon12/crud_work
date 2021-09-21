export class Product {
    constructor(_id = "", name = "", type = "", price = "", size = "", color = "", file = ""){

        this._id = _id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.size = size;
        this.color = color;
        this.file = file;
    }

    _id:string
    name:string
    type:string
    price:string
    size:string
    color:string
    file:string
}