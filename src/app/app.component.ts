import { Component, OnInit } from '@angular/core';
import { ServiceService } from './menu/Services/service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // cookie_name = '';
  // all_cookies: any = '';

  // constructor(private cookieService: CookieService) {}

  // setCookie() {
  //   this.cookieService.set('name', 'Tutorialswebsite');
  // }

  // deleteCookie() {
  //   this.cookieService.delete('name');
  //   console.log(this.all_cookies);
  //   console.log(this.cookie_name);
  // }

  // deleteAll() {
  //   this.cookieService.deleteAll();
  //   console.log(this.all_cookies);
  //   console.log(this.cookie_name);
  // }

  // ngOnInit(): void {
  //   this.setCookie();
  //   this.cookie_name = this.cookieService.get('name');
  //   this.all_cookies = this.cookieService.getAll();
  // }
  ngOnInit(): void {
    this.service.getPrimaryColor();
    this.cookie_name=this.cookieService.get('name');  // get the cookie value
    this.all_cookies=this.cookieService.getAll();
  }
  cookie_name = '';
  all_cookies: any = '';
  CategorySearch?: any = 'All';
  CategoryName(event: any) {
    this.CategorySearch = event;
  }

  title = 'MenuSR';
  constructor(
    private service: ServiceService,
    private cookieService: CookieService
  ) {}
  setCookie() {
    console.log(this.cookie_name);
    console.log(this.all_cookies);
    this.cookieService.set('name', 'Tutorialswebsite');
    console.log(this.cookie_name);
    console.log(this.all_cookies);
  }

  deleteCookie() {
    console.log(this.cookie_name);
    console.log(this.all_cookies);
    this.cookieService.get('name');
    console.log(this.cookie_name);
    console.log(this.all_cookies);
  }

  deleteAll() {
    this.cookieService.deleteAll();
  }
}
