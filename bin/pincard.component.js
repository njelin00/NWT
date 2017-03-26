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
var PinCard = (function () {
    function PinCard(modalService, fb) {
        this.modalService = modalService;
        this.fb = fb;
        this.commentsForm = this.fb.group({
            komentar: ["", forms_1.Validators.required]
        });
        this.onSubmittedComment = new core_1.EventEmitter();
        this.onDeletedPin = new core_1.EventEmitter();
    }
    PinCard.prototype.submitComment = function () {
        var id = this.pinItem.id;
        var savedItems = localStorage.getItem("newItems");
        var savedItemsJson = JSON.parse(savedItems) || [];
        var item = savedItemsJson.find(function (elem) {
            return elem.id == id;
        });
        var comment = this.commentsForm.controls["komentar"].value;
        item.userInfo = comment;
        localStorage.setItem("newItems", JSON.stringify(savedItemsJson));
        this.modalRef.close();
        this.onSubmittedComment.emit();
    };
    PinCard.prototype.onDelete = function () {
        var _this = this;
        var idOfElementToBeDeleted = this.pinItem.id;
        var oldPinnedItems = localStorage.getItem("pinnedItems");
        var oldPinnedItemsJsonArray = JSON.parse(oldPinnedItems) || [];
        var indexOfElementToDelete = -1;
        oldPinnedItemsJsonArray.forEach(function (elem, index) {
            if (elem.id == _this.pinItem.id) {
                indexOfElementToDelete = index;
            }
        });
        oldPinnedItemsJsonArray.splice(indexOfElementToDelete, 1);
        localStorage.setItem("pinnedItems", JSON.stringify(oldPinnedItemsJsonArray));
        this.onDeletedPin.emit();
    };
    PinCard.prototype.onComment = function (addComment) {
        var _this = this;
        this.modalRef = this.modalService.open(addComment);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed";
        });
    };
    PinCard.prototype.onPin = function (pinItem) {
        pinItem.saving = true;
        pinItem.isPinned = true;
        var oldPinnedItems = localStorage.getItem("pinnedItems");
        var oldPinnedItemsJsonArray = JSON.parse(oldPinnedItems) || [];
        oldPinnedItemsJsonArray.push(pinItem);
        localStorage.setItem("pinnedItems", JSON.stringify(oldPinnedItemsJsonArray));
        console.log(localStorage);
    };
    PinCard.prototype.onLike = function (pinItem) {
        pinItem.isLike = true;
        var oldLikedItems = localStorage.getItem("likedItems");
        var oldLikedItemsJsonArray = JSON.parse(oldLikedItems) || [];
        oldLikedItemsJsonArray.push(pinItem);
        localStorage.setItem("likedItems", JSON.stringify(oldLikedItemsJsonArray));
        console.log(localStorage);
    };
    PinCard.prototype.onLiked = function (pinItem) {
        pinItem.isLike = false;
        var oldLikedItems = localStorage.getItem("likedItems");
        var oldLikedItemsJsonArray = JSON.parse(oldLikedItems) || [];
        function isLiked(element) {
            if (pinItem.id == element.id) {
                return element;
            }
        }
        var index = oldLikedItemsJsonArray.findIndex(isLiked);
        oldLikedItemsJsonArray.splice(index, 1);
        localStorage.setItem("likedItems", JSON.stringify(oldLikedItemsJsonArray));
        console.log(localStorage);
    };
    return PinCard;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PinCard.prototype, "pinItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PinCard.prototype, "onSubmittedComment", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PinCard.prototype, "onDeletedPin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PinCard.prototype, "isProfilePage", void 0);
PinCard = __decorate([
    core_1.Component({
        selector: 'pin-card',
        templateUrl: './app/views/pinCard.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, forms_1.FormBuilder])
], PinCard);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PinCard;
//# sourceMappingURL=pincard.component.js.map