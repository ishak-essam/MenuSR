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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OTPComponent } from './otp/otp.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestTranslateComponent } from './test-translate/test-translate.component';
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
    OTPComponent,
    TestTranslateComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatBadgeModule,
    MatTabsModule,
    RouterModule,
    MatIconModule,
    BrowserModule, MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CookieService ],
  exports: [
    HomeComponent,
    NavBarComponent,
    SelectComponent,
    CartComponent,
    FooterComponent,
    MatSlideToggleModule
  ],
})
export class MenuModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
