import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialscdkvirtualscrollingComponent } from './materialscdkvirtualscrolling.component';

describe('MaterialscdkvirtualscrollingComponent', () => {
  let component: MaterialscdkvirtualscrollingComponent;
  let fixture: ComponentFixture<MaterialscdkvirtualscrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialscdkvirtualscrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialscdkvirtualscrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
