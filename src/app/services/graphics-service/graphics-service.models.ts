import { IGraphicsService, IShape, IPoint, IMeasurementAmount, ShapeType } from './igraphics-service'

export class Shape implements IShape {
    name: string;
    shapeType: ShapeType
    maxX: number;
    maxY: number;

    measurementAmounts: Array<IMeasurementAmount>;
    points: Array<Point>;
}

export class Point implements IPoint {

    constructor(x:number, y: number){
        this.X = x;
        this.Y = y;
    }

    X:number;
    Y:number;
}

export class MeasurementAmount implements IMeasurementAmount {
    measurement: string;
    amount: number;
}