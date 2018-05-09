import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsService } from './graphics-service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GraphicsService],
  declarations: []
})
export class GraphicsServiceModule { }
