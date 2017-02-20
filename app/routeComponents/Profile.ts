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
    url: ["", Validators.required],
    name: ["", Validators.required]
  });

constructor(private modalService: NgbModal,public fb: FormBuilder)
{
     
}
 savePin(e,isValid){

    
    var nameInput=this.loginForm.controls["name"].value;
    var urlInput=this.loginForm.controls["url"].value;
 }
open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}