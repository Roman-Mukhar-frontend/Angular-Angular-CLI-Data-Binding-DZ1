import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { HomeComponent } from './lesson05/pages/home/home.component';
import { WorkComponent } from './lesson05/pages/work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'works', component: WorkComponent, children: [
      { path: 'cenzor', component: Lesson01Component },
      { path: 'users', component: Lesson02Component },
      { path: 'task', component: Lesson03Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
