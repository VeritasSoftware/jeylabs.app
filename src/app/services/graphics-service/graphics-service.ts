import {Injectable} from '@angular/core'

import { IGraphicsService, IShape, IPoint } from './igraphics-service'
import { Shape, Point } from './graphics-service.models'
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Injectable()
export class GraphicsService implements IGraphicsService {
    Parse(command: string): IShape {
        var matches = command.match(/^Draw an? ([a-zA-Z\s]+?) ((?:with|and )? ([a-zA-Z\s]+?) of (\d+))+$/i);

        var name = matches[1];        

        for (var i=2; i<matches.length; i=i+2){
            if (matches[i] == null) {
                break;
            }

            var measurement = matches[i];
            var amount = matches[i+1];
        }
        
        return new Shape();
    }
}

