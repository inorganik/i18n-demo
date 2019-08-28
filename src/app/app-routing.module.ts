import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PipeDemoComponent
  },
  {
    path: 'lazy-loaded',
    loadChildren: './+lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
