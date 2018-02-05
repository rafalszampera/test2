webpackJsonp(["logbook.module"],{

/***/ "../../../../../src/app/modules/logbook/common/activity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = /** @class */ (function () {
    function Activity(id, name, iconName) {
        this.id = id;
        this.name = name;
        this.iconName = iconName;
    }
    return Activity;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/common/department.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Department; });
var Department = /** @class */ (function () {
    function Department(id, name, iconName) {
        this.id = id;
        this.name = name;
        this.iconName = iconName;
    }
    return Department;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<mat-nav-list *ngFor=\"let activity of activities\">\r\n\t\t<a mat-list-item [routerLink]=\"[activity.id, 'tasks']\">\r\n\t\t\t<div>\r\n\t\t\t\t<mat-icon>{{ activity.iconName }}</mat-icon>\r\n\t\t\t\t<span class=\"activity-name\">{{ activity.name }}</span>\r\n\t\t\t</div>\r\n\t\t\t<span>0/10</span>\r\n\t\t</a>\r\n\t\t<mat-divider></mat-divider>\r\n\t</mat-nav-list>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  margin: 10px;\n  padding: 0; }\n  .mat-card .mat-list-item {\n    height: 80px; }\n  .mat-card .mat-list-item:focus .activity-name {\n      color: #fff; }\n  :host/deep/ .mat-list-item-content {\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host/deep/ .mat-list-item-content > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentActivitiesViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_activity__ = __webpack_require__("../../../../../src/app/modules/logbook/common/activity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepartmentActivitiesViewComponent = /** @class */ (function () {
    function DepartmentActivitiesViewComponent(route) {
        this.route = route;
        this.activities = new Array();
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    DepartmentActivitiesViewComponent.prototype.ngOnInit = function () {
        this.activities = this.loadDepartments();
    };
    DepartmentActivitiesViewComponent.prototype.loadDepartments = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_2__common_activity__["a" /* Activity */](1, 'Cleaning Toilets', 'wc'),
            new __WEBPACK_IMPORTED_MODULE_2__common_activity__["a" /* Activity */](1, 'Checking Fridges Temperatures', 'ac_unit'),
            new __WEBPACK_IMPORTED_MODULE_2__common_activity__["a" /* Activity */](1, 'Cleaning Fridges', 'kitchen'),
            new __WEBPACK_IMPORTED_MODULE_2__common_activity__["a" /* Activity */](1, 'Cleaning Toilets2', 'wc'),
            new __WEBPACK_IMPORTED_MODULE_2__common_activity__["a" /* Activity */](1, 'Cleaning Toilets3', 'wc')
        ];
    };
    DepartmentActivitiesViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-department-activities-view',
            template: __webpack_require__("../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DepartmentActivitiesViewComponent);
    return DepartmentActivitiesViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<mat-card-header>\r\n\t\t<div mat-card-avatar class=\"card-header-avatar\">\r\n\t\t\t<img src=\"assets/img/ducky.jpg\" alt=\"\">\r\n\t\t</div>\r\n\t\t<mat-card-title>Lorem Ipsum is simply dummy text</mat-card-title>\r\n\t\t<mat-card-subtitle>Lorem Ipsum is simply dummy text of the printing</mat-card-subtitle>\r\n\t\t<div class=\"info\">\r\n\t\t\t<a href=\"#\">\r\n\t\t\t\t<mat-icon>info_outline</mat-icon>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</mat-card-header>\r\n\t<mat-card-actions>\r\n\t\t<!-- <a mat-button>I found a problem</a> -->\r\n\t\t<a mat-raised-button>Done</a>\r\n\t</mat-card-actions>\r\n</mat-card>\r\n<mat-card>\r\n\t<mat-card-header>\r\n\t\t<div mat-card-avatar class=\"card-header-avatar\">\r\n\t\t\t<img src=\"assets/img/ducky.jpg\" alt=\"\">\r\n\t\t</div>\r\n\t\t<mat-card-title>Lorem Ipsum is simply dummy text</mat-card-title>\r\n\t\t<mat-card-subtitle>Lorem Ipsum is simply dummy text of the printing</mat-card-subtitle>\r\n\t\t<div class=\"info\">\r\n\t\t\t<a href=\"#\">\r\n\t\t\t\t<mat-icon>info_outline</mat-icon>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</mat-card-header>\r\n\t<mat-card-actions>\r\n\t\t<!-- <a mat-button>I found a problem</a> -->\r\n\t\t<a mat-raised-button>Done</a>\r\n\t</mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  margin: 10px; }\n  .mat-card-actions {\n    text-align: right;\n    text-transform: uppercase; }\n  .mat-card-actions .mat-raised-button {\n      color: #fff;\n      background-color: #004e37; }\n  .mat-card .card-header-avatar {\n    overflow: hidden; }\n  .mat-card .card-header-avatar img {\n      width: 100%; }\n  .mat-card .info .mat-icon {\n    color: #868e96; }\n  .mat-card .mat-card-actions {\n    margin: 0; }\n  :host/deep/ .mat-card-header-text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentActivityTaskViewComponent; });
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

var DepartmentActivityTaskViewComponent = /** @class */ (function () {
    function DepartmentActivityTaskViewComponent() {
    }
    DepartmentActivityTaskViewComponent.prototype.ngOnInit = function () {
    };
    DepartmentActivityTaskViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-department-activity-task-view',
            template: __webpack_require__("../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentActivityTaskViewComponent);
    return DepartmentActivityTaskViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\r\n\t<a mat-tab-link [routerLink]=\"['/test']\" routerLinkActive #at=\"routerLinkActive\" [active]=\"at.isActive\">\r\n\t\tAll Tasks\r\n\t</a>\r\n\t<a mat-tab-link [routerLink]=\"['/dashboard/price-verification']\" routerLinkActive #ot=\"routerLinkActive\" [active]=\"ot.isActive\">\r\n\t\tOpened Tasks\r\n\t</a>\r\n\t<a mat-tab-link [routerLink]=\"['/dashboard/price-verification']\" routerLinkActive #rt=\"routerLinkActive\" [active]=\"rt.isActive\">\r\n\t\tResolved Tasks\r\n\t</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host/deep/ .mat-tab-nav-bar {\n  border-bottom: 0; }\n  :host/deep/ .mat-tab-nav-bar .mat-tab-links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #004e37; }\n  :host/deep/ .mat-tab-nav-bar .mat-tab-links .mat-tab-link {\n      min-width: auto;\n      color: #fff;\n      opacity: 0.8; }\n  @media (max-width: 425px) {\n        :host/deep/ .mat-tab-nav-bar .mat-tab-links .mat-tab-link {\n          padding: 0 10px; } }\n  :host/deep/ .mat-tab-nav-bar .mat-tab-links .mat-tab-link.active {\n        opacity: 1;\n        border-bottom: none; }\n  :host/deep/ .mat-tab-nav-bar .mat-tab-links .mat-tab-link:nth-child(3) {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-pack: left;\n            -ms-flex-pack: left;\n                justify-content: left; }\n  :host/deep/ .mat-tab-nav-bar .mat-tab-links .mat-tab-link:focus {\n        background-color: inherit;\n        color: #fff;\n        opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentActivityTasksViewComponent; });
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

var DepartmentActivityTasksViewComponent = /** @class */ (function () {
    function DepartmentActivityTasksViewComponent() {
    }
    DepartmentActivityTasksViewComponent.prototype.ngOnInit = function () { };
    DepartmentActivityTasksViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-department-activity-tasks-view',
            template: __webpack_require__("../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentActivityTasksViewComponent);
    return DepartmentActivityTasksViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/departments-view/departments-view.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<mat-nav-list *ngFor=\"let department of departments\">\r\n\t\t<a mat-list-item [routerLink]=\"[department.id, 'activities']\">\r\n\t\t\t<mat-icon>{{ department.iconName }}</mat-icon>\r\n\t\t\t<span class=\"activity-name\"> {{ department.name }} </span>\r\n\t\t</a>\r\n\t\t<mat-divider></mat-divider>\r\n\t</mat-nav-list>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/departments-view/departments-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  margin: 10px;\n  padding: 0; }\n  .mat-card .mat-list-item {\n    height: 80px; }\n  .mat-card .mat-list-item:focus .activity-name {\n      color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/departments-view/departments-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_department__ = __webpack_require__("../../../../../src/app/modules/logbook/common/department.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentsViewComponent = /** @class */ (function () {
    function DepartmentsViewComponent() {
        this.departments = new Array();
    }
    DepartmentsViewComponent.prototype.ngOnInit = function () {
        this.departments = this.loadDepartments();
    };
    DepartmentsViewComponent.prototype.loadDepartments = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_1__common_department__["a" /* Department */](1, 'Bakery & Cakes', 'cake'),
            new __WEBPACK_IMPORTED_MODULE_1__common_department__["a" /* Department */](1, 'Frozen', 'ac_unit2'),
            new __WEBPACK_IMPORTED_MODULE_1__common_department__["a" /* Department */](1, 'Baby & Toddler', 'face'),
            new __WEBPACK_IMPORTED_MODULE_1__common_department__["a" /* Department */](1, 'Flowers', 'local_florist'),
            new __WEBPACK_IMPORTED_MODULE_1__common_department__["a" /* Department */](1, 'Food Cupboard', 'shopping_basket')
        ];
    };
    DepartmentsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-departments-view',
            template: __webpack_require__("../../../../../src/app/modules/logbook/departments-view/departments-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/departments-view/departments-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentsViewComponent);
    return DepartmentsViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/logbook-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogbookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logbook_view_logbook_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__departments_view_departments_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/departments-view/departments-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__department_activities_view_department_activities_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__department_activity_tasks_view_department_activity_tasks_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__department_activity_task_view_department_activity_task_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/modules/logbook/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_list_opened_task_list_opened_component__ = __webpack_require__("../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_list_resolved_task_list_resolved_component__ = __webpack_require__("../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__logbook_view_logbook_view_component__["a" /* LogbookViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'departments',
                pathMatch: 'full'
            },
            {
                path: 'departments',
                component: __WEBPACK_IMPORTED_MODULE_3__departments_view_departments_view_component__["a" /* DepartmentsViewComponent */]
            },
            {
                path: 'departments/:departmentId/activities',
                component: __WEBPACK_IMPORTED_MODULE_4__department_activities_view_department_activities_view_component__["a" /* DepartmentActivitiesViewComponent */]
            },
            {
                path: 'departments/:departmentId/activities/:activityId/tasks',
                component: __WEBPACK_IMPORTED_MODULE_5__department_activity_tasks_view_department_activity_tasks_view_component__["a" /* DepartmentActivityTasksViewComponent */]
            },
            {
                path: 'departments/:departmentId/activities/:activityId/tasks/:taskId',
                component: __WEBPACK_IMPORTED_MODULE_6__department_activity_task_view_department_activity_task_view_component__["a" /* DepartmentActivityTaskViewComponent */]
            },
            {
                path: 'departments/:departmentId/activities/:activityId/tasks/all',
                component: __WEBPACK_IMPORTED_MODULE_7__task_list_task_list_component__["a" /* TaskListComponent */]
            },
            {
                path: 'departments/:departmentId/activities/:activityId/tasks/opened',
                component: __WEBPACK_IMPORTED_MODULE_8__task_list_opened_task_list_opened_component__["a" /* TaskListOpenedComponent */]
            },
            {
                path: 'departments/:departmentId/activities/:activityId/tasks/resolved',
                component: __WEBPACK_IMPORTED_MODULE_9__task_list_resolved_task_list_resolved_component__["a" /* TaskListResolvedComponent */]
            }
        ]
    }
];
var LogbookRoutingModule = /** @class */ (function () {
    function LogbookRoutingModule() {
    }
    LogbookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], LogbookRoutingModule);
    return LogbookRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogbookViewComponent; });
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

var LogbookViewComponent = /** @class */ (function () {
    function LogbookViewComponent() {
    }
    LogbookViewComponent.prototype.ngOnInit = function () { };
    LogbookViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logbook-view',
            template: __webpack_require__("../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogbookViewComponent);
    return LogbookViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/logbook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogbookModule", function() { return LogbookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logbook_routing_module__ = __webpack_require__("../../../../../src/app/modules/logbook/logbook-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logbook_view_logbook_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/logbook-view/logbook-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__departments_view_departments_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/departments-view/departments-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__department_activities_view_department_activities_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/department-activities-view/department-activities-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__department_activity_tasks_view_department_activity_tasks_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/department-activity-tasks-view/department-activity-tasks-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__department_activity_task_view_department_activity_task_view_component__ = __webpack_require__("../../../../../src/app/modules/logbook/department-activity-task-view/department-activity-task-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_list_opened_task_list_opened_component__ = __webpack_require__("../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_list_resolved_task_list_resolved_component__ = __webpack_require__("../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/modules/logbook/task-list/task-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var LogbookModule = /** @class */ (function () {
    function LogbookModule() {
    }
    LogbookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__logbook_routing_module__["a" /* LogbookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__logbook_view_logbook_view_component__["a" /* LogbookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__departments_view_departments_view_component__["a" /* DepartmentsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__department_activities_view_department_activities_view_component__["a" /* DepartmentActivitiesViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__department_activity_tasks_view_department_activity_tasks_view_component__["a" /* DepartmentActivityTasksViewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__department_activity_task_view_department_activity_task_view_component__["a" /* DepartmentActivityTaskViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__task_list_opened_task_list_opened_component__["a" /* TaskListOpenedComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_list_resolved_task_list_resolved_component__["a" /* TaskListResolvedComponent */],
                __WEBPACK_IMPORTED_MODULE_14__task_list_task_list_component__["a" /* TaskListComponent */]
            ]
        })
    ], LogbookModule);
    return LogbookModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  task-list-opened works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListOpenedComponent; });
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

var TaskListOpenedComponent = /** @class */ (function () {
    function TaskListOpenedComponent() {
    }
    TaskListOpenedComponent.prototype.ngOnInit = function () {
    };
    TaskListOpenedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-list-opened',
            template: __webpack_require__("../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/task-list-opened/task-list-opened.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListOpenedComponent);
    return TaskListOpenedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  task-list-resolved works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListResolvedComponent; });
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

var TaskListResolvedComponent = /** @class */ (function () {
    function TaskListResolvedComponent() {
    }
    TaskListResolvedComponent.prototype.ngOnInit = function () {
    };
    TaskListResolvedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-list-resolved',
            template: __webpack_require__("../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/task-list-resolved/task-list-resolved.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListResolvedComponent);
    return TaskListResolvedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<mat-nav-list *ngFor=\"let task of tasks\">\r\n\t\t<a mat-list-item [routerLink]=\"[task.id]\">\r\n\t\t\t<div>\r\n\t\t\t\t<span class=\"activity-name\">{{ task.taskName }}</span>\r\n\t\t\t\t<span class=\"activity-name\">{{ task.dateFrom }}</span>\r\n\t\t\t\t<span class=\"activity-name\">{{ task.dateTo }}</span>\r\n\t\t\t\t<span class=\"activity-name\">{{ task.finished }}</span>\r\n\t\t\t</div>\r\n\t\t\t<span>0/10</span>\r\n\t\t</a>\r\n\t\t<mat-divider></mat-divider>\r\n\t</mat-nav-list>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list/task-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/logbook/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__ = __webpack_require__("../../../../../src/app/modules/app-core/models/task.dto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = /** @class */ (function () {
    function TaskListComponent() {
        this.tasks = new Array();
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.tasks = this.getTaskData();
    };
    TaskListComponent.prototype.getTaskData = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__["a" /* TaskDto */](1, 'Activity1', 'Task1', '2018-01-01', '2018-01-01', false),
            new __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__["a" /* TaskDto */](1, 'Activity1', 'Task2', '2018-01-01', '2018-01-01', false),
            new __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__["a" /* TaskDto */](1, 'Activity1', 'Task3', '2018-01-01', '2018-01-01', false),
            new __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__["a" /* TaskDto */](1, 'Activity1', 'Task4', '2018-01-01', '2018-01-01', false),
            new __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__["a" /* TaskDto */](1, 'Activity1', 'Task5', '2018-01-01', '2018-01-01', false),
            new __WEBPACK_IMPORTED_MODULE_1__app_core_models_task_dto__["a" /* TaskDto */](1, 'Activity1', 'Task6', '2018-01-01', '2018-01-01', false)
        ];
    };
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-list',
            template: __webpack_require__("../../../../../src/app/modules/logbook/task-list/task-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/logbook/task-list/task-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ })

});
//# sourceMappingURL=logbook.module.chunk.js.map