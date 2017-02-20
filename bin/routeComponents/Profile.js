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
            url: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required]
        });
    }
    ProfileComponent.prototype.savePin = function (e, isValid) {
        var nameInput = this.loginForm.controls["name"].value;
        var urlInput = this.loginForm.controls["url"].value;
    };
    ProfileComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
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