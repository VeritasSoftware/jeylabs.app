import { IGraphicsService, IShape, IPoint } from './igraphics-service'

export class Shape implements IShape {
    name: string;
    maxX: number;
    maxY: number;

    points: Array<Point>;
}

export class Point implements IPoint {
    X:number;
    Y:number;
}