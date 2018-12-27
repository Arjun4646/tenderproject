import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { products } from '../products';
import { product } from '../product_type';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  newproducts :product [];
  constructor(private ProductService:ProductService) { }
  getproduct() : void {
    this.newproducts =
    this.ProductService.getproduct();
  }

  ngOnInit() {
    this.getproduct();
  }

}
