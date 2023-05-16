import { Component } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { query } from '@angular/animations';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  Items!: any;
  Item!: any;
  quantity: number = 1;
  myText!: string;
  name!: any;
  spin: boolean = false;
  langUrl!: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private cookieService: CookieService,
    public translate: TranslateService
  ) {
  }
  ngOnInit() {
    this.CheckUrl()
  }

  CartItems: any[] = [];
  // if(.){}
  CartItem = {
    Item: {},
    quantity: this.quantity,
    Des: '',
  };

  CheckUrl() {
    this.route.paramMap.subscribe(ele => this.langUrl = ele.get("LANG"))
    this.name = this.route.snapshot.paramMap.get('name');
    this.route.queryParams.subscribe((ele: any) => {
      console.log(ele)
      this.langUrl = ele.LANG;
      if (this.langUrl == 'En') {
        this.translate.use(this.langUrl);
        const translations = this.translate.getTranslation(this.langUrl);
        translations.subscribe((ele) => {
          console.log(ele)
        });
        document.querySelector('body')!.style.direction = `ltr`;
        this.ItemByID();

      }
      else if (this.langUrl == 'Ar') {
        this.translate.use(this.langUrl);
        const translations = this.translate.getTranslation(this.langUrl);
        translations.subscribe((ele) => {
          console.log(ele)
        });
        document.querySelector('body')!.style.direction = `rtl`;
        this.ItemByID();
      } else {
        this.router.navigate(['otp'], { queryParams: { key: '104' } });
        this.service.getAllItems(104)
      }
    })
    this.route.paramMap.subscribe(ele => console.log(ele))
    if (!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify(this.CartItems));
    }
  }
  ItemByID() {
    document.getElementById('spin')!.style.display = 'block';
    this.spin = true;
    this.service.GetItems(this.langUrl).subscribe((ele) => {
      this.Items = ele;
      this.Items = this.Items.products;
      for (let index = 0; index < Object.keys(this.Items).length; index++) {
        if (this.name == this.Items[index].name) {
          this.Item = this.Items[index];
          document.getElementById('spin')!.style.display = 'none';
          this.spin = false;
          this.CartItem.Item = this.Items[index];
        }
      }
      if (this.Item) {
      } else {
        this.cookieService.set('key', '104');
        this.router.navigate(['otp'], { queryParams: { key: '104' } });
      }
    });
  }
  AddToCart() {
    const span: any = document.querySelector('mat-spinner');
    const carts: any = document.getElementById('cart');
    carts.style.display = 'none';

    span.style.display = 'flex';
    setTimeout(() => {
      this.CartItems = JSON.parse(localStorage.getItem('Cart')!);
      this.CartItem.quantity = this.quantity;
      this.CartItem.Des = this.myText;
      this.CartItems.push(this.CartItem);
      this.service.PostItem(this.CartItem);
      localStorage.setItem('Cart', JSON.stringify(this.CartItems));
      span.style.display = 'none';
      this.router.navigate(['/cart']);
      this.service.Carthave();
      carts.style.display = 'flex';



    }, 2000);
  }
  increaseQuantity() {
    this.quantity++;
  }
  decreaseQuantity() {
    this.quantity--;
  }
  Back() {
    this.location.back()
  }
}
