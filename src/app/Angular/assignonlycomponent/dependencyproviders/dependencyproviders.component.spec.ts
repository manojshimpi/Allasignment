import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyprovidersComponent } from './dependencyproviders.component';

describe('DependencyprovidersComponent', () => {
  let component: DependencyprovidersComponent;
  let fixture: ComponentFixture<DependencyprovidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyprovidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
