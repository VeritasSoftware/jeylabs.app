import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { appRoutes } from './routerConfig';

import { GraphicsServiceModule } from './services/graphics-service/graphics-service.module'
import { ShapeViewerComponent } from './components/shape-viewer/shape-viewer.component'


@NgModule({
  declarations: [
    AppComponent,
    ShapeViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GraphicsServiceModule],
  bootstrap: [AppComponent, ShapeViewerComponent]
})
export class AppModule { }
