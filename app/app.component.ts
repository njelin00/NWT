import { Component } from '@angular/core';
import  PinCard  from './pincard.component';

@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>
    <div class="container">
        <div class="card-group">
            <div *ngFor="let item of pinItems" class="card">
                <pin-card [pinItem]="item"></pin-card>
            </div>
        </div>
    </div>
 `
})
export class AppComponent { 

  pinItems=[];
  constructor(){

    this.pinItems=[
      {
        name:"Pin1",
        
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
      },
      {
        name:"Pin3",
        
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
       },
      {
        name:"Pin4",
        
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
      },
      {
        name:"Pin2",
        
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
      }]
  }
}