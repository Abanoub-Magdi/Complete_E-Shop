import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './select/select.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './components/footer/footer.component';
// import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    FooterComponent,
    // LoginComponent
  ],
  imports: [
    CommonModule,        // Import CommonModule for directives like ngIf and ngFor
    RouterModule,        // Import RouterModule for routing inside SharedModule if needed
    HttpClientModule,    // Import HttpClientModule if making HTTP requests from SharedModule
    FormsModule          // Import FormsModule for two-way data binding
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    FooterComponent
  ]
})
export class SharedModule { }
