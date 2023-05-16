import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnChanges {
  constructor(
    private service: ServiceService,
    private cookies: CookieService,
    private loca: Location
  ) { }
  Category: any = [];
  CategoryImage: any = [];
  Data: any = [];
  ngOnInit(): void {
    this.GetCategory();
    this.langCookies = this.cookies.get("Language");
  }
  langCookies!: string;

  ngOnChanges(): void {
    this.GetCategory();
  }
  Changes(): void {
    this.GetCategory();
  }
  GetCategory() {
    this.service.getAllItems().subscribe((ele) => {
      this.Data = ele;
      this.Data = this.Data.groups;
    });
  }
  Back() {
    this.loca.back()
  }
}
