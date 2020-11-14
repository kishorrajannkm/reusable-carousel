import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { CarouselItemDirective } from '../carousel-item.directive';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel-collection.component.html',
  styleUrls: ['./carousel-collection.component.css']
})
export class CarouselCollectionComponent implements OnInit, AfterViewInit {
  firstIndex = 0;
  lastIndex = 0;
  viewCount = 4;

  ngOnInit() {
    this.lastIndex = this.viewCount - this.firstIndex;
  }

  @ContentChildren(CarouselItemComponent) carouselItems;

  ngAfterViewInit() {
    this.carouselItems.forEach((item: CarouselItemComponent, currentIndex) => {
      if (currentIndex >= this.lastIndex) {
        item.setDisplay('none');
      }
    });
  }

  next() {
    this.firstIndex = this.lastIndex;
    this.lastIndex = this.lastIndex + this.viewCount;
    if (this.carouselItems.length < this.lastIndex) {
      this.lastIndex = this.carouselItems.length;
      this.firstIndex = this.lastIndex - this.viewCount;
    }
    this.carouselItems.forEach((item: CarouselItemComponent, currentIndex) => {
      if (currentIndex < this.firstIndex || currentIndex >= this.lastIndex) {
        item.setDisplay('none');
      } else {
        item.setDisplay('block');
      }
    });
  }

  previous() {
    this.lastIndex = this.firstIndex;
    this.firstIndex = this.lastIndex - this.viewCount;
    if (this.firstIndex < 0) {
      this.firstIndex = 0;
      this.lastIndex = this.firstIndex + this.viewCount;
    }
    this.carouselItems.forEach((item: CarouselItemComponent, currentIndex) => {
      if (currentIndex < this.firstIndex || currentIndex >= this.lastIndex) {
        item.setDisplay('none');
      } else {
        item.setDisplay('block');
      }
    });
  }

  // @ContentChildren(CarouselItemDirective) items : QueryList<CarouselItemDirective>;
  // @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
  // @ViewChild('carousel') private carousel : ElementRef;
  // @Input() timing = '250ms ease-in';
  // @Input() showControls = true;
  // private player : AnimationPlayer;
  // private itemWidth : number;
  // private currentSlide = 0;
  // carouselWrapperStyle = {}

  // next() {
  //   if( this.currentSlide + 1 === this.items.length ) return;
  //   this.currentSlide = (this.currentSlide + 1) % this.items.length;
  //   console.log(this.currentSlide);
  //   const offset = this.currentSlide * this.itemWidth;
  //   const myAnimation : AnimationFactory = this.buildAnimation(offset);
  //   this.player = myAnimation.create(this.carousel.nativeElement);
  //   this.player.play();
  // }

  // private buildAnimation( offset ) {
  //   return this.builder.build([
  //     animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
  //   ]);
  // }

  // prev() {
  //   if( this.currentSlide === 0 ) return;

  //   this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
  //   console.log(this.currentSlide);
  //   const offset = this.currentSlide * this.itemWidth;

  //   const myAnimation : AnimationFactory = this.buildAnimation(offset);
  //   this.player = myAnimation.create(this.carousel.nativeElement);
  //   this.player.play();
  // }

  // constructor( private builder : AnimationBuilder ) {
  // }

  // ngAfterViewInit() {
  //   // For some reason only here I need to add setTimeout, in my local env it's working without this.
  //   setTimeout(() => {
  //     this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
  //     this.carouselWrapperStyle = {
  //       width: `${this.itemWidth}px`
  //     }
  //   });
    
  // }
  // // carouselItems: any;
  // // @Input() dataInputs;
  // // @Input() viewCount;
  // // firstIndex = 0;
  // // lastIndex = 0;
  // // carouselCollection: any;
  // // constructor() { }

  // // ngOnInit() {
  // //   this.lastIndex = this.viewCount - this.firstIndex;
  // //   this.loadCards(this.firstIndex, this.lastIndex, this.viewCount);
  // //   console.log(this.carouselCollection);
  // // }

  // // ngAfterViewChecked() {
    
  // // }

  // // loadCards(firstIndex, lastIndex, viewCount) {
  // //   this.carouselItems = this.dataInputs.slice(firstIndex, lastIndex);
  // // }



}

