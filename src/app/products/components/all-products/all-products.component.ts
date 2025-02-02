import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../module/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  productsCart: any[] = [];

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
// this part contain logic of adding data to localStorage
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.productsCart = JSON.parse(localStorage.getItem("cart")!); // Load existing cart data
  
      // Check if item already exists in the cart
      let exist = this.productsCart.find(item => item.item.id === event.item.id);
      if (exist) {
        alert('This Item Already Exists in the Cart');
      } else {
        this.productsCart.push(event); // Add the new item if it doesn't exist
        localStorage.setItem("cart", JSON.stringify(this.productsCart)); // Update local storage
      }
    } else {
      // If no cart data exists in localStorage, create a new cart array
      this.productsCart = [event];
      localStorage.setItem("cart", JSON.stringify(this.productsCart)); // Save to local storage
    }
  }
  



}
