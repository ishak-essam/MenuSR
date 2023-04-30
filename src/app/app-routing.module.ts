import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './menu/item-detail/item-detail.component';
import { HomeComponent } from './menu/home/home.component';
import { CategoryItemsComponent } from './menu/category-items/category-items.component';
import { CategoriesComponent } from './menu/categories/categories.component';
import { CartComponent } from './menu/cart/cart.component';

const routes: Routes = [
  { path: 'categories/:category/:id', component: ItemDetailComponent },
  { path: '', component: HomeComponent },
  { path: 'categories/:category', component: CategoryItemsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'cart', component: CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
