import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(
    private service: ServiceService,
    private router: Router,
    private location: Location
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
  }
  subscription!: Subscription;
  ngOnDestroy() {
    // this.service.getAllItems().unsubscribe();
  }
  Category: any = [];
  Data: any = [];
  ngOnInit(): void {
    this.GetAllData();
    this.GetCategory();
    this.CategorySearch;
  }
  GetAllData() {
    this.service.getAllItems().subscribe((ele) => {
      this.Data = ele;
      this.Data = this.Data.Categories;
    });
  }

  GetCategory() {
    this.service.getAllItems().subscribe((ele) => {
      this.Data = ele;
      this.Data = this.Data.products;
    });
  }

  CategorySearch?: any = 'All';
  CategoryName(event: any) {
    this.CategorySearch = event;
  }
  back() {
    this.location.back();
  }
}
