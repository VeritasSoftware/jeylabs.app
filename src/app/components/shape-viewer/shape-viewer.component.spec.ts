import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeViewerComponent } from './shape-viewer.component';

describe('ShapeViewerComponent', () => {
  let component: ShapeViewerComponent;
  let fixture: ComponentFixture<ShapeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
