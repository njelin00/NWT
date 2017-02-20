"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var pincard_component_1 = require("./pincard.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var Home_1 = require("./routeComponents/Home");
var PageNotFound_1 = require("./routeComponents/PageNotFound");
var Profile_1 = require("./routeComponents/Profile");
var forms_1 = require("@angular/forms");
//import Student from './components/Student';
//import StudentService from './services/StudentService';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            router_1.RouterModule.forRoot([
                { path: '', component: Home_1.default },
                { path: 'home', component: Home_1.default },
                { path: 'profile', component: Profile_1.default },
                { path: '**', component: PageNotFound_1.default } /*Sve ostale rute koriste PageNotFound komponentu*/
            ])
        ],
        declarations: [app_component_1.AppComponent, pincard_component_1.default, header_component_1.default, Home_1.default, PageNotFound_1.default, footer_component_1.default, Profile_1.default],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map