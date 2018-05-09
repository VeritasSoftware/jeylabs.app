export interface IGraphicsService{
    Draw(command: string): IShape;
}

export interface IShape{
    name: string;
    shapeType: ShapeType;
    maxX: number;
    maxY: number;

    measurementAmounts: Array<IMeasurementAmount>;
    points: Array<IPoint>;
}

export interface IPoint {
    X:number;
    Y:number;
}

export interface IMeasurementAmount {
    measurement: string;
    amount: number;
}

export enum ShapeType {
    square
}