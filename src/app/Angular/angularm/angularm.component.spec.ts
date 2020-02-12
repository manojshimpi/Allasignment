import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmComponent } from './angularm.component';

describe('AngularmComponent', () => {
  let component: AngularmComponent;
  let fixture: ComponentFixture<AngularmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
