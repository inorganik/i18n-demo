import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// import locale data
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeGb from '@angular/common/locales/en-GB';

import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
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
    TranslocoRootModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
