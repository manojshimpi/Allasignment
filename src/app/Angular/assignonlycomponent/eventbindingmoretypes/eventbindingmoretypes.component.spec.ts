import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingmoretypesComponent } from './eventbindingmoretypes.component';

describe('EventbindingmoretypesComponent', () => {
  let component: EventbindingmoretypesComponent;
  let fixture: ComponentFixture<EventbindingmoretypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbindingmoretypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindingmoretypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
