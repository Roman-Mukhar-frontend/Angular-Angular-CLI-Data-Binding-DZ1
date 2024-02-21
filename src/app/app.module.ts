import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { ChildComponent } from './lesson03/child/child.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { SearchPipe } from './lesson04/search.pipe';
import { SortPipe } from './lesson04/sort.pipe';
import { SortLastNamePipe } from './lesson04/sort-last-name.pipe';
import { SortNumberPipe } from './lesson04/sort-number.pipe';
import { Lesson05Component } from './lesson05/lesson05.component';
import { HeaderComponent } from './lesson05/components/header/header.component';
import { HomeComponent } from './lesson05/pages/home/home.component';
import { WorkComponent } from './lesson05/pages/work/work.component';
import { FooterComponent } from './lesson05/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson03Component,
    ChildComponent,
    Lesson04Component,
    SearchPipe,
    SortPipe,
    SortLastNamePipe,
    SortNumberPipe,
    Lesson05Component,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
