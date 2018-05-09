import {Injectable} from '@angular/core'

import { IGraphicsService, IShape, IPoint, ShapeType } from './igraphics-service'
import { Shape, Point, MeasurementAmount } from './graphics-service.models'

@Injectable()
export class GraphicsService implements IGraphicsService {
    Parse(command: string): IShape {
        var matches = command.match(/^Draw an? ([a-zA-Z\s]+?) ((?:with|and )? ([a-zA-Z\s]+?) of (\d+))+$/i);        
        
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

        switch(shape.shapeType) {
            case ShapeType.square:
                var pt = new Point(0, 0);
                shape.points.push(pt);

                pt = new Point(shape.measurementAmounts[0].amount, 0);
                shape.points.push(pt);

                pt = new Point(shape.measurementAmounts[0].amount, shape.measurementAmounts[0].amount);
                shape.points.push(pt);

                pt = new Point(0, shape.measurementAmounts[0].amount);
                shape.points.push(pt);

                shape.points.forEach(pt => pt.X = pt.X + 50);

                break;
        }
        
        return shape;
    }
}

