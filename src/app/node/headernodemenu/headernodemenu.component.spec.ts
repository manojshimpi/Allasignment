import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernodemenuComponent } from './headernodemenu.component';

describe('HeadernodemenuComponent', () => {
  let component: HeadernodemenuComponent;
  let fixture: ComponentFixture<HeadernodemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernodemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernodemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
