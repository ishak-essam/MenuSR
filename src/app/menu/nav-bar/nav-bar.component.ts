import { Component, OnChanges, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnChanges {
  Header!: any;
  logo!: string;
  data!: string;
  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.service.getAllItems().subscribe((ele) => {
      this.Header = ele;
      this.logo = this.Header.logo;
      this.Header = this.Header.name;
    });
    this.service.data$.subscribe((value) => {
      this.data = value;
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
    const myElement = document.querySelector('.Lang') as HTMLElement;
    if (myElement.style.display === 'flex') {
      myElement.style.display = '';
    } else myElement.style.display = 'flex';
  }
  ChangeLang(lang: any) {
    this.service.setData(lang);
  }
}
