import {Injectable} from '@angular/core'

import { IGraphicsService, IShape, IPoint, ShapeType } from './igraphics-service'
import { Shape, Point, MeasurementAmount } from './graphics-service.models'

@Injectable()
export class GraphicsService implements IGraphicsService {
    Draw(command: string): IShape {
        var shape = this.Parse(command);

        switch(shape.shapeType) {
            case ShapeType.square:
                shape.points = this.RegularPolygon(shape.measurementAmounts[0].amount, 4, 0);                                
                break;
            case ShapeType.pentagon:
                shape.points = this.RegularPolygon(shape.measurementAmounts[0].amount, 5, 0);
                break;                
        }

        return shape;
    }

    Parse(command: string): IShape {
        var matches = command.match(/^Draw an? ([a-zA-Z\s]+?) (?:(?:with|and )? an? ([a-zA-Z\s]+?) of (\d+))+$/i);        
        
        var shape = new Shape();
        shape.measurementAmounts = new Array<MeasurementAmount>();
        shape.points = new Array<Point>();

        shape.name = matches[1].toLowerCase();
        shape.shapeType = ShapeType[shape.name];

        for (var i=2; i<matches.length; i=i+2){
            if (matches[i] == null) {
                break;
            }
            
            var measurementAmount = new MeasurementAmount();

            measurementAmount.measurement = matches[i].toLowerCase();
            measurementAmount.amount = parseInt(matches[i+1]);

            shape.measurementAmounts.push(measurementAmount);
        }
                
        return shape;
    }

    RegularPolygon(radius: number, sides: number, start: number): Array<Point> {
        var x_center = radius;
        var y_center = radius;
        var angle = start;
        var angle_increment = (2 * Math.PI)/sides;

        var points = new Array<Point>();

        for (var i=0; i<sides; i++){
            var p = new Point(x_center + (radius * Math.cos(angle)), y_center + (radius * Math.sin(angle)));
            
            points.push(p);

            angle = angle + angle_increment;
        }

        return points;
    }
}

