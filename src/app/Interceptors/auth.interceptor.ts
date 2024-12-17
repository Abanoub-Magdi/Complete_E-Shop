import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '1234'; // Replace with a real token retrieval logic
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);

        switch (error.status) {
          case 401: // Unauthorized
            alert('Unauthorized access. Please log in.');
            this.router.navigate(['/login']);
            break;
          case 423: // Locked
            alert('The resource is locked. Try again later.');
            break;
          case 424: // Failed Dependency
            alert('Failed dependency. Please check your request.');
            break;
          case 500: // Internal Server Error
            alert('Server error. Please try again later.');
            break;
          case 502: // Bad Gateway
            alert('Bad gateway. Please try again later.');
            break;
          case 0: // Network Error
            alert('Network error. Please check your internet connection.');
            break;
          default:
            alert('An unexpected error occurred.');
        }

        return throwError(() => new Error(error.message));
      })
    );
  }
}
