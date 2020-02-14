import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipromtsComponent } from './clipromts.component';

describe('ClipromtsComponent', () => {
  let component: ClipromtsComponent;
  let fixture: ComponentFixture<ClipromtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipromtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipromtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
