import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { GraphicsServiceModule } from './services/graphics-service/graphics-service.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GraphicsServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
