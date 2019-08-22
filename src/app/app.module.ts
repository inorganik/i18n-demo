import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeGb from '@angular/common/locales/en-GB';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeGb, 'en-GB');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoModule
  ],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: true,
        defaultLang: 'en',
        prodMode: environment.production
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
