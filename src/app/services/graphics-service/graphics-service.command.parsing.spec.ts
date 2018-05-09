import { TestBed, async } from '@angular/core/testing';
import { GraphicsService } from './graphics-service';
import { ShapeType } from './igraphics-service';

describe('GraphicsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  }));

  it('should parse a Triangle natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw a triangle with a side length of 200");
    
    expect(result.name == "triangle").toBeTruthy();
    expect(result.shapeType == ShapeType.triangle).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "side length").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 3).toBeTruthy();
  });

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

  it('should parse a Pentagon natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw a pentagon with a side length of 200");
    
    expect(result.name == "pentagon").toBeTruthy();
    expect(result.shapeType == ShapeType.pentagon).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "side length").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 5).toBeTruthy();
  });
});