import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AdminGuard } from './shared/services/admin.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'products', component: AllProductsComponent },
  // { path: 'products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule) },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: "products", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
