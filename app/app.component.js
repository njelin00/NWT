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
                name: "Food",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/2e/6b/e3/2e6be3475bfcbdda7f913fc4ccec01f1.jpg',
                text: "Browned Butter Honey Garlic Salmon is a great way to change up any salmon dinner! Only 3 main ingredients in under 15 minutes! ORIGINAL…",
                min: "2",
                user: "CafeDelites",
                userInfo: "Browned Butter Honey Garlic Salmon! So crispy and juicy."
            },
            {
                name: "Funny",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/70/57/2c/70572c657064dcb1983ee97475362322.jpg',
                text: "Everyone is afraid of spiders.",
                min: "2",
                user: "Gloria Sousa",
                userInfo: "Funny Pictures of the Day"
            },
            {
                name: "Animals",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/16/de/6c/16de6c0f479acbec8268640871594f03.jpg',
                text: "Cute hedgehog taking a photoshoot lika a pro... ",
                min: "2",
                user: "Aleena",
                userInfo: "The Happiest Hedgehog cute animals adorable animal pets baby animals hedgehog funny animals"
            },
            {
                name: "Photography",
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/8f/c3/15/8fc3155e518ab369cf1a1a2edbf3cd2c.jpg',
                text: "A Focus on the most beautiful eyes in the world, a journey into the deepest looks, the more intense through this selection.",
                min: "2",
                user: "Acrylic Art Marian de Jong ",
                userInfo: "Portet"
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