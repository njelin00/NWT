import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: "profile", 
    templateUrl:'./App/views/profile.html'
})
export default class ProfileComponent {

 closeResult: string;


 
  public loginForm = this.fb.group({
    korisnickoime: ["", Validators.required],
    lozinka: ["", Validators.required]
  });

  public saveForm = this.fb.group({
    url: ["", Validators.required],
      name: ["", Validators.required],
      opis: ["", Validators.required],
      komentar: ["", Validators.required],
  });

pinItems=[];
constructor(private modalService: NgbModal,public fb: FormBuilder)
{
    var oldPinnedItems=localStorage.getItem("pinnedItems");
     var oldPinnedItemsJsonArray=JSON.parse(oldPinnedItems) || [];
     this.pinItems=oldPinnedItemsJsonArray;
}
searchValueToSendToHome:string;


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
    var komentarInput=this.saveForm.controls["komentar"].value;
 }

open(loginModal) {
    this.modalService.open(loginModal).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }


}