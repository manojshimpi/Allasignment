import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashreactComponent } from './dashreact.component';

describe('DashreactComponent', () => {
  let component: DashreactComponent;
  let fixture: ComponentFixture<DashreactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashreactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
