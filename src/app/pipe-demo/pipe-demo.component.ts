import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../services/locale.service';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html'
})
export class PipeDemoComponent implements OnInit {
  currentDate = new Date();

  constructor(public localeService: LocaleService) { }

  ngOnInit() {
  }

}
