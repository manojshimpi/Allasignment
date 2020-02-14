import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconnectionComponent } from './createconnection.component';

describe('CreateconnectionComponent', () => {
  let component: CreateconnectionComponent;
  let fixture: ComponentFixture<CreateconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
