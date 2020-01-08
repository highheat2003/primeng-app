import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern03Component } from './pattern03.component';

describe('Pattern03Component', () => {
  let component: Pattern03Component;
  let fixture: ComponentFixture<Pattern03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pattern03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
