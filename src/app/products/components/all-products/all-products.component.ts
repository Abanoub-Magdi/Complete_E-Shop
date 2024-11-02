import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
products:any[]=[];

  constructor(private service: ProductsService) { }

  ngOnInit(){
    this.getProducts()
}
getProducts(){
  this.service.getAllProducts().subscribe((items: any) => {
   //here i put the data in array with name products and i 'll loop by it in the html page
    this.products=items;
    
    //to check that data is reurned
    console.log(items);
  })
}
}
