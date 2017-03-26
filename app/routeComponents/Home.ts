import { Component, Input } from '@angular/core';
import  PinCard  from './../pincard.component';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: "home", 
    templateUrl:'./app/views/home.html'
})
export default class HomeRouteComponent {

refreshPins(){
    this.pinItems=this.first4HardcodedPins;
    this.addFromLocalStorage();
}

searchValueToSendToHome:string;

 
closeResult: string;
modalRef:NgbModalRef;


onFilterPins($event){
  this.searchValueToSendToHome=$event;
}
   
   
onComment(addComment){
       
}

addFromLocalStorage(){
     var oldItems=localStorage.getItem("newItems");
     var oldSavedItemsJsonArray=JSON.parse(oldItems) || [];
     oldSavedItemsJsonArray.forEach((savedItem)=>{
     this.pinItems.push(savedItem);
    })
}

pinItems:Models.Pin[]=[];
first4HardcodedPins:any=[];

constructor(private modalService: NgbModal){


    this.pinItems=[
      {
        name:"Food",
        id:1,
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/2e/6b/e3/2e6be3475bfcbdda7f913fc4ccec01f1.jpg',
        text:"Browned Butter Honey Garlic Salmon is a great way to change up any salmon dinner! Only 3 main ingredients in under 15 minutes! ORIGINAL…",
        min:"2",
        user:"CafeDelites",
        userInfo:"Browned Butter Honey Garlic Salmon! So crispy and juicy."
      
      },
      {
        name:"Funny",
        id:2,
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/70/57/2c/70572c657064dcb1983ee97475362322.jpg',
        text:"Everyone is afraid of spiders.",
        min:"2",
        user:"Gloria Sousa",
        userInfo:"Funny Pictures of the Day"  
       },
      {
        name:"Animals",
        id:3,
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/16/de/6c/16de6c0f479acbec8268640871594f03.jpg',
        text:"Cute hedgehog taking a photoshoot lika a pro... ",
        min:"2",
        user:"Aleena",
        userInfo:"The Happiest Hedgehog cute animals adorable animal pets baby animals hedgehog funny animals"
      },
      {
        name:"Photography",
        id:4,
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/8f/c3/15/8fc3155e518ab369cf1a1a2edbf3cd2c.jpg',
        text:"A Focus on the most beautiful eyes in the world, a journey into the deepest looks, the more intense through this selection.",
        min:"2",
        user:"Acrylic Art Marian de Jong ",
        userInfo:"Portet"
      }];


      this.first4HardcodedPins=JSON.parse(JSON.stringify(this.pinItems));
      
      this.addFromLocalStorage();
     
      var oldPinnedItems=localStorage.getItem("pinnedItems");
      var oldPinnedItemsJsonArray=JSON.parse(oldPinnedItems) || [];
      this.pinItems.forEach((pinItem)=>{
            oldPinnedItemsJsonArray.forEach((oldPinItem)=>{
                  if(pinItem.id==oldPinItem.id)
                  {
                      pinItem.isPinned=true;
                  }
            })
      })
  }
}