import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit, OnChanges {
  constructor(
    private router: Router,
    private service: ServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private cookieService: CookieService
  ) { }
  ngOnInit(): void {
    document.querySelector('body')!.style.direction = `${this.cookieService.get('direction')}`;
    this.service.GetData();
    this.Category = this.route.snapshot.paramMap.get('catname');
    this.GetCategory();
    this.route.paramMap.subscribe(params => {
    });
  }
  ngOnChanges() {
    this.Category = this.route.snapshot.paramMap.get('catname');
    this.GetCategory();
  }
  Data: any = [];
  Category!: any;
  GetCategory() {
    this.service.Data.subscribe((ele: any) => {
      this.Data = ele;
    });
  }
  Back() {
    this.location.back();
  }
  navgiateroute(item: any) {
    if (this.cookieService.get('Language')) {
      this.router.navigate([`categories/${item.name}`], { queryParams: { key: '102', LANG: `${this.cookieService.get('Language')}` } });
    }
    else {
      this.router.navigate([`categories/${item.name}`], { queryParams: { key: '102', LANG: `En` } });

    }
  }
}
