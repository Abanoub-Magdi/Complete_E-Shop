import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() data: any = {};
  @Output() cardData = new EventEmitter()
  addButton: boolean = false;
  amount: number = 1;

  SendCardData() {
    this.cardData.emit({item:this.data, quantity:this.amount})
    alert('Item added')
    
  }
}
