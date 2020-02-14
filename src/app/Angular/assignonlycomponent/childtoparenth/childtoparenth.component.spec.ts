import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoparenthComponent } from './childtoparenth.component';

describe('ChildtoparenthComponent', () => {
  let component: ChildtoparenthComponent;
  let fixture: ComponentFixture<ChildtoparenthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtoparenthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtoparenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
