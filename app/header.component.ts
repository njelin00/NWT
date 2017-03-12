import { Component ,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'my-header',
  templateUrl:'./app/views/header.html'
  
})

export default class Header {

searchValue:string;
 @Output()
 filteringPins=new EventEmitter();

 handleSearchInputNewValue(value)
 {debugger;
   this.filteringPins.emit(value)
 }

}