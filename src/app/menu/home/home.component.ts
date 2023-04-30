import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
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
  ) {

  }
  ngOnChanges(): void {}
  ngOnDestroy() {}
  Category: any = [];
  Data: any = [];
  ngOnInit(): void {
    this.GetAllData();
  }
  GetAllData() {
    this.service.GetData();
    // this.service.Data.subscribe((ele: any) => {
    this.service.Data.subscribe((ele: any) => {
      this.Data = ele;
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
