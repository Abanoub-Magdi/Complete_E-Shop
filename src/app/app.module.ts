import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminComponent } from './admin/components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // HttpClientModule,
    CommonModule,
    ProductsModule,
    CartsModule,
    MatSnackBarModule,
    FormsModule

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
