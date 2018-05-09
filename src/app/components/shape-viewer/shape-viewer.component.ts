import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GraphicsService } from '../../services/graphics-service/graphics-service';

@Component({
  selector: 'app-shape-viewer',
  templateUrl: './shape-viewer.component.html',
  styleUrls: ['./shape-viewer.component.scss'],
  providers: [GraphicsService]
})
export class ShapeViewerComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  command: string;

  constructor(private graphicsService: GraphicsService) { }

  ngOnInit() {
    this.command = "";
    let ctx: CanvasRenderingContext2D =
    this.canvasRef.nativeElement.getContext('2d');

    var result = this.graphicsService.Draw("Draw a triangle with a side length of 150");

    ctx.beginPath();
    ctx.moveTo(result.points[0].X, result.points[0].Y);

    for(var i=1; i<result.points.length; i++){
      ctx.lineTo(result.points[i].X, result.points[i].Y);
    }
      
    ctx.fill();
  }
}
