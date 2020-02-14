import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivemoretypesComponent } from './directivemoretypes.component';

describe('DirectivemoretypesComponent', () => {
  let component: DirectivemoretypesComponent;
  let fixture: ComponentFixture<DirectivemoretypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivemoretypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivemoretypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
