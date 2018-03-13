import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLink2Component } from './dropdown-link2.component';

describe('DropdownLink2Component', () => {
  let component: DropdownLink2Component;
  let fixture: ComponentFixture<DropdownLink2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLink2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
