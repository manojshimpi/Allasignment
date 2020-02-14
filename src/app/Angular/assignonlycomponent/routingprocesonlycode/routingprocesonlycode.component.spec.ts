import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingprocesonlycodeComponent } from './routingprocesonlycode.component';

describe('RoutingprocesonlycodeComponent', () => {
  let component: RoutingprocesonlycodeComponent;
  let fixture: ComponentFixture<RoutingprocesonlycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingprocesonlycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingprocesonlycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
