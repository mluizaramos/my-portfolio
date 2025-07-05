import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private defaultLang = 'pt';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(this.defaultLang);
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
