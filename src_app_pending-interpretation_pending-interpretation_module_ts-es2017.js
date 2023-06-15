"use strict";
(self["webpackChunklife_line"] = self["webpackChunklife_line"] || []).push([["src_app_pending-interpretation_pending-interpretation_module_ts"],{

/***/ 15566:
/*!******************************************************************************************!*\
  !*** ./src/app/pending-interpretation/manager/pending-interpretation-manager.service.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePatientManagerService": function() { return /* binding */ ActivePatientManagerService; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 13420);
/* harmony import */ var _manage_group_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manage-group/store */ 24910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 17562);




class ActivePatientManagerService {
    constructor(activePatientstore$, manageServiceStore$) {
        this.activePatientstore$ = activePatientstore$;
        this.manageServiceStore$ = manageServiceStore$;
        this.patientIds = new Array();
    }
    getActivePatient(url) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.LoadActivePatientsRequestAction({ url }));
    }
    selectActivePatient() {
        this.activePatients$ = this.activePatientstore$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreSelectors.selectActivePatientsList);
        return this.activePatients$;
    }
    updatePatient(patient) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.UpdatePatientRequestAction(patient));
        return this.selectActivePatient();
    }
    createPatient(patient) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.CreateNewPatientRequestAction(patient));
        return this.activePatientstore$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreSelectors.createNewPatient);
    }
    dischargePatient(patientId) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.DischargePatientRequestAction(patientId));
    }
    getDoctorsList() {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.LoadDoctorsListRequestAction());
        this.doctors$ = this.activePatientstore$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreSelectors.doctorsList);
        return this.doctors$;
    }
    stopMonitoring(patientId) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.StopMonitoringRequestAction(patientId));
    }
    fetchGroups() {
        this.manageServiceStore$.dispatch(new _manage_group_store__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsStoreActions.LoadGroupsRequestAction());
        return this.manageServiceStore$.select(_manage_group_store__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsStoreSelectors.selectGroupsList);
    }
    assignGroup(groups) {
        // this.manageServiceStore$.dispatch(
        //   new ManageGroupsStoreActions.SaveGroupRequestAction(groups)
        // );
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.AssignGroupRequestAction(groups));
        // return this.manageServiceStore$.select(
        //   ManageGroupsStoreSelectors.selectGroupsList
        // );
        return this.activePatientstore$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreSelectors.assignGroupPatient);
    }
    // assignGroupToPatient(patient, groups) {
    //   this.assignGroup(groups).subscribe(g => {
    //     if(g?.CLINICAL_GROUPS && groups.cGroup) {
    //       const obj = {
    //         id: g?.CLINICAL_GROUPS[0]?.groupId,
    //         name: g?.CLINICAL_GROUPS[0]?.name
    //       }
    //       patient.cGroup = obj;
    //     }else{
    //       patient.cGroup = null;
    //     }
    //     if(g?.PHYSICAL_GROUPS && groups.pGroup) {
    //       const obj = {
    //         id: g?.PHYSICAL_GROUPS[0]?.groupId,
    //         name: g?.PHYSICAL_GROUPS[0]?.name
    //       }
    //       patient.pGroup = obj;
    //     }else{
    //       patient.pGroup = null;
    //     }  
    //   });
    // }
    fetchUnAssignedPatientsData(url) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.LoadUnassignedPatientsRequestAction({ url }));
    }
    selectUnassignedPatients() {
        this.unAssignedPatients$ = this.activePatientstore$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreSelectors.selectUnassignedPatientsList);
        return this.unAssignedPatients$;
    }
    setSelectedTab(tab) {
        this.activePatientstore$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreActions.SetSelectedTabRequestAction(tab));
    }
    getSelectedTab() {
        return this.activePatientstore$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsStoreSelectors.selectedTab);
    }
}
ActivePatientManagerService.ɵfac = function ActivePatientManagerService_Factory(t) { return new (t || ActivePatientManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
ActivePatientManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ActivePatientManagerService, factory: ActivePatientManagerService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 37861:
/*!*******************************************************************************!*\
  !*** ./src/app/pending-interpretation/models/pending-interpretation.model.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalGroup": function() { return /* binding */ ClinicalGroup; },
/* harmony export */   "PhysicalGroup": function() { return /* binding */ PhysicalGroup; },
/* harmony export */   "Gender": function() { return /* binding */ Gender; },
/* harmony export */   "FilterKeysForActivePatient": function() { return /* binding */ FilterKeysForActivePatient; },
/* harmony export */   "FilterKeysForAssignPatient": function() { return /* binding */ FilterKeysForAssignPatient; },
/* harmony export */   "MonitoringStatus": function() { return /* binding */ MonitoringStatus; },
/* harmony export */   "ActivePatientsTabs": function() { return /* binding */ ActivePatientsTabs; },
/* harmony export */   "TabMetaDataItems": function() { return /* binding */ TabMetaDataItems; },
/* harmony export */   "WeightUnits": function() { return /* binding */ WeightUnits; },
/* harmony export */   "HeightUnits": function() { return /* binding */ HeightUnits; }
/* harmony export */ });
var ClinicalGroup;
(function (ClinicalGroup) {
    ClinicalGroup["ONCOLOGY"] = "Oncology";
})(ClinicalGroup || (ClinicalGroup = {}));
var PhysicalGroup;
(function (PhysicalGroup) {
    PhysicalGroup["REMOTE"] = "Remote";
    PhysicalGroup["INPATIENT"] = "Inpatient";
})(PhysicalGroup || (PhysicalGroup = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
    Gender["OTHER"] = "Other";
})(Gender || (Gender = {}));
var FilterKeysForActivePatient;
(function (FilterKeysForActivePatient) {
    FilterKeysForActivePatient["PATIENTID"] = "MRN";
    FilterKeysForActivePatient["PATCHID"] = "Biosensor ID";
    FilterKeysForActivePatient["PATIENTFIRSTNAME"] = "Patient First Name";
})(FilterKeysForActivePatient || (FilterKeysForActivePatient = {}));
var FilterKeysForAssignPatient;
(function (FilterKeysForAssignPatient) {
    FilterKeysForAssignPatient["PATCHID"] = "Biosensor ID";
    // PATIENTNAME = "PATIENTNAME"
})(FilterKeysForAssignPatient || (FilterKeysForAssignPatient = {}));
var MonitoringStatus;
(function (MonitoringStatus) {
    MonitoringStatus["ACTIVE"] = "ACTIVE";
    MonitoringStatus["STOP"] = "STOP";
    MonitoringStatus["INPROGRESS"] = "INPROGRESS";
    MonitoringStatus["STREAMING"] = "Streaming";
    MonitoringStatus["FINALIZE_IN_PROGRESS"] = "finalizeInProgress";
    MonitoringStatus["FINALIZED"] = "finalized";
})(MonitoringStatus || (MonitoringStatus = {}));
var ActivePatientsTabs;
(function (ActivePatientsTabs) {
    ActivePatientsTabs["ASSIGN_PATIENT"] = "Assign Patient";
    ActivePatientsTabs["ACTIVE_PATIENT"] = "Active Patient";
})(ActivePatientsTabs || (ActivePatientsTabs = {}));
var TabMetaDataItems;
(function (TabMetaDataItems) {
    TabMetaDataItems["PAGE_NUMBER"] = "PAGENUMBER";
    TabMetaDataItems["SIZE"] = "SIZE";
    TabMetaDataItems["SORTBY"] = "SORTBY";
    TabMetaDataItems["SEARCH_OBJECT"] = "SEARCH_OBJECT";
})(TabMetaDataItems || (TabMetaDataItems = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KG"] = "KG";
    WeightUnits["POUND"] = "POUND";
})(WeightUnits || (WeightUnits = {}));
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CM"] = "CM";
    HeightUnits["INCH"] = "INCH";
})(HeightUnits || (HeightUnits = {}));


/***/ }),

/***/ 91658:
/*!*********************************************************************************!*\
  !*** ./src/app/pending-interpretation/pending-interpretation-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePatientsRoutingModule": function() { return /* binding */ ActivePatientsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);
/* harmony import */ var _enum_roles_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/roles.enum */ 66489);
/* harmony import */ var _shared_root_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/root/root.component */ 59596);
/* harmony import */ var _pending_interpretation_pending_interpretation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending-interpretation/pending-interpretation.component */ 95725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: "",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _shared_root_root_component__WEBPACK_IMPORTED_MODULE_2__.RootComponent,
        children: [
            {
                path: "pending-interpretation",
                component: _pending_interpretation_pending_interpretation_component__WEBPACK_IMPORTED_MODULE_3__.PendingInterpretationComponent,
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                data: {
                    roles: [
                        _enum_roles_enum__WEBPACK_IMPORTED_MODULE_1__.UserRoles.GENERAL_CLINICIAN,
                        _enum_roles_enum__WEBPACK_IMPORTED_MODULE_1__.UserRoles.SUPERVISORY_CLINICIAN,
                        _enum_roles_enum__WEBPACK_IMPORTED_MODULE_1__.UserRoles.PHYSICIAN,
                    ],
                },
            },
        ],
    },
];
class ActivePatientsRoutingModule {
}
ActivePatientsRoutingModule.ɵfac = function ActivePatientsRoutingModule_Factory(t) { return new (t || ActivePatientsRoutingModule)(); };
ActivePatientsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ActivePatientsRoutingModule });
ActivePatientsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ActivePatientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 68734:
/*!*************************************************************************!*\
  !*** ./src/app/pending-interpretation/pending-interpretation.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePatientsModule": function() { return /* binding */ ActivePatientsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pending_interpretation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-interpretation-routing.module */ 91658);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 28417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/pending-interpretation.service */ 37035);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/effects */ 20275);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/pending-interpretation.reducer */ 44635);
/* harmony import */ var _store_pending_interpretation_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/pending-interpretation.effects */ 38491);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! keycloak-angular */ 4575);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _manage_group_manage_group_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-group/manage-group.module */ 62395);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n/i18n.module */ 73401);
/* harmony import */ var _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../life-signals/life-signals.module */ 13169);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-pick-datetime */ 42910);
/* harmony import */ var _pending_interpretation_pending_interpretation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pending-interpretation/pending-interpretation.component */ 95725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);






































class ActivePatientsModule {
}
ActivePatientsModule.ɵfac = function ActivePatientsModule_Factory(t) { return new (t || ActivePatientsModule)(); };
ActivePatientsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ActivePatientsModule });
ActivePatientsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_2__.ActivePatientsService,
            useClass: _services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_2__.ActivePatientsService,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
            useClass: keycloak_angular__WEBPACK_IMPORTED_MODULE_12__.KeycloakBearerInterceptor,
            multi: true,
        },
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', floatLabel: 'never' } },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _pending_interpretation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsRoutingModule,
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__.I18nModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
            _manage_group_manage_group_module__WEBPACK_IMPORTED_MODULE_5__.ManageGroupModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__.MatAutocompleteModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_32__.StoreModule.forFeature(_store_pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_3__.patientsFeatureKey, _store_pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_3__.ActivePatientsReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__.EffectsModule.forFeature([_store_pending_interpretation_effects__WEBPACK_IMPORTED_MODULE_4__.ActivePatientsEffects]),
            _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_7__.LifeSignalsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__.MatProgressSpinnerModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__.OwlDateTimeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ActivePatientsModule, { declarations: [
        // EpochToHumanDatePipe,
        _pending_interpretation_pending_interpretation_component__WEBPACK_IMPORTED_MODULE_9__.PendingInterpretationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _pending_interpretation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsRoutingModule,
        _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__.I18nModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
        _manage_group_manage_group_module__WEBPACK_IMPORTED_MODULE_5__.ManageGroupModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__.MatAutocompleteModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_32__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__.EffectsFeatureModule, _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_7__.LifeSignalsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__.MatProgressSpinnerModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__.OwlDateTimeModule] }); })();


/***/ }),

/***/ 95725:
/*!***************************************************************************************************!*\
  !*** ./src/app/pending-interpretation/pending-interpretation/pending-interpretation.component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingInterpretationComponent": function() { return /* binding */ PendingInterpretationComponent; }
/* harmony export */ });
/* harmony import */ var _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/pending-interpretation.model */ 37861);
/* harmony import */ var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/life-signals/_models/ls-column.model */ 24856);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 62604);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 8876);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/notifications-component/notifications/notifications.component */ 66557);
/* harmony import */ var src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/notifications-component/add-event/add-event.component */ 45211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _manager_pending_interpretation_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/pending-interpretation-manager.service */ 15566);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pending-interpretation.service */ 37035);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../manage-group/services/manage-groups.service */ 34887);
/* harmony import */ var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../life-signals/_components/ls-page-header/ls-page-header.component */ 63601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../life-signals/_components/ls-table/ls-table.component */ 16743);
/* harmony import */ var _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/nested-dropdown/nested-dropdown.component */ 88113);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../life-signals/_directives/ls-widget-name.directive */ 19861);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





























function PendingInterpretationComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r0.selectedPatients == null ? null : ctx_r0.selectedPatients.selected == null ? null : ctx_r0.selectedPatients.selected.length) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "pending-interp-module.button.assign_prelim_interp"), " ");
  }
}

function PendingInterpretationComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r1.selectedPatients == null ? null : ctx_r1.selectedPatients.selected == null ? null : ctx_r1.selectedPatients.selected.length) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "pending-interp-module.button.assign_interp"), " ");
  }
}

function PendingInterpretationComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r3.selectedPatients == null ? null : ctx_r3.selectedPatients.selected == null ? null : ctx_r3.selectedPatients.selected.length) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "active-patients-module.button.admit_patient"), " ");
  }
}

function PendingInterpretationComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const doc_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", doc_r15["id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](doc_r15["displayName"]);
  }
}

function PendingInterpretationComponent_mat_icon_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PendingInterpretationComponent_mat_icon_58_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r16.clear();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function PendingInterpretationComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r18 == null ? null : row_r18.patient_id_mrn);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r18 == null ? null : row_r18.name);
  }
}

function PendingInterpretationComponent_ng_template_62_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const doc_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", doc_r21["displayName"], " ");
  }
}

function PendingInterpretationComponent_ng_template_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PendingInterpretationComponent_ng_template_62_div_1_div_1_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const doc_r21 = ctx.$implicit;
    const row_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", doc_r21["_id"] === (row_r19 == null ? null : row_r19.fk_prescriber));
  }
}

function PendingInterpretationComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PendingInterpretationComponent_ng_template_62_div_1_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r7.doctorsList);
  }
}

function PendingInterpretationComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r25 == null ? null : row_r25.location);
  }
}

function PendingInterpretationComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r26 == null ? null : row_r26.report_time);
  }
}

function PendingInterpretationComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r27 == null ? null : row_r27.final_approver_id);
  }
}

function PendingInterpretationComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function PendingInterpretationComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r29 == null ? null : row_r29.name);
  }
}

function PendingInterpretationComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function PendingInterpretationComponent_ng_template_69_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PendingInterpretationComponent_ng_template_69_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const row_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r36.addNewEvent(row_r31);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "pending-interp-module.button.interpret"), " ");
  }
}

function PendingInterpretationComponent_ng_template_69_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "active-patients-module.button.redo_prelim"));
  }
}

function PendingInterpretationComponent_ng_template_69_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "active-patients-module.button.redo_report"));
  }
}

function PendingInterpretationComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, PendingInterpretationComponent_ng_template_69_button_6_Template, 3, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "mat-menu", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, PendingInterpretationComponent_ng_template_69_button_12_Template, 3, 3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, PendingInterpretationComponent_ng_template_69_button_13_Template, 3, 3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](11);

    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 5, "pending-interp-module.alerts.p"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r14.isClinicianCheck() || ctx_r14.isPhy);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r14.isClinicianCheck());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r14.isScOrGc());
  }
}

class PendingInterpretationComponent {
  constructor(manager, dialog, service, authService, snackbar, route, manageGroupService) {
    this.manager = manager;
    this.dialog = dialog;
    this.service = service;
    this.authService = authService;
    this.snackbar = snackbar;
    this.route = route;
    this.manageGroupService = manageGroupService;
    this.activePatients = new Array(); // Selection Variables

    this.selectedPatients = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(true);
    this.selectedIds = new Set();
    this.isPhy = false;
    this.activePatient_Columns = [{
      id: "patient_id",
      label: "PATIENT DETAILS",
      headerClass: ["text-start"],
      sortable: true,
      labelClass: "fw-bold",
      cellClass: []
    }, {
      id: "prescribing_physician",
      label: "prescribing physician",
      sortable: true,
      headerClass: ["text-start"],
      cellClass: ["d-flex", "justify-content-start", "align-items-center"]
    }, {
      id: "location",
      label: "Location",
      headerClass: ["text-start"],
      sortable: true,
      cellClass: []
    }, {
      id: "report_time",
      label: "report time",
      sortable: true,
      headerClass: ["text-start"],
      cellClass: ["d-flex", "justify-content-start"]
    }, {
      id: "interpreter",
      label: "interpreter",
      sortable: true,
      headerClass: ["text-start"],
      cellClass: ["d-flex", "justify-content-start"]
    }, {
      id: "prelim_interpreter",
      label: "preliminary interpreter",
      sortable: true,
      cellClass: ["d-flex", "justify-content-start"],
      headerClass: ["text-start"]
    }, {
      id: "report_type",
      label: "report type",
      sortable: true,
      cellClass: ["d-flex", "justify-content-start"],
      headerClass: ["text-start"]
    }, {
      id: "view",
      label: "view",
      sortable: true,
      cellClass: ["d-flex", "justify-content-start"],
      headerClass: ["text-start"]
    }];
    this.config = {
      id: "active-patients-table",
      rowSelectEnabled: true,
      actions: {
        show: true,
        headerLabel: "",
        class: ["d-flex", "align-items-center", "justify-content-end"],
        header: {
          style: "max-width: 180px; width: 180px;"
        }
      },
      page: {
        pageSize: 20,
        pageIndex: 0,
        length: null
      },
      paginator: {
        offline: false,
        hide: false
      },
      sort: {
        active: "first_name",
        direction: "asc"
      },
      tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__.TableState.DEFAULT
    };
    this.searchObject = {
      keyword: "",
      string: ""
    };
    this.filterObject = {
      cGroupId: null,
      pGroupId: null
    };
    this.filterStrings = new Array();
    this.monitoringStatus = _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_0__.MonitoringStatus;
    this.groupsData$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
    this.doctorsList = [];
    this.groups$ = this.groupsData$.asObservable();
    this.locationGroups$ = this.groups$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(groups => {
      return groups.filter(g => g.type === "physical");
    }));
    this.clinicalGroups$ = this.groups$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(groups => {
      return groups.filter(g => g.type === "CLINICAL");
    }));
  }

  ngOnInit() {
    this.getDoctors();
    let roles = this.authService.getRoles() || [];
    ;
    if ((roles === null || roles === void 0 ? void 0 : roles.indexOf("PHY")) > -1) this.isPhy = true;
    this.getGroupDetails();
    this.modelChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(() => this.serviceToCallWith())).subscribe();
    this.initVariables();
    this.fetchTableData();
    const panelId = sessionStorage.getItem("panelId");

    if (panelId === null || panelId === void 0 ? void 0 : panelId.length) {
      this.service.getPanelDetails(panelId).then(patients => {
        for (const patient of patients) {
          if (patient.patchId) {
            this.selectedIds.add(patient.patientId);
          }
        }

        if (this.activePatients.length && this.selectedIds.size) {
          this.selectedPatients.select(...this.activePatients.filter(pat => {
            return this.selectedIds.has(pat.patientId);
          }));
        }
      });
    }

    this.reloadInterval = setInterval(() => {
      this.fetchTableData();
    }, 30000);
    this.activePatientsSub = this.manager.selectActivePatient().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(response => {
      if (response === null || response === void 0 ? void 0 : response.tableState) {
        this.config = Object.assign(Object.assign({}, this.config), {
          tableState: response === null || response === void 0 ? void 0 : response.tableState,
          rowSelectEnabled: true,
          page: Object.assign(Object.assign({}, this.config.page), {
            length: response === null || response === void 0 ? void 0 : response.total
          })
        });
      }

      this.error = response === null || response === void 0 ? void 0 : response.error;

      if (response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA) {
        this.activePatients = response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA.map(x => {
          const patient = Object.assign(Object.assign({}, x), {
            name: `${x.first_name} ${x.last_name}`
          });
          return patient;
        });

        if (this.activePatients.length && this.selectedIds.size) {
          this.selectedPatients.select(...this.activePatients.filter(pat => {
            return this.selectedIds.has(pat.patientId);
          }));
        }
      }
    })).subscribe();
  }

  getDoctors() {
    this.doctorsListSub = this.manager.getDoctorsList().subscribe(list => {
      let persons = list.items;
      this.doctorsList = persons === null || persons === void 0 ? void 0 : persons.map(doctor => {
        return Object.assign(Object.assign({}, doctor), {
          displayName: `${doctor === null || doctor === void 0 ? void 0 : doctor.first_name} ${doctor === null || doctor === void 0 ? void 0 : doctor.last_name}`
        });
      });
    });
  }

  serviceToCallWith() {
    let ref;
    this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
    ref = this.manager.selectActivePatient();
    return ref;
  }

  resetAndSearch() {
    this.searchObject.string = '';
    this.search();
  }

  search() {
    var _a;

    this.searchObject.keyword = 'searchText';

    if ((_a = this.searchObject) === null || _a === void 0 ? void 0 : _a.string) {
      this.config.page.pageIndex = 0;
    } //this.selectedPatients.clear();


    this.modelChanged.next(JSON.stringify(this.searchObject));
  }

  searchByGroup(key, groupId) {
    if (key === 'CLINICAL') {
      this.filterObject.cGroupId = groupId;
    } else if (key === 'physical') {
      this.filterObject.pGroupId = groupId;
    }

    this.config.page.pageIndex = 0;
    this.activePatients = undefined;
    this.modelChanged.next(JSON.stringify(this.filterObject));
  }

  clear() {
    this.searchObject.string = '';
    this.search();
  }

  checkCharacters(event) {
    if (this.searchObject.keyword === "PATCHID" || this.searchObject.keyword === "PATIENTID") {
      let pattern = /^[a-zA-z0-9]$/;
      let key = event.key;

      if (pattern.test(key)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else {
      return true;
    }
  }

  initVariables() {
    for (let i in _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient) {
      this.filterStrings.push({
        text: _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient[i],
        value: i
      });
    }
  }

  fetchTableData() {
    this.getActivePatientData();
  }

  isSelected(row, selection) {
    return selection.selected.map(s => s.patientId).includes(row.patientId);
  }

  isClinicianCheck() {
    let role = this.authService.getRoles();
    return role.indexOf("GC") > -1;
  }

  isGcorScCheck() {
    let role = this.authService.getRoles();
    return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
  }

  getActivePatientData() {
    if (!this.config.sort.active || !this.config.sort.direction) {
      this.config.sort.active = "patientid";
      this.config.sort.direction = "desc";
    }

    this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
  }

  onPageChange(event) {
    this.config = Object.assign(Object.assign({}, this.config), {
      page: Object.assign(Object.assign({}, this.config.page), {
        pageIndex: event.pageIndex,
        pageSize: event.pageSize
      })
    });
    this.fetchTableData();
  }

  onPatientsSelected(e) {
    this.selectedPatients = e;
    const selected = new Set(e.selected.map(pat => pat.patientId));

    for (const {
      patientId
    } of this.activePatients) {
      if (selected.has(patientId)) {
        this.selectedIds.add(patientId);
      } else if (this.selectedIds.has(patientId)) {
        this.selectedIds.delete(patientId);
      }
    }
  }

  onSortChange(event) {
    let activeKey = event.active === 'patient_id' ? 'first_name' : event.active === 'prescribing_physician' ? 'prescriber_user_name' : event.active === 'location' ? 'location' : event.active === 'report_time' ? 'report_time' : event.active === 'interpreter' ? 'final_approver_id' : event.active === 'prelim_interpreter' ? 'pri_approver_id' : event.active === 'report_type' ? 'report_type' : "";
    this.config = Object.assign(Object.assign({}, this.config), {
      sort: {
        active: activeKey,
        direction: event.direction
      }
    });
    this.selectedPatients.clear();
    this.fetchTableData();
  } //This function is used to open add event dialog 


  addNewEvent(patient) {
    var _a, _b;

    console.log(patient === null || patient === void 0 ? void 0 : patient.patientId);
    console.log((_a = patient === null || patient === void 0 ? void 0 : patient.patchIds[0]) === null || _a === void 0 ? void 0 : _a.startTime);
    const addEvent = this.dialog.open(src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_3__.AddEventComponent, {
      width: "600px",
      maxWidth: "96vw",
      height: "100%",
      maxHeight: "100vh",
      panelClass: "add-event-container",
      //maxHeight: "95vh",
      //height: "530px",
      data: {
        patientId: patient === null || patient === void 0 ? void 0 : patient.patientId,
        patchStarted: (_b = patient === null || patient === void 0 ? void 0 : patient.patchIds[0]) === null || _b === void 0 ? void 0 : _b.startTime
      },
      disableClose: true
    });
  }

  alertSettings(selectedPatient) {
    const dailogRef = this.dialog.open(src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsComponent, {
      //adding same width as history popup
      width: "1300px",
      maxWidth: "98%",
      height: "100%",
      maxHeight: "100vh",
      panelClass: ["alertcontainer-modal", "alertcontainer"],
      //height: "530px",
      //panelClass: "alertcontainer",
      data: {
        patientData: Object.assign(Object.assign({}, selectedPatient), {
          addEvent: false
        }),
        selectedTab: 'parameterAlerts'
      },
      disableClose: true
    });
  } //  /**This function is used to open Discharge Patient dialog */


  getThirdPartyDevices(list) {
    if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
      let deviceIds = "";
      list.forEach(element => {
        if (element === null || element === void 0 ? void 0 : element.deviceId) {
          deviceIds = deviceIds ? deviceIds + ", " + element.deviceId : element.deviceId;
        }
      });

      if (deviceIds !== "") {
        return deviceIds;
      } else {
        return "-";
      }
    } else {
      return "-";
    }
  } // /**This function is used to open dialog */


  getGroupDetails() {
    this.manageGroupService.fetch().subscribe(groups => {
      if (groups['data'].length > 0) {
        this.groupsData$.next(groups['data']);
      }
    });
  }

  isScOrGc() {
    let role = this.authService.getRoles();
    return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
  }

  ngOnDestroy() {
    var _a;

    clearInterval(this.reloadInterval);
    (_a = this.activePatientsSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

PendingInterpretationComponent.ɵfac = function PendingInterpretationComponent_Factory(t) {
  return new (t || PendingInterpretationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_manager_pending_interpretation_manager_service__WEBPACK_IMPORTED_MODULE_4__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_5__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_8__.ManageGroupsService));
};

PendingInterpretationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: PendingInterpretationComponent,
  selectors: [["app-pending-interpretation"]],
  decls: 70,
  vars: 64,
  consts: [["type", "pending-interp"], ["page-actions", ""], [1, "d-flex", "justify-content-end", "me-4"], [1, "d-lg-flex", "d-md-none", "d-sm-none", "d-none", "my-2"], ["mat-flat-button", "", "color", "blue", "class", "mx-1", 3, "disabled", 4, "ngIf"], [1, "d-block", "d-lg-none", "my-2"], ["mat-icon-button", "", 1, "border", 3, "matMenuTriggerFor"], [1, "justify-content-enter"], [1, "mobile-menu", "overflow-hidden", "d-block", "d-lg-none"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", 4, "ngIf"], [1, "px-3"], [1, "table-scroll", "without-tab-table", "comman-table-users", "head-border"], [3, "config", "selection", "data", "columns", "error", "isSelected", "Id", "selectOnlyActive", "sortChange", "page", "selected"], ["table-header", ""], [1, "my-3", "row", "align-items-end", "position-relative", "ps-0", "ps-lg-5"], [1, "mat-label", "filter-label", "d-lg-flex", "d-none", "align-items-center"], [1, "col-sm-12", "col-md-12", "col-lg-9", "col-xl-10", "col-xxl-10", "select-col", "discharge-select-dropdown"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-2", "col-xxl-2", "mt-0", "mt-md-2", "mt-lg-0"], ["key", "groupId", "displayKey", "name", 1, "nested-selectfilter", "bg-selectfilter", 3, "selectedValue", "label", "options", "showSelect", "selected"], [1, "toplabel", "d-block", "pb-0", "pb-md-1", "ps-0", "ps-lg-2", "pt-2", "pt-sm-0"], [1, "w100", "nested-select", "d-flex", "flex-row", "align-items-center", "justify-content-between", 3, "change"], ["value", "", 1, "select-value"], ["class", "select-value", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-2", "col-xxl-2", "mt-2", "mt-lg-0"], ["appearance", "fill", "floatLabel", "never", 1, "search-form-field"], ["matInput", "", "type", "search", "id", "searchString", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["class", "clear-icon", 3, "click", 4, "ngIf"], ["matSuffix", "", 1, "default-cursor"], ["lsWidgetName", "patient_id"], ["lsWidgetName", "prescribing_physician"], ["lsWidgetName", "location"], ["lsWidgetName", "report_time"], ["lsWidgetName", "interpreter"], ["lsWidgetName", "prelim_interpreter"], ["lsWidgetName", "report_type"], ["lsWidgetName", "view"], ["lsWidgetName", "actions"], ["mat-flat-button", "", "color", "blue", 1, "mx-1", 3, "disabled"], ["mat-menu-item", "", 3, "disabled"], [1, "select-value", 3, "value"], [1, "clear-icon", 3, "click"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "me-2"], [1, "d-flex", "justify-content-start", "align-items-center", "bold-text"], ["class", "me-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button"], ["src", "assets/icons/plus.png"], ["src", "assets/icons/pdf.png"], [1, "move"], ["src", "assets/icons/review.png"], ["mat-flat-button", "", "color", "primary", "class", "btn-no-shadow mx-auto me-2", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "shadow-none", 3, "matMenuTriggerFor"], [1, "justify-content-center"], ["xPosition", "before", 1, "setting-card-menu", "profile-card-menu"], ["patientMenu", "matMenu"], ["mat-menu-item", "", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "btn-no-shadow", "mx-auto", "me-2", 3, "click"], ["mat-menu-item", ""]],
  template: function PendingInterpretationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ls-page-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, PendingInterpretationComponent_button_4_Template, 3, 4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, PendingInterpretationComponent_button_6_Template, 3, 4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "more_vert");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-menu", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, PendingInterpretationComponent_button_13_Template, 3, 4, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ls-table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("sortChange", function PendingInterpretationComponent_Template_ls_table_sortChange_16_listener($event) {
        return ctx.onSortChange($event);
      })("page", function PendingInterpretationComponent_Template_ls_table_page_16_listener($event) {
        return ctx.onPageChange($event);
      })("selected", function PendingInterpretationComponent_Template_ls_table_selected_16_listener($event) {
        return ctx.onPatientsSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](17, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "app-nested-dropdown", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selected", function PendingInterpretationComponent_Template_app_nested_dropdown_selected_25_listener($event) {
        return ctx.searchByGroup("LOCATION", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "mat-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function PendingInterpretationComponent_Template_select_change_32_listener($event) {
        return ctx.searchByGroup("DOCTOR", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, PendingInterpretationComponent_option_35_Template, 2, 2, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "app-nested-dropdown", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selected", function PendingInterpretationComponent_Template_app_nested_dropdown_selected_37_listener($event) {
        return ctx.searchByGroup("CLINICAL", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](39, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "app-nested-dropdown", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selected", function PendingInterpretationComponent_Template_app_nested_dropdown_selected_41_listener($event) {
        return ctx.searchByGroup("CLINICAL", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](43, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "app-nested-dropdown", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selected", function PendingInterpretationComponent_Template_app_nested_dropdown_selected_45_listener($event) {
        return ctx.searchByGroup("CLINICAL", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](47, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "app-nested-dropdown", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selected", function PendingInterpretationComponent_Template_app_nested_dropdown_selected_49_listener($event) {
        return ctx.searchByGroup("CLINICAL", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](51, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "mat-form-field", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function PendingInterpretationComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.searchObject.string = $event;
      })("keyup", function PendingInterpretationComponent_Template_input_keyup_57_listener() {
        return ctx.search();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, PendingInterpretationComponent_mat_icon_58_Template, 2, 0, "mat-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "mat-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, PendingInterpretationComponent_ng_template_61_Template, 7, 2, "ng-template", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, PendingInterpretationComponent_ng_template_62_Template, 2, 1, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, PendingInterpretationComponent_ng_template_63_Template, 3, 1, "ng-template", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, PendingInterpretationComponent_ng_template_64_Template, 6, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, PendingInterpretationComponent_ng_template_65_Template, 3, 1, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, PendingInterpretationComponent_ng_template_66_Template, 2, 0, "ng-template", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, PendingInterpretationComponent_ng_template_67_Template, 3, 1, "ng-template", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, PendingInterpretationComponent_ng_template_68_Template, 2, 0, "ng-template", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](69, PendingInterpretationComponent_ng_template_69_Template, 14, 7, "ng-template", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isGcorScCheck());
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", ctx.config)("selection", ctx.selectedPatients)("data", ctx.activePatients)("columns", ctx.activePatient_Columns)("error", ctx.error)("isSelected", ctx.isSelected)("Id", "patientId")("selectOnlyActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](21, 38, "pending-interp-module.filter"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectedValue", ctx.filterObject.pGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 40, "pending-interp-module.location"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](27, 42, ctx.locationGroups$))("showSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](31, 44, "active-patients-module.prescriber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.doctorsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 46, "pending-interp-module.approver"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](39, 48, ctx.clinicalGroups$))("showSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 50, "pending-interp-module.prelim_interp"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](43, 52, ctx.clinicalGroups$))("showSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](46, 54, "pending-interp-module.report_gen_date"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](47, 56, ctx.clinicalGroups$))("showSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](50, 58, "pending-interp-module.status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](51, 60, ctx.clinicalGroups$))("showSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](56, 62, "pending-interp-module.search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.searchObject.string);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.searchObject.string);
    }
  },
  directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_9__.LsPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenu, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_10__.LsTableComponent, _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.NestedDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatSuffix, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_12__.LsWidgetNameDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe],
  styles: [".clear-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  right: 0rem;\n}\n.monitoring-icon[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  color: #fff;\n  background: #A55E64;\n  height: 2rem !important;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.biosensor-id[_ngcontent-%COMP%] {\n  width: 4rem;\n  text-align: left;\n  font-weight: 700;\n  padding-left: 5px;\n}\n.indicator-icon[_ngcontent-%COMP%], .stop-monitoring[_ngcontent-%COMP%], .tick-icon[_ngcontent-%COMP%], .close-icon-cell[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  margin-right: 0.5rem;\n}\n.close-icon-cell[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.tick-icon[_ngcontent-%COMP%] {\n  color: #17d468;\n}\n.stop-monitoring[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.icon-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #043158 !important;\n}\n\n@media (min-width: 992px) and (max-width: 1050px) {\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 0.65rem;\n  }\n}\n.move[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.nested-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 3px;\n  background-color: #043c6d;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);\n  padding: 0.2rem 0.5rem 0.2rem 1rem;\n  color: white;\n  font-weight: 600;\n  border: none;\n}\n.nested-select[_ngcontent-%COMP%]   .select-value[_ngcontent-%COMP%] {\n  background: #e0eaf2;\n  max-height: 300px !important;\n  line-height: 2rem;\n  height: 2rem;\n  color: #235987 !important;\n  font-size: 0.8rem;\n  font-weight: 700 !important;\n  width: 100%;\n  min-width: 200px;\n  max-width: 280px;\n  text-transform: capitalize !important;\n}\n.nested-select[_ngcontent-%COMP%]   .select-value[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.nested-select[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n  line-height: 1.5rem;\n}\n.nested-select.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctaW50ZXJwcmV0YXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FDR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ3JOQSxVQUFBO0FGS0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVEE7RUFDRSw2QkFBQTtFQUNBLFdDYk07RURjTixtQkFBQTtFQUNBLHVCQUFBO0FBWUY7QUFSRTtFQUNFLHlCQUFBO0FBV0o7QUFSQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQ3NHZ0I7RURyR2hCLGlCQUFBO0FBV0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxxQkN3R0s7RUR2R0wsb0JBQUE7QUFXRjtBQVJBO0VBQ0UsY0NaZTtBRHVCakI7QUFQQTtFQUNFLGNDYmlCO0FEdUJuQjtBQU5BO0VBQ0UsY0N0QmU7QUQrQmpCO0FBTEE7RUFDRSxlQUFBO0FBUUY7QUFMQTs7Ozs7R0FBQTtBQU9BO0VBQ0Usb0NBQUE7QUFPRjtBQUpBLCtCQUFBO0FBR0k7RUFERjtJQUVJLG9CQUFBO0VBTUo7QUFDRjtBQUhBO0VBQ0UsbUJBQUE7QUFNRjtBQUhBO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDdUJhO0VEdEJiLDJDQytEaUI7RUQ3RGpCLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlGO0FBRkU7RUFVSSxtQkNaVTtFRGFWLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUxOO0FBTU07RUFDRSxzQkNsSEE7QUQ4R1I7QUFRRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTk47QUFRRTtFQUNJLFlBQUE7QUFOTiIsImZpbGUiOiJwZW5kaW5nLWludGVycHJldGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmV3IHZhcmlhYmxlIGRlZmluZSAqL1xyXG5cclxuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvbWl4aW5zXCI7XHJcblxyXG4uY2xlYXItaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcclxuICByaWdodDogMHJlbTtcclxufVxyXG4vL21vbml0b3JpbmctaWNvblxyXG4ubW9uaXRvcmluZy1pY29uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNBNTVFNjQ7XHJcbiAgaGVpZ2h0OiAycmVtIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWZvcm0tZmllbGQge1xyXG4gIC8vIGxlZnQ6IDMwMHB4O1xyXG4gIGlucHV0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcbi5iaW9zZW5zb3ItaWQge1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC03MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pbmRpY2F0b3ItaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWRlY29yYXRpb246ICRub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbi1jZWxsIHtcclxuICBjb2xvcjogJHJlZC1mb250LWNvbG9yO1xyXG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xyXG59XHJcblxyXG4udGljay1pY29uIHtcclxuICBjb2xvcjogJGdyZWVuLWZvbnQtY29sb3I7XHJcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XHJcbn1cclxuXHJcbi5zdG9wLW1vbml0b3Jpbmcge1xyXG4gIGNvbG9yOiAkcmVkLWZvbnQtY29sb3I7XHJcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XHJcbn1cclxuXHJcbi5pY29uLWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qLmFjdGl2ZS10YWJsZSB7XHJcbiAgOjpuZy1kZWVwIC5zY3JvbGwtYXNzaXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNjBweCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59ICovXHJcblxyXG50YWJsZS5tYXQtdGFibGUgdGhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YWItYmctY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqKiogbWVhZGlhIHF1ZXJ5IGJ1dHRvbiAqKioqKi9cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMC42NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1vdmV7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5lc3RlZC1zZWxlY3Qge1xyXG4gIC8vQGRlYnVnOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy10YWJsZS1yb3c7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3I7ICBcclxuICAvL2JveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbSAwLjJyZW0gMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiBcclxuICAuc2VsZWN0LXZhbHVlIHtcclxuICAgICAgLy8gZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gbWFyZ2luLXRvcDogLTAuMXJlbTtcclxuICAgICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIC8vIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWUtYmc7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIGNvbG9yOiAkc2VsZWN0LW9wdGlvbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG4gICAgICAvL3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIG1hdC1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcbiAgJi5kaXNhYmxlZHtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxufSIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIi8qbWl4aW5zICovXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRhbmltYXRpb24pIHtcbiAgLW1zLXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICB0cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtUm90YXRlKCkge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cblxuQG1peGluIGRpc3BsYXlmbGV4KCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGZsZXh2ZXJ0aWNhbCgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1peGluIHRleHQtdHJ1bmNhdGUoKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"]
});

/***/ }),

/***/ 37035:
/*!***********************************************************************************!*\
  !*** ./src/app/pending-interpretation/services/pending-interpretation.service.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePatientsService": function() { return /* binding */ ActivePatientsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/manage-group/services/manage-groups.service */ 34887);
/* harmony import */ var _services_backendapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/backendapi.service */ 68493);






class ActivePatientsService {
    constructor(manageGroupService, backendApiService) {
        this.manageGroupService = manageGroupService;
        this.backendApiService = backendApiService;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl2;
        this.cGroup$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.groups$ = this.cGroup$.asObservable();
        this.http = backendApiService.httpClient;
    }
    getAll(url) {
        if (url) {
            let base_url = (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.integ) ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl2 : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl;
            //let iurl = (environment.integ) ? 'current_patient' : url; 
            let iurl = url;
            let apiURL = `${base_url}${iurl}`;
            return this.http
                .get(apiURL)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
        }
    }
    savePatient(data) {
        // let url = this.BASE_URL + "patients/";
        let url = this.BASE_URL + "patient_register/";
        return this.http
            .post(url, data.payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    updatePatient(obj) {
        let url = this.BASE_URL + "patients/";
        return this.http
            .put(url, obj.payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getAutogeneratedPatientId() {
        let url = this.BASE_URL + 'patients/generate-id';
        return this.http.post(url, '').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    stopProcedure(patientId) {
        let url = this.BASE_URL + `patients/${patientId}/stop-procedure`;
        return this.http
            .post(url, "")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    dischargePatient(patientId) {
        patientId = encodeURIComponent(patientId);
        let url = this.BASE_URL + `patients/${patientId}/discharge`;
        return this.http
            .post(url, "")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getDoctorsList() {
        // let url = this.BASE_URL + "clinical-facilities/physicians?size=2000";
        let url = this.URL + `drop_down_user/CFPI8P?role=prescriber`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getDoctorBy(id) {
        let url = this.BASE_URL + "clinical-facilities/physicians?Id=" + id;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    handleError(error) {
        if (error.errorMessage) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error.errorMessage);
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(`Error: ${error}`);
        }
    }
    setSelectedPatientIds(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(ids);
    }
    setSelectedTab(tab) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(tab);
    }
    getUnassignedPatients(url) {
        if (url) {
            let apiURL = `${this.BASE_URL}${url}`;
            return this.http
                .get(apiURL)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(undefined);
        }
    }
    getPatientBy(id) {
        id = encodeURIComponent(id);
        let apiURL = `${this.BASE_URL}patients/${id}`;
        return this.http
            .get(apiURL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getCGroups() {
        if (this.cGroup$.getValue()) {
            return this.cGroup$.asObservable();
        }
        else {
            return this.manageGroupService.fetch()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(groups => {
                var _a;
                if (((_a = groups['data']) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.cGroup$.next(groups['data']);
                }
                return groups['data'] || [];
            }));
        }
    }
    unassignedPatientsUrl(config, searchObject) {
        var _a;
        return `patches/unassigned?&page=${config.page.pageIndex + 1}&size=${config.page.pageSize}&${(_a = searchObject === null || searchObject === void 0 ? void 0 : searchObject.keyword) === null || _a === void 0 ? void 0 : _a.toLowerCase()}=${searchObject === null || searchObject === void 0 ? void 0 : searchObject.string}`;
    }
    actvePatientsUrl(config, searchObject, filterObject) {
        var _a;
        let searchString = encodeURIComponent(searchObject.string);
        // let url = `patients/?sortBy=${config.sort.active}:${config.sort.direction}&isDischarged=false&page=${config.page.pageIndex + 1}&size=${config.page.pageSize}`;
        // let url = `current_patient/?offset=${config.page.pageIndex+1}&limit=${config.page.pageSize}`;
        // let url = `pending_interpretation?page=1&order=asc&limit=10`;
        let url = `pending_interpretation/?page=${config.page.pageIndex + 1}&limit=${config.page.pageSize}&sort=${config.sort.active}&order=${config.sort.direction}`;
        // let url = "patient_details"
        if ((searchObject === null || searchObject === void 0 ? void 0 : searchObject.keyword) && searchString) {
            url = url + `&${(_a = searchObject === null || searchObject === void 0 ? void 0 : searchObject.keyword) === null || _a === void 0 ? void 0 : _a.toLowerCase()}=${searchString}`;
        }
        if (filterObject === null || filterObject === void 0 ? void 0 : filterObject.cGroupId) {
            url = url + `&cGroupId=${filterObject === null || filterObject === void 0 ? void 0 : filterObject.cGroupId}`;
        }
        if (filterObject === null || filterObject === void 0 ? void 0 : filterObject.pGroupId) {
            url = url + `&pGroupId=${filterObject === null || filterObject === void 0 ? void 0 : filterObject.pGroupId}`;
        }
        if (filterObject === null || filterObject === void 0 ? void 0 : filterObject.doctor) {
            url = url + `&fk_prescriber=647889e02bec4eb7b2120a2b`;
        }
        return url;
    }
    getClinicalGroups(location) {
        return this.groups$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((groups) => {
            return groups.filter(g => g.type === location);
        }));
    }
    assignGroup(ob) {
        let url = this.BASE_URL + "patients/assign-group";
        return this.http.post(url, ob.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getPanelDetails(panelId) {
        return new Promise((resolve, reject) => {
            const apiUrl = this.BASE_URL + 'dashboard/panels/';
            this.backendApiService.getMapping(apiUrl + panelId)
                .then(response => {
                var _a;
                const data = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.patients;
                if (data) {
                    const patientsArr = data.map((patient) => ({
                        patchId: patient === null || patient === void 0 ? void 0 : patient.patchId,
                        patientId: patient === null || patient === void 0 ? void 0 : patient.patientId,
                        doctorId: patient === null || patient === void 0 ? void 0 : patient.doctorId,
                        firstName: patient === null || patient === void 0 ? void 0 : patient.firstName,
                        lastName: patient === null || patient === void 0 ? void 0 : patient.lastName,
                        age: patient === null || patient === void 0 ? void 0 : patient.age,
                        cGroup: patient === null || patient === void 0 ? void 0 : patient.cGroup,
                        pGroup: patient === null || patient === void 0 ? void 0 : patient.pGroup,
                        sex: patient === null || patient === void 0 ? void 0 : patient.gender,
                        created: new Date((patient === null || patient === void 0 ? void 0 : patient.stTime) * 1000)
                    }));
                    resolve(patientsArr);
                }
            }).catch(reject);
        });
    }
    generateAdmissionId() {
        let url = this.BASE_URL + "patients/admissions/generate-id";
        return this.http.post(url, "").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    searchPatient(id) {
        id = encodeURIComponent(id);
        let apiURL = this.BASE_URL + `patients/details/search?page=1&size=5&sortBy=PatientID:desc&PatientID=${id}`;
        return this.http
            .get(apiURL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    stopMonitoringUnassigned(patchIds) {
        let url = this.BASE_URL + `patches/stop-procedure/bulk`;
        let body = {
            "patchIdList": patchIds
        };
        return this.http
            .post(url, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    deletePatch(patchId) {
        let url = this.BASE_URL + `patches/unassigned/${patchId}`;
        return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    transferRelay(patchId) {
        let url = this.BASE_URL + `patients/relay-transfer/${patchId}`;
        return this.http
            .post(url, {})
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
}
ActivePatientsService.ɵfac = function ActivePatientsService_Factory(t) { return new (t || ActivePatientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_backendapi_service__WEBPACK_IMPORTED_MODULE_2__.BackendApiService)); };
ActivePatientsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ActivePatientsService, factory: ActivePatientsService.ɵfac });


/***/ }),

/***/ 13420:
/*!*******************************************************!*\
  !*** ./src/app/pending-interpretation/store/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePatientsStoreActions": function() { return /* reexport module object */ _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "ActivePatientsStoreSelectors": function() { return /* reexport module object */ _pending_interpretation_selector__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "ActivePatientsStoreState": function() { return /* reexport module object */ _pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_2__; }
/* harmony export */ });
/* harmony import */ var _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-interpretation.actions */ 13777);
/* harmony import */ var _pending_interpretation_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending-interpretation.selector */ 58021);
/* harmony import */ var _pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pending-interpretation.reducer */ 44635);






/***/ }),

/***/ 13777:
/*!********************************************************************************!*\
  !*** ./src/app/pending-interpretation/store/pending-interpretation.actions.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionTypes": function() { return /* binding */ ActionTypes; },
/* harmony export */   "LoadActivePatientsRequestAction": function() { return /* binding */ LoadActivePatientsRequestAction; },
/* harmony export */   "LoadActivePatientsFailureAction": function() { return /* binding */ LoadActivePatientsFailureAction; },
/* harmony export */   "LoadActivePatientsSuccessAction": function() { return /* binding */ LoadActivePatientsSuccessAction; },
/* harmony export */   "LoadUnassignedPatientsRequestAction": function() { return /* binding */ LoadUnassignedPatientsRequestAction; },
/* harmony export */   "LoadUnassignedPatientsFailureAction": function() { return /* binding */ LoadUnassignedPatientsFailureAction; },
/* harmony export */   "LoadUnassignedPatientsSuccessAction": function() { return /* binding */ LoadUnassignedPatientsSuccessAction; },
/* harmony export */   "LoadDoctorsListRequestAction": function() { return /* binding */ LoadDoctorsListRequestAction; },
/* harmony export */   "LoadDoctorsListFailureAction": function() { return /* binding */ LoadDoctorsListFailureAction; },
/* harmony export */   "LoadDoctorsListSuccessAction": function() { return /* binding */ LoadDoctorsListSuccessAction; },
/* harmony export */   "CreateNewPatientRequestAction": function() { return /* binding */ CreateNewPatientRequestAction; },
/* harmony export */   "CreateNewPatientFailureAction": function() { return /* binding */ CreateNewPatientFailureAction; },
/* harmony export */   "CreateNewPatientSuccessAction": function() { return /* binding */ CreateNewPatientSuccessAction; },
/* harmony export */   "UpdatePatientRequestAction": function() { return /* binding */ UpdatePatientRequestAction; },
/* harmony export */   "UpdatePatientFailureAction": function() { return /* binding */ UpdatePatientFailureAction; },
/* harmony export */   "UpdatePatientSuccessAction": function() { return /* binding */ UpdatePatientSuccessAction; },
/* harmony export */   "AssignGroupRequestAction": function() { return /* binding */ AssignGroupRequestAction; },
/* harmony export */   "AssignGroupFailureAction": function() { return /* binding */ AssignGroupFailureAction; },
/* harmony export */   "AssignGroupSuccessAction": function() { return /* binding */ AssignGroupSuccessAction; },
/* harmony export */   "DischargePatientRequestAction": function() { return /* binding */ DischargePatientRequestAction; },
/* harmony export */   "DischargePatientFailureAction": function() { return /* binding */ DischargePatientFailureAction; },
/* harmony export */   "DischargePatientSuccessAction": function() { return /* binding */ DischargePatientSuccessAction; },
/* harmony export */   "StopMonitoringRequestAction": function() { return /* binding */ StopMonitoringRequestAction; },
/* harmony export */   "StopMonitoringFailureAction": function() { return /* binding */ StopMonitoringFailureAction; },
/* harmony export */   "StopMonitoringSuccessAction": function() { return /* binding */ StopMonitoringSuccessAction; },
/* harmony export */   "SetSelectedPatientIdsRequestAction": function() { return /* binding */ SetSelectedPatientIdsRequestAction; },
/* harmony export */   "SetSelectedPatientIdsFailureAction": function() { return /* binding */ SetSelectedPatientIdsFailureAction; },
/* harmony export */   "SetSelectedPatientIdsSuccessAction": function() { return /* binding */ SetSelectedPatientIdsSuccessAction; },
/* harmony export */   "SetSelectedTabRequestAction": function() { return /* binding */ SetSelectedTabRequestAction; },
/* harmony export */   "SetSelectedTabFailureAction": function() { return /* binding */ SetSelectedTabFailureAction; },
/* harmony export */   "SetSelectedTabSuccessAction": function() { return /* binding */ SetSelectedTabSuccessAction; }
/* harmony export */ });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_ACTIVE_PATIENTS_REQUEST"] = "[ACTIVEPATIENTS] Load active patients request";
    ActionTypes["LOAD_ACTIVE_PATIENTS_FAILURE"] = "[ACTIVEPATIENTS] Load active patients Failure";
    ActionTypes["LOAD_ACTIVE_PATIENTS_SUCCESS"] = "[ACTIVEPATIENTS] Load active patients Success";
    ActionTypes["LOAD_UNASSIGNED_PATIENTS_REQUEST"] = "[UNASSIGNEDPATIENTS] Load unassigned patients request";
    ActionTypes["LOAD_UNASSIGNED_PATIENTS_FAILURE"] = "[UNASSIGNEDPATIENTS] Load unassigned patients Failure";
    ActionTypes["LOAD_UNASSIGNED_PATIENTS_SUCCESS"] = "[UNASSIGNEDPATIENTS] Load unassigned patients Success";
    ActionTypes["LOAD_DOCTORS_LIST_REQUEST"] = "[DOCTORS] Load doctors list request";
    ActionTypes["LOAD_DOCTORS_LIST_FAILURE"] = "[DOCTORS] Load doctors list Failure";
    ActionTypes["LOAD_DOCTORS_LIST_SUCCESS"] = "[DOCTORS] Load doctors list Success";
    ActionTypes["CREATE_NEW_PATIENT_REQUEST"] = "[ACTIVEPATIENTS] Create new patient request";
    ActionTypes["CREATE_NEW_PATIENT_FAILURE"] = "[ACTIVEPATIENTS] Create new patient Failure";
    ActionTypes["CREATE_NEW_PATIENT_SUCCESS"] = "[ACTIVEPATIENTS] Create new patient Success";
    ActionTypes["UPDATE_PATIENT_REQUEST"] = "[ACTIVEPATIENTS] Update patient request";
    ActionTypes["UPDATE_PATIENT_FAILURE"] = "[ACTIVEPATIENTS] Update patient Failure";
    ActionTypes["UPDATE_PATIENT_SUCCESS"] = "[ACTIVEPATIENTS] Update patient Success";
    ActionTypes["ASSIGN_GROUP_REQUEST"] = "[ASSIGNGROUP] assign group request";
    ActionTypes["ASSIGN_GROUP_FAILURE"] = "[ASSIGNGROUP] assign group Failure";
    ActionTypes["ASSIGN_GROUP_SUCCESS"] = "[ASSIGNGROUP] assign group Success";
    ActionTypes["DISCHARGE_PATIENT_REQUEST"] = "[ACTIVEPATIENTS] DISCHARGE patient request";
    ActionTypes["DISCHARGE_PATIENT_FAILURE"] = "[ACTIVEPATIENTS] DISCHARGE patient Failure";
    ActionTypes["DISCHARGE_PATIENT_SUCCESS"] = "[ACTIVEPATIENTS] DISCHARGE patient Success";
    ActionTypes["STOP_MONITORING_REQUEST"] = "[ACTIVEPATIENTS] Stop Monitoring patient request";
    ActionTypes["STOP_MONITORING_FAILURE"] = "[ACTIVEPATIENTS] Stop Monitoring patient Failure";
    ActionTypes["STOP_MONITORING_SUCCESS"] = "[ACTIVEPATIENTS] Stop Monitoring patient Success";
    ActionTypes["SET_SELECTED_PATIENTS_IDs_REQUEST"] = "[ACTIVEPATIENTS] Set selected patient ids request";
    ActionTypes["SET_SELECTED_PATIENTS_IDs_FAILURE"] = "[ACTIVEPATIENTS] Set selected patient ids Failure";
    ActionTypes["SET_SELECTED_PATIENTS_IDs_SUCCESS"] = "[ACTIVEPATIENTS] Set selected patient ids Success";
    ActionTypes["SET_SELECTED_TAB_REQUEST"] = "[TableTab] Set selected patient ids request";
    ActionTypes["SET_SELECTED_TAB_FAILURE"] = "[TableTab] Set selected patient ids Failure";
    ActionTypes["SET_SELECTED_TAB_SUCCESS"] = "[TableTab] Set selected patient ids Success";
})(ActionTypes || (ActionTypes = {}));
class LoadActivePatientsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_ACTIVE_PATIENTS_REQUEST;
    }
}
class LoadActivePatientsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_ACTIVE_PATIENTS_FAILURE;
    }
}
class LoadActivePatientsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_ACTIVE_PATIENTS_SUCCESS;
    }
}
class LoadUnassignedPatientsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_UNASSIGNED_PATIENTS_REQUEST;
    }
}
class LoadUnassignedPatientsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_UNASSIGNED_PATIENTS_FAILURE;
    }
}
class LoadUnassignedPatientsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_UNASSIGNED_PATIENTS_SUCCESS;
    }
}
class LoadDoctorsListRequestAction {
    constructor() {
        this.type = ActionTypes.LOAD_DOCTORS_LIST_REQUEST;
    }
}
class LoadDoctorsListFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_DOCTORS_LIST_FAILURE;
    }
}
class LoadDoctorsListSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_DOCTORS_LIST_SUCCESS;
    }
}
class CreateNewPatientRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_NEW_PATIENT_REQUEST;
    }
}
class CreateNewPatientFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_NEW_PATIENT_FAILURE;
    }
}
class CreateNewPatientSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_NEW_PATIENT_SUCCESS;
    }
}
class UpdatePatientRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_PATIENT_REQUEST;
    }
}
class UpdatePatientFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_PATIENT_FAILURE;
    }
}
class UpdatePatientSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_PATIENT_SUCCESS;
    }
}
class AssignGroupRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.ASSIGN_GROUP_REQUEST;
    }
}
class AssignGroupFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.ASSIGN_GROUP_FAILURE;
    }
}
class AssignGroupSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.ASSIGN_GROUP_SUCCESS;
    }
}
class DischargePatientRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.DISCHARGE_PATIENT_REQUEST;
    }
}
class DischargePatientFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.DISCHARGE_PATIENT_FAILURE;
    }
}
class DischargePatientSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.DISCHARGE_PATIENT_SUCCESS;
    }
}
class StopMonitoringRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.STOP_MONITORING_REQUEST;
    }
}
class StopMonitoringFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.STOP_MONITORING_FAILURE;
    }
}
class StopMonitoringSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.STOP_MONITORING_SUCCESS;
    }
}
class SetSelectedPatientIdsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SELECTED_PATIENTS_IDs_REQUEST;
    }
}
class SetSelectedPatientIdsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SELECTED_PATIENTS_IDs_FAILURE;
    }
}
class SetSelectedPatientIdsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SELECTED_PATIENTS_IDs_SUCCESS;
    }
}
class SetSelectedTabRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SELECTED_TAB_REQUEST;
    }
}
class SetSelectedTabFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SELECTED_TAB_FAILURE;
    }
}
class SetSelectedTabSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SELECTED_TAB_SUCCESS;
    }
}


/***/ }),

/***/ 38491:
/*!********************************************************************************!*\
  !*** ./src/app/pending-interpretation/store/pending-interpretation.effects.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePatientsEffects": function() { return /* binding */ ActivePatientsEffects; }
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 20275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-interpretation.actions */ 13777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pending-interpretation.service */ 37035);







class ActivePatientsEffects {
    constructor(activePatientsService, actions$) {
        this.activePatientsService = activePatientsService;
        this.actions$ = actions$;
        this.loadActivePatientsRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_ACTIVE_PATIENTS_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => this.activePatientsService.getAll(action.payload.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            var _a, _b;
            return new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadActivePatientsSuccessAction({
                data: {
                    patients: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.items,
                    total: (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.total,
                },
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadActivePatientsFailureAction({ error })))))));
        this.loadUnAssignedPatientsRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_UNASSIGNED_PATIENTS_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => this.activePatientsService.getUnassignedPatients(action.payload.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            var _a, _b;
            return new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadUnassignedPatientsSuccessAction({
                data: {
                    items: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.items,
                    total: (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.total,
                },
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadUnassignedPatientsFailureAction({ error })))))));
        this.loadDoctorsRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_DOCTORS_LIST_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadDoctorsListRequestAction()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => this.activePatientsService.getDoctorsList().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((doctors) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadDoctorsListSuccessAction({ doctors })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.LoadDoctorsListFailureAction({ error })))))));
        this.createNewPatientEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.CREATE_NEW_PATIENT_REQUEST), 
        // startWith(new featureActions.createNewPatientRequestAction()),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.savePatient(data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((newPatient) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.CreateNewPatientSuccessAction({ newPatient })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.CreateNewPatientFailureAction({ error })))))));
        this.updatePatientEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UPDATE_PATIENT_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.updatePatient(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.UpdatePatientSuccessAction({ updatedData: response.data })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.UpdatePatientFailureAction({ error })))))));
        this.updatePatientGroupEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.ASSIGN_GROUP_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.assignGroup(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.AssignGroupSuccessAction({ updatedData: response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.AssignGroupFailureAction({ error })))))));
        this.stopMonitoringEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.STOP_MONITORING_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.stopProcedure(data.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((patient) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.StopMonitoringSuccessAction({ patient })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.StopMonitoringFailureAction({ error })))))));
        this.dischargePatientEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.DISCHARGE_PATIENT_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.dischargePatient(data.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((dischargedPatient) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.DischargePatientSuccessAction({
            dischargedPatient,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.DischargePatientFailureAction({ error })))))));
        this.setSelectedPatientIdsEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_SELECTED_PATIENTS_IDs_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.setSelectedPatientIds(data.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((patientIds) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedPatientIdsSuccessAction({
            patientIds,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedPatientIdsFailureAction({ error })))))));
        this.setSelectedtabEffects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_SELECTED_TAB_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => this.activePatientsService.setSelectedTab(data.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((selectedTab) => new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedTabSuccessAction({
            selectedTab,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedTabFailureAction({ error })))))));
    }
}
ActivePatientsEffects.ɵfac = function ActivePatientsEffects_Factory(t) { return new (t || ActivePatientsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_pending_interpretation_service__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions)); };
ActivePatientsEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ActivePatientsEffects, factory: ActivePatientsEffects.ɵfac });


/***/ }),

/***/ 44635:
/*!********************************************************************************!*\
  !*** ./src/app/pending-interpretation/store/pending-interpretation.reducer.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patientsFeatureKey": function() { return /* binding */ patientsFeatureKey; },
/* harmony export */   "ActivePatientsReducer": function() { return /* binding */ ActivePatientsReducer; }
/* harmony export */ });
/* harmony import */ var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/life-signals/_models/ls-column.model */ 24856);
/* harmony import */ var _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pending-interpretation.model */ 37861);
/* harmony import */ var _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pending-interpretation.actions */ 13777);



const initialActivePatientState = {
    ACTIVE_PATIENTS_DATA: [],
    UNASSIGNED_PATIENTS_DATA: [],
    PATIENT: null,
    DOCTORS: [],
    error: "",
    PATIENT_IDS: null,
    SELECTED_TAB: _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsTabs.ACTIVE_PATIENT,
    tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.DEFAULT,
    addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.DEFAULT,
    total: 0,
    unassignedPatients_total: 0
};
const patientsFeatureKey = "patient";
function ActivePatientsReducer(state = initialActivePatientState, action) {
    var _a, _b, _c;
    switch (action.type) {
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_ACTIVE_PATIENTS_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_ACTIVE_PATIENTS_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, 
                //ACTIVE_PATIENTS_DATA: [],
                tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE, total: 0 });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_ACTIVE_PATIENTS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { error: null, ACTIVE_PATIENTS_DATA: action.payload["data"].patients, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS, total: action.payload["data"].total });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_UNASSIGNED_PATIENTS_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_UNASSIGNED_PATIENTS_FAILURE: {
            return Object.assign(Object.assign({}, state), { tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE, UNASSIGNED_PATIENTS_DATA: [], error: action.payload.error, unassignedPatients_total: 0 });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_UNASSIGNED_PATIENTS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { UNASSIGNED_PATIENTS_DATA: action.payload["data"].items, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS, unassignedPatients_total: action.payload["data"].total, error: null });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_DOCTORS_LIST_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, 
                //tableState: TableState.LOADING,
                DOCTORS: [] });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_DOCTORS_LIST_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.LOAD_DOCTORS_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { DOCTORS: action.payload["doctors"]["data"] });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.CREATE_NEW_PATIENT_REQUEST: {
            return Object.assign(Object.assign({}, state), { PATIENT: null, error: null, addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.DEFAULT });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.CREATE_NEW_PATIENT_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.CREATE_NEW_PATIENT_SUCCESS: {
            return Object.assign(Object.assign({}, state), { PATIENT: action.payload["newPatient"]["data"], ACTIVE_PATIENTS_DATA: [
                    ...state.ACTIVE_PATIENTS_DATA,
                    action.payload["newPatient"]["data"]
                ], total: (state === null || state === void 0 ? void 0 : state.total) + 1, addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.UPDATE_PATIENT_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.UPDATE_PATIENT_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.UPDATE_PATIENT_SUCCESS: {
            let resp = [];
            if (state.SELECTED_TAB === _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsTabs.ASSIGN_PATIENT && action.payload["updatedData"]["data"]) {
                resp = state.ACTIVE_PATIENTS_DATA;
            }
            else if (state.SELECTED_TAB === _models_pending_interpretation_model__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsTabs.ACTIVE_PATIENT) {
                resp = (_a = state.ACTIVE_PATIENTS_DATA) === null || _a === void 0 ? void 0 : _a.map((x) => {
                    if ((x === null || x === void 0 ? void 0 : x.patientId) === ((action.payload["updatedData"]["data"] !== undefined) ? action.payload["updatedData"]["data"]["patientId"] : action.payload["updatedData"]["patientId"])) {
                        x = (action.payload["updatedData"]["data"] !== undefined) ? action.payload["updatedData"]["data"] : action.payload["updatedData"];
                        return x;
                    }
                    else {
                        return x;
                    }
                });
            }
            return Object.assign(Object.assign({}, state), { error: null, addEditState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.STOP_MONITORING_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.STOP_MONITORING_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.STOP_MONITORING_SUCCESS: {
            return Object.assign(Object.assign({}, state), { ACTIVE_PATIENTS_DATA: (_b = state.ACTIVE_PATIENTS_DATA) === null || _b === void 0 ? void 0 : _b.map((x) => {
                    if (x && x["patientId"] === action.payload["patient"]["data"]) {
                        x.biosensorStatus = "STOPPED";
                        return x;
                    }
                    else {
                        return x;
                    }
                }), tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.SET_SELECTED_PATIENTS_IDs_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.SET_SELECTED_PATIENTS_IDs_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.SET_SELECTED_PATIENTS_IDs_SUCCESS: {
            return Object.assign(Object.assign({}, state), { PATIENT_IDS: action.payload["patientIds"], tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.SET_SELECTED_TAB_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.SET_SELECTED_TAB_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.SET_SELECTED_TAB_SUCCESS: {
            return Object.assign(Object.assign({}, state), { SELECTED_TAB: action.payload["selectedTab"], tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.ASSIGN_GROUP_REQUEST: {
            console.log(state);
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.ASSIGN_GROUP_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.ASSIGN_GROUP_SUCCESS: {
            return Object.assign(Object.assign({}, state), { tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.DISCHARGE_PATIENT_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.LOADING });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.DISCHARGE_PATIENT_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload.error, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.FAILURE });
        }
        case _pending_interpretation_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.DISCHARGE_PATIENT_SUCCESS: {
            return Object.assign(Object.assign({}, state), { ACTIVE_PATIENTS_DATA: (_c = state === null || state === void 0 ? void 0 : state.ACTIVE_PATIENTS_DATA) === null || _c === void 0 ? void 0 : _c.filter((x) => {
                    if (x.patientId !== action.payload["dischargedPatient"]["data"]) {
                        return x;
                    }
                }), total: (state === null || state === void 0 ? void 0 : state.total) - 1, tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_0__.TableState.SUCCESS });
        }
    }
}


/***/ }),

/***/ 58021:
/*!*********************************************************************************!*\
  !*** ./src/app/pending-interpretation/store/pending-interpretation.selector.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectActivePatientsList": function() { return /* binding */ selectActivePatientsList; },
/* harmony export */   "selectUnassignedPatientsList": function() { return /* binding */ selectUnassignedPatientsList; },
/* harmony export */   "selectActivePatientsError": function() { return /* binding */ selectActivePatientsError; },
/* harmony export */   "createNewPatient": function() { return /* binding */ createNewPatient; },
/* harmony export */   "updatePatient": function() { return /* binding */ updatePatient; },
/* harmony export */   "assignGroupPatient": function() { return /* binding */ assignGroupPatient; },
/* harmony export */   "dischargePatient": function() { return /* binding */ dischargePatient; },
/* harmony export */   "stopMonitoring": function() { return /* binding */ stopMonitoring; },
/* harmony export */   "doctorsList": function() { return /* binding */ doctorsList; },
/* harmony export */   "getPatientIds": function() { return /* binding */ getPatientIds; },
/* harmony export */   "selectedTab": function() { return /* binding */ selectedTab; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-interpretation.reducer */ 44635);


const getPatientState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_pending_interpretation_reducer__WEBPACK_IMPORTED_MODULE_0__.patientsFeatureKey);
const selectActivePatientsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => {
    return Object.assign(Object.assign({}, state), { error: state === null || state === void 0 ? void 0 : state.error, tableState: state === null || state === void 0 ? void 0 : state.tableState });
});
const selectUnassignedPatientsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => {
    return Object.assign(Object.assign({}, state), { error: state === null || state === void 0 ? void 0 : state.error, tableState: state === null || state === void 0 ? void 0 : state.tableState });
});
const selectActivePatientsError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state === null || state === void 0 ? void 0 : state.error);
const createNewPatient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => {
    return {
        PATIENT: state === null || state === void 0 ? void 0 : state.PATIENT,
        error: state === null || state === void 0 ? void 0 : state.error,
        addEditState: state === null || state === void 0 ? void 0 : state.addEditState
    };
});
const updatePatient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state.PATIENT);
const assignGroupPatient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state.PATIENT);
const dischargePatient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state.PATIENT);
const stopMonitoring = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state.PATIENT);
const doctorsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state === null || state === void 0 ? void 0 : state.DOCTORS);
const getPatientIds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state.PATIENT_IDS);
const selectedTab = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getPatientState, (state) => state.SELECTED_TAB);


/***/ })

}]);
//# sourceMappingURL=src_app_pending-interpretation_pending-interpretation_module_ts-es2017.js.map