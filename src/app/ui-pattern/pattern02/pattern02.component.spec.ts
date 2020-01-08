import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern02Component } from './pattern02.component';

describe('Pattern02Component', () => {
  let component: Pattern02Component;
  let fixture: ComponentFixture<Pattern02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pattern02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
