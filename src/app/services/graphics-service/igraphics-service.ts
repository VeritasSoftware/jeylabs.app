export interface IGraphicsService{
    Parse(command: string): IShape;
}

export interface IShape{
    name: string;
    maxX: number;
    maxY: number;

    points: Array<IPoint>;
}

export interface IPoint {
    X:number;
    Y:number;
}