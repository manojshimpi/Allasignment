import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesmortypesComponent } from './servicesmortypes.component';

describe('ServicesmortypesComponent', () => {
  let component: ServicesmortypesComponent;
  let fixture: ComponentFixture<ServicesmortypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesmortypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesmortypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
