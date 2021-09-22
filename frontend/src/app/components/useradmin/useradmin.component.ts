import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { UsersService } from 'src/app/services/users/users.service';  //Importando el servicio desde user.service
import { Rol } from 'src/app/models/users'; //Importando el modelo desde users
import { NgForm } from '@angular/forms' //Importando formularios

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css'],
  providers: [ UsersService ]
})

export class UseradminComponent implements OnInit {

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.getAllRols()
  }

  //Mostrar usuarios
  getAllRols(){
    this.usersService.getAllRols().subscribe(
      (res) => {
        this.usersService.rols = res
      }
      )
      console.log(`Holaaa ${this.usersService.rols}`)
  }

  //Crear productos
  //Si el objeto que envío, lleva el id se actualiza, sino tiene id, crea uno nuevo
  save(rol:NgForm){
    if (rol.value._id){

      // Actualizar el form
      this.usersService.updateRol(rol.value).subscribe((res) => { // el .value es un objeto y puede traducirse a una clase
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario Actualizado',
          showConfirmButton: false,
          timer: 1500
        })
        this.getAllRols()
        this.clean(rol) //El parametro del clean dice que form hay que limpiar
      })
    } else {
      this.usersService.createRol(rol.value).subscribe((res) => { //Debo suscribirme al método
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario creado',
          showConfirmButton: false,
          timer: 1500
        })
        this.getAllRols()
        this.clean(rol)
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuario ya existe',
          showConfirmButton: false,
          timer: 1500
        })
      }
      );
    }
  }

  clean(form?:NgForm){
    if(form){
      form.reset()
      this.usersService.selectedRol = new Rol();
    }
  }

  //Delete
  deleteRol(_id: string){
    Swal.fire({
      title: 'Estás seguro de eliminar el usuario?',
      text: "No podrás regresar esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borralo!'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario eliminado!',
          showConfirmButton: false,
          timer: 1500
        })

        this.usersService.deleteRol(_id).subscribe(res => {
          this.getAllRols()
        })        
      } else {

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Acción cancelada',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  //Limpiando campos del form
  fillFields(rol:Rol){
    this.usersService.selectedRol = rol
  }

}
