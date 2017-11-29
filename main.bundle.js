webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

//At the moment of writing this comment, the removal of DOM elements causes the the transition to not work properly. 11-26
var animation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* trigger */])('cardAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* state */])('small', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* style */])({
        transform: 'scale(1)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* state */])('large', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* style */])({
        transform: 'scale(1)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* transition */])('small <=> large', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* animate */])('1000ms ease-in')),
]);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cards {\r\n    display:inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  \r\n  <div id=\"header\">\r\n    <h1>Welcome to {{ title }}!</h1>       \r\n  </div>\r\n  \r\n  <hr>\r\n\r\n  <div id=\"taskbar\">\r\n    <button *ngIf=\"spells == null\"(click)=getSpells()>All Spells</button>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <!-- Considering changing ngIf to hidden properties to keep DOM elements -->\r\n\r\n  <div *ngIf=\"spells && show; then all else home\"></div>\r\n\r\n  <div class=\"all\" *ngIf=\"show === true; else select\">\r\n    <div class=\"cards\" *ngFor=\"let spell of spells\" [@cardAnimation]='spell.state' (click)=\"zoomCard(spell)\">\r\n      <img src=\"assets/dnd_spells/dnd_cards/{{spell.name}}.png\" alt=\"{{spell.name}}/WiP\" height=\"422\" width=\"422\">\r\n     </div>            \r\n  </div>\r\n\r\n  <ng-template #select>\r\n    <img *ngIf=\"selected != {}; else all\" [@cardAnimation]='selected.state' (click)=\"zoomCard(selected)\" src=\"assets/dnd_spells/dnd_cards/{{selected.name}}.png\" alt=\"{{selected.name}}/WiP\" max-height=\"100%\" max-width=\"100%\">\r\n  </ng-template>\r\n\r\n  <ng-template #home>\r\n        <h2 *ngIf = \"selected == {}\">Please Specify A Query</h2>\r\n  </ng-template>\r\n\r\n  <ng-template #credit>\r\n    <h3>\r\n      <a href=\"https://www.reddit.com/r/DnD/comments/6fga8k/5eocart_spell_cards_for_400_spells_from_5th/\">nBeebz</a> designed and created the following spell cards\r\n    </h3>\r\n    <p> The cards (as the icons and images used in them) are licensed under the Creative Commons License (CC BY-NC-SA 4.0). You are\r\n      free to modify and re-purpose them for non-commercial uses as long as you give appropriate credit, and release those derivative\r\n      works under the same license.\r\n    </p>\r\n  </ng-template>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dn_data_service__ = __webpack_require__("../../../../../src/app/dn-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation__ = __webpack_require__("../../../../../src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        // tslint:disable-next-line:member-ordering
        this.title = 'the Library';
        this.state = '';
        this.show = true;
    }
    AppComponent.prototype.getSpells = function () {
        var _this = this;
        this.show = true;
        this.selected = {};
        this.dataService.getSpellData().subscribe(function (data) {
            _this.spells = data;
            _this.spells = _this.spells.map(function (spell) {
                spell.state = 'small';
                spell.show = true;
                return spell;
            });
        });
    };
    AppComponent.prototype.zoomCard = function (index) {
        index.state = (index.state === 'small' ? 'large' : 'small');
        if (index.state === 'large') 
        // tslint:disable-next-line:one-line
        {
            this.selected = index;
            this.show = false;
        }
        else {
            this.show = true;
            this.selected = {};
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__dn_data_service__["a" /* DnDataService */]],
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__animation__["a" /* animation */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__dn_data_service__["a" /* DnDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import HttpClientModule


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dn-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DnDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DnDataService = (function () {
    function DnDataService(http) {
        this.http = http;
    }
    DnDataService.prototype.getSpellData = function () {
        return this.http.get('assets/dnd_spells/spells.json')
            .map(function (res) { return res.json().jsonSpellData; });
    };
    DnDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DnDataService);
    return DnDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map