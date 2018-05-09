import { IGraphicsService, IShape, IPoint, IMeasurementAmount } from './igraphics-service'

export class Shape implements IShape {
    name: string;
    maxX: number;
    maxY: number;

    measurementAmounts: Array<IMeasurementAmount>;
    points: Array<Point>;
}

export class Point implements IPoint {
    X:number;
    Y:number;
}

export class MeasurementAmount implements IMeasurementAmount {
    measurement: string;
    amount: number;
}