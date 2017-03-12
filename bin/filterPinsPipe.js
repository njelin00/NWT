"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterPins = (function () {
    function FilterPins() {
    }
    FilterPins.prototype.transform = function (items, args) {
        // filter items array, items which match and retur
        //n true will be kept, false will be filtered 
        if (args == undefined)
            return items;
        return items.filter(function (item) { return item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1; });
    };
    return FilterPins;
}());
FilterPins = __decorate([
    core_1.Pipe({
        name: 'filterPins',
        pure: false
    }),
    core_1.Injectable()
], FilterPins);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilterPins;
//# sourceMappingURL=filterPinsPipe.js.map