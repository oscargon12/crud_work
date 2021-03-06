import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductadminComponent } from './components/productadmin/productadmin.component';
import { CartComponent } from './components/cart/cart.component';
import { UseradminComponent } from './components/useradmin/useradmin.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "admin", component: ProductadminComponent },
  { path: "users", component: UseradminComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
