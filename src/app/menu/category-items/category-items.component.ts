import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit,OnChanges {
  constructor(private service: ServiceService, private route: ActivatedRoute, private location:Location) {}
  ngOnInit(): void {
    this.Category = this.route.snapshot.paramMap.get('category');
    this.GetCategory();
  }
  ngOnChanges() {
    this.Category = this.route.snapshot.paramMap.get('category');
    this.GetCategory();
  }


  Data: any = [];
  Category!: any;
  GetCategory() {
    this.service.getAllItems().subscribe((ele) => {
      this.Data = ele;
      this.Data = this.Data.products;
 
    });
  }
  back() {
    this.location.back();
  }
}
