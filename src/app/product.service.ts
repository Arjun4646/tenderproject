import { Injectable } from '@angular/core';
import  { products } from './products';
import  { product } from './product_type';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
getproduct():product[]
{
  return products;
}
}
