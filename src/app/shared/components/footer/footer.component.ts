import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Dark mode toggle method
  toggleDarkMode() {
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
