import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresscreateconnComponent } from './expresscreateconn.component';

describe('ExpresscreateconnComponent', () => {
  let component: ExpresscreateconnComponent;
  let fixture: ComponentFixture<ExpresscreateconnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpresscreateconnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresscreateconnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
