import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCollectionComponent } from './carousel-collection.component';

describe('CarouselCollectionComponent', () => {
  let component: CarouselCollectionComponent;
  let fixture: ComponentFixture<CarouselCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
