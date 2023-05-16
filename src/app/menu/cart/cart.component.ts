import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.CartItems = JSON.parse(localStorage.getItem('Cart')!);
    this.GetPriceTotal();


  }
  constructor(
    private service: ServiceService,
    private location: Location,
  ) { }
  CartItems: any[] = [];
  TotalPrice: number = 0;
  total() { }
  increaseQuantity(i: number) {
    this.CartItems[i].quantity = ++this.CartItems[i].quantity;
    this.GetPriceTotal();
  }
  decreaseQuantity(i: number) {
    this.CartItems[i].quantity = --this.CartItems[i].quantity;
    this.GetPriceTotal();
  }
  GetPriceTotal() {
    this.TotalPrice = 0;
    for (let index in this.CartItems) {
      this.TotalPrice +=
        this.CartItems[index].Item.price * this.CartItems[index].quantity;
    }
  }
  Back() {
    this.location.back();
  }
  PushToOrder() { }
}
