import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselCollectionComponent, CarouselItemElement } from './carousel-collection/carousel-collection.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { DataSet1Component } from './data-set-1/data-set-1.component';
import { DataSet2Component } from './data-set-2/data-set-2.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { ContactsService } from './contacts.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CarouselCollectionComponent,
    CarouselItemComponent,
    DataSet1Component,
    DataSet2Component,
    CarouselItemDirective,
    CarouselItemElement
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
