import { Component, Inject, LOCALE_ID } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n demo';
  currentDate = new Date();


  // the locales the app supports
  locales = ['en-US', 'en-GB', 'fr'];
  locale = this.locales[0];

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private translocoService: TranslocoService
  ) {
    console.log('locale ID:', this.localeId);

    // check if the user's preferred language is supported and if so, use it.
    if (this.localeId.match(/^en|^fr/)) {
      this.updateLocale(this.localeId);
    }
  }

  // change locale/language at runtime
  updateLocale(locale) {
    this.locale = locale;
    const lang = locale.substring(0, 2);
    this.translocoService.setActiveLang(lang);
  }
}
