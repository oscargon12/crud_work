import { Injectable } from '@angular/core';

// Importando cliente de http
import { HttpClient  } from '@angular/common/http';

import { Product } from 'src/app/models/product'; //Importando modelo de datos

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct:Product

  products:Product[] = [];
  readonly URL_API = "http://localhost:4000"

  constructor(private http: HttpClient) {
    this.selectedProduct = new Product() //se inicialice un nuevo selectedProduct
  }

  //Obtener productos
  getAllModels(){
    console.log(`${this.URL_API}/api/getAllModels`)
    return this.http.get<Product[]>(`${this.URL_API}/api/getAllModels`) //Este alias Product[] es solo para los get 
  }

  // Crear usuarios. La propiedad createUsers va para el useradmin.component.ts
  createProduct(product:Product){
    console.log(`${this.URL_API}/api/createModel`)
    return this.http.post(`${this.URL_API}/api/createModel`, product)
  }

  // Actualizar
  updateProduct(product: Product){
    console.log(`${this.URL_API}/api/updateModel/${product._id}`)
    return this.http.put(`${this.URL_API}/api/updateModel/${product._id}`, product)
  }

  deleteProduct(_id: string){
    console.log(`${this.URL_API}/api/deleteModel/${_id}`)
    return this.http.delete(`${this.URL_API}/api/deleteModel/${_id}`)
  }
}
