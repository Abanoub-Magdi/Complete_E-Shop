import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'] // Corrected property name
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getAllProducts().subscribe((items: any) => {
      // Here I put the data in an array named products and I'll loop through it in the HTML page
      this.products = items;

      // To check that data is returned
      console.log(items);
    });
  }
}
