import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../Services/service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent implements OnInit {
  constructor(private loc: Location, private router: ActivatedRoute, private http: HttpClient, private service: ServiceService, private route: Router, private cookies: CookieService) { }
  key!: string
  message!: string
  ngOnInit(): void {
    this.cookies.set('key', `104`);

    this.router.queryParams.subscribe((ele: any) => {
      this.key = ele.key;
    })
  }
  Back() {
    this.loc.back()
  }
  verify(code: any) {
    console.log(code)
    if (code == '102') {
      console.log(code);
      this.service.getAllItems(102)
      this.route.navigate([''])
    }
    else {
      this.service.getAllItems(104).subscribe(
        {
          next: (NEX) => {
            console.log(NEX)

          },
          error: (err: any) => {
            console.log(err)
            console.log(err.message)
            console.log(err.status)
            console.log(err.error.message)
            this.message = err.error.message;
          },
        })
    }
  }
}
