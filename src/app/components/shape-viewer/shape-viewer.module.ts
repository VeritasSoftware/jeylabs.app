import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShapeViewerComponent } from './shape-viewer.component';
import { GraphicsService } from '../../services/graphics-service/graphics-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [GraphicsService],
  declarations: [ShapeViewerComponent]
})
export class ShapeViewerModule { }
