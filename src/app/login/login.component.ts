// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Example: After successful login, set isAdmin in localStorage
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin']);
    } else {
      // Handle login failure
      this.error = 'Invalid username or password';
    }
  }
  

}
