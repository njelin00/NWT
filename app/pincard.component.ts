import { Component ,Input} from '@angular/core';
@Component({
  selector: 'pin-card',
  templateUrl:'./app/views/pinCard.html'
})

export default class PinCard {

   @Input()
   pinItem: any;

}