import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private location: Location
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ItemByID();
  }
  ItemByID() {
    this.service.getAllItems().subscribe((ele) => {
      this.Items = ele;
      this.Items = this.Items.products;
      for (let index = 0; index < Object.keys(this.Items).length; index++) {
        if (this.id == this.Items[index].id) {
          this.Item = this.Items[index];
        }
      }
    });
  }
  back() {
    this.location.back();
  }
  AddToCart() {
    console.log(this.service.PostItem(this.Item));
    console.log(this.Item);
  }
  increaseQuantity() {
    this.quantity++;
  }
  decreaseQuantity() {
    // if (this.quantity != 1)
    this.quantity--;
  }
}
