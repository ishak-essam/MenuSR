import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit ,OnChanges{
  constructor(private service: ServiceService) {}
  Category: any = [];
  CategoryImage: any = [];
  Data: any = [];
  ngOnInit(): void {
    this.GetCategory();
  }
  ngOnChanges(): void {
    this.GetCategory();


  }Changes(): void {
    this.GetCategory();
  }
  GetCategory() {
    this.service.getAllItems().subscribe((ele) => {
      this.Data = ele;
      this.Data = this.Data.groups;
    });
  }
}
