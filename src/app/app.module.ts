import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { CookieService } from 'ngx-cookie-service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TestingComponent } from './Test/testing/testing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common';
import { Observable, map } from 'rxjs';
@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [BrowserModule, AppRoutingModule,MenuModule, MatIconModule, MatSlideToggleModule, HttpClientModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader,
      deps: [HttpClient]
    },
  }), BrowserAnimationsModule,],
  providers: [CookieService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
// export function httpTranslateLoader(http: HttpClient) {
//   const api2Url = `https://api2.example.com/translations/`;
//   return new TranslateHttpLoader(http, "https://inv.egypto-soft.com/ihs/test/menu?key=102&LANG=", "");
// }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
