import { Component, OnChanges, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnChanges {
  Header!: any;
  logo!: string;
  data!: string;
  constructor(
    private service: ServiceService,
    public translate: TranslateService,
    private cookieService:CookieService
  ) {

  }
  ngOnInit(): void {
    this.AllData();
    this.service.data$.subscribe((value) => {
      this.data = value;
    });
    this.setCookies();
  }
  switchLang(lang: string) {
    // this.translate.use('../../../assets/Json/DataMenu');
    this.translate.use(lang);
  }
  AllData() {
    this.service.getAllItems().subscribe((ele) => {
      this.Header = ele;
      this.logo = this.Header.logo;
      this.Header = this.Header.name;
    });
  }
  ngOnChanges(): void {}
  isToggled: boolean = false;
  SideBarHide() {
    const Mysidebar: any = document.getElementById('Mysidebar');
    const appConvert: any = document.getElementById('bg-sidenavOpen');
    appConvert.style.display = 'none';
    Mysidebar.style.right = '-333px';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'scroll';
  }
  SideBarShow() {
    const Mysidebar: any = document.getElementById('Mysidebar');
    const appConvert: any = document.getElementById('bg-sidenavOpen');
    document.body.style.height = '100vh';
    appConvert.style.display = 'block';
    Mysidebar.style.right = '0px';
    document.body.style.overflow = 'hidden';
  }
  Languages() {
    const myElement = document.querySelectorAll(
      '.Lang'
    ) as NodeListOf<HTMLElement>;

    if (myElement[0].style.display === 'flex') {
      {
        myElement.forEach((element) => {
          (element as HTMLElement).style.display = '';
        });
      }
    } else if (myElement[0].style.display != 'flex') {
      myElement.forEach((element) => {
        (element as HTMLElement).style.display = 'flex';
      });
    }
    this.AllData();
  }
  ChangeLang(lang: any) {
    const myElementAR = document.querySelectorAll(
      '.Ar'
    ) as NodeListOf<HTMLElement>;
    const myElementEn = document.querySelectorAll(
      '.En'
    ) as NodeListOf<HTMLElement>;
    if (lang == 'Ar') {
      myElementEn.forEach((element) => {
        (element as HTMLElement).style.backgroundColor = 'white';
      });
      myElementAR.forEach((element) => {
        (element as HTMLElement).style.backgroundColor = '#ddd';
      });
    } else {
      myElementEn.forEach((element) => {
        (element as HTMLElement).style.backgroundColor = '#ddd';
      });
      myElementAR.forEach((element) => {
        (element as HTMLElement).style.backgroundColor = 'white';
      });
    }
    // this.service.setData(lang);
    this.cookieService.set("Language",lang)

  }
  setCookies(){
    // this.cookieService.set("Language","En")
  }
}
