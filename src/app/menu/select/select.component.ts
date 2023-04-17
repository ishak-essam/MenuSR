import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  constructor(private service: ServiceService, private router: Router) {}
  Category: any = [];
  CategoryImage: any = [];
  Data: any = [];
  @Output() CategoryOutput: any = new EventEmitter<number>();
  ngOnInit(): void {

    this.GetCategory();
  }
  GetCategory() {
    this.service.getAllItems().subscribe((ele) => {
      this.Data = ele;
      this.Data = this.Data.groups;
    });
  }
  activeItem!: string;
  OutputCategory(Name: any, indexhtml: any) {
    this.CategoryOutput.emit(Name);
 }
}
