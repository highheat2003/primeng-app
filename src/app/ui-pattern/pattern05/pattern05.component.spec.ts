import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern05Component } from './pattern05.component';

describe('Pattern05Component', () => {
  let component: Pattern05Component;
  let fixture: ComponentFixture<Pattern05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pattern05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
