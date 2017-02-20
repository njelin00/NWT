import { Component } from '@angular/core';
import  PinCard  from './pincard.component';

@Component({
  selector: 'my-app',
  template: `
 
 <div>
    <my-header></my-header>
    <router-outlet></router-outlet>
    <my-footer></my-footer>
  </div>
 `
})
export class AppComponent { 
}