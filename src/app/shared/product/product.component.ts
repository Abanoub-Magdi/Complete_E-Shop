import { Component, EventEmitter, Input, Output, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { product } from '../../products/module/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data!: product;
  @Output() cardData = new EventEmitter();
  addButton: boolean = false;
  amount: number = 1;

  @ViewChild('cardElement', { static: true }) cardElement!: ElementRef;

  constructor(private snackBar: MatSnackBar) {}

  // Method to send data when "Add" is confirmed
  SendCardData() {
    this.cardData.emit({ item: this.data, quantity: this.amount });
    this.showSnackBar('Item added to cart'); // Call snackbar notification
    this.addButton = false; // Hide quantity input after adding to cart
  }

  // Listener to detect clicks outside the product card
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = this.cardElement.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.addButton = false; // Revert to "Add to Cart" button when clicked outside
    }
  }

  // Method to show snackbar notification
  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Show for 3 seconds
      verticalPosition: 'bottom', // Position at the bottom
      horizontalPosition: 'center', // Centered horizontally
    });
  }
}
