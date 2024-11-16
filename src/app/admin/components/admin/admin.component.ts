import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  productTitle = '';
  productPrice: number | null = null;
  productImage = '';
  selectedProductId: number | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  // Load all products from localStorage or API
  loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      this.productsService.getAllProducts().subscribe((data: any) => {
        this.products = data;
        localStorage.setItem('products', JSON.stringify(this.products));
      });
    }
  }

  // Load categories for filtering
  loadCategories() {
    this.productsService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  // Filter products by selected category
  filterByCategory() {
    if (this.selectedCategory) {
      this.productsService.getProductsByCategory(this.selectedCategory).subscribe((data: any) => {
        this.products = data;
      });
    } else {
      this.loadProducts();
    }
  }

  // Add or update a product
  saveProduct() {
    if (this.selectedProductId !== null) {
      // Update existing product
      const index = this.products.findIndex(p => p.id === this.selectedProductId);
      this.products[index] = {
        id: this.selectedProductId,
        title: this.productTitle,
        price: this.productPrice,
        image: this.productImage
      };
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(),
        title: this.productTitle,
        price: this.productPrice,
        image: this.productImage
      };
      this.products.push(newProduct);
    }

    // Save the updated products list to localStorage
    localStorage.setItem('products', JSON.stringify(this.products));

    // Reset form fields
    this.resetForm();
  }

  // Delete a product
  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  // Edit a product for updating
  editProduct(product: any) {
    this.selectedProductId = product.id;
    this.productTitle = product.title;
    this.productPrice = product.price;
    this.productImage = product.image;
  }

  // Reset form fields
  resetForm() {
    this.productTitle = '';
    this.productPrice = null;
    this.productImage = '';
    this.selectedProductId = null;
  }
}
