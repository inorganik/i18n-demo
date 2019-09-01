import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../services/locale.service';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html'
})
export class PipeDemoComponent implements OnInit {
  currentDate = new Date();
  codeTranslated$: Observable<string>;

  constructor(public localeService: LocaleService, private transloco: TranslocoService) { }

  ngOnInit() {
    this.codeTranslated$ = this.transloco.langChanges$.pipe(
      switchMap(() => this.transloco.selectTranslate('HOME.CODE'))
    );
  }

}
