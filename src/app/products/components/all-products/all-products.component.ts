import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((items: any) => {
      this.products = items;
      console.log(items);
      this.loading = false; // Ensure loading is set to false after data is loaded
    }, error => {
      this.loading = false;
      alert("Error occurred during loading products: " + error);
    });
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((category: any) => {
      this.categories = category;
      this.loading = false;
      console.log(category);
    }, error => {
      this.loading = false;
      alert("Error occurred during loading categories: " + error);
    });
  }

  getFilteredCategory(event: any) {
    this.loading = true;
    let value = event.target.value;
    if (value === "All") {
      this.getProducts();
    } else {
      this.getTheFilteredProductCategory(value);
    }
  }

  getTheFilteredProductCategory(categoryName: string) {
    this.loading = true;
    this.service.getProductsByCategory(categoryName).subscribe((cat: any) => {
      this.products = cat;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert("Error occurred: " + error);
    });
  }
}
