export interface IGraphicsService{
    Parse(command: string): IShape;
}

export interface IShape{
    name: string;
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