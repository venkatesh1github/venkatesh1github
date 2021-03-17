import { Component, OnInit } from '@angular/core';
import {  Products } from 'src/app/core/models/product-details.models';
import { FetchProductDetailsService } from '../services/fetch-product-details.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productDetails:Products=new Products;
  constructor(public fetchProductDetailsService:FetchProductDetailsService) { }

  ngOnInit(): void {
    this.fetchProductDetailsService.fetchProducts().subscribe(items=>{
      console.log(items)
      this.productDetails=items});
  }

}
