import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabingvariantComponent } from './databingvariant.component';

describe('DatabingvariantComponent', () => {
  let component: DatabingvariantComponent;
  let fixture: ComponentFixture<DatabingvariantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabingvariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabingvariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
