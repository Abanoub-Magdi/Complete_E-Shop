import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  isAdmin: boolean = false; // Default value, user is not an admin

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if the user is an admin (this is done when the component initializes)
    this.isAdmin = localStorage.getItem('isAdmin') === 'true'; // Check if isAdmin is true in localStorage
  }

  logout(): void {
    // Remove admin status and other necessary data from localStorage
    localStorage.removeItem('isAdmin'); // Clear the 'isAdmin' flag

    // Optionally, clear other session data if needed
    // localStorage.removeItem('username');
    // localStorage.removeItem('token');

    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    const body = document.body;
    const footer = document.querySelector('.footer');

    // Toggle light/dark class for body and footer
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');

    footer?.classList.toggle('bg-dark');
    footer?.classList.toggle('text-light');
    footer?.classList.toggle('bg-light');
    footer?.classList.toggle('text-dark');
  }
}
