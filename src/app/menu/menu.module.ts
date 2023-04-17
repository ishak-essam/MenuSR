import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    SelectComponent,
    ItemDetailComponent,
    NavBarComponent,
    CategoryItemsComponent,
    CategoriesComponent,
    CartComponent,
  ],
  imports: [CommonModule, RouterModule, BrowserModule, FormsModule],
  exports: [HomeComponent, NavBarComponent, SelectComponent, CartComponent],
})
export class MenuModule {}
