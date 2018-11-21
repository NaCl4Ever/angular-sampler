import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SampleComponent } from './core/sample/sample.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ObserveComponent } from './core/observe/observe.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'observe', component: ObserveComponent},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
