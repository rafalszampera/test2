webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin-dashboard/admin-dashboard.module": [
		"../../../../../src/app/modules/admin-dashboard/admin-dashboard.module.ts",
		"admin-dashboard.module",
		"common"
	],
	"./modules/logbook/logbook.module": [
		"../../../../../src/app/modules/logbook/logbook.module.ts",
		"logbook.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_app_component__ = __webpack_require__("../../../../../src/app/shared/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/shared/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_login_login_component__ = __webpack_require__("../../../../../src/app/shared/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_app_core_services_loader_service__ = __webpack_require__("../../../../../src/app/modules/app-core/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_launch_launch_component__ = __webpack_require__("../../../../../src/app/shared/launch/launch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__shared_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_layouts_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_launch_launch_component__["a" /* LaunchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["u" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__["a" /* ServiceWorkerModule */].register('/test2/ngsw-worker.js') : [],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__modules_app_core_services_loader_service__["a" /* LoaderService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__shared_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_login_component__ = __webpack_require__("../../../../../src/app/shared/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/shared/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_launch_launch_component__ = __webpack_require__("../../../../../src/app/shared/launch/launch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Layouts


var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'logbook',
                loadChildren: './modules/logbook/logbook.module#LogbookModule'
            }
        ]
    },
    {
        path: 'launch',
        component: __WEBPACK_IMPORTED_MODULE_4__shared_launch_launch_component__["a" /* LaunchComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                loadChildren: './modules/admin-dashboard/admin-dashboard.module#AdminDashboardModule',
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/app-core/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    <span *ngIf=\"showLoader\" class=\"loading\">\r\n\t\t<div class=\"sk-circle\">\r\n\t\t\t<div class=\"sk-circle1 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle2 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle3 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle4 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle5 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle6 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle7 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle8 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle9 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle10 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle11 sk-child\"></div>\r\n\t\t\t<div class=\"sk-circle12 sk-child\"></div>\r\n\t\t</div>\r\n\t</span>\r\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/shared/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n.loading:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(115, 115, 115, 0.4); }\n.loading .sk-circle {\n    width: 50px;\n    height: 100px;\n    position: relative; }\n.loading .sk-circle .sk-child {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0; }\n.loading .sk-circle .sk-child:before {\n        content: '';\n        display: block;\n        margin: 0 auto;\n        width: 15%;\n        height: 15%;\n        background-color: #004e37;\n        -webkit-box-shadow: 0 0 5px -1px black;\n                box-shadow: 0 0 5px -1px black;\n        border-radius: 100%;\n        -webkit-animation: sk-circleBounceDelay 1200ms infinite ease-in-out both;\n        animation: sk-circleBounceDelay 1200ms infinite ease-in-out both; }\n.loading .sk-circle .sk-child.sk-circle2 {\n        -webkit-transform: rotate(30deg);\n        transform: rotate(30deg); }\n.loading .sk-circle .sk-child.sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.loading .sk-circle .sk-child.sk-circle3 {\n        -webkit-transform: rotate(60deg);\n        transform: rotate(60deg); }\n.loading .sk-circle .sk-child.sk-circle3:before {\n          -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.loading .sk-circle .sk-child.sk-circle4 {\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg); }\n.loading .sk-circle .sk-child.sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.loading .sk-circle .sk-child.sk-circle5 {\n        -webkit-transform: rotate(120deg);\n        transform: rotate(120deg); }\n.loading .sk-circle .sk-child.sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n.loading .sk-circle .sk-child.sk-circle6 {\n        -webkit-transform: rotate(150deg);\n        transform: rotate(150deg); }\n.loading .sk-circle .sk-child.sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n.loading .sk-circle .sk-child.sk-circle7 {\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg); }\n.loading .sk-circle .sk-child.sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n.loading .sk-circle .sk-child.sk-circle8 {\n        -webkit-transform: rotate(210deg);\n        transform: rotate(210deg); }\n.loading .sk-circle .sk-child.sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n.loading .sk-circle .sk-child.sk-circle9 {\n        -webkit-transform: rotate(240deg);\n        transform: rotate(240deg); }\n.loading .sk-circle .sk-child.sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n.loading .sk-circle .sk-child.sk-circle10 {\n        -webkit-transform: rotate(270deg);\n        transform: rotate(270deg); }\n.loading .sk-circle .sk-child.sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n.loading .sk-circle .sk-child.sk-circle11 {\n        -webkit-transform: rotate(300deg);\n        transform: rotate(300deg); }\n.loading .sk-circle .sk-child.sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n.loading .sk-circle .sk-child.sk-circle12 {\n        -webkit-transform: rotate(330deg);\n        transform: rotate(330deg); }\n.loading .sk-circle .sk-child.sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n/* Animation */\n@-webkit-keyframes sk-circleBounceDelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes sk-circleBounceDelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_app_core_services_loader_service__ = __webpack_require__("../../../../../src/app/modules/app-core/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService, router) {
        var _this = this;
        this.loaderService = loaderService;
        this.router = router;
        this.showLoader = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            setTimeout(function (_) { return _this.showLoader = val; });
        });
    };
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* NavigationStart */]) {
            this.showLoader = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* NavigationEnd */]) {
            this.showLoader = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationCancel */]) {
            this.showLoader = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* NavigationError */]) {
            this.showLoader = false;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            // tslint:disable-next-line
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/shared/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__modules_app_core_services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/launch/launch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"launch\">\r\n\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"logo-animation\" viewBox=\"0 0 130 56\">\r\n\t\t<path d=\"m 43.671347,56 c 1.419657,0 2.433697,-0.74363 2.433697,-2.028081 l 0,0 c 0,-1.149246 -0.74363,-1.622465 -2.095684,-1.960479 -1.149246,-0.27041 -1.419656,-0.405616 -1.419656,-0.878835 l 0,0 c 0,-0.338013 0.27041,-0.540821 0.878835,-0.540821 0.540821,0 1.149246,0.27041 1.690067,0.676027 l 0.74363,-1.081644 c -0.676027,-0.540821 -1.487259,-0.811232 -2.433697,-0.811232 -1.352054,0 -2.298492,0.811232 -2.298492,1.960478 l 0,0 c 0,1.284452 0.878835,1.690068 2.163286,2.028082 1.081644,0.27041 1.352054,0.473218 1.352054,0.811232 l 0,0 c 0,0.405616 -0.338013,0.608424 -0.946437,0.608424 -0.74363,0 -1.352055,-0.338013 -1.960479,-0.811232 l -0.878835,1.01404 C 41.643266,55.661986 42.657306,56 43.671347,56 m 3.447738,-5.678627 1.487259,0 0,-1.284452 -1.487259,0 0,1.284452 z m 0.0676,5.611024 1.419657,0 0,-5.070203 -1.419657,0 0,5.070203 z m 2.636506,0 1.419657,0 0,-2.839313 c 0,-0.676027 0.338013,-1.014041 0.878835,-1.014041 0.540822,0 0.878835,0.338014 0.878835,1.014041 l 0,2.839313 1.419657,0 0,-3.24493 c 0,-1.149245 -0.608425,-1.892875 -1.690068,-1.892875 -0.74363,0 -1.149246,0.405616 -1.487259,0.811232 l 0,-0.74363 -1.419657,0 0,5.070203 z m 8.179929,0.0676 c 1.014041,0 1.554862,-0.405616 2.095684,-0.946438 l -0.811232,-0.878835 c -0.338014,0.338014 -0.676028,0.540822 -1.149246,0.540822 -0.811233,0 -1.284452,-0.608425 -1.284452,-1.419657 l 0,0 c 0,-0.74363 0.540822,-1.352054 1.216849,-1.352054 0.540821,0 0.811232,0.202808 1.149246,0.540821 l 0.878835,-0.946437 c -0.473219,-0.540822 -1.081643,-0.878836 -2.028081,-0.878836 -1.554862,0 -2.636506,1.216849 -2.636506,2.636506 l 0,0 c -0.0676,1.554862 1.081644,2.704108 2.568903,2.704108 m 5.137806,0 c 0.946437,0 1.622465,-0.338014 2.095683,-0.946438 l -0.811232,-0.74363 c -0.405616,0.338014 -0.74363,0.540822 -1.216849,0.540822 -0.608424,0 -1.081643,-0.338013 -1.216848,-1.014041 l 3.51534,0 c 0,-0.135205 0,-0.27041 0,-0.405616 0,-1.419657 -0.743629,-2.771711 -2.433697,-2.771711 -1.48726,0 -2.5013,1.216849 -2.5013,2.636506 l 0,0 c -0.0676,1.690067 1.081643,2.704108 2.568903,2.704108 m -1.216849,-3.042122 c 0.135205,-0.676027 0.473219,-1.081643 1.081643,-1.081643 0.608425,0 0.946438,0.405616 1.081643,1.081643 l -2.163286,0 z m 7.368695,2.974519 1.419656,0 0,-6.625065 -1.01404,0 -1.892876,0.540822 0.270411,1.216849 1.149246,-0.270411 0,5.137805 z m 5.137805,0.0676 c 1.48726,0 2.568903,-0.74363 2.568903,-1.960478 l 0,0 c 0,-0.811233 -0.405616,-1.216849 -1.081643,-1.554863 0.540821,-0.338013 0.811232,-0.743629 0.811232,-1.419656 l 0,0 c 0,-1.014041 -0.946438,-1.825273 -2.298492,-1.825273 -1.419657,0 -2.298492,0.811232 -2.298492,1.825273 l 0,0 c 0,0.676027 0.338014,1.149246 0.811233,1.419656 -0.676027,0.338014 -1.081644,0.811233 -1.081644,1.622465 l 0,0 c 0.0676,1.149246 1.149246,1.892876 2.568903,1.892876 m 0,-3.98856 c -0.540821,0 -0.946438,-0.338013 -0.946438,-0.811232 l 0,0 c 0,-0.405616 0.338014,-0.74363 0.946438,-0.74363 0.608425,0 0.946438,0.338014 0.946438,0.74363 l 0,0 c 0,0.473219 -0.338013,0.811232 -0.946438,0.811232 m 0,2.771711 c -0.74363,0 -1.149246,-0.338013 -1.149246,-0.811232 l 0,0 c 0,-0.540822 0.473219,-0.811233 1.149246,-0.811233 0.676027,0 1.149246,0.270411 1.149246,0.811233 l 0,0 c 0,0.473219 -0.405616,0.811232 -1.149246,0.811232 m 5.678627,1.216849 c 1.892876,0 2.906917,-1.487259 2.906917,-3.582943 l 0,0 c 0,-1.284452 -0.338014,-2.028081 -0.811233,-2.5013 -0.473219,-0.473219 -1.01404,-0.74363 -1.892876,-0.74363 -1.487259,0 -2.5013,0.946438 -2.5013,2.298492 l 0,0 c 0,1.352054 0.946438,2.095684 2.366095,2.095684 0.540822,0 1.014041,-0.202808 1.352054,-0.473219 -0.0676,0.878835 -0.540821,1.487259 -1.352054,1.487259 -0.540822,0 -0.946438,-0.202808 -1.419657,-0.540821 l -0.743629,1.081643 c 0.473218,0.608424 1.149246,0.878835 2.095683,0.878835 m 0.270411,-3.515341 c -0.74363,0 -1.149246,-0.405616 -1.149246,-1.01404 l 0,0 c 0,-0.608425 0.405616,-1.014041 1.149246,-1.014041 0.74363,0 1.149246,0.405616 1.149246,1.014041 l 0,0 c 0,0.540821 -0.405616,1.01404 -1.149246,1.01404 m 5.881435,3.515341 c 1.892876,0 2.906917,-1.487259 2.906917,-3.582943 l 0,0 c 0,-1.284452 -0.338014,-2.028081 -0.811233,-2.5013 -0.473219,-0.473219 -1.01404,-0.74363 -1.892875,-0.74363 -1.48726,0 -2.5013,0.946438 -2.5013,2.298492 l 0,0 c 0,1.352054 0.946437,2.095684 2.366094,2.095684 0.540822,0 1.014041,-0.202808 1.352054,-0.473219 -0.0676,0.878835 -0.540821,1.487259 -1.352054,1.487259 -0.540821,0 -0.946438,-0.202808 -1.419657,-0.540821 l -0.743629,1.081643 c 0.473219,0.608424 1.149246,0.878835 2.095683,0.878835 m 0.270411,-3.515341 c -0.743629,0 -1.149246,-0.405616 -1.149246,-1.01404 l 0,0 c 0,-0.608425 0.405617,-1.014041 1.149246,-1.014041 0.74363,0 1.149246,0.405616 1.149246,1.014041 l 0,0 c 0,0.540821 -0.405616,1.01404 -1.149246,1.01404\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path class=\"leav\" d=\"m 63.276131,18.615705 c 0,1.081643 -0.878835,1.960478 -1.960478,1.960478 -1.081644,0 -1.960479,-0.878835 -1.960479,-1.960478 0,-1.081644 0.878835,-1.960479 1.960479,-1.960479 1.081643,0 1.960478,0.878835 1.960478,1.960479\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 71.929277,10.638586 c 0,1.081643 -0.878835,1.960478 -1.960478,1.960478 -1.081644,0 -1.960479,-0.878835 -1.960479,-1.960478 0,-1.0816443 0.878835,-1.9604793 1.960479,-1.9604793 1.081643,0.0676 1.960478,0.946438 1.960478,1.9604793\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 67.399896,4.7571497 c 0,2.636506 -2.298492,4.123765 -2.298492,4.123765 0,0 -2.298492,-1.487259 -2.298492,-4.123765 0,-2.636505 2.298492,-4.123765 2.298492,-4.123765 0,0 2.298492,1.419657 2.298492,4.123765\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 62.194488,10.030161 c 1.892875,1.892876 1.284451,4.529381 1.284451,4.529381 0,0 -2.636505,0.608425 -4.529381,-1.284451 -1.892876,-1.892876 -1.284451,-4.5293813 -1.284451,-4.5293813 0,0 2.636505,-0.540822 4.529381,1.2844513\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 54.555382,13.139886 c 2.298492,1.352054 2.433698,4.056162 2.433698,4.056162 0,0 -2.433698,1.216849 -4.73219,-0.0676 -2.298492,-1.352054 -2.433697,-4.056162 -2.433697,-4.056162 0,0 2.5013,-1.216849 4.732189,0.0676\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 58.070723,21.25221 c 2.5013,0.878835 3.109724,3.582943 3.109724,3.582943 0,0 -2.163286,1.622465 -4.664586,0.74363 -2.5013,-0.878835 -3.109725,-3.582943 -3.109725,-3.582943 0,0 2.163287,-1.622465 4.664587,-0.74363\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 69.968799,19.156526 c -1.149246,2.433698 -3.785752,2.771711 -3.785752,2.771711 0,0 -1.487259,-2.298492 -0.338013,-4.732189 1.081643,-2.433698 3.785751,-2.771711 3.785751,-2.771711 0,0 1.48726,2.298492 0.338014,4.732189\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 77.945918,17.128445 c -2.298492,1.352054 -4.732189,0.0676 -4.732189,0.0676 0,0 0.135205,-2.704108 2.433697,-4.056162 2.298492,-1.352054 4.732189,-0.0676 4.732189,-0.0676 0,0 -0.135205,2.704108 -2.433697,4.056162\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path class=\"leav\" d=\"m 73.822153,25.578783 c -2.5013,0.878835 -4.664587,-0.74363 -4.664587,-0.74363 0,0 0.608425,-2.636505 3.109725,-3.582943 2.5013,-0.878835 4.664586,0.74363 4.664586,0.74363 0,0 -0.608424,2.636505 -3.109724,3.582943\"\r\n\t\t    fill=\"#ffc20e\" />\r\n\t\t<path d=\"m 30.353614,33.353094 c -2.163286,0 -3.785751,1.690068 -3.785751,3.98856 0,2.230889 1.622465,3.988559 3.785751,3.988559 2.163287,0 3.718149,-1.690067 3.718149,-3.988559 0,-2.298492 -1.554862,-3.98856 -3.718149,-3.98856 m 0,11.762871 c -4.664586,0 -8.179927,-3.380136 -8.179927,-7.841914 0,-4.461779 3.515341,-7.841914 8.179927,-7.841914 4.664587,0 8.179927,3.380135 8.179927,7.841914 0,4.529381 -3.51534,7.841914 -8.179927,7.841914\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 66.99428,44.845554 -3.98856,0 c -0.135205,0 -0.202808,-0.0676 -0.202808,-0.202808 l 0,-14.602184 c 0,-0.135206 0.0676,-0.202808 0.202808,-0.202808 l 3.98856,0 c 0.135205,0 0.202808,0.0676 0.202808,0.202808 l 0,14.534581 c 0,0.135205 -0.0676,0.270411 -0.202808,0.270411\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 91.398856,33.353094 c -2.163287,0 -3.785751,1.690068 -3.785751,3.98856 0,2.230889 1.622464,3.988559 3.785751,3.988559 2.163286,0 3.718149,-1.690067 3.718149,-3.988559 0,-2.298492 -1.554863,-3.98856 -3.718149,-3.98856 m 0,11.762871 c -4.664587,0 -8.179927,-3.380136 -8.179927,-7.841914 0,-4.461779 3.51534,-7.841914 8.179927,-7.841914 4.664587,0 8.179927,3.380135 8.179927,7.841914 0,4.529381 -3.51534,7.841914 -8.179927,7.841914\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 115.46542,44.845554 -3.92096,0 c -0.1352,0 -0.20281,-0.0676 -0.20281,-0.202808 l 0,-8.585544 c 0,-1.825273 -0.47322,-2.433697 -1.82527,-2.433697 -1.55486,0 -2.90692,1.014041 -3.38013,2.568903 -0.13521,0.473219 -0.20281,1.01404 -0.20281,1.75767 l 0,6.692668 c 0,0.135205 -0.0676,0.202808 -0.20281,0.202808 l -3.98856,0 c -0.13521,0 -0.20281,-0.0676 -0.20281,-0.202808 l 0,-14.602184 c 0,-0.135206 0.0676,-0.202808 0.20281,-0.202808 l 3.85335,0 c 0.13521,0 0.20281,0.0676 0.20281,0.202808 l 0,1.487259 c 0.81123,-0.878835 2.23089,-1.960478 4.59699,-1.960478 3.51534,0 5.34061,1.960478 5.34061,5.813832 l 0,9.329173 c -0.0676,0 -0.20281,0.135206 -0.27041,0.135206\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 19.942798,44.845554 -3.98856,0 c -0.135205,0 -0.202808,-0.0676 -0.202808,-0.202808 0,-4.596984 -0.338013,-9.802392 -0.473219,-11.424857 -1.419657,1.892875 -2.771711,4.461778 -3.853354,6.963078 0,0.0676 -0.135205,0.135206 -0.202808,0.135206 l -2.2308894,0 c -0.067603,0 -0.1352054,-0.0676 -0.2028081,-0.135206 -1.0816432,-2.5013 -2.4336973,-5.070203 -3.8533541,-6.963078 -0.1352054,1.622465 -0.4732189,6.827873 -0.4732189,11.424857 0,0.135205 -0.067603,0.202808 -0.2028081,0.202808 l -4.05616229,0 C 0.0676027,44.845554 0,44.710348 0,44.642746 0,38.423297 0.47321893,30.24337 1.4872595,26.052002 c 0,-0.0676 0.1352054,-0.135205 0.2028081,-0.135205 l 3.1773271,0 c 0.067603,0 0.1352054,0 0.1352054,0.0676 2.0280811,2.298492 3.7857514,4.867395 5.0702029,7.436298 1.284451,-2.568903 3.042122,-5.137806 5.070203,-7.436298 0.0676,-0.0676 0.0676,-0.0676 0.135205,-0.0676 l 3.177327,0 c 0.0676,0 0.202808,0.0676 0.202808,0.135205 1.014041,4.191368 1.48726,12.371295 1.48726,18.590744 0,0.0676 -0.0676,0.202808 -0.202808,0.202808\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 44.820593,44.845554 -3.98856,0 c -0.135205,0 -0.202808,-0.0676 -0.202808,-0.202808 l 0,-14.602184 c 0,-0.135206 0.0676,-0.202808 0.202808,-0.202808 l 3.853354,0 c 0.135206,0 0.202809,0.0676 0.202809,0.202808 l 0,1.825273 c 0.946437,-1.352054 2.5013,-2.23089 4.056162,-2.23089 0.202808,0 0.405616,0 0.540821,0.0676 0.0676,0 0.202809,0.0676 0.202809,0.202808 l 0,3.920957 c 0,0.0676 0,0.135205 -0.0676,0.135205 -0.0676,0.0676 -0.135206,0.0676 -0.135206,0.0676 -0.0676,0 -0.338013,-0.0676 -0.676027,-0.0676 -1.284451,0 -2.839313,0.676028 -3.447738,2.636506 -0.202808,0.608424 -0.27041,1.284451 -0.27041,2.163286 l 0,5.813833 c -0.0676,0.135205 -0.135206,0.270411 -0.270411,0.270411\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 55.907436,44.845554 -3.988559,0 c -0.135206,0 -0.202808,-0.0676 -0.202808,-0.202808 l 0,-14.602184 c 0,-0.135206 0.0676,-0.202808 0.202808,-0.202808 l 3.853354,0 c 0.135205,0 0.202808,0.0676 0.202808,0.202808 l 0,1.825273 c 0.946438,-1.352054 2.5013,-2.23089 4.056162,-2.23089 0.202808,0 0.405616,0 0.540822,0.0676 0.0676,0 0.202808,0.0676 0.202808,0.202808 l 0,3.920957 c 0,0.0676 0,0.135205 -0.0676,0.135205 -0.0676,0.0676 -0.135205,0.0676 -0.202808,0.0676 -0.0676,0 -0.338013,-0.0676 -0.676027,-0.0676 -1.284451,0 -2.839313,0.676028 -3.447738,2.636506 -0.202808,0.608424 -0.270411,1.284451 -0.270411,2.163286 l 0,5.813833 c 0,0.135205 -0.0676,0.270411 -0.202808,0.270411\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 67.399896,25.849194 c 0,1.284451 -1.081643,2.366095 -2.366095,2.366095 -1.284451,0 -2.366094,-1.081644 -2.366094,-2.366095 0,-1.284451 1.081643,-2.366095 2.366094,-2.366095 1.284452,0.0676 2.366095,1.081644 2.366095,2.366095\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 76.864275,35.448778 c -0.202809,-0.0676 -0.338014,-0.135205 -0.540822,-0.135205 -1.48726,-0.473219 -2.366095,-0.74363 -2.366095,-1.48726 l 0,-0.0676 c 0,-0.608424 0.676027,-0.946438 1.554862,-0.946438 1.014041,0 2.028082,0.338014 3.515341,1.081644 l 0,0 c 0,0 0.0676,0 0.0676,0 0.0676,0 0.135205,-0.0676 0.202808,-0.135206 l 1.554862,-2.771711 c 0,0 0,-0.0676 0,-0.0676 0,-0.0676 -0.0676,-0.135206 -0.135205,-0.202808 -1.690068,-0.878835 -3.312533,-1.419657 -5.205409,-1.419657 -3.650546,0 -5.949037,1.75767 -5.949037,4.664586 l 0,0.0676 c 0,2.839314 2.298491,3.98856 4.867394,4.664587 0.202808,0.0676 0.405616,0.135205 0.608425,0.202808 1.554862,0.473219 2.163286,0.811232 2.230889,1.554862 l 0,0.0676 c -0.0676,0.608424 -0.608425,0.878835 -1.622465,0.878835 -1.48726,0 -2.771711,-0.540822 -4.461779,-1.622465 l 0,0 c 0,0 -0.0676,0 -0.135205,0 -0.0676,0 -0.135205,0.0676 -0.135205,0.0676 l -1.757671,2.704108 c 0,0.0676 -0.0676,0.0676 -0.0676,0.135205 0,0.0676 0.0676,0.135206 0.0676,0.135206 2.028081,1.419656 3.853354,2.230889 6.151846,2.230889 3.98856,0 6.354655,-1.75767 6.354655,-4.799792 l 0,-0.135205 c 0,-2.771711 -2.433698,-3.98856 -4.799792,-4.664587\"\r\n\t\t    fill=\"#fff\" />\r\n\t\t<path d=\"m 125.20021,35.516381 c -0.20281,-0.0676 -0.33802,-0.135206 -0.54082,-0.135206 -1.48726,-0.473219 -2.3661,-0.743629 -2.3661,-1.487259 l 0,-0.0676 c 0,-0.608424 0.67603,-0.946438 1.55486,-0.946438 1.01404,0 2.02809,0.338014 3.51534,1.081643 l 0,0 c 0,0 0.0676,0 0.0676,0 0.0676,0 0.1352,-0.0676 0.20281,-0.135205 l 1.55486,-2.771711 c 0,0 0,-0.0676 0,-0.0676 0,-0.0676 -0.0676,-0.135205 -0.13521,-0.202808 -1.69007,-0.878835 -3.31253,-1.419656 -5.20541,-1.419656 -3.65054,0 -5.94903,1.75767 -5.94903,4.664586 l 0,0.0676 c 0,2.839313 2.29849,3.988559 4.86739,4.664586 0.20281,0.0676 0.40562,0.135206 0.60842,0.202809 1.55487,0.473218 2.16329,0.811232 2.23089,1.554862 l 0,0.0676 c -0.0676,0.608425 -0.60842,0.878836 -1.62246,0.878836 -1.48726,0 -2.77171,-0.540822 -4.46178,-1.622465 l 0,0 c 0,0 -0.0676,0 -0.1352,0 -0.0676,0 -0.13521,0.0676 -0.13521,0.0676 l -1.75767,2.704109 c 0,0.0676 -0.0676,0.0676 -0.0676,0.135205 0,0.0676 0.0676,0.135205 0.0676,0.135205 2.02808,1.419657 3.85335,2.23089 6.15185,2.23089 3.98856,0 6.35465,-1.757671 6.35465,-4.799792 l 0,-0.0676 c 0,-2.839314 -2.36609,-3.98856 -4.79979,-4.732189\"\r\n\t\t    fill=\"#fff\" />\r\n\t</svg>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/launch/launch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".launch {\n  background-color: #004e37;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .launch .logo-animation {\n    width: 70%;\n    height: auto; }\n  @media (min-width: 426px) {\n      .launch .logo-animation {\n        width: 250px; } }\n  .launch .logo-animation .leav:nth-child(2) {\n      -webkit-animation-delay: 0.2s;\n              animation-delay: 0.2s;\n      -webkit-animation: kaboomLeft 1.3s alternate linear infinite;\n              animation: kaboomLeft 1.3s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(3) {\n      -webkit-animation-delay: 0.6s;\n              animation-delay: 0.6s;\n      -webkit-animation: kaboomRight 1.2s alternate linear infinite;\n              animation: kaboomRight 1.2s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(5) {\n      -webkit-animation-delay: 0.4s;\n              animation-delay: 0.4s;\n      -webkit-animation: kaboomLeft 1.2s alternate linear infinite;\n              animation: kaboomLeft 1.2s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(6) {\n      -webkit-animation-delay: 0.3s;\n              animation-delay: 0.3s;\n      -webkit-animation: kaboomLeft 0.8s alternate linear infinite;\n              animation: kaboomLeft 0.8s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(7) {\n      -webkit-animation-delay: 0.7s;\n              animation-delay: 0.7s;\n      -webkit-animation: kaboomLeft 1.1s alternate linear infinite;\n              animation: kaboomLeft 1.1s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(8) {\n      -webkit-animation-delay: 0.8s;\n              animation-delay: 0.8s;\n      -webkit-animation: kaboomRight 0.9s alternate linear infinite;\n              animation: kaboomRight 0.9s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(9) {\n      -webkit-animation-delay: 0.5s;\n              animation-delay: 0.5s;\n      -webkit-animation: kaboomRight 1s alternate linear infinite;\n              animation: kaboomRight 1s alternate linear infinite; }\n  .launch .logo-animation .leav:nth-child(10) {\n      -webkit-animation-delay: 0.9s;\n              animation-delay: 0.9s;\n      -webkit-animation: kaboomRight 1.4s alternate linear infinite;\n              animation: kaboomRight 1.4s alternate linear infinite; }\n  @-webkit-keyframes kaboomLeft {\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n  @keyframes kaboomLeft {\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n  @-webkit-keyframes kaboomRight {\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); } }\n  @keyframes kaboomRight {\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/launch/launch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LaunchComponent = /** @class */ (function () {
    function LaunchComponent() {
    }
    LaunchComponent.prototype.ngOnInit = function () {
    };
    LaunchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-launch',
            template: __webpack_require__("../../../../../src/app/shared/launch/launch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/launch/launch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LaunchComponent);
    return LaunchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layouts/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\t<mat-drawer-container>\r\n\t\t<mat-drawer class=\"mat-elevation-z8\" [ngClass]=\"{'closed': isExpanded}\" #sidenav mode=\"side\" [(opened)]=\"opened\">\r\n\t\t\t<mat-toolbar>\r\n\t\t\t\t<button mat-icon-button (click)=\"isExpanded = !isExpanded\">\r\n\t\t\t\t\t<mat-icon class=\"expand\">\r\n\t\t\t\t\t\tclose\r\n\t\t\t\t\t</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t</mat-toolbar>\r\n\t\t\t<mat-nav-list class=\"sidebar\">\r\n\t\t\t\t<mat-list-item [routerLink]=\"['/example-page1']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<mat-icon>dashboard</mat-icon>\r\n\t\t\t\t\t<div class=\"sidenav-item\">\r\n\t\t\t\t\t\tPage 1\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-list-item>\r\n\t\t\t</mat-nav-list>\r\n\t\t\t<mat-nav-list class=\"sidebar\">\r\n\t\t\t\t<mat-list-item [routerLink]=\"['/example-page2']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<mat-icon>dashboard</mat-icon>\r\n\t\t\t\t\t<div class=\"sidenav-item\">\r\n\t\t\t\t\t\tPage 2\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-list-item>\r\n\t\t\t</mat-nav-list>\r\n\t\t</mat-drawer>\r\n\r\n\t\t<mat-drawer-content [ngClass]=\"{'closed': isExpanded}\">\r\n\t\t\t<div [ngClass]=\"{'overlay': !isExpanded}\" (click)=\"!isExpanded && mobileQuery.matches ? isExpanded = !isExpanded : false\"></div>\r\n\t\t\t<mat-toolbar color=\"primary\" class=\"toolbar\">\r\n\t\t\t\t<button mat-icon-button (click)=\"isExpanded = !isExpanded\">\r\n\t\t\t\t\t<mat-icon class=\"expand\">\r\n\t\t\t\t\t\t{{isExpanded ? 'menu' : '' }}\r\n\t\t\t\t\t</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button *ngIf=\"goBackButtonEnabled\" mat-icon-button (click)=\"goBack()\">\r\n\t\t\t\t\t<mat-icon>chevron_left</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t<div>{{pageTitle}}\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"fill-remaining-space\"></span>\r\n\t\t\t\t<button matTooltip=\"Logout\" (click)=\"logOut()\" mat-icon-button>\r\n\t\t\t\t\t<mat-icon>lock_outline</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t</mat-toolbar>\r\n\t\t\t<main class=\"main\" (click)=\"!isExpanded && mobileQuery.matches ? isExpanded = !isExpanded : false\">\r\n\r\n\t\t\t\t<router-outlet (activate)=\"onRouterOutletActivate($event)\"></router-outlet>\r\n\r\n\t\t\t\t<!-- /.conainer-fluid -->\r\n\t\t\t</main>\r\n\t\t\t<footer class=\"app-footer mat-elevation-z8\">\r\n\t\t\t\t<mat-card>\r\n\t\t\t\t\t&copy; Copyright\r\n\t\t\t\t\t<a href=\"https://morrisons.com/\">Wm Morrison Supermarkets PLC 2018</a>.\r\n\t\t\t\t\t<span>All right reserved.</span>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</footer>\r\n\t\t</mat-drawer-content>\r\n\t</mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/layouts/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(location, changeDetectorRef, media) {
        this.location = location;
        this.isProduction = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
        this.opened = true;
        this.isExpanded = true;
        this.hideNav = true;
        this.pageTitle = '';
        this.goBackButtonEnabled = false;
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    FullLayoutComponent.prototype.onRouterOutletActivate = function (event) {
        this.pageTitle = event.pageTitle ? event.pageTitle : '';
        this.goBackButtonEnabled = event.goBackButtonEnabled ? event.goBackButtonEnabled : false;
    };
    FullLayoutComponent.prototype.goBack = function () {
        this.location.back();
    };
    FullLayoutComponent.prototype.logOut = function () {
    };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/shared/layouts/full-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<mat-card-content>\r\n\t\t<a class=\"card-img-top login-brand img-fluid\" href=\"#\">\r\n\t\t\t<img src=\"assets/img/logo.png\" alt=\"Morrisons\">\r\n\t\t</a>\r\n\t\t<form class=\"flexContainer flexColumn\" [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput formControlName=\"login\" name=\"login\" id=\"login\" type=\"text\" placeholder=\"Username\">\r\n\t\t\t\t<mat-error>\r\n\t\t\t\t\tUsername is\r\n\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t</mat-error>\r\n\t\t\t</mat-form-field>\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput formControlName=\"password\" name=\"password\" id=\"password\" type=\"password\" placeholder=\"Password\">\r\n\t\t\t\t<mat-error>\r\n\t\t\t\t\tPassword is\r\n\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t</mat-error>\r\n\t\t\t</mat-form-field>\r\n\t\t\t<button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\r\n\t\t</form>\r\n\t</mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  margin-top: 15%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, formBuilder, router) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            'login': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.loginForm.valid) {
            this.logIn();
        }
    };
    LoginComponent.prototype.logIn = function () {
        this.router.navigate(['/logbook']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/shared/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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