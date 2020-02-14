import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesmoretypesComponent } from './templatesmoretypes.component';

describe('TemplatesmoretypesComponent', () => {
  let component: TemplatesmoretypesComponent;
  let fixture: ComponentFixture<TemplatesmoretypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesmoretypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesmoretypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
