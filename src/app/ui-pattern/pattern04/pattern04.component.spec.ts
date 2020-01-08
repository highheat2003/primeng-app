import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern04Component } from './pattern04.component';

describe('Pattern04Component', () => {
  let component: Pattern04Component;
  let fixture: ComponentFixture<Pattern04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pattern04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
