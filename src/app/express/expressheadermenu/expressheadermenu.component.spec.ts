import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressheadermenuComponent } from './expressheadermenu.component';

describe('ExpressheadermenuComponent', () => {
  let component: ExpressheadermenuComponent;
  let fixture: ComponentFixture<ExpressheadermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressheadermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressheadermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
