(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/auth-layout/auth-layout.component */ "./src/app/layout/auth-layout/auth-layout.component.ts");
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ "./src/app/layout/content-layout/content-layout.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _modules_professor_professor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/professor/professor.module */ "./src/app/modules/professor/professor.module.ts");
/* harmony import */ var _modules_aluno_aluno_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/aluno/aluno.module */ "./src/app/modules/aluno/aluno.module.ts");
/* harmony import */ var _modules_turma_turma_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/turma/turma.module */ "./src/app/modules/turma/turma.module.ts");












const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectUnauthorizedTo"])(['login']);
const routes = [
    {
        path: 'auth',
        component: _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        loadChildren: () => _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"]
    },
    {
        path: '',
        component: _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        children: [
            {
                path: '',
                loadChildren: () => _modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
            },
            {
                path: 'professor',
                loadChildren: () => _modules_professor_professor_module__WEBPACK_IMPORTED_MODULE_7__["ProfessorModule"]
            },
            {
                path: 'aluno',
                loadChildren: () => _modules_aluno_aluno_module__WEBPACK_IMPORTED_MODULE_8__["AlunoModule"]
            },
            {
                path: 'turma',
                loadChildren: () => _modules_turma_turma_module__WEBPACK_IMPORTED_MODULE_9__["TurmaModule"]
            },
        ]
    },
    // Fallback when no prior routes is matched
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ "./src/app/layout/content-layout/content-layout.component.ts");
/* harmony import */ var _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/auth-layout/auth-layout.component */ "./src/app/layout/auth-layout/auth-layout.component.ts");
/* harmony import */ var _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/sidenav/sidenav.component */ "./src/app/layout/sidenav/sidenav.component.ts");
/* harmony import */ var _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/service/sidenav/sidenav.service */ "./src/app/data/service/sidenav/sidenav.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_13__["SidenavService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_10__["ContentLayoutComponent"],
        _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"],
        _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_10__["ContentLayoutComponent"],
                    _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"],
                    _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                ],
                providers: [
                    _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_13__["SidenavService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/pipe/aluno-turmas.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/data/pipe/aluno-turmas.pipe.ts ***!
  \************************************************/
/*! exports provided: AlunoTurmasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoTurmasPipe", function() { return AlunoTurmasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AlunoTurmasPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => Number(filter['idade']) >= item.idade_de && filter['idade'] <= Number(item.idade_ate));
    }
}
AlunoTurmasPipe.ɵfac = function AlunoTurmasPipe_Factory(t) { return new (t || AlunoTurmasPipe)(); };
AlunoTurmasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "alunoTurmasFilter", type: AlunoTurmasPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoTurmasPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'alunoTurmasFilter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/schema/aluno.ts":
/*!**************************************!*\
  !*** ./src/app/data/schema/aluno.ts ***!
  \**************************************/
/*! exports provided: Aluno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aluno", function() { return Aluno; });
class Aluno {
}


/***/ }),

/***/ "./src/app/data/schema/professor.ts":
/*!******************************************!*\
  !*** ./src/app/data/schema/professor.ts ***!
  \******************************************/
/*! exports provided: Professor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Professor", function() { return Professor; });
class Professor {
}


/***/ }),

/***/ "./src/app/data/schema/turma.ts":
/*!**************************************!*\
  !*** ./src/app/data/schema/turma.ts ***!
  \**************************************/
/*! exports provided: Turma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turma", function() { return Turma; });
class Turma {
}


/***/ }),

/***/ "./src/app/data/service/aluno/aluno-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/data/service/aluno/aluno-data.service.ts ***!
  \**********************************************************/
/*! exports provided: AlunoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoDataService", function() { return AlunoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class AlunoDataService {
    constructor() {
        this.alunoSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            aluno: null,
            key: ''
        });
        this.alunoAtual = this.alunoSource.asObservable();
    }
    obtemAluno(aluno, key) {
        this.alunoSource.next({
            aluno: aluno,
            key: key
        });
    }
    ;
}
AlunoDataService.ɵfac = function AlunoDataService_Factory(t) { return new (t || AlunoDataService)(); };
AlunoDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlunoDataService, factory: AlunoDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/data/service/aluno/aluno.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/service/aluno/aluno.service.ts ***!
  \*****************************************************/
/*! exports provided: AlunoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoService", function() { return AlunoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");




class AlunoService {
    constructor(_angularFireDatabase) {
        this._angularFireDatabase = _angularFireDatabase;
    }
    insert(aluno) {
        this._angularFireDatabase.list("alunos").push(aluno)
            .then((result) => {
            console.log(result);
        });
    }
    update(aluno, key) {
        this._angularFireDatabase.list("alunos").update(key, aluno);
    }
    getAll() {
        return this._angularFireDatabase.list("alunos")
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => {
            return changes.map(data => (Object.assign({ key: data.payload.key }, data.payload.val())));
        }));
    }
    delete(key) {
        this._angularFireDatabase.object(`alunos/${key}`).remove();
    }
}
AlunoService.ɵfac = function AlunoService_Factory(t) { return new (t || AlunoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
AlunoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlunoService, factory: AlunoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/service/professor/professor-data.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/data/service/professor/professor-data.service.ts ***!
  \******************************************************************/
/*! exports provided: ProfessorDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorDataService", function() { return ProfessorDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ProfessorDataService {
    constructor() {
        this.professorSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            professor: null,
            key: ''
        });
        this.professorAtual = this.professorSource.asObservable();
    }
    obtemProfessor(professor, key) {
        this.professorSource.next({
            professor: professor,
            key: key
        });
    }
    ;
}
ProfessorDataService.ɵfac = function ProfessorDataService_Factory(t) { return new (t || ProfessorDataService)(); };
ProfessorDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfessorDataService, factory: ProfessorDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/data/service/professor/professor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/service/professor/professor.service.ts ***!
  \*************************************************************/
/*! exports provided: ProfessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorService", function() { return ProfessorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");




class ProfessorService {
    constructor(_angularFireDatabase) {
        this._angularFireDatabase = _angularFireDatabase;
    }
    insert(professor) {
        this._angularFireDatabase.list("professores").push(professor)
            .then((result) => {
            console.log(result);
        });
    }
    update(professor, key) {
        this._angularFireDatabase.list("professores").update(key, professor);
    }
    getAll() {
        return this._angularFireDatabase.list("professores")
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => {
            return changes.map(data => (Object.assign({ key: data.payload.key }, data.payload.val())));
        }));
    }
    delete(key) {
        this._angularFireDatabase.object(`professores/${key}`).remove();
    }
}
ProfessorService.ɵfac = function ProfessorService_Factory(t) { return new (t || ProfessorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
ProfessorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfessorService, factory: ProfessorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/service/sidenav/sidenav.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/service/sidenav/sidenav.service.ts ***!
  \*********************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SidenavService {
    constructor() {
        this.sideNavToggleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.sideNavCloseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    toggle() {
        return this.sideNavToggleSubject.next(null);
    }
    close() {
        return this.sideNavCloseSubject.next(null);
    }
}
SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(); };
SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/data/service/turma/turma-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/data/service/turma/turma-data.service.ts ***!
  \**********************************************************/
/*! exports provided: TurmaDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaDataService", function() { return TurmaDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class TurmaDataService {
    constructor() {
        this.turmaSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            turma: null,
            key: ''
        });
        this.turmaAtual = this.turmaSource.asObservable();
    }
    obtemTurma(turma, key) {
        this.turmaSource.next({
            turma: turma,
            key: key
        });
    }
    ;
}
TurmaDataService.ɵfac = function TurmaDataService_Factory(t) { return new (t || TurmaDataService)(); };
TurmaDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TurmaDataService, factory: TurmaDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmaDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/data/service/turma/turma.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/service/turma/turma.service.ts ***!
  \*****************************************************/
/*! exports provided: TurmaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaService", function() { return TurmaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");




class TurmaService {
    constructor(_angularFireDatabase) {
        this._angularFireDatabase = _angularFireDatabase;
    }
    insert(turma) {
        this._angularFireDatabase.list("turmas").push(turma)
            .then((result) => {
            console.log(result);
        });
    }
    update(turma, key) {
        this._angularFireDatabase.list("turmas").update(key, turma);
    }
    getAll() {
        return this._angularFireDatabase.list("turmas")
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => {
            return changes.map(data => (Object.assign({ key: data.payload.key }, data.payload.val())));
        }));
    }
    delete(key) {
        this._angularFireDatabase.object(`turmas/${key}`).remove();
    }
}
TurmaService.ɵfac = function TurmaService_Factory(t) { return new (t || TurmaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
TurmaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TurmaService, factory: TurmaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthLayoutComponent {
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/content-layout/content-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/content-layout/content-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/service/sidenav/sidenav.service */ "./src/app/data/service/sidenav/sidenav.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/layout/sidenav/sidenav.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/layout/footer/footer.component.ts");








const _c0 = ["sidenav"];
class ContentLayoutComponent {
    constructor(sideNavService) {
        this.sideNavService = sideNavService;
        this.sidenavMode = 'push';
        this.hasBackdrop = true;
    }
    ngOnInit() {
        // Open the sidenav
        this.toggleSidenav();
        // Mobile
        if (window.screen.width <= 360) { // 768px portrait
            this.sidenavMode = 'push';
            this.hasBackdrop = true;
            this.closeSidenav();
        }
        else {
            this.sidenavMode = 'side';
            this.hasBackdrop = false;
        }
    }
    toggleSidenav() {
        this.sideNavService.sideNavToggleSubject.subscribe(() => {
            this.sidenav.toggle();
        });
    }
    closeSidenav() {
        this.sideNavService.sideNavCloseSubject.subscribe(() => {
            this.sidenav.close();
        });
    }
}
ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"])); };
ContentLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], viewQuery: function ContentLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 9, vars: 2, consts: [["autosize", "", 1, "drawer-container", 3, "hasBackdrop"], [1, "sidenav", 3, "mode"], ["sidenav", ""], [1, "sidenav-content"], [1, "pt-5", "pb-5"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", ctx.hasBackdrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.sidenavMode);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - calc(56px + 80px));\n}\n\n.drawer-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 270px;\n}\n\n@media (min-width: 320px) and (max-width: 767px) {\n  .drawer-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnRlbnQtbGF5b3V0L2NvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7QUFDSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBRkk7RUFISjtJQUlNLFlBQUE7RUFLSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbnRlbnQtbGF5b3V0L2NvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsibWFpblxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSBjYWxjKDU2cHggKyA4MHB4KSlcbi5kcmF3ZXItY29udGFpbmVyIC5zaWRlbmF2XG4gICAgcG9zaXRpb246IGZpeGVkXG4gICAgd2lkdGg6IDI3MHB4XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICB3aWR0aDogMjMwcHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-layout',
                templateUrl: './content-layout.component.html',
                styleUrls: ['./content-layout.component.sass']
            }]
    }], function () { return [{ type: _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.currentYear = new Date().getUTCFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "mande"], ["href", "https://www.linkedin.com/in/felipe-augusto-feitosa/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trakto - Teste t\u00E9cnico frontend pleno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Made with love by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Felipe Augusto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  height: 80px;\n  background: #663ab8;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 16px;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.mande[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.mande[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.mande[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.mande[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.mande[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBSGdCO0VBQ0kscUJBQUE7QUFLcEI7QUFKZ0I7RUFDSSxZQUFBO0FBTXBCO0FBSm9CO0VBQ0ksWUFBQTtBQU14QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyXG4gICAgaGVpZ2h0OiA4MHB4XG4gICAgYmFja2dyb3VuZDogIzY2M2FiOFxuICAgIGRpdlxuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgICAgIHBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweFxuICAgICAgICAgICAgJi5tYW5kZVxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgICAgICAgICAgICAgIGFcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgICAgICAgICAgICAgaSwgc3BhblxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFja1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/service/sidenav/sidenav.service */ "./src/app/data/service/sidenav/sidenav.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








class NavComponent {
    constructor(sidenav) {
        this.sidenav = sidenav;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
        this.navItems = [
            { link: '/home', title: 'Home' },
            { link: '/professor', title: 'Professor' },
            { link: '/aluno', title: 'Aluno' }
        ];
    }
    ngOnInit() { }
    clickMenu() {
        this.sidenav.toggle();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 8, vars: 2, consts: [["id", "navbar", "color", "primary", 1, "toolbar"], ["mat-icon-button", "", "aria-label", "Menu", 1, "icon", 3, "click"], ["target", "_blank", 1, "icon-github", 3, "href"], ["size", "lg", 3, "icon"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_1_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EscoLar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.repoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n#navbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n#navbar[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: white;\n}\n#navbar[_ngcontent-%COMP%]   .icon-github[_ngcontent-%COMP%] {\n  color: white;\n}\n#navbar[_ngcontent-%COMP%]   .icon-github[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUdSO0FBRkk7RUFDSSxZQUFBO0FBSVI7QUFIUTtFQUNJLFdBQUE7QUFLWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAuc3BhY2VyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvXG4gICAgYS5uYXYtbGlua1xuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgLmljb24tZ2l0aHViXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBzdmcgcGF0aFxuICAgICAgICAgICAgZmlsbDogd2hpdGUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.sass']
            }]
    }], function () { return [{ type: _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/service/sidenav/sidenav.service */ "./src/app/data/service/sidenav/sidenav.service.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");









class SidenavComponent {
    constructor(auth, sidenav) {
        this.auth = auth;
        this.sidenav = sidenav;
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.showFiller = false;
        this.user = [];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
    }
    ngOnInit() {
    }
    clickMenu() {
        if (window.screen.width <= 360) { // 768px portrait
            this.sidenav.toggle();
        }
    }
    onLogout() {
        this.auth.signOut();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 35, vars: 3, consts: [["id", "sidenav"], [1, "header"], ["shoes", "", 3, "multiple"], ["routerLink", "/", 1, "item-link", 3, "click"], [1, "item-link-text"], [1, "icon-menu"], ["size", "lg", 3, "icon"], ["routerLink", "/turma", 1, "item-link", 3, "click"], [1, "red"], ["routerLink", "/professor", 1, "item-link", 3, "click"], [1, "green"], ["routerLink", "/aluno", 1, "item-link", 3, "click"], [1, "yellow"], [1, "item-link", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EscoLar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-selection-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_mat_list_option_click_5_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_mat_list_option_click_11_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Turmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_mat_list_option_click_17_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Professores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_mat_list_option_click_23_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Alunos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_mat_list_option_click_29_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSignOutAlt);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListOption"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["#sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #503088;\n}\n#sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  background-color: white;\n  color: purple;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%] {\n  background-color: #5d3e94;\n  color: white;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   .item-link-text[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px calc(100% - 40px);\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 5px;\n  height: 5px;\n  border-radius: 10px;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%]   i.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%]   i.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%]   i.yellow[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n#sidenav[_ngcontent-%COMP%]   .item-link[_ngcontent-%COMP%]:hover {\n  background-color: #56398a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBREU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFHSjtBQUZJO0VBQ0UsYUFBQTtFQUNBLDZDQUFBO0FBSU47QUFISTtFQUNFLGlCQUFBO0FBS047QUFKSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTU47QUFMTTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBT1I7QUFOUTtFQUNFLHFCQUFBO0FBUVY7QUFQUTtFQUNFLHVCQUFBO0FBU1Y7QUFSUTtFQUNFLHdCQUFBO0FBVVY7QUFUSTtFQUNFLHlCQUFBO0FBV04iLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGVuYXZcbiAgaGVpZ2h0OiAxMDAlXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDMwODhcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI1MzQ0YlxuICAuaGVhZGVyXG4gICAgICBoZWlnaHQ6IDE4MHB4XG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgaDJcbiAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgIG1hcmdpbjogMFxuICAgICAgICB3aWR0aDogMTAwcHhcbiAgICAgICAgaGVpZ2h0OiAxMDBweFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxuICAgICAgICBjb2xvcjogcHVycGxlXG4gIC5pdGVtLWxpbmtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ZDNlOTRcbiAgICBjb2xvcjogd2hpdGVcbiAgICAuaXRlbS1saW5rLXRleHRcbiAgICAgIGRpc3BsYXk6IGdyaWRcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBjYWxjKDEwMCUgLSA0MHB4KVxuICAgIHNwYW5cbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4XG4gICAgLmljb24tbWVudVxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICAgIGlcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgd2lkdGg6IDVweFxuICAgICAgICBoZWlnaHQ6IDVweFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XG4gICAgICAgICYucmVkXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXG4gICAgICAgICYuZ3JlZW5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlblxuICAgICAgICAmLnllbGxvd1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd1xuICAgICY6aG92ZXJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzU2Mzk4YVxuICAgICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.sass']
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/aluno/aluno.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/aluno/aluno.module.ts ***!
  \***********************************************/
/*! exports provided: AlunoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoModule", function() { return AlunoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _aluno_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aluno.routing */ "./src/app/modules/aluno/aluno.routing.ts");
/* harmony import */ var _page_aluno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/aluno.component */ "./src/app/modules/aluno/page/aluno.component.ts");
/* harmony import */ var _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/edit/edit.component */ "./src/app/modules/aluno/page/edit/edit.component.ts");
/* harmony import */ var _page_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/list/list.component */ "./src/app/modules/aluno/page/list/list.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _page_upload_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/upload/upload.component */ "./src/app/modules/aluno/page/upload/upload.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _data_pipe_aluno_turmas_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../data/pipe/aluno-turmas.pipe */ "./src/app/data/pipe/aluno-turmas.pipe.ts");


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';















class AlunoModule {
}
AlunoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlunoModule });
AlunoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlunoModule_Factory(t) { return new (t || AlunoModule)(); }, providers: [], imports: [[
            _aluno_routing__WEBPACK_IMPORTED_MODULE_2__["AlunoRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // FormsModule,
            // ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlunoModule, { declarations: [_page_aluno_component__WEBPACK_IMPORTED_MODULE_3__["AlunoComponent"],
        _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
        _page_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        _page_upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"],
        _data_pipe_aluno_turmas_pipe__WEBPACK_IMPORTED_MODULE_15__["AlunoTurmasPipe"]], imports: [_aluno_routing__WEBPACK_IMPORTED_MODULE_2__["AlunoRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // FormsModule,
        // ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _page_aluno_component__WEBPACK_IMPORTED_MODULE_3__["AlunoComponent"],
                    _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
                    _page_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                    _page_upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"],
                    _data_pipe_aluno_turmas_pipe__WEBPACK_IMPORTED_MODULE_15__["AlunoTurmasPipe"],
                ],
                imports: [
                    _aluno_routing__WEBPACK_IMPORTED_MODULE_2__["AlunoRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // FormsModule,
                    // ReactiveFormsModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                ],
                exports: [],
                providers: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/aluno/aluno.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/aluno/aluno.routing.ts ***!
  \************************************************/
/*! exports provided: routes, AlunoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoRoutingModule", function() { return AlunoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_aluno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/aluno.component */ "./src/app/modules/aluno/page/aluno.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'aluno',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _page_aluno_component__WEBPACK_IMPORTED_MODULE_2__["AlunoComponent"]
    }
];
class AlunoRoutingModule {
}
AlunoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlunoRoutingModule });
AlunoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlunoRoutingModule_Factory(t) { return new (t || AlunoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlunoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/aluno/page/aluno.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/aluno/page/aluno.component.ts ***!
  \*******************************************************/
/*! exports provided: AlunoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoComponent", function() { return AlunoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/modules/aluno/page/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/modules/aluno/page/list/list.component.ts");




class AlunoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlunoComponent.ɵfac = function AlunoComponent_Factory(t) { return new (t || AlunoComponent)(); };
AlunoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlunoComponent, selectors: [["app-alunos"]], decls: 7, vars: 0, consts: [["id", "alunos"], [1, "container", "jombotron"]], template: function AlunoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Alunos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWx1bm8vcGFnZS9hbHVuby5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alunos',
                templateUrl: './aluno.component.html',
                styleUrls: ['./aluno.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/aluno/page/edit/edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/aluno/page/edit/edit.component.ts ***!
  \***********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_schema_aluno__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/schema/aluno */ "./src/app/data/schema/aluno.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upload/upload.component */ "./src/app/modules/aluno/page/upload/upload.component.ts");
/* harmony import */ var _data_service_aluno_aluno_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/service/aluno/aluno.service */ "./src/app/data/service/aluno/aluno.service.ts");
/* harmony import */ var _data_service_aluno_aluno_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/aluno/aluno-data.service */ "./src/app/data/service/aluno/aluno-data.service.ts");
/* harmony import */ var _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/service/turma/turma.service */ "./src/app/data/service/turma/turma.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_pipe_aluno_turmas_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../data/pipe/aluno-turmas.pipe */ "./src/app/data/pipe/aluno-turmas.pipe.ts");



















function EditComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turma_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", turma_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", turma_r3.nome + " (" + turma_r3.hora_inicio + " \u00E0s " + turma_r3.hora_final + ")", " ");
} }
function EditComponent_div_27_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " N\u00E3o h\u00E1 turmas para sua faixa et\u00E1ria! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_27_p_1_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const results_r4 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (results_r4 == null ? null : results_r4.length) === 0 && ctx_r2.aluno["idade"] > 0);
} }
class EditComponent {
    constructor(alunoService, alunoDataService, turmaService) {
        this.alunoService = alunoService;
        this.alunoDataService = alunoDataService;
        this.turmaService = turmaService;
        this.key = '';
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    ngOnInit() {
        // Get all turmas
        this.turmas = this.turmaService.getAll();
        this.aluno = new _data_schema_aluno__WEBPACK_IMPORTED_MODULE_3__["Aluno"]();
        this.alunoDataService.alunoAtual.subscribe(data => {
            if (data.aluno && data.key) {
                console.log({ data });
                this.aluno = new _data_schema_aluno__WEBPACK_IMPORTED_MODULE_3__["Aluno"]();
                this.aluno.nome = data.aluno.nome;
                this.aluno.idade = data.aluno.idade;
                this.aluno.nome_parente = data.aluno.nome_parente;
                this.key = data.key;
                // Foto
                this.uploadComponent.setFotoPreview(data.aluno.foto);
                this.aluno.foto = data.aluno.foto;
                // Turmas
                this.aluno_turmas = data['turma'];
                this.toppings.setValue(data['turma']);
            }
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let image_url = this.aluno.foto;
            if (!this.key) {
                image_url = (yield this.uploadComponent.uploadImage());
            }
            let aluno = new _data_schema_aluno__WEBPACK_IMPORTED_MODULE_3__["Aluno"]();
            aluno.nome = this.aluno.nome;
            aluno.idade = this.aluno.idade;
            aluno.foto = image_url.toString();
            aluno.nome_parente = this.aluno.nome_parente;
            aluno.turma = this.aluno_turmas;
            let key = this.key;
            console.log({ aluno, key });
            if (this.key) {
                this.alunoService.update(aluno, this.key);
            }
            else {
                this.alunoService.insert(aluno);
            }
            this.aluno = new _data_schema_aluno__WEBPACK_IMPORTED_MODULE_3__["Aluno"]();
            this.key = null;
            this.aluno_turmas = null;
            this.uploadComponent.setFotoPreview('');
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service_aluno_aluno_service__WEBPACK_IMPORTED_MODULE_5__["AlunoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service_aluno_aluno_data_service__WEBPACK_IMPORTED_MODULE_6__["AlunoDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_7__["TurmaService"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], viewQuery: function EditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploadComponent = _t.first);
    } }, decls: 34, vars: 18, consts: [["id", "aluno-edit"], [3, "ngSubmit"], ["documentEditForm", "ngForm"], [1, "form-group"], [1, "section"], [1, "w-100"], ["matInput", "", "placeholder", "Nome", "required", "", "name", "nome", 3, "ngModel", "ngModelChange"], [1, "w-25"], ["type", "number", "matInput", "", "placeholder", "Idade", "required", "", "name", "idade", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Nome do respons\u00E1vel", "required", "", "name", "nome_parente", 3, "ngModel", "ngModelChange"], ["multiple", "", "required", "", 3, "formControl", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "disabled"], [3, "value"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cadastrar novo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.aluno.nome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Idade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_15_listener($event) { return ctx.aluno.idade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Nome do respons\u00E1vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_19_listener($event) { return ctx.aluno.nome_parente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Turmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.aluno_turmas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EditComponent_mat_option_24_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "alunoTurmasFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EditComponent_div_27_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "alunoTurmasFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aluno.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aluno.idade);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aluno.nome_parente);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.toppings)("ngModel", ctx.aluno_turmas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 11, ctx.turmas), ctx.aluno));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 16, ctx.turmas), ctx.aluno));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_data_pipe_aluno_turmas_pipe__WEBPACK_IMPORTED_MODULE_15__["AlunoTurmasPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["#aluno-edit[_ngcontent-%COMP%]   .w-95[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n#aluno-edit[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(auto, 250px) calc(100% - 250px);\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-edit[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n#aluno-edit[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]:first-of-type {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n#aluno-edit[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]:last-of-type {\n  padding-left: 20px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-edit[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]:last-of-type {\n    padding-left: 0;\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-edit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbHVuby9wYWdlL2VkaXQvZWRpdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSw2REFBQTtBQUFOO0FBQ007RUFIRjtJQUlJLDJCQUFBO0VBRU47QUFDRjtBQURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFHTjtBQUZJO0VBQ0Usa0JBQUE7QUFJTjtBQUhNO0VBRkY7SUFHSSxlQUFBO0VBTU47QUFDRjtBQUxJO0VBREY7SUFFSSxXQUFBO0VBUUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWx1bm8vcGFnZS9lZGl0L2VkaXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWx1bm8tZWRpdFxuICAudy05NVxuICAgIHdpZHRoOiA5NSUhaW1wb3J0YW50XG4gIGZvcm1cbiAgICAuZm9ybS1ncm91cFxuICAgICAgZGlzcGxheTogZ3JpZFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMjUwcHgpIGNhbGMoMTAwJSAtIDI1MHB4KVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJVxuXG4gICAgLnNlY3Rpb246Zmlyc3Qtb2YtdHlwZVxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcbiAgICAuc2VjdGlvbjpsYXN0LW9mLXR5cGVcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICAgIHBhZGRpbmctbGVmdDogMFxuICBidXR0b25cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgIHdpZHRoOiAxMDAlIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.sass'],
            }]
    }], function () { return [{ type: _data_service_aluno_aluno_service__WEBPACK_IMPORTED_MODULE_5__["AlunoService"] }, { type: _data_service_aluno_aluno_data_service__WEBPACK_IMPORTED_MODULE_6__["AlunoDataService"] }, { type: _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_7__["TurmaService"] }]; }, { uploadComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/aluno/page/list/list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/aluno/page/list/list.component.ts ***!
  \***********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service_aluno_aluno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/service/aluno/aluno.service */ "./src/app/data/service/aluno/aluno.service.ts");
/* harmony import */ var _data_service_aluno_aluno_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/service/aluno/aluno-data.service */ "./src/app/data/service/aluno/aluno-data.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ListComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Foto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aluno_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + aluno_r10.foto + ")");
} }
function ListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aluno_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aluno_r11.nome, " ");
} }
function ListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Idade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aluno_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aluno_r12.idade, " ");
} }
function ListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const aluno_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.edit(aluno_r13, aluno_r13.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const aluno_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.delete(aluno_r13.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function ListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
class ListComponent {
    constructor(alunoService, alunoDataService) {
        this.alunoService = alunoService;
        this.alunoDataService = alunoDataService;
        this.columns = [
            // 'index',
            'foto',
            'nome',
            'idade',
            'acoes'
        ];
    }
    ngOnInit() {
        this.alunos = this.alunoService.getAll();
    }
    delete(key) {
        this.alunoService.delete(key);
    }
    edit(aluno, key) {
        this.alunoDataService.obtemAluno(aluno, key);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_aluno_aluno_service__WEBPACK_IMPORTED_MODULE_1__["AlunoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_aluno_aluno_data_service__WEBPACK_IMPORTED_MODULE_2__["AlunoDataService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 19, vars: 5, consts: [["id", "aluno-list", "mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource"], ["matColumnDef", "foto"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "idade"], ["matColumnDef", "acoes"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", ""], [1, "foto-miniatura"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alunos cadastrados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_td_7_Template, 2, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_th_12_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_td_13_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_th_15_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_td_16_Template, 5, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_tr_17_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_tr_18_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.alunos));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#aluno-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#aluno-list[_ngcontent-%COMP%]   .cdk-column-foto[_ngcontent-%COMP%] {\n  width: 125px;\n}\n#aluno-list[_ngcontent-%COMP%]   .cdk-column-foto[_ngcontent-%COMP%]   .foto-miniatura[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 5px 0;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#aluno-list[_ngcontent-%COMP%]   .cdk-column-idade[_ngcontent-%COMP%] {\n  width: 80px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-list[_ngcontent-%COMP%]   .cdk-column-idade[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n#aluno-list[_ngcontent-%COMP%]   .cdk-column-acoes[_ngcontent-%COMP%] {\n  width: 190px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-list[_ngcontent-%COMP%]   .cdk-column-acoes[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\n#aluno-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: white;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#aluno-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 10px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #aluno-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n    margin-right: 0px;\n    margin-bottom: 5px;\n  }\n}\n#aluno-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f5f5f5;\n}\n#aluno-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbHVuby9wYWdlL2xpc3QvbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFHTjtBQUZFO0VBQ0UsV0FBQTtBQUlKO0FBSEk7RUFGRjtJQUdJLFdBQUE7RUFNSjtBQUNGO0FBTkU7RUFDRSxZQUFBO0FBUUo7QUFQSTtFQUZGO0lBR0ksWUFBQTtFQVVKO0FBQ0Y7QUFUSTtFQURGO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFQVlKO0FBQ0Y7QUFYSTtFQUNFLHVCQUFBO0FBYU47QUFaTTtFQUZGO0lBR00sV0FBQTtFQWVSO0FBQ0Y7QUFmTTtFQUNFLGtCQUFBO0FBaUJSO0FBaEJRO0VBRkY7SUFHSSxpQkFBQTtJQUNBLGtCQUFBO0VBbUJSO0FBQ0Y7QUFuQkU7RUFDRSx5QkFBQTtBQXFCSjtBQXBCRTtFQUNFLHVCQUFBO0FBc0JKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbHVuby9wYWdlL2xpc3QvbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbHVuby1saXN0XG4gIHdpZHRoOiAxMDAlXG4gIC5jZGstY29sdW1uLWZvdG9cbiAgICB3aWR0aDogMTI1cHhcbiAgICAuZm90by1taW5pYXR1cmFcbiAgICAgIHdpZHRoOiA4MHB4XG4gICAgICBoZWlnaHQ6IDgwcHhcbiAgICAgIG1hcmdpbjogNXB4IDBcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxuICAuY2RrLWNvbHVtbi1pZGFkZVxuICAgIHdpZHRoOiA4MHB4XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICB3aWR0aDogNTBweFxuICAuY2RrLWNvbHVtbi1hY29lc1xuICAgIHdpZHRoOiAxOTBweFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxuICAgICAgd2lkdGg6IDExMHB4XG4gIC5tYXQtY29sdW1uLWFjb2VzXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICBwYWRkaW5nLXRvcDogNXB4XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4XG5cbiAgICBidXR0b25cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgJjpmaXJzdC1vZi10eXBlXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweFxuICB0cjpudGgtY2hpbGQoZXZlbilcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XG4gIHRyOm50aC1jaGlsZChvZGQpXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.sass']
            }]
    }], function () { return [{ type: _data_service_aluno_aluno_service__WEBPACK_IMPORTED_MODULE_1__["AlunoService"] }, { type: _data_service_aluno_aluno_data_service__WEBPACK_IMPORTED_MODULE_2__["AlunoDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/aluno/page/upload/upload.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/aluno/page/upload/upload.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");






const _c0 = ["userPhoto"];
function UploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enviando:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pct_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pct_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r1.round(pct_r2, 0)), "%");
} }
class UploadComponent {
    constructor(storage) {
        this.storage = storage;
        this.title = "cloudsSorage";
    }
    uploadImage() {
        return new Promise((resolve) => {
            var n = Date.now();
            const file = this.userPhoto.nativeElement.files[0];
            const filePath = `RoomsImages/${n}`;
            const fileRef = this.storage.ref(filePath);
            const task = this.storage.upload(`RoomsImages/${n}`, file);
            this.percentage = task.percentageChanges();
            task
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
                this.downloadURL = fileRef.getDownloadURL();
                this.downloadURL.subscribe(url => {
                    // Finalize
                    if (url) {
                        this.imageUrlStoraged = url;
                    }
                    this.percentage = null;
                    resolve(this.imageUrlStoraged);
                });
            }))
                .subscribe(url => {
                // if (url) {
                //   console.log("subscribe", url);
                // }
            });
        });
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }
    setFotoPreview(link) {
        this.imgURL = link;
    }
    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userPhoto = _t.first);
    } }, decls: 10, vars: 5, consts: [["id", "image-upload"], [1, "image-preview"], ["for", "image-upload-input"], ["type", "file", "id", "image-upload-input", "name", "image", "autocomplete", "off", "accept", "image/x-png,image/jpeg", 3, "change"], ["userPhoto", ""], ["class", "upload-progress-bar", 4, "ngIf"], [1, "upload-progress-bar"], ["mode", "determinate", 3, "value"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Escolher foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.preview(_r0.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadComponent_div_8_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.imgURL + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx.percentage));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["#image-upload[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 210px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #image-upload[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#image-upload[_ngcontent-%COMP%]   .green-color[_ngcontent-%COMP%] {\n  background-color: green;\n}\n#image-upload[_ngcontent-%COMP%]   .upload-progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n}\n#image-upload[_ngcontent-%COMP%]   .upload-progress-bar[_ngcontent-%COMP%]   .mat-progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 10px;\n}\n#image-upload[_ngcontent-%COMP%]   .upload-progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 5px;\n}\n#image-upload[_ngcontent-%COMP%]   .upload-progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\n  margin-left: 5px;\n  width: 67px;\n}\n#image-upload[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: 1px solid gray;\n}\n#image-upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#image-upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff66;\n  border-radius: 5px;\n  width: 80%;\n  height: 80%;\n  z-index: 1;\n}\n#image-upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  pointer-events: none;\n  z-index: 2;\n  font-size: 16px;\n  font-weight: 500;\n  text-shadow: 0px 0px 5px white;\n}\n#image-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n  left: -9999999999999px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbHVuby9wYWdlL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFIRjtJQUlJLFdBQUE7RUFHRjtBQUNGO0FBSEU7RUFDRSx1QkFBQTtBQUtKO0FBSkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTUo7QUFMSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQU9OO0FBSk07RUFDRSxpQkFBQTtBQU1SO0FBTE07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFPUjtBQU5FO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQVFKO0FBUEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBU0o7QUFSSTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBVU47QUFUTTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBV1I7QUFURTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFXSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWx1bm8vcGFnZS91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlLXVwbG9hZFxuICB3aWR0aDogMjEwcHhcbiAgaGVpZ2h0OiAyMTBweFxuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICB3aWR0aDogMTAwJVxuICAuZ3JlZW4tY29sb3JcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlblxuICAudXBsb2FkLXByb2dyZXNzLWJhclxuICAgIG1hcmdpbi10b3A6IDhweFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXJcbiAgICAgIGhlaWdodDogOHB4XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4XG5cbiAgICBzcGFuXG4gICAgICAmOmZpcnN0LW9mLXR5cGVcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHhcbiAgICAgICY6bGFzdC1vZi10eXBlXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHhcbiAgICAgICAgd2lkdGg6IDY3cHhcbiAgLmltYWdlLXByZXZpZXdcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5XG4gIGxhYmVsXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgbWFyZ2luOiAwXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxuICAgIGN1cnNvcjogcG9pbnRlclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICA+IGRpdlxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjZcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgICAgd2lkdGg6IDgwJVxuICAgICAgaGVpZ2h0OiA4MCVcbiAgICAgIHotaW5kZXg6IDFcbiAgICAgIHBcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICAgICAgei1pbmRleDogMlxuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMFxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggd2hpdGVcbiAgICAgIFxuICBpbnB1dFxuICAgIHdpZHRoOiAwXG4gICAgaGVpZ2h0OiAwXG4gICAgb3BhY2l0eTogMFxuICAgIGxlZnQ6IC05OTk5OTk5OTk5OTk5cHhcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.sass']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, { userPhoto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['userPhoto', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/modules/auth/page/login/login.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/modules/auth/page/register/register.component.ts");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.routing */ "./src/app/modules/auth/auth.routing.ts");
/* harmony import */ var _data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/service/sidenav/sidenav.service */ "./src/app/data/service/sidenav/sidenav.service.ts");











class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_9__["SidenavService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_routing__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_page_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _page_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_routing__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [_data_service_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_9__["SidenavService"]],
                declarations: [
                    _page_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _page_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_routing__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/auth/auth.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/modules/auth/page/login/login.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/modules/auth/page/register/register.component.ts");






const routes = [
    //   {
    //     path: '',
    //     redirectTo: '/auth/login',
    //     pathMatch: 'full'
    //   },
    {
        path: '',
        children: [
            { path: 'login', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
            { path: 'register', component: _page_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/auth/page/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/auth/page/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = function () { return ["/auth/register"]; };
class LoginComponent {
    constructor(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onLogin() {
        this.error = null;
        const { email, password } = this.loginForm.value;
        this.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
            console.log({ user });
            this.router.navigate(['']);
        })
            .catch(err => {
            switch (err.code) {
                case "auth/user-not-found":
                    this.error = "Usuário ou senha inválido.";
                    break;
                case "auth/wrong-password":
                    this.error = "Senha inválida.";
                    break;
                default:
                    this.error = "Ocorreu um erro ao realizar o seu login, tente novamente mais tarde.";
                    break;
            }
            console.error("onLogin() -> Error: ", err);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 6, consts: [["id", "login"], [1, "form"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "placeholder", "seu@email.com", "required", "", "formControlName", "email"], ["matInput", "", "placeholder", "*******", "required", "", "formControlName", "password"], [1, "form-group"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "hidden"], [1, "register", 3, "routerLink"], [1, "image", 2, "background-image", "url('/assets/img/login-image.jpg')"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quero me cadastrar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["#login[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n}\n#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 360px;\n  text-align: center;\n}\n#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], #login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%], #login[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n}\n#login[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 0px 20px 5px;\n  z-index: 2;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 25px;\n  }\n  #login[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTs7RUFFSSxXQUFBO0FBRVo7QUFDSTs7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQ1I7QUFBSTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUVSO0FBREk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFHUjtBQURJO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQUdWO0VBRk07SUFDSSxhQUFBO0VBSVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luXG4gICAgaGVpZ2h0OiAxMDB2aFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICAvLyBDb21wb25lbnQgTGF5b3V0XG4gICAgZm9ybVxuICAgICAgICBtYXgtd2lkdGg6IDM2MHB4XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAuZnVsbC13aWR0aCxcbiAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgXG4gICAgLy8gU3RydWN0dXJlIG9mIHBhZ2VcbiAgICAuZm9ybSxcbiAgICAuaW1hZ2VcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICB3aWR0aDogNTAlXG4gICAgLmltYWdlXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAuZm9ybVxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweFxuICAgICAgICB6LWluZGV4OiAyXG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgICAgLmZvcm1cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4XG4gICAgICAgIC5pbWFnZVxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/auth/page/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/page/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_schema_professor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/schema/professor */ "./src/app/data/schema/professor.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/service/professor/professor.service */ "./src/app/data/service/professor/professor.service.ts");
/* harmony import */ var _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/professor/professor-data.service */ "./src/app/data/service/professor/professor-data.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












const _c0 = function () { return ["/auth/login"]; };
class RegisterComponent {
    constructor(fb, auth, router, professorService, professorDataService) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.professorService = professorService;
        this.professorDataService = professorDataService;
        this.key = '';
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
            ]),
        });
    }
    createUser() {
        const { name, email, password } = this.registerForm.value;
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
            console.log("RegisterComponent -> createUser -> user", user);
            this.createProfessor(name, user.user.uid, email);
            this.router.navigate(['']);
        })
            .catch(err => {
            switch (err.code) {
                case "auth/email-already-in-use":
                    this.error = "E-mail já cadastrado.";
                    break;
                default:
                    this.error = "Ocorreu um erro ao realizar o seu cadastro, tente novamente mais tarde.";
                    break;
            }
            console.error("createUser() -> Error: ", err);
        });
    }
    createProfessor(name, uid, email) {
        this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_2__["Professor"]();
        this.professorDataService.professorAtual.subscribe(data => {
            this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_2__["Professor"]();
            this.professor.nome = name;
            this.professor.email = email;
            this.professor.auth_uid = uid;
        });
        this.professorService.insert(this.professor);
        this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_2__["Professor"]();
        this.key = null;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_5__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorDataService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 24, vars: 4, consts: [["id", "register"], [1, "form"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "placeholder", "Nome Completo", "required", "", "formControlName", "name"], ["matInput", "", "placeholder", "seu@email.com", "required", "", "formControlName", "email"], ["matInput", "", "placeholder", "*******", "required", "", "formControlName", "password"], [1, "form-group"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "register", 3, "routerLink"], [1, "image", 2, "background-image", "url('/assets/img/login-image.jpg')"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cadastro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome Completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Melhor e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "J\u00E1 estou cadastrado, quero logar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["#register[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n}\n#register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 360px;\n  text-align: center;\n}\n#register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], #register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#register[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%], #register[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n}\n#register[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#register[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 0px 20px 5px;\n  z-index: 2;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #register[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 25px;\n  }\n  #register[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2UvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTs7RUFFSSxXQUFBO0FBRVo7QUFDSTs7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQ1I7QUFBSTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUVSO0FBREk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFHUjtBQURJO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQUdWO0VBRk07SUFDSSxhQUFBO0VBSVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVyXG4gICAgaGVpZ2h0OiAxMDB2aFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICAvLyBDb21wb25lbnQgTGF5b3V0XG4gICAgZm9ybVxuICAgICAgICBtYXgtd2lkdGg6IDM2MHB4XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAuZnVsbC13aWR0aCxcbiAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgXG4gICAgLy8gU3RydWN0dXJlIG9mIHBhZ2VcbiAgICAuZm9ybSxcbiAgICAuaW1hZ2VcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICB3aWR0aDogNTAlXG4gICAgLmltYWdlXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAuZm9ybVxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweFxuICAgICAgICB6LWluZGV4OiAyXG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgICAgLmZvcm1cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4XG4gICAgICAgIC5pbWFnZVxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_5__["ProfessorService"] }, { type: _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/home.component */ "./src/app/modules/home/page/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");
/* harmony import */ var _page_turma_turma_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/turma/turma.component */ "./src/app/modules/home/page/turma/turma.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _page_turma_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page/turma/edit/edit.component */ "./src/app/modules/home/page/turma/edit/edit.component.ts");
/* harmony import */ var _page_turma_show_show_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/turma/show/show.component */ "./src/app/modules/home/page/turma/show/show.component.ts");





















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMaterialTimepickerModule"].setLocale('pt-BR'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_page_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _page_turma_turma_component__WEBPACK_IMPORTED_MODULE_4__["TurmaComponent"],
        _page_turma_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["EditComponent"],
        _page_turma_show_show_component__WEBPACK_IMPORTED_MODULE_18__["ShowComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
        _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMaterialTimepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _page_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _page_turma_turma_component__WEBPACK_IMPORTED_MODULE_4__["TurmaComponent"],
                    _page_turma_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["EditComponent"],
                    _page_turma_show_show_component__WEBPACK_IMPORTED_MODULE_18__["ShowComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                    _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMaterialTimepickerModule"].setLocale('pt-BR'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ],
                exports: [],
                providers: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/home.component */ "./src/app/modules/home/page/home.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _page_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/page/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/page/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _turma_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turma/edit/edit.component */ "./src/app/modules/home/page/turma/edit/edit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/service/turma/turma.service */ "./src/app/data/service/turma/turma.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _turma_turma_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./turma/turma.component */ "./src/app/modules/home/page/turma/turma.component.ts");











function HomeComponent_app_turma_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-turma", 9);
} if (rf & 2) {
    const turma_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("turma", turma_r2);
} }
function HomeComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "N\u00E3o h\u00E1 turmas cadastradas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_section_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cadastrar turma ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(dialog, turmaService) {
        this.dialog = dialog;
        this.turmaService = turmaService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
    }
    openDialog() {
        const dialogRef = this.dialog.open(_turma_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"], {
            // width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    ngOnInit() {
        this.turmas = this.turmaService.getAll();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_4__["TurmaService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 7, consts: [["id", "dashboard"], [1, "container", "jombotron"], [1, "title"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", "mat-raised-button", "", 3, "click"], [3, "icon"], [1, "mb-4", "mt-4"], [1, "turmas"], [3, "turma", 4, "ngFor", "ngForOf"], ["class", "sem-turma", 4, "ngIf"], [3, "turma"], [1, "sem-turma"], ["mat-stroked-button", "", "color", "primary", "aria-label", "Cadastrar turma", "mat-button", "", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Turmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_app_turma_9_Template, 1, 1, "app-turma", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_section_11_Template, 5, 0, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.turmas)) == null ? null : tmp_2_0.length) == 0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.turmas));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _turma_turma_component__WEBPACK_IMPORTED_MODULE_9__["TurmaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["#dashboard[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n#dashboard[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n#dashboard[_ngcontent-%COMP%]   .turmas[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, calc(100% / 3) [col-start]);\n  margin: -10px;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  #dashboard[_ngcontent-%COMP%]   .turmas[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 50% [col-start]);\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #dashboard[_ngcontent-%COMP%]   .turmas[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 100% [col-start]);\n  }\n}\n#dashboard[_ngcontent-%COMP%]   .sem-turma[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 260px;\n}\n#dashboard[_ngcontent-%COMP%]   .sem-turma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #b3b3b3;\n  font-weight: 300;\n  margin-bottom: 30px;\n}\n#dashboard[_ngcontent-%COMP%]   .sem-turma[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 5px 20px;\n}\n  .cdk-overlay-backdrop {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2UvaG9tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFBRTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBSkY7SUFLSSxpREFBQTtFQUlKO0FBQ0Y7QUFKSTtFQU5GO0lBT0ksa0RBQUE7RUFPSjtBQUNGO0FBTkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQVFKO0FBUEk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTTjtBQVJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBVU47QUFSQTtFQUNJLG9CQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rhc2hib2FyZFxuICAudGl0bGVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kXG4gICAgaDFcbiAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgLnR1cm1hc1xuICAgIGRpc3BsYXk6IGdyaWRcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBjYWxjKDEwMCUgLyAzKSBbY29sLXN0YXJ0XSlcbiAgICBtYXJnaW46IC0xMHB4XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUgW2NvbC1zdGFydF0pXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxMDAlIFtjb2wtc3RhcnRdKVxuXG4gIC5zZW0tdHVybWFcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGhlaWdodDogMjYwcHhcbiAgICBwXG4gICAgICBmb250LXNpemU6IDI2cHhcbiAgICAgIGNvbG9yOiAjYjNiM2IzXG4gICAgICBmb250LXdlaWdodDogMzAwXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgYnV0dG9uXG4gICAgICBmb250LXNpemU6IDE3cHhcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktYmFja2Ryb3BcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.sass']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_4__["TurmaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/page/turma/edit/edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/page/turma/edit/edit.component.ts ***!
  \****************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_schema_turma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/schema/turma */ "./src/app/data/schema/turma.ts");
/* harmony import */ var _data_schema_professor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/schema/professor */ "./src/app/data/schema/professor.ts");
/* harmony import */ var _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/professor/professor-data.service */ "./src/app/data/service/professor/professor-data.service.ts");
/* harmony import */ var _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/service/professor/professor.service */ "./src/app/data/service/professor/professor.service.ts");
/* harmony import */ var _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/turma/turma.service */ "./src/app/data/service/turma/turma.service.ts");
/* harmony import */ var _data_service_turma_turma_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/turma/turma-data.service */ "./src/app/data/service/turma/turma-data.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");



















function EditComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const professor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !professor_r5)("value", professor_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", professor_r5.nome, " ");
} }
class EditComponent {
    constructor(fb, professorDataService, professorService, turmaService, turmaDataService, dialogRef, data) {
        this.fb = fb;
        this.professorDataService = professorDataService;
        this.professorService = professorService;
        this.turmaService = turmaService;
        this.turmaDataService = turmaDataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.cores = [
            "#00d286",
            "#00b976",
            "#00c5ad",
            "#00ad98",
            "#36a8e0",
            "#2a92c4",
            "#af70c1",
            "#a45bb9",
            "#425b71",
            "#384f62",
            "#f5ce2d",
            "#f9ad29",
            "#ef9334",
            "#e06b0e",
            "#f0f3f4",
            "#c9ced2",
            "#a5b4b5",
            "#919d9d"
        ];
        this.key = '';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    createTurma() {
        let turma = this.turma;
        let professor = this.professor;
        // Update
        if (this.key) {
            turma.professor_nome = professor.nome;
            turma.professor_key = professor['key'];
            this.turmaService.update(turma, this.key);
        }
        // Create
        else {
            let cor = this.cores[Math.floor(Math.random() * this.cores.length)];
            this.turma = new _data_schema_turma__WEBPACK_IMPORTED_MODULE_3__["Turma"]();
            this.turmaDataService.turmaAtual.subscribe(data => {
                this.turma = new _data_schema_turma__WEBPACK_IMPORTED_MODULE_3__["Turma"]();
                this.turma.nome = turma.nome;
                this.turma.cor = cor;
                this.turma.hora_inicio = turma.hora_inicio;
                this.turma.hora_final = turma.hora_final;
                this.turma.idade_de = turma.idade_de;
                this.turma.idade_ate = turma.idade_ate;
                this.turma.professor_nome = professor.nome;
                this.turma.professor_key = professor['key'];
            });
            this.turmaService.insert(this.turma);
        }
        this.turma = new _data_schema_turma__WEBPACK_IMPORTED_MODULE_3__["Turma"]();
        this.key = null;
        this.onNoClick();
    }
    Test(param) {
        console.log(param);
        return false;
    }
    ngOnInit() {
        console.log("turma", this.data["turma"]);
        // Get all professores
        this.professores = this.professorService.getAll();
        // Prepare professor
        this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_4__["Professor"]();
        this.professor.nome = '';
        this.professorDataService.professorAtual.subscribe(data => {
            if (data.professor && data.key) {
                this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_4__["Professor"]();
                this.professor.nome = data.professor.nome;
                this.key = data.key;
            }
        });
        // Prepare Turma
        this.turma = new _data_schema_turma__WEBPACK_IMPORTED_MODULE_3__["Turma"]();
        if (this.data["key"]) {
            this.key = this.data["key"];
            this.turma.cor = this.data["turma"]["cor"];
            this.turma.hora_final = this.data["turma"]["hora_final"];
            this.turma.hora_inicio = this.data["turma"]["hora_inicio"];
            this.turma.idade_ate = this.data["turma"]["idade_ate"];
            this.turma.idade_de = this.data["turma"]["idade_de"];
            this.turma.nome = this.data["turma"]["nome"];
            this.turma.professor_key = this.data["turma"]["professor_key"];
            this.turma.professor_nome = this.data["turma"]["professor_nome"];
        }
        // this.turmaDataService.turmaAtual.subscribe(data => {
        //   if( data.turma && data.key ){
        //     // this.turma = new Turma();
        //     // this.turma.nome = data.turma.nome;
        //     // this.key = data.key
        //   }
        // })
        // Form validate
        this.registerForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
        });
    }
    getOptionText(option) {
        return option ? option.nome : '';
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_5__["ProfessorDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_7__["TurmaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_turma_turma_data_service__WEBPACK_IMPORTED_MODULE_8__["TurmaDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 54, vars: 18, consts: [["mat-dialog-title", ""], [1, "turma-edit-dialog", "mat-typography"], ["id", "turma-edit-form", 3, "ngSubmit"], ["documentEditForm", "ngForm"], [1, "full-width"], ["matInput", "", "placeholder", "Nome da turma", "required", "", "name", "nome", 3, "ngModel", "ngModelChange"], [1, "example-full-width"], ["type", "text", "placeholder", "Professor", "aria-label", "Number", "name", "professor", "matInput", "", "required", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "section"], [1, "title"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", "", "placeholder", "Entrada", "required", "", "name", "hora_inicio", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker_hora_inicio", ""], ["matInput", "", "placeholder", "Sa\u00EDda", "required", "", "name", "hora_final", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker_hora_final", ""], ["matInput", "", "type", "number", "placeholder", "De", "required", "", "name", "idade_de", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "At\u00E9", "required", "", "name", "idade_ate", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "form", "turma-edit-form", 3, "disabled"], [3, "disabled", "value"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_3_listener() { return ctx.createTurma(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome da turma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_8_listener($event) { return ctx.turma.nome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_10_listener($event) { return ctx.professor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditComponent_mat_option_13_Template, 2, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hor\u00E1rio da turma:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Entrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_24_listener($event) { return ctx.turma.hora_inicio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ngx-material-timepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sa\u00EDda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_31_listener($event) { return ctx.turma.hora_final = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ngx-material-timepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Faixa et\u00E1ria:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "De");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_43_listener($event) { return ctx.turma.idade_de = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "At\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_48_listener($event) { return ctx.turma.idade_ate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-dialog-actions", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_50_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.turma["key"] ? "Editar turma" : "Nova turma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.turma.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.professor)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.getOptionText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, ctx.professores));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r3)("format", 24)("ngModel", ctx.turma.hora_inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r4)("format", 24)("ngModel", ctx.turma.hora_final);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.turma.idade_de);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.turma.idade_ate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.turma["key"] ? "Salvar" : "Cadastrar", " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_13__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_13__["NgxMaterialTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".turma-edit-dialog[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.turma-edit-dialog[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.turma-edit-dialog[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.turma-edit-dialog[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 5px;\n  font-weight: 600;\n}\n  .timepicker-backdrop-overlay {\n  z-index: 9999 !important;\n}\n  .timepicker-overlay {\n  z-index: 9999 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2UvdHVybWEvZWRpdC9lZGl0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7QUFDTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRU47QUFETTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQURBO0VBQ0Usd0JBQUE7QUFJRjtBQUhBO0VBQ0Usd0JBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlL3R1cm1hL2VkaXQvZWRpdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi50dXJtYS1lZGl0LWRpYWxvZ1xuICBmb3JtXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAuZnVsbC13aWR0aFxuICAgICAgd2lkdGg6IDEwMCVcbiAgICAuc2VjdGlvblxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgcC50aXRsZVxuICAgICAgICBmb250LXNpemU6IDE1cHhcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcblxuOjpuZy1kZWVwIC50aW1lcGlja2VyLWJhY2tkcm9wLW92ZXJsYXlcbiAgei1pbmRleDogOTk5OSFpbXBvcnRhbnRcbjo6bmctZGVlcCAudGltZXBpY2tlci1vdmVybGF5XG4gIHotaW5kZXg6IDk5OTkhaW1wb3J0YW50Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_5__["ProfessorDataService"] }, { type: _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorService"] }, { type: _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_7__["TurmaService"] }, { type: _data_service_turma_turma_data_service__WEBPACK_IMPORTED_MODULE_8__["TurmaDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/page/turma/show/show.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/page/turma/show/show.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ShowComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["app-show"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowComponent_Template_button_click_4_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.animal);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlL3R1cm1hL3Nob3cvc2hvdy5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show',
                templateUrl: './show.component.html',
                styleUrls: ['./show.component.sass']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/page/turma/turma.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/home/page/turma/turma.component.ts ***!
  \************************************************************/
/*! exports provided: TurmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaComponent", function() { return TurmaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/modules/home/page/turma/edit/edit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class TurmaComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(turma, key) {
        const dialogRef = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"], {
            data: {
                turma: turma,
                key: key,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    ngOnInit() {
    }
}
TurmaComponent.ɵfac = function TurmaComponent_Factory(t) { return new (t || TurmaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
TurmaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurmaComponent, selectors: [["app-turma"]], inputs: { turma: "turma" }, decls: 17, vars: 10, consts: [[1, "card-turma"], [1, "faixa-etaria"], [1, "header-color"], [1, "mb-0"], [1, "actions"], ["mat-button", "", "mat-raised-button", "", 3, "click"]], template: function TurmaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurmaComponent_Template_button_click_15_listener() { return ctx.openDialog(ctx.turma, ctx.turma.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Turma: ", ctx.turma.nome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Professor: ", ctx.turma.professor_nome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.turma.cor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.turma.idade_de, "-", ctx.turma.idade_ate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.turma.cor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Hor\u00E1rio: ", ctx.turma.hora_inicio, " \u00E0s ", ctx.turma.hora_final, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".card-turma[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 10px;\n}\n.card-turma[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.card-turma[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]     .mat-card-header-text {\n  display: none;\n}\n.card-turma[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .faixa-etaria[_ngcontent-%COMP%] {\n  background-color: gray;\n  padding: 0;\n  width: 50px;\n  height: 25px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 0px 7px -2px;\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.card-turma[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.card-turma[_ngcontent-%COMP%]   .header-color[_ngcontent-%COMP%] {\n  height: 100px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  background: gray;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2UvdHVybWEvdHVybWEuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtBQUdOO0FBRkk7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFERTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2UvdHVybWEvdHVybWEuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10dXJtYVxuICB3aWR0aDogYXV0b1xuICBtYXJnaW46IDEwcHhcbiAgLm1hdC1jYXJkLWhlYWRlclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICA6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0XG4gICAgICBkaXNwbGF5OiBub25lXG4gICAgLmZhaXhhLWV0YXJpYVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheVxuICAgICAgcGFkZGluZzogMFxuICAgICAgd2lkdGg6IDUwcHhcbiAgICAgIGhlaWdodDogMjVweFxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweFxuICAgICAgLy8gd2lkdGg6IDQwcHhcbiAgICAgIC8vIGhlaWdodDogNDBweFxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwcHhcbiAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAtMnB4XG4gICAgICBjb2xvcjogd2hpdGVcbiAgICAgIGZvbnQtc2l6ZTogMTVweFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweFxuICAuYWN0aW9uc1xuICAgIHRleHQtYWxpZ246IGVuZFxuICAuaGVhZGVyLWNvbG9yXG4gICAgaGVpZ2h0OiAxMDBweFxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHhcbiAgICBiYWNrZ3JvdW5kOiBncmF5XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-turma',
                templateUrl: './turma.component.html',
                styleUrls: ['./turma.component.sass']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { turma: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/professor/page/edit/edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/professor/page/edit/edit.component.ts ***!
  \***************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_schema_professor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/schema/professor */ "./src/app/data/schema/professor.ts");
/* harmony import */ var _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/service/professor/professor.service */ "./src/app/data/service/professor/professor.service.ts");
/* harmony import */ var _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/service/professor/professor-data.service */ "./src/app/data/service/professor/professor-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class EditComponent {
    constructor(professorService, professorDataService) {
        this.professorService = professorService;
        this.professorDataService = professorDataService;
        this.key = '';
    }
    ngOnInit() {
        this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_1__["Professor"]();
        this.professorDataService.professorAtual.subscribe(data => {
            if (data.professor && data.key) {
                this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_1__["Professor"]();
                this.professor.nome = data.professor.nome;
                this.key = data.key;
            }
        });
    }
    onSubmit() {
        if (this.key) {
            this.professorService.update(this.professor, this.key);
        }
        else {
            this.professorService.insert(this.professor);
        }
        this.professor = new _data_schema_professor__WEBPACK_IMPORTED_MODULE_1__["Professor"]();
        this.key = null;
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_3__["ProfessorDataService"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 11, vars: 1, consts: [[3, "ngSubmit"], [1, "form-group"], [1, "full-width"], ["matInput", "", "placeholder", "Nome do professor", "required", "", "name", "nome", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cadastrar novo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome do pofessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_8_listener($event) { return ctx.professor.nome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.professor.nome);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmVzc29yL3BhZ2UvZWRpdC9lZGl0LmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.sass']
            }]
    }], function () { return [{ type: _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorService"] }, { type: _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_3__["ProfessorDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/professor/page/list/list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/professor/page/list/list.component.ts ***!
  \***************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/service/professor/professor.service */ "./src/app/data/service/professor/professor.service.ts");
/* harmony import */ var _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/service/professor/professor-data.service */ "./src/app/data/service/professor/professor-data.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ListComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r9 + 1, " ");
} }
function ListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const professor_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", professor_r10.nome, " ");
} }
function ListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const professor_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.edit(professor_r11, professor_r11.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const professor_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.delete(professor_r11.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function ListComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
class ListComponent {
    constructor(professorService, professorDataService) {
        this.professorService = professorService;
        this.professorDataService = professorDataService;
        this.columns = ['index', 'nome', 'acoes'];
    }
    ngOnInit() {
        this.professores = this.professorService.getAll();
    }
    delete(key) {
        this.professorService.delete(key);
    }
    edit(professor, key) {
        this.professorDataService.obtemProfessor(professor, key);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorDataService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 16, vars: 5, consts: [["id", "professor-list", "mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "acoes"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Professores cadastrados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_td_7_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_th_12_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_td_13_Template, 5, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_tr_14_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_tr_15_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.professores));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#professor-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#professor-list[_ngcontent-%COMP%]   .cdk-column-index[_ngcontent-%COMP%] {\n  width: 80px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #professor-list[_ngcontent-%COMP%]   .cdk-column-index[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n#professor-list[_ngcontent-%COMP%]   .cdk-column-acoes[_ngcontent-%COMP%] {\n  width: 190px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #professor-list[_ngcontent-%COMP%]   .cdk-column-acoes[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #professor-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\n#professor-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: white;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #professor-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#professor-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 10px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #professor-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n    margin-right: 0px;\n    margin-bottom: 5px;\n  }\n}\n#professor-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f5f5f5;\n}\n#professor-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9mZXNzb3IvcGFnZS9saXN0L2xpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQURJO0VBRkY7SUFHSSxXQUFBO0VBSUo7QUFDRjtBQUpFO0VBQ0UsWUFBQTtBQU1KO0FBTEk7RUFGRjtJQUdJLFlBQUE7RUFRSjtBQUNGO0FBUEk7RUFERjtJQUVJLGdCQUFBO0lBQ0EsbUJBQUE7RUFVSjtBQUNGO0FBVEk7RUFDRSx1QkFBQTtBQVdOO0FBVk07RUFGRjtJQUdNLFdBQUE7RUFhUjtBQUNGO0FBYk07RUFDRSxrQkFBQTtBQWVSO0FBZFE7RUFGRjtJQUdJLGlCQUFBO0lBQ0Esa0JBQUE7RUFpQlI7QUFDRjtBQWpCRTtFQUNFLHlCQUFBO0FBbUJKO0FBbEJFO0VBQ0UsdUJBQUE7QUFvQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2Zlc3Nvci9wYWdlL2xpc3QvbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9mZXNzb3ItbGlzdFxuICB3aWR0aDogMTAwJVxuICAuY2RrLWNvbHVtbi1pbmRleFxuICAgIHdpZHRoOiA4MHB4XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICB3aWR0aDogNTBweFxuICAuY2RrLWNvbHVtbi1hY29lc1xuICAgIHdpZHRoOiAxOTBweFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxuICAgICAgd2lkdGg6IDExMHB4XG4gIC5tYXQtY29sdW1uLWFjb2VzXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICBwYWRkaW5nLXRvcDogNXB4XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4XG5cbiAgICBidXR0b25cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgJjpmaXJzdC1vZi10eXBlXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweFxuICB0cjpudGgtY2hpbGQoZXZlbilcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XG4gIHRyOm50aC1jaGlsZChvZGQpXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.sass']
            }]
    }], function () { return [{ type: _data_service_professor_professor_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorService"] }, { type: _data_service_professor_professor_data_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/professor/page/professor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/professor/page/professor.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/modules/professor/page/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/modules/professor/page/list/list.component.ts");




class ProfessorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfessorComponent.ɵfac = function ProfessorComponent_Factory(t) { return new (t || ProfessorComponent)(); };
ProfessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorComponent, selectors: [["app-professor"]], decls: 7, vars: 0, consts: [["id", "professores"], [1, "container", "jombotron"]], template: function ProfessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Professores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmVzc29yL3BhZ2UvcHJvZmVzc29yLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-professor',
                templateUrl: './professor.component.html',
                styleUrls: ['./professor.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/professor/professor.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/professor/professor.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorModule", function() { return ProfessorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _professor_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./professor.routing */ "./src/app/modules/professor/professor.routing.ts");
/* harmony import */ var _page_professor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/professor.component */ "./src/app/modules/professor/page/professor.component.ts");
/* harmony import */ var _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/edit/edit.component */ "./src/app/modules/professor/page/edit/edit.component.ts");
/* harmony import */ var _page_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/list/list.component */ "./src/app/modules/professor/page/list/list.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");













class ProfessorModule {
}
ProfessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfessorModule });
ProfessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfessorModule_Factory(t) { return new (t || ProfessorModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _professor_routing__WEBPACK_IMPORTED_MODULE_2__["ProfessorRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfessorModule, { declarations: [_page_professor_component__WEBPACK_IMPORTED_MODULE_3__["ProfessorComponent"],
        _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
        _page_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _professor_routing__WEBPACK_IMPORTED_MODULE_2__["ProfessorRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _page_professor_component__WEBPACK_IMPORTED_MODULE_3__["ProfessorComponent"],
                    _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
                    _page_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _professor_routing__WEBPACK_IMPORTED_MODULE_2__["ProfessorRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                ],
                exports: [],
                providers: [],
                entryComponents: [
                    _page_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/professor/professor.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/professor/professor.routing.ts ***!
  \********************************************************/
/*! exports provided: routes, ProfessorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorRoutingModule", function() { return ProfessorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_professor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/professor.component */ "./src/app/modules/professor/page/professor.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'professor',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _page_professor_component__WEBPACK_IMPORTED_MODULE_2__["ProfessorComponent"]
    }
];
class ProfessorRoutingModule {
}
ProfessorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfessorRoutingModule });
ProfessorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfessorRoutingModule_Factory(t) { return new (t || ProfessorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfessorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/turma/page/list/list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/turma/page/list/list.component.ts ***!
  \***********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/service/turma/turma.service */ "./src/app/data/service/turma/turma.service.ts");
/* harmony import */ var _data_service_turma_turma_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/service/turma/turma-data.service */ "./src/app/data/service/turma/turma-data.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ListComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turma_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", turma_r12.cor);
} }
function ListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turma_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", turma_r13.nome, " ");
} }
function ListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Faixa et\u00E1ria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turma_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", turma_r14.idade_de, " - ", turma_r14.idade_ate, " ");
} }
function ListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Professor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turma_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", turma_r15.professor_nome, " ");
} }
function ListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const turma_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.delete(turma_r16.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function ListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
class ListComponent {
    constructor(turmaService, turmaDataService) {
        this.turmaService = turmaService;
        this.turmaDataService = turmaDataService;
        this.columns = [
            'cor',
            'nome',
            'idade_de',
            'professor_nome',
            'acoes'
        ];
    }
    ngOnInit() {
        this.turmas = this.turmaService.getAll();
    }
    delete(key) {
        this.turmaService.delete(key);
    }
    edit(turma, key) {
        this.turmaDataService.obtemTurma(turma, key);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_1__["TurmaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_turma_turma_data_service__WEBPACK_IMPORTED_MODULE_2__["TurmaDataService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 22, vars: 5, consts: [["id", "turma-list", "mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource"], ["matColumnDef", "cor"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "idade_de"], ["matColumnDef", "professor_nome"], ["matColumnDef", "acoes"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", ""], [1, "cor"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Turmas cadastradas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_td_7_Template, 2, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_th_12_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_td_13_Template, 2, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_th_15_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_td_16_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_th_18_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_td_19_Template, 3, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_tr_20_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_tr_21_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.turmas));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#turma-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#turma-list[_ngcontent-%COMP%]   .cdk-column-cor[_ngcontent-%COMP%] {\n  width: 90px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #turma-list[_ngcontent-%COMP%]   .cdk-column-cor[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n#turma-list[_ngcontent-%COMP%]   .cdk-column-cor[_ngcontent-%COMP%]   .cor[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n}\n#turma-list[_ngcontent-%COMP%]   .cdk-column-acoes[_ngcontent-%COMP%] {\n  width: 190px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #turma-list[_ngcontent-%COMP%]   .cdk-column-acoes[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #turma-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\n#turma-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: white;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #turma-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#turma-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 10px;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  #turma-list[_ngcontent-%COMP%]   .mat-column-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n    margin-right: 0px;\n    margin-bottom: 5px;\n  }\n}\n#turma-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f5f5f5;\n}\n#turma-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90dXJtYS9wYWdlL2xpc3QvbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBREk7RUFGRjtJQUdJLFdBQUE7RUFJSjtBQUNGO0FBSkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTU47QUFMRTtFQUNFLFlBQUE7QUFPSjtBQU5JO0VBRkY7SUFHSSxZQUFBO0VBU0o7QUFDRjtBQVJJO0VBREY7SUFFSSxnQkFBQTtJQUNBLG1CQUFBO0VBV0o7QUFDRjtBQVZJO0VBQ0UsdUJBQUE7QUFZTjtBQVhNO0VBRkY7SUFHTSxXQUFBO0VBY1I7QUFDRjtBQWRNO0VBQ0Usa0JBQUE7QUFnQlI7QUFmUTtFQUZGO0lBR0ksaUJBQUE7SUFDQSxrQkFBQTtFQWtCUjtBQUNGO0FBbEJFO0VBQ0UseUJBQUE7QUFvQko7QUFuQkU7RUFDRSx1QkFBQTtBQXFCSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHVybWEvcGFnZS9saXN0L2xpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdHVybWEtbGlzdFxuICB3aWR0aDogMTAwJVxuICAuY2RrLWNvbHVtbi1jb3JcbiAgICB3aWR0aDogOTBweFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxuICAgICAgd2lkdGg6IDUwcHhcbiAgICAuY29yXG4gICAgICBoZWlnaHQ6IDQwcHhcbiAgICAgIHdpZHRoOiA0MHB4XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4XG4gIC5jZGstY29sdW1uLWFjb2VzXG4gICAgd2lkdGg6IDE5MHB4XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpXG4gICAgICB3aWR0aDogMTEwcHhcbiAgLm1hdC1jb2x1bW4tYWNvZXNcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcbiAgICAgIHBhZGRpbmctdG9wOiA1cHhcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHhcblxuICAgIGJ1dHRvblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxuICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAmOmZpcnN0LW9mLXR5cGVcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4XG4gIHRyOm50aC1jaGlsZChldmVuKVxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjVcbiAgdHI6bnRoLWNoaWxkKG9kZClcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.sass']
            }]
    }], function () { return [{ type: _data_service_turma_turma_service__WEBPACK_IMPORTED_MODULE_1__["TurmaService"] }, { type: _data_service_turma_turma_data_service__WEBPACK_IMPORTED_MODULE_2__["TurmaDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/turma/page/turma.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/turma/page/turma.component.ts ***!
  \*******************************************************/
/*! exports provided: TurmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaComponent", function() { return TurmaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/modules/turma/page/list/list.component.ts");



class TurmaComponent {
    constructor() { }
    ngOnInit() {
    }
}
TurmaComponent.ɵfac = function TurmaComponent_Factory(t) { return new (t || TurmaComponent)(); };
TurmaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurmaComponent, selectors: [["app-turma"]], decls: 6, vars: 0, consts: [["id", "turma"], [1, "container", "jombotron"]], template: function TurmaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Turmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHVybWEvcGFnZS90dXJtYS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-turma',
                templateUrl: './turma.component.html',
                styleUrls: ['./turma.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/turma/turma.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/turma/turma.module.ts ***!
  \***********************************************/
/*! exports provided: TurmaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaModule", function() { return TurmaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _turma_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turma.routing */ "./src/app/modules/turma/turma.routing.ts");
/* harmony import */ var _page_turma_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/turma.component */ "./src/app/modules/turma/page/turma.component.ts");
/* harmony import */ var _page_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/list/list.component */ "./src/app/modules/turma/page/list/list.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';







class TurmaModule {
}
TurmaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TurmaModule });
TurmaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TurmaModule_Factory(t) { return new (t || TurmaModule)(); }, providers: [], imports: [[
            _turma_routing__WEBPACK_IMPORTED_MODULE_2__["TurmaRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // FormsModule,
            // ReactiveFormsModule
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TurmaModule, { declarations: [_page_turma_component__WEBPACK_IMPORTED_MODULE_3__["TurmaComponent"],
        _page_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]], imports: [_turma_routing__WEBPACK_IMPORTED_MODULE_2__["TurmaRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // FormsModule,
        // ReactiveFormsModule
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _page_turma_component__WEBPACK_IMPORTED_MODULE_3__["TurmaComponent"],
                    _page_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                ],
                imports: [
                    _turma_routing__WEBPACK_IMPORTED_MODULE_2__["TurmaRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // FormsModule,
                    // ReactiveFormsModule
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                ],
                exports: [],
                providers: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/turma/turma.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/turma/turma.routing.ts ***!
  \************************************************/
/*! exports provided: routes, TurmaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaRoutingModule", function() { return TurmaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_turma_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/turma.component */ "./src/app/modules/turma/page/turma.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'turma',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _page_turma_component__WEBPACK_IMPORTED_MODULE_2__["TurmaComponent"]
    }
];
class TurmaRoutingModule {
}
TurmaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TurmaRoutingModule });
TurmaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TurmaRoutingModule_Factory(t) { return new (t || TurmaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TurmaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCa3mMSqxvP1ijZrzC1spIO7zy5U60AShM",
        authDomain: "teste-trakto.firebaseapp.com",
        databaseURL: "https://teste-trakto.firebaseio.com",
        projectId: "teste-trakto",
        storageBucket: "teste-trakto.appspot.com",
        messagingSenderId: "563419782652",
        appId: "1:563419782652:web:b35ed69f4da1a7b9086679"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/felipe/Projetos/pessoal/trakto/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map