import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashexpressComponent } from './dashexpress.component';

describe('DashexpressComponent', () => {
  let component: DashexpressComponent;
  let fixture: ComponentFixture<DashexpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashexpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
