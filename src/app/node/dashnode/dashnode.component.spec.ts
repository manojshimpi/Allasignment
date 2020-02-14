import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnodeComponent } from './dashnode.component';

describe('DashnodeComponent', () => {
  let component: DashnodeComponent;
  let fixture: ComponentFixture<DashnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
