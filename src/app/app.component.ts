import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AllProductsComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Offers_Store';
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.showHeader = !(event.url === '/login' || event.url === '/register');
      }
    });
  }

}
