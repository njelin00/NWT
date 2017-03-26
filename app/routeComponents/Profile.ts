import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: "profile", 
    templateUrl:'./App/views/profile.html'
})

export default class ProfileComponent {

  closeResult: string;
  modalRef: NgbModalRef;

 
  public loginForm = this.fb.group({
    korisnickoime: ["", Validators.required],
    lozinka: ["", Validators.required]
  });

  public saveForm = this.fb.group({
    url: ["", Validators.required],
    name: ["", Validators.required],
    opis: ["", Validators.required],
  });

  pinItems=[];

  constructor(private modalService: NgbModal,public fb: FormBuilder)
  {
      this.getFromStorage();
  }

  getFromStorage(){
      var oldPinnedItems=localStorage.getItem("pinnedItems");
      var oldPinnedItemsJsonArray=JSON.parse(oldPinnedItems) || [];
      this.pinItems=oldPinnedItemsJsonArray;
      var oldLikedItems=localStorage.getItem("likedItems");
      var oldLikedItemsJsonArray=JSON.parse(oldLikedItems) || [];
      this.pinItems.forEach((pinItem)=>{
            oldLikedItemsJsonArray.forEach((oldLikeItem)=>{
                  if(pinItem.id==oldLikeItem.id)
                  {
                      pinItem.isLike=true;
                      
                      
                  }
                  
            })
      })
  }

  searchValueToSendToHome:string;

  refreshPins(){
    this.getFromStorage();
  }

  onFilterPins($event){
   this.searchValueToSendToHome=$event;
  
  }

  login(e,isValid){ 
      var korisnickoimeInput=this.loginForm.controls["korisnickoime"].value;
      var lozinkaInput=this.loginForm.controls["lozinka"].value;
  }


 savePin(e,isValid){ 
    var nameInput=this.saveForm.controls["name"].value;
    var urlInput=this.saveForm.controls["url"].value;
    var opisInput=this.saveForm.controls["opis"].value;
   

  if(nameInput==null || urlInput==null || opisInput==null ||
  nameInput=="" || urlInput=="" || opisInput==""){
    alert("Niste unijeli sve podatke");
    return;
  }

    var oldItems=localStorage.getItem("newItems");
    var oldSavedItemsJsonArray=JSON.parse(oldItems) || [];
    var numOfElementsInStorage=oldSavedItemsJsonArray.length;
    var nextId=4+numOfElementsInStorage+1;
    var newItem:Models.Pin={
     id:nextId,
     name:nameInput,
     imageUrl:urlInput,
     text:opisInput,
  
  }
     var oldItems=localStorage.getItem("newItems");
     var oldSavedItemsJsonArray=JSON.parse(oldItems) || [];
     oldSavedItemsJsonArray.push(newItem);
     var newItems=oldSavedItemsJsonArray;
     localStorage.setItem("newItems",JSON.stringify(newItems));
        this.modalRef.close();
  }

open(loginModal) {
  this.modalRef=this.modalService.open(loginModal);
  this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}