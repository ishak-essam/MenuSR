import { Router } from '@angular/router';
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
  language!: string;
  langURL;
  cartallcontent!: number;
  constructor(
    private service: ServiceService,
    public translate: TranslateService,
    private cookieService: CookieService,
    private router: Router
  ) {
    // translate.addLangs(['en', 'ar','fr']);
    translate.addLangs(['En', 'Ar']);
    translate.setDefaultLang('En');
    this.langURL = this.cookieService.get('Language')

  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  ngOnInit(): void {
    this.AllData();
    document.querySelector('body')!.style.direction = `${this.cookieService.get('direction')}`;
    this.service.myNumberSubject.subscribe((value: any) => {
      this.cartallcontent = value;
    });

    this.service.data$.subscribe((value) => {
      this.data = value;
    });
    this.setCookies();
    if (this.cookieService.get('Language') == 'Ar') this.language = 'Arabic';
    else this.language = 'English';
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
  ngOnChanges(): void { }
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
    this.AllData();
  }
  ChangeLang(lang: any) {
    const myElementAR = document.querySelectorAll(
      '.Ar'
    ) as NodeListOf<HTMLElement>;
    const myElementEn = document.querySelectorAll(
      '.En'
    ) as NodeListOf<HTMLElement>;
    this.service.LanguageURL.next(lang)


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
    const bdy = document.querySelector('body');
    if (lang == 'En') {
      document.querySelector('body')!.style.direction = 'ltr';
      this.cookieService.set('direction', "ltr");
      document.querySelector('svg')!.style.transform = 'rotate(360deg) !important';
    } else {
      if (lang == 'Ar') {
        document.querySelector('body')!.style.direction = 'rtl';
        this.cookieService.set('direction', "rtl");
        document.querySelector('svg')!.style.transform = 'rotate(180deg) !important';
      }
    }
    this.language = lang;
    this.translate.use(lang);
    this.cookieService.set('Language', lang);
    if (this.cookieService.get('Language') == 'Ar') this.language = 'Arabic';
    else this.language = 'English';
    const translations = this.translate.getTranslation(lang);
    translations.subscribe((ele) => {
      this.service.setDataTransalte(ele.products);
    });
    this.service.getAllItems().subscribe((ele: any) => {
      this.service.Data.next(ele.products);
    });
  }
  setCookies() {
    // this.cookieService.set("Language","En")
  }

  grouplink() {
    this.router.navigate(['categories']);
  }
  /*
  constructor(public translate: TranslateService) {
    // translate.addLangs(['en', 'ar','fr']);
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
  }
  switchLang(lang: string) {
    console.log(lang);
    console.log(this.translate.use(lang));
  }*/
}
