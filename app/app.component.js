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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.pinItems = [];
        this.pinItems = [
            {
                name: "Pin1",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
            },
            {
                name: "Pin3",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
            },
            {
                name: "Pin4",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
            },
            {
                name: "Pin2",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/4d/4c/df/4d4cdfed1847a9c1cc95a32cf2f3cf06.jpg'
            }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <my-header></my-header>\n    <div class=\"container\">\n        <div class=\"card-group\">\n            <div *ngFor=\"let item of pinItems\" class=\"card\">\n                <pin-card [pinItem]=\"item\"></pin-card>\n            </div>\n        </div>\n    </div>\n "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map