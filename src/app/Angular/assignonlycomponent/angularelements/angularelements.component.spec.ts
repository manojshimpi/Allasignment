import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularelementsComponent } from './angularelements.component';

describe('AngularelementsComponent', () => {
  let component: AngularelementsComponent;
  let fixture: ComponentFixture<AngularelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
