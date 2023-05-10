import { MatSelectModule } from '@angular/material/select';
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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    HomeComponent,
    SelectComponent,
    ItemDetailComponent,
    NavBarComponent,
    CategoryItemsComponent,
    CategoriesComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatBadgeModule,
    MatTabsModule,
    RouterModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CookieService],
  exports: [
    HomeComponent,
    NavBarComponent,
    SelectComponent,
    CartComponent,
    FooterComponent,
  ],
})
export class MenuModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'https://inv.egypto-soft.com/ihs/test/menu?key=102&LANG=',
    ''
  );
}
