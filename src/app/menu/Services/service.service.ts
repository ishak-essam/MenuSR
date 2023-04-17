import { Injectable, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';
@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnChanges {
  constructor(private http: HttpClient) {}
  private _data = new BehaviorSubject<string>('En');
  data$ = this._data.asObservable();
  setData(value: string) {
   return this._data.next(value);
  }
  getAllItems() {
    return this.http.get(
      `http://inv.egypto-soft.com/ihs/test/menu?key=102&LANG=${this._data.value}`)
  }
  ngOnChanges(): void {
    this.getAllItems();
  }
  GetItems(lang: string) {
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
