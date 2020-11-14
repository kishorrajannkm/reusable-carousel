import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSet1Component } from './data-set-1.component';

describe('DataSet1Component', () => {
  let component: DataSet1Component;
  let fixture: ComponentFixture<DataSet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
