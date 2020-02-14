import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalinjectorsComponent } from './hierarchicalinjectors.component';

describe('HierarchicalinjectorsComponent', () => {
  let component: HierarchicalinjectorsComponent;
  let fixture: ComponentFixture<HierarchicalinjectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchicalinjectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalinjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
