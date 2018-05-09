import { TestBed, async } from '@angular/core/testing';
import { GraphicsService } from './graphics-service';
import { ShapeType } from './igraphics-service';

describe('GraphicsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  }));

  it('should parse a Square natural command', () => {
    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw a square with a side length of 200");
    
    expect(result.name == "square").toBeTruthy();
    expect(result.shapeType == ShapeType.square).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "side length").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 4).toBeTruthy();
  });
});