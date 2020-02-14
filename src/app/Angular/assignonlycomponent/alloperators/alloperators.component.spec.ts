import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloperatorsComponent } from './alloperators.component';

describe('AlloperatorsComponent', () => {
  let component: AlloperatorsComponent;
  let fixture: ComponentFixture<AlloperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlloperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
