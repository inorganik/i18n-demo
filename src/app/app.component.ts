import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n demo';

  currentDate = new Date();

  locale = 'en';
  locales = ['fr', 'en-GB'];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    console.log('locale:', this.localeId);

    this.locales.unshift(this.localeId);
    this.locale = this.localeId;

  }

  updateLocale(event) {
    this.locale = event.target.value;
  }
}
