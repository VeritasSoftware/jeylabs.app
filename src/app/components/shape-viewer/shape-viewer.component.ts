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
  }

  drawMe() {
    try {
      if (this.command == null || this.command.match(/^\s*$/) != null){
        throw "Command not entered";
      }
      let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

      // Clear any previous content.
      ctx.clearRect(0, 0, 500, 500);
  
      //var result = this.graphicsService.Draw("Draw an isosceles triangle with a height of 200 and a width of 100");
      //var result = this.graphicsService.Draw("Draw a square with a side length of 150");
      //Draw an oval with a major axis of 150 and a minor axis of 100
      var result = this.graphicsService.Draw(this.command);
  
      ctx.beginPath();
      ctx.moveTo(result.points[0].X, result.points[0].Y);
  
      for(var i=1; i<result.points.length; i++){
        ctx.lineTo(result.points[i].X, result.points[i].Y);
      }
        
      ctx.fill();
      ctx.closePath();
      ctx.stroke();
    }
    catch(e){
      alert(e);
    }
  }
}
