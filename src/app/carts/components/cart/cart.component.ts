import { Component, model, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private service: CartsService) {

  }
  success: boolean = false;
  productsCart: any[] = [];

  ngOnInit(): void {
    this.getCartproducts();
  }

  getCartproducts() {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      this.productsCart = JSON.parse(cartData);
      console.log(this.productsCart);
    } else {
      console.log('No cart data in localStorage.');
    }
  }

  // Calculate the total price of items in the cart
  getTotalPrice(): number {
    return this.productsCart.reduce((acc, item) => acc + (item.item.price * item.quantity), 0);
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

  SendCartToApi() {
    let products = this.productsCart.map(item => {
      return { productId: item.item.id, quantity: item.quantity }
    })
    let Model = {
      userId: 1,
      date: new Date(),
      products: products
    }
    this.service.SendingTheCartForserver(Model).subscribe(data => {
      this.success = true;
    })
    console.log(Model)
  }
}
