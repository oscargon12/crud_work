import { Component, OnInit } from '@angular/core';

//Importando service desde services
import { ProductService } from 'src/app/services/product/product.service';

//Importando modelo desde models
import { Product } from 'src/app/models/product'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ProductService ]
})
export class HomeComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getAllModels() //Ejecuta esa funcion, justo al cargar la app
  }

  getAllModels(){
    this.productService.getAllModels().subscribe(
      (res) => {
        this.productService.products = res
      }
      )
      console.log(`Holaaa ${this.productService.products}`)
  }
}
