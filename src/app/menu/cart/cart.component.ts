import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.CartItems = JSON.parse(localStorage.getItem('Cart')!);
    console.log(this.CartItems);
  }
  CartItems: any[] = [];
}
