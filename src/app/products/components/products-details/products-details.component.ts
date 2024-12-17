import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit {
  id: any
  data: any = {}
  loading: boolean = false;
  constructor(private rout: ActivatedRoute, private service: ProductsService) {
    this.id = this.rout.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe(CardData => {
      this.loading = false;

      this.data = CardData;
      // console.log(this.data = CardData); 
    })
  }
}
