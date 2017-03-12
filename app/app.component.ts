import { Component } from '@angular/core';
import  PinCard  from './pincard.component';

@Component({
  selector: 'my-app',
  template: `
 
 <div>
    <router-outlet ></router-outlet>
    <my-footer></my-footer>
  </div>
 `
})
export class AppComponent {



}