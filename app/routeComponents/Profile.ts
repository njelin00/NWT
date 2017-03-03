import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import  ProfilePins  from './../profilePins.component';

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
     this.pinItems=[
      {
        name:"Food",
        imageUrl:'https://s-media-cache-ak0.pinimg.com/564x/2e/6b/e3/2e6be3475bfcbdda7f913fc4ccec01f1.jpg',
        text:"Browned Butter Honey Garlic Salmon is a great way to change up any salmon dinner! Only 3 main ingredients in under 15 minutes! ORIGINAL…",
        min:"2",
        user:"CafeDelites",
        userInfo:"Browned Butter Honey Garlic Salmon! So crispy and juicy."
      }
     ]
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

open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}