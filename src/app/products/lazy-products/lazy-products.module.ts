import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyProductsRoutingModule } from './lazy-products-routing.module';
import { AllProductsComponent } from '../components/all-products/all-products.component';
import { ProductsDetailsComponent } from '../components/products-details/products-details.component';


@NgModule({
  declarations: [
    // AllProductsComponent,
    // ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    LazyProductsRoutingModule
  ]
})
export class LazyProductsModule { }
