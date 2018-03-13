import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLink1Component } from './dropdown-link1.component';

describe('DropdownLink1Component', () => {
  let component: DropdownLink1Component;
  let fixture: ComponentFixture<DropdownLink1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLink1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
