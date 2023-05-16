import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './menu/item-detail/item-detail.component';
import { HomeComponent } from './menu/home/home.component';
import { CategoryItemsComponent } from './menu/category-items/category-items.component';
import { CategoriesComponent } from './menu/categories/categories.component';
import { CartComponent } from './menu/cart/cart.component';
import { OTPComponent } from './menu/otp/otp.component';

const routes: Routes = [
  { path: 'categories/:name', component: ItemDetailComponent, },
  { path: '', component: HomeComponent, title: 'Menu' },
  { path: 'categories/category/:catname', component: CategoryItemsComponent },
  { path: 'categories', component: CategoriesComponent, pathMatch: 'full', },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: '**', redirectTo: "otp" },
  { path: "otp", component: OTPComponent, title: 'OTP' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
