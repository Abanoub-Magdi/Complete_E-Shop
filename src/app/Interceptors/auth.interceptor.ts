import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor triggered for request:', req.url);

    // Example: Add Authorization header with a fake token
    const token = 1234; // Replace with a real token if you have one

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    console.log('Interceptor added token:', authReq); // Log to confirm interceptor is working

    // Pass the modified request to the next handler
    return next.handle(authReq);
  }
}
