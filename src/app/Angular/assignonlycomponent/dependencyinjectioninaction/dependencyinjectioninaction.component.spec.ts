import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyinjectioninactionComponent } from './dependencyinjectioninaction.component';

describe('DependencyinjectioninactionComponent', () => {
  let component: DependencyinjectioninactionComponent;
  let fixture: ComponentFixture<DependencyinjectioninactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyinjectioninactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyinjectioninactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
