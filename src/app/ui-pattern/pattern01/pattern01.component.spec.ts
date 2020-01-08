import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern01Component } from './pattern01.component';

describe('Pattern01Component', () => {
  let component: Pattern01Component;
  let fixture: ComponentFixture<Pattern01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pattern01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
