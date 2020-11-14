import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSet2Component } from './data-set-2.component';

describe('DataSet2Component', () => {
  let component: DataSet2Component;
  let fixture: ComponentFixture<DataSet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
