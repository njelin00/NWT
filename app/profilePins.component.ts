import { Component ,Input} from '@angular/core';
@Component({
  selector: 'pin-card-2',
  templateUrl:'./app/views/profilePins.html'
})

export default class PinCard {

   @Input()
   pinItem: any;

}