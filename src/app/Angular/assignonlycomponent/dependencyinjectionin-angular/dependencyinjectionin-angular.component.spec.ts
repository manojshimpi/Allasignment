import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyinjectioninAngularComponent } from './dependencyinjectionin-angular.component';

describe('DependencyinjectioninAngularComponent', () => {
  let component: DependencyinjectioninAngularComponent;
  let fixture: ComponentFixture<DependencyinjectioninAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyinjectioninAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyinjectioninAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
