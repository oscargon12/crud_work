import { Injectable } from '@angular/core';

// Importando cliente de http
import { HttpClient  } from '@angular/common/http';

import { Rol } from 'src/app/models/users'
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  selectedRol:Rol

  rols:Rol[] = [];
  readonly URL_API = "http://localhost:4000"

  constructor(private http: HttpClient) {
    this.selectedRol = new Rol()
  }

  //Obtener usuarios
  getAllRols(){ //Endpoint de get
    console.log(`${this.URL_API}/api/getAllRol`)
    return this.http.get<Rol[]>(`${this.URL_API}/api/getAllRols`) //Este alias Rol] es solo para los get 
  }

  //Create
  createRol(rol:Rol){
    console.log(`${this.URL_API}/api/createRol`)
    return this.http.post(`${this.URL_API}/api/createRol`, rol)
  }

  // Actualizar
  updateRol(rol:Rol){
    console.log(`${this.URL_API}/api/updateRol/${rol._id}`)
    return this.http.put(`${this.URL_API}/api/updateRol/${rol._id}`, rol)
  }

  deleteRol(_id: string){
    console.log(`${this.URL_API}/api/deleteRol/${_id}`)
    return this.http.delete(`${this.URL_API}/api/deleteRol/${_id}`)
  }
}
