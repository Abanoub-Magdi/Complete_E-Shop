// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdmin = false;

  // Login method to authenticate the user
  login(user: { username: string; password: string }): boolean {
    if (user.username === 'admin' && user.password === 'admin123') {
      this.isAdmin = true;
      localStorage.setItem('isAdmin', 'true'); // Store admin status in localStorage
      return true; // Login successful
    }
    return false; // Login failed
  }

  // Logout method
  logout(): void {
    this.isAdmin = false;
    localStorage.removeItem('isAdmin'); // Clear admin status
  }

  // Method to check if the user is an admin
  isAdminUser(): boolean {
    return this.isAdmin || localStorage.getItem('isAdmin') === 'true';
  }
}
