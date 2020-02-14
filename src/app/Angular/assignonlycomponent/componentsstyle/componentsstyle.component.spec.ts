import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsstyleComponent } from './componentsstyle.component';

describe('ComponentsstyleComponent', () => {
  let component: ComponentsstyleComponent;
  let fixture: ComponentFixture<ComponentsstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
