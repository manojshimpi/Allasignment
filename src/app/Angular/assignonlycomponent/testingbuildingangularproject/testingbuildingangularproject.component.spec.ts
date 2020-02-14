import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingbuildingangularprojectComponent } from './testingbuildingangularproject.component';

describe('TestingbuildingangularprojectComponent', () => {
  let component: TestingbuildingangularprojectComponent;
  let fixture: ComponentFixture<TestingbuildingangularprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingbuildingangularprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingbuildingangularprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
