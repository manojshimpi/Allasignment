import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialscdkdragdropComponent } from './materialscdkdragdrop.component';

describe('MaterialscdkdragdropComponent', () => {
  let component: MaterialscdkdragdropComponent;
  let fixture: ComponentFixture<MaterialscdkdragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialscdkdragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialscdkdragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
