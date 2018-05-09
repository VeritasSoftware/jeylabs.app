import {Injectable} from '@angular/core'

import { IGraphicsService, IShape, IPoint } from './igraphics-service'
import { Shape, Point, MeasurementAmount } from './graphics-service.models'
// import { MockNgModuleResolver } from '@angular/compiler/testing';

@Injectable()
export class GraphicsService implements IGraphicsService {
    Parse(command: string): IShape {
        var matches = command.match(/^Draw an? ([a-zA-Z\s]+?) ((?:with|and )? ([a-zA-Z\s]+?) of (\d+))+$/i);        
        
        var shape = new Shape();
        shape.measurementAmounts = new Array<MeasurementAmount>();

        shape.name = matches[1];

        for (var i=2; i<matches.length; i=i+2){
            if (matches[i] == null) {
                break;
            }
            
            var measurementAmount = new MeasurementAmount();

            measurementAmount.measurement = matches[i];
            measurementAmount.amount = parseInt(matches[i+1]);

            shape.measurementAmounts.push(measurementAmount);
        }
        
        return shape;
    }
}

