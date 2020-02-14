import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmoduletypesComponent } from './ngmoduletypes.component';

describe('NgmoduletypesComponent', () => {
  let component: NgmoduletypesComponent;
  let fixture: ComponentFixture<NgmoduletypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmoduletypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmoduletypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
