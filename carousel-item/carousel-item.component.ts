import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('style.display') itemDisplay;
  setDisplay(value) {
    this.itemDisplay = value;
  }

}
