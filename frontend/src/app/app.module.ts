import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

//Imagenes
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

//request
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductadminComponent } from './components/productadmin/productadmin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { UseradminComponent } from './components/useradmin/useradmin.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductadminComponent,
    FooterComponent,
    CartComponent,
    UseradminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
