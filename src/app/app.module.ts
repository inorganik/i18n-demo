import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import locale data
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeGb from '@angular/common/locales/en-GB';

import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { AppRoutingModule } from './app-routing.module';

// register locales
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeGb, 'en-GB');

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: true,
        defaultLang: 'en',
        fallbackLang: 'en',
        prodMode: environment.production,
        scopeStrategy: 'shared'
      } as TranslocoConfig
    },
    translocoLoader
  ]
})
export class AppModule { }
