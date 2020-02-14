import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatethecomponenttreewithdiComponent } from './navigatethecomponenttreewithdi.component';

describe('NavigatethecomponenttreewithdiComponent', () => {
  let component: NavigatethecomponenttreewithdiComponent;
  let fixture: ComponentFixture<NavigatethecomponenttreewithdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatethecomponenttreewithdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatethecomponenttreewithdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
