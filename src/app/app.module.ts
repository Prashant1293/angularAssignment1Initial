import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes'

import { AppComponent }  from './app.component';
import {HighlightDirective} from "./highlight.directive";
import {HomeComponent} from "./home/home.component";
import {CreateTaskComponent} from "./createTask/createTask.component";

@NgModule({
  imports:      [ BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, HighlightDirective, HomeComponent, CreateTaskComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
