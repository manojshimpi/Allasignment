import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablerxjsComponent } from './observablerxjs.component';

describe('ObservablerxjsComponent', () => {
  let component: ObservablerxjsComponent;
  let fixture: ComponentFixture<ObservablerxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablerxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablerxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
