import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { FaInputComponent } from './lib/fa-input/fa-input.component';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './lib/common/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
