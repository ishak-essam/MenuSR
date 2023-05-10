import {
  Injectable,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnChanges {
  private renderer!: Renderer2;
  private primaryColors!: any;
  private Language = new BehaviorSubject<string>('en');
  data$ = this.Language.asObservable();
  Data: any = new BehaviorSubject<any>([]);
  DataTransalte: any = new BehaviorSubject<any>([]);
  CartContentAll: any = new BehaviorSubject<any>([]);
  myNumberSubject: any = new BehaviorSubject<number>(0);
  private DataTranslateLanguage = new BehaviorSubject<[]>([]);
  constructor(
    private http: HttpClient,
    private rendererFactory: RendererFactory2,
    private cookies: CookieService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  ngOnChanges(): void {
    this.getAllItems();
  }
  setData(value: string) {
    this.Language.next(value);
  }
  setDataTransalte(value: []) {
    this.DataTranslateLanguage.next(value);
    this.Data.next(value);
  }
  Carthave() {
    this.myNumberSubject.next(JSON.parse(localStorage.getItem("Cart")!)?.length);
  }
  getAllItems() {
    return this.http.get(
      `http://inv.egypto-soft.com/ihs/test/menu?key=102&LANG=${this.cookies.get(
        'Language'
      )}`
    );
  }
  GetData() {
    return this.getAllItems().subscribe((ele: any) => {
      this.Data.next(ele.products);
    });
  }
  getPrimaryColor() {
    this.http
      .get<{ primaryColor: string }>(
        'http://inv.egypto-soft.com/ihs/test/menu?key=102'
      )
      .subscribe((response) => {
        this.primaryColors = response;
        this.primaryColors = this.primaryColors?.primarycolor;
        const rootStyles = getComputedStyle(document.documentElement);
        const primaryColor = rootStyles.getPropertyValue('--primary');
        document.documentElement.style.setProperty(
          '--primary',
          `${this.primaryColors}`
        );
        const primaryColord = rootStyles.getPropertyValue('--primary');
      });
  }
  GetItems(lang: string) {
    this.getAllItems();

    return this.http.get(
      `http://inv.egypto-soft.com/ihs/test/menu?key=102&LANG=${lang}`
    );
  }
  PostItem(item: any) {
    return this.http.post(
      'http://inv.egypto-soft.com/ihs/test/menu?key=102',
      item
    );
  }
}
