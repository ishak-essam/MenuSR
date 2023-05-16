import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { DatePipe, Location, formatDate } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(
    private service: ServiceService,
    private router: Router,
    private location: Location,
    public datepipe: DatePipe,
    private cookieService: CookieService
  ) {
  }
  kcal: string = '../../../assets/Icons/calories.png';
  ngOnChanges(): void {
    this.service.LanguageURL.subscribe(value => this.LangURL == `${value}`);
  }
  ngOnDestroy() { }
  Category: any = [];
  Data: any = [];
  time!: Date;
  ngOnInit(): void {
    this.cookieService.set('time', `${ formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss', 'en_US')}`);
    this.GetAllData();
    document.querySelector('body')!.style.direction = `${this.cookieService.get('direction')}`;
  }

  GetAllData() {
    this.service.GetData();
    // this.service.Data.subscribe((ele: any) => {
    this.service.Data.subscribe((ele: any) => {
      this.Data = ele;
    });
  }
  CategorySearch?: any = 'all';
  CategoryName(event: any) {
    this.CategorySearch = event;
  }
  back() {
    this.location.back();
  }
  LangURL: string =
    this.cookieService.get('Language');
  RouteUrl(item: any) {
    this.LangURL =
      this.cookieService.get('Language');
    if (this.LangURL != " ") {
      this.router.navigate([`/categories/${item.name}`], { queryParams: { key: '102', LANG: `${this.LangURL}` } });
    }
    else {
      this.router.navigate([`/categories/${item.name}`], { queryParams: { key: '102', LANG: `${this.LangURL}` } });

    }


  }
  darkMode = true;
  toggleDarkMode() {
    const body = document.querySelector('body');

    if (this.darkMode) {
      document.querySelector('body')?.classList.add('theme-dark', 'bg-white');
    } else {
      body?.classList.remove('theme-dark');
    }
    this.darkMode = !this.darkMode;
    // Remove a class from the body element
  }


}
