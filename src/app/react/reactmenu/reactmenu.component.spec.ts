import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactmenuComponent } from './reactmenu.component';

describe('ReactmenuComponent', () => {
  let component: ReactmenuComponent;
  let fixture: ComponentFixture<ReactmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
