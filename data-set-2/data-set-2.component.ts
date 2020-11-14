import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-set-2',
  templateUrl: './data-set-2.component.html',
  styleUrls: ['./data-set-2.component.css']
})
export class DataSet2Component implements OnInit {
  carouselData = [
    {
      id: 1,
      value: 'ONE'
    },
    {
      id: 2,
      value: 'TWO'
    },
    {
      id: 3,
      value: 'THREE'
    },
    {
      id: 4,
      value: 'FOUR'
    },
    {
      id: 5,
      value: 'FIVE'
    },
    {
      id: 6,
      value: 'SIX'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
