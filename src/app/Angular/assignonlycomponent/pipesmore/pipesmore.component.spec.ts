import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesmoreComponent } from './pipesmore.component';

describe('PipesmoreComponent', () => {
  let component: PipesmoreComponent;
  let fixture: ComponentFixture<PipesmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
