webpackJsonp(["admin-dashboard.module"],{

/***/ "../../../../../src/app/modules/admin-dashboard/admin-dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__task_list_task_list_component__["a" /* TaskListComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */]
    }
];
var AdminDashboardRoutingModule = /** @class */ (function () {
    function AdminDashboardRoutingModule() {
    }
    AdminDashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */]]
        })
    ], AdminDashboardRoutingModule);
    return AdminDashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/admin-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_routing_module__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/admin-dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminDashboardModule = /** @class */ (function () {
    function AdminDashboardModule() {
    }
    AdminDashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_routing_module__["a" /* AdminDashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatTabsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ]
        })
    ], AdminDashboardModule);
    return AdminDashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/dashboard/dashboard-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardViewModel; });
var DashboardViewModel = /** @class */ (function () {
    function DashboardViewModel(name, done, amount, isRed, isAmber, isGreen) {
        this.name = name;
        this.done = done;
        this.amount = amount;
        this.isRed = isRed;
        this.isAmber = isAmber;
        this.isGreen = isGreen;
    }
    Object.defineProperty(DashboardViewModel.prototype, "percent", {
        get: function () {
            return this.done / this.amount * 100;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"dashboard-daily-workload-progress\">\r\n    <mat-card-header class=\"flex\">\r\n\r\n        <mat-card-title>Task progress bar</mat-card-title>\r\n        <mat-card-subtitle>Tasks done statistic</mat-card-subtitle>\r\n\r\n        <button (click)=\"refreshData()\" mat-button>\r\n\t\t\t<mat-icon>refresh</mat-icon>\r\n\t\t</button>\r\n\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div *ngIf=\"!dataLoaded\" class=\"load-spinner\">\r\n            <mat-spinner></mat-spinner>\r\n        </div>\r\n        <div *ngIf=\"dataLoaded\" class=\"progress-wrap\">\r\n            <div *ngFor=\"let item of data\" class=\"progress-container\">\r\n                {{item.name}}\r\n                <div class=\"flex\">\r\n                    <div class=\"progress-bar\">\r\n                        <mat-progress-bar [ngClass]=\"{green: item.isGreen, amber: item.isAmber, red: item.isRed}\" mode=\"determinate\" [value]=\"item.percent\"></mat-progress-bar>\r\n                    </div>\r\n                    <div class=\"progress-count\">\r\n                        {{item.done}} / {{item.amount}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"data.length === 0\">\r\n                No data available\r\n            </div>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .mat-card .mat-card-header {\n    margin-bottom: 15px; }\n  .mat-card .mat-card-header .mat-card-title,\n    .mat-card .mat-card-header .mat-card-subtitle {\n      margin-top: 0;\n      margin-bottom: 10px; }\n  .mat-card .mat-card-header .mat-card-title {\n      font-size: 22px; }\n  .mat-card .mat-card-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .mat-card .mat-card-content .progress-wrap {\n      width: 100%; }\n  .mat-card .mat-card-content .progress-container {\n      font-size: 16px;\n      margin-bottom: 10px; }\n  .mat-card .mat-card-content .mat-progress-bar {\n      height: 30px;\n      margin: 15px 0;\n      border-radius: 15px; }\n  .mat-card .mat-card-content .flex .progress-bar {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n  .mat-card .mat-card-content .flex .progress-count {\n      padding-left: 30px;\n      font-size: 16px;\n      font-weight: 600; }\n  .mat-card .flex {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  :host/deep/ .mat-progress-bar.green .mat-progress-bar-fill:after {\n  background-color: #004e37; }\n  :host/deep/ .mat-progress-bar.amber .mat-progress-bar-fill:after {\n  background-color: #F5A623; }\n  :host/deep/ .mat-progress-bar.red .mat-progress-bar-fill:after {\n  background-color: #E53935; }\n  :host/deep/ .mat-progress-bar .mat-progress-bar-buffer {\n  background-color: rgba(249, 249, 249, 0.87); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_loader_service__ = __webpack_require__("../../../../../src/app/modules/app-core/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_view_model__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/dashboard/dashboard-view-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(loaderService) {
        this.loaderService = loaderService;
        this.dataLoaded = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.refreshData();
        this.loaderService.display(false);
    };
    DashboardComponent.prototype.refreshData = function () {
        this.dataLoaded = false;
        this.data = [
            new __WEBPACK_IMPORTED_MODULE_2__dashboard_view_model__["a" /* DashboardViewModel */]('Daily tasks - Done', 10, 16, false, false, true),
            new __WEBPACK_IMPORTED_MODULE_2__dashboard_view_model__["a" /* DashboardViewModel */]('Daily tasks - To do', 2, 16, false, true, false),
            new __WEBPACK_IMPORTED_MODULE_2__dashboard_view_model__["a" /* DashboardViewModel */]('Daily tasks - Overdue', 4, 16, true, false, false)
        ];
        this.dataLoaded = true;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/admin-dashboard/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services_loader_service__["a" /* LoaderService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<mat-table #table [dataSource]=\"dataSource\">\r\n\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t<mat-header-cell class=\"id\" *matHeaderCellDef>Task id</mat-header-cell>\r\n\t\t\t<mat-cell class=\"id\" *matCellDef=\"let row\">{{ row.id }}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"activityName\">\r\n\t\t\t<mat-header-cell *matHeaderCellDef>Activity name</mat-header-cell>\r\n\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.activityName }}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"taskName\">\r\n\t\t\t<mat-header-cell *matHeaderCellDef>Task name</mat-header-cell>\r\n\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.taskName }}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"dateFrom\">\r\n\t\t\t<mat-header-cell class=\"text-right dateFrom\" *matHeaderCellDef>From</mat-header-cell>\r\n\t\t\t<mat-cell class=\"text-right dateFrom\" *matCellDef=\"let row\">{{ row.dateFrom | date:'dd-MM-y HH:mm' }}</mat-cell>\r\n\t\t</ng-container>\r\n\t\t<ng-container matColumnDef=\"dateTo\">\r\n\t\t\t<mat-header-cell class=\"text-right dateTo\" *matHeaderCellDef>To</mat-header-cell>\r\n\t\t\t<mat-cell class=\"text-right dateTo\" *matCellDef=\"let row\">{{ row.dateTo | date:'dd-MM-y HH:mm' }}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t<mat-header-cell class=\"status text-center\" *matHeaderCellDef>Status</mat-header-cell>\r\n\t\t\t<mat-cell class=\"status text-center \" *matCellDef=\"let row\">{{row.status}}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\t</mat-table>\r\n</mat-card>\r\n<div *ngIf=\"dataSource.data.length === 0\">\r\n\t<mat-card class=\"mat-elevation-z1\">\r\n\t\t<mat-card-content>\r\n\t\t\t<p>\r\n\t\t\t\tThere is no data.\r\n\t\t\t</p>\r\n\t\t</mat-card-content>\r\n\t</mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  margin: 10px; }\n  .mat-card .mat-table .mat-row:nth-child(2n) {\n    background-color: rgba(249, 249, 249, 0.87); }\n  .mat-card .mat-table .id {\n    max-width: 80px; }\n  .mat-card .mat-table .dateTo,\n  .mat-card .mat-table .dateFrom {\n    max-width: 140px; }\n  .mat-card .mat-table .status {\n    max-width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_loader_service__ = __webpack_require__("../../../../../src/app/modules/app-core/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_models_task_dto__ = __webpack_require__("../../../../../src/app/modules/app-core/models/task.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_view_model__ = __webpack_require__("../../../../../src/app/modules/admin-dashboard/task-list/task-view-model.ts");
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
    function TaskListComponent(loaderService) {
        this.loaderService = loaderService;
        this.displayedColumns = [
            'id',
            'activityName',
            'taskName',
            'dateFrom',
            'dateTo',
            'status'
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatTableDataSource */]([]);
        this.getData = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.loaderService.display(false);
        var data = [
            new __WEBPACK_IMPORTED_MODULE_4__task_view_model__["a" /* TaskViewModel */](new __WEBPACK_IMPORTED_MODULE_3__app_core_models_task_dto__["a" /* TaskDto */](1, 'a', 'b', '2018-02-02 15:00', '2018-02-02 18:00', true)),
            new __WEBPACK_IMPORTED_MODULE_4__task_view_model__["a" /* TaskViewModel */](new __WEBPACK_IMPORTED_MODULE_3__app_core_models_task_dto__["a" /* TaskDto */](2, 'aa', 'ba', '2018-02-03 15:00', '2018-02-03 18:00', false)),
            new __WEBPACK_IMPORTED_MODULE_4__task_view_model__["a" /* TaskViewModel */](new __WEBPACK_IMPORTED_MODULE_3__app_core_models_task_dto__["a" /* TaskDto */](3, 'aa', 'ba', '2018-02-03 15:00', '2018-02-03 18:00', false)),
            new __WEBPACK_IMPORTED_MODULE_4__task_view_model__["a" /* TaskViewModel */](new __WEBPACK_IMPORTED_MODULE_3__app_core_models_task_dto__["a" /* TaskDto */](4, 'a', 'b', '2018-02-02 15:00', '2018-02-02 18:00', true))
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatTableDataSource */](data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatTableDataSource */])
    ], TaskListComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskListComponent.prototype, "getData", void 0);
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-task-list',
            template: __webpack_require__("../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/admin-dashboard/task-list/task-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_core_services_loader_service__["a" /* LoaderService */]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin-dashboard/task-list/task-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskViewModel; });
var TaskViewModel = /** @class */ (function () {
    function TaskViewModel(task) {
        this.mapToObject(task);
    }
    TaskViewModel.prototype.mapToObject = function (task) {
        this.id = task.id;
        this.activityName = task.activityName;
        this.taskName = task.taskName;
        this.dateFrom = task.dateFrom;
        this.dateTo = task.dateTo;
        this.status = task.finished ? '	\u2714' : 'New';
    };
    return TaskViewModel;
}());



/***/ })

});
//# sourceMappingURL=admin-dashboard.module.chunk.js.map