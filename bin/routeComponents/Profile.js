"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ProfileComponent = (function () {
    function ProfileComponent(modalService, fb) {
        this.modalService = modalService;
        this.fb = fb;
        this.loginForm = this.fb.group({
            korisnickoime: ["", forms_1.Validators.required],
            lozinka: ["", forms_1.Validators.required]
        });
        this.saveForm = this.fb.group({
            url: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            opis: ["", forms_1.Validators.required],
        });
        this.pinItems = [];
        this.getFromStorage();
        this.setUsername();
    }
    ProfileComponent.prototype.setUsername = function () {
        this.loginUsername = localStorage.getItem("loginUser") || 'You are not logged in';
    };
    ProfileComponent.prototype.getFromStorage = function () {
        var oldPinnedItems = localStorage.getItem("pinnedItems");
        var oldPinnedItemsJsonArray = JSON.parse(oldPinnedItems) || [];
        this.pinItems = oldPinnedItemsJsonArray;
        var oldLikedItems = localStorage.getItem("likedItems");
        var oldLikedItemsJsonArray = JSON.parse(oldLikedItems) || [];
        this.pinItems.forEach(function (pinItem) {
            oldLikedItemsJsonArray.forEach(function (oldLikeItem) {
                if (pinItem.id == oldLikeItem.id) {
                    pinItem.isLike = true;
                }
            });
        });
    };
    ProfileComponent.prototype.refreshPins = function () {
        this.getFromStorage();
    };
    ProfileComponent.prototype.onFilterPins = function ($event) {
        this.searchValueToSendToHome = $event;
    };
    ProfileComponent.prototype.login = function (e, isValid) {
        var korisnickoimeInput = this.loginForm.controls["korisnickoime"].value;
        var lozinkaInput = this.loginForm.controls["lozinka"].value;
        if (korisnickoimeInput == null || lozinkaInput == null ||
            korisnickoimeInput == "" || lozinkaInput == "") {
            alert("Niste unijeli sve podatke");
            return;
        }
        localStorage.setItem("loginUser", korisnickoimeInput);
        this.setUsername();
        this.modalRef.close();
    };
    ProfileComponent.prototype.savePin = function (e, isValid) {
        var nameInput = this.saveForm.controls["name"].value;
        var urlInput = this.saveForm.controls["url"].value;
        var opisInput = this.saveForm.controls["opis"].value;
        if (nameInput == null || urlInput == null || opisInput == null ||
            nameInput == "" || urlInput == "" || opisInput == "") {
            alert("Niste unijeli sve podatke");
            return;
        }
        var oldItems = localStorage.getItem("newItems");
        var oldSavedItemsJsonArray = JSON.parse(oldItems) || [];
        var numOfElementsInStorage = oldSavedItemsJsonArray.length;
        var nextId = 4 + numOfElementsInStorage + 1;
        var newItem = {
            id: nextId,
            name: nameInput,
            imageUrl: urlInput,
            text: opisInput,
        };
        var oldItems = localStorage.getItem("newItems");
        var oldSavedItemsJsonArray = JSON.parse(oldItems) || [];
        oldSavedItemsJsonArray.push(newItem);
        var newItems = oldSavedItemsJsonArray;
        localStorage.setItem("newItems", JSON.stringify(newItems));
        this.modalRef.close();
    };
    ProfileComponent.prototype.open = function (loginModal) {
        var _this = this;
        this.modalRef = this.modalService.open(loginModal);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed";
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: "profile",
        templateUrl: './App/views/profile.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, forms_1.FormBuilder])
], ProfileComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileComponent;
//# sourceMappingURL=Profile.js.map