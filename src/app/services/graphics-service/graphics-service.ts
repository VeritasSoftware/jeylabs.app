import {Injectable} from '@angular/core'

import { IGraphicsService, IShape, IPoint, ShapeType } from './igraphics-service'
import { Shape, Point, MeasurementAmount } from './graphics-service.models'

@Injectable()
export class GraphicsService implements IGraphicsService {
    Draw(command: string): IShape {
        var shape = this.Parse(command);

        switch(shape.shapeType) {  
            case ShapeType.circle:
                var radius = this.GetMeasurement("radius", shape);
                shape.points = this.RegularPolygon(radius, 360, 0);
                break;          
            case ShapeType.heptagon:
                var sideLength = this.GetMeasurement("side length", shape);
                shape.points = this.RegularPolygon(sideLength, 7, 0);
                break;
            case ShapeType.hexagon:
                var sideLength = this.GetMeasurement("side length", shape);
                shape.points = this.RegularPolygon(sideLength, 6, 0);
                break;
            case ShapeType.octogon:
                var sideLength = this.GetMeasurement("side length", shape);
                shape.points = this.RegularPolygon(sideLength, 8, 0);
                break; 
            case ShapeType.oval:     
                var majorAxis = this.GetMeasurement("major axis", shape);
                var minorAxis = this.GetMeasurement("minor axis", shape);           
                shape.points = this.Oval(majorAxis, minorAxis);
                break;                               
            case ShapeType.pentagon:
                var sideLength = this.GetMeasurement("side length", shape);
                shape.points = this.RegularPolygon(sideLength, 5, 0);
                break; 
            case ShapeType.square:
                var sideLength = shape.measurementAmounts.find(x => x.measurement == "side length").amount;
                shape.points = this.RegularPolygon(sideLength, 4, 0);                                
                break; 
            case ShapeType.triangle:
                var sideLength = this.GetMeasurement("side length", shape);
                shape.points = this.RegularPolygon(sideLength, 3, 0);
                break;                           
        }

        return shape;
    }

    GetMeasurement(measurementName: string, shape: IShape): number {
        var measurement = shape.measurementAmounts.find(x => x.measurement == measurementName);
        if (measurement == null) {
            throw "Invalid measurement name for shape. Refer to table of supprorted natural language commands for shapes."
        }

        return measurement.amount;
    }

    Parse(command: string): IShape {
        //Note:
        //Repeating a capturing group stores only the last captured  in javascript regex flavor.
        //https://stackoverflow.com/questions/3537878/how-to-capture-an-arbitrary-number-of-groups-in-javascript-regexp
        //Hence below regex cannot be used in javascript flavor.
        //.Net flavour however stores the intermediate captures.
        //var matches = command.match(/^Draw an? ([a-zA-Z ]+?)\s(?:(with|\sand) an? ([a-zA-Z ]+?) of (\d+))+$/gi);  

        var regexName = /^Draw an? ([a-zA-Z ]+?)\swith/i;

        var regex = /(?:with|\sand) an? ([a-zA-Z ]+?) of (\d+)/gi;

        var nameMatch = command.match(regexName);
        
        var shape = new Shape();
        shape.measurementAmounts = new Array<MeasurementAmount>();
        shape.points = new Array<Point>();

        shape.name = nameMatch[1].toLowerCase();
        shape.shapeType = ShapeType[shape.name];

        var matches;
        while ((matches = regex.exec(command)) != null) {
            var measurementAmount = new MeasurementAmount();

            measurementAmount.measurement = matches[1].toLowerCase();
            measurementAmount.amount = parseInt(matches[2]);

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

    Oval(majorAxisLength: number, minorAxisLength: number): Array<Point> {
        var step = 2*Math.PI/360;
        var h = majorAxisLength;
        var k = minorAxisLength;        
        var r = minorAxisLength;
        var points = new Array<Point>();

        for(var theta=0;  theta < 2*Math.PI;  theta+=step)
        { 
            var x = h + r*Math.cos(theta) ;
            var y = k - 0.5 * r*Math.sin(theta);
            var p = new Point(x, y);
            points.push(p);
        }

        return points;
    }
}

