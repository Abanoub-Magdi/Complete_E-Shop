import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
// import { LazyProductsModule } from './lazy-products/lazy-products.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, //if this directive dose not exist it will lead to there is no link will work in my component
    AppRoutingModule,
    SharedModule,
    // LazyProductsModule
    
  ]
})
export class ProductsModule { }
