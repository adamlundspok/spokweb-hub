webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/+affiliations/shared/affiliation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Affiliation; });
var Affiliation = (function () {
    function Affiliation() {
    }
    return Affiliation;
}());

//# sourceMappingURL=affiliation.model.js.map

/***/ }),

/***/ "../../../../../src/app/+customers/+customer-list/customer-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\n    width: 100%;\n}\n\n.alert{\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+customers/+customer-list/customer-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"message.type === ''\" class=\"alert alert-{{message.style}}\">\n    {{message.text}}\n  </div>\n  <div data-qa=\"page_title\" class=\"main-header\">\n    <h2>Customers</h2><em>View, add, and edit customers</em>\n  </div>\n\n  <div class=\"main-content\">\n    <div class=\"form-actions\">\n      <button data-qa=\"add_customer_btn\" routerLink=\"/customers/customer\" class=\"btn btn-primary\">Create Customer</button>\n    </div>\n    <table data-qa=\"customer_list_tbl\" class=\"table table-striped\">\n      <thead>\n      <tr data-qa=\"customer_list_tbl_header\">\n        <th>Name</th>\n        <th>City</th>\n        <th>State</th>\n        <th>Actions</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"customers.length\">\n      <tr attr.data-qa=\"{{customer.customerId}}_tbl_row\" *ngFor=\"let customer of customers\">\n        <td>{{customer.name}}</td>\n        <td>{{customer.addrCity}}</td>\n        <td>{{customer.addrState}}</td>\n        <td><a routerLink=\"/customers/{{customer.customerId}}\">Edit</a></td>\n      </tr>\n      </tbody>\n    </table>\n    <div data-qa=\"no_data_msg\" [hidden]=\"customers.length\" class=\"alert alert-info\" class=\"message info\">\n      No customers exist.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+customers/+customer-list/customer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerListComponent = (function () {
    function CustomerListComponent(customersService, route) {
        this.customersService = customersService;
        this.route = route;
        this.customers = [];
        this.message = { type: '', style: '', text: '' };
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeObservable = this.route.data;
        var updatedCustomerObservable = this.customersService.getUpdatedCustomer();
        this.observableSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]
            .combineLatest(routeObservable, updatedCustomerObservable)
            .subscribe(function (data) {
            var customerData = data[0], updatedCustomer = data[1];
            var customers = customerData.customers;
            if (updatedCustomer && updatedCustomer.customerId) {
                var customerIndex = __WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"](customers, { customerId: updatedCustomer.customerId });
                if (customerIndex >= 0) {
                    customers.splice(customerIndex, 1, updatedCustomer);
                }
                else {
                    customers.push(updatedCustomer);
                }
                // Clear the updatedCustomer to prevent overwriting newer server data
                _this.customersService.setUpdatedCustomer(null);
            }
            _this.customers = customers;
        });
    };
    CustomerListComponent.prototype.ngOnDestroy = function () {
        if (this.observableSubscription) {
            this.observableSubscription.unsubscribe();
        }
    };
    CustomerListComponent.prototype.handleFailure = function (err) {
        this.createMessage('fail', err.message);
    };
    CustomerListComponent.prototype.createMessage = function (type, text) {
        this.message.type = type;
        this.message.text = text;
        switch (type) {
            case 'pass':
                this.message.style = 'success';
                break;
            default: this.message.style = 'danger';
        }
    };
    return CustomerListComponent;
}());
CustomerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'customer-list',
        styles: [__webpack_require__("../../../../../src/app/+customers/+customer-list/customer-list.component.css")],
        template: __webpack_require__("../../../../../src/app/+customers/+customer-list/customer-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_customers_service__["a" /* CustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_customers_service__["a" /* CustomersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], CustomerListComponent);

var _a, _b;
//# sourceMappingURL=customer-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/+customers/+customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched[required-no-whitespace], \n.ng-touched.required-no-whitespace, \n.ng-touched[required], \n.ng-touched.required  {\n  border-left: 5px solid #42A948;\n}\n\n.ng-invalid:not(form).ng-dirty,\n.ng-pristine:not(form).ng-invalid:not(form).ng-touched:not(form)  {\n  border-left: 5px solid #a94442;\n}\n\n.cancel-lnk{\n  padding: 20px;\n}\n\n.legend{\n  float:right;\n}\n\na{\n  outline:none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+customers/+customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"main-header\">\n        <h2 class=\"no-right-border\" data-qa=\"page_title\">Customer Detail</h2>\n        <div class=\"legend form-group required\">\n            <label></label>Required Field\n        </div>\n    </div>\n    <div class=\"widget\">\n        <div class=\"widget-header\"><h3 data-qa=\"form_title\">{{title}} Customer</h3></div>\n        <div class=\"widget-content\">\n            <form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\">\n                <div class=\"form-group required\">\n                    <label data-qa=\"name_lbl\" for=\"name\">Name</label>\n                    <input data-qa=\"name_txt\" type=\"text\" class=\"form-control\" id=\"name\" required-no-whitespace maxlength=\"100\" trim [(ngModel)]=\"model.name\"\n                        name=\"name\" #name=\"ngModel\">\n                </div>\n                <div *ngIf=\"name.errors && name.dirty\" class=\"alert alert-danger\">\n                    <div data-qa=\"name_error_required\" [hidden]=\"!name.errors.required\">\n                        Name is required.\n                    </div>\n                </div>\n                <div class=\"form-group required\">\n                    <label data-qa=\"contact_lbl\" for=\"contact\">Customer Contact</label>\n                    <input data-qa=\"contact_txt\" type=\"text\" class=\"form-control\" id=\"contact\" required-no-whitespace maxlength=\"500\" trim [(ngModel)]=\"model.contact\"\n                        name=\"contact\" #contact=\"ngModel\">\n                </div>\n                <div *ngIf=\"contact.errors && contact.dirty\" class=\"alert alert-danger\">\n                    <div data-qa=\"contact_error_required\" [hidden]=\"!contact.errors.required\">\n                        Contact is required.\n                    </div>\n                </div>\n                <div class=\"form-group required\">\n                    <label data-qa=\"address1_lbl\" for=\"address1\">Address</label>\n                    <input data-qa=\"address1_txt\" type=\"text\" class=\"form-control\" id=\"address1\" required-no-whitespace maxlength=\"100\" trim [(ngModel)]=\"model.addr1\"\n                        name=\"address1\" #addr1=\"ngModel\">\n                </div>\n                <div *ngIf=\"addr1.errors && addr1.dirty\" class=\"alert alert-danger\">\n                    <div data-qa=\"address1_error_required\" [hidden]=\"!addr1.errors.required\">\n                        Address is required.\n                    </div>\n                </div>\n                <div class=\"form-group required\">\n                    <label data-qa=\"city_lbl\" for=\"city\">City</label>\n                    <input data-qa=\"city_txt\" type=\"text\" class=\"form-control\" id=\"city\" required-no-whitespace maxlength=\"100\" trim [(ngModel)]=\"model.addrCity\"\n                        name=\"city\" #addrCity=\"ngModel\">\n                </div>\n                <div *ngIf=\"addrCity.errors && addrCity.dirty\" class=\"alert alert-danger\">\n                    <div data-qa=\"city_error_required\" [hidden]=\"!addrCity.errors.required\">\n                        City is required.\n                    </div>\n                </div>\n                <div class=\"form-group required\">\n                    <label data-qa=\"stateAbbreviation_lbl\" for=\"stateAbbreviation\">State</label>\n                    <select data-qa=\"stateAbbreviation_ddl\" class=\"form-control\" id=\"stateAbbreviation\" name=\"stateAbbreviation\" [(ngModel)]=\"model.addrState\"\n                        required #addrState=\"ngModel\">\n                        <option attr.data-qa=\"{{abbreviation}}_opt\" *ngFor=\"let abbreviation of stateAbbreviations\" [value]=\"abbreviation\">{{abbreviation}}</option>\n                    </select>\n                </div>\n                <div *ngIf=\"addrState.errors && addrState.dirty\" class=\"alert alert-danger\">\n                    <div data-qa=\"state_error_required\" [hidden]=\"!addrState.errors.required\">\n                        State is required.\n                    </div>\n                </div>\n                <div class=\"form-group required\">\n                    <label data-qa=\"zip_lbl\" for=\"zip\">Zip</label>\n                    <input data-qa=\"zip_txt\" type=\"text\" class=\"form-control\" id=\"zip\" required-no-whitespace maxlength=\"10\" trim [(ngModel)]=\"model.addrZip\"\n                        name=\"zip\" #addrZip=\"ngModel\">\n                </div>\n                <div *ngIf=\"addrZip.errors && addrZip.dirty\" class=\"alert alert-danger\">\n                    <div data-qa=\"zip_error_required\" [hidden]=\"!addrZip.errors.required\">\n                        Zip is required.\n                    </div>\n                </div>\n                <div class=\"form-actions form-actions__bottom\">\n                    <a data-qa=\"cancel_lnk\" routerLink=\"/customers\" type=\"cancel\" class=\"cancel-lnk\">Cancel</a>\n                    <button data-qa=\"save_btn\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.form.valid\">Save</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+customers/+customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_customer_model__ = __webpack_require__("../../../../../src/app/+customers/shared/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_message_message_service__ = __webpack_require__("../../../../../src/app/shared/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modal_unsaved_changes_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/unsaved-changes-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CustomerComponent = (function () {
    function CustomerComponent(customersService, router, route, messageService, modalService, appService) {
        this.customersService = customersService;
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.modalService = modalService;
        this.appService = appService;
        this.stateAbbreviations = [
            'AL',
            'AK',
            'AZ',
            'AR',
            'CA',
            'CO',
            'CT',
            'DE',
            'FL',
            'GA',
            'HI',
            'ID',
            'IL',
            'IN',
            'IA',
            'KS',
            'KY',
            'LA',
            'ME',
            'MD',
            'MA',
            'MI',
            'MN',
            'MS',
            'MO',
            'MT',
            'NE',
            'NV',
            'NH',
            'NJ',
            'NM',
            'NY',
            'NC',
            'ND',
            'OH',
            'OK',
            'OR',
            'PA',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VT',
            'VA',
            'WA',
            'WV',
            'WI',
            'WY',
            'AS',
            'DC',
            'FM',
            'GU',
            'MH',
            'MP',
            'PW',
            'PR',
            'VI',
            'AE',
            'AA',
            'AE',
            'AP'
        ];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__shared_customer_model__["a" /* Customer */]();
        this.title = 'Create';
        this.message = { type: '', style: '', text: '' };
        this.emptyGuid = '00000000-0000-0000-0000-000000000000';
        this.submittedSuccessfully = false;
        this.model.customerId = this.emptyGuid;
        this.model.isSystemAdmin = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = '';
        this.route.params
            .subscribe(function (params) { return id = params['id']; });
        this.appService.logDebug('Load Customer ID:', id);
        if (id !== undefined && id !== '') {
            this.title = 'Edit';
            this.customersService
                .getCustomer(id)
                .subscribe(function (customer) { return _this.model = customer; }, function (err) { return _this.handleFailure(err); });
        }
    };
    CustomerComponent.prototype.canDeactivate = function () {
        if (this.customerForm.dirty && !this.submittedSuccessfully) {
            var result = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__shared_modal_unsaved_changes_modal_component__["a" /* UnsavedChangesModalComponent */]).result;
            return result.then(function () { return true; }, function () { return false; });
        }
        else {
            return true;
        }
    };
    CustomerComponent.prototype.onSubmit = function () {
        var _this = this;
        var request;
        if (this.model.customerId === this.emptyGuid) {
            request = this.customersService.postCustomer(this.model);
        }
        else {
            request = this.customersService.putCustomer(this.model.customerId, this.model);
        }
        request.subscribe(function (customer) { return _this.handleSuccess(customer); }, function (err) { return _this.handleFailure(err); });
    };
    CustomerComponent.prototype.ngOnDestroy = function () {
        this.messageService.clearFailure();
    };
    CustomerComponent.prototype.handleFailure = function (err) {
        this.submittedSuccessfully = false;
        this.messageService.fail({ text: err.message });
    };
    CustomerComponent.prototype.handleSuccess = function (customer) {
        this.submittedSuccessfully = true;
        this.customersService.setUpdatedCustomer(customer);
        this.messageService.success({ text: 'Saved!', autoHide: true });
        this.router.navigate(['/customers']);
    };
    return CustomerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('customerForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], CustomerComponent.prototype, "customerForm", void 0);
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'customer',
        styles: [__webpack_require__("../../../../../src/app/+customers/+customer/customer.component.css")],
        template: __webpack_require__("../../../../../src/app/+customers/+customer/customer.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_customers_service__["a" /* CustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_customers_service__["a" /* CustomersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_message_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_message_message_service__["a" /* MessageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]) === "function" && _g || Object])
], CustomerComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/+customers/customer.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_list_customer_list_component__ = __webpack_require__("../../../../../src/app/+customers/+customer-list/customer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_routing_can_deactivate_guard_service__ = __webpack_require__("../../../../../src/app/shared/routing/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__ = __webpack_require__("../../../../../src/app/+customers/+customer/customer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CUSTOMER_ROUTES; });





var CUSTOMER_ROUTES = [
    {
        path: 'customers/customer',
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__["a" /* AuthGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_routing_can_deactivate_guard_service__["a" /* CanDeactivateGuardService */]]
    },
    {
        path: 'customers/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__["a" /* AuthGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_routing_can_deactivate_guard_service__["a" /* CanDeactivateGuardService */]]
    },
    {
        path: 'customers', component: __WEBPACK_IMPORTED_MODULE_2__customer_list_customer_list_component__["a" /* CustomerListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__["a" /* AuthGuardService */]],
        resolve: {
            customers: __WEBPACK_IMPORTED_MODULE_0__shared_customers_service__["a" /* CustomersService */]
        }
    }
];
//# sourceMappingURL=customer.routes.js.map

/***/ }),

/***/ "../../../../../src/app/+customers/customers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer_component__ = __webpack_require__("../../../../../src/app/+customers/+customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_list_customer_list_component__ = __webpack_require__("../../../../../src/app/+customers/+customer-list/customer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modal_unsaved_changes_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/unsaved-changes-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_routes__ = __webpack_require__("../../../../../src/app/+customers/customer.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_forms_portal_forms_module__ = __webpack_require__("../../../../../src/app/shared/forms/portal-forms.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__customer_list_customer_list_component__["a" /* CustomerListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__shared_forms_portal_forms_module__["a" /* PortalFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__customer_routes__["a" /* CUSTOMER_ROUTES */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__customer_list_customer_list_component__["a" /* CustomerListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_customers_service__["a" /* CustomersService */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__shared_modal_unsaved_changes_modal_component__["a" /* UnsavedChangesModalComponent */]]
    })
], CustomerModule);

//# sourceMappingURL=customers.module.js.map

/***/ }),

/***/ "../../../../../src/app/+customers/shared/customer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());

//# sourceMappingURL=customer.model.js.map

/***/ }),

/***/ "../../../../../src/app/+customers/shared/customers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_request_service__ = __webpack_require__("../../../../../src/app/shared/auth/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_model__ = __webpack_require__("../../../../../src/app/+customers/shared/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_exceptions_exception_service__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomersService = (function () {
    function CustomersService(requestService, exceptionService) {
        this.requestService = requestService;
        this.exceptionService = exceptionService;
        this.currentCustomer = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__customer_model__["a" /* Customer */]());
        this.updatedCustomer = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__customer_model__["a" /* Customer */]());
        this.baseUrl = "/portal/api";
    }
    CustomersService.prototype.resolve = function (route, state) {
        return this.getCustomers();
    };
    CustomersService.prototype.getCustomers = function () {
        var _this = this;
        return this.requestService.authGet(this.baseUrl + "/v1/customers")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    CustomersService.prototype.getCustomer = function (id) {
        var _this = this;
        return this.requestService.authGet(this.baseUrl + "/v1/customers/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    CustomersService.prototype.getCurrentCustomer = function () {
        return this.currentCustomer.share();
    };
    CustomersService.prototype.setCurrentCustomer = function (customer) {
        this.currentCustomer.next(customer);
    };
    CustomersService.prototype.getUpdatedCustomer = function () {
        return this.updatedCustomer.share();
    };
    CustomersService.prototype.setUpdatedCustomer = function (customer) {
        this.updatedCustomer.next(customer);
    };
    CustomersService.prototype.postCustomer = function (model) {
        var _this = this;
        return this.requestService.authPost(this.baseUrl + "/v1/customers", model)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    CustomersService.prototype.putCustomer = function (id, model) {
        var _this = this;
        return this.requestService.authPut(this.baseUrl + "/v1/customers/" + id, model)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    return CustomersService;
}());
CustomersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_exceptions_exception_service__["a" /* ExceptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_exceptions_exception_service__["a" /* ExceptionService */]) === "function" && _b || Object])
], CustomersService);

var _a, _b;
//# sourceMappingURL=customers.service.js.map

/***/ }),

/***/ "../../../../../src/app/+users/+user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+users/+user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div [hidden]=\"message.type === ''\" class=\"alert alert-{{message.style}}\">\n        {{message.text}}\n    </div>\n    <div data-qa=\"page_title\" class=\"main-header\">\n        <h2>Users</h2><em>View, add, and edit users for a customer</em>\n        <div class=\"main-header__subtitle\" *ngIf=\"canIUse.manageCustomers;else customerName\">\n            <label data-qa=\"customer_lbl\" for=\"customerSelect\">Customer</label>\n            <select data-qa=\"customer_ddl\" id=\"customerSelect\" name=\"customer\" #customer (change)=\"onCustomerChange(customer.value)\">\n                <option attr.data-qa=\"{{customer.customerId}}_opt\" *ngFor=\"let customer of customers\" [value]=\"customer.customerId\"\n                        [selected]=\"customer.customerId == currentCustomer.customerId\">\n                    {{customer.name}}\n                </option>\n            </select>\n        </div>\n        <ng-template #customerName>\n            <h3 class=\"no-right-border\" data-qa=\"page_title_account\">Account: {{currentCustomer?.name}}</h3>\n        </ng-template>\n    </div>\n    <div class=\"main-content\">\n        <div class=\"form-actions\">\n            <button data-qa=\"add_user_btn\" routerLink=\"/users/user\" class=\"btn btn-primary\">Create User</button>\n        </div>\n        <table data-qa=\"user_list_tbl\" class=\"table table-striped\">\n            <thead>\n                <tr data-qa=\"user_list_tbl_header\">\n                    <th data-qa=\"col_header_name\">Name</th>\n                    <th data-qa=\"col_header_email\">Email</th>\n                    <th data-qa=\"col_header_status\">Status</th>\n                    <th data-qa=\"col_header_actions\">Actions</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"userSearchResults.length\">\n                <tr *ngFor=\"let user of userSearchResults\">\n                    <td data-qa=\"col_name\">{{user.firstName}} {{user.lastName}}</td>\n                    <td data-qa=\"col_email\">{{user.email}}</td>\n                    <td data-qa=\"col_status\">{{(user.isActive ? 'Active' : 'Inactive')}}</td>\n                    <td data-qa=\"col_edit\"><a routerLink=\"/users/{{user.userId}}\">Edit</a></td>\n                </tr>\n            </tbody>\n        </table>\n        <loading-spinner *ngIf=\"!userSearchResults.length && fetchingUsers\"></loading-spinner>\n        <div data-qa=\"no_data_msg\" [hidden]=\"userSearchResults.length || fetchingUsers\" class=\"alert alert-info message info\">\n            No users exist for this customer\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+users/+user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_shared_user_search_result_model__ = __webpack_require__("../../../../../src/app/+users/shared/user-search-result.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_users_service__ = __webpack_require__("../../../../../src/app/+users/shared/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customers_shared_customer_model__ = __webpack_require__("../../../../../src/app/+customers/shared/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customers_shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_security_permissions_model__ = __webpack_require__("../../../../../src/app/shared/security/permissions.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_security_permissions_service__ = __webpack_require__("../../../../../src/app/shared/security/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserListComponent = (function () {
    function UserListComponent(route, usersService, permissionsService, customerService) {
        this.route = route;
        this.usersService = usersService;
        this.permissionsService = permissionsService;
        this.customerService = customerService;
        this.currentCustomer = new __WEBPACK_IMPORTED_MODULE_5__customers_shared_customer_model__["a" /* Customer */]();
        this.userSearchResults = [];
        this.message = { type: '', style: '', text: '' };
        this.canIUse = new __WEBPACK_IMPORTED_MODULE_7__shared_security_permissions_model__["a" /* Permissions */](false, false, false, false);
        this.fetchingUsers = true;
        this.updatedUser = new __WEBPACK_IMPORTED_MODULE_3__users_shared_user_search_result_model__["a" /* UserSearchResult */]();
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentCustomerObservable = this.customerService.getCurrentCustomer();
        var routeDataObservable = this.route.data;
        var updatedUserObservable = this.usersService.getUpdatedUser().first();
        this.observableSubscription = __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]
            .combineLatest(currentCustomerObservable, routeDataObservable, updatedUserObservable)
            .subscribe(function (data) {
            var currentCustomer = data[0], customerData = data[1], updatedUser = data[2];
            var currentCustomerExists = currentCustomer && currentCustomer.name;
            _this.currentCustomer = currentCustomer;
            _this.customers = customerData.customers;
            _this.updatedUser = updatedUser;
            if (currentCustomerExists) {
                _this.initialize(_this.currentCustomer);
            }
            else {
                _this.initialize(customerData.customers[0]);
            }
        });
        this.permissionsService.getPermissions().subscribe(function (featureAvailability) {
            _this.canIUse = featureAvailability;
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        if (this.observableSubscription) {
            this.observableSubscription.unsubscribe();
        }
    };
    UserListComponent.prototype.onCustomerChange = function (customerId) {
        this.userSearchResults = [];
        if (customerId) {
            if (!this.currentCustomer || !this.currentCustomer.customerId || customerId !== this.currentCustomer.customerId) {
                this.customerService.setCurrentCustomer(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.customers, { customerId: customerId }));
            }
            this.getUsersForCustomerId(customerId);
        }
    };
    UserListComponent.prototype.initialize = function (customer) {
        if (customer !== undefined && customer.customerId) {
            this.getUsersForCustomerId(customer.customerId);
            if (!this.currentCustomer.customerId) {
                this.customerService.setCurrentCustomer(customer);
            }
        }
    };
    UserListComponent.prototype.getUsersForCustomerId = function (customerId) {
        var _this = this;
        this.fetchingUsers = true;
        this.usersService.getUsers(customerId).subscribe(function (results) {
            if (results === void 0) { results = []; }
            results = results && results.length ? results : [];
            if (_this.updatedUser && _this.updatedUser.userId) {
                var index = __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](results, { userId: _this.updatedUser.userId });
                if (index >= 0) {
                    results.splice(index, 1, _this.updatedUser);
                }
                else {
                    results.push(_this.updatedUser);
                }
                // Clear the updatedUser to prevent overwriting newer server data
                _this.usersService.setUpdatedUser(null);
            }
            _this.fetchingUsers = false;
            _this.userSearchResults = results || [];
        }, function (err) { return _this.handleFailure(err); });
    };
    UserListComponent.prototype.handleFailure = function (err) {
        this.createMessage('fail', err.message);
    };
    UserListComponent.prototype.createMessage = function (type, text) {
        this.message.type = type;
        this.message.text = text;
        switch (type) {
            case 'pass':
                this.message.style = 'success';
                break;
            default:
                this.message.style = 'danger';
        }
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'user-list',
        styles: [__webpack_require__("../../../../../src/app/+users/+user-list/user-list.component.css")],
        template: __webpack_require__("../../../../../src/app/+users/+user-list/user-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_security_permissions_service__["a" /* PermissionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_security_permissions_service__["a" /* PermissionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__customers_shared_customers_service__["a" /* CustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__customers_shared_customers_service__["a" /* CustomersService */]) === "function" && _d || Object])
], UserListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/+users/+user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched[required-no-whitespace], \n.ng-touched.required-no-whitespace, \n.ng-touched[required], \n.ng-touched.required  {\n  border-left: 5px solid #42A948;\n}\n\n.ng-invalid:not(form).ng-dirty,\n.ng-pristine:not(form).ng-invalid:not(form).ng-touched:not(form)  {\n  border-left: 5px solid #a94442;\n}\n\n.cancel-lnk{\n  padding: 20px;\n}\n\n.legend{\n  float:right;\n}\n\na{\n  outline:none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+users/+user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"main-header\">\n    <h2 class=\"no-right-border\" data-qa=\"page_title\">User Detail</h2>\n    <h3 class=\"no-right-border\" data-qa=\"page_title_account\">Account: {{customer?.name}}</h3>\n    <div class=\"legend form-group required\">\n      <label></label>Required Field\n    </div>\n  </div>\n  <div class=\"widget\">\n    <div class=\"widget-header\"><h3 data-qa=\"form_title\">{{title}} User</h3></div>\n    <div class=\"widget-content\">\n      <form (ngSubmit)=\"onSubmit()\" autocomplete=\"off\" #userForm=\"ngForm\">\n        <div class=\"form-group required\">\n          <label data-qa=\"first_lbl\" for=\"first\">First Name</label>\n          <input data-qa=\"first_txt\" type=\"text\" class=\"form-control\" id=\"first\" required-no-whitespace maxlength=\"100\" trim [(ngModel)]=\"model.firstName\"\n                 name=\"first\" #first=\"ngModel\">\n        </div>\n        <div *ngIf=\"first.errors && first.dirty\" class=\"alert alert-danger\">\n          <div data-qa=\"first_error_required\" [hidden]=\"!first.errors.required\">\n            First name is required.\n          </div>\n        </div>\n        <div class=\"form-group required\">\n          <label data-qa=\"last_lbl\" for=\"last\">Last Name</label>\n          <input data-qa=\"last_txt\" type=\"text\" class=\"form-control\" id=\"last\" required-no-whitespace maxlength=\"100\" trim [(ngModel)]=\"model.lastName\"\n                 name=\"last\" #last=\"ngModel\">\n        </div>\n        <div *ngIf=\"last.errors && last.dirty\" class=\"alert alert-danger\">\n          <div data-qa=\"last_error_required\" [hidden]=\"!last.errors.required\">\n            Last name is required.\n          </div>\n        </div>\n        <div class=\"form-group required\">\n          <label data-qa=\"phone_lbl\" for=\"phoneNumber\">Phone</label>\n          <input data-qa=\"phone_txt\" type=\"tel\" value='' autocomplete=\"off\" class=\"form-control\" id=\"phoneNumber\" maxlength=\"20\" required-no-whitespace  trim [(ngModel)]=\"model.phoneNumber\"\n                 name=\"phoneNumber\" #phoneNumber=\"ngModel\">\n        </div>\n        <div *ngIf=\"phoneNumber.errors && phoneNumber.dirty\" class=\"alert alert-danger\">\n          <div data-qa=\"phone_error_required\" [hidden]=\"!phoneNumber.errors.required\">\n            Phone number is required.\n          </div>\n        </div>\n        <div class=\"form-group required\">\n          <label data-qa=\"email_lbl\" for=\"email\">Email Address (Username)</label>\n          <input data-qa=\"email_txt\" type=\"email\" value='' autocomplete=\"off\" class=\"form-control\" id=\"email\" required-no-whitespace maxlength=\"100\" trim [(ngModel)]=\"model.email\"\n                 pattern=\"^([\\'.-]?\\w?)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                 name=\"email\" #email=\"ngModel\">\n        </div>\n        <div *ngIf=\"email.errors && email.dirty\" class=\"alert alert-danger\">\n          <div data-qa=\"email_error_invalid\"  [hidden]=\"!email.errors.pattern || email.errors.required\">\n            Email address is invalid.\n          </div>\n          <div data-qa=\"email_error_required\" [hidden]=\"!email.errors.required\">\n            Email address is required.\n          </div>\n        </div>\n        <div class=\"form-group required\">\n          <label data-qa=\"password_lbl\" for=\"password\">Password</label>\n          <input data-qa=\"password_txt\" type=\"password\" value='' autocomplete=\"new-password\" class=\"form-control\" id=\"password\" maxlength=\"100\" minlength=\"8\" trim [(ngModel)]=\"defaultPassword\"\n                 required-no-whitespace name=\"password\" #password=\"ngModel\">\n        </div>\n        <div *ngIf=\"password.errors && password.dirty\" class=\"alert alert-danger\">\n          <div data-qa=\"password_error_required\" [hidden]=\"!password.errors.required\">\n            Password is required.\n          </div>\n          <div data-qa=\"password_error_length\" [hidden]=\"!password.errors.minlength\">\n            Password must be at least 8 characters long.\n          </div>\n        </div>\n\n        <div class=\"form-group required\">\n          <label data-qa=\"roles_lbl\" for=\"roles\">Role</label>\n          <select *ngIf=\"isRoleEditable\" data-qa=\"roles_ddl\" class=\"form-control\" id=\"roles\" name=\"roles\" required\n            [(ngModel)]=\"model.securityRole.level\" #level=\"ngModel\">\n                <option attr.data-qa=\"{{securityRole.level}}_opt\" *ngFor=\"let securityRole of securityRoles\" [value]=\"securityRole.level\" [selected]=\"securityRole.level === model.securityRoleLevel\">{{securityRole.name}}</option>\n            </select>\n            <div data-qa=\"role_readonly\" *ngIf=\"!isRoleEditable\">{{model.securityRole.name}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"showActive && isActiveEditable\">\n          <label class=\"form-control\">\n            Is Active?\n            <input data-qa=\"is_active_chk\" type=\"checkbox\" [(ngModel)]=\"model.isActive\" name=\"isActive\">\n          </label>\n        </div>\n        <div data-qa=\"active_readonly\" *ngIf=\"showActive && !isActiveEditable\">\n          <label>Status</label>\n          <div data-qa=\"active_readonly_value\" *ngIf=\"model.isActive\">Active</div>\n          <div data-qa=\"active_readonly_value\" *ngIf=\"!model.isActive\">Inactive</div>\n        </div>\n        <div class=\"form-actions form-actions__bottom\">\n          <a data-qa=\"cancel_lnk\" routerLink=\"/users\" type=\"cancel\" class=\"cancel-lnk\">Cancel</a>\n          <button data-qa=\"save_btn\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userForm.form.valid || model.securityRole.level==0\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+users/+user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_model__ = __webpack_require__("../../../../../src/app/+users/shared/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modal_unsaved_changes_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/unsaved-changes-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_message_message_service__ = __webpack_require__("../../../../../src/app/shared/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_users_service__ = __webpack_require__("../../../../../src/app/+users/shared/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customers_shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customers_shared_customer_model__ = __webpack_require__("../../../../../src/app/+customers/shared/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_managed_user_model__ = __webpack_require__("../../../../../src/app/+users/shared/managed-user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_security_security_role_service__ = __webpack_require__("../../../../../src/app/shared/security/security-role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_user_search_result_model__ = __webpack_require__("../../../../../src/app/+users/shared/user-search-result.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var UserComponent = (function () {
    function UserComponent(router, route, modalService, messageService, usersService, customersService, securityRolesService, appService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.messageService = messageService;
        this.usersService = usersService;
        this.customersService = customersService;
        this.securityRolesService = securityRolesService;
        this.appService = appService;
        this.customer = new __WEBPACK_IMPORTED_MODULE_9__customers_shared_customer_model__["a" /* Customer */]();
        this.title = 'Create';
        this.api_model = new __WEBPACK_IMPORTED_MODULE_2__shared_user_model__["a" /* User */]();
        this.model = new __WEBPACK_IMPORTED_MODULE_10__shared_managed_user_model__["a" /* ManagedUser */]();
        this.securityRoles = new Array();
        this.isActiveEditable = false;
        this.fakePassword = '00000000000';
        this.defaultPassword = '';
        this.showActive = false;
        this.submittedSuccessfully = false;
        this.subscriptions = [
            this.currentCustomerSubscription,
            this.authenticatedUserSubscription,
            this.securityRolesSubscription,
            this.userSubscription
        ];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentCustomerSubscription = this.customersService.getCurrentCustomer().subscribe(function (customer) {
            _this.customer = customer;
        });
        this.authenticatedUserSubscription = this.appService.getAuthenticatedUser().subscribe(function (currentUser) {
            _this.currentUser = currentUser;
        });
        this.securityRolesSubscription = this.securityRolesService.getRoles(this.customer.customerId).subscribe(function (securityRoles) {
            _this.securityRoles = securityRoles;
            _this.setUser();
        }, function (err) { return _this.handleFailure(err); });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.messageService.clearFailure();
        this.subscriptions.forEach(function (subscription) {
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    };
    UserComponent.prototype.setUser = function () {
        var _this = this;
        var id = '';
        this.route.params.subscribe(function (params) { return id = params['id']; });
        if (id !== undefined && id !== '') {
            this.title = 'Edit';
            this.showActive = true;
            this.defaultPassword = this.fakePassword;
            this.userSubscription = this.usersService.getUser(id).subscribe(function (user) {
                _this.model = new __WEBPACK_IMPORTED_MODULE_10__shared_managed_user_model__["a" /* ManagedUser */](user.affiliations[0]);
                _this.isActiveEditable = _this.canEditActive(user, _this.currentUser);
                _this.setSecurity();
            }, function (err) { return _this.handleFailure(err); });
        }
        else {
            this.setSecurity();
            this.model.securityRole.level = null;
            this.model.isActive = true;
        }
    };
    UserComponent.prototype.canEditActive = function (user, currentUser) {
        if (currentUser && currentUser.securityRole && currentUser.securityRole.level && user && user.affiliations) {
            var userAffiliation = user.affiliations[0];
            if (userAffiliation && userAffiliation.securityRole && userAffiliation.securityRole.level) {
                var isSelf = user.userId === this.currentUser.userId;
                return userAffiliation.securityRole.level >= currentUser.securityRole.level && !isSelf;
            }
        }
        return true;
    };
    UserComponent.prototype.setSecurity = function () {
        var _this = this;
        this.isRoleEditable = this.securityRoles.length > 0 &&
            (this.model.securityRole === undefined ||
                this.model.securityRole.level === 0 ||
                this.securityRoles.find(function (m) { return m.level === _this.model.securityRole.level; }) !== undefined);
    };
    UserComponent.prototype.canDeactivate = function () {
        if (this.userForm.dirty && !this.submittedSuccessfully) {
            var result = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__shared_modal_unsaved_changes_modal_component__["a" /* UnsavedChangesModalComponent */]).result;
            return result.then(function () { return true; }, function () { return false; });
        }
        else {
            return true;
        }
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model.customerId = this.customer.customerId;
        this.model.username = this.model.email;
        this.model.securityRoleLevel = this.model.securityRole.level;
        /** TODO: This fakepassword implementation is temporary and should be subsumed by a two-field change password process  */
        if (this.userForm.controls.password.value && this.userForm.controls.password.value !== this.fakePassword) {
            this.model.password = this.userForm.controls.password.value;
        }
        var request = this.model.userId ? this.usersService.putUser(this.model) : this.usersService.postUser(this.model);
        request.subscribe(function (user) { return _this.handleSuccess(user); }, function (err) { return _this.handleFailure(err); });
    };
    UserComponent.prototype.handleFailure = function (err) {
        this.messageService.fail({ text: err.message });
        this.submittedSuccessfully = false;
    };
    UserComponent.prototype.handleSuccess = function (user) {
        var userSearchResult = user.affiliations ? new __WEBPACK_IMPORTED_MODULE_13__shared_user_search_result_model__["a" /* UserSearchResult */](user.affiliations[0]) : user;
        this.usersService.setUpdatedUser(new __WEBPACK_IMPORTED_MODULE_13__shared_user_search_result_model__["a" /* UserSearchResult */](userSearchResult));
        this.messageService.success({ text: "User " + this.model.username + " saved for " + this.customer.name + "!", autoHide: true });
        this.submittedSuccessfully = true;
        this.router.navigate(['/users']);
    };
    return UserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('userForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], UserComponent.prototype, "userForm", void 0);
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'user',
        template: __webpack_require__("../../../../../src/app/+users/+user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/+users/+user/user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_11__shared_security_security_role_service__["a" /* SecurityRolesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_message_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_message_message_service__["a" /* MessageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_users_service__["a" /* UsersService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__customers_shared_customers_service__["a" /* CustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__customers_shared_customers_service__["a" /* CustomersService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_security_security_role_service__["a" /* SecurityRolesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_security_security_role_service__["a" /* SecurityRolesService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppService */]) === "function" && _j || Object])
], UserComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/+users/shared/managed-user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_security_security_role_model__ = __webpack_require__("../../../../../src/app/shared/security/security-role.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagedUser; });

var ManagedUser = (function () {
    function ManagedUser(affiliation) {
        this.affiliationId = affiliation && affiliation.affiliationId || '';
        this.userId = affiliation && affiliation.userId || '';
        this.customerId = affiliation && affiliation.customerId || '';
        this.firstName = affiliation && affiliation.firstName || '';
        this.lastName = affiliation && affiliation.lastName || '';
        this.email = affiliation && affiliation.email || '';
        this.phoneNumber = affiliation && affiliation.phoneNumber || '';
        this.username = affiliation && affiliation.username || '';
        this.password = affiliation && affiliation.password || '';
        this.isActive = affiliation && affiliation.isActive || false;
        this.securityRole = affiliation && affiliation.securityRole || new __WEBPACK_IMPORTED_MODULE_0__shared_security_security_role_model__["b" /* SecurityRole */](0, '');
        this.securityRoleLevel = affiliation && affiliation.securityRole && affiliation.securityRole.level || 0;
    }
    return ManagedUser;
}());

//# sourceMappingURL=managed-user.model.js.map

/***/ }),

/***/ "../../../../../src/app/+users/shared/user-search-result.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchResult; });
var UserSearchResult = (function () {
    function UserSearchResult(obj) {
        if (obj) {
            var userId = obj.userId, firstName = obj.firstName, lastName = obj.lastName, email = obj.email, isActive = obj.isActive;
            this.userId = userId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.isActive = isActive;
        }
    }
    return UserSearchResult;
}());

//# sourceMappingURL=user-search-result.model.js.map

/***/ }),

/***/ "../../../../../src/app/+users/shared/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/+users/shared/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_search_result_model__ = __webpack_require__("../../../../../src/app/+users/shared/user-search-result.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_request_service__ = __webpack_require__("../../../../../src/app/shared/auth/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_exceptions_exception_service__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = (function () {
    function UsersService(requestService, exceptionService) {
        this.requestService = requestService;
        this.exceptionService = exceptionService;
        this.baseUrl = "/portal/api";
        this.updatedUser = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__user_search_result_model__["a" /* UserSearchResult */]({}));
    }
    UsersService.prototype.getCurrentUser = function () {
        var _this = this;
        return this.requestService.authGet(this.baseUrl + "/v1/users/current")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    UsersService.prototype.getUser = function (userId) {
        var _this = this;
        return this.requestService.authGet(this.baseUrl + "/v1/users/" + userId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    UsersService.prototype.getUsers = function (customerId) {
        var _this = this;
        return this.requestService.authGet(this.baseUrl + "/v1/users?customerId=" + customerId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    UsersService.prototype.postUser = function (model) {
        var _this = this;
        return this.requestService.authPost(this.baseUrl + "/v1/users", model)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    UsersService.prototype.putUser = function (model) {
        var _this = this;
        return this.requestService.authPut(this.baseUrl + "/v1/users/" + model.userId + "/affiliations/" + model.affiliationId, model)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    UsersService.prototype.getUpdatedUser = function () {
        return this.updatedUser.share();
    };
    UsersService.prototype.setUpdatedUser = function (user) {
        this.updatedUser.next(user);
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_exceptions_exception_service__["a" /* ExceptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_exceptions_exception_service__["a" /* ExceptionService */]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/+users/user.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customers_shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/+users/+user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_component__ = __webpack_require__("../../../../../src/app/+users/+user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_routing_can_deactivate_guard_service__ = __webpack_require__("../../../../../src/app/shared/routing/can-deactivate-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_ROUTES; });





var USER_ROUTES = [
    {
        path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__["a" /* UserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__["a" /* AuthGuardService */]],
        resolve: {
            customers: __WEBPACK_IMPORTED_MODULE_0__customers_shared_customers_service__["a" /* CustomersService */]
        }
    },
    {
        path: 'users/user', component: __WEBPACK_IMPORTED_MODULE_3__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__["a" /* AuthGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__shared_routing_can_deactivate_guard_service__["a" /* CanDeactivateGuardService */]]
    },
    {
        path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_3__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_guard_service__["a" /* AuthGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__shared_routing_can_deactivate_guard_service__["a" /* CanDeactivateGuardService */]]
    }
];
//# sourceMappingURL=user.routes.js.map

/***/ }),

/***/ "../../../../../src/app/+users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/+users/+user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routes__ = __webpack_require__("../../../../../src/app/+users/user.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/+users/+user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_users_service__ = __webpack_require__("../../../../../src/app/+users/shared/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_forms_portal_forms_module__ = __webpack_require__("../../../../../src/app/shared/forms/portal-forms.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__shared_forms_portal_forms_module__["a" /* PortalFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_routes__["a" /* USER_ROUTES */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__customers_shared_customers_service__["a" /* CustomersService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_users_service__["a" /* UsersService */]
        ]
    })
], UserModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-idle></app-idle>\n<app-page-load></app-page-load>\n<app-main-layout *ngIf=\"userLoadedObservable | async;\"></app-main-layout>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_app_config_service__ = __webpack_require__("../../../../../src/app/shared/config/app.config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_users_shared_users_service__ = __webpack_require__("../../../../../src/app/+users/shared/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_security_permissions_service__ = __webpack_require__("../../../../../src/app/shared/security/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customers_shared_customers_service__ = __webpack_require__("../../../../../src/app/+customers/shared/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_page_load_page_load_component__ = __webpack_require__("../../../../../src/app/shared/page-load/page-load.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_oidc_services_oidc_security_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(appService, permissionsService, usersService, customersService, appConfig) {
        this.appService = appService;
        this.permissionsService = permissionsService;
        this.usersService = usersService;
        this.customersService = customersService;
        this.appConfig = appConfig;
        this.appService.initOIDC();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userLoadedObservable = this.appService.getAuthenticatedUser();
        this.pageLoader.show();
        this.pageLoader.setMessage('Loading...');
        var isAuth = this.appService.getIsAuthorized() || false;
        if (this.getLocationHash()) {
            this.appService.processLogin().subscribe(function (next) {
                _this.appService.blockAuthCalls(true);
                _this.userAuthSubscription = _this.registerUserObserver(_this.pageLoader, _this.usersService, _this.customersService, _this.appService, _this.permissionsService);
            }, function (error) {
                _this.pageLoader.setMessage('Trying to log you in');
                _this.appService.blockAuthCalls(false);
                // Error authenticating, reattempt authorization
                if (error.id === __WEBPACK_IMPORTED_MODULE_7__shared_auth_oidc_services_oidc_security_service__["b" /* AUTHERROR */].TOKEN_STATE_ERROR) {
                    _this.callAuthorize();
                }
                else {
                    _this.logoff();
                }
            }, function () {
                _this.pageLoader.hide();
            });
        }
        else {
            if (!isAuth) {
                this.callAuthorize();
            }
            else {
                this.userAuthSubscription = this.registerUserObserver(this.pageLoader, this.usersService, this.customersService, this.appService, this.permissionsService);
            }
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.userAuthSubscription) {
            this.userAuthSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.registerUserObserver = function (loader, userService, custService, appService, permissions) {
        var _this = this;
        return userService.getCurrentUser().subscribe(function (authenticatedUser) {
            custService.setCurrentCustomer(authenticatedUser.customer);
            appService.setAuthenticatedUser(authenticatedUser);
            permissions.setPermissions(authenticatedUser.securityRole.level);
            loader.hide();
            _this.appService.blockAuthCalls(false);
            // Listen for changes to storage where the user has been logged out in another tab or user cleared localstorage
            window.addEventListener('storage', function (event) {
                _this.storageEventHandler(event);
            });
        }, function (error) {
            /* 401 occurs when authorization on ID server is valid but portal API is not*/
            if (error.status && error.status === 401 || error.status === '401') {
                _this.callAuthorize();
            }
            else {
                /* any other condition -- log user out */
                _this.logoff();
            }
        });
    };
    AppComponent.prototype.storageEventHandler = function (event) {
        if ((event.storageArea.length === 0) ||
            (event.key && event.key === '_isAuthorized' && event.newValue.match(/(\"{2,4})|(\'{2,4})|(false)/g))) {
            this.logoff();
            return;
        }
    };
    AppComponent.prototype.callAuthorize = function () {
        this.pageLoader.setMessage('Redirecting you to sign in');
        this.appService.redirectToAuthorization();
    };
    AppComponent.prototype.logoff = function () {
        this.appService.logoff();
    };
    AppComponent.prototype.getLocationHash = function () {
        return window.location.hash;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__shared_page_load_page_load_component__["a" /* PageLoadingComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_page_load_page_load_component__["a" /* PageLoadingComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_page_load_page_load_component__["a" /* PageLoadingComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "pageLoader", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        // DO NOT REMOVE THESE STYLEURLS
        // REMOVING THESE STYLE URLS WILL BREAK STYLES ONCE DEPLOYED BUT NOT BE EVIDENT TO YOU IN LOCAL
        styles: [__webpack_require__("../../../../../src/assets/css/main.css"), __webpack_require__("../../../../../src/assets/sass/app-style-overrides.scss"), __webpack_require__("../../../../ng-bootstrap-to-bootstrap-3/dist/ng-bootstrap-to-bootstrap-3.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_security_permissions_service__["a" /* PermissionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_security_permissions_service__["a" /* PermissionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_users_shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_users_shared_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__customers_shared_customers_service__["a" /* CustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__customers_shared_customers_service__["a" /* CustomersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_config_app_config_service__["a" /* AppConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_config_app_config_service__["a" /* AppConfigService */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_resolver__ = __webpack_require__("../../../../../src/app/app.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__no_content__ = __webpack_require__("../../../../../src/app/no-content/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_layout_layout_module__ = __webpack_require__("../../../../../src/app/shared/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_auth_request_service__ = __webpack_require__("../../../../../src/app/shared/auth/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_exceptions_exception_service__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_auth_oidc_modules_auth_module__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_auth_oidc_services_oidc_security_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_auth_oidc_modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_message_message_service__ = __webpack_require__("../../../../../src/app/shared/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_security_security_role_service__ = __webpack_require__("../../../../../src/app/shared/security/security-role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__users_users_module__ = __webpack_require__("../../../../../src/app/+users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__customers_customers_module__ = __webpack_require__("../../../../../src/app/+customers/customers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_routing_can_deactivate_guard_service__ = __webpack_require__("../../../../../src/app/shared/routing/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_config_app_config_service__ = __webpack_require__("../../../../../src/app/shared/config/app.config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_security_permissions_service__ = __webpack_require__("../../../../../src/app/shared/security/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__error_pages_unauthorized_unauthorized_component__ = __webpack_require__("../../../../../src/app/error-pages/unauthorized/unauthorized.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_page_load_page_load_module__ = __webpack_require__("../../../../../src/app/shared/page-load/page-load.module.ts");
/* unused harmony export initAppConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 * Platform and Environment providers/directives/pipes
 */
// import { ENV_PROVIDERS } from './environment';

// App is our top level component




// Core providers




// Authorization providers





// Main style entry point
// import '../styles.css';








// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_8__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]
]);
function initAppConfig(appConfigSvc) {
    return function () { return appConfigSvc.load(); };
}
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__no_content__["a" /* NoContentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__error_pages_unauthorized_unauthorized_component__["a" /* UnauthorizedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_21__customers_customers_module__["a" /* CustomerModule */],
            __WEBPACK_IMPORTED_MODULE_20__users_users_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_27__shared_page_load_page_load_module__["a" /* PageLoadingModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15__shared_auth_oidc_modules_auth_module__["a" /* AuthModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* APP_ROUTES */] /*, { useHash: false, preloadingStrategy: PreloadAllModules }*/)
        ],
        providers: [
            // ENV_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_24__shared_config_app_config_service__["a" /* AppConfigService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* APP_INITIALIZER */],
                useFactory: initAppConfig,
                deps: [__WEBPACK_IMPORTED_MODULE_24__shared_config_app_config_service__["a" /* AppConfigService */]],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_16__shared_auth_oidc_services_oidc_security_service__["a" /* OidcSecurityService */],
            __WEBPACK_IMPORTED_MODULE_17__shared_auth_oidc_modules_auth_configuration__["a" /* DefaultConfiguration */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_12__shared_auth_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_auth_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_18__shared_message_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_security_security_role_service__["a" /* SecurityRolesService */],
            __WEBPACK_IMPORTED_MODULE_23__shared_routing_can_deactivate_guard_service__["a" /* CanDeactivateGuardService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_security_permissions_service__["a" /* PermissionsService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_exceptions_exception_service__["a" /* ExceptionService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* ApplicationRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__no_content__ = __webpack_require__("../../../../../src/app/no-content/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__("../../../../../src/app/dashboard/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_pages_unauthorized_unauthorized_component__ = __webpack_require__("../../../../../src/app/error-pages/unauthorized/unauthorized.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });




var APP_ROUTES = [
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'unauthorized', component: __WEBPACK_IMPORTED_MODULE_3__error_pages_unauthorized_unauthorized_component__["a" /* UnauthorizedComponent */]
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_1__no_content__["a" /* NoContentComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__affiliations_shared_affiliation_model__ = __webpack_require__("../../../../../src/app/+affiliations/shared/affiliation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_oidc_services_oidc_security_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_oidc_modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_config_app_config_service__ = __webpack_require__("../../../../../src/app/shared/config/app.config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = (function () {
    function AppService(appConfig, oidcSecurityService) {
        this.appConfig = appConfig;
        this.oidcSecurityService = oidcSecurityService;
        this.authenticatedUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__affiliations_shared_affiliation_model__["a" /* Affiliation */]());
        this.debug_log_active = false;
        this.error_log_active = true;
        // Implementing a boolean to block multiple and concurrent calls
        // due to the distribution of calls to authorize, authorizedCallback and logoff
        this.authActive = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    AppService.prototype.initOIDC = function () {
        var openIDImplicitFlowConfiguration = new __WEBPACK_IMPORTED_MODULE_4__shared_auth_oidc_modules_auth_configuration__["c" /* OpenIDImplicitFlowConfiguration */]();
        var baseUrl = this.appConfig.get('public_url') || '';
        this.environment = this.appConfig.get('environment');
        if (this.environment && this.environment === 'local') {
            this.debug_log_active = true;
        }
        var config = new __WEBPACK_IMPORTED_MODULE_4__shared_auth_oidc_modules_auth_configuration__["a" /* DefaultConfiguration */]();
        // openIDImplicitFlowConfiguration.stsServer = config.stsServer;
        // openIDImplicitFlowConfiguration.redirect_url = config.redirect_url; // 'https://local.spokci.com/portal/';
        // openIDImplicitFlowConfiguration.post_logout_redirect_uri = config.post_logout_redirect_uri;
        // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
        // tslint:disable-next-line:max-line-length
        // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
        openIDImplicitFlowConfiguration.client_id = config.client_id;
        openIDImplicitFlowConfiguration.response_type = 'id_token token';
        openIDImplicitFlowConfiguration.scope = config.scope;
        openIDImplicitFlowConfiguration.start_checksession = false;
        openIDImplicitFlowConfiguration.silent_renew = false;
        openIDImplicitFlowConfiguration.startup_route = '/dashboard';
        // HTTP 403
        openIDImplicitFlowConfiguration.forbidden_route = '/unauthorized';
        // HTTP 401
        openIDImplicitFlowConfiguration.unauthorized_route = '/unauthorized';
        openIDImplicitFlowConfiguration.log_console_warning_active = this.error_log_active;
        // turn off debug once stable
        openIDImplicitFlowConfiguration.log_console_debug_active = this.debug_log_active;
        // id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time,
        // limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
        openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 30;
        this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration);
        this.oidcSecurityService.setConfigurationBaseUrl(baseUrl);
    };
    AppService.prototype.getAuthenticatedUser = function () {
        return this.authenticatedUser.share();
    };
    AppService.prototype.setAuthenticatedUser = function (affiliation) {
        this.authenticatedUser.next(affiliation);
    };
    AppService.prototype.logDebug = function (message, object) {
        if (this.debug_log_active) {
            console.log(message, object);
        }
    };
    AppService.prototype.getIsAuthorized = function () {
        if (this.oidcSecurityService.oidcSecurityCommon.retrieve(this.oidcSecurityService.oidcSecurityCommon.storage_is_authorized) !== '') {
            this.oidcSecurityService.isAuthorized = this.oidcSecurityService.oidcSecurityCommon.retrieve(this.oidcSecurityService.oidcSecurityCommon.storage_is_authorized);
        }
        return this.oidcSecurityService.isAuthorized;
    };
    AppService.prototype.logError = function (message, object) {
        if (this.error_log_active) {
            console.error(message, object);
        }
    };
    AppService.prototype.processLogin = function () {
        this.blockAuthCalls(true);
        return this.oidcSecurityService.authorizedCallback();
    };
    AppService.prototype.redirectToAuthorization = function () {
        if (this.canCallAuth()) {
            this.blockAuthCalls(true);
            this.oidcSecurityService.authorize();
        }
    };
    AppService.prototype.logoff = function () {
        if (this.canCallAuth()) {
            this.blockAuthCalls(true);
            this.oidcSecurityService.logoff();
        }
    };
    AppService.prototype.blockAuthCalls = function (setvalue) {
        this.authActive.next(setvalue);
    };
    AppService.prototype.canCallAuth = function () {
        if (this.authActive.getValue()) {
            this.logDebug('WARNING: simultaneous calls to authorization');
            return false;
        }
        return true;
    };
    AppService.prototype.refreshSession = function () {
        this.oidcSecurityService.refreshSession();
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_config_app_config_service__["a" /* AppConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_config_app_config_service__["a" /* AppConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_oidc_services_oidc_security_service__["a" /* OidcSecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_oidc_services_oidc_security_service__["a" /* OidcSecurityService */]) === "function" && _b || Object])
], AppService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <h1 id=\"dashboard-header\">Dashboard</h1>\n    <div>\n        <div>\n            <div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n.mdl-cell--col-3 {\n  width: 25%; }\n\n@media (max-width: 839px) and (min-width: 480px) {\n  .mdl-cell.mdl-cell--3-col {\n    width: 25%; } }\n\n@media (max-width: 479px) and (min-width: 320px) {\n  .mdl-cell.mdl-cell--3-col {\n    width: 10em;\n    margin: 0.5em auto; } }\n\n@media (max-width: 319px) {\n  .mdl-cell.mdl-cell--3-col {\n    width: 10em;\n    margin: 0.5em auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'dashboard',
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")],
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/error-pages/unauthorized/unauthorized.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_oidc_services_oidc_security_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnauthorizedComponent = (function () {
    function UnauthorizedComponent(oidcSecurityService) {
        this.oidcSecurityService = oidcSecurityService;
    }
    UnauthorizedComponent.prototype.logOff = function () {
        this.oidcSecurityService.logoff();
    };
    return UnauthorizedComponent;
}());
UnauthorizedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-unauthorized',
        template: "<h1>Unauthorized</h1>\n            <div class='container'>\n              <div>\n                <p>We're having trouble logging you in. Would you like to try logging in again.</p>\n              </div>\n              <div><button (click)='logOff()'>Sign In</button></div>\n            </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_oidc_services_oidc_security_service__["a" /* OidcSecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_oidc_services_oidc_security_service__["a" /* OidcSecurityService */]) === "function" && _a || Object])
], UnauthorizedComponent);

var _a;
//# sourceMappingURL=unauthorized.component.js.map

/***/ }),

/***/ "../../../../../src/app/no-content/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__("../../../../../src/app/no-content/no-content.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/no-content/no-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);

//# sourceMappingURL=no-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(appService) {
        this.appService = appService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.appService.getIsAuthorized()) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth.guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OpenIDImplicitFlowConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthConfiguration; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultConfiguration = (function () {
    function DefaultConfiguration() {
        this.base_url = '';
        this.stsServer = this.base_url + "/identity";
        this.redirect_url = this.base_url + "/portal/";
        this.client_id = 'portal.web';
        this.response_type = 'id_token token';
        // For some oidc, we require resource identifier to be provided along with the request.
        this.resource = '';
        this.scope = 'openid profile portal.api';
        this.post_logout_redirect_uri = this.base_url + "/portal/";
        this.start_checksession = false;
        this.silent_renew = true;
        this.startup_route = '/dashboard';
        // HTTP 403
        this.forbidden_route = '/unauthorized';
        // HTTP 401
        this.unauthorized_route = '/unauthorized';
        this.log_console_warning_active = true;
        this.log_console_debug_active = false;
        // id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time,
        // limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
        this.max_id_token_iat_offset_allowed_in_seconds = 6;
        this.override_well_known_configuration = false;
        this.override_well_known_configuration_url = this.base_url + "/identity/.well-known/openid-configuration";
        // identity/.well-known/openid-configuration
    }
    return DefaultConfiguration;
}());

var OpenIDImplicitFlowConfiguration = (function () {
    function OpenIDImplicitFlowConfiguration() {
    }
    return OpenIDImplicitFlowConfiguration;
}());

var AuthConfiguration = (function () {
    function AuthConfiguration(defaultConfig) {
        this.defaultConfig = defaultConfig;
    }
    Object.defineProperty(AuthConfiguration.prototype, "stsServer", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.stsServer || this.defaultConfig.stsServer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "redirect_url", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.redirect_url || this.defaultConfig.redirect_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "client_id", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.client_id || this.defaultConfig.client_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "response_type", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.response_type || this.defaultConfig.response_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "resource", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.resource || this.defaultConfig.resource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "scope", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.scope || this.defaultConfig.scope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "post_logout_redirect_uri", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.post_logout_redirect_uri || this.defaultConfig.post_logout_redirect_uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "start_checksession", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.start_checksession || this.defaultConfig.start_checksession;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "silent_renew", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.silent_renew || this.defaultConfig.silent_renew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "startup_route", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.startup_route || this.defaultConfig.startup_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "forbidden_route", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.forbidden_route || this.defaultConfig.forbidden_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "unauthorized_route", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.unauthorized_route || this.defaultConfig.unauthorized_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "log_console_warning_active", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.log_console_warning_active || this.defaultConfig.log_console_warning_active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "log_console_debug_active", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.log_console_debug_active || this.defaultConfig.log_console_debug_active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "max_id_token_iat_offset_allowed_in_seconds", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds || this.defaultConfig.max_id_token_iat_offset_allowed_in_seconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "override_well_known_configuration", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.override_well_known_configuration || this.defaultConfig.override_well_known_configuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthConfiguration.prototype, "override_well_known_configuration_url", {
        get: function () {
            return this.openIDImplicitFlowConfiguration.override_well_known_configuration_url || this.defaultConfig.override_well_known_configuration_url;
        },
        enumerable: true,
        configurable: true
    });
    AuthConfiguration.prototype.init = function (openIDImplicitFlowConfiguration) {
        this.openIDImplicitFlowConfiguration = openIDImplicitFlowConfiguration;
    };
    AuthConfiguration.prototype.setBaseUrl = function (base) {
        this.openIDImplicitFlowConfiguration.base_url = base;
        this.openIDImplicitFlowConfiguration.stsServer = base + '/identity';
        this.openIDImplicitFlowConfiguration.redirect_url = base + '/portal/';
        this.openIDImplicitFlowConfiguration.post_logout_redirect_uri = base + '/portal/';
        this.openIDImplicitFlowConfiguration.override_well_known_configuration_url = base + '/identity/.well-known/openid-configuration';
    };
    return AuthConfiguration;
}());
AuthConfiguration = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [DefaultConfiguration])
], AuthConfiguration);

//# sourceMappingURL=auth.configuration.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/modules/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_oidc_security_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_oidc_security_validation__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_oidc_security_check_session__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.check-session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_oidc_security_silent_renew__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.silent-renew.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_oidc_security_user_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.user-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_well_known_endpoints__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/auth.well-known-endpoints.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = AuthModule_1 = (function () {
    function AuthModule() {
    }
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_oidc_security_service__["a" /* OidcSecurityService */],
                __WEBPACK_IMPORTED_MODULE_3__services_oidc_security_validation__["a" /* OidcSecurityValidation */],
                __WEBPACK_IMPORTED_MODULE_4__services_oidc_security_check_session__["a" /* OidcSecurityCheckSession */],
                __WEBPACK_IMPORTED_MODULE_5__services_oidc_security_silent_renew__["a" /* OidcSecuritySilentRenew */],
                __WEBPACK_IMPORTED_MODULE_6__services_oidc_security_user_service__["a" /* OidcSecurityUserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_oidc_security_common__["a" /* OidcSecurityCommon */],
                __WEBPACK_IMPORTED_MODULE_2__auth_configuration__["b" /* AuthConfiguration */],
                __WEBPACK_IMPORTED_MODULE_2__auth_configuration__["a" /* DefaultConfiguration */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */]
            ]
        };
    };
    AuthModule.forChild = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_oidc_security_service__["a" /* OidcSecurityService */],
                __WEBPACK_IMPORTED_MODULE_3__services_oidc_security_validation__["a" /* OidcSecurityValidation */],
                __WEBPACK_IMPORTED_MODULE_4__services_oidc_security_check_session__["a" /* OidcSecurityCheckSession */],
                __WEBPACK_IMPORTED_MODULE_5__services_oidc_security_silent_renew__["a" /* OidcSecuritySilentRenew */],
                __WEBPACK_IMPORTED_MODULE_6__services_oidc_security_user_service__["a" /* OidcSecurityUserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_oidc_security_common__["a" /* OidcSecurityCommon */],
                __WEBPACK_IMPORTED_MODULE_2__auth_configuration__["b" /* AuthConfiguration */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */]
            ]
        };
    };
    return AuthModule;
}());
AuthModule = AuthModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])()
], AuthModule);

var AuthModule_1;
//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/oidc.user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OIDCUser; });
var OIDCUser = (function () {
    function OIDCUser() {
        this.authorizationComplete = false;
    }
    OIDCUser.prototype.toStorageString = function () {
        var b = {
            'access_token': this.access_token,
            'id_token': this.id_token,
            'user_data': this.user_data,
            'session_state': this.session_state,
            'state': this.state,
            'token_type': this.token_type,
            'customer_id': this.customer_id,
            'name': this.name,
            'user_id': this.user_id,
            'scope': this.scope,
            'profile': this.profile,
            'expires_at': this.expires_at,
            'expires_in': this.expires_in
        };
        return b;
    };
    return OIDCUser;
}());

//# sourceMappingURL=oidc.user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/auth.well-known-endpoints.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthWellKnownEndpoints; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthWellKnownEndpoints = (function () {
    function AuthWellKnownEndpoints(http, authConfiguration, oidcSecurityCommon) {
        var _this = this;
        this.http = http;
        this.authConfiguration = authConfiguration;
        this.oidcSecurityCommon = oidcSecurityCommon;
        this.onWellKnownEndpointsLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */](true);
        this.getWellKnownEndpoints = function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            var url = _this.authConfiguration.stsServer + '/.well-known/openid-configuration';
            if (_this.authConfiguration.override_well_known_configuration) {
                url = _this.authConfiguration.override_well_known_configuration_url;
            }
            return _this.http.get(url, {
                headers: headers,
                body: ''
            }).map(function (res) { return res.json(); });
        };
    }
    AuthWellKnownEndpoints.prototype.setupModule = function () {
        var _this = this;
        var data = this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_well_known_endpoints);
        this.oidcSecurityCommon.logDebug(data);
        if (data && data !== '') {
            this.oidcSecurityCommon.logDebug('AuthWellKnownEndpoints already defined');
            this.issuer = data.issuer;
            this.jwks_uri = data.jwks_uri;
            this.authorization_endpoint = data.authorization_endpoint;
            this.token_endpoint = data.token_endpoint;
            this.userinfo_endpoint = data.userinfo_endpoint;
            if (data.end_session_endpoint) {
                this.end_session_endpoint = data.end_session_endpoint;
            }
            ;
            if (data.check_session_iframe) {
                this.check_session_iframe = data.check_session_iframe;
            }
            ;
            if (data.revocation_endpoint) {
                this.revocation_endpoint = data.revocation_endpoint;
            }
            ;
            if (data.introspection_endpoint) {
                this.introspection_endpoint = data.introspection_endpoint;
            }
            this.onWellKnownEndpointsLoaded.emit();
        }
        else {
            this.oidcSecurityCommon.logDebug('AuthWellKnownEndpoints first time, get from the server');
            this.getWellKnownEndpoints()
                .subscribe(function (resData) {
                _this.issuer = resData.issuer;
                _this.jwks_uri = resData.jwks_uri;
                _this.authorization_endpoint = resData.authorization_endpoint;
                _this.token_endpoint = resData.token_endpoint;
                _this.userinfo_endpoint = resData.userinfo_endpoint;
                if (resData.end_session_endpoint) {
                    _this.end_session_endpoint = resData.end_session_endpoint;
                }
                ;
                if (resData.check_session_iframe) {
                    _this.check_session_iframe = resData.check_session_iframe;
                }
                ;
                if (resData.revocation_endpoint) {
                    _this.revocation_endpoint = resData.revocation_endpoint;
                }
                ;
                if (resData.introspection_endpoint) {
                    _this.introspection_endpoint = resData.introspection_endpoint;
                }
                _this.oidcSecurityCommon.store(_this.oidcSecurityCommon.storage_well_known_endpoints, resData);
                _this.oidcSecurityCommon.logDebug(resData);
                _this.onWellKnownEndpointsLoaded.emit();
            });
        }
    };
    return AuthWellKnownEndpoints;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], AuthWellKnownEndpoints.prototype, "onWellKnownEndpointsLoaded", void 0);
AuthWellKnownEndpoints = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__modules_auth_configuration__["b" /* AuthConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modules_auth_configuration__["b" /* AuthConfiguration */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__oidc_security_common__["a" /* OidcSecurityCommon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__oidc_security_common__["a" /* OidcSecurityCommon */]) === "function" && _d || Object])
], AuthWellKnownEndpoints);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.well-known-endpoints.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/oidc.security.check-session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_well_known_endpoints__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/auth.well-known-endpoints.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcSecurityCheckSession; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// http://openid.net/specs/openid-connect-session-1_0-ID4.html
var OidcSecurityCheckSession = (function () {
    function OidcSecurityCheckSession(authConfiguration, oidcSecurityCommon, authWellKnownEndpoints) {
        this.authConfiguration = authConfiguration;
        this.oidcSecurityCommon = oidcSecurityCommon;
        this.authWellKnownEndpoints = authWellKnownEndpoints;
        this.onCheckSessionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */](true);
    }
    OidcSecurityCheckSession.prototype.init = function () {
        var _this = this;
        this.sessionIframe = window.document.createElement('iframe');
        this.oidcSecurityCommon.logDebug(this.sessionIframe);
        this.sessionIframe.style.display = 'none';
        this.sessionIframe.src = this.authWellKnownEndpoints.check_session_iframe;
        window.document.body.appendChild(this.sessionIframe);
        this.iframeMessageEvent = this.messageHandler.bind(this);
        window.addEventListener('message', this.iframeMessageEvent, false);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.sessionIframe.onload = function () {
                observer.next(_this);
                observer.complete();
            };
        });
    };
    OidcSecurityCheckSession.prototype.pollServerSession = function (session_state, clientId) {
        var _this = this;
        var source = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(3000, 3000)
            .timeInterval()
            .pluck('interval')
            .take(10000);
        var subscription = source.subscribe(function () {
            _this.oidcSecurityCommon.logDebug(_this.sessionIframe);
            _this.sessionIframe.contentWindow.postMessage(clientId + ' ' + session_state, _this.authConfiguration.stsServer);
        }, function (err) {
            _this.oidcSecurityCommon.logError('pollServerSession error: ' + err);
        }, function () {
            _this.oidcSecurityCommon.logDebug('checksession pollServerSession completed');
        });
    };
    OidcSecurityCheckSession.prototype.messageHandler = function (e) {
        if (e.origin === this.authConfiguration.stsServer &&
            e.source === this.sessionIframe.contentWindow) {
            if (e.data === 'error') {
                this.oidcSecurityCommon.logWarning('error from checksession messageHandler');
            }
            else if (e.data === 'changed') {
                this.onCheckSessionChanged.emit();
            }
            else {
                this.oidcSecurityCommon.logDebug(e.data + ' from checksession messageHandler');
            }
        }
    };
    return OidcSecurityCheckSession;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], OidcSecurityCheckSession.prototype, "onCheckSessionChanged", void 0);
OidcSecurityCheckSession = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__modules_auth_configuration__["b" /* AuthConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__modules_auth_configuration__["b" /* AuthConfiguration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__oidc_security_common__["a" /* OidcSecurityCommon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__oidc_security_common__["a" /* OidcSecurityCommon */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */]) === "function" && _d || Object])
], OidcSecurityCheckSession);

var _a, _b, _c, _d;
//# sourceMappingURL=oidc.security.check-session.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcSecurityCommon; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OidcSecurityCommon = (function () {
    function OidcSecurityCommon(authConfiguration) {
        this.authConfiguration = authConfiguration;
        this.storage_access_token = 'authorizationData';
        this.storage_id_token = 'authorizationDataIdToken';
        this.storage_is_authorized = '_isAuthorized';
        this.storage_user_data = 'userData';
        this.storage_auth_nonce = 'authNonce';
        this.storage_auth_state_control = 'authStateControl';
        this.storage_well_known_endpoints = 'wellknownendpoints';
    }
    OidcSecurityCommon.prototype.setupModule = function () {
        // this.storage = sessionStorage;
        this.storage = localStorage;
    };
    OidcSecurityCommon.prototype.setStorage = function (storage) {
        this.storage = storage;
    };
    OidcSecurityCommon.prototype.retrieve = function (key) {
        if (this.storage) {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    OidcSecurityCommon.prototype.store = function (key, value) {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(value));
        }
    };
    OidcSecurityCommon.prototype.resetStorageData = function () {
        this.store(this.storage_access_token, '');
        this.store(this.storage_id_token, '');
        this.store(this.storage_is_authorized, false);
        this.store(this.storage_user_data, '');
    };
    OidcSecurityCommon.prototype.getAccessToken = function () {
        return this.retrieve(this.storage_access_token);
    };
    OidcSecurityCommon.prototype.logError = function (message) {
        console.error(message);
    };
    OidcSecurityCommon.prototype.logWarning = function (message) {
        if (this.authConfiguration.log_console_warning_active) {
            console.warn(message);
        }
    };
    OidcSecurityCommon.prototype.logDebug = function (message) {
        if (this.authConfiguration.log_console_debug_active) {
            console.log(message);
        }
    };
    return OidcSecurityCommon;
}());
OidcSecurityCommon = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modules_auth_configuration__["b" /* AuthConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modules_auth_configuration__["b" /* AuthConfiguration */]) === "function" && _a || Object])
], OidcSecurityCommon);

var _a;
//# sourceMappingURL=oidc.security.common.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__oidc_security_validation__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__oidc_security_check_session__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.check-session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__oidc_security_silent_renew__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.silent-renew.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__oidc_security_user_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.user-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_well_known_endpoints__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/auth.well-known-endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__oidc_user_model__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/oidc.user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTHERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcSecurityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AUTHERROR;
(function (AUTHERROR) {
    AUTHERROR[AUTHERROR["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    AUTHERROR[AUTHERROR["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    AUTHERROR[AUTHERROR["INVALID_TOKEN"] = 498] = "INVALID_TOKEN";
    AUTHERROR[AUTHERROR["INVALID_SIGNATURE"] = 900] = "INVALID_SIGNATURE";
    AUTHERROR[AUTHERROR["FORBIDDEN"] = 403] = "FORBIDDEN";
    AUTHERROR[AUTHERROR["LOGIN_TOKEN_EXPIRED"] = 408] = "LOGIN_TOKEN_EXPIRED";
    AUTHERROR[AUTHERROR["TOKEN_IAT_TIMEOUT"] = 800] = "TOKEN_IAT_TIMEOUT";
    AUTHERROR[AUTHERROR["UNSPECIFIED_SERVER_ERROR"] = 500] = "UNSPECIFIED_SERVER_ERROR";
    AUTHERROR[AUTHERROR["TOKEN_STATE_ERROR"] = 498] = "TOKEN_STATE_ERROR";
    AUTHERROR[AUTHERROR["TOKEN_CLIENTID_MISMATCH"] = 499] = "TOKEN_CLIENTID_MISMATCH";
})(AUTHERROR || (AUTHERROR = {}));
var OidcSecurityService = (function () {
    function OidcSecurityService(http, authConfiguration, router, oidcSecurityCheckSession, oidcSecuritySilentRenew, oidcSecurityUserService, oidcSecurityCommon, authWellKnownEndpoints) {
        this.http = http;
        this.authConfiguration = authConfiguration;
        this.router = router;
        this.oidcSecurityCheckSession = oidcSecurityCheckSession;
        this.oidcSecuritySilentRenew = oidcSecuritySilentRenew;
        this.oidcSecurityUserService = oidcSecurityUserService;
        this.oidcSecurityCommon = oidcSecurityCommon;
        this.authWellKnownEndpoints = authWellKnownEndpoints;
        this.oidcUser = new __WEBPACK_IMPORTED_MODULE_14__oidc_user_model__["a" /* OIDCUser */]();
        this.oidcUserShare = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](this.oidcUser);
        this.authWellKnownEndpointsLoaded = false;
        this.authBlock = false;
    }
    OidcSecurityService.prototype.setupModule = function (openIDImplicitFlowConfiguration) {
        var _this = this;
        this.authConfiguration.init(openIDImplicitFlowConfiguration);
        this.oidcSecurityValidation = new __WEBPACK_IMPORTED_MODULE_8__oidc_security_validation__["a" /* OidcSecurityValidation */](this.oidcSecurityCommon);
        this.oidcSecurityCheckSession.onCheckSessionChanged.subscribe(function () { _this.onCheckSessionChanged(); });
        this.authWellKnownEndpoints.onWellKnownEndpointsLoaded.subscribe(function () { _this.onWellKnownEndpointsLoaded(); });
        this.oidcSecurityCommon.setupModule();
        this.oidcSecurityUserService.setupModule();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        if (this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_is_authorized) !== '') {
            this.isAuthorized = this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_is_authorized);
        }
        this.oidcSecurityCommon.logDebug('STS server: ' + this.authConfiguration.stsServer);
        this.authWellKnownEndpoints.setupModule();
    };
    OidcSecurityService.prototype.setConfigurationBaseUrl = function (baseurl) {
        this.authConfiguration.setBaseUrl(baseurl);
    };
    OidcSecurityService.prototype.getToken = function () {
        return decodeURIComponent(this.oidcSecurityCommon.getAccessToken());
    };
    OidcSecurityService.prototype.getUserData = function () {
        if (!this.isAuthorized) {
            this.oidcSecurityCommon.logError('User must be logged in before you can get the user data!');
        }
        return this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_user_data);
    };
    OidcSecurityService.prototype.getAuthenticatedUser = function () {
        return this.oidcUserShare.share();
    };
    OidcSecurityService.prototype.setAuthenticatedUser = function (oidcuser) {
        this.oidcUserShare.next(oidcuser);
    };
    OidcSecurityService.prototype.finishLogin = function () {
        if (!this.oidcSecurityValidation.config_validate_response_type(this.authConfiguration.response_type)) {
            // invalid response_type
            return;
        }
        this.resetAuthorizationData();
        this.oidcSecurityCommon.logDebug('BEGIN Authorize, no auth data');
        var nonce = 'N' + Math.random() + '' + Date.now();
        var state = Date.now() + '' + Math.random();
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_auth_state_control, state);
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_auth_nonce, nonce);
        this.oidcSecurityCommon.logDebug('AuthorizedController created. local state: ' + this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_auth_state_control));
        var url = this.createAuthorizeUrl(nonce, state);
        window.location.href = url;
    };
    OidcSecurityService.prototype.authorize = function () {
        var _this = this;
        var data = this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_well_known_endpoints);
        if (data && data !== '') {
            this.authWellKnownEndpointsLoaded = true;
        }
        if (!this.authWellKnownEndpointsLoaded) {
            this.oidcSecurityCommon.logError('Well known endpoints must be loaded before user can login!');
            // try to retrieve well known endpoints now
            this.authWellKnownEndpoints.onWellKnownEndpointsLoaded.subscribe(function (next) {
                _this.finishLogin();
            }, function (error) {
                _this.oidcSecurityCommon.logError('Unable to load well known endpoints');
            });
            return;
        }
        this.finishLogin();
    };
    OidcSecurityService.prototype.setStorage = function (storage) {
        this.oidcSecurityCommon.storage = storage;
        this.authWellKnownEndpointsLoaded = false;
        this.authWellKnownEndpoints.setupModule();
    };
    OidcSecurityService.prototype.authorizedCallback = function () {
        var _this = this;
        this.oidcSecurityCommon.logDebug('BEGIN authorizedCallback, no auth data');
        this.resetAuthorizationData();
        var __self = this;
        var hash = window.location.hash.substr(1);
        var result = hash.split('&').reduce(function (res, item) {
            var parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
        }, {});
        this.oidcSecurityCommon.logDebug(result);
        this.oidcSecurityCommon.logDebug('authorizedCallback created, begin token validation');
        var access_token = '';
        var id_token = '';
        var authResponseIsValid = false;
        var decoded_id_token;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (obs) {
            var oidcUser = new __WEBPACK_IMPORTED_MODULE_14__oidc_user_model__["a" /* OIDCUser */]();
            _this.getSigningKeys().subscribe(function (jwtKeys) {
                __self.jwtKeys = jwtKeys;
                if (result.error) {
                    var err = new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](result.error.status, result.error.message);
                    __self.handleError(err);
                    obs.error(err);
                }
                else {
                    oidcUser.scope = result.scope || '';
                    oidcUser.session_state = result.session_state || '';
                    oidcUser.state = result.state || '';
                    oidcUser.token_type = result.token_type || '';
                    oidcUser.expires_in = result.expires_in || '';
                    oidcUser.expires_at = result.expires_at || '';
                    // validate state
                    // tslint:disable-next-line:max-line-length
                    if (_this.oidcSecurityValidation.validateStateFromHashCallback(result.state, _this.oidcSecurityCommon.retrieve(_this.oidcSecurityCommon.storage_auth_state_control))) {
                        if (_this.authConfiguration.response_type === 'id_token token') {
                            access_token = result.access_token;
                            oidcUser.access_token = access_token;
                        }
                        id_token = result.id_token;
                        oidcUser.id_token = id_token;
                        var headerDecoded = void 0;
                        decoded_id_token = _this.oidcSecurityValidation.getPayloadFromToken(id_token, false);
                        headerDecoded = _this.oidcSecurityValidation.getHeaderFromToken(id_token, false);
                        // validate jwt signature
                        if (_this.oidcSecurityValidation.validate_signature_id_token(id_token, _this.jwtKeys)) {
                            // validate nonce
                            if (_this.oidcSecurityValidation.validate_id_token_nonce(decoded_id_token, _this.oidcSecurityCommon.retrieve(_this.oidcSecurityCommon.storage_auth_nonce))) {
                                // validate required fields id_token
                                if (_this.oidcSecurityValidation.validate_required_id_token(decoded_id_token)) {
                                    // validate max offset from the id_token issue to now
                                    if (_this.oidcSecurityValidation.validate_id_token_iat_max_offset(decoded_id_token, _this.authConfiguration.max_id_token_iat_offset_allowed_in_seconds)) {
                                        // validate iss
                                        if (_this.oidcSecurityValidation.validate_id_token_iss(decoded_id_token, _this.authWellKnownEndpoints.issuer)) {
                                            // validate aud
                                            if (_this.oidcSecurityValidation.validate_id_token_aud(decoded_id_token, _this.authConfiguration.client_id)) {
                                                // validate_id_token_exp_not_expired
                                                if (_this.oidcSecurityValidation.validate_id_token_exp_not_expired(decoded_id_token)) {
                                                    // flow id_token token
                                                    if (_this.authConfiguration.response_type === 'id_token token') {
                                                        // valiadate at_hash and access_token
                                                        if (_this.oidcSecurityValidation.validate_id_token_at_hash(access_token, decoded_id_token.at_hash) || !access_token) {
                                                            authResponseIsValid = true;
                                                            _this.successful_validation();
                                                        }
                                                        else {
                                                            _this.oidcSecurityCommon.logWarning('authorizedCallback incorrect at_hash');
                                                        }
                                                    }
                                                    else {
                                                        authResponseIsValid = true;
                                                        _this.successful_validation();
                                                    }
                                                }
                                                else {
                                                    obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.LOGIN_TOKEN_EXPIRED, 'Login token has expired, try loging in again'));
                                                    _this.oidcSecurityCommon.logWarning('authorizedCallback token expired');
                                                }
                                            }
                                            else {
                                                obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.TOKEN_CLIENTID_MISMATCH, 'Authorization server error: Login failed, try logging in again.'));
                                                _this.oidcSecurityCommon.logWarning('authorizedCallback incorrect aud');
                                            }
                                        }
                                        else {
                                            obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.INVALID_TOKEN, 'Authorization server error: Login failed due to the authorization server not matching the expected server url.'));
                                            _this.oidcSecurityCommon.logWarning('authorizedCallback incorrect iss does not match authWellKnownEndpoints issuer');
                                        }
                                    }
                                    else {
                                        obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.LOGIN_TOKEN_EXPIRED, 'Authorization server error: Validation due to token timeout, try logging in again.'));
                                        _this.oidcSecurityCommon.logWarning('authorizedCallback Validation, iat rejected id_token was issued too far away from the current time');
                                    }
                                }
                                else {
                                    obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.INVALID_TOKEN, 'Authorization server error'));
                                    _this.oidcSecurityCommon.logDebug('authorizedCallback Validation, one of the REQUIRED properties missing from id_token');
                                }
                            }
                            else {
                                obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.INVALID_TOKEN, 'Authorization server error'));
                                _this.oidcSecurityCommon.logWarning('authorizedCallback incorrect nonce');
                            }
                        }
                        else {
                            obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.INVALID_SIGNATURE, 'Authorization server error'));
                            _this.oidcSecurityCommon.logDebug('authorizedCallback Signature validation failed id_token');
                        }
                    }
                    else {
                        obs.error(new __WEBPACK_IMPORTED_MODULE_15_app_shared_exceptions_exception_model__["a" /* Exception */](AUTHERROR.TOKEN_STATE_ERROR, 'Authorization server error'));
                        _this.oidcSecurityCommon.logWarning('authorizedCallback incorrect state');
                    }
                }
                if (authResponseIsValid) {
                    oidcUser.authorizationComplete = true;
                    _this.setAuthorizationData(access_token, id_token);
                    // flow id_token token
                    if (_this.authConfiguration.response_type === 'id_token token') {
                        _this.oidcSecurityUserService.initUserData()
                            .subscribe(function () {
                            _this.oidcSecurityCommon.logDebug('authorizedCallback id_token token flow');
                            if (_this.oidcSecurityValidation.validate_userdata_sub_id_token(decoded_id_token.sub, _this.oidcSecurityUserService.userData.sub)) {
                                oidcUser.user_data = _this.oidcSecurityUserService.userData;
                                _this.oidcSecurityCommon.logDebug(_this.oidcSecurityCommon.retrieve(_this.oidcSecurityCommon.storage_access_token));
                                _this.oidcSecurityCommon.logDebug(_this.oidcSecurityUserService.userData);
                                _this.setUserData(oidcUser);
                                obs.next(oidcUser);
                                __self.oidcUserShare.next(oidcUser);
                                if (_this.authConfiguration.start_checksession) {
                                    _this.oidcSecurityCheckSession.init().subscribe(function () {
                                        _this.oidcSecurityCheckSession.pollServerSession(result.session_state, _this.authConfiguration.client_id);
                                    });
                                }
                                if (_this.authConfiguration.silent_renew) {
                                    _this.oidcSecuritySilentRenew.initRenew();
                                }
                                _this.runTokenValidation();
                                _this.router.navigate([_this.authConfiguration.startup_route]);
                                obs.complete();
                            }
                            else {
                                _this.oidcSecurityCommon.logWarning('authorizedCallback, User data sub does not match sub in id_token');
                                _this.oidcSecurityCommon.logDebug('authorizedCallback, token(s) validation failed, resetting');
                                _this.resetAuthorizationData();
                                _this.router.navigate([_this.authConfiguration.unauthorized_route]);
                            }
                        });
                    }
                    else {
                        _this.oidcSecurityCommon.logDebug('authorizedCallback id_token flow');
                        _this.oidcSecurityCommon.logDebug(_this.oidcSecurityCommon.retrieve(_this.oidcSecurityCommon.storage_access_token));
                        // userData is set to the id_token decoded. No access_token.
                        _this.oidcSecurityUserService.userData = decoded_id_token;
                        if (_this.authConfiguration.start_checksession) {
                            _this.oidcSecurityCheckSession.init().subscribe(function () {
                                _this.oidcSecurityCheckSession.pollServerSession(result.session_state, _this.authConfiguration.client_id);
                            });
                        }
                        if (_this.authConfiguration.silent_renew) {
                            _this.oidcSecuritySilentRenew.initRenew();
                        }
                        obs.next(oidcUser);
                        __self.oidcUserShare.next(oidcUser);
                        _this.runTokenValidation();
                        _this.router.navigate([_this.authConfiguration.startup_route]);
                        obs.complete();
                    }
                }
                else {
                    _this.oidcSecurityCommon.logDebug('authorizedCallback, token(s) validation failed, resetting');
                    _this.resetAuthorizationData();
                    _this.router.navigate([_this.authConfiguration.unauthorized_route]);
                    obs.error({ status: 401, message: 'Login validation failed, not authorized. Try logging in again.' });
                }
            }, function (err) { obs.error({ code: 403, message: 'Token key validation failed', error: err }, err); });
        });
    };
    OidcSecurityService.prototype.logoff = function () {
        this.oidcSecurityCommon.logDebug('BEGIN Authorize, no auth data');
        if (this.authBlock) {
            return;
        }
        else {
            this.authBlock = true;
        }
        // /connect/endsession?id_token_hint=...&post_logout_redirect_uri=https://myapp.com
        if (this.authWellKnownEndpoints.end_session_endpoint) {
            var authorizationEndsessionUrl = this.authWellKnownEndpoints.end_session_endpoint;
            var id_token_hint = this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_id_token);
            var post_logout_redirect_uri = this.authConfiguration.post_logout_redirect_uri;
            var url = authorizationEndsessionUrl + '?' +
                'id_token_hint=' + encodeURIComponent(id_token_hint) + '&' +
                'post_logout_redirect_uri=' + encodeURIComponent(post_logout_redirect_uri);
            this.resetAuthorizationData();
            if (this.authConfiguration.start_checksession && this.checkSessionChanged) {
                this.oidcSecurityCommon.logDebug('only local login cleaned up, server session has changed');
            }
            else {
                window.location.href = url;
            }
        }
        else {
            this.resetAuthorizationData();
            this.oidcSecurityCommon.logDebug('only local login cleaned up, no end_session_endpoint');
        }
    };
    OidcSecurityService.prototype.successful_validation = function () {
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_auth_nonce, '');
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_auth_state_control, '');
        this.oidcSecurityCommon.logDebug('AuthorizedCallback token(s) validated, continue');
    };
    OidcSecurityService.prototype.refreshSession = function () {
        this.oidcSecurityCommon.logDebug('BEGIN refresh session Authorize');
        var nonce = 'N' + Math.random() + '' + Date.now();
        var state = Date.now() + '' + Math.random();
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_auth_state_control, state);
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_auth_nonce, nonce);
        this.oidcSecurityCommon.logDebug('RefreshSession created. adding myautostate: ' + this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_auth_state_control));
        var url = this.createAuthorizeUrl(nonce, state);
        this.oidcSecuritySilentRenew.startRenew(url);
    };
    OidcSecurityService.prototype.setAuthorizationData = function (access_token, id_token) {
        if (this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_access_token) !== '') {
            this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_access_token, '');
        }
        this.oidcSecurityCommon.logDebug(access_token);
        this.oidcSecurityCommon.logDebug(id_token);
        this.oidcSecurityCommon.logDebug('storing to storage, getting the roles');
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_access_token, access_token);
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_id_token, id_token);
        this.isAuthorized = true;
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_is_authorized, true);
    };
    OidcSecurityService.prototype.setUserData = function (oidcUser) {
        if (this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_user_data) !== '') {
            this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_user_data, '');
        }
        this.oidcSecurityCommon.store(this.oidcSecurityCommon.storage_user_data, oidcUser.toStorageString());
    };
    OidcSecurityService.prototype.createAuthorizeUrl = function (nonce, state) {
        var authorizationUrl = this.authWellKnownEndpoints.authorization_endpoint, client_id = this.authConfiguration.client_id, redirect_uri = this.authConfiguration.redirect_url, response_type = this.authConfiguration.response_type, scope = this.authConfiguration.scope;
        var url = authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);
        return url;
    };
    OidcSecurityService.prototype.resetAuthorizationData = function () {
        this.isAuthorized = false;
        this.oidcSecurityCommon.resetStorageData();
        this.checkSessionChanged = false;
    };
    OidcSecurityService.prototype.handleError = function (error) {
        this.oidcSecurityCommon.logError(error);
        if (error.status === 403) {
            this.router.navigate([this.authConfiguration.forbidden_route]);
        }
        else if (error.status === 401) {
            this.resetAuthorizationData();
            this.router.navigate([this.authConfiguration.unauthorized_route]);
        }
    };
    OidcSecurityService.prototype.onCheckSessionChanged = function () {
        this.oidcSecurityCommon.logDebug('onCheckSessionChanged');
        this.checkSessionChanged = true;
    };
    OidcSecurityService.prototype.onWellKnownEndpointsLoaded = function () {
        this.oidcSecurityCommon.logDebug('onWellKnownEndpointsLoaded');
        this.authWellKnownEndpointsLoaded = true;
    };
    OidcSecurityService.prototype.runGetSigningKeys = function () {
        var _this = this;
        this.getSigningKeys()
            .subscribe(function (jwtKeys) { return _this.jwtKeys = jwtKeys; }, function (error) { return _this.errorMessage = error; });
    };
    OidcSecurityService.prototype.getSigningKeys = function () {
        this.oidcSecurityCommon.logDebug('jwks_uri: ' + this.authWellKnownEndpoints.jwks_uri);
        return this.http.get(this.authWellKnownEndpoints.jwks_uri)
            .map(this.extractData)
            .catch(this.handleErrorGetSigningKeys);
    };
    OidcSecurityService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    OidcSecurityService.prototype.handleErrorGetSigningKeys = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(errMsg);
    };
    // NOTE -- this code seems to be broken
    // instead of renewing the token it forces user to logout
    OidcSecurityService.prototype.runTokenValidation = function () {
        var _this = this;
        if (this.authConfiguration.start_checksession) {
            var source = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].timer(3000, 3000)
                .timeInterval()
                .pluck('interval')
                .take(10000);
            var subscription = source.subscribe(function () {
                if (_this.isAuthorized) {
                    if (_this.oidcSecurityValidation.isTokenExpired(_this.oidcSecurityCommon.retrieve(_this.oidcSecurityCommon.storage_id_token))) {
                        _this.oidcSecurityCommon.logDebug('IsAuthorized: id_token isTokenExpired, start silent renew if active');
                        if (_this.authConfiguration.silent_renew) {
                            _this.refreshSession();
                        }
                        else {
                            _this.resetAuthorizationData();
                        }
                    }
                }
            }, function (err) {
                _this.oidcSecurityCommon.logError('Error: ' + err);
            }, function () {
                _this.oidcSecurityCommon.logDebug('Completed');
            });
        }
    };
    return OidcSecurityService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]) === "function" && _a || Object)
], OidcSecurityService.prototype, "oidcUserShare", void 0);
OidcSecurityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__modules_auth_configuration__["b" /* AuthConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__modules_auth_configuration__["b" /* AuthConfiguration */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__oidc_security_check_session__["a" /* OidcSecurityCheckSession */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__oidc_security_check_session__["a" /* OidcSecurityCheckSession */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__oidc_security_silent_renew__["a" /* OidcSecuritySilentRenew */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__oidc_security_silent_renew__["a" /* OidcSecuritySilentRenew */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__oidc_security_user_service__["a" /* OidcSecurityUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__oidc_security_user_service__["a" /* OidcSecurityUserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__oidc_security_common__["a" /* OidcSecurityCommon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__oidc_security_common__["a" /* OidcSecurityCommon */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_13__auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */]) === "function" && _j || Object])
], OidcSecurityService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=oidc.security.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/oidc.security.silent-renew.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcSecuritySilentRenew; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OidcSecuritySilentRenew = (function () {
    function OidcSecuritySilentRenew(oidcSecurityCommon) {
        this.oidcSecurityCommon = oidcSecurityCommon;
    }
    OidcSecuritySilentRenew.prototype.initRenew = function () {
        this.sessionIframe = window.document.createElement('iframe');
        this.oidcSecurityCommon.logDebug(this.sessionIframe);
        this.sessionIframe.style.display = 'none';
        window.document.body.appendChild(this.sessionIframe);
    };
    OidcSecuritySilentRenew.prototype.startRenew = function (url) {
        var _this = this;
        this.oidcSecurityCommon.logDebug('startRenew for URL:' + url);
        this.sessionIframe.src = url;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.sessionIframe.onload = function () {
                observer.next(_this);
                observer.complete();
            };
        });
    };
    return OidcSecuritySilentRenew;
}());
OidcSecuritySilentRenew = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__oidc_security_common__["a" /* OidcSecurityCommon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__oidc_security_common__["a" /* OidcSecurityCommon */]) === "function" && _a || Object])
], OidcSecuritySilentRenew);

var _a;
//# sourceMappingURL=oidc.security.silent-renew.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/oidc.security.user-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_auth_configuration__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/modules/auth.configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_well_known_endpoints__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/auth.well-known-endpoints.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcSecurityUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OidcSecurityUserService = (function () {
    function OidcSecurityUserService(http, authConfiguration, oidcSecurityCommon, authWellKnownEndpoints) {
        var _this = this;
        this.http = http;
        this.authConfiguration = authConfiguration;
        this.oidcSecurityCommon = oidcSecurityCommon;
        this.authWellKnownEndpoints = authWellKnownEndpoints;
        this.getIdentityUserData = function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            var token = _this.oidcSecurityCommon.getAccessToken();
            if (token !== '') {
                headers.append('Authorization', 'Bearer ' + decodeURIComponent(token));
            }
            return _this.http.get(_this.authWellKnownEndpoints.userinfo_endpoint, {
                headers: headers,
                body: ''
            }).map(function (res) { return res.json(); });
        };
    }
    OidcSecurityUserService.prototype.setupModule = function () {
        if (this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_user_data) !== '') {
            this.userData = this.oidcSecurityCommon.retrieve(this.oidcSecurityCommon.storage_user_data);
        }
    };
    OidcSecurityUserService.prototype.initUserData = function () {
        var _this = this;
        return this.getIdentityUserData()
            .map(function (data) { return _this.userData = data; });
    };
    OidcSecurityUserService.prototype.handleError = function (error) {
        this.oidcSecurityCommon.logError(error);
    };
    return OidcSecurityUserService;
}());
OidcSecurityUserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__modules_auth_configuration__["b" /* AuthConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modules_auth_configuration__["b" /* AuthConfiguration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__oidc_security_common__["a" /* OidcSecurityCommon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__oidc_security_common__["a" /* OidcSecurityCommon */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_well_known_endpoints__["a" /* AuthWellKnownEndpoints */]) === "function" && _d || Object])
], OidcSecurityUserService);

var _a, _b, _c, _d;
//# sourceMappingURL=oidc.security.user-service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/oidc/services/oidc.security.validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oidc_security_common__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsrsasign__ = __webpack_require__("../../../../jsrsasign/lib/jsrsasign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsrsasign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsrsasign__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcSecurityValidation; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// http://openid.net/specs/openid-connect-implicit-1_0.html
// id_token
//// id_token C1: The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
//// id_token C2: The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
////    The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
// id_token C3: If the ID Token contains multiple audiences, the Client SHOULD verify that an azp Claim is present.
// id_token C4: If an azp (authorized party) Claim is present, the Client SHOULD verify that its client_id is the Claim Value.
//// id_token C5: The Client MUST validate the signature of the ID Token according to JWS [JWS] using the algorithm specified in the alg Header Parameter of the JOSE Header. The Client MUST use the keys provided by the Issuer.
//// id_token C6: The alg value SHOULD be RS256. Validation of tokens using other signing algorithms is described in the OpenID Connect Core 1.0 [OpenID.Core] specification.
//// id_token C7: The current time MUST be before the time represented by the exp Claim (possibly allowing for some small leeway to account for clock skew).
//// id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time, limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
//// id_token C9: The value of the nonce Claim MUST be checked to verify that it is the same value as the one that was sent in the Authentication Request.
////    The Client SHOULD check the nonce value for replay attacks.The precise method for detecting replay attacks is Client specific.
// id_token C10: If the acr Claim was requested, the Client SHOULD check that the asserted Claim Value is appropriate.The meaning and processing of acr Claim Values is out of scope for this document.
// id_token C11: When a max_age request is made, the Client SHOULD check the auth_time Claim value and request re- authentication if it determines too much time has elapsed since the last End- User authentication.
//// Access Token Validation
//// access_token C1: Hash the octets of the ASCII representation of the access_token with the hash algorithm specified in JWA[JWA] for the alg Header Parameter of the ID Token's JOSE Header.
////    For instance, if the alg is RS256, the hash algorithm used is SHA-256.
//// access_token C2: Take the left- most half of the hash and base64url- encode it.
//// access_token C3: The value of at_hash in the ID Token MUST match the value produced in the previous step if at_hash is present in the ID Token.
var OidcSecurityValidation = (function () {
    function OidcSecurityValidation(oidcSecurityCommon) {
        this.oidcSecurityCommon = oidcSecurityCommon;
    }
    // id_token C7: The current time MUST be before the time represented by the exp Claim (possibly allowing for some small leeway to account for clock skew).
    OidcSecurityValidation.prototype.isTokenExpired = function (token, offsetSeconds) {
        var decoded;
        decoded = this.getPayloadFromToken(token, false);
        return !(this.validate_id_token_exp_not_expired(decoded, offsetSeconds));
    };
    // id_token C7: The current time MUST be before the time represented by the exp Claim (possibly allowing for some small leeway to account for clock skew).
    OidcSecurityValidation.prototype.validate_id_token_exp_not_expired = function (decoded_id_token, offsetSeconds) {
        var tokenExpirationDate = this.getTokenExpirationDate(decoded_id_token);
        offsetSeconds = offsetSeconds || 0;
        if (tokenExpirationDate == null) {
            return false;
        }
        // Token not expired?
        return (tokenExpirationDate.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    // iss
    // REQUIRED. Issuer Identifier for the Issuer of the response.The iss value is a case-sensitive URL using the https scheme that contains scheme, host,
    // and optionally, port number and path components and no query or fragment components.
    //
    // sub
    // REQUIRED. Subject Identifier.Locally unique and never reassigned identifier within the Issuer for the End- User,
    // which is intended to be consumed by the Client, e.g., 24400320 or AItOawmwtWwcT0k51BayewNvutrJUqsvl6qs7A4.
    // It MUST NOT exceed 255 ASCII characters in length.The sub value is a case-sensitive string.
    //
    // aud
    // REQUIRED. Audience(s) that this ID Token is intended for. It MUST contain the OAuth 2.0 client_id of the Relying Party as an audience value.
    // It MAY also contain identifiers for other audiences.In the general case, the aud value is an array of case-sensitive strings.
    // In the common special case when there is one audience, the aud value MAY be a single case-sensitive string.
    //
    // exp
    // REQUIRED. Expiration time on or after which the ID Token MUST NOT be accepted for processing.
    // The processing of this parameter requires that the current date/ time MUST be before the expiration date/ time listed in the value.
    // Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew.
    // Its value is a JSON [RFC7159] number representing the number of seconds from 1970- 01 - 01T00: 00:00Z as measured in UTC until the date/ time.
    // See RFC 3339 [RFC3339] for details regarding date/ times in general and UTC in particular.
    //
    // iat
    // REQUIRED. Time at which the JWT was issued. Its value is a JSON number representing the number of seconds from 1970- 01 - 01T00: 00:00Z as measured
    // in UTC until the date/ time.
    OidcSecurityValidation.prototype.validate_required_id_token = function (dataIdToken) {
        var validated = true;
        if (!dataIdToken.hasOwnProperty('iss')) {
            validated = false;
            this.oidcSecurityCommon.logWarning('iss is missing, this is required in the id_token');
        }
        if (!dataIdToken.hasOwnProperty('sub')) {
            validated = false;
            this.oidcSecurityCommon.logWarning('sub is missing, this is required in the id_token');
        }
        if (!dataIdToken.hasOwnProperty('aud')) {
            validated = false;
            this.oidcSecurityCommon.logWarning('aud is missing, this is required in the id_token');
        }
        if (!dataIdToken.hasOwnProperty('exp')) {
            validated = false;
            this.oidcSecurityCommon.logWarning('exp is missing, this is required in the id_token');
        }
        if (!dataIdToken.hasOwnProperty('iat')) {
            validated = false;
            this.oidcSecurityCommon.logWarning('iat is missing, this is required in the id_token');
        }
        return validated;
    };
    // id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time,
    // limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
    OidcSecurityValidation.prototype.validate_id_token_iat_max_offset = function (dataIdToken, max_offset_allowed_in_seconds) {
        if (!dataIdToken.hasOwnProperty('iat')) {
            return false;
        }
        var dateTime_iat_id_token = new Date(0); // The 0 here is the key, which sets the date to the epoch
        dateTime_iat_id_token.setUTCSeconds(dataIdToken.iat);
        max_offset_allowed_in_seconds = max_offset_allowed_in_seconds || 0;
        if (dateTime_iat_id_token == null) {
            return false;
        }
        this.oidcSecurityCommon.logDebug('validate_id_token_iat_max_offset: ' + (new Date().valueOf() - dateTime_iat_id_token.valueOf()) + ' < ' + (max_offset_allowed_in_seconds * 1000));
        return ((new Date().valueOf() - dateTime_iat_id_token.valueOf()) < (max_offset_allowed_in_seconds * 1000));
    };
    // id_token C9: The value of the nonce Claim MUST be checked to verify that it is the same value as the one that was sent in the Authentication Request.
    // The Client SHOULD check the nonce value for replay attacks.The precise method for detecting replay attacks is Client specific.
    OidcSecurityValidation.prototype.validate_id_token_nonce = function (dataIdToken, local_nonce) {
        if (dataIdToken.nonce !== local_nonce) {
            this.oidcSecurityCommon.logDebug('Validate_id_token_nonce failed, dataIdToken.nonce: ' + dataIdToken.nonce + ' local_nonce:' + local_nonce);
            return false;
        }
        return true;
    };
    // id_token C1: The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
    OidcSecurityValidation.prototype.validate_id_token_iss = function (dataIdToken, authWellKnownEndpoints_issuer) {
        if (dataIdToken.iss !== authWellKnownEndpoints_issuer) {
            this.oidcSecurityCommon.logDebug('Validate_id_token_iss failed, dataIdToken.iss: ' + dataIdToken.iss + ' authWellKnownEndpoints issuer:' + authWellKnownEndpoints_issuer);
            return false;
        }
        return true;
    };
    // id_token C2: The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
    OidcSecurityValidation.prototype.validate_id_token_aud = function (dataIdToken, aud) {
        if (dataIdToken.aud !== aud) {
            this.oidcSecurityCommon.logDebug('Validate_id_token_aud failed, dataIdToken.aud: ' + dataIdToken.aud + ' client_id:' + aud);
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.validateStateFromHashCallback = function (state, local_state) {
        if (state !== local_state) {
            this.oidcSecurityCommon.logDebug('ValidateStateFromHashCallback failed, state: ' + state + ' local_state:' + local_state);
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.validate_userdata_sub_id_token = function (id_token_sub, userdata_sub) {
        if (id_token_sub !== userdata_sub) {
            this.oidcSecurityCommon.logDebug('validate_userdata_sub_id_token failed, id_token_sub: ' + id_token_sub + ' userdata_sub:' + userdata_sub);
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.getPayloadFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.getHeaderFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[0];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.getSignatureFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[2];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    // id_token C5: The Client MUST validate the signature of the ID Token according to JWS [JWS] using the algorithm specified in the alg Header Parameter of the JOSE Header. The Client MUST use the keys provided by the Issuer.
    // id_token C6: The alg value SHOULD be RS256. Validation of tokens using other signing algorithms is described in the OpenID Connect Core 1.0 [OpenID.Core] specification.
    OidcSecurityValidation.prototype.validate_signature_id_token = function (id_token, jwtkeys) {
        if (!jwtkeys || !jwtkeys.keys) {
            return false;
        }
        var header_data = this.getHeaderFromToken(id_token, false);
        var kid = header_data.kid;
        var alg = header_data.alg;
        if ('RS256' !== alg) {
            this.oidcSecurityCommon.logWarning('Only RS256 supported');
            return false;
        }
        var isValid = false;
        if (!header_data.hasOwnProperty('kid')) {
            // exactly 1 key in the jwtkeys and no kid in the Jose header
            // kty	"RSA" use "sig"
            var amountOfMatchingKeys = 0;
            for (var _i = 0, _a = jwtkeys.keys; _i < _a.length; _i++) {
                var key = _a[_i];
                if (key.kty === 'RSA' && key.use === 'sig') {
                    amountOfMatchingKeys = amountOfMatchingKeys + 1;
                }
            }
            if (amountOfMatchingKeys === 0) {
                this.oidcSecurityCommon.logWarning('no keys found, incorrect Signature, validation failed for id_token');
                return false;
            }
            else if (amountOfMatchingKeys > 1) {
                this.oidcSecurityCommon.logWarning('no ID Token kid claim in JOSE header and multiple supplied in jwks_uri');
                return false;
            }
            else {
                for (var _b = 0, _c = jwtkeys.keys; _b < _c.length; _b++) {
                    var key = _c[_b];
                    if (key.kty === 'RSA' && key.use === 'sig') {
                        var publickey = __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["KEYUTIL"].getKey(key);
                        isValid = __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["KJUR"].jws.JWS.verify(id_token, publickey, ['RS256']);
                        if (!isValid) {
                            this.oidcSecurityCommon.logWarning('incorrect Signature, validation failed for id_token');
                        }
                        return isValid;
                    }
                }
            }
        }
        else {
            // kid in the Jose header of id_token
            for (var _d = 0, _e = jwtkeys.keys; _d < _e.length; _d++) {
                var key = _e[_d];
                if (key.kid === kid) {
                    var publickey = __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["KEYUTIL"].getKey(key);
                    isValid = __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["KJUR"].jws.JWS.verify(id_token, publickey, ['RS256']);
                    if (!isValid) {
                        this.oidcSecurityCommon.logWarning('incorrect Signature, validation failed for id_token');
                    }
                    return isValid;
                }
            }
        }
        return isValid;
    };
    OidcSecurityValidation.prototype.config_validate_response_type = function (response_type) {
        if (response_type === 'id_token token' || response_type === 'id_token') {
            return true;
        }
        this.oidcSecurityCommon.logWarning('module configure incorrect, invalid response_type:' + response_type);
        return false;
    };
    // Accepts ID Token without 'kid' claim in JOSE header if only one JWK supplied in 'jwks_url'
    ////private validate_no_kid_in_header_only_one_allowed_in_jwtkeys(header_data: any, jwtkeys: any): boolean {
    ////    this.oidcSecurityCommon.logDebug('amount of jwtkeys.keys: ' + jwtkeys.keys.length);
    ////    if (!header_data.hasOwnProperty('kid')) {
    ////        // no kid defined in Jose header
    ////        if (jwtkeys.keys.length !== 1) {
    ////            this.oidcSecurityCommon.logDebug('jwtkeys.keys.length != 1 and no kid in header');
    ////            return false;
    ////        }
    ////    }
    ////    return true;
    ////}
    // Access Token Validation
    // access_token C1: Hash the octets of the ASCII representation of the access_token with the hash algorithm specified in JWA[JWA] for the alg Header Parameter of the ID Token's JOSE Header.
    // For instance, if the alg is RS256, the hash algorithm used is SHA-256.
    // access_token C2: Take the left- most half of the hash and base64url- encode it.
    // access_token C3: The value of at_hash in the ID Token MUST match the value produced in the previous step if at_hash is present in the ID Token.
    OidcSecurityValidation.prototype.validate_id_token_at_hash = function (access_token, at_hash) {
        this.oidcSecurityCommon.logDebug('From the server:' + at_hash);
        var testdata = this.generate_at_hash('' + access_token);
        this.oidcSecurityCommon.logDebug('client validation not decoded:' + testdata);
        if (testdata === at_hash) {
            return true; // isValid;
        }
        else {
            var testValue = this.generate_at_hash('' + decodeURIComponent(access_token));
            this.oidcSecurityCommon.logDebug('-gen access--' + testValue);
            if (testValue === at_hash) {
                return true; // isValid
            }
        }
        return false;
    };
    OidcSecurityValidation.prototype.generate_at_hash = function (access_token) {
        var hash = __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["KJUR"].crypto.Util.hashString(access_token, 'sha256');
        var first128bits = hash.substr(0, hash.length / 2);
        var testdata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_jsrsasign__["hextob64u"])(first128bits);
        return testdata;
    };
    OidcSecurityValidation.prototype.getTokenExpirationDate = function (dataIdToken) {
        if (!dataIdToken.hasOwnProperty('exp')) {
            return new Date();
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(dataIdToken.exp);
        return date;
    };
    OidcSecurityValidation.prototype.urlBase64Decode = function (str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('Illegal base64url string!');
        }
        return window.atob(output);
    };
    return OidcSecurityValidation;
}());
OidcSecurityValidation = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__oidc_security_common__["a" /* OidcSecurityCommon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__oidc_security_common__["a" /* OidcSecurityCommon */]) === "function" && _a || Object])
], OidcSecurityValidation);

var _a;
//# sourceMappingURL=oidc.security.validation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oidc_services_oidc_security_service__ = __webpack_require__("../../../../../src/app/shared/auth/oidc/services/oidc.security.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = (function () {
    function RequestService(http, appService, oidcSecurityService) {
        var _this = this;
        this.http = http;
        this.appService = appService;
        this.oidcSecurityService = oidcSecurityService;
        this.userLoadededEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.loggedIn = false;
        this.baseApiUrl = "/portal/api";
        this.oidcSecurityService.oidcUserShare
            .subscribe(function (user) {
            _this.currentUser = user;
            _this.userLoadededEvent.emit(user);
            _this.loggedIn = true;
            _this.appService.logDebug('REQUEST SERVICE: OIDCUser Data Loaded', user);
        }, function (error) {
            _this.appService.logError('REQUEST SERVICE: Error with user authentication', error);
        }, function () {
            _this.loggedIn = true;
            _this.appService.logDebug('REQUEST SERVICE: login completed');
        });
    }
    RequestService.prototype.getCurrentSpokUser = function () {
        return this.authGet(this.baseApiUrl + "/v1/users/current")
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.authGet = function (url, options) {
        if (this.loggedIn) {
            this.setAuthHeaders(this.oidcSecurityService.getUserData());
        }
        if (options) {
            options = this.setRequestOptions(options);
        }
        else {
            options = this.setRequestOptions();
        }
        return this.http.get(url, options);
    };
    RequestService.prototype.authPut = function (url, data, options) {
        if (this.loggedIn) {
            this.setAuthHeaders(this.oidcSecurityService.getUserData());
        }
        var body = JSON.stringify(data);
        if (options) {
            options = this.setRequestOptions(options);
        }
        else {
            options = this.setRequestOptions();
        }
        return this.http.put(url, body, options);
    };
    RequestService.prototype.authDelete = function (url, options) {
        if (this.loggedIn) {
            this.setAuthHeaders(this.oidcSecurityService.getUserData());
        }
        if (options) {
            options = this.setRequestOptions(options);
        }
        else {
            options = this.setRequestOptions();
        }
        return this.http.delete(url, options);
    };
    RequestService.prototype.authPost = function (url, data, options) {
        if (this.loggedIn) {
            this.setAuthHeaders(this.oidcSecurityService.getUserData());
        }
        var body = JSON.stringify(data);
        if (options) {
            options = this.setRequestOptions(options);
        }
        else {
            options = this.setRequestOptions();
        }
        return this.http.post(url, body, options);
    };
    RequestService.prototype.setAuthHeaders = function (user) {
        this.authHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.authHeaders.append('Authorization', user.token_type + ' ' + user.access_token);
        this.authHeaders.append('Content-Type', 'application/json');
        this.authHeaders.append('Cache-Control', 'no-cache');
        this.authHeaders.append('Pragma', 'no-cache');
    };
    RequestService.prototype.setRequestOptions = function (options) {
        var headerList = this.authHeaders;
        if (options) {
            options.headers.keys().forEach(function (key) {
                var value = options.headers.get(key);
                if (value) {
                    headerList.append(key, value);
                }
            });
        }
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headerList });
        return options;
    };
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__oidc_services_oidc_security_service__["a" /* OidcSecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__oidc_services_oidc_security_service__["a" /* OidcSecurityService */]) === "function" && _c || Object])
], RequestService);

var _a, _b, _c;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/config/app.config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exceptions_exception_model__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppConfigService = (function () {
    function AppConfigService(http) {
        this.http = http;
        this.configFileUrl = '/portal/assets/config/app.config.json';
    }
    AppConfigService.prototype.load = function (baseUrl) {
        var _this = this;
        baseUrl = baseUrl || this.configFileUrl;
        return this.http.get(baseUrl)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            _this.config = data;
            return data;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(_this.handleException(error)); });
    };
    AppConfigService.prototype.get = function (key) {
        return this.config[key];
    };
    AppConfigService.prototype.handleException = function (error) {
        console.error('ERROR LOADING APP CONFIGURATION', error);
        var ex = new __WEBPACK_IMPORTED_MODULE_3__exceptions_exception_model__["a" /* Exception */](0, '');
        ex.id = error.status || 500;
        if (error._body !== '') {
            var responseBody = JSON.parse(error._body);
            ex.message = responseBody.message;
        }
        else {
            ex.message = error.statusText || 'Server Error';
        }
        return ex;
    };
    return AppConfigService;
}());
AppConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppConfigService);

var _a;
//# sourceMappingURL=app.config.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/exceptions/exception.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exception; });
var Exception = (function () {
    function Exception(id, message) {
        this.id = id;
        this.message = message;
    }
    return Exception;
}());

//# sourceMappingURL=exception.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/exceptions/exception.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exception_model__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptionService; });
/* Exception Service: Will keep track of application level exceptions.*/

var ExceptionService = (function () {
    function ExceptionService() {
    }
    ExceptionService.prototype.handleException = function (error) {
        var ex = new __WEBPACK_IMPORTED_MODULE_0__exception_model__["a" /* Exception */](0, '');
        ex.id = error.status || 500;
        if (error._body !== '') {
            var responseBody = JSON.parse(error._body);
            ex.message = responseBody.error || responseBody.message;
        }
        else {
            ex.message = error.statusText || 'Server Error';
        }
        return ex;
    };
    return ExceptionService;
}());

//# sourceMappingURL=exception.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/forms/common/trim.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrimDirective = (function () {
    function TrimDirective(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
    }
    TrimDirective.prototype.onBlur = function (value) {
        this.el.value = this.el.value.trim();
    };
    return TrimDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('blur', ['$event.target.value']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TrimDirective.prototype, "onBlur", null);
TrimDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({ selector: '[trim]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], TrimDirective);

var _a;
//# sourceMappingURL=trim.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/forms/portal-forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_no_whitespace_directive__ = __webpack_require__("../../../../../src/app/shared/forms/validators/no-whitespace.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_unsaved_changes_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/unsaved-changes-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_trim_directive__ = __webpack_require__("../../../../../src/app/shared/forms/common/trim.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_spinner_loading_spinner_module__ = __webpack_require__("../../../../../src/app/shared/loading-spinner/loading-spinner.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalFormsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Declares and exposes directives/components/modules common to our forms
var PortalFormsModule = (function () {
    function PortalFormsModule() {
    }
    return PortalFormsModule;
}());
PortalFormsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__validators_no_whitespace_directive__["a" /* NoWhitespaceDirective */],
            __WEBPACK_IMPORTED_MODULE_4__modal_unsaved_changes_modal_component__["a" /* UnsavedChangesModalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__common_trim_directive__["a" /* TrimDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__validators_no_whitespace_directive__["a" /* NoWhitespaceDirective */],
            __WEBPACK_IMPORTED_MODULE_4__modal_unsaved_changes_modal_component__["a" /* UnsavedChangesModalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__common_trim_directive__["a" /* TrimDirective */],
            __WEBPACK_IMPORTED_MODULE_6__loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerModule */]
        ],
        providers: [],
    })
], PortalFormsModule);

//# sourceMappingURL=portal-forms.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/forms/validators/no-whitespace.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_whitespace_validator__ = __webpack_require__("../../../../../src/app/shared/forms/validators/no-whitespace.validator.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoWhitespaceDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * This validator works like "required" but it does not allow whitespace either
 *
 * @export
 * @class NoWhitespaceDirective
 * @implements {Validator}
 */
var NoWhitespaceDirective = NoWhitespaceDirective_1 = (function () {
    function NoWhitespaceDirective() {
        this.valFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__no_whitespace_validator__["a" /* NoWhitespaceValidator */])();
    }
    NoWhitespaceDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    return NoWhitespaceDirective;
}());
NoWhitespaceDirective = NoWhitespaceDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[required-no-whitespace]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: NoWhitespaceDirective_1, multi: true }]
    })
], NoWhitespaceDirective);

var NoWhitespaceDirective_1;
//# sourceMappingURL=no-whitespace.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/forms/validators/no-whitespace.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NoWhitespaceValidator;
function NoWhitespaceValidator() {
    return function (control) {
        // messy but you get the idea
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { required: 'field is required.' };
    };
}
//# sourceMappingURL=no-whitespace.validator.js.map

/***/ }),

/***/ "../../../../../src/app/shared/idle/idle-warning.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-qa=\"modal_body\" class=\"modal-body\">\n    <h1>Timeout Warning</h1>\n    <p>We haven't detected any activity for awhile.</p>\n    <div *ngIf=\"message\">\n        <p>{{message}}</p>\n    </div>\n    <div *ngIf=\"timeout\">\n        <p>You will be automatically logged out in <span class='timeout-label'>{{timeout}}</span> seconds.</p>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button data-qa=\"modal_close_btn\" type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close()\">Remain logged-in</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/idle/idle-warning.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeout-label {\n  color: #D0011B;\n  font-weight: bold;\n  font-size: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/idle/idle-warning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdleWarningModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdleWarningModalComponent = (function () {
    function IdleWarningModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.message = null;
        this.timeout = null;
    }
    IdleWarningModalComponent.prototype.setMessage = function (message) {
        this.message = message;
    };
    IdleWarningModalComponent.prototype.setTimeOutValue = function (value) {
        if (!value || value === -1) {
            this.timeout = null;
        }
        else {
            this.timeout = '' + value + '';
        }
    };
    return IdleWarningModalComponent;
}());
IdleWarningModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-idle-warning-modal',
        template: __webpack_require__("../../../../../src/app/shared/idle/idle-warning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/idle/idle-warning.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], IdleWarningModalComponent);

var _a;
//# sourceMappingURL=idle-warning.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/idle/idle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__ = __webpack_require__("../../../../@ng-idle/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__idle_warning_component__ = __webpack_require__("../../../../../src/app/shared/idle/idle-warning.component.ts");
/* unused harmony export TimeOutConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimeOutConfig = (function () {
    function TimeOutConfig() {
        this.idle_timeout = 600;
        this.idle_countdown = 45;
    }
    return TimeOutConfig;
}());

var IdleComponent = (function () {
    function IdleComponent(appService, idle, modal) {
        var _this = this;
        this.appService = appService;
        this.idle = idle;
        this.modal = modal;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.timeOutConfig = new TimeOutConfig();
        idle.setIdle(this.timeOutConfig.idle_timeout);
        idle.setTimeout(this.timeOutConfig.idle_countdown);
        idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["a" /* DEFAULT_INTERRUPTSOURCES */]);
        idle.onIdleEnd.subscribe(function () {
            _this.idleState = 'Click anywhere to remain logged in.';
            _this.setModalMessage(_this.idleState);
        });
        idle.onTimeout.subscribe(function () {
            _this.idleState = 'Automatically logging out now.';
            _this.timedOut = true;
            _this.setModalMessage(_this.idleState);
            _this.appService.logoff();
        });
        idle.onIdleStart.subscribe(function () {
            _this.idleState = 'You have gone idle';
            if (_this.myModal) {
                _this.myModal.close();
                _this.myModal = null;
            }
            _this.myModal = modal.open(__WEBPACK_IMPORTED_MODULE_4__idle_warning_component__["a" /* IdleWarningModalComponent */]);
            _this.myModal.result.then(function (res) {
                _this.reset();
            }, function (error) {
            });
        });
        idle.onTimeoutWarning.subscribe(function (countdown) {
            _this.setModalMessage(null, countdown);
        });
        this.reset();
    }
    IdleComponent.prototype.reset = function () {
        this.idle.watch();
        this.idleState = 'Idle watch started';
        this.timedOut = false;
        if (this.myModal) {
            this.myModal.close();
        }
    };
    IdleComponent.prototype.setModalMessage = function (message, timeout) {
        if (this.myModal && this.myModal.componentInstance) {
            this.myModal.componentInstance.setMessage(message);
            if (!timeout) {
                this.myModal.componentInstance.setTimeOutValue(-1);
            }
            else {
                this.myModal.componentInstance.setTimeOutValue(timeout);
            }
        }
    };
    return IdleComponent;
}());
IdleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-idle',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["b" /* Idle */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["b" /* Idle */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object])
], IdleComponent);

var _a, _b, _c;
//# sourceMappingURL=idle.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/main-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/main-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"wrapper\">\n  <!-- <div id=\"navigation\" class=\"top-bar navbar-fixed-top\"></div> -->\n  <!-- <sa-header id=\"header\" class=\"top-bar navbar-fixed-top\"></sa-header>\n  <sa-navigation id=\"left-sidebar\" class=\"left-sidebar\"></sa-navigation> -->\n  <div id=\"main\" role=\"main\" class=\"content-wrapper\">\n    <div *ngIf=\"message\" class=\"container\">\n      <div data-qa=\"alert-message\" [hidden]=\"!message.text\" class=\"app-message alert alert-{{message.type}}\">\n        {{message.text}}\n      </div>\n    </div>\n    <loading-spinner *ngIf=\"isLoading\"></loading-spinner>\n    <div [hidden]=\"isLoading\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/app-layouts/main-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_message_message_service__ = __webpack_require__("../../../../../src/app/shared/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainLayoutComponent = (function () {
    function MainLayoutComponent(messageService, router) {
        var _this = this;
        this.messageService = messageService;
        this.router = router;
        this.isLoading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
        this.subscription = this.messageService.getMessage()
            .subscribe(function (message) { return _this.message = message; });
    }
    MainLayoutComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationStart */]) {
            this.isLoading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationEnd */]) {
            this.isLoading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* NavigationCancel */]) {
            this.isLoading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* NavigationError */]) {
            this.isLoading = false;
        }
    };
    MainLayoutComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-main-layout',
        template: __webpack_require__("../../../../../src/app/shared/layout/app-layouts/main-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/layout/app-layouts/main-layout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_message_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_message_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MainLayoutComponent);

var _a, _b;
//# sourceMappingURL=main-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <div class=\"pull-left left shim\">\n    <img src=\"./assets/img/logo/spok_hor_flat_reverse.png\" alt=\"Spok Logo\" height=\"25px\">\n  </div>\n\n  <div class=\"pull-right user-identity\">\n    <a id=\"logout\" class=\"btn btn-default btn-sm\"  (click)=\"logOut()\">Log Out</a>\n  </div>\n\n</div>\n\n\n        \n        \n        \n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(appService) {
        this.appService = appService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadedUserSub = this.appService.oidcSecurityService.getAuthenticatedUser()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.loadedUserSub) {
            this.loadedUserSub.unsubscribe();
        }
    };
    /*Log the user out.*/
    HeaderComponent.prototype.logOut = function () {
        this.appService.logoff();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'sa-header',
        template: __webpack_require__("../../../../../src/app/shared/layout/header/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]
        ]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__("../../../../../src/app/shared/layout/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_module__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_layouts_main_layout_component__ = __webpack_require__("../../../../../src/app/shared/layout/app-layouts/main-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__idle_idle_component__ = __webpack_require__("../../../../../src/app/shared/idle/idle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__idle_idle_warning_component__ = __webpack_require__("../../../../../src/app/shared/idle/idle-warning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loading_spinner_loading_spinner_module__ = __webpack_require__("../../../../../src/app/shared/loading-spinner/loading-spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_idle_keepalive__ = __webpack_require__("../../../../@ng-idle/keepalive/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_9__loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_idle_keepalive__["a" /* NgIdleKeepaliveModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__idle_idle_component__["a" /* IdleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__idle_idle_warning_component__["a" /* IdleWarningModalComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__idle_idle_component__["a" /* IdleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__idle_idle_warning_component__["a" /* IdleWarningModalComponent */],
            __WEBPACK_IMPORTED_MODULE_9__loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__idle_idle_warning_component__["a" /* IdleWarningModalComponent */]]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"left-sidebar\" class=\"left-sidebar\" *ngIf=\"userObserver | async as user; else loading\">\n    <nav id=\"navigation-menu\" class=\"main-nav\">\n        <ul class=\"main-menu\" *ngIf=\"canIUse\">\n            <li *ngIf=\"canIUse.dashboard\">\n                <a data-qa=\"dashboard_link\" id=\"dashboard\" title=\"Dashboard\" routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"fa fa-dashboard\"></i> <span class=\"text\">Dashboard</span></a>\n            </li>\n            <li *ngIf=\"canIUse.manageCustomers\">\n                <a data-qa=\"customers_link\" id=\"customers\" title=\"Customers\" routerLink=\"/customers\" routerLinkActive=\"active\"><i class=\"fa fa-building\"></i><span class=\"text\">Customers</span></a>\n            </li>\n            <li *ngIf=\"canIUse.manageUsers\">\n                <a data-qa=\"users_link\" id=\"users\" title=\"Users\" routerLink=\"/users\" routerLinkActive=\"active\"><i class=\"fa fa-users\"></i><span class=\"text\">Users</span></a>\n            </li>\n        </ul>\n    </nav>\n    <div *ngIf=\"userInfo\" class=\"userinfo\">\n        <div class=\"userinfo__avatar pull-left\"><i class=\"fa fa-user\"></i></div>\n        <div class=\"pull-left\">\n            <div class=\"userinfo__text userinfo--large nowrap--ellipsis\">{{ userInfo.firstName }} {{ userInfo.lastName }}</div>\n            <div *ngIf=\"userInfo.securityRole\" class=\"userinfo__text userinfo--emphasis\" attr.data-level='{{ userInfo.securityRole.level }}'>{{ userInfo.securityRole.name }}</div>\n            <div *ngIf=\"customerInfo\" class=\"userinfo__text\">{{ customerInfo.name }}</div>\n        </div>\n    </div>\n</div>\n\n<ng-template #loading>\n    <div id=\"left-sidebar\" class=\"left-sidebar\">\n        <div><!-- TODO: Add loading indicator -->Loading menu...</div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_permissions_service__ = __webpack_require__("../../../../../src/app/shared/security/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(appService, permissionsService) {
        this.appService = appService;
        this.permissionsService = permissionsService;
        this.subscriptions = [
            this.userSubscription,
            this.permissionSubscription
        ];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObserver = this.appService.getAuthenticatedUser();
        this.userSubscription = this.userObserver.subscribe(function (authenticatedUser) {
            _this.userInfo = authenticatedUser;
            _this.customerInfo = authenticatedUser.customer;
        });
        this.permissionSubscription = this.permissionsService.getPermissions().subscribe(function (featureAvailability) {
            _this.canIUse = featureAvailability;
        });
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'sa-navigation',
        template: __webpack_require__("../../../../../src/app/shared/layout/navigation/navigation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__security_permissions_service__["a" /* PermissionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__security_permissions_service__["a" /* PermissionsService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__("../../../../../src/app/shared/layout/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]
        ]
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loading-spinner/loading-spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contextual-loader-container {\n    margin: 0 auto;\n}\n\n.contextual-loader,\n.contextual-loader:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n}\n.contextual-loader {\n    margin: 60px auto;\n    font-size: 10px;\n    position: relative;\n    text-indent: -9999em;\n    border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n    border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n    border-left: 1.1em solid #ffffff;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation: load8 1.1s infinite linear;\n    animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n@keyframes load8 {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contextual-loader-container\">\n    <div class=\"contextual-loader\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    return LoadingSpinnerComponent;
}());
LoadingSpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'loading-spinner',
        template: __webpack_require__("../../../../../src/app/shared/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/loading-spinner/loading-spinner.component.css")]
    })
], LoadingSpinnerComponent);

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loading-spinner/loading-spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_spinner_component__ = __webpack_require__("../../../../../src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoadingSpinnerModule = (function () {
    function LoadingSpinnerModule() {
    }
    return LoadingSpinnerModule;
}());
LoadingSpinnerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__loading_spinner_component__["a" /* LoadingSpinnerComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__loading_spinner_component__["a" /* LoadingSpinnerComponent */]]
    })
], LoadingSpinnerModule);

//# sourceMappingURL=loading-spinner.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/message/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(text, type) {
        this.text = text;
        this.type = type;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/message/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_model__ = __webpack_require__("../../../../../src/app/shared/message/message.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageService = (function () {
    function MessageService() {
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message_model__["a" /* Message */]('', '');
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    MessageService.prototype.success = function (opts) {
        opts.text = opts.text || 'Success!';
        opts.type = 'success';
        this.setSubject(opts);
    };
    MessageService.prototype.fail = function (opts) {
        opts.text = opts.text || 'Something went wrong.';
        opts.type = 'danger';
        this.setSubject(opts);
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService.prototype.clearMessage = function () {
        this.setSubject({ text: '', type: '' });
    };
    MessageService.prototype.clearFailure = function () {
        if (this.message.type === 'danger') {
            this.setSubject({ text: '', type: '' });
        }
    };
    MessageService.prototype.setSubject = function (opts) {
        var _this = this;
        var text = opts.text, type = opts.type, autoHide = opts.autoHide;
        this.message.text = text;
        this.message.type = type;
        this.subject.next(this.message);
        if (autoHide) {
            setTimeout(function () { return _this.clearMessage(); }, 3000);
        }
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/unsaved-changes-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-qa=\"modal_body\" class=\"modal-body\">\n  You have unsaved changes on this page. Are you sure you would like to leave this page?\n</div>\n<div class=\"modal-footer\">\n  <button data-qa=\"modal_dismiss_btn\" type=\"button\" class=\"btn\" (click)=\"activeModal.dismiss()\">Stay on this page</button>\n  <button data-qa=\"modal_close_btn\" type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close()\">Leave this page</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modal/unsaved-changes-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsavedChangesModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnsavedChangesModalComponent = (function () {
    function UnsavedChangesModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    return UnsavedChangesModalComponent;
}());
UnsavedChangesModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'ccp-modal',
        template: __webpack_require__("../../../../../src/app/shared/modal/unsaved-changes-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], UnsavedChangesModalComponent);

var _a;
//# sourceMappingURL=unsaved-changes-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/page-load/page-load.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-container\" *ngIf=\"!hidden\">\n  <div class=\"loader-message\">\n    <div id=\"loader-message\"><h1>{{message}}</h1></div>\n    <ng-content></ng-content>\n    <div class=\"loader\">Loading</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/page-load/page-load.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageLoadingComponent = (function () {
    function PageLoadingComponent() {
        this.message = 'Loading';
        this.hidden = true;
    }
    PageLoadingComponent.prototype.setMessage = function (message) {
        this.message = message;
    };
    PageLoadingComponent.prototype.show = function () {
        this.hidden = false;
    };
    PageLoadingComponent.prototype.hide = function () {
        this.hidden = true;
    };
    PageLoadingComponent.prototype.isShowing = function () {
        return this.hidden;
    };
    return PageLoadingComponent;
}());
PageLoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-load',
        template: __webpack_require__("../../../../../src/app/shared/page-load/page-load.component.html")
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], PageLoadingComponent);

//# sourceMappingURL=page-load.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/page-load/page-load.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_load_component__ = __webpack_require__("../../../../../src/app/shared/page-load/page-load.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoadingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageLoadingModule = (function () {
    function PageLoadingModule() {
    }
    return PageLoadingModule;
}());
PageLoadingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__page_load_component__["a" /* PageLoadingComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__page_load_component__["a" /* PageLoadingComponent */]]
    })
], PageLoadingModule);

//# sourceMappingURL=page-load.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/routing/can-deactivate-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuardService = (function () {
    function CanDeactivateGuardService() {
    }
    CanDeactivateGuardService.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuardService;
}());
CanDeactivateGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], CanDeactivateGuardService);

//# sourceMappingURL=can-deactivate-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/permissions.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Permissions; });
var Permissions = (function () {
    function Permissions(manageCustomers, manageUsers, reports, dashboard) {
        this.manageCustomers = manageCustomers;
        this.manageUsers = manageUsers;
        this.reports = reports;
        this.dashboard = dashboard;
    }
    return Permissions;
}());

//# sourceMappingURL=permissions.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/permissions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__security_role_model__ = __webpack_require__("../../../../../src/app/shared/security/security-role.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permissions_model__ = __webpack_require__("../../../../../src/app/shared/security/permissions.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsService; });



/** Permissions business logic                                     */
/** SystemAdmin, SupportAdmin can manage customers, manage users   */
/** CustomerAdmin can manage users                                 */
/** User == dashboard only                                         */
var PermissionsService = (function () {
    function PermissionsService() {
        this.permissions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_1__permissions_model__["a" /* Permissions */](false, false, false, false));
        this.userAccessLevel = 1000;
    }
    PermissionsService.prototype.getPermissions = function () {
        return this.permissions.share();
    };
    PermissionsService.prototype.setPermissions = function (userAccessLevel) {
        this.userAccessLevel = userAccessLevel;
        var manageCustomers = this.userAccessLevel <= __WEBPACK_IMPORTED_MODULE_0__security_role_model__["a" /* SecurityRoles */].SupportAdmin ? true : false;
        var reports = this.userAccessLevel <= __WEBPACK_IMPORTED_MODULE_0__security_role_model__["a" /* SecurityRoles */].SupportAdmin ? true : false;
        var manageUsers = this.userAccessLevel <= __WEBPACK_IMPORTED_MODULE_0__security_role_model__["a" /* SecurityRoles */].CustomerAdmin ? true : false;
        var dashboard = this.userAccessLevel <= __WEBPACK_IMPORTED_MODULE_0__security_role_model__["a" /* SecurityRoles */].User ? true : false;
        var permissions = new __WEBPACK_IMPORTED_MODULE_1__permissions_model__["a" /* Permissions */](manageCustomers, manageUsers, reports, dashboard);
        this.permissions.next(permissions);
    };
    return PermissionsService;
}());

//# sourceMappingURL=permissions.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/security-role.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SecurityRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityRoles; });
var SecurityRole = (function () {
    function SecurityRole(level, name) {
        this.level = level;
        this.name = name;
    }
    return SecurityRole;
}());

var SecurityRoles;
(function (SecurityRoles) {
    SecurityRoles[SecurityRoles["SystemAdmin"] = 100] = "SystemAdmin";
    SecurityRoles[SecurityRoles["SupportAdmin"] = 200] = "SupportAdmin";
    SecurityRoles[SecurityRoles["CustomerAdmin"] = 300] = "CustomerAdmin";
    SecurityRoles[SecurityRoles["User"] = 400] = "User";
})(SecurityRoles || (SecurityRoles = {}));
//# sourceMappingURL=security-role.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/security-role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_request_service__ = __webpack_require__("../../../../../src/app/shared/auth/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_exceptions_exception_service__ = __webpack_require__("../../../../../src/app/shared/exceptions/exception.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityRolesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecurityRolesService = (function () {
    function SecurityRolesService(requestService, exceptionService) {
        this.requestService = requestService;
        this.exceptionService = exceptionService;
        this.baseUrl = "/portal/api";
    }
    SecurityRolesService.prototype.getRoles = function (customerId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('customerId', customerId);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        return this.requestService.authGet(this.baseUrl + "/v1/security-roles", requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this.exceptionService.handleException(error)); });
    };
    return SecurityRolesService;
}());
SecurityRolesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_exceptions_exception_service__["a" /* ExceptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_exceptions_exception_service__["a" /* ExceptionService */]) === "function" && _b || Object])
], SecurityRolesService);

var _a, _b;
//# sourceMappingURL=security-role.service.js.map

/***/ }),

/***/ "../../../../../src/assets/css/main.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000 !important}.label{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #ddd !important}}@font-face{font-family:'Glyphicons Halflings';src:url(" + __webpack_require__("../../../../../src/assets/fonts/glyphicons-halflings-regular.eot") + ");src:url(" + __webpack_require__("../../../../../src/assets/fonts/glyphicons-halflings-regular.eot") + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/glyphicons-halflings-regular.woff2") + ") format(\"woff2\"),url(" + __webpack_require__("../../../../../src/assets/fonts/glyphicons-halflings-regular.woff") + ") format(\"woff\"),url(" + __webpack_require__("../../../../../src/assets/fonts/glyphicons-halflings-regular.ttf") + ") format(\"truetype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/glyphicons-halflings-regular.svg") + "#glyphicons_halflingsregular) format(\"svg\")}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-euro:before,.glyphicon-eur:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before{content:\"\\E227\"}.glyphicon-btc:before{content:\"\\E227\"}.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-jpy:before{content:\"\\A5\"}.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-rub:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url(" + __webpack_require__("../../../../../src/assets/fonts/fontawesome-webfont.eot?v=4.6.3") + ");src:url(" + __webpack_require__("../../../../../src/assets/fonts/fontawesome-webfont.eot") + "?#iefix&v=4.6.3) format(\"embedded-opentype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/fontawesome-webfont.woff2?v=4.6.3") + ") format(\"woff2\"),url(" + __webpack_require__("../../../../../src/assets/fonts/fontawesome-webfont.woff?v=4.6.3") + ") format(\"woff\"),url(" + __webpack_require__("../../../../../src/assets/fonts/fontawesome-webfont.ttf?v=4.6.3") + ") format(\"truetype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/fontawesome-webfont.svg?v=4.6.3") + "#fontawesomeregular) format(\"svg\");font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:0.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:0.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid 0.08em #eeeeee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;position:relative;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#ffffff}.fa-glass:before{content:\"\\F000\"}.fa-music:before{content:\"\\F001\"}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-heart:before{content:\"\\F004\"}.fa-star:before{content:\"\\F005\"}.fa-star-o:before{content:\"\\F006\"}.fa-user:before{content:\"\\F007\"}.fa-film:before{content:\"\\F008\"}.fa-th-large:before{content:\"\\F009\"}.fa-th:before{content:\"\\F00A\"}.fa-th-list:before{content:\"\\F00B\"}.fa-check:before{content:\"\\F00C\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\F00D\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-search-minus:before{content:\"\\F010\"}.fa-power-off:before{content:\"\\F011\"}.fa-signal:before{content:\"\\F012\"}.fa-gear:before,.fa-cog:before{content:\"\\F013\"}.fa-trash-o:before{content:\"\\F014\"}.fa-home:before{content:\"\\F015\"}.fa-file-o:before{content:\"\\F016\"}.fa-clock-o:before{content:\"\\F017\"}.fa-road:before{content:\"\\F018\"}.fa-download:before{content:\"\\F019\"}.fa-arrow-circle-o-down:before{content:\"\\F01A\"}.fa-arrow-circle-o-up:before{content:\"\\F01B\"}.fa-inbox:before{content:\"\\F01C\"}.fa-play-circle-o:before{content:\"\\F01D\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\F01E\"}.fa-refresh:before{content:\"\\F021\"}.fa-list-alt:before{content:\"\\F022\"}.fa-lock:before{content:\"\\F023\"}.fa-flag:before{content:\"\\F024\"}.fa-headphones:before{content:\"\\F025\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-up:before{content:\"\\F028\"}.fa-qrcode:before{content:\"\\F029\"}.fa-barcode:before{content:\"\\F02A\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-book:before{content:\"\\F02D\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-print:before{content:\"\\F02F\"}.fa-camera:before{content:\"\\F030\"}.fa-font:before{content:\"\\F031\"}.fa-bold:before{content:\"\\F032\"}.fa-italic:before{content:\"\\F033\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-right:before{content:\"\\F038\"}.fa-align-justify:before{content:\"\\F039\"}.fa-list:before{content:\"\\F03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}.fa-indent:before{content:\"\\F03C\"}.fa-video-camera:before{content:\"\\F03D\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\F03E\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-adjust:before{content:\"\\F042\"}.fa-tint:before{content:\"\\F043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}.fa-share-square-o:before{content:\"\\F045\"}.fa-check-square-o:before{content:\"\\F046\"}.fa-arrows:before{content:\"\\F047\"}.fa-step-backward:before{content:\"\\F048\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-backward:before{content:\"\\F04A\"}.fa-play:before{content:\"\\F04B\"}.fa-pause:before{content:\"\\F04C\"}.fa-stop:before{content:\"\\F04D\"}.fa-forward:before{content:\"\\F04E\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-step-forward:before{content:\"\\F051\"}.fa-eject:before{content:\"\\F052\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-times-circle:before{content:\"\\F057\"}.fa-check-circle:before{content:\"\\F058\"}.fa-question-circle:before{content:\"\\F059\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-times-circle-o:before{content:\"\\F05C\"}.fa-check-circle-o:before{content:\"\\F05D\"}.fa-ban:before{content:\"\\F05E\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}.fa-expand:before{content:\"\\F065\"}.fa-compress:before{content:\"\\F066\"}.fa-plus:before{content:\"\\F067\"}.fa-minus:before{content:\"\\F068\"}.fa-asterisk:before{content:\"\\F069\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-gift:before{content:\"\\F06B\"}.fa-leaf:before{content:\"\\F06C\"}.fa-fire:before{content:\"\\F06D\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-plane:before{content:\"\\F072\"}.fa-calendar:before{content:\"\\F073\"}.fa-random:before{content:\"\\F074\"}.fa-comment:before{content:\"\\F075\"}.fa-magnet:before{content:\"\\F076\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-retweet:before{content:\"\\F079\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-arrows-v:before{content:\"\\F07D\"}.fa-arrows-h:before{content:\"\\F07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\F080\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-key:before{content:\"\\F084\"}.fa-gears:before,.fa-cogs:before{content:\"\\F085\"}.fa-comments:before{content:\"\\F086\"}.fa-thumbs-o-up:before{content:\"\\F087\"}.fa-thumbs-o-down:before{content:\"\\F088\"}.fa-star-half:before{content:\"\\F089\"}.fa-heart-o:before{content:\"\\F08A\"}.fa-sign-out:before{content:\"\\F08B\"}.fa-linkedin-square:before{content:\"\\F08C\"}.fa-thumb-tack:before{content:\"\\F08D\"}.fa-external-link:before{content:\"\\F08E\"}.fa-sign-in:before{content:\"\\F090\"}.fa-trophy:before{content:\"\\F091\"}.fa-github-square:before{content:\"\\F092\"}.fa-upload:before{content:\"\\F093\"}.fa-lemon-o:before{content:\"\\F094\"}.fa-phone:before{content:\"\\F095\"}.fa-square-o:before{content:\"\\F096\"}.fa-bookmark-o:before{content:\"\\F097\"}.fa-phone-square:before{content:\"\\F098\"}.fa-twitter:before{content:\"\\F099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\F09A\"}.fa-github:before{content:\"\\F09B\"}.fa-unlock:before{content:\"\\F09C\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-feed:before,.fa-rss:before{content:\"\\F09E\"}.fa-hdd-o:before{content:\"\\F0A0\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bell:before{content:\"\\F0F3\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-hand-o-right:before{content:\"\\F0A4\"}.fa-hand-o-left:before{content:\"\\F0A5\"}.fa-hand-o-up:before{content:\"\\F0A6\"}.fa-hand-o-down:before{content:\"\\F0A7\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-globe:before{content:\"\\F0AC\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-filter:before{content:\"\\F0B0\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-group:before,.fa-users:before{content:\"\\F0C0\"}.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-flask:before{content:\"\\F0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\F0C7\"}.fa-square:before{content:\"\\F0C8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\F0C9\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-underline:before{content:\"\\F0CD\"}.fa-table:before{content:\"\\F0CE\"}.fa-magic:before{content:\"\\F0D0\"}.fa-truck:before{content:\"\\F0D1\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-money:before{content:\"\\F0D6\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-columns:before{content:\"\\F0DB\"}.fa-unsorted:before,.fa-sort:before{content:\"\\F0DC\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\F0DD\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\F0DE\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-linkedin:before{content:\"\\F0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}.fa-legal:before,.fa-gavel:before{content:\"\\F0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}.fa-comment-o:before{content:\"\\F0E5\"}.fa-comments-o:before{content:\"\\F0E6\"}.fa-flash:before,.fa-bolt:before{content:\"\\F0E7\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\F0EA\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-exchange:before{content:\"\\F0EC\"}.fa-cloud-download:before{content:\"\\F0ED\"}.fa-cloud-upload:before{content:\"\\F0EE\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-bell-o:before{content:\"\\F0A2\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cutlery:before{content:\"\\F0F5\"}.fa-file-text-o:before{content:\"\\F0F6\"}.fa-building-o:before{content:\"\\F0F7\"}.fa-hospital-o:before{content:\"\\F0F8\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-beer:before{content:\"\\F0FC\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-desktop:before{content:\"\\F108\"}.fa-laptop:before{content:\"\\F109\"}.fa-tablet:before{content:\"\\F10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}.fa-circle-o:before{content:\"\\F10C\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-spinner:before{content:\"\\F110\"}.fa-circle:before{content:\"\\F111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}.fa-github-alt:before{content:\"\\F113\"}.fa-folder-o:before{content:\"\\F114\"}.fa-folder-open-o:before{content:\"\\F115\"}.fa-smile-o:before{content:\"\\F118\"}.fa-frown-o:before{content:\"\\F119\"}.fa-meh-o:before{content:\"\\F11A\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-keyboard-o:before{content:\"\\F11C\"}.fa-flag-o:before{content:\"\\F11D\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-terminal:before{content:\"\\F120\"}.fa-code:before{content:\"\\F121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\F122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-crop:before{content:\"\\F125\"}.fa-code-fork:before{content:\"\\F126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\F127\"}.fa-question:before{content:\"\\F128\"}.fa-info:before{content:\"\\F129\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-superscript:before{content:\"\\F12B\"}.fa-subscript:before{content:\"\\F12C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-shield:before{content:\"\\F132\"}.fa-calendar-o:before{content:\"\\F133\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-rocket:before{content:\"\\F135\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-html5:before{content:\"\\F13B\"}.fa-css3:before{content:\"\\F13C\"}.fa-anchor:before{content:\"\\F13D\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-bullseye:before{content:\"\\F140\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-rss-square:before{content:\"\\F143\"}.fa-play-circle:before{content:\"\\F144\"}.fa-ticket:before{content:\"\\F145\"}.fa-minus-square:before{content:\"\\F146\"}.fa-minus-square-o:before{content:\"\\F147\"}.fa-level-up:before{content:\"\\F148\"}.fa-level-down:before{content:\"\\F149\"}.fa-check-square:before{content:\"\\F14A\"}.fa-pencil-square:before{content:\"\\F14B\"}.fa-external-link-square:before{content:\"\\F14C\"}.fa-share-square:before{content:\"\\F14D\"}.fa-compass:before{content:\"\\F14E\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\F150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\F151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\F152\"}.fa-euro:before,.fa-eur:before{content:\"\\F153\"}.fa-gbp:before{content:\"\\F154\"}.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}.fa-rupee:before,.fa-inr:before{content:\"\\F156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\F157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\F158\"}.fa-won:before,.fa-krw:before{content:\"\\F159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}.fa-file:before{content:\"\\F15B\"}.fa-file-text:before{content:\"\\F15C\"}.fa-sort-alpha-asc:before{content:\"\\F15D\"}.fa-sort-alpha-desc:before{content:\"\\F15E\"}.fa-sort-amount-asc:before{content:\"\\F160\"}.fa-sort-amount-desc:before{content:\"\\F161\"}.fa-sort-numeric-asc:before{content:\"\\F162\"}.fa-sort-numeric-desc:before{content:\"\\F163\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-youtube-square:before{content:\"\\F166\"}.fa-youtube:before{content:\"\\F167\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-youtube-play:before{content:\"\\F16A\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-instagram:before{content:\"\\F16D\"}.fa-flickr:before{content:\"\\F16E\"}.fa-adn:before{content:\"\\F170\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitbucket-square:before{content:\"\\F172\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-long-arrow-down:before{content:\"\\F175\"}.fa-long-arrow-up:before{content:\"\\F176\"}.fa-long-arrow-left:before{content:\"\\F177\"}.fa-long-arrow-right:before{content:\"\\F178\"}.fa-apple:before{content:\"\\F179\"}.fa-windows:before{content:\"\\F17A\"}.fa-android:before{content:\"\\F17B\"}.fa-linux:before{content:\"\\F17C\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-skype:before{content:\"\\F17E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-trello:before{content:\"\\F181\"}.fa-female:before{content:\"\\F182\"}.fa-male:before{content:\"\\F183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\F184\"}.fa-sun-o:before{content:\"\\F185\"}.fa-moon-o:before{content:\"\\F186\"}.fa-archive:before{content:\"\\F187\"}.fa-bug:before{content:\"\\F188\"}.fa-vk:before{content:\"\\F189\"}.fa-weibo:before{content:\"\\F18A\"}.fa-renren:before{content:\"\\F18B\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-arrow-circle-o-right:before{content:\"\\F18E\"}.fa-arrow-circle-o-left:before{content:\"\\F190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\F191\"}.fa-dot-circle-o:before{content:\"\\F192\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\F195\"}.fa-plus-square-o:before{content:\"\\F196\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-slack:before{content:\"\\F198\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-openid:before{content:\"\\F19B\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\F19C\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\F19D\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-google:before{content:\"\\F1A0\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-digg:before{content:\"\\F1A6\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-language:before{content:\"\\F1AB\"}.fa-fax:before{content:\"\\F1AC\"}.fa-building:before{content:\"\\F1AD\"}.fa-child:before{content:\"\\F1AE\"}.fa-paw:before{content:\"\\F1B0\"}.fa-spoon:before{content:\"\\F1B1\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-automobile:before,.fa-car:before{content:\"\\F1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\\F1BA\"}.fa-tree:before{content:\"\\F1BB\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-database:before{content:\"\\F1C0\"}.fa-file-pdf-o:before{content:\"\\F1C1\"}.fa-file-word-o:before{content:\"\\F1C2\"}.fa-file-excel-o:before{content:\"\\F1C3\"}.fa-file-powerpoint-o:before{content:\"\\F1C4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\F1C5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\F1C6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\F1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\F1C8\"}.fa-file-code-o:before{content:\"\\F1C9\"}.fa-vine:before{content:\"\\F1CA\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\F1CD\"}.fa-circle-o-notch:before{content:\"\\F1CE\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\F1D0\"}.fa-ge:before,.fa-empire:before{content:\"\\F1D1\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-git:before{content:\"\\F1D3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\F1D4\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-qq:before{content:\"\\F1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\F1D7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\F1D8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\F1D9\"}.fa-history:before{content:\"\\F1DA\"}.fa-circle-thin:before{content:\"\\F1DB\"}.fa-header:before{content:\"\\F1DC\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-sliders:before{content:\"\\F1DE\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\F1E3\"}.fa-tty:before{content:\"\\F1E4\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-plug:before{content:\"\\F1E6\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-newspaper-o:before{content:\"\\F1EA\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bell-slash-o:before{content:\"\\F1F7\"}.fa-trash:before{content:\"\\F1F8\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-at:before{content:\"\\F1FA\"}.fa-eyedropper:before{content:\"\\F1FB\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-area-chart:before{content:\"\\F1FE\"}.fa-pie-chart:before{content:\"\\F200\"}.fa-line-chart:before{content:\"\\F201\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bus:before{content:\"\\F207\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-angellist:before{content:\"\\F209\"}.fa-cc:before{content:\"\\F20A\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\F20B\"}.fa-meanpath:before{content:\"\\F20C\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-dashcube:before{content:\"\\F210\"}.fa-forumbee:before{content:\"\\F211\"}.fa-leanpub:before{content:\"\\F212\"}.fa-sellsy:before{content:\"\\F213\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-diamond:before{content:\"\\F219\"}.fa-ship:before{content:\"\\F21A\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-street-view:before{content:\"\\F21D\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-venus:before{content:\"\\F221\"}.fa-mars:before{content:\"\\F222\"}.fa-mercury:before{content:\"\\F223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-venus-double:before{content:\"\\F226\"}.fa-mars-double:before{content:\"\\F227\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-neuter:before{content:\"\\F22C\"}.fa-genderless:before{content:\"\\F22D\"}.fa-facebook-official:before{content:\"\\F230\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-server:before{content:\"\\F233\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-times:before{content:\"\\F235\"}.fa-hotel:before,.fa-bed:before{content:\"\\F236\"}.fa-viacoin:before{content:\"\\F237\"}.fa-train:before{content:\"\\F238\"}.fa-subway:before{content:\"\\F239\"}.fa-medium:before{content:\"\\F23A\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\F23B\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-opencart:before{content:\"\\F23D\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\F240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\F242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\F244\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-sticky-note-o:before{content:\"\\F24A\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-clone:before{content:\"\\F24D\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-hourglass-o:before{content:\"\\F250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\F251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\F255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\F256\"}.fa-hand-scissors-o:before{content:\"\\F257\"}.fa-hand-lizard-o:before{content:\"\\F258\"}.fa-hand-spock-o:before{content:\"\\F259\"}.fa-hand-pointer-o:before{content:\"\\F25A\"}.fa-hand-peace-o:before{content:\"\\F25B\"}.fa-trademark:before{content:\"\\F25C\"}.fa-registered:before{content:\"\\F25D\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-safari:before{content:\"\\F267\"}.fa-chrome:before{content:\"\\F268\"}.fa-firefox:before{content:\"\\F269\"}.fa-opera:before{content:\"\\F26A\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-tv:before,.fa-television:before{content:\"\\F26C\"}.fa-contao:before{content:\"\\F26D\"}.fa-500px:before{content:\"\\F26E\"}.fa-amazon:before{content:\"\\F270\"}.fa-calendar-plus-o:before{content:\"\\F271\"}.fa-calendar-minus-o:before{content:\"\\F272\"}.fa-calendar-times-o:before{content:\"\\F273\"}.fa-calendar-check-o:before{content:\"\\F274\"}.fa-industry:before{content:\"\\F275\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-map-o:before{content:\"\\F278\"}.fa-map:before{content:\"\\F279\"}.fa-commenting:before{content:\"\\F27A\"}.fa-commenting-o:before{content:\"\\F27B\"}.fa-houzz:before{content:\"\\F27C\"}.fa-vimeo:before{content:\"\\F27D\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-fonticons:before{content:\"\\F280\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-edge:before{content:\"\\F282\"}.fa-credit-card-alt:before{content:\"\\F283\"}.fa-codiepie:before{content:\"\\F284\"}.fa-modx:before{content:\"\\F285\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-usb:before{content:\"\\F287\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-scribd:before{content:\"\\F28A\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-pause-circle-o:before{content:\"\\F28C\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stop-circle-o:before{content:\"\\F28E\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-hashtag:before{content:\"\\F292\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-percent:before{content:\"\\F295\"}.fa-gitlab:before{content:\"\\F296\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpforms:before{content:\"\\F298\"}.fa-envira:before{content:\"\\F299\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-wheelchair-alt:before{content:\"\\F29B\"}.fa-question-circle-o:before{content:\"\\F29C\"}.fa-blind:before{content:\"\\F29D\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-volume-control-phone:before{content:\"\\F2A0\"}.fa-braille:before{content:\"\\F2A1\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\F2A4\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\F2A7\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\F2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\F2B4\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}*{box-sizing:border-box}*:before,*:after{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:all 0.2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=\"button\"]{cursor:pointer}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h1 .small,h2 small,h2 .small,h3 small,h3 .small,h4 small,h4 .small,h5 small,h5 .small,h6 small,h6 .small,.h1 small,.h1 .small,.h2 small,.h2 .small,.h3 small,.h3 .small,.h4 small,.h4 .small,.h5 small,.h5 .small,.h6 small,.h6 .small{font-weight:normal;line-height:1;color:#777}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,h1 .small,.h1 small,.h1 .small,h2 small,h2 .small,.h2 small,.h2 .small,h3 small,h3 .small,.h3 small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,h4 .small,.h4 small,.h4 .small,h5 small,h5 .small,.h5 small,.h5 .small,h6 small,h6 .small,.h6 small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:21px}}small,.small{font-size:85%}mark,.mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase,.initialism{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:hover,a.text-primary:focus{color:#286090}.text-success{color:#3c763d}a.text-success:hover,a.text-success:focus{color:#2b542c}.text-info{color:#31708f}a.text-info:hover,a.text-info:focus{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover,a.text-warning:focus{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover,a.text-danger:focus{color:#843534}.bg-primary{color:#fff}.bg-primary{background-color:#337ab7}a.bg-primary:hover,a.bg-primary:focus{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover,a.bg-success:focus{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover,a.bg-info:focus{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover,a.bg-warning:focus{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover,a.bg-danger:focus{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ul ol,ol ul,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857}dt{font-weight:bold}dd{margin-left:0}.dl-horizontal dd:before,.dl-horizontal dd:after{content:\" \";display:table}.dl-horizontal dd:after{clear:both}@media (min-width: 768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857;color:#777}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse footer:before,.blockquote-reverse small:before,.blockquote-reverse .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,.blockquote-reverse small:after,.blockquote-reverse .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after,blockquote.pull-right .small:after{content:'\\A0   \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}kbd kbd{padding:0;font-size:100%;font-weight:bold;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container:before,.container:after{content:\" \";display:table}.container:after{clear:both}@media (min-width: 768px){.container{width:750px}}@media (min-width: 992px){.container{width:970px}}@media (min-width: 1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container-fluid:before,.container-fluid:after{content:\" \";display:table}.container-fluid:after{clear:both}.row{margin-left:-15px;margin-right:-15px}.row:before,.row:after{content:\" \";display:table}.row:after{clear:both}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-1{width:8.33333%}.col-xs-2{width:16.66667%}.col-xs-3{width:25%}.col-xs-4{width:33.33333%}.col-xs-5{width:41.66667%}.col-xs-6{width:50%}.col-xs-7{width:58.33333%}.col-xs-8{width:66.66667%}.col-xs-9{width:75%}.col-xs-10{width:83.33333%}.col-xs-11{width:91.66667%}.col-xs-12{width:100%}.col-xs-pull-0{right:auto}.col-xs-pull-1{right:8.33333%}.col-xs-pull-2{right:16.66667%}.col-xs-pull-3{right:25%}.col-xs-pull-4{right:33.33333%}.col-xs-pull-5{right:41.66667%}.col-xs-pull-6{right:50%}.col-xs-pull-7{right:58.33333%}.col-xs-pull-8{right:66.66667%}.col-xs-pull-9{right:75%}.col-xs-pull-10{right:83.33333%}.col-xs-pull-11{right:91.66667%}.col-xs-pull-12{right:100%}.col-xs-push-0{left:auto}.col-xs-push-1{left:8.33333%}.col-xs-push-2{left:16.66667%}.col-xs-push-3{left:25%}.col-xs-push-4{left:33.33333%}.col-xs-push-5{left:41.66667%}.col-xs-push-6{left:50%}.col-xs-push-7{left:58.33333%}.col-xs-push-8{left:66.66667%}.col-xs-push-9{left:75%}.col-xs-push-10{left:83.33333%}.col-xs-push-11{left:91.66667%}.col-xs-push-12{left:100%}.col-xs-offset-0{margin-left:0%}.col-xs-offset-1{margin-left:8.33333%}.col-xs-offset-2{margin-left:16.66667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333%}.col-xs-offset-5{margin-left:41.66667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333%}.col-xs-offset-8{margin-left:66.66667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333%}.col-xs-offset-11{margin-left:91.66667%}.col-xs-offset-12{margin-left:100%}@media (min-width: 768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-1{width:8.33333%}.col-sm-2{width:16.66667%}.col-sm-3{width:25%}.col-sm-4{width:33.33333%}.col-sm-5{width:41.66667%}.col-sm-6{width:50%}.col-sm-7{width:58.33333%}.col-sm-8{width:66.66667%}.col-sm-9{width:75%}.col-sm-10{width:83.33333%}.col-sm-11{width:91.66667%}.col-sm-12{width:100%}.col-sm-pull-0{right:auto}.col-sm-pull-1{right:8.33333%}.col-sm-pull-2{right:16.66667%}.col-sm-pull-3{right:25%}.col-sm-pull-4{right:33.33333%}.col-sm-pull-5{right:41.66667%}.col-sm-pull-6{right:50%}.col-sm-pull-7{right:58.33333%}.col-sm-pull-8{right:66.66667%}.col-sm-pull-9{right:75%}.col-sm-pull-10{right:83.33333%}.col-sm-pull-11{right:91.66667%}.col-sm-pull-12{right:100%}.col-sm-push-0{left:auto}.col-sm-push-1{left:8.33333%}.col-sm-push-2{left:16.66667%}.col-sm-push-3{left:25%}.col-sm-push-4{left:33.33333%}.col-sm-push-5{left:41.66667%}.col-sm-push-6{left:50%}.col-sm-push-7{left:58.33333%}.col-sm-push-8{left:66.66667%}.col-sm-push-9{left:75%}.col-sm-push-10{left:83.33333%}.col-sm-push-11{left:91.66667%}.col-sm-push-12{left:100%}.col-sm-offset-0{margin-left:0%}.col-sm-offset-1{margin-left:8.33333%}.col-sm-offset-2{margin-left:16.66667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333%}.col-sm-offset-5{margin-left:41.66667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333%}.col-sm-offset-8{margin-left:66.66667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333%}.col-sm-offset-11{margin-left:91.66667%}.col-sm-offset-12{margin-left:100%}}@media (min-width: 992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-1{width:8.33333%}.col-md-2{width:16.66667%}.col-md-3{width:25%}.col-md-4{width:33.33333%}.col-md-5{width:41.66667%}.col-md-6{width:50%}.col-md-7{width:58.33333%}.col-md-8{width:66.66667%}.col-md-9{width:75%}.col-md-10{width:83.33333%}.col-md-11{width:91.66667%}.col-md-12{width:100%}.col-md-pull-0{right:auto}.col-md-pull-1{right:8.33333%}.col-md-pull-2{right:16.66667%}.col-md-pull-3{right:25%}.col-md-pull-4{right:33.33333%}.col-md-pull-5{right:41.66667%}.col-md-pull-6{right:50%}.col-md-pull-7{right:58.33333%}.col-md-pull-8{right:66.66667%}.col-md-pull-9{right:75%}.col-md-pull-10{right:83.33333%}.col-md-pull-11{right:91.66667%}.col-md-pull-12{right:100%}.col-md-push-0{left:auto}.col-md-push-1{left:8.33333%}.col-md-push-2{left:16.66667%}.col-md-push-3{left:25%}.col-md-push-4{left:33.33333%}.col-md-push-5{left:41.66667%}.col-md-push-6{left:50%}.col-md-push-7{left:58.33333%}.col-md-push-8{left:66.66667%}.col-md-push-9{left:75%}.col-md-push-10{left:83.33333%}.col-md-push-11{left:91.66667%}.col-md-push-12{left:100%}.col-md-offset-0{margin-left:0%}.col-md-offset-1{margin-left:8.33333%}.col-md-offset-2{margin-left:16.66667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333%}.col-md-offset-5{margin-left:41.66667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333%}.col-md-offset-8{margin-left:66.66667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333%}.col-md-offset-11{margin-left:91.66667%}.col-md-offset-12{margin-left:100%}}@media (min-width: 1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-1{width:8.33333%}.col-lg-2{width:16.66667%}.col-lg-3{width:25%}.col-lg-4{width:33.33333%}.col-lg-5{width:41.66667%}.col-lg-6{width:50%}.col-lg-7{width:58.33333%}.col-lg-8{width:66.66667%}.col-lg-9{width:75%}.col-lg-10{width:83.33333%}.col-lg-11{width:91.66667%}.col-lg-12{width:100%}.col-lg-pull-0{right:auto}.col-lg-pull-1{right:8.33333%}.col-lg-pull-2{right:16.66667%}.col-lg-pull-3{right:25%}.col-lg-pull-4{right:33.33333%}.col-lg-pull-5{right:41.66667%}.col-lg-pull-6{right:50%}.col-lg-pull-7{right:58.33333%}.col-lg-pull-8{right:66.66667%}.col-lg-pull-9{right:75%}.col-lg-pull-10{right:83.33333%}.col-lg-pull-11{right:91.66667%}.col-lg-pull-12{right:100%}.col-lg-push-0{left:auto}.col-lg-push-1{left:8.33333%}.col-lg-push-2{left:16.66667%}.col-lg-push-3{left:25%}.col-lg-push-4{left:33.33333%}.col-lg-push-5{left:41.66667%}.col-lg-push-6{left:50%}.col-lg-push-7{left:58.33333%}.col-lg-push-8{left:66.66667%}.col-lg-push-9{left:75%}.col-lg-push-10{left:83.33333%}.col-lg-push-11{left:91.66667%}.col-lg-push-12{left:100%}.col-lg-offset-0{margin-left:0%}.col-lg-offset-1{margin-left:8.33333%}.col-lg-offset-2{margin-left:16.66667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333%}.col-lg-offset-5{margin-left:41.66667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333%}.col-lg-offset-8{margin-left:66.66667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333%}.col-lg-offset-11{margin-left:91.66667%}.col-lg-offset-12{margin-left:100%}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>thead>tr>th,.table>thead>tr>td,.table>tbody>tr>th,.table>tbody>tr>td,.table>tfoot>tr>th,.table>tfoot>tr>td{padding:8px;line-height:1.42857;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>th,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>thead>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>tfoot>tr>td{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=\"col-\"]{position:static;float:none;display:table-column}table td[class*=\"col-\"],table th[class*=\"col-\"]{position:static;float:none;display:table-cell}.table>thead>tr>td.active,.table>thead>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}.table>thead>tr>td.success,.table>thead>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th{background-color:#dff0d8}.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}.table>thead>tr>td.info,.table>thead>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th{background-color:#d9edf7}.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}.table>thead>tr>td.warning,.table>thead>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}.table>thead>tr>td.danger,.table>thead>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th{background-color:#f2dede}.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}.table-responsive{overflow-x:auto;min-height:0.01%}@media screen and (max-width: 767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type=\"search\"]{box-sizing:border-box}input[type=\"radio\"],input[type=\"checkbox\"]{margin:4px 0 0;margin-top:1px \\9;line-height:normal}input[type=\"file\"]{display:block}input[type=\"range\"]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=\"file\"]:focus,input[type=\"radio\"]:focus,input[type=\"checkbox\"]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);transition:border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{border:0;background-color:transparent}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=\"search\"]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio: 0){input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{line-height:34px}input[type=\"date\"].input-sm,.input-group-sm>input[type=\"date\"].form-control,.input-group-sm>input[type=\"date\"].input-group-addon,.input-group-sm>.input-group-btn>input[type=\"date\"].btn,.input-group-sm input[type=\"date\"],input[type=\"time\"].input-sm,.input-group-sm>input[type=\"time\"].form-control,.input-group-sm>input[type=\"time\"].input-group-addon,.input-group-sm>.input-group-btn>input[type=\"time\"].btn,.input-group-sm input[type=\"time\"],input[type=\"datetime-local\"].input-sm,.input-group-sm>input[type=\"datetime-local\"].form-control,.input-group-sm>input[type=\"datetime-local\"].input-group-addon,.input-group-sm>.input-group-btn>input[type=\"datetime-local\"].btn,.input-group-sm input[type=\"datetime-local\"],input[type=\"month\"].input-sm,.input-group-sm>input[type=\"month\"].form-control,.input-group-sm>input[type=\"month\"].input-group-addon,.input-group-sm>.input-group-btn>input[type=\"month\"].btn,.input-group-sm input[type=\"month\"]{line-height:30px}input[type=\"date\"].input-lg,.input-group-lg>input[type=\"date\"].form-control,.input-group-lg>input[type=\"date\"].input-group-addon,.input-group-lg>.input-group-btn>input[type=\"date\"].btn,.input-group-lg input[type=\"date\"],input[type=\"time\"].input-lg,.input-group-lg>input[type=\"time\"].form-control,.input-group-lg>input[type=\"time\"].input-group-addon,.input-group-lg>.input-group-btn>input[type=\"time\"].btn,.input-group-lg input[type=\"time\"],input[type=\"datetime-local\"].input-lg,.input-group-lg>input[type=\"datetime-local\"].form-control,.input-group-lg>input[type=\"datetime-local\"].input-group-addon,.input-group-lg>.input-group-btn>input[type=\"datetime-local\"].btn,.input-group-lg input[type=\"datetime-local\"],input[type=\"month\"].input-lg,.input-group-lg>input[type=\"month\"].form-control,.input-group-lg>input[type=\"month\"].input-group-addon,.input-group-lg>.input-group-btn>input[type=\"month\"].btn,.input-group-lg input[type=\"month\"]{line-height:46px}}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type=\"radio\"],.radio-inline input[type=\"radio\"],.checkbox input[type=\"checkbox\"],.checkbox-inline input[type=\"checkbox\"]{position:absolute;margin-left:-20px;margin-top:4px \\9}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type=\"radio\"][disabled],input[type=\"radio\"].disabled,fieldset[disabled] input[type=\"radio\"],input[type=\"checkbox\"][disabled],input[type=\"checkbox\"].disabled,fieldset[disabled] input[type=\"checkbox\"]{cursor:not-allowed}.radio-inline.disabled,fieldset[disabled] .radio-inline,.checkbox-inline.disabled,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,fieldset[disabled] .radio label,.checkbox.disabled label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:34px}.form-control-static.input-lg,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.form-control-static.input-sm,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn{padding-left:0;padding-right:0}.input-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm,.input-group-sm>select.form-control,.input-group-sm>select.input-group-addon,.input-group-sm>.input-group-btn>select.btn{height:30px;line-height:30px}textarea.input-sm,.input-group-sm>textarea.form-control,.input-group-sm>textarea.input-group-addon,.input-group-sm>.input-group-btn>textarea.btn,select[multiple].input-sm,.input-group-sm>select[multiple].form-control,.input-group-sm>select[multiple].input-group-addon,.input-group-sm>.input-group-btn>select[multiple].btn{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm textarea.form-control,.form-group-sm select[multiple].form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}select.input-lg,.input-group-lg>select.form-control,.input-group-lg>select.input-group-addon,.input-group-lg>.input-group-btn>select.btn{height:46px;line-height:46px}textarea.input-lg,.input-group-lg>textarea.form-control,.input-group-lg>textarea.input-group-addon,.input-group-lg>.input-group-btn>textarea.btn,select[multiple].input-lg,.input-group-lg>select[multiple].form-control,.input-group-lg>select[multiple].input-group-addon,.input-group-lg>.input-group-btn>select[multiple].btn{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg textarea.form-control,.form-group-lg select[multiple].form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.33333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.input-lg+.form-control-feedback,.input-group-lg>.form-control+.form-control-feedback,.input-group-lg>.input-group-addon+.form-control-feedback,.input-group-lg>.input-group-btn>.btn+.form-control-feedback,.input-group-lg+.form-control-feedback,.form-group-lg .form-control+.form-control-feedback{width:46px;height:46px;line-height:46px}.input-sm+.form-control-feedback,.input-group-sm>.form-control+.form-control-feedback,.input-group-sm>.input-group-addon+.form-control-feedback,.input-group-sm>.input-group-btn>.btn+.form-control-feedback,.input-group-sm+.form-control-feedback,.form-group-sm .form-control+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label ~ .form-control-feedback{top:25px}.has-feedback label.sr-only ~ .form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width: 768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type=\"radio\"],.form-inline .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}.form-horizontal .form-group:before,.form-horizontal .form-group:after{content:\" \";display:table}.form-horizontal .form-group:after{clear:both}@media (min-width: 768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width: 768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width: 768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;margin-bottom:0;font-weight:normal;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus,.btn.focus,.btn:active:focus,.btn:active.focus,.btn.active:focus,.btn.active.focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus,.btn.focus{color:#333;text-decoration:none}.btn:active,.btn.active{outline:0;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);box-shadow:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default:focus,.btn-default.focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active,.btn-default.active,.open>.btn-default.dropdown-toggle{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active:hover,.btn-default:active:focus,.btn-default:active.focus,.btn-default.active:hover,.btn-default.active:focus,.btn-default.active.focus,.open>.btn-default.dropdown-toggle:hover,.open>.btn-default.dropdown-toggle:focus,.open>.btn-default.dropdown-toggle.focus{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default:active,.btn-default.active,.open>.btn-default.dropdown-toggle{background-image:none}.btn-default.disabled:hover,.btn-default.disabled:focus,.btn-default.disabled.focus,.btn-default[disabled]:hover,.btn-default[disabled]:focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default:hover,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default.focus{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary:active,.btn-primary.active,.open>.btn-primary.dropdown-toggle{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary:active:hover,.btn-primary:active:focus,.btn-primary:active.focus,.btn-primary.active:hover,.btn-primary.active:focus,.btn-primary.active.focus,.open>.btn-primary.dropdown-toggle:hover,.open>.btn-primary.dropdown-toggle:focus,.open>.btn-primary.dropdown-toggle.focus{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary:active,.btn-primary.active,.open>.btn-primary.dropdown-toggle{background-image:none}.btn-primary.disabled:hover,.btn-primary.disabled:focus,.btn-primary.disabled.focus,.btn-primary[disabled]:hover,.btn-primary[disabled]:focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary:hover,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary.focus{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success:active,.btn-success.active,.open>.btn-success.dropdown-toggle{color:#fff;background-color:#449d44;border-color:#398439}.btn-success:active:hover,.btn-success:active:focus,.btn-success:active.focus,.btn-success.active:hover,.btn-success.active:focus,.btn-success.active.focus,.open>.btn-success.dropdown-toggle:hover,.open>.btn-success.dropdown-toggle:focus,.open>.btn-success.dropdown-toggle.focus{color:#fff;background-color:#398439;border-color:#255625}.btn-success:active,.btn-success.active,.open>.btn-success.dropdown-toggle{background-image:none}.btn-success.disabled:hover,.btn-success.disabled:focus,.btn-success.disabled.focus,.btn-success[disabled]:hover,.btn-success[disabled]:focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success:hover,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success.focus{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info:active,.btn-info.active,.open>.btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info:active:hover,.btn-info:active:focus,.btn-info:active.focus,.btn-info.active:hover,.btn-info.active:focus,.btn-info.active.focus,.open>.btn-info.dropdown-toggle:hover,.open>.btn-info.dropdown-toggle:focus,.open>.btn-info.dropdown-toggle.focus{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info:active,.btn-info.active,.open>.btn-info.dropdown-toggle{background-image:none}.btn-info.disabled:hover,.btn-info.disabled:focus,.btn-info.disabled.focus,.btn-info[disabled]:hover,.btn-info[disabled]:focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info:hover,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info.focus{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:focus,.btn-warning.focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning:active:hover,.btn-warning:active:focus,.btn-warning:active.focus,.btn-warning.active:hover,.btn-warning.active:focus,.btn-warning.active.focus,.open>.btn-warning.dropdown-toggle:hover,.open>.btn-warning.dropdown-toggle:focus,.open>.btn-warning.dropdown-toggle.focus{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning:active,.btn-warning.active,.open>.btn-warning.dropdown-toggle{background-image:none}.btn-warning.disabled:hover,.btn-warning.disabled:focus,.btn-warning.disabled.focus,.btn-warning[disabled]:hover,.btn-warning[disabled]:focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning:hover,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning.focus{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active:hover,.btn-danger:active:focus,.btn-danger:active.focus,.btn-danger.active:hover,.btn-danger.active:focus,.btn-danger.active.focus,.open>.btn-danger.dropdown-toggle:hover,.open>.btn-danger.dropdown-toggle:focus,.open>.btn-danger.dropdown-toggle.focus{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger:active,.btn-danger.active,.open>.btn-danger.dropdown-toggle{background-image:none}.btn-danger.disabled:hover,.btn-danger.disabled:focus,.btn-danger.disabled.focus,.btn-danger[disabled]:hover,.btn-danger[disabled]:focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger:hover,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger.focus{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{color:#337ab7;font-weight:normal;border-radius:0}.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:hover,fieldset[disabled] .btn-link:focus{color:#777;text-decoration:none}.btn-lg,.btn-group-lg>.btn{padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.btn-sm,.btn-group-sm>.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs,.btn-group-xs>.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{opacity:0;transition:opacity 0.15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition-property:height,visibility;transition-duration:0.35s;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid \\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropup,.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,0.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.42857;color:#333;white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#777}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px dashed;border-bottom:4px solid \\9;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width: 768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;float:left}.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar:before,.btn-toolbar:after{content:\" \";display:table}.btn-toolbar:after{clear:both}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn-lg+.dropdown-toggle,.btn-group-lg.btn-group>.btn+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret,.btn-group-lg>.btn .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret,.dropup .btn-group-lg>.btn .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after{content:\" \";display:table}.btn-group-vertical>.btn-group:after{clear:both}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=\"buttons\"]>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn input[type=\"checkbox\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=\"col-\"]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=\"radio\"],.input-group-addon input[type=\"checkbox\"]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav:before,.nav:after{content:\" \";display:table}.nav:after{clear:both}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified,.nav-tabs.nav-justified{width:100%}.nav-justified>li,.nav-tabs.nav-justified>li{float:none}.nav-justified>li>a,.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width: 768px){.nav-justified>li,.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a,.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified,.nav-tabs.nav-justified{border-bottom:0}.nav-tabs-justified>li>a,.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs.nav-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}@media (min-width: 768px){.nav-tabs-justified>li>a,.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs.nav-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}.navbar:before,.navbar:after{content:\" \";display:table}.navbar:after{clear:both}@media (min-width: 768px){.navbar{border-radius:4px}}.navbar-header:before,.navbar-header:after{content:\" \";display:table}.navbar-header:after{clear:both}@media (min-width: 768px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}.navbar-collapse:before,.navbar-collapse:after{content:\" \";display:table}.navbar-collapse:after{clear:both}.navbar-collapse.in{overflow-y:auto}@media (min-width: 768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block !important;height:auto !important;padding-bottom:0;overflow:visible !important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}}.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}@media (max-device-width: 480px) and (orientation: landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}}.container>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-header,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width: 768px){.container>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-header,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width: 768px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width: 768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px 15px;font-size:18px;line-height:20px;height:50px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-brand>img{display:block}@media (min-width: 768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width: 768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width: 767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media (min-width: 768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);margin-top:8px;margin-bottom:8px}@media (min-width: 768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn,.navbar-form .input-group .form-control{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .radio label,.navbar-form .checkbox label{padding-left:0}.navbar-form .radio input[type=\"radio\"],.navbar-form .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width: 767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width: 768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm,.btn-group-sm>.navbar-btn.btn{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs,.btn-group-xs>.navbar-btn.btn{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width: 768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}}@media (min-width: 768px){.navbar-left{float:left !important}.navbar-right{float:right !important;margin-right:-15px}.navbar-right ~ .navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{background-color:#e7e7e7;color:#555}@media (max-width: 767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:hover,.navbar-default .btn-link:focus{color:#333}.navbar-default .btn-link[disabled]:hover,.navbar-default .btn-link[disabled]:focus,fieldset[disabled] .navbar-default .btn-link:hover,fieldset[disabled] .navbar-default .btn-link:focus{color:#ccc}.navbar-inverse{background-color:#222;border-color:#090909}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#fff;background-color:#090909}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{background-color:#090909;color:#fff}@media (max-width: 767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#090909}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#090909}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#fff;background-color:#090909}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:hover,.navbar-inverse .btn-link:focus{color:#fff}.navbar-inverse .btn-link[disabled]:hover,.navbar-inverse .btn-link[disabled]:focus,fieldset[disabled] .navbar-inverse .btn-link:hover,fieldset[disabled] .navbar-inverse .btn-link:focus{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{content:\"/\\A0\";padding:0 5px;color:#ccc}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857;text-decoration:none;color:#337ab7;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:4px;border-top-right-radius:4px}.pagination>li>a:hover,.pagination>li>a:focus,.pagination>li>span:hover,.pagination>li>span:focus{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:hover,.pagination>.active>a:focus,.pagination>.active>span,.pagination>.active>span:hover,.pagination>.active>span:focus{z-index:3;color:#fff;background-color:#337ab7;border-color:#337ab7;cursor:default}.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.33333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:6px;border-top-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:6px;border-top-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.pager{padding-left:0;margin:20px 0;list-style:none;text-align:center}.pager:before,.pager:after{content:\" \";display:table}.pager:after{clear:both}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#777;background-color:#fff;cursor:not-allowed}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}.label:empty{display:none}.btn .label{position:relative;top:-1px}a.label:hover,a.label:focus{color:#fff;text-decoration:none;cursor:pointer}.label-default{background-color:#777}.label-default[href]:hover,.label-default[href]:focus{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:hover,.label-primary[href]:focus{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:hover,.label-success[href]:focus{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:hover,.label-info[href]:focus{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:hover,.label-warning[href]:focus{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:hover,.label-danger[href]:focus{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:bold;color:#fff;line-height:1;vertical-align:middle;white-space:nowrap;text-align:center;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-xs .badge,.btn-group-xs>.btn .badge,.btn-group-xs>.btn .badge{top:0;padding:1px 5px}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron h1,.jumbotron .h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{border-radius:6px;padding-left:15px;padding-right:15px}.jumbotron .container{max-width:100%}@media screen and (min-width: 768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-left:60px;padding-right:60px}.jumbotron h1,.jumbotron .h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:border 0.2s ease-in-out}.thumbnail>img,.thumbnail a>img{display:block;max-width:100%;height:auto;margin-left:auto;margin-right:auto}.thumbnail .caption{padding:9px;color:#333}a.thumbnail:hover,a.thumbnail:focus,a.thumbnail.active{border-color:#337ab7}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{overflow:hidden;height:20px;margin-bottom:20px;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.progress-bar{float:left;width:0%;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);transition:width 0.6s ease}.progress-striped .progress-bar,.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:40px 40px}.progress.active .progress-bar,.progress-bar.active{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{zoom:1;overflow:hidden}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-left,.media-right,.media-body{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{margin-bottom:20px;padding-left:0}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:hover,a.list-group-item:focus,button.list-group-item:hover,button.list-group-item:focus{text-decoration:none;color:#555;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:hover,.list-group-item.disabled:focus{background-color:#eee;color:#777;cursor:not-allowed}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:hover,.list-group-item.active:focus{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>small,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading>.small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:hover .list-group-item-text,.list-group-item.active:focus .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:hover,a.list-group-item-success:focus,button.list-group-item-success:hover,button.list-group-item-success:focus{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:hover,a.list-group-item-success.active:focus,button.list-group-item-success.active,button.list-group-item-success.active:hover,button.list-group-item-success.active:focus{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:hover,a.list-group-item-info:focus,button.list-group-item-info:hover,button.list-group-item-info:focus{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:hover,a.list-group-item-info.active:focus,button.list-group-item-info.active,button.list-group-item-info.active:hover,button.list-group-item-info.active:focus{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:hover,a.list-group-item-warning:focus,button.list-group-item-warning:hover,button.list-group-item-warning:focus{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:hover,a.list-group-item-warning.active:focus,button.list-group-item-warning.active,button.list-group-item-warning.active:hover,button.list-group-item-warning.active:focus{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:hover,a.list-group-item-danger:focus,button.list-group-item-danger:hover,button.list-group-item-danger:focus{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:hover,a.list-group-item-danger.active:focus,button.list-group-item-danger.active,button.list-group-item-danger.active:hover,button.list-group-item-danger.active:focus{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,0.05)}.panel-body{padding:15px}.panel-body:before,.panel-body:after{content:\" \";display:table}.panel-body:after{clear:both}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a,.panel-title>small,.panel-title>.small,.panel-title>small>a,.panel-title>.small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:3px;border-top-left-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-right-radius:0;border-top-left-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{margin-bottom:0}.panel>.table caption,.panel>.table-responsive>.table caption,.panel>.panel-collapse>.table caption{padding-left:15px;padding-right:15px}.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:3px;border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.panel-body,.panel-group .panel-heading+.panel-collapse>.list-group{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,0.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,0.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate(0, -25%);transform:translate(0, -25%);transition:-webkit-transform 0.3s ease-out;transition:transform 0.3s ease-out;transition:transform 0.3s ease-out, -webkit-transform 0.3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;box-shadow:0 3px 9px rgba(0,0,0,0.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header:before,.modal-header:after{content:\" \";display:table}.modal-header:after{clear:both}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer:before,.modal-footer:after{content:\" \";display:table}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width: 992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,0.2)}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:\"\"}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);bottom:-11px}.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,0.25)}.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);top:-11px}.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,0.25)}.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.carousel{position:relative}.carousel-inner{position:relative;overflow:hidden;width:100%}.carousel-inner>.item{display:none;position:relative;transition:0.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;max-width:100%;height:auto;line-height:1}@media all and (transform-3d), (-webkit-transform-3d){.carousel-inner>.item{transition:-webkit-transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.next,.carousel-inner>.item.active.right{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);left:0}.carousel-inner>.item.prev,.carousel-inner>.item.active.left{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);left:0}.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right,.carousel-inner>.item.active{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);left:0}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6);background-color:transparent}.carousel-control.left{background-image:linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{left:auto;right:0;background-image:linear-gradient(to right, rgba(0,0,0,0.0001) 0%, rgba(0,0,0,0.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:hover,.carousel-control:focus{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;margin-top:-10px;z-index:5;display:inline-block}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%;margin-left:-10px}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%;margin-right:-10px}.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;line-height:1;font-family:serif}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203A'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:#000 \\9;background-color:transparent}.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width: 768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{left:20%;right:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:before,.clearfix:after{content:\" \";display:table}.clearfix:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs{display:none !important}.visible-sm{display:none !important}.visible-md{display:none !important}.visible-lg{display:none !important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}@media (max-width: 767px){.visible-xs{display:block !important}table.visible-xs{display:table !important}tr.visible-xs{display:table-row !important}th.visible-xs,td.visible-xs{display:table-cell !important}}@media (max-width: 767px){.visible-xs-block{display:block !important}}@media (max-width: 767px){.visible-xs-inline{display:inline !important}}@media (max-width: 767px){.visible-xs-inline-block{display:inline-block !important}}@media (min-width: 768px) and (max-width: 991px){.visible-sm{display:block !important}table.visible-sm{display:table !important}tr.visible-sm{display:table-row !important}th.visible-sm,td.visible-sm{display:table-cell !important}}@media (min-width: 768px) and (max-width: 991px){.visible-sm-block{display:block !important}}@media (min-width: 768px) and (max-width: 991px){.visible-sm-inline{display:inline !important}}@media (min-width: 768px) and (max-width: 991px){.visible-sm-inline-block{display:inline-block !important}}@media (min-width: 992px) and (max-width: 1199px){.visible-md{display:block !important}table.visible-md{display:table !important}tr.visible-md{display:table-row !important}th.visible-md,td.visible-md{display:table-cell !important}}@media (min-width: 992px) and (max-width: 1199px){.visible-md-block{display:block !important}}@media (min-width: 992px) and (max-width: 1199px){.visible-md-inline{display:inline !important}}@media (min-width: 992px) and (max-width: 1199px){.visible-md-inline-block{display:inline-block !important}}@media (min-width: 1200px){.visible-lg{display:block !important}table.visible-lg{display:table !important}tr.visible-lg{display:table-row !important}th.visible-lg,td.visible-lg{display:table-cell !important}}@media (min-width: 1200px){.visible-lg-block{display:block !important}}@media (min-width: 1200px){.visible-lg-inline{display:inline !important}}@media (min-width: 1200px){.visible-lg-inline-block{display:inline-block !important}}@media (max-width: 767px){.hidden-xs{display:none !important}}@media (min-width: 768px) and (max-width: 991px){.hidden-sm{display:none !important}}@media (min-width: 992px) and (max-width: 1199px){.hidden-md{display:none !important}}@media (min-width: 1200px){.hidden-lg{display:none !important}}.visible-print{display:none !important}@media print{.visible-print{display:block !important}table.visible-print{display:table !important}tr.visible-print{display:table-row !important}th.visible-print,td.visible-print{display:table-cell !important}}.visible-print-block{display:none !important}@media print{.visible-print-block{display:block !important}}.visible-print-inline{display:none !important}@media print{.visible-print-inline{display:inline !important}}.visible-print-inline-block{display:none !important}@media print{.visible-print-inline-block{display:inline-block !important}}@media print{.hidden-print{display:none !important}}@font-face{font-family:\"latolight\";src:url(" + __webpack_require__("../../../../../src/assets/fonts/lato-lig-webfont.eot") + ");src:url(" + __webpack_require__("../../../../../src/assets/fonts/lato-lig-webfont.eot") + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-lig-webfont.woff") + ") format(\"woff\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-lig-webfont.ttf") + ") format(\"truetype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-lig-webfont.svg") + ") format(\"svg\")}@font-face{font-family:\"latoregular\";src:url(" + __webpack_require__("../../../../../src/assets/fonts/lato-reg-webfont.eot") + ");src:url(" + __webpack_require__("../../../../../src/assets/fonts/lato-reg-webfont.eot") + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-reg-webfont.woff") + ") format(\"woff\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-reg-webfont.ttf") + ") format(\"truetype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-reg-webfont.svg") + ") format(\"svg\")}@font-face{font-family:\"latobold\";src:url(" + __webpack_require__("../../../../../src/assets/fonts/lato-bol-webfont.eot") + ");src:url(" + __webpack_require__("../../../../../src/assets/fonts/lato-bol-webfont.eot") + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-bol-webfont.woff") + ") format(\"woff\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-bol-webfont.ttf") + ") format(\"truetype\"),url(" + __webpack_require__("../../../../../src/assets/fonts/lato-bol-webfont.svg") + ") format(\"svg\")}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:13px;color:#555;background:#ececec}h1,h2{font-family:\"latolight\"}h3,h4,h5,h6{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}a{color:#1D92AF}a:hover,a:focus{color:#14667b}hr{border-top-color:#ddd}hr.inner-separator{border-style:dashed}label{font-weight:300}blockquote{border-color:#e4e4e4}input{border-radius:0}@media screen and (min-width: 768px){.container{max-width:100%;width:100%}}#wrapper{width:100%;margin:0 auto}body.topnav-fixed #wrapper{padding-top:50px}.full-page-wrapper.wrapper{min-height:96%;height:96%}.full-page-wrapper .inner-page{padding-top:5%}@media screen and (max-width: 768px){.full-page-wrapper{position:initial;padding-top:5em;margin-top:0}.full-page-wrapper .inner-page{position:relative;padding:0 1em}}@media screen and (max-width: 480px){.full-page-wrapper{padding-top:0}.full-page-wrapper .inner-page{padding:5em 1em}}.red-font{color:#E60404 !important}.yellow-font{color:#FFB800 !important}.green-font{color:#3E9C1A !important}.red-bg{background-color:#E60404 !important}.yellow-bg{background-color:#FFB800 !important}.green-bg{background-color:#3E9C1A !important}.link-disabled{opacity:.5;filter:alpha(opacity=50);pointer-events:none;cursor:not-allowed}.no-padding{padding:0 !important}.no-margin{margin:0 !important}.bottom-30px{margin-bottom:30px}.bottom-60px{margin-bottom:60px}.data-row{margin-bottom:0}.data-row .data-name,.data-row .data-value{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;padding:5px}@media screen and (max-width: 480px){.data-row .data-name,.data-row .data-value{display:block}}.data-row .data-name{width:12em;background-color:#ececec;color:#b9b9b9;font-size:0.9em;vertical-align:top}.data-row .data-value{padding-left:10px}.control-inline{display:-moz-inline-stack !important;display:inline-block !important;vertical-align:middle !important;zoom:1 !important;margin-right:10px}.top-bar{padding:10px 0;background-color:#555}.top-bar .logo{position:relative;top:7px}.top-bar .top-bar-right{text-align:right;position:relative;top:5px;float:right;padding-left:15px;padding-right:15px}.top-bar .top-bar-right .btn-link{margin:0 8px;color:#ddd}.top-bar .top-bar-right .btn-link:hover{color:#fff}.top-bar .top-bar-right #global-volume{padding:0;display:none}@media screen and (min-width: 620px){.top-bar .top-bar-right #global-volume{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;padding:initial}}.top-bar .top-bar-right #start-tour{display:none;padding:0}@media screen and (min-width: 620px){.top-bar .top-bar-right #start-tour{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline}}.top-bar .searchbox{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;width:16em;position:relative;top:3px}.top-bar .searchbox input[type=\"search\"]{box-shadow:none;padding:3px 6px;height:28px;font-size:0.85em;color:#fff;background-color:#4d4d4d;border-color:#484848;-webkit-appearance:none}.top-bar .searchbox .btn{padding:3px 6px;background-color:#4d4d4d;border-color:#484848}.top-bar .searchbox .btn i{color:gray}.top-bar .searchbox .btn:hover{border-color:#484848}.top-bar .searchbox .btn:hover i{color:#8d8d8d}@media screen and (max-width: 850px){.top-bar .searchbox{display:none}}.top-bar .notifications,.top-bar .logged-user{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;text-align:left}.top-bar .dropdown-menu{padding:0}.top-bar .dropdown-menu>li>a{padding:8px}.top-bar .dropdown-menu>li>a:hover{background-color:#fafafa}.top-bar .notifications{margin-left:10px;margin-right:28px}.top-bar .notifications .notification-item{position:relative;margin-left:25px}.top-bar .notifications .notification-item .open .circle{border-radius:50%;width:5px;height:5px;position:absolute;top:19px;left:4px;background-color:#fff}.top-bar .notifications .notification-item .btn-group.open>a{color:#fff}.top-bar .notifications .notification-item .btn-group>a{color:#fff}.top-bar .notifications .notification-item .btn-group>a:hover{color:#fff;text-decoration:none}.top-bar .notifications .btn-group.open .dropdown-toggle{box-shadow:none}.top-bar .notifications>ul{list-style-type:none;margin:0;padding:0;display:inline}.top-bar .notifications>ul li{margin:0;padding:0;display:inline}.top-bar .notifications>ul>li li{display:block;padding:0;border-top:1px solid #f1f1f1}.top-bar .notifications>ul>li li:first-child{border-top:none}.top-bar .notifications .count{position:absolute;top:-7px;left:58%;padding:0px 5px;border-radius:30px;line-height:16px;text-align:center;font-size:10px;border-width:2px;border-style:solid;color:#fff;background:#E60404 !important;border-color:#555}.top-bar .notifications .dropdown-menu{top:26px;width:350px}.top-bar .notifications .dropdown-menu .notification-header{font-size:0.85em;font-weight:700;line-height:2;padding:5px 8px}.top-bar .notifications .dropdown-menu .notification-footer a{text-align:center;font-size:0.85em}.top-bar .notifications .dropdown-menu .notification-footer a:hover{background:none;text-decoration:underline}.top-bar .notifications .dropdown-menu .text{font-size:0.85em;margin-bottom:0;color:#888}.top-bar .notifications .dropdown-menu .timestamp{font-size:0.75em;color:#888}.top-bar .notifications .inbox .dropdown-menu{left:-141px}@media screen and (max-width: 480px){.top-bar .notifications .inbox .dropdown-menu{left:-7.5em}}.top-bar .notifications .inbox .inbox-item{display:block}.top-bar .notifications .inbox .inbox-item.unread{background-color:#E7E7E7}.top-bar .notifications .inbox img{width:32px}.top-bar .notifications .inbox .name{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:0.85em;color:#555;font-weight:700;margin-bottom:0}.top-bar .notifications .general .dropdown-menu{left:-183px}.top-bar .notifications .general .dropdown-menu li a i{min-width:14px}.top-bar .notifications .general .dropdown-menu li a .timestamp{float:right}@media screen and (max-width: 480px){.top-bar .notifications .general .dropdown-menu{left:-10.5em}}@media screen and (max-width: 620px){.top-bar .notifications{display:none}}.top-bar .logged-user .btn{padding:0;border:none;font-size:0.9em;font-weight:700;text-decoration:none;color:#fff}.top-bar .logged-user .btn .name{font-weight:400}.top-bar .logged-user .btn .caret{border-top-color:#fff}.top-bar .logged-user .btn:hover{color:#fff;text-decoration:none}.top-bar .logged-user .btn img{border:1px solid #5e5e5e}.top-bar .logged-user .open .btn{color:#fff}.top-bar .logged-user .dropdown-menu{left:-38px;top:31px;padding:0}.top-bar .logged-user .dropdown-menu>li{border-top:1px solid #f1f1f1}.top-bar .logged-user .dropdown-menu>li:first-child{border-top:none}.top-bar .logged-user .dropdown-menu>li>a{color:#555;font-size:0.9em}@media screen and (max-width: 991px){.top-bar.navbar-fixed-top+.bottom{margin-top:112px}}body.focus-mode .top-bar{opacity:0;filter:alpha(opacity=0)}.btn-global-volume i:before{display:block;width:13px}fieldset{margin-bottom:40px}legend{color:#555;font-size:1.5em}.form-horizontal .control-label{text-align:left}.form-horizontal ul.multiselect-container .radio,.form-horizontal ul.multiselect-container .checkbox{min-height:initial;padding-top:0}div[class*=\"col-\"]>.form-group{margin-left:0;margin-right:0}.form-control,.input-group .form-control{border-radius:0;box-shadow:none}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{border-radius:0}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{border-radius:0}.has-feedback label ~ .form-control-feedback{top:35px}.has-feedback label.sr-only ~ .form-control-feedback{top:12px}.form-horizontal .has-feedback .form-control-feedback{top:10px}@media (min-width: 768px){.form-inline .has-feedback .form-control-feedback{top:10px}}.parsley-errors-list{margin:0;padding:0;border:0;overflow:hidden;*zoom:1}.parsley-errors-list li{list-style-image:none;list-style-type:none;margin-left:0;display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;white-space:nowrap;color:#DB3833;font-size:0.9em;margin-top:3px}.table>thead>tr{font-size:0.9em;background-color:#f2f2f2}.table a:hover{text-decoration:none}.table-dark-header>thead>tr{background-color:#909090;color:#fff}table.dataTable thead>tr>th{padding-left:8px;padding-right:15px}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{background:none}table.dataTable thead .row-filter input{width:100%}.dataTables_length{float:left;margin-bottom:5px}.dataTables_length select{margin-right:5px}.dataTables_filter{float:right;margin-bottom:5px}.dataTables_filter input[type=\"search\"]{margin-left:5px}@media screen and (max-width: 480px){.dataTables_filter{float:none}}.dataTables_length label,.dataTables_filter label,.dataTables_info,.dataTables_paginate{font-weight:normal;font-size:0.85em}.dataTables_info{line-height:2.7em}.dataTables_paginate{text-align:right}.dataTables_paginate ul{margin:0}.dataTables_scrollBody{margin-bottom:20px}.dataTables_scrollBody .table{margin-bottom:0}@media screen and (max-width: 480px){.dataTables_filter,.dataTables_length,.dataTables_info{display:none}}ul.ColVis_collection{border-radius:2px;box-shadow:2px 2px 4px rgba(0,0,0,0.2);width:auto;background:#fff}ul.ColVis_collection li,ul.ColVis_collection li.ColVis_Special{box-shadow:none;background:#f3f3f3;border:inherit}ul.ColVis_collection li:hover,ul.ColVis_collection li.ColVis_Special:hover{box-shadow:none;background:#ebebeb;border:inherit}ul.ColVis_collection li span{font-size:90%}.DTCR_clonedTable th{padding:10px;vertical-align:middle;background-color:#ebebeb}.DTCR_pointer{border:1px solid #E7A13D}.DTTT.btn-group{float:right;margin-bottom:1em}.DTTT.btn-group .btn{position:relative}.DTTT.btn-group .btn.btn-default{background-color:#fff;border-color:#ccc}.DTTT.btn-group .btn.btn-default:hover,.DTTT.btn-group .btn.btn-default:focus{background-color:#e6e6e6}.table-sorting thead th{cursor:pointer}.table-sorting thead th:after{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;font-family:FontAwesome;content:'';float:right}@media screen and (max-width: 480px){.table-sorting thead th:after{position:absolute;top:0}}.table-sorting .sorting_asc:after,.table-sorting .sorting_asc_disabled:after{content:'\\F0DE'}.table-sorting .sorting_desc:after,.table-sorting .sorting_desc_disabled:after{content:'\\F0DD'}.table-sorting .sorting:after{content:'\\F0DC'}.table-sorting .sorting_asc_disabled,.table-sorting .sorting_desc_disabled{color:#bbb}@media screen and (max-width: 480px){.table-sorting{position:relative}}.dataTables_scrollBody .table-sorting th:after{content:'';height:0}.table-striped>tbody>tr:nth-child(odd)>td,.table-striped>tbody>tr:nth-child(odd)>th{background-color:#F5F5F5}.table-hover>tbody>tr:hover>td,.table-hover>tbody>tr:hover>th{background-color:#FFFEED}.ui-jqgrid{background-color:#f9f9f9}.ui-jqgrid .ui-jqgrid-view{font-size:13px}.ui-jqgrid .ui-pg-input{height:inherit}.ui-jqgrid .ui-jqgrid-htable th{padding:10px 2px}.ui-jqgrid .ui-jqgrid-btable .ui-icon{cursor:pointer;font-size:18px}.ui-jqgrid .ui-jqgrid-btable .ui-icon:before{font-family:FontAwesome}.ui-jqgrid .ui-jqgrid-btable .ui-inline-edit .ui-icon-pencil{color:#FF931D}.ui-jqgrid .ui-jqgrid-btable .ui-inline-edit .ui-icon-pencil:before{content:'\\F040'}.ui-jqgrid .ui-jqgrid-btable .ui-inline-del{margin-left:15px !important;cursor:pointer}.ui-jqgrid .ui-jqgrid-btable .ui-inline-del .ui-icon-trash{color:#F31414}.ui-jqgrid .ui-jqgrid-btable .ui-inline-del .ui-icon-trash:before{content:'\\F014'}.ui-jqgrid .ui-jqgrid-btable .ui-icon-disk:before{content:'\\F00C';color:#69DD27}.ui-jqgrid .ui-jqgrid-btable .ui-icon-cancel{margin-left:6px !important}.ui-jqgrid .ui-jqgrid-btable .ui-icon-cancel:before{content:'\\F00D';color:#f00}.ui-jqgrid .ui-jqgrid-btable .ui-inline-cancel,.ui-jqgrid .ui-jqgrid-btable .ui-inline-save{cursor:pointer}.ui-jqgrid table{border-color:#ddd;font-size:0.9em}.ui-jqgrid .ui-jqgrid-titlebar .ui-jqgrid-title{font-weight:700}.ui-jqgrid .ui-jqgrid-hbox,.ui-jqgrid thead{background-color:#1D92AF;color:#FFF}.ui-jqgrid tr.jqgfirstrow td{border:none}.ui-jqgrid tr.jqgrow td{padding:8px;vertical-align:middle;border-bottom-color:#ddd}.ui-jqgrid tr.jqgrow.ui-state-highlight{background-color:#FFFEED}.ui-jqgrid .ui-grid-ico-sort.ui-icon{text-indent:0px;color:#d3f1f8;float:none;right:2px;position:absolute}.ui-jqgrid .ui-grid-ico-sort:before{font-family:FontAwesome;display:inline;content:'\\F0D7';font-size:12px}.ui-jqgrid .ui-grid-ico-sort.ui-icon-asc:before{content:'\\F0D8'}.ui-jqgrid .ui-grid-ico-sort.ui-icon-desc:before{content:'\\F0D7'}.ui-jqgrid .ui-grid-ico-sort.ui-state-disabled{color:#50c5e2}.ui-jqgrid .ui-pg-button:hover{padding:1px}.ui-jqgrid .ui-pg-table{font-size:11px}.ui-jqgrid .ui-jqgrid-pager{height:45px}.ui-jqgrid .ui-jqgrid-pager .ui-pager-control{padding-top:15px}.ui-jqgrid .ui-jqgrid-pager #jqgrid-pager_center .ui-separator{display:none}.ui-jqgrid .ui-jqgrid-pager #jqgrid-pager_center .ui-icon:hover{color:#7c7c7c}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon,.ui-jqgrid .ui-jqgrid-pager .ui-icon{cursor:pointer;font-size:18px;color:#bbb;margin:0 8px}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon:before{font-family:FontAwesome}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-pencil:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-pencil:before{content:'\\F040'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-pencil:hover,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-pencil:hover{color:#FF931D}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-trash:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-trash:before{content:'\\F014'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-trash:hover,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-trash:hover{color:#F31414}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-plus:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-plus:before{content:'\\F067'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-plus:hover,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-plus:hover{color:#326EAF}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-document:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-document:before{content:'\\F06E'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-document:hover,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-document:hover{color:#7c7c7c}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-search:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-search:before{content:'\\F002'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-search:hover,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-search:hover{color:#2EB1D1}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-refresh:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-refresh:before{content:'\\F021'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-refresh:hover,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-refresh:hover{color:#C9D819}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-seek-first:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-seek-first:before{content:'\\F100'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-seek-prev:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-seek-prev:before{content:'\\F104'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-seek-next:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-seek-next:before{content:'\\F105'}.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span.ui-icon.ui-icon-seek-end:before,.ui-jqgrid .ui-jqgrid-pager .ui-icon.ui-icon-seek-end:before{content:'\\F101'}.ui-jqgrid .ui-pg-div.ui-state-hover span{margin:0}.ui-widget-overlay{background-color:#000}.ui-jqdialog{background-color:#f1f1f1;border:2px solid #969696;font-size:12px}.ui-jqdialog .ui-icon{font-family:FontAwesome;content:''}.ui-jqdialog .ui-widget-header{background-color:#ddd;min-height:37px;font-weight:700;font-size:1.3em;padding:5px}.ui-jqdialog .ui-jqdialog-titlebar-close{width:16px;height:16px;color:#FF1717}.ui-jqdialog .ui-jqdialog-titlebar-close:hover{text-decoration:none;color:#e30000;padding:1px}.ui-jqdialog .ui-icon-closethick{top:-4px;position:relative}.ui-jqdialog .ui-icon-closethick:before{content:'\\F057'}.ui-jqdialog .fm-button{font-family:\"latolight\";color:#fff;font-size:14px;line-height:1.2;padding:0.6em 0.7em 0.5em 2.1em;background-color:#A4A4A4}.ui-jqdialog .fm-button:hover{background-color:#979797}.ui-jqdialog .fm-button.fm-button-icon-left .ui-icon{left:0.8em;margin-top:-9px}.ui-jqdialog .fm-button .ui-icon-disk:before{content:'\\F0C7'}.ui-jqdialog .fm-button .ui-icon-close:before,.ui-jqdialog .fm-button .ui-icon-cancel:before{content:'\\F00D'}.ui-jqdialog .fm-button .ui-icon-triangle-1-w:before{content:'\\F104'}.ui-jqdialog .fm-button .ui-icon-triangle-1-e:before{content:'\\F105'}.ui-jqdialog .fm-button .ui-icon-scissors:before{content:'\\F014'}.ui-jqdialog .fm-button .ui-icon-arrowreturnthick-1-w:before{content:'\\F021'}.ui-jqdialog .fm-button .ui-icon-search{left:0.8em;right:auto}.ui-jqdialog .fm-button .ui-icon-search:before{content:'\\F002'}.ui-jqdialog .fm-button .ui-icon-comment:before{content:'\\F0E5'}.ui-jqdialog .navButton .fm-button{background-color:transparent}.ui-jqdialog #sData,.ui-jqdialog #fbox_jqgrid_search{background-color:#1D92AF}.ui-jqdialog #sData:hover,.ui-jqdialog #fbox_jqgrid_search:hover{background-color:#198099}.ui-jqdialog #dData{background-color:#DB3833}.ui-jqdialog #dData:hover{background-color:#d02a25}.ui-jqdialog #cData,.ui-jqdialog #eData,.ui-jqdialog #fbox_jqgrid_reset{background-color:#626262}.ui-jqdialog #cData:hover,.ui-jqdialog #eData:hover,.ui-jqdialog #fbox_jqgrid_reset:hover{background-color:#555}.ui-jqdialog #pData,.ui-jqdialog #nData{color:#bbb}.ui-jqdialog #pData .ui-icon,.ui-jqdialog #nData .ui-icon{font-size:18px}.ui-jqdialog #pData:hover,.ui-jqdialog #nData:hover{color:#7c7c7c}.ui-jqdialog .searchFilter input[type=\"button\"]{background-image:none;border:none;margin-left:5px;color:#fff;padding:2px 7px}.ui-jqdialog .searchFilter .add-group{background-color:#E7A13D}.ui-jqdialog .searchFilter .add-group:hover{background-color:#e49626}.ui-jqdialog .searchFilter .add-rule{background-color:#1D92AF}.ui-jqdialog .searchFilter .add-rule:hover{background-color:#198099}.ui-jqdialog .searchFilter .delete-rule{background-color:#DB3833}.ui-jqdialog .searchFilter .delete-rule:hover{background-color:#d02a25}.task-list{list-style-type:none;padding-left:0}.task-list p{position:relative}.task-list p .label{position:absolute;right:0}.pagination.borderless>li>a,.pagination.borderless>li>span{border:none;color:inherit;background-color:transparent}.pagination.borderless>li>a:hover,.pagination.borderless>li>a:focus,.pagination.borderless>li>span:hover,.pagination.borderless>li>span:focus{color:#f2f2f2;background-color:#999}.pagination.borderless>li.active>a,.pagination.borderless>li.active>span{color:#f2f2f2;background-color:#999}.pagination.borderless>li.active>a:hover,.pagination.borderless>li.active>a:focus,.pagination.borderless>li.active>span:hover,.pagination.borderless>li.active>span:focus{color:#f2f2f2;background-color:#999}.pagination.borderless>.disabled>span,.pagination.borderless>.disabled>span:hover,.pagination.borderless>.disabled>span:focus,.pagination.borderless>.disabled>a,.pagination.borderless>.disabled>a:hover,.pagination.borderless>.disabled>a:focus{background-color:transparent}.btn-custom-primary{background-color:#E24715;border-color:#cb4013;color:#fff}.btn-custom-primary:hover,.btn-custom-primary:focus,.btn-custom-primary:active,.btn-custom-primary.active,.btn-custom-primary .open .dropdown-toggle.btn-warning{background-color:#d94414;color:#fff}.btn-custom-secondary{background-color:#1CACA0;border-color:#18968c;color:#fff}.btn-custom-secondary:hover,.btn-custom-secondary:focus,.btn-custom-secondary:active,.btn-custom-secondary.active,.btn-custom-secondary .open .dropdown-toggle.btn-warning{background-color:#1ba398;color:#fff}.btn-clean{background-color:transparent}.btn-clean.active,.btn-clean:active{box-shadow:none}.fancy-checkbox{display:block}.fancy-checkbox input[type=\"checkbox\"]{display:none}.fancy-checkbox input[type=\"checkbox\"]+span{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;cursor:pointer;position:relative;font-size:13px}.fancy-checkbox input[type=\"checkbox\"]+span:before{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;position:relative;bottom:1px;width:18px;height:18px;margin-right:5px;content:\"\";border:1px solid #ccc}.fancy-checkbox input[type=\"checkbox\"]:checked+span:before{font-family:FontAwesome;content:'\\F00C';font-size:12px;color:#99a1a7;text-align:center;line-height:16px;background:#ededed;border:1px solid #ccc}.fancy-checkbox.custom-color-green input[type=\"checkbox\"]:checked+span:before{color:#53D76A;background-color:#fff}.fancy-checkbox.custom-bgcolor-green input[type=\"checkbox\"]:checked+span:before{color:#fff;background-color:#53D76A;border-color:#32cf4d}.fancy-radio{display:block}.fancy-radio input[type=\"radio\"]{display:none}.fancy-radio input[type=\"radio\"]+span{display:block;cursor:pointer;position:relative;font-size:13px}.fancy-radio input[type=\"radio\"]+span i{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;border-radius:8px;position:relative;bottom:1px;content:\"\";border:1px solid #ccc;width:18px;height:18px;margin-right:5px}.fancy-radio input[type=\"radio\"]:checked+span i:after{border-radius:50%;display:block;position:relative;top:3px;left:3px;content:'';width:10px;height:10px;background-color:#99a1a7}.fancy-radio.custom-color-green input[type=\"radio\"]:checked+span i:after{background-color:#53D76A}.fancy-radio.custom-bgcolor-green input[type=\"radio\"]:checked+span i{background-color:#53D76A}.fancy-radio.custom-bgcolor-green input[type=\"radio\"]:checked+span i:after{background-color:#fff}.input-group-addon .fancy-radio,.input-group-addon .fancy-checkbox{margin:0}.input-group-addon .fancy-radio input[type=\"radio\"]+span i,.input-group-addon .fancy-checkbox input[type=\"checkbox\"]+span{margin:0}.input-group-addon .fancy-radio input[type=\"radio\"]+span i:before,.input-group-addon .fancy-checkbox input[type=\"checkbox\"]+span:before{margin:0}.label{border-radius:0;font-weight:normal;padding:.5em .6em}.label-warning{background-color:#F56421}.label-low{background-color:#626262}.label-medium{background-color:#1D92AF}.label-high{background-color:#11B4C2}.label-urgent{background-color:#E7CD0C}.label-emergency{background-color:#E7A13D}.label-critical{background-color:#DB3833}.badge{font-weight:400}.badge.element-bg-color-blue{background-color:#1D92AF}.badge.element-bg-color-green{background-color:#859419}.badge.element-bg-color-seagreen{background-color:#3F7577}.badge.element-bg-color-orange{background-color:#CE7B11}.has-switch{border-radius:0}.has-switch.switch-small{min-width:88px}.has-switch.switch-mini{min-width:60px}.has-switch span.switch-right{color:#999}.has-switch span.switch-left{border-radius:0;background:#7d939a}.onoffswitch{position:relative;width:50px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.onoffswitch .onoffswitch-checkbox{display:none}.onoffswitch .onoffswitch-label{display:block;overflow:hidden;cursor:pointer;border:2px solid #E4E4E4;border-radius:20px;position:relative}.onoffswitch .onoffswitch-inner{transition:margin 0.3s ease-in;display:block;width:200%;margin-left:-100%;transition-delay:0s}.onoffswitch .onoffswitch-inner:before,.onoffswitch .onoffswitch-inner:after{float:left;width:50%;height:18px;padding:0;line-height:1.8;font-size:10px;color:#fff;box-sizing:border-box}.onoffswitch .onoffswitch-inner:before{border-radius:20px;content:\"ON\";padding-left:6px;background-color:#53D76A;color:#FFFFFF}.onoffswitch .onoffswitch-inner:after{content:\"OFF\";padding-right:6px;background-color:#EEEEEE;color:#999999;text-align:right}.onoffswitch .onoffswitch-switch{border-radius:15px;transition:all 0.3s ease-in;width:15px;margin:2px;background:#FFFFFF;border:2px solid #E4E4E4;position:absolute;top:0;bottom:0;right:28px;transition-delay:0s}.onoffswitch.onoffswitch-blank .onoffswitch-inner:before,.onoffswitch.onoffswitch-blank .onoffswitch-inner:after{content:\"\"}.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner{margin-left:0}.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch{right:0px}.widget-header-toolbar .onoffswitch{position:relative;top:2px}.switch-success i,.switch-warning i,.switch-danger i,.switch-info i{color:#fff}ul.multiselect-container>li>a{padding:3px 20px}ul.multiselect-container>li>a label.checkbox{padding-left:0}ul.multiselect-container>li>a label.checkbox:before{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;position:relative;bottom:1px;content:\"\";width:16px;height:16px;margin-right:10px;border:1px solid #ccc;background-color:#fafafa}ul.multiselect-container>li>a label.checkbox input[type=\"checkbox\"]{display:none}ul.multiselect-container>li.active>a label.checkbox:before{font-family:FontAwesome;content:'\\F00C';font-size:12px;color:#99A1A7;text-align:center;line-height:15px;background-color:#EDEDED}ul.multiselect-container>li>a label.radio{padding-left:0}ul.multiselect-container>li>a label.radio:before{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;border-radius:8px;position:relative;bottom:1px;content:\"\";width:16px;height:16px;margin-right:10px;border:1px solid #ccc;background-color:#fafafa}ul.multiselect-container>li>a label.radio input[type=\"radio\"]{display:none}ul.multiselect-container>li.active>a label.radio:before{font-family:FontAwesome;content:'\\F111';color:#99a1a7;font-size:8px;text-align:center;line-height:15px}.widget-header-toolbar .dropdown-menu{font-size:90%}@media screen and (max-width: 480px){.widget-header-toolbar .dropdown-menu{right:auto;left:0}}.widget-header-toolbar ul.multiselect-container>li>a{line-height:1.5}.widget-header-toolbar ul.multiselect-container>li>a label.radio:before{margin-right:5px}.dropdown-menu>.active>a{background-color:#99A1A7}.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{background-color:#99A1A7}.input-group-appendable{margin-bottom:10px}.input-group-appendable .btn{min-width:34px}.radio label,.radio-inline{line-height:1.8}.slider-track,.slider-selection{border-radius:0;box-shadow:none;background-image:none;-webkit-filter:none;filter:none}.slider-track{background-color:#eee}.slider-selection{background-color:#626262}.slider.slider-horizontal{width:100% !important}.slider.slider-vertical .slider-handle{position:relative;left:2px;cursor:ns-resize}.slider-handle{border-radius:0;box-shadow:none;opacity:1;filter:alpha(opacity=100);background-image:none;position:relative;top:2px}.slider-handle,.ui-rangeSlider-handle{width:16px;height:16px;background:#fff;border:1px solid #626262;cursor:col-resize}.slider-handle:before,.ui-rangeSlider-handle:before{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;content:'|||';font-size:7px;color:#626262;text-align:center;line-height:15px;position:absolute;left:0.6em}.ui-rangeSlider{height:22px;margin:30px 0}.ui-rangeSlider .ui-rangeSlider-innerBar{height:10px;margin:3px 0;background:#eee}.ui-rangeSlider .ui-rangeSlider-bar{margin:3px 0;background:#626262;height:10px;cursor:move;cursor:-webkit-grab;cursor:grab;cursor:-moz-grab}.ui-rangeSlider.slider-default .ui-rangeSlider-bar{background:#626262}.ui-rangeSlider.slider-default .ui-rangeSlider-handle{background:#fff;border-color:#626262}.ui-rangeSlider.slider-default .ui-rangeSlider-handle:before{color:#626262}.ui-rangeSlider.slider-primary .ui-rangeSlider-bar{background:#1D92AF}.ui-rangeSlider.slider-primary .ui-rangeSlider-handle{background:#e9f8fb;border-color:#1D92AF}.ui-rangeSlider.slider-primary .ui-rangeSlider-handle:before{color:#1D92AF}.ui-rangeSlider.slider-info .ui-rangeSlider-bar{background:#46B0CF}.ui-rangeSlider.slider-info .ui-rangeSlider-handle{background:#fff;border-color:#46B0CF}.ui-rangeSlider.slider-info .ui-rangeSlider-handle:before{color:#46B0CF}.ui-rangeSlider.slider-warning .ui-rangeSlider-bar{background:#E7A13D}.ui-rangeSlider.slider-warning .ui-rangeSlider-handle{background:#fff;border-color:#E7A13D}.ui-rangeSlider.slider-warning .ui-rangeSlider-handle:before{color:#E7A13D}.ui-rangeSlider.slider-danger .ui-rangeSlider-bar{background:#DB3833}.ui-rangeSlider.slider-danger .ui-rangeSlider-handle{background:#fff;border-color:#DB3833}.ui-rangeSlider.slider-danger .ui-rangeSlider-handle:before{color:#DB3833}.ui-rangeSlider.slider-success .ui-rangeSlider-bar{background:#4BA84B}.ui-rangeSlider.slider-success .ui-rangeSlider-handle{background:#e5f3e5;border-color:#4BA84B}.ui-rangeSlider.slider-success .ui-rangeSlider-handle:before{color:#4BA84B}.ui-rangeSlider .ui-rangeSlider-bar.ui-draggable-dragging{cursor:-webkit-grabbing;cursor:grabbing}.ui-rangeSlider-arrow{height:16px;margin:2px 0;width:16px;background-repeat:no-repeat}.ui-rangeSlider-arrow-inner{display:none}.ui-rangeSlider-container{height:22px}.ui-rangeSlider-noArrow .ui-rangeSlider-container{margin:0}.ui-rangeSlider-label{margin:0 2px 2px;white-space:nowrap;bottom:20px;padding:3px 6px 7px;cursor:col-resize}.ui-rangeSlider-label .ui-rangeSlider-label-value{font-size:0.9em}.ui-rangeSlider-label-inner{display:none}input.ui-editRangeSlider-inputValue{width:3em;vertical-align:middle;text-align:center}.fileinput-button{position:relative;overflow:hidden}.fileinput-button input{position:absolute;top:0;right:0;margin:0;opacity:0;-ms-filter:'alpha(opacity=0)';font-size:200px;direction:ltr;cursor:pointer}.simplecolorpicker span{margin:0 0px 5px 0}.simplecolorpicker span.color{width:20px;height:20px;outline:none}.simplecolorpicker.fontawesome span.color[data-selected]:after{font-family:'FontAwesome';-webkit-font-smoothing:antialiased;content:'\\F00C';margin-right:1px;margin-left:1px}.bootstrap-touchspin-prefix{border-right:none}.bootstrap-touchspin-postfix{border-left:none}.bootstrap-touchspin .input-group-addon.btn{color:#fff}.datepicker>div{margin:4px;border:1px solid #ddd;padding:4px}.datepicker th,.datepicker td{border-radius:0}.datepicker td.active:active,.datepicker td.active.active{background-image:none;background-color:#357EBD;border-color:#3071A9}.datepicker td.active:hover{border-radius:0}.datepicker td.active:hover:active,.datepicker td.active:hover.active{background-image:none;background-color:#357EBD;border-color:#3071A9}.datepicker th.next,.datepicker th.prev{font-size:14px}.daterangepicker .calendar-date{border-radius:0}.daterangepicker th .input-mini,.daterangepicker th li,.daterangepicker td .input-mini,.daterangepicker td li,.daterangepicker .ranges .input-mini,.daterangepicker .ranges li{border-radius:0}.daterangepicker td.active,.daterangepicker td.active:hover{background-color:#1D92AF;border-color:#1D92AF}.daterangepicker td.in-range{background-color:#e9f8fb}.daterangepicker .ranges li{color:#1D92AF}.daterangepicker .ranges li.active,.daterangepicker .ranges li:hover{background:#1D92AF;border-color:#1D92AF}.report-range{cursor:pointer;padding:5px 10px;border:1px solid #ccc}.report-range .range-value{margin-right:3px}.nav.nav-tabs-custom-colored>li{margin-bottom:0}.nav.nav-tabs-custom-colored>li>a{border-radius:0;color:#868686;background-color:#ececec;border-color:#ddd}.nav.nav-tabs-custom-colored>li>a:hover{color:#535353;background-color:#f1f1f1;border-color:#ddd}@media screen and (max-width: 480px){.nav.nav-tabs-custom-colored>li{float:none}}.nav.nav-tabs-custom-colored>li.active>a,.nav.nav-tabs-custom-colored>li.active>a:hover,.nav.nav-tabs-custom-colored>li.active>a:focus{background-color:#7d939a;color:#fff;cursor:pointer}.nav.nav-tabs-custom-colored.nav-tabs-right>li{float:right}@media screen and (max-width: 480px){.nav.nav-tabs-custom-colored.nav-tabs-right>li{float:none}}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{background-color:#1D92AF}.nav-pills-custom-minimal{border-bottom:1px solid #ccc}.nav-pills-custom-minimal>li>a{border-radius:0;padding:10px;border-top:4px solid transparent;color:#555}.nav-pills-custom-minimal>li>a:hover,.nav-pills-custom-minimal>li>a:focus{background-color:transparent;color:#3c3c3c}.nav-pills-custom-minimal>li.active>a,.nav-pills-custom-minimal>li.active>a:hover,.nav-pills-custom-minimal>li.active>a:focus{background-color:transparent;border-top-color:#1D92AF;color:#555}.nav-pills-custom-minimal>li+li{margin-left:30px}@media screen and (max-width: 480px){.nav-pills-custom-minimal>li+li{margin-left:0}}.nav-pills-custom-minimal.custom-minimal-bottom>li a{border-top:none;border-bottom:4px solid transparent}.nav-pills-custom-minimal.custom-minimal-bottom>li.active>a,.nav-pills-custom-minimal.custom-minimal-bottom>li.active>a:hover,.nav-pills-custom-minimal.custom-minimal-bottom>li.active>a:focus{border-bottom-color:#1D92AF}.tab-content{padding:15px 0}.custom-tabs-left{border-bottom:none}.custom-tabs-left>.nav-tabs{float:left;margin-right:19px;border-right:1px solid #ccc;border-bottom:none}.custom-tabs-left>.nav-tabs>li{float:none}.custom-tabs-left>.nav-tabs>li a{border-top-left-radius:2px;border-bottom-left-radius:2px;min-width:74px;margin-right:-1px;padding:10px 40px 10px 10px}.custom-tabs-left>.nav-tabs>li a:hover,.custom-tabs-left>.nav-tabs>li a:focus{background:transparent;border-color:transparent}.custom-tabs-left>.nav-tabs .active a,.custom-tabs-left>.nav-tabs .active a:hover,.custom-tabs-left>.nav-tabs .active a:focus{border:1px solid #ccc;border-right-color:#fff}.custom-tabs-left .tab-content{padding-top:5px}.widget-header ul.nav{margin-right:-11px}.widget-header ul.nav>li>a{padding:6px 15px;border-top:transparent;line-height:1.5;margin-right:0;height:35px}.widget-header ul.nav>li>a:hover{border-top:initial}@media screen and (max-width: 480px){.widget-header ul.nav{float:none !important;margin:0 -11px}.widget-header ul.nav>li>a{border-top:1px solid #ddd}.widget-header ul.nav>li>a:hover{border-top:1px solid #ddd}}.demo-icon li{margin-bottom:10px}.demo-hide{display:none}.gritter-item-wrapper{background:image-url(\"ie-spacer.gif\")}.gritter-item-wrapper>div{background:rgba(0,0,0,0.7)}.gritter-item-wrapper.gritter-light>div{background-image:none;background-color:rgba(255,255,255,0.8);color:#555}.gritter-item{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;padding:2px 11px}.gritter-item .gritter-title{text-shadow:none}.gritter-item .gritter-close{background:image-url(\"gritter.png\");outline:none;left:auto;right:3px;cursor:normal}.gritter-item a,.gritter-item a:focus{color:#fff;text-decoration:underline}.gritter-item a:hover,.gritter-item a:focus:hover{text-decoration:none}.widget-reminder .widget-content{position:relative;overflow:hidden;padding:20px;background-color:#7d939a;color:#fff}.today-reminder .reminder-title{border-bottom:1px solid #a4c0cc;padding-bottom:5px}.today-reminder .reminder-time{font-size:2.5em;margin-bottom:0}.today-reminder .reminder-place{font-size:1.5em}.today-reminder .reminder-notes{font-size:0.9em}.today-reminder>i{opacity:.1;filter:alpha(opacity=10);position:absolute;top:5px;right:-15px;font-size:12em;-webkit-animation:ring 8s .5s ease-in-out 3;-webkit-transform-origin:50% 4px;-moz-animation:ring 8s .5s ease-in-out 3;-moz-transform-origin:50% 4px;animation:ring 8s .5s ease-in-out 3;transform-origin:50% 4px}.today-reminder>.btn-group{display:block;position:absolute;top:0;right:0}.today-reminder>.btn-group .dropdown-menu{font-size:0.9em}.today-reminder>.btn-group>.btn-group{float:none}@-webkit-keyframes ring{0%{-webkit-transform:rotateZ(0)}1%{-webkit-transform:rotateZ(30deg)}3%{-webkit-transform:rotateZ(-28deg)}5%{-webkit-transform:rotateZ(34deg)}7%{-webkit-transform:rotateZ(-32deg)}9%{-webkit-transform:rotateZ(30deg)}11%{-webkit-transform:rotateZ(-28deg)}13%{-webkit-transform:rotateZ(26deg)}15%{-webkit-transform:rotateZ(-24deg)}17%{-webkit-transform:rotateZ(22deg)}19%{-webkit-transform:rotateZ(-20deg)}21%{-webkit-transform:rotateZ(18deg)}23%{-webkit-transform:rotateZ(-16deg)}25%{-webkit-transform:rotateZ(14deg)}27%{-webkit-transform:rotateZ(-12deg)}29%{-webkit-transform:rotateZ(10deg)}31%{-webkit-transform:rotateZ(-8deg)}33%{-webkit-transform:rotateZ(6deg)}35%{-webkit-transform:rotateZ(-4deg)}37%{-webkit-transform:rotateZ(2deg)}39%{-webkit-transform:rotateZ(-1deg)}41%{-webkit-transform:rotateZ(1deg)}43%{-webkit-transform:rotateZ(0)}100%{-webkit-transform:rotateZ(0)}}@keyframes ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}1%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}3%{-webkit-transform:rotate(-28deg);transform:rotate(-28deg)}5%{-webkit-transform:rotate(34deg);transform:rotate(34deg)}7%{-webkit-transform:rotate(-32deg);transform:rotate(-32deg)}9%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}11%{-webkit-transform:rotate(-28deg);transform:rotate(-28deg)}13%{-webkit-transform:rotate(26deg);transform:rotate(26deg)}15%{-webkit-transform:rotate(-24deg);transform:rotate(-24deg)}17%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}19%{-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}21%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}23%{-webkit-transform:rotate(-16deg);transform:rotate(-16deg)}25%{-webkit-transform:rotate(14deg);transform:rotate(14deg)}27%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}29%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}31%{-webkit-transform:rotate(-8deg);transform:rotate(-8deg)}33%{-webkit-transform:rotate(6deg);transform:rotate(6deg)}35%{-webkit-transform:rotate(-4deg);transform:rotate(-4deg)}37%{-webkit-transform:rotate(2deg);transform:rotate(2deg)}39%{-webkit-transform:rotate(-1deg);transform:rotate(-1deg)}41%{-webkit-transform:rotate(1deg);transform:rotate(1deg)}43%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(0);transform:rotate(0)}}.dropzone{padding:20px;height:500px;background-image:image-url(\"diagonal-stripe.png\");background-repeat:repeat}.dropzone .dz-message{font-size:52px;text-align:center;color:#A4A4A4}.dropzone .dz-message:before{font-family:FontAwesome;content:'\\F0EE';display:block;font-size:4em;line-height:1}.dropzone.dz-started .dz-message{display:none}.dropzone .dz-message{display:block}.dropzone .dz-default.dz-message{background:none;position:relative;width:auto;height:auto;margin-left:0;margin-top:-2.8em;top:50%;left:initial}.dropzone .dz-default.dz-message span{display:block}.dropzone .dz-fallback{text-align:center}.dropzone .dz-fallback input[type=\"file\"]{margin:0 auto;margin-bottom:10px}.dropzone .dz-preview .dz-remove{background:#DB3833;color:#fff;font-size:0.9em}.dropzone .dz-preview .dz-remove:before{font-family:FontAwesome;content:'\\F00D';margin-right:3px}.dropzone .dz-preview .dz-remove:hover{background:#d02a25;color:#fff;cursor:pointer}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{border-radius:50%;background:#fff;width:25px;height:25px}.dropzone .dz-preview .dz-error-mark:before,.dropzone .dz-preview .dz-success-mark:before{font-family:FontAwesome;font-size:15px;position:absolute;left:5px;top:2px}.dropzone .dz-preview .dz-error-mark:before{content:'\\F071';color:#DB3833}.dropzone .dz-preview .dz-success-mark:before{content:'\\F00C';color:#4BA84B}.ie9 .dropzone .dz-message:before{font-size:0.2em}.tour-step-background{background:transparent;border:1px solid #fff}.select2-container{width:100%}.select2-search-choice-close,.select2-container .select2-choice abbr{font-family:FontAwesome;background:none;font-size:13px;top:3px}.select2-search-choice-close:before,.select2-container .select2-choice abbr:before{content:'\\F057';font-size:85%}.select2-container .select2-choice,.select2-container.select2-drop-above .select2-choice{border-radius:0}.select2-container .select2-choice{height:30px;line-height:30px;background-image:none}.select2-container .select2-choice abbr{top:0px;right:35px}.select2-container .select2-choice .select2-arrow{border-radius:0;width:30px;text-align:center;background:#eee;line-height:30px}.select2-container .select2-choice .select2-arrow b{background:none}.select2-container .select2-choice .select2-arrow:before{font-family:FontAwesome;font-size:15px;content:'\\F107'}.select2-search{font-family:FontAwesome;font-size:15px}.select2-search:before{content:'\\F002';position:absolute;top:5px;right:12px}.select2-search input{background:none}.select2-search input.select2-active{background:none}.select2-search input.select2-active background{image:image-url(\"select2-spinner.gif\");color:#fff;repeat:no-repeat}.select2-search input.select2-active,.select2-more-results.select2-active{background:none}.select2-search input.select2-active background,.select2-more-results.select2-active background{image:image-url(\"select2-spinner.gif\");color:#f4f4f4;repeat:no-repeat}.select2-container.select2-dropdown-open .select2-choice,.select2-container.select2-dropdown-open .select2-arrow{background-color:transparent}.select2-container.select2-dropdown-open .select2-arrow{background-image:none}.select2-container.select2-dropdown-open .select2-arrow:before{content:''}.select2-drop,.select2-drop.select2-drop-above{border-radius:0;box-shadow:none}.select2-drop{margin-top:-4px}.select2-container-multi .select2-choices{background-image:none}.select2-container-multi .select2-choices .select2-search-choice{border-radius:0;box-shadow:none;background-color:#1D92AF;-webkit-filter:none;filter:none;background-image:none;color:#fff;border:1px solid #1b87a2;font-size:85%}.select2-container-multi .select2-choices .select2-search-choice a{color:#3abede}.select2-container-multi .select2-choices .select2-search-choice a:hover,.select2-container-multi .select2-choices .select2-search-choice a:focus{color:#50c5e2;text-decoration:none}.select2-container-multi .select2-choices .select2-search-field input{padding:3px}.select2-container-multi .select2-choices .select2-search-field input.select2-active{background-image:image-url(\"select2-spinner.gif\") !important}.select2-container-multi.select2-container-active .select2-choices{box-shadow:none}.select2-container-multi.select2-dropdown-open .select2-choices{border-bottom:none}.tt-dropdown-menu{border-radius:0}.bootstrap-tagsinput{box-shadow:none;border-radius:0}.bootstrap-tagsinput .tag{background-color:#1D92AF;position:relative;padding-left:17px;font-size:85%}.bootstrap-tagsinput .tag [data-role=\"remove\"]{position:absolute;left:0;top:7px;margin-left:2px;color:#3abede}.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover,.bootstrap-tagsinput .tag [data-role=\"remove\"]:focus{box-shadow:none;color:#50c5e2;text-decoration:none}.bootstrap-tagsinput .tag [data-role=\"remove\"]:after{font-family:FontAwesome;content:'\\F057'}.editable[data-type=\"select\"]+.editable-container .editable-input{position:relative}.editable[data-type=\"select\"]+.editable-container .editable-input select{padding:5px 20px 5px 10px;background-position:right 5px top 10px}.editable[data-type=\"combodate\"]+.editable-container .editable-input{position:relative}.editable[data-type=\"combodate\"]+.editable-container .editable-input select{padding:5px 20px 5px 10px;background-position:right 5px top 10px;height:31px;position:relative;top:-1px}.editable-buttons .btn i{margin-right:0;position:relative;top:2px}.editable-address{display:block;margin-bottom:5px}.editable-address span{width:70px;display:inline-block}.note-editor .note-toolbar{padding:5px 8px 10px 8px}.note-editor .note-toolbar .note-para .dropdown-menu{min-width:234px}.note-editor .caret{border-top-color:initial}.note-editor .btn:active,.note-editor .btn.active{box-shadow:none}.note-editor .form-control,.note-editor .btn{border-radius:0}.widget .note-editor{border:none}.md-editor>textarea{padding:10px}.md-editor .btn-default{background-color:#fff;color:#333;border-color:#ccc}.md-editor .btn-default:hover,.md-editor .btn-default:focus{box-shadow:none;background-color:#ebebeb}.google-map #map-canvas{height:314px}.label-with-btn{display:inline-table}.label-with-btn .label,.label-with-btn .btn{display:table-cell}.label-with-btn .label{border-top-right-radius:0;border-bottom-right-radius:0;padding:4px 6px;line-height:1.6}.label-with-btn .btn{border-top-left-radius:0;border-bottom-left-radius:0;padding:6px;line-height:10px;vertical-align:middle}ul.simple-todo-list>li .todo-text{font-weight:normal}ul.simple-todo-list>li input[type=\"checkbox\"]:checked+.todo-text{text-decoration:line-through;color:#7b7b7b}.todo-list>li{border-top:1px solid #ccc;position:relative;background:#fff;padding:0 10px}.todo-list>li:first-child{border-top:none}.todo-list>li.ui-state-highlight{border:1px solid #ff9800}.todo-list>li .list-control{position:absolute;top:50%;margin-top:-14px}.todo-list>li .list-control i{position:relative;top:3.5px;margin-right:5px;cursor:move;color:#ddd;font-size:24px}.todo-list>li p{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;margin:0;padding:20px 0;margin-left:4.5em}.todo-list>li.completed p,.todo-list>li.completed .date{text-decoration:line-through;color:#a2a2a2}.todo-list .fancy-checkbox input[type=\"checkbox\"]+span{margin-right:0}.todo-list .short-description{display:block;margin-top:5px;font-size:0.9em}.todo-list .date{font-size:0.85em}.todo-list .label{position:absolute;right:15px;padding:6px 10px;font-weight:normal}ul.activity-list>li{padding-bottom:15px}ul.activity-list>li:not(:last-child){border-bottom:1px solid #ddd}ul.activity-list>li:not(:first-child){padding-top:15px}ul.activity-list>li .activity-icon{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;border-radius:30px;width:34px;height:34px;background-color:#e4e4e4;font-size:16px;color:#656565;line-height:34px;text-align:center;margin-right:10px}ul.activity-list>li .activity-icon.icon-success{color:#4BA84B}ul.activity-list>li .activity-icon.icon-warning{color:#E7A13D}ul.activity-list>li .activity-icon.icon-danger{color:#DB3833}ul.activity-list>li .activity-icon.icon-info{color:#46B0CF}ul.activity-list>li .activity-icon.icon-primary{color:#1D92AF}ul.activity-list>li>p{margin-bottom:0;padding-left:40px}ul.activity-list>li .timestamp{display:block;font-size:0.85em;color:#b1b1b1}.activity .more i{margin-left:3px;position:relative;top:1px}.contextual-summary-info{padding:15px 0;border-bottom:5px solid #ddd}.contextual-summary-info i{position:relative;top:3px;font-size:48px;line-height:1}.contextual-summary-info p{margin-bottom:0;text-align:right;font-size:28px;font-weight:300;line-height:1.3}.contextual-summary-info p span{font-size:0.5em;display:block}.contextual-summary-info.contextual-background{padding:15px;border-bottom:none}.contextual-summary-info.contextual-background i,.contextual-summary-info.contextual-background p{color:#fff}.dropdown-menu.context-menu>li>a{padding:5px 15px}.dropdown-menu.context-menu>li>a:hover,.dropdown-menu.context-menu>li>a:focus{box-shadow:0 0 2px #0A6AA1;background-color:#E8EFF7}.dropdown-menu.context-menu>li>a i{margin-right:5px}.slack-messages .day-separator{text-align:center}.slack-messages .day-separator span{position:relative;top:-10px;padding:4px 8px;border:1px solid #d8d8d8;background-color:#f9f9f9}.slack-messages .day-separator:before{display:block;content:'';border-top:1px solid #d8d8d8}.slack-messages li{margin-bottom:20px}.slack-messages li img{width:45px}.slack-messages li .text{padding-left:55px}.slack-messages li .username{font-weight:700;font-size:14px;margin-right:15px}.slack-messages li .timestamp{font-size:12px;color:#bbb}ul.quick-inbox-list li{position:relative;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #ddd}ul.quick-inbox-list li a{text-decoration:none;color:#555}ul.quick-inbox-list li:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}ul.quick-inbox-list li.unread .sender,ul.quick-inbox-list li.unread .title a{font-weight:700;color:#555}ul.quick-inbox-list li.unread .brief{color:#555}ul.quick-inbox-list img{width:45px}ul.quick-inbox-list .sender,ul.quick-inbox-list .title a,ul.quick-inbox-list .brief,ul.quick-inbox-list .timestamp{color:#bbb}ul.quick-inbox-list .text{padding-left:55px}ul.quick-inbox-list .title{font-size:13px;margin:0;margin-bottom:5px}ul.quick-inbox-list .timestamp{font-size:12px}.investment-summary .info-label{display:block;margin-bottom:10px;font-weight:700;font-size:14px}.investment-summary strong{font-size:24px}.investment-summary i{font-size:24px;margin-left:10px}.investment-summary .percentage{position:relative;top:-3px;font-size:14px}.inv-red{color:#971928}.inv-green{color:#69AC1F}.stock-info{padding:50px 30px;border:1px solid #E0E0E0;text-align:center;background-color:#F3F3F3}.stock-info .company{display:block;font-size:22px}.stock-info .value{display:block;margin:30px 0;font-size:52px;font-weight:700}.stock-info .change{display:block;font-size:16px;font-weight:700}.stock-info .change i{font-size:18px}.market-news .heading{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;padding-bottom:8px;margin-bottom:25px;font-size:16px;border-bottom:4px solid #1D92AF}.market-news ul>li{border-top:1px solid #ddd}.market-news ul>li:first-child{border-top:none}.market-news .news-thumbnail{margin-bottom:5px}.market-news .title{display:block;padding:15px 0;font-size:14px}.market-news .title:hover,.market-news .title:focus{text-decoration:none}.main-nav-toggle{float:left;color:#fff}.main-nav-toggle i{font-size:28px}.main-nav-toggle:hover,.main-nav-toggle:focus{color:#ddd}.breadcrumb li+li:before{font-family:FontAwesome;font-size:14px;content:\"\\F105\";color:#b2b6bf;margin-right:2px;padding:0 5px 0 2px;position:relative;top:1px}ul.main-menu{padding-left:0;list-style-type:none}ul.main-menu>li a{display:block;position:relative;padding:13px 0 13px 15px;font-size:14px;color:#2d699e;background-color:#ececec;border-top:1px solid #dfdfdf;text-decoration:none}ul.main-menu>li a:hover{text-decoration:none;background-color:#fff}ul.main-menu>li a:active{background-color:#e8e8e8}ul.main-menu>li.active>a{background-color:#e8e8e8}ul.main-menu>li:first-child>a{border-top:none}ul.main-menu>li i{width:14px;text-align:center}ul.main-menu>li .text{padding-left:8px;font-size:0.9em}ul.main-menu>li .toggle-icon{font-size:14px;width:10px;position:absolute;right:10px;top:16px;text-shadow:none}ul.main-menu .sub-menu{position:relative;display:none;padding-left:0}ul.main-menu .sub-menu.open{overflow:hidden;display:block}ul.main-menu .sub-menu li a{padding-left:33px}ul.main-menu .sub-menu li.active>a{font-weight:700}ul.main-menu .sub-menu .sub-menu li a{padding-left:50px}ul.main-menu>li>a,.content-wrapper{transition:all 0.3s ease-in-out}.left-sidebar{transition:all 0.3s ease-in-out;width:230px;padding-right:0;padding-left:0;left:0;position:absolute;float:none;z-index:999;background-color:#ececec}.left-sidebar.minified{width:40px;margin-right:-40px;z-index:9}.left-sidebar.minified .main-menu>li{position:relative}.left-sidebar.minified .main-menu>li i{width:40px}.left-sidebar.minified .main-menu>li .toggle-icon{display:none}.left-sidebar.minified .main-menu>li>a{padding-left:0}.left-sidebar.minified .main-menu>li>a>.text{display:none}.left-sidebar.minified .main-menu>li:hover>a>.text{position:absolute;display:block;left:40px;top:-1px;min-width:200px;z-index:9999;padding:13px 10px;border:2px solid #dfdfdf;line-height:1.5;background:#dfdfdf;font-weight:700;opacity:1 !important}.left-sidebar.minified .main-menu>li:hover>ul.sub-menu{display:block !important;min-width:200px;position:absolute;margin-left:40px;z-index:9999;border:1px solid #E4E4E4;border-top:none;list-style-type:none}.left-sidebar.minified .main-menu>li:hover>ul.sub-menu>li>a{padding-left:10px}.left-sidebar.sidebar-hide-left{left:-230px}body.sidebar-float .left-sidebar{left:-230px;box-shadow:1px 4px 5px 4px rgba(0,0,0,0.3)}body.sidebar-float .left-sidebar.sidebar-float-active{left:0}body.sidebar-fixed .left-sidebar{position:fixed;height:100%}body.focus-mode .left-sidebar{opacity:0;filter:alpha(opacity=0)}.sidebar-minified{text-align:center;position:relative;margin:8px 0}@media screen and (max-width: 992px){.sidebar-minified{display:none}}.sidebar-minified:before{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;content:\"\";height:0;border-top:1px solid #c4c4c4;position:absolute;left:10px;right:10px;top:13px}.sidebar-minified i{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;border-radius:25px;width:25px;height:25px;position:relative;border:1px solid #A2A2A2;color:#A2A2A2;padding:4px;background-color:#f1f1f1;cursor:pointer}.sidebar-minified i:hover{background-color:#f6f6f6}.toggle-sidebar-collapse{color:#fff;font-size:22px;margin-right:15px;line-height:34px}.toggle-sidebar-collapse:hover,.toggle-sidebar-collapse:active,.toggle-sidebar-collapse:focus{color:#fff}.main-content-nav ul{line-height:34px}.main-content-nav li{padding-left:10px;padding-right:10px}.main-content-nav li a{color:#5f9cd2;text-decoration:none}.main-content-nav li a:hover,.main-content-nav li a:focus{color:#2d699e}@media screen and (max-width: 768px){.main-content-nav{float:none !important;margin-top:15px}}body.ontop-nav .top-bar{padding:0}body.ontop-nav .top-bar .logo{top:14px}body.ontop-nav .top-bar .right{position:relative;top:8px}body.ontop-nav .top-bar .navbar-toggle{box-shadow:none;display:block;padding:0;border:none;background:none;font-size:21px}body.ontop-nav .top-bar .navbar-toggle:hover,body.ontop-nav .top-bar .navbar-toggle:active,body.ontop-nav .top-bar .navbar-toggle:focus{color:#fff}@media screen and (min-width: 1280px){body.ontop-nav .top-bar .navbar-toggle{display:none}}@media screen and (min-width: 768px) and (max-width: 1279px){body.ontop-nav .top-bar .navbar-collapse.collapse{display:none !important}}@media screen and (min-width: 768px){body.ontop-nav .top-bar .collapse.in{display:block !important}}#main-navbar-collapse{float:right;margin-left:15px;max-height:none}#main-navbar-collapse .navbar-nav>li>a{color:#fff}#main-navbar-collapse .navbar-nav>li>a:hover,#main-navbar-collapse .navbar-nav>li>a:focus,#main-navbar-collapse .navbar-nav>li>a:visited{color:#fff;background-color:#484848}#main-navbar-collapse .navbar-nav>li>a i{margin-right:3px}#main-navbar-collapse .nav .open>a,#main-navbar-collapse .nav .open>a:hover #main-navbar-collapse .nav .open>a:focus{color:#fff;background-color:#484848}#main-navbar-collapse .dropdown-menu{box-shadow:none;min-width:200px;padding:0;border:none;background-color:#484848}#main-navbar-collapse .dropdown-menu>li>a{padding-left:15px;padding-right:15px;color:#fff;font-size:13px}#main-navbar-collapse .dropdown-menu>li>a:hover,#main-navbar-collapse .dropdown-menu>li>a:focus,#main-navbar-collapse .dropdown-menu>li>a:active,#main-navbar-collapse .dropdown-menu>li>a.active{background-color:#414141}@media screen and (max-width: 1280px){#main-navbar-collapse{width:100%;margin-left:0}#main-navbar-collapse .navbar-nav>li{float:none}#main-navbar-collapse .navbar-nav>li>a{padding-left:0}#main-navbar-collapse .navbar-nav>li>a:hover,#main-navbar-collapse .navbar-nav>li>a:focus,#main-navbar-collapse .navbar-nav>li>a:visited{background-color:transparent}#main-navbar-collapse .dropdown-menu{background-color:transparent}#main-navbar-collapse .dropdown-menu>li>a{padding-left:25px}#main-navbar-collapse .dropdown-menu>li>a:hover,#main-navbar-collapse .dropdown-menu>li>a:focus,#main-navbar-collapse .dropdown-menu>li>a:active,#main-navbar-collapse .dropdown-menu>li>a.active{background-color:transparent}#main-navbar-collapse .navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}}.content-wrapper{padding:15px 30px;margin-left:230px;position:relative}.content-wrapper.expanded{width:100%;padding-left:70px;margin-left:0}.content-wrapper.expanded-full{margin-left:0;padding:15px}@media screen and (max-width: 480px){.content-wrapper{padding:15px}}body.sidebar-float .content-wrapper{margin-left:0;padding:15px}.top-general-alert{padding:10px 15px;margin-bottom:30px;border:none;text-align:center;display:none}.top-general-alert .close{text-decoration:none;position:relative;top:-3px;font-size:12px;float:none}@media screen and (max-width: 992px){.top-general-alert{position:relative;padding-right:45px;text-align:left}.top-general-alert .close{position:absolute;right:15px;top:0;font-size:3em}}.breadcrumb{background-color:inherit;padding-left:0}.breadcrumb a{color:#2d699e}.breadcrumb i{font-size:1.2em;margin-right:5px}.breadcrumb .active{font-weight:300}@media screen and (max-width: 1199px){div[class*=\"col-lg-\"] .top-content{text-align:center}}.top-content{text-align:right;margin-bottom:20px}.top-content ul.mini-stat{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;margin-bottom:0}@media screen and (max-width: 992px){.top-content ul.mini-stat{display:block}}.top-content ul.mini-stat>li{border-left:1px solid #ddd;padding-left:15px;padding-right:15px}.top-content ul.mini-stat>li:first-child{border-left:none}@media screen and (max-width: 992px){.top-content ul.mini-stat>li{width:100%;border-left:none;padding-bottom:15px}}@media screen and (min-width: 992px){.top-content ul.mini-stat>li{padding-left:10px;padding-right:10px}}.top-content ul.mini-stat h5{float:left;margin:0;text-align:left;font-size:0.85em;color:#888}.top-content ul.mini-stat h5 .stat-value{display:block;font-size:1.5em;margin-top:3px}.top-content ul.mini-stat h5 .stat-value.stat-color-seagreen{color:#3F7577}.top-content ul.mini-stat h5 .stat-value.stat-color-blue{color:#1D92AF}.top-content ul.mini-stat h5 .stat-value.stat-color-orange{color:#CE7B11}.top-content .mini-bar-chart{display:block;float:right;margin:6px 0 0 20px}.top-content ul.quick-access{margin-bottom:0}.top-content ul.quick-access>li{width:15em;padding:0}@media screen and (max-width: 768px){.top-content ul.quick-access>li{width:100%}}.top-content ul.quick-access>li a,.top-content ul.quick-access>li a:focus,.top-content ul.quick-access>li a:hover{text-decoration:none}.top-content ul.quick-access>li .quick-access-item{display:block;position:relative;background-color:#555;color:#fff;padding:15px;text-align:left;overflow:hidden}.top-content ul.quick-access>li .quick-access-item h5,.top-content ul.quick-access>li .quick-access-item p{margin:0}.top-content ul.quick-access>li .quick-access-item em{font-size:0.85em}.top-content ul.quick-access>li .quick-access-item i{opacity:.1;filter:alpha(opacity=10);position:absolute;top:0.15em;right:-0.1em;font-size:5em;-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}.top-content ul.quick-access>li .quick-access-item:hover i{-webkit-transform:scale(1.2, 1.2);transform:scale(1.2, 1.2)}.top-content ul.quick-access>li .quick-access-item.bg-color-green{background-color:#859419}.top-content ul.quick-access>li .quick-access-item.bg-color-blue{background-color:#1D92AF}.top-content ul.quick-access>li .quick-access-item.bg-color-orange{background-color:#CE7B11}.main-header{margin-bottom:50px}.main-header h2{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;border-right:1px solid #ccc;margin:0;padding-right:10px;margin-right:10px}@media screen and (max-width: 768px){.main-header h2{display:block;border-right:none}}.main-header em{color:#bbb}.content-wrapper{background-color:#f1f1f1;border-left:1px solid #e4e4e4}.main-content{padding-bottom:30px}.row-widget{margin-bottom:0}.widget{border-width:1px;border-style:solid;margin-bottom:20px;background-color:#f9f9f9;border-color:#d3d3d3}.widget.widget-table{overflow:hidden}.widget.widget-hide-header{border:none;background:none}.widget.widget-focus-enabled{z-index:999;position:relative}.widget.widget-quick-note .widget-content{padding:0}.widget.widget-quick-note input.title,.widget.widget-quick-note textarea{box-shadow:none;border:none;resize:none}.widget.widget-quick-note input.title{font-weight:700}.widget.widget-quick-note textarea:focus{outline:none}.widget.quick-note-create .widget-footer{display:none}.widget.quick-note-saved:hover{cursor:pointer}.widget .widget-header{padding:0 10px;height:35px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#d3d3d3;background-color:#eee}@media screen and (max-width: 480px){.widget .widget-header{height:100%}}.widget .widget-header h3{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;font-family:\"latobold\";font-size:1.1em;margin:0;line-height:35px;float:left}@media screen and (max-width: 480px){.widget .widget-header h3{float:none}}.widget .widget-header i{margin-right:5px}.widget .widget-header em{float:left;font-size:0.9em;color:#a5a5a5;line-height:35px;margin-left:4px}@media screen and (max-width: 1279px){.widget .widget-header em{display:none}}.widget .widget-header .btn-help{float:left;padding:0;position:relative;top:3px;left:3px}@media screen and (max-width: 1279px){.widget .widget-header .btn-help{display:none}}.widget .widget-header .btn-group>a{color:#2d699e}.widget .widget-header .widget-header-toolbar{float:right;width:auto;height:35px;border-left:1px solid #ddd;padding-left:10px;margin-left:10px}@media screen and (max-width: 480px){.widget .widget-header .widget-header-toolbar{display:block;float:none;border-left:none;margin-left:0;padding-left:0}}.widget .widget-header .widget-header-toolbar>a{margin-left:5px}.widget .widget-header .widget-header-toolbar.btn-init-hide{display:none}.widget .widget-header .widget-header-toolbar.process-status{border-left:none}.widget .widget-header .widget-header-toolbar.process-status i{font-size:15px;line-height:35px;margin-right:0}.widget .widget-header .widget-header-toolbar.process-status span{display:none}.widget .widget-header .widget-header-toolbar .control-title{font-size:0.9em;color:#a5a5a5;position:relative;top:1px}.widget .widget-header .widget-header-toolbar .label{position:relative;top:8px}.widget .widget-header .widget-header-toolbar .toolbar-item-group{padding-top:0.3em;height:100%}.widget .widget-header .widget-header-toolbar .toolbar-item-group .label{position:relative;top:1px}.widget .widget-header .widget-header-toolbar .toolbar-item-group .multiselect{margin-top:0}.widget .widget-header .widget-header-toolbar .btn,.widget .widget-header .widget-header-toolbar .btn-borderless{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;height:25px}.widget .widget-header .widget-header-toolbar .btn-borderless{padding-top:5px}.widget .widget-header .widget-header-toolbar .btn-borderless i{margin-right:5px;position:relative;top:2px}.widget .widget-header .widget-header-toolbar .btn{margin-top:5px}.widget .widget-header .widget-header-toolbar .btn.btn-sm,.widget .widget-header .widget-header-toolbar .btn-group-sm>.btn{padding:0 10px}.widget .widget-header .widget-header-toolbar .btn.btn-sm i,.widget .widget-header .widget-header-toolbar .btn-group-sm>.btn i{width:10px;height:12px}.widget .widget-header .widget-header-toolbar .progress{width:150px;height:15px;margin-bottom:0;margin-top:10px}.widget .widget-header .widget-header-toolbar .progress .progress-bar{font-size:10px;line-height:1.5}.widget .widget-content{padding:20px 10px}.widget .widget-content h4{font-size:14px}.widget .widget-content h5{font-size:13px}.widget .widget-content h6{font-size:12px}.widget .widget-footer{padding:7px 10px;border-top-width:1px;border-top-style:solid;border-top-color:#f0f0f0;background-color:#f7f7f7}#focus-overlay{background:rgba(0,0,0,0.95);position:fixed;top:0;left:0;right:0;bottom:0;z-index:9}.sidebar-content{padding:0 10px;margin-top:30px}@media screen and (max-width: 480px){.sidebar-content{display:none}}.sidebar-content .panel-heading h5{margin:0}.sidebar-content p{font-size:0.85em}.sidebar-content>h5{display:block;font-size:0.9em;text-align:left;margin-bottom:0}.sidebar-content .list-info-sidebar{border:1px solid #ccc}.sidebar-content .list-info-sidebar li{font-size:12px}.sidebar-content .list-info-sidebar .data-name{width:100%;background-color:transparent}@media screen and (min-width: 1366px){.sidebar-content .list-info-sidebar .data-name{width:10em}}@media screen and (min-width: 1850px){.sidebar-content .list-info-sidebar .data-name{width:15em}}.sidebar-content .list-info-sidebar .progress{margin-bottom:0}.left-sidebar.minified .sidebar-content{display:none}.status-bar-list>li{padding:15px 0}.status-bar-list .progress{border-radius:0;margin-bottom:0}.status-bar-list .progress.progress-xs{height:3px}.status-bar-list .progress.progress-success{background-color:rgba(75,168,75,0.1)}.status-bar-list .progress.progress-info{background-color:rgba(70,176,207,0.1)}.status-bar-list .progress.progress-warning{background-color:rgba(231,161,61,0.1)}.status-bar-list .progress.progress-danger{background-color:rgba(219,56,51,0.1)}.status-bar-list .progress .progress-bar{border-radius:0}.status-bar-list p{margin-bottom:0;font-size:0.85em}.btn-auth-facebook{background-color:#3B5998;color:#fff;position:relative;width:100%;height:40px;padding-left:40px}.btn-auth-facebook:hover,.btn-auth-facebook:focus{color:#fff;background-color:#37538d}.btn-auth-facebook:before{font-family:FontAwesome;font-size:20px;content:\"\\F09A\";display:block;position:absolute;top:-1px;left:-1px;padding:7px 0;width:40px;height:40px;background-color:#2d4373}@media screen and (min-width: 768px){.btn-auth-facebook{width:50%}}@media screen and (min-width: 992px){.btn-auth-facebook{width:30%}}.page-auth .logo{margin-bottom:40px}.page-auth .separator{margin:30px auto;position:relative;width:100%}.page-auth .separator:before{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;content:\"\";vertical-align:middle;height:0;border-top:1px solid #ddd;position:absolute;top:9px;left:10px;right:10px}.page-auth .separator span{display:inline-block;vertical-align:middle;*vertical-align:auto;*zoom:1;*display:inline;position:relative;background-color:#ececec;padding:0 8px}@media screen and (min-width: 768px){.page-auth .separator{width:50%}}@media screen and (min-width: 992px){.page-auth .separator{width:31%}}.page-auth .login-box{background-color:#f1f1f1;border:1px solid #ddd}.page-auth .center-block{width:100%;padding:25px;text-align:left}.page-auth .center-block .title{font-size:1.2em;line-height:1;margin-bottom:15px}.page-auth .center-block form>input{margin-bottom:15px}.page-auth .center-block form>input:focus{border-color:#ccc}.page-auth .center-block .btn-auth{margin-top:20px}.page-auth .center-block .links{margin-top:30px;text-align:center}.page-auth .center-block .links p{margin-bottom:0;font-size:0.9em}.page-auth .center-block .links p a:hover{text-decoration:none}@media screen and (min-width: 768px){.page-auth .center-block{width:50%}}@media screen and (min-width: 992px){.page-auth .center-block{width:30%}}.login-title-text,.login-title-text *{font-size:28px}.field-validation-error{display:block;margin-top:8px;margin-bottom:20px}.field-validation-valid{display:none;visibility:hidden}.page-auth .validation-summary-errors ul{list-style:none;margin:0;padding:0}.page-auth .validation-summary-errors ul li{margin-bottom:8px}.top-bar{color:#efefef !important;padding-left:20px;padding-right:20px}.top-bar .shim{margin-top:3px}.top-bar .user-identity{font-size:110%;font-family:latolight}.top-bar .user-icon{height:24px;width:24px;display:inline-block;text-align:center;padding-top:2px;margin:0 8px;border-radius:12px;border:solid 1px #efefef}.top-bar .user-name{margin-right:16px}.top-bar .app-identity{color:#efefef;vertical-align:middle;font-size:150%;font-family:latolight;margin-left:24px}.txt--x125{font-size:125%}.txt--x150{font-size:150%}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/fonts/fontawesome-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.25a32416abee198dd821.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/fontawesome-webfont.eot?v=4.6.3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.25a32416abee198dd821.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/fontawesome-webfont.svg?v=4.6.3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.d7c639084f684d66a1bc.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/fontawesome-webfont.ttf?v=4.6.3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.1dc35d25e61d819a9c35.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/fontawesome-webfont.woff2?v=4.6.3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.e6cf7c6ec7c2d6f670ae.woff2";

/***/ }),

/***/ "../../../../../src/assets/fonts/fontawesome-webfont.woff?v=4.6.3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.c8ddf1e5e5bf3682bc7b.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/glyphicons-halflings-regular.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.f4769f9bdb7466be6508.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/glyphicons-halflings-regular.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.89889688147bd7575d63.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/glyphicons-halflings-regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/glyphicons-halflings-regular.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.fa2772327f55d8198301.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/glyphicons-halflings-regular.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.448c34a56d699c29117a.woff2";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-bol-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-bol-webfont.3bc154d28a76814f5d4a.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-bol-webfont.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-bol-webfont.cea3d4b3d813ba5961c2.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-bol-webfont.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-bol-webfont.699b88a794f3217d007a.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-bol-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-bol-webfont.e3bd6734444f2554eec8.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-lig-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-lig-webfont.42cf63dce3c2bdd6da0d.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-lig-webfont.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-lig-webfont.95bdc642a005aec6585e.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-lig-webfont.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-lig-webfont.61ee643da69ca991576a.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-lig-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-lig-webfont.db58e5dbb0ad0af29126.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-reg-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-reg-webfont.dff9ada532b25094019a.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-reg-webfont.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-reg-webfont.b2d186cf58d0a327fd54.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-reg-webfont.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-reg-webfont.89e3496d876095e0b730.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/lato-reg-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lato-reg-webfont.46badae10eee66abb0b3.woff";

/***/ }),

/***/ "../../../../../src/assets/sass/app-style-overrides.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\t\n*\t################################################################################\n*\t\n*\tCustom styles and overrides of bootstrap\n*\t\n*\t################################################################################\n*/\n.loader-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  background-color: #ececec;\n  text-align: center;\n  z-index: 10000; }\n\n.loader-message {\n  font-weight: 100;\n  display: block;\n  margin: 0 auto;\n  padding-top: 124px; }\n\n.loader-message h1 {\n  font-size: 24px; }\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em; }\n\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear; }\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\nhtml, body {\n  height: 100%; }\n\n#wrapper {\n  height: 100%; }\n\nbody.topnav-fixed #wrapper {\n  padding: 0 !important; }\n\n.content-wrapper {\n  margin-left: 0 !important; }\n\n.content-wrapper {\n  position: relative;\n  min-height: 100%; }\n\n.top-bar {\n  color: #efefef;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #34333C;\n  min-width: 320px; }\n  .top-bar .shim {\n    margin-top: 3px; }\n  .top-bar .user-identity {\n    font-size: 110%;\n    font-family: latolight; }\n  .top-bar .user-icon {\n    height: 24px;\n    width: 24px;\n    display: inline-block;\n    text-align: center;\n    padding-top: 2px;\n    margin: 0 8px;\n    border-radius: 12px;\n    border: solid 1px #efefef; }\n  .top-bar .user-name {\n    margin-right: 16px; }\n  .top-bar .app-identity {\n    color: #efefef;\n    vertical-align: middle;\n    font-size: 150%;\n    font-family: latolight;\n    margin-left: 24px; }\n\n.content-wrapper h1,\n.content-wrapper h2,\n.content-wrapper h3,\n.content-wrapper h4 {\n  font-family: \"latolight\"; }\n\n.main-header {\n  margin-top: 24px; }\n  .main-header em {\n    color: #767676; }\n  .main-header__subtitle {\n    margin-top: 22px; }\n\n.form-actions {\n  text-align: left;\n  margin-bottom: 20px; }\n\n.form-actions__bottom {\n  text-align: right !important;\n  margin-bottom: 0; }\n\n.form-group.required label:after {\n  content: \"*\";\n  color: #a94442;\n  font-weight: 900;\n  padding: 5px; }\n\n.widget-content {\n  padding: 20px; }\n\n.main-header h2.no-right-border {\n  border-right: none; }\n\n.main-menu li a.active {\n  background-color: #dfdfdf;\n  color: #555; }\n\n.userinfo {\n  position: fixed;\n  bottom: 24px;\n  padding: 13px 0 13px 15px; }\n\n.userinfo__avatar {\n  font-size: 22px;\n  padding: 0 15px 0 0; }\n\n.userinfo__text {\n  font-size: 12px;\n  max-width: 150px;\n  transition: opacity;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.userinfo--large {\n  font-size: 14px; }\n\n.userinfo--emphasis {\n  font-style: italic; }\n\n.table td {\n  word-wrap: break-word;\n  max-width: 200px; }\n\n.nowrap--ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n@media (max-width: 839px) {\n  .main-menu i {\n    font-size: 18px; }\n  .userinfo__text {\n    display: none;\n    visibility: hidden; }\n  .left-sidebar li .text {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map