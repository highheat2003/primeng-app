import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDataRowComponent } from './book-data-row.component';

describe('BookDataRowComponent', () => {
  let component: BookDataRowComponent;
  let fixture: ComponentFixture<BookDataRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDataRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDataRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
