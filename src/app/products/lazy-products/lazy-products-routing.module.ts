import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from '../components/all-products/all-products.component';
import { ProductsDetailsComponent } from '../components/products-details/products-details.component';


const routes: Routes = [
{path:'', component:AllProductsComponent},
{ path: 'details/:id', component: ProductsDetailsComponent } // Product details route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyProductsRoutingModule { }
