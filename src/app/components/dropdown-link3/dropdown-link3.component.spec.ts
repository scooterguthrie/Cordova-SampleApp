import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLink3Component } from './dropdown-link3.component';

describe('DropdownLink3Component', () => {
  let component: DropdownLink3Component;
  let fixture: ComponentFixture<DropdownLink3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLink3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLink3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
