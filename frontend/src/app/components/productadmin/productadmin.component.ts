import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

//Importando service desde services
import { ProductService } from 'src/app/services/product/product.service';

//Importando modelo desde models
import { Product } from 'src/app/models/product'; 

//Forms
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productadmin',
  templateUrl: './productadmin.component.html',
  styleUrls: ['./productadmin.component.css'],
  providers: [ ProductService ]
})
export class ProductadminComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getAllModels() //Ejecuta esa funcion, justo al cargar la app
  }

  //Mostrar uproductos (Read)
  getAllModels(){
    this.productService.getAllModels().subscribe(
      (res) => {
        this.productService.products = res
      }
      )
      console.log(`Holaaa ${this.productService.products}`)
  }

  //Crear productos
  //Si el objeto que envío, lleva el id se actualiza, sino tiene id, crea uno nuevo
  save(product:NgForm){
    if (product.value._id){

      // Actualizar el form
      this.productService.updateProduct(product.value).subscribe((res) => { // el .value es un objeto y puede traducirse a una clase
        alert('Usuario actualizado')
        this.getAllModels()
        this.clean(product) //El parametro del clean dice que form hay que limpiar
      })
    } else {
      product.value.file = this.productService.selectedProduct.file
      this.productService.createProduct(product.value).subscribe((res) => { //Debo suscribirme al método
        alert('Usuario creado')
        this.getAllModels()
        this.clean(product)
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'producto ya existe',
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
      this.productService.selectedProduct = new Product();
    }
  }

  //Delete
  deleteProduct(_id: string){
    Swal.fire({
      title: 'Estás seguro de eliminar el producto?',
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
          title: 'Producto eliminado!',
          showConfirmButton: false,
          timer: 1500
        })

        this.productService.deleteProduct(_id).subscribe(res => {
          this.getAllModels()
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

  fillFields(product:Product){
    this.productService.selectedProduct = product
  }

}
