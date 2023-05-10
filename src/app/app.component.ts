import { Component, OnInit } from '@angular/core';
import { ServiceService } from './menu/Services/service.service';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // cookie_name = '';
  darkMode = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private service: ServiceService,
    private cookieService: CookieService
  ) {
    // Register the sun and moon icons
    this.matIconRegistry.addSvgIcon(
      'sun',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/sun.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'moon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/moon.svg')
    );
  }
  toggleDarkMode() {
    const body = document.querySelector('body');

    // Add a class to the body element
    if (this.darkMode) {
      document.querySelector('body')?.classList.add('theme-dark', 'bg-white');
    } else {
      body?.classList.remove('theme-dark');
    }
    this.darkMode = !this.darkMode;
    // Remove a class from the body element
  }
  ngOnInit(): void {
    this.service.getPrimaryColor();
    this.cookie_name = this.cookieService.get('name'); // get the cookie value
    this.all_cookies = this.cookieService.getAll();
    // localStorage.removeItem("Cart")
    // console.log(JSON.stringify(localStorage.getItem("Cart"))?.)
  }
  cookie_name = '';
  all_cookies: any = '';
  CategorySearch?: any = 'All';
  CategoryName(event: any) {
    this.CategorySearch = event;
  }

  title = 'MenuSR';

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
