import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualdomComponent } from './virtualdom.component';

describe('VirtualdomComponent', () => {
  let component: VirtualdomComponent;
  let fixture: ComponentFixture<VirtualdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
