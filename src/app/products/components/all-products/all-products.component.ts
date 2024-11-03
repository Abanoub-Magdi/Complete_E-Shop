import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'] // Corrected property name
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getAllProducts().subscribe((items: any) => {
      // Here I put the data in an array named products and I'll loop through it in the HTML page
      this.products = items;

      // To check that data is returned
      console.log(items);
    }, error => {
      alert("Error oqured during loading products" + error)
    });
  }

  getCategories() {
    this.service.getAllCategories().subscribe((category: any) => {
      this.categories = category;
      console.log(category);
    }, error => { alert("Error oqured during loading categories") })
  }

  getFilteredCategory(event: any) {
    let value = event.target.value;
    // console.log(value);
    (value == "All") ? this.getProducts() : this.getTheFilteredProductCategory(value);
    ///////////// old way to handl "All" filter /////////////
    //   if (value == 'All') {
    //     return this.getProducts();
    //   } else {
    //     this.getTheFilteredProductCategory(value);
    //   }
    // 
  }

  getTheFilteredProductCategory(categoryName: string) {
    this.service.getProductsByCategory(categoryName).subscribe((cat: any) => {
      this.products = cat;
    }, error => { alert(error) })
  }

}
 