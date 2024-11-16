import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  SendingTheCartForserver(model:any) {
    return this.http.post(environment.apiUrl + 'carts', model)
  }
}
