import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n demo';
  currentDate = new Date();

  // the user's locale
  detectedLocale = '';
  // the locales the app supports
  locales = ['en-US', 'en-GB', 'fr'];
  // the current locale
  locale = this.locales[0];

  constructor(
    private translocoService: TranslocoService
  ) {
    this.detectedLocale = this.getUsersLocale('en-US');

    // check if the user's preferred language is supported and if so, use it.
    if (this.detectedLocale.match(/^en|^fr/)) {
      this.updateLocale(this.detectedLocale);
    }
  }

  getUsersLocale(defaultLang: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultLang;
    }
    const nav = window.navigator as any;
    let lang = nav.languages ? nav.languages[0] : null;
    lang = lang || nav.language || nav.browserLanguage || nav.userLanguage;
    return lang;
  }

  // change locale/language at runtime
  updateLocale(locale) {
    if (this.locales.includes(locale)) {
      this.locale = locale;
    }
    const lang = locale.substring(0, 2);
    this.translocoService.setActiveLang(lang);
  }
}
