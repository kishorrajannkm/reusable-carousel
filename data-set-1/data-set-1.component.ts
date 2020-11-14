import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-set-1',
  templateUrl: './data-set-1.component.html',
  styleUrls: ['./data-set-1.component.css']
})
export class DataSet1Component implements OnInit {
  items= [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit() {
  }

}
