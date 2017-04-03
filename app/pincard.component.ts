import { Component ,Input,Output,EventEmitter} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'pin-card',
  templateUrl:'./app/views/pinCard.html'
})

export default class PinCard {

  
 closeResult: string;
  modalRef:NgbModalRef;
 
  public commentsForm = this.fb.group({
      komentar:   ["", Validators.required]
  });


  submitComment(){
    var id=this.pinItem.id;
    var savedItems=localStorage.getItem("newItems");
    var savedItemsJson :Models.Pin[]=JSON.parse(savedItems) || [];
    var item=savedItemsJson.find((elem)=>{
      return elem.id==id
    });

    var comment=this.commentsForm.controls["komentar"].value;
    item.userInfo=comment;
    item.user=localStorage.getItem("loginUser");
    localStorage.setItem("newItems",JSON.stringify(savedItemsJson));
    this.modalRef.close();
    this.onSubmittedComment.emit();
  }


  onDelete(){
     var idOfElementToBeDeleted=this.pinItem.id;
     var oldPinnedItems=localStorage.getItem("pinnedItems");
     var oldPinnedItemsJsonArray :Models.Pin[]=JSON.parse(oldPinnedItems) || [];

     var indexOfElementToDelete=-1;
     oldPinnedItemsJsonArray.forEach((elem,index)=>{
       if(elem.id==this.pinItem.id){
         indexOfElementToDelete=index;
       }
     });

    oldPinnedItemsJsonArray.splice(indexOfElementToDelete,1);
    localStorage.setItem("pinnedItems",JSON.stringify(oldPinnedItemsJsonArray));
      this.onDeletedPin.emit();
  }


   constructor(private modalService:NgbModal,public fb: FormBuilder){

   }


   onComment(addComment){

    this.modalRef=this.modalService.open(addComment);
      this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed`;
          });    
   }

   @Input()
   pinItem: any;

   @Output() 
   onSubmittedComment: EventEmitter<any> = new EventEmitter();

   @Output() 
   onDeletedPin: EventEmitter<any> = new EventEmitter();

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
   onLike(pinItem){
     pinItem.isLike=true;
     var oldLikedItems=localStorage.getItem("likedItems");
     var oldLikedItemsJsonArray=JSON.parse(oldLikedItems) || [];
     oldLikedItemsJsonArray.push(pinItem);
     localStorage.setItem("likedItems",JSON.stringify(oldLikedItemsJsonArray));
     console.log(localStorage);
     
   }
   onLiked(pinItem){
     pinItem.isLike=false;
     var oldLikedItems=localStorage.getItem("likedItems");
     var oldLikedItemsJsonArray=JSON.parse(oldLikedItems) || [];
     function isLiked(element)
     {
       if(pinItem.id == element.id) {return element;}
     }
     var index=oldLikedItemsJsonArray.findIndex(isLiked);
     oldLikedItemsJsonArray.splice(index,1);

     localStorage.setItem("likedItems",JSON.stringify(oldLikedItemsJsonArray));
     console.log(localStorage);
   }

}