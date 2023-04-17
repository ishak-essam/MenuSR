import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  CategorySearch?: any = 'All';
  CategoryName(event: any) {
    this.CategorySearch = event;
  }
  title = 'MenuSR';
}
