import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  Items!: any;
  Item!: any;
  quantity: number = 1;
  id!: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ItemByID();
    if (!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify(this.CartItems));
    }
  }
  ItemByID() {
    this.service.getAllItems().subscribe((ele) => {
      this.Items = ele;
      this.Items = this.Items.products;
      for (let index = 0; index < Object.keys(this.Items).length; index++) {
        if (this.id == this.Items[index].id) {
          this.Item = this.Items[index];
          this.CartItem.Item = this.Items[index];
        }
      }
    });
  }
  backPage() {
    this.location.back();
  }
  CartItems: any[] = [];
  // if(.){}
  CartItem = {
    Item: {},
    quantity: this.quantity,
  };

  AddToCart() {
    this.CartItems = JSON.parse(localStorage.getItem('Cart')!);
    this.CartItem.quantity = this.quantity;
    this.CartItems.push(this.CartItem);
    this.service.PostItem(this.CartItem);
    localStorage.setItem('Cart', JSON.stringify(this.CartItems));
    setTimeout(() => {
      this.router.navigate(['/cart']);
    }, 1250);
  }
  increaseQuantity() {
    this.quantity++;
  }
  decreaseQuantity() {
    this.quantity--;
  }
}
