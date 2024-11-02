import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'E-Shop';
}

///////////////////////////////////////
// import { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-your-component',
//   templateUrl: './your-component.component.html',
//   styleUrls: ['./your-component.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
