import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsCart: any[] = [];

  ngOnInit(): void {
    this.getCartproducts();
  }

  getCartproducts() {
    const cartData = localStorage.getItem("cart");// if cartData => localStorage contain data that mean [cartData value = True]
    if (cartData) {
      this.productsCart = JSON.parse(cartData);
      console.log(this.productsCart);  // For debugging, to see the cart structure
    } else {
      console.log('No cart data in localStorage.');
    }
  }

  // Increase quantity
  increaseQuantity(item: any) {
    item.quantity++;
    this.updateCart();
  }

  // Decrease quantity
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  // Update cart data in localStorage
  updateCart() {
    localStorage.setItem("cart", JSON.stringify(this.productsCart));
  }

  // Remove item from the cart
  removeItem(item: any) {
    this.productsCart = this.productsCart.filter(product => product !== item);
    this.updateCart();
  }
}
