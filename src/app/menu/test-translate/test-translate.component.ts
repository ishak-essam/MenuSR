import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../menu/test-translate/api.service';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-test-translate',
  templateUrl: './test-translate.component.html',
  styleUrls: ['./test-translate.component.scss']
})
export class TestTranslateComponent implements OnInit {
  currentLanguage: string = 'En';
  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.setLanguage();
  }

  async setLanguage(): Promise<void> {
    const ipInfo$ = this.apiService.getIPInfo();
    const ipInfo = await lastValueFrom(ipInfo$);
    console.log()
    this.translate.setDefaultLang('En');
    if (ipInfo?.country_code?.toUpperCase() == 'BR') {
      this.translate.setDefaultLang('Ar');
      this.currentLanguage = 'Ar';
    };
  }

  changeLanguage(): void {
    if (this.currentLanguage == 'En') {
      this.translate.use('Ar');
      this.currentLanguage = 'Ar';
    } else {
      this.translate.use('En');
      this.currentLanguage = 'En';
    }
    const translations = this.translate.getTranslation(this.currentLanguage);
    translations.subscribe((ele) => {
      console.log(ele)

    });
  }
}
