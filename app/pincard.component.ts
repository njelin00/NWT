import { Component ,Input} from '@angular/core';
@Component({
  selector: 'pin-card',
  templateUrl:'./app/views/pinCard.html'
})

export default class PinCard {

   @Input()
   pinItem: any;

    @Input()
   isProfilePage: boolean;

   onPin(pinItem){
     pinItem.saving=true;
     pinItem.isPinned=true; 
     var oldPinnedItems=localStorage.getItem("pinnedItems");
     var oldPinnedItemsJsonArray=JSON.parse(oldPinnedItems) || [];
     oldPinnedItemsJsonArray.push(pinItem);
     localStorage.setItem("pinnedItems",JSON.stringify(oldPinnedItemsJsonArray));
     console.log(localStorage);
     
   }

}