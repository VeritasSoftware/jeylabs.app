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

  it('should parse a Hexagon natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw a hexagon with a side length of 200");
    
    expect(result.name == "hexagon").toBeTruthy();
    expect(result.shapeType == ShapeType.hexagon).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "side length").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 6).toBeTruthy();
  });

  it('should parse a Heptagon natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw a heptagon with a side length of 200");
    
    expect(result.name == "heptagon").toBeTruthy();
    expect(result.shapeType == ShapeType.heptagon).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "side length").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 7).toBeTruthy();
  });

  it('should parse a Octogon natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw a octogon with a side length of 200");
    
    expect(result.name == "octogon").toBeTruthy();
    expect(result.shapeType == ShapeType.octogon).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "side length").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 8).toBeTruthy();
  });

  it('should parse a Oval natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw an oval with a major axis of 200 and a minor axis of 100");
    
    expect(result.name == "oval").toBeTruthy();
    expect(result.shapeType == ShapeType.oval).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "major axis").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.measurementAmounts[1].measurement = "minor axis").toBeTruthy();
    expect(result.measurementAmounts[1].amount = 100).toBeTruthy();    
  });

  it('should parse a Circle natural command', () => {    
    var graphicsService = new GraphicsService();
    var result = graphicsService.Draw("Draw an circle with a radius of 200");
    
    expect(result.name == "circle").toBeTruthy();
    expect(result.shapeType == ShapeType.circle).toBeTruthy();
    expect(result.measurementAmounts.length > 0).toBeTruthy();
    expect(result.measurementAmounts[0].measurement = "radius").toBeTruthy();
    expect(result.measurementAmounts[0].amount = 200).toBeTruthy();
    expect(result.points.length == 360).toBeTruthy();    
  });
});