import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  //this service return the job which api do
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }
}
