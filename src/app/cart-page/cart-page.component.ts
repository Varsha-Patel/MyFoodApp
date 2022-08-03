import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/model/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
  constructor() { }

  ngOnInit(): void {
  }

}