(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklife_line"] = self["webpackChunklife_line"] || []).push([["src_app_active-patients_active-patients_module_ts"], {
    /***/
    143:
    /*!*******************************************************************!*\
      !*** ./src/app/active-patients/active-patients-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActivePatientsRoutingModule": function ActivePatientsRoutingModule() {
          return (
            /* binding */
            _ActivePatientsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../guards/auth.guard */
      95107);
      /* harmony import */


      var _active_patients_active_patients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./active-patients/active-patients.component */
      43151);
      /* harmony import */


      var _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../enum/roles.enum */
      66489);
      /* harmony import */


      var _shared_root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/root/root.component */
      59596);
      /* harmony import */


      var _admit_patients_admit_patients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admit-patients/admit-patients.component */
      28754);
      /* harmony import */


      var _posted_final_posted_final_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./posted_final/posted-final.component */
      45498);
      /* harmony import */


      var _interpretation_history_interpretation_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./interpretation-history/interpretation-history.component */
      91430);
      /* harmony import */


      var _archived_archived_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./archived/archived.component */
      9622);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _shared_root_root_component__WEBPACK_IMPORTED_MODULE_3__.RootComponent,
        children: [{
          path: "active-patients",
          component: _active_patients_active_patients_component__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsComponent,
          canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
          data: {
            roles: [_enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.GENERAL_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.SUPERVISORY_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.PHYSICIAN]
          }
        }, {
          path: "admit-patients",
          component: _admit_patients_admit_patients_component__WEBPACK_IMPORTED_MODULE_4__.AdmitPatientsComponent,
          canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
          data: {
            roles: [_enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.GENERAL_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.SUPERVISORY_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.PHYSICIAN]
          }
        }, {
          path: "posted-final",
          component: _posted_final_posted_final_component__WEBPACK_IMPORTED_MODULE_5__.PostedFinalComponent,
          canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
          data: {
            roles: [_enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.GENERAL_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.SUPERVISORY_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.PHYSICIAN]
          }
        }, {
          path: "interpretation-history",
          component: _interpretation_history_interpretation_history_component__WEBPACK_IMPORTED_MODULE_6__.InterpretationHistoryComponent,
          canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
          data: {
            roles: [_enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.GENERAL_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.SUPERVISORY_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.PHYSICIAN]
          }
        }, {
          path: "archived",
          component: _archived_archived_component__WEBPACK_IMPORTED_MODULE_7__.ArchivedComponent,
          canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
          data: {
            roles: [_enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.GENERAL_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.SUPERVISORY_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.PHYSICIAN]
          }
        }]
      }];

      var _ActivePatientsRoutingModule = /*#__PURE__*/_createClass(function _ActivePatientsRoutingModule() {
        _classCallCheck(this, _ActivePatientsRoutingModule);
      });

      _ActivePatientsRoutingModule.ɵfac = function ActivePatientsRoutingModule_Factory(t) {
        return new (t || _ActivePatientsRoutingModule)();
      };

      _ActivePatientsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _ActivePatientsRoutingModule
      });
      _ActivePatientsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_ActivePatientsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    75140:
    /*!***********************************************************!*\
      !*** ./src/app/active-patients/active-patients.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActivePatientsModule": function ActivePatientsModule() {
          return (
            /* binding */
            _ActivePatientsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _active_patients_active_patients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./active-patients/active-patients.component */
      43151);
      /* harmony import */


      var _active_patients_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./active-patients-routing.module */
      143);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/active-patients.service */
      65144);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @ngrx/effects */
      20275);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _store_active_patients_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./store/active-patients.reducer */
      91445);
      /* harmony import */


      var _store_active_patients_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./store/active-patients.effects */
      50);
      /* harmony import */


      var _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admit-patient-modal/admit-patient-modal.component */
      74754);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./assign-group-modal/assign-group-modal.component */
      3475);
      /* harmony import */


      var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./confirmation-dialog/confirmation-dialog.component */
      15001);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var keycloak_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! keycloak-angular */
      4575);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./patient-more-info-dialog/patient-more-info-dialog.component */
      41829);
      /* harmony import */


      var _manage_group_manage_group_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../manage-group/manage-group.module */
      62395);
      /* harmony import */


      var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../i18n/i18n.module */
      73401);
      /* harmony import */


      var _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../life-signals/life-signals.module */
      13169);
      /* harmony import */


      var _pipe_epochToHumanDate_epoch_to_human_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../pipe/epochToHumanDate/epoch-to-human-date.pipe */
      18610);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _admit_patients_admit_patients_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./admit-patients/admit-patients.component */
      28754);
      /* harmony import */


      var _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./patient-admitted-modal/patient-admitted-modal.component */
      63832);
      /* harmony import */


      var _remove_biosensor_remove_biosensor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./remove-biosensor/remove-biosensor.component */
      36394);
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-pick-datetime */
      42910);
      /* harmony import */


      var _posted_final_posted_final_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./posted_final/posted-final.component */
      45498);
      /* harmony import */


      var _interpretation_history_interpretation_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./interpretation-history/interpretation-history.component */
      91430);
      /* harmony import */


      var _archived_archived_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./archived/archived.component */
      9622);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ActivePatientsModule = /*#__PURE__*/_createClass(function _ActivePatientsModule() {
        _classCallCheck(this, _ActivePatientsModule);
      });

      _ActivePatientsModule.ɵfac = function ActivePatientsModule_Factory(t) {
        return new (t || _ActivePatientsModule)();
      };

      _ActivePatientsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
        type: _ActivePatientsModule
      });
      _ActivePatientsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
        providers: [{
          provide: _services_active_patients_service__WEBPACK_IMPORTED_MODULE_3__.ActivePatientsService,
          useClass: _services_active_patients_service__WEBPACK_IMPORTED_MODULE_3__.ActivePatientsService
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HTTP_INTERCEPTORS,
          useClass: keycloak_angular__WEBPACK_IMPORTED_MODULE_23__.KeycloakBearerInterceptor,
          multi: true
        }, {
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill',
            floatLabel: 'never'
          }
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _active_patients_routing_module__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsRoutingModule, _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__.I18nModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatNativeDateModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__.MatCheckboxModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_36__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__.MatTabsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__.MatPaginatorModule, _manage_group_manage_group_module__WEBPACK_IMPORTED_MODULE_10__.ManageGroupModule, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.ReactiveFormsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__.MatAutocompleteModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_43__.StoreModule.forFeature(_store_active_patients_reducer__WEBPACK_IMPORTED_MODULE_4__.patientsFeatureKey, _store_active_patients_reducer__WEBPACK_IMPORTED_MODULE_4__.ActivePatientsReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_44__.EffectsModule.forFeature([_store_active_patients_effects__WEBPACK_IMPORTED_MODULE_5__.ActivePatientsEffects]), _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_12__.LifeSignalsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_17__.OwlDateTimeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](_ActivePatientsModule, {
          declarations: [_active_patients_active_patients_component__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsComponent, _admit_patients_admit_patients_component__WEBPACK_IMPORTED_MODULE_14__.AdmitPatientsComponent, _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_6__.AdmitPatientModalComponent, _assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_7__.AssignGroupModalComponent, _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmationDialogComponent, _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_9__.PatientMoreInfoDialogComponent, _pipe_epochToHumanDate_epoch_to_human_date_pipe__WEBPACK_IMPORTED_MODULE_13__.EpochToHumanDatePipe, _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_15__.PatientAdmittedModalComponent, _remove_biosensor_remove_biosensor_component__WEBPACK_IMPORTED_MODULE_16__.RemoveBiosensorComponent, _posted_final_posted_final_component__WEBPACK_IMPORTED_MODULE_18__.PostedFinalComponent, _interpretation_history_interpretation_history_component__WEBPACK_IMPORTED_MODULE_19__.InterpretationHistoryComponent, _archived_archived_component__WEBPACK_IMPORTED_MODULE_20__.ArchivedComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _active_patients_routing_module__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsRoutingModule, _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__.I18nModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatNativeDateModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__.MatCheckboxModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_36__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__.MatTabsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__.MatPaginatorModule, _manage_group_manage_group_module__WEBPACK_IMPORTED_MODULE_10__.ManageGroupModule, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.ReactiveFormsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__.MatAutocompleteModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_43__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_44__.EffectsFeatureModule, _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_12__.LifeSignalsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_17__.OwlDateTimeModule]
        });
      })();
      /***/

    },

    /***/
    43151:
    /*!******************************************************************************!*\
      !*** ./src/app/active-patients/active-patients/active-patients.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActivePatientsComponent": function ActivePatientsComponent() {
          return (
            /* binding */
            _ActivePatientsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/active-patients.model */
      25720);
      /* harmony import */


      var _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admit-patient-modal/admit-patient-modal.component */
      74754);
      /* harmony import */


      var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../confirmation-dialog/confirmation-dialog.component */
      15001);
      /* harmony import */


      var _assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../assign-group-modal/assign-group-modal.component */
      3475);
      /* harmony import */


      var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/life-signals/_models/ls-column.model */
      24856);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../patient-more-info-dialog/patient-more-info-dialog.component */
      41829);
      /* harmony import */


      var _patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../patient-details-view-more/patient-details-view-more.component */
      54122);
      /* harmony import */


      var _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../patient-admitted-modal/patient-admitted-modal.component */
      63832);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      8876);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/notifications/notifications.component */
      66557);
      /* harmony import */


      var src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/add-event/add-event.component */
      45211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../manager/active-patient-manager.service */
      60972);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/active-patients.service */
      65144);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services/authentication.service */
      7053);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../manage-group/services/manage-groups.service */
      34887);
      /* harmony import */


      var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-page-header/ls-page-header.component */
      63601);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-table/ls-table.component */
      16743);
      /* harmony import */


      var _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared/nested-dropdown/nested-dropdown.component */
      88113);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../life-signals/_directives/ls-widget-name.directive */
      19861);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function ActivePatientsComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r15.get();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r0.selectedPatients == null ? null : ctx_r0.selectedPatients.selected == null ? null : ctx_r0.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "active-patients-module.button.assign"), " ");
        }
      }

      function ActivePatientsComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r17.openAdmitPatientModalWith({
              key: "add-new-patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r1.selectedPatients == null ? null : ctx_r1.selectedPatients.selected == null ? null : ctx_r1.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "active-patients-module.button.register_patient"), " ");
        }
      }

      function ActivePatientsComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r19.openAdmitPatientModalWith({
              key: "add-new-patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r3.selectedPatients == null ? null : ctx_r3.selectedPatients.selected == null ? null : ctx_r3.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "active-patients-module.button.admit_patient"), " ");
        }
      }

      function ActivePatientsComponent_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", doc_r21["_id"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](doc_r21["displayName"]);
        }
      }

      function ActivePatientsComponent_mat_icon_56_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_mat_icon_56_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r22.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function ActivePatientsComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_ng_template_59_Template_mat_icon_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26);

            var row_r24 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r25.patientViewMore(row_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r24 == null ? null : row_r24.patient_id_mrn);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r24 == null ? null : row_r24.name);
        }
      }

      function ActivePatientsComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r27 == null ? null : row_r27.prescription_id);
        }
      }

      function ActivePatientsComponent_ng_template_61_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", doc_r30["displayName"], " ");
        }
      }

      function ActivePatientsComponent_ng_template_61_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ActivePatientsComponent_ng_template_61_div_1_div_1_Template, 2, 1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r30 = ctx.$implicit;

          var row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", doc_r30["_id"] === (row_r28 == null ? null : row_r28.fk_prescriber));
        }
      }

      function ActivePatientsComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ActivePatientsComponent_ng_template_61_div_1_Template, 2, 1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r9.doctorsList);
        }
      }

      function ActivePatientsComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r34 == null ? null : row_r34.fk_r_doctor);
        }
      }

      function ActivePatientsComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r35 == null ? null : row_r35.location);
        }
      }

      function ActivePatientsComponent_ng_template_64_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bio_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" - ", bio_r38["biosensor_id"], " ");
        }
      }

      function ActivePatientsComponent_ng_template_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ActivePatientsComponent_ng_template_64_div_2_Template, 2, 1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", row_r36.biosensor);
        }
      }

      function ActivePatientsComponent_ng_template_65_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bio_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", bio_r41["monitoring_started_on"], " ");
        }
      }

      function ActivePatientsComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ActivePatientsComponent_ng_template_65_div_1_Template, 2, 1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", row_r39.biosensor);
        }
      }

      function ActivePatientsComponent_ng_template_66_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_ng_template_66_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r49);

            var row_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r47.openAdmitPatientModalWith({
              key: "edit-active-patient",
              value: row_r42 == null ? null : row_r42.patient_id_mrn
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "active-patients-module.button.edit"));
        }
      }

      function ActivePatientsComponent_ng_template_66_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "active-patients-module.button.abort"));
        }
      }

      function ActivePatientsComponent_ng_template_66_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "active-patients-module.button.assign"));
        }
      }

      function ActivePatientsComponent_ng_template_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "mat-menu", 61, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ActivePatientsComponent_ng_template_66_button_5_Template, 3, 3, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ActivePatientsComponent_ng_template_66_button_6_Template, 3, 3, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ActivePatientsComponent_ng_template_66_button_7_Template, 3, 3, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r43);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r14.isClinicianCheck());

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r14.isScOrGc());

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r14.isScOrGc());
        }
      }

      var _ActivePatientsComponent = /*#__PURE__*/function () {
        function _ActivePatientsComponent(manager, dialog, service, authService, snackbar, route, manageGroupService) {
          _classCallCheck(this, _ActivePatientsComponent);

          this.manager = manager;
          this.dialog = dialog;
          this.service = service;
          this.authService = authService;
          this.snackbar = snackbar;
          this.route = route;
          this.manageGroupService = manageGroupService;
          this.activePatients = new Array(); // Selection Variables

          this.selectedPatients = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.SelectionModel(true);
          this.selectedIds = new Set();
          this.isPhy = false;
          this.activePatient_Columns = [{
            id: "patientId",
            label: "Patient Details",
            headerClass: ["text-start"],
            sortable: true,
            labelClass: "fw-bold",
            cellClass: []
          }, {
            id: "prescription_id",
            label: "Prescription id",
            headerClass: ["text-start"],
            sortable: true,
            cellClass: []
          }, {
            id: "prescribing_physician",
            label: "prescribing physician",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start", "align-items-center"]
          }, {
            id: "referal_physician",
            label: "referal physician",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start", "align-items-center"]
          }, {
            id: "location",
            label: "Location",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start", "align-items-center"]
          }, {
            id: "activePatch",
            label: "biosensor ID",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "monitoring",
            label: "procedure Start time",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "status",
            label: "Status",
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
              "class": ["d-flex", "align-items-center", "justify-content-end"],
              header: {
                style: "max-width: 180px; width: 180px;"
              }
            },
            page: {
              pageSize: 10,
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
            tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__.TableState.DEFAULT
          };
          this.searchObject = {
            keyword: "",
            string: ""
          };
          this.filterObject = {
            cGroupId: null,
            pGroupId: null,
            doctor: null
          };
          this.filterStrings = new Array();
          this.monitoringStatus = _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.MonitoringStatus;
          this.groupsData$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject([]);
          this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
          this.doctorsList = [];
          this.groups$ = this.groupsData$.asObservable();
          this.locationGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "physical";
            });
          }));
          this.clinicalGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "CLINICAL";
            });
          }));
          this.doctors$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "CLINICAL";
            });
          }));
        }

        _createClass(_ActivePatientsComponent, [{
          key: "get",
          value: function get() {
            console.log(this.doctorsList);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //TODO:
            this.getDoctors(); //New API: Get required staff members.

            this.service.getFacilityUsers();
            var roles = this.authService.getRoles() || [];
            ;
            if ((roles === null || roles === void 0 ? void 0 : roles.indexOf("PHY")) > -1) this.isPhy = true;
            this.getGroupDetails();
            this.modelChanged.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(500), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(function () {
              return _this.serviceToCallWith();
            })).subscribe();
            this.initVariables();
            this.fetchTableData();
            var panelId = sessionStorage.getItem("panelId");

            if (panelId === null || panelId === void 0 ? void 0 : panelId.length) {
              this.service.getPanelDetails(panelId).then(function (patients) {
                var _iterator = _createForOfIteratorHelper(patients),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var patient = _step.value;

                    if (patient.patchId) {
                      _this.selectedIds.add(patient.patientId);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (_this.activePatients.length && _this.selectedIds.size) {
                  var _this$selectedPatient;

                  (_this$selectedPatient = _this.selectedPatients).select.apply(_this$selectedPatient, _toConsumableArray(_this.activePatients.filter(function (pat) {
                    return _this.selectedIds.has(pat.patientId);
                  })));
                }
              });
            }

            this.reloadInterval = setInterval(function () {
              console.log("Fetching patients.."); //this.fetchTableData();
            }, 30000);
            this.activePatientsSub = this.manager.selectActivePatient().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (response) {
              if (response === null || response === void 0 ? void 0 : response.tableState) {
                _this.config = Object.assign(Object.assign({}, _this.config), {
                  tableState: response === null || response === void 0 ? void 0 : response.tableState,
                  rowSelectEnabled: true,
                  page: Object.assign(Object.assign({}, _this.config.page), {
                    length: response === null || response === void 0 ? void 0 : response.total
                  })
                });
              }

              _this.error = response === null || response === void 0 ? void 0 : response.error;

              if (response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA) {
                _this.activePatients = response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA.map(function (x) {
                  var patient = Object.assign(Object.assign({}, x), {
                    name: "".concat(x.first_name, " ").concat(x.last_name),
                    //weightUnit: x.weightUnit.toUpperCase(),
                    //heightUnit: x.heightUnit.toUpperCase()
                    patientId: x.patient_id_mrn
                  });
                  return patient;
                });
                console.log(_this.activePatients);

                if (_this.activePatients.length && _this.selectedIds.size) {
                  var _this$selectedPatient2;

                  (_this$selectedPatient2 = _this.selectedPatients).select.apply(_this$selectedPatient2, _toConsumableArray(_this.activePatients.filter(function (pat) {
                    return _this.selectedIds.has(pat.patientId);
                  })));
                }
              }
            })).subscribe();
          }
        }, {
          key: "getDoctors",
          value: function getDoctors() {
            var _this2 = this;

            this.doctorsListSub = this.manager.getDoctorsList().subscribe(function (list) {
              var persons = list.items;
              _this2.doctorsList = persons === null || persons === void 0 ? void 0 : persons.map(function (doctor) {
                return Object.assign(Object.assign({}, doctor), {
                  displayName: "".concat(doctor === null || doctor === void 0 ? void 0 : doctor.first_name, " ").concat(doctor === null || doctor === void 0 ? void 0 : doctor.last_name)
                });
              });
            });
          }
        }, {
          key: "serviceToCallWith",
          value: function serviceToCallWith() {
            var ref;
            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
            ref = this.manager.selectActivePatient();
            return ref;
          }
        }, {
          key: "resetAndSearch",
          value: function resetAndSearch() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "search",
          value: function search() {
            var _a;

            this.searchObject.keyword = 'search_query';

            if ((_a = this.searchObject) === null || _a === void 0 ? void 0 : _a.string) {
              this.config.page.pageIndex = 0;
            } //this.selectedPatients.clear();


            this.modelChanged.next(JSON.stringify(this.searchObject));
          }
        }, {
          key: "searchByGroup",
          value: function searchByGroup(key, groupId) {
            if (key === 'DOCTOR') {
              this.filterObject.doctor = groupId.target.value;
            } else if (key === 'physical') {
              this.filterObject.pGroupId = groupId;
            }

            this.config.page.pageIndex = 0;
            this.activePatients = undefined;
            this.modelChanged.next(JSON.stringify(this.filterObject));
          }
        }, {
          key: "clear",
          value: function clear() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "checkCharacters",
          value: function checkCharacters(event) {
            if (this.searchObject.keyword === "PATCHID" || this.searchObject.keyword === "PATIENTID") {
              var pattern = /^[a-zA-z0-9]$/;
              var key = event.key;

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
        }, {
          key: "initVariables",
          value: function initVariables() {
            for (var i in _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient) {
              this.filterStrings.push({
                text: _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient[i],
                value: i
              });
            }
          }
        }, {
          key: "fetchTableData",
          value: function fetchTableData() {
            this.getActivePatientData();
          }
        }, {
          key: "isSelected",
          value: function isSelected(row, selection) {
            return selection.selected.map(function (s) {
              return s.patientId;
            }).includes(row.patientId);
          }
        }, {
          key: "isClinicianCheck",
          value: function isClinicianCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1;
          }
        }, {
          key: "isGcorScCheck",
          value: function isGcorScCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "getActivePatientData",
          value: function getActivePatientData() {
            if (!this.config.sort.active || !this.config.sort.direction) {
              this.config.sort.active = "first_name";
              this.config.sort.direction = "desc";
            }

            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            this.config = Object.assign(Object.assign({}, this.config), {
              page: Object.assign(Object.assign({}, this.config.page), {
                pageIndex: event.pageIndex,
                pageSize: event.pageSize
              })
            });
            this.fetchTableData();
          }
        }, {
          key: "onPatientsSelected",
          value: function onPatientsSelected(e) {
            this.selectedPatients = e;
            var selected = new Set(e.selected.map(function (pat) {
              return pat.patientId;
            }));

            var _iterator2 = _createForOfIteratorHelper(this.activePatients),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var patientId = _step2.value.patientId;

                if (selected.has(patientId)) {
                  this.selectedIds.add(patientId);
                } else if (this.selectedIds.has(patientId)) {
                  this.selectedIds["delete"](patientId);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "onSortChange",
          value: function onSortChange(event) {
            var activeKey = event.active === 'patientId' ? 'first_name' : event.active === 'prescription_id' ? 'prescription_id' : event.active === 'referal_physician' ? 'doctor_user_name' : event.active === 'prescribing_physician' ? 'prescriber_user_name' : "";
            this.config = Object.assign(Object.assign({}, this.config), {
              sort: {
                active: activeKey,
                direction: event.direction
              }
            });
            this.selectedPatients.clear();
            this.fetchTableData();
            console.log(activeKey);
          }
        }, {
          key: "openBiosensorModal",
          value: function openBiosensorModal(patientId, data) {
            var _this3 = this;

            this.service.getPatientBy(patientId).subscribe(function (patient) {
              var patches = {
                activePatch: patient.data.activePatch,
                patchIds: patient.data.patchIds,
                heading: "active-patients-module.dialog.more_info",
                readOnly: !_this3.isClinicianCheck()
              };

              _this3.dialog.open(_patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PatientMoreInfoDialogComponent, {
                width: "700px",
                //minWidth: "700px",
                maxWidth: "95vw",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: patches
              }).afterClosed().subscribe(function (response) {
                if (response) {
                  data['patchIds'] = response;

                  _this3.manager.updatePatient(data).subscribe(function (res) {
                    if (res === null || res === void 0 ? void 0 : res.error) {
                      if (res.error === "PATCHES_ALREADY_IN_USE") {
                        _this3.snackbar.openSnackBar("active-patients-module.errors.patchInUse", 'bottom', 'center', true);
                      } else if (res.error === "MORE_THAN_ONE_PATCH_STREAMING") {
                        _this3.snackbar.openSnackBar("active-patients-module.errors.more_than_one_patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATCH_STATE_STREAMING") {
                        _this3.snackbar.openSnackBar("active-patients-module.errors.patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATIENT_ALREADY_DISCHARGED") {
                        _this3.snackbar.openSnackBar("errors.patient_discharged", 'bottom', 'center', true);
                      } else if (res.error === "ADMITTED_ON_TIME_IS_INVALID") {
                        _this3.snackbar.openSnackBar("active-patients-module.errors.admittedOn_invalid", 'bottom', 'center', true);
                      } else {
                        _this3.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                      }
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "openAdmitPatientModalWith",
          value: function openAdmitPatientModalWith(data) {
            var _this4 = this;

            switch (data.key) {
              case 'add-new-patient':
                this.admitPatientModal().subscribe(function (resp) {
                  if (resp) {
                    _this4.getActivePatientData();

                    _this4.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                      maxWidth: "96vw",
                      //minWidth: "320px",
                      width: "520px",
                      backdropClass: "backdropBackground",
                      disableClose: true,
                      autoFocus: false,
                      data: {
                        title: 'active-patients-module.dialog.patient_admitted'
                      }
                    });
                  }
                });
                break;

              case 'edit-active-patient':
                this.service.getPatientBy(data === null || data === void 0 ? void 0 : data.value).subscribe(function (patient) {
                  _this4.admitPatientModal({
                    activePatient: patient === null || patient === void 0 ? void 0 : patient.data,
                    mode: 'EDIT'
                  }).subscribe(function (resp) {
                    if (resp) {
                      _this4.getActivePatientData();

                      _this4.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                        maxWidth: "96vw",
                        //minWidth: "320px",
                        width: "520px",
                        backdropClass: "backdropBackground",
                        disableClose: true,
                        autoFocus: false,
                        data: {
                          title: 'active-patients-module.dialog.patient_edited'
                        }
                      });
                    }
                  });
                });
                break;
            }
          } //This function is used to open add event dialog 

        }, {
          key: "addNewEvent",
          value: function addNewEvent(patient) {
            var _a;

            var addEvent = this.dialog.open(src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__.AddEventComponent, {
              width: "600px",
              maxWidth: "96vw",
              height: "100%",
              maxHeight: "100vh",
              panelClass: "add-event-container",
              //maxHeight: "95vh",
              //height: "530px",
              data: {
                patientId: patient === null || patient === void 0 ? void 0 : patient.patientId,
                patchStarted: (_a = patient === null || patient === void 0 ? void 0 : patient.patchIds[0]) === null || _a === void 0 ? void 0 : _a.startTime
              },
              disableClose: true
            });
          }
        }, {
          key: "admitPatientModal",
          value: function admitPatientModal(data) {
            var dailogRef = this.dialog.open(_admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__.AdmitPatientModalComponent, {
              maxWidth: "96vw",
              minWidth: "320px",
              width: "1200px",
              height: "900px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: Object.assign({}, data)
            });
            return dailogRef.afterClosed();
          }
        }, {
          key: "alertSettings",
          value: function alertSettings(selectedPatient) {
            var dailogRef = this.dialog.open(src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsComponent, {
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

        }, {
          key: "openDischargeGroupDialog",
          value: function openDischargeGroupDialog(patientId) {
            var _this5 = this;

            var patientIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var patient = arguments.length > 2 ? arguments[2] : undefined;

            if (patient === null || patient === void 0 ? void 0 : patient.activePatch) {
              var dischargeDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_and_stop_monitoring",
                  stop_biosensor: false
                }
              });
              dischargeDialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this5.manager.dischargePatient(patient.patientId);

                  _this5.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });

                  _this5.fetchTableData();
                }
              });
            } else {
              var _dischargeDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_patient_message",
                  stop_biosensor: false
                }
              });

              _dischargeDialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  if (patientIds.length > 0) {
                    patientIds.forEach(function (patient) {
                      _this5.manager.dischargePatient(patient.patientId);

                      _this5.selectedPatients.clear();
                    });
                  } else if (patientId) {
                    _this5.manager.dischargePatient(patientId);
                  }

                  _this5.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "getThirdPartyDevices",
          value: function getThirdPartyDevices(list) {
            if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
              var deviceIds = "";
              list.forEach(function (element) {
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
          }
        }, {
          key: "openStopMonitoringDialog",
          value: function openStopMonitoringDialog(patientId) {
            var _this6 = this;

            var stopMonitoringDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              // minWidth: "500px",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: "active-patients-module.dialog.stop_monitoring",
                message: "active-patients-module.dialog.stop_monitoring_message",
                stop_biosensor: true
              }
            });
            stopMonitoringDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this6.manager.stopMonitoring(patientId);
              }
            });
          } // /**This function is used to open dialog */

        }, {
          key: "openAssignGroupModal",
          value: function openAssignGroupModal(patient) {
            var _this7 = this;

            if (!this.isGcorScCheck()) {
              return;
            }

            this.dialog.open(_assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__.AssignGroupModalComponent, {
              maxWidth: "96vw",
              //minWidth: "500px",
              width: "700px",
              backdropClass: "backdropBackground",
              disableClose: true,
              panelClass: "assign-group-modal",
              data: Object.assign({}, patient)
            }).afterClosed().subscribe(function (group) {
              if (group) {
                var assignGroupObj = {
                  patientId: patient.patientId,
                  cGroup: group.cGroup,
                  pGroup: group.pGroup,
                  admissionId: patient.admissionId
                };

                _this7.manager.assignGroup(assignGroupObj);

                setTimeout(function () {
                  _this7.getActivePatientData();
                }, 500);
              }
            }); //this.getActivePatientData();
          }
        }, {
          key: "patientViewMore",
          value: function patientViewMore(row) {
            this.dialog.open(_patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__.PatientDetailsViewMoreComponent, {
              width: "900px",
              maxWidth: "96vw",
              //height:"500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: row
            });
          }
        }, {
          key: "getGroupDetails",
          value: function getGroupDetails() {
            var _this8 = this;

            this.manageGroupService.fetch().subscribe(function (groups) {
              if (groups['data'].length > 0) {
                _this8.groupsData$.next(groups['data']);
              }
            });
          }
        }, {
          key: "transferRelay",
          value: function transferRelay(activePatch, type) {
            var _this9 = this;

            var confirmDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: type === 'MPR' ? "active-patients-module.button.transfer_mpr" : "active-patients-module.button.transfer_spr",
                message: type === 'MPR' ? "active-patients-module.dialog.transfer_mpr_confirm" : "active-patients-module.dialog.transfer_spr_confirm"
              }
            });
            confirmDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this9.service.transferRelay(activePatch).subscribe(function (res) {
                  if (res.message === 'TRANSFER_REQUEST_INITIATED') {
                    _this9.snackbar.openSnackBar("active-patients-module.errors.transfer_initiated", 'bottom', 'center', true);
                  } else {
                    _this9.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                  }
                });
              }
            });
          }
        }, {
          key: "isScOrGc",
          value: function isScOrGc() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            clearInterval(this.reloadInterval);
            (_a = this.activePatientsSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return _ActivePatientsComponent;
      }();

      _ActivePatientsComponent.ɵfac = function ActivePatientsComponent_Factory(t) {
        return new (t || _ActivePatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__.ManageGroupsService));
      };

      _ActivePatientsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _ActivePatientsComponent,
        selectors: [["app-active-patients"]],
        decls: 67,
        vars: 44,
        consts: [["type", "active_patients"], ["page-actions", ""], [1, "d-flex", "justify-content-end", "me-4"], [1, "d-lg-flex", "d-md-none", "d-sm-none", "d-none", "my-2"], ["mat-flat-button", "", "color", "blue", "class", "mx-1", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "class", "mx-1", 3, "disabled", "click", 4, "ngIf"], [1, "d-block", "d-lg-none", "my-2"], ["mat-icon-button", "", 1, "border", 3, "matMenuTriggerFor"], [1, "justify-content-enter"], [1, "mobile-menu", "overflow-hidden", "d-block", "d-lg-none"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click", 4, "ngIf"], [1, "px-3"], [1, "table-scroll", "without-tab-table", "comman-table-users", "head-border"], [3, "config", "selection", "data", "columns", "error", "isSelected", "Id", "selectOnlyActive", "sortChange", "page", "selected"], ["table-header", ""], [1, "my-3", "row", "align-items-end", "position-relative", "ps-0", "ps-lg-5"], [1, "mat-label", "filter-label", "d-lg-flex", "d-none", "align-items-center"], [1, "col-sm-12", "col-md-12", "col-lg-9", "col-xl-9", "col-xxl-8", "select-col", "discharge-select-dropdown"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-3", "col-xxl-3", "mt-0", "mt-md-2", "mt-lg-0"], ["key", "groupId", "displayKey", "name", 1, "nested-selectfilter", "bg-selectfilter", 3, "selectedValue", "label", "options", "showSelect", "selected"], [1, "toplabel", "d-block", "pb-0", "pb-md-1", "ps-0", "ps-lg-2", "pt-2", "pt-sm-0"], [1, "w100", "nested-select", "d-flex", "flex-row", "align-items-center", "justify-content-between", 3, "change"], ["value", "", 1, "select-value"], ["class", "select-value", 3, "value", 4, "ngFor", "ngForOf"], [1, "nested-select", 3, "click"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "All"], ["matEndDate", "", "disabled", "", 1, "move"], [1, "date"], ["picker", ""], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-3", "col-xxl-4", "mt-2", "mt-lg-0"], ["appearance", "fill", "floatLabel", "never", 1, "search-form-field"], ["matInput", "", "type", "search", "id", "searchString", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["class", "clear-icon", 3, "click", 4, "ngIf"], ["matSuffix", "", 1, "default-cursor"], ["lsWidgetName", "patientId"], ["lsWidgetName", "prescription_id"], ["lsWidgetName", "prescribing_physician"], ["lsWidgetName", "referal_physician"], ["lsWidgetName", "location"], ["lsWidgetName", "activePatch"], ["lsWidgetName", "monitoring"], ["lsWidgetName", "actions"], ["mat-flat-button", "", "color", "blue", 1, "mx-1", 3, "disabled", "click"], ["mat-flat-button", "", "color", "accent", 1, "mx-1", 3, "disabled", "click"], ["mat-menu-item", "", 3, "disabled", "click"], [1, "select-value", 3, "value"], [1, "clear-icon", 3, "click"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "me-2"], ["fontSet", "material-icons-outlined", 2, "cursor", "pointer", 3, "click"], ["class", "me-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["alt", "bio sensor icon", "src", "assets/icons/biosensor.svg"], ["class", "me-3 biosensor-id", 4, "ngFor", "ngForOf"], [1, "me-3", "biosensor-id"], ["mat-icon-button", "", 1, "shadow-none", 3, "matMenuTriggerFor"], [1, "justify-content-center"], ["xPosition", "before", 1, "setting-card-menu", "profile-card-menu"], ["patientMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""]],
        template: function ActivePatientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ls-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, ActivePatientsComponent_button_4_Template, 3, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ActivePatientsComponent_button_6_Template, 3, 4, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "mat-menu", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, ActivePatientsComponent_button_13_Template, 3, 4, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "ls-table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("sortChange", function ActivePatientsComponent_Template_ls_table_sortChange_16_listener($event) {
              return ctx.onSortChange($event);
            })("page", function ActivePatientsComponent_Template_ls_table_page_16_listener($event) {
              return ctx.onPageChange($event);
            })("selected", function ActivePatientsComponent_Template_ls_table_selected_16_listener($event) {
              return ctx.onPatientsSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](17, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "app-nested-dropdown", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function ActivePatientsComponent_Template_app_nested_dropdown_selected_25_listener($event) {
              return ctx.searchByGroup("LOCATION", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](27, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "mat-label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function ActivePatientsComponent_Template_select_change_32_listener($event) {
              return ctx.searchByGroup("DOCTOR", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, ActivePatientsComponent_option_35_Template, 2, 2, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "mat-label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](40, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ActivePatientsComponent_Template_div_click_40_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r50);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](45);

              return _r5.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "mat-date-range-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](42, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](43, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](44, "mat-date-range-picker", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "app-nested-dropdown", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function ActivePatientsComponent_Template_app_nested_dropdown_selected_47_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](49, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](51, "mat-form-field", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](55, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function ActivePatientsComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.searchObject.string = $event;
            })("keyup", function ActivePatientsComponent_Template_input_keyup_55_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](56, ActivePatientsComponent_mat_icon_56_Template, 2, 0, "mat-icon", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](57, "mat-icon", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](58, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](59, ActivePatientsComponent_ng_template_59_Template, 9, 2, "ng-template", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](60, ActivePatientsComponent_ng_template_60_Template, 3, 1, "ng-template", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](61, ActivePatientsComponent_ng_template_61_Template, 2, 1, "ng-template", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](62, ActivePatientsComponent_ng_template_62_Template, 3, 1, "ng-template", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](63, ActivePatientsComponent_ng_template_63_Template, 3, 1, "ng-template", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](64, ActivePatientsComponent_ng_template_64_Template, 3, 1, "ng-template", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](65, ActivePatientsComponent_ng_template_65_Template, 2, 1, "ng-template", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](66, ActivePatientsComponent_ng_template_66_Template, 8, 4, "ng-template", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](12);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isGcorScCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("config", ctx.config)("selection", ctx.selectedPatients)("data", ctx.activePatients)("columns", ctx.activePatient_Columns)("error", ctx.error)("isSelected", ctx.isSelected)("Id", "patientId")("selectOnlyActive", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 28, "active-patients-module.filter"));

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.pGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](26, 30, "active-patients-module.location"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](27, 32, ctx.locationGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](31, 34, "active-patients-module.prescriber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.doctorsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](39, 36, "active-patients-module.monitoring_duration"));

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rangePicker", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](48, 38, "active-patients-module.status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](49, 40, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](54, 42, "active-patients-module.search"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.searchObject.string);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.searchObject.string);
          }
        },
        directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__.LsPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenu, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__.LsTableComponent, _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.NestedDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatSuffix, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__.LsWidgetNameDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuItem],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe],
        styles: [".clear-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  right: 0rem;\n}\n.monitoring-icon[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  color: #fff;\n  background: #A55E64;\n  height: 2rem !important;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.biosensor-id[_ngcontent-%COMP%] {\n  width: 4rem;\n  text-align: left;\n  font-weight: 700;\n  padding-left: 5px;\n}\n.indicator-icon[_ngcontent-%COMP%], .stop-monitoring[_ngcontent-%COMP%], .tick-icon[_ngcontent-%COMP%], .close-icon-cell[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  margin-right: 0.5rem;\n}\n.close-icon-cell[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.tick-icon[_ngcontent-%COMP%] {\n  color: #17d468;\n}\n.stop-monitoring[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.icon-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #043158 !important;\n}\n\n@media (min-width: 992px) and (max-width: 1050px) {\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 0.65rem;\n  }\n}\n.toplabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #fff;\n}\n.nested-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 3px;\n  background-color: #043c6d;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);\n  padding: 0.2rem 0.5rem 0.2rem 1rem;\n  color: white;\n  font-weight: 600;\n  border: none;\n}\n.nested-select[_ngcontent-%COMP%]   .select-value[_ngcontent-%COMP%] {\n  background: #e0eaf2;\n  max-height: 300px !important;\n  line-height: 2rem;\n  height: 2rem;\n  color: #235987 !important;\n  font-size: 0.8rem;\n  font-weight: 700 !important;\n  width: 100%;\n  min-width: 200px;\n  max-width: 280px;\n  text-transform: capitalize !important;\n}\n.nested-select[_ngcontent-%COMP%]   .select-value[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.nested-select[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n  line-height: 1.5rem;\n}\n.nested-select.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.nested-menu[_ngcontent-%COMP%] {\n  max-height: 300px !important;\n}\n.nested-menu.mat-menu-panel[_ngcontent-%COMP%] {\n  background: #e0eaf2;\n}\n.nested-menu[_ngcontent-%COMP%]   button.mat-menu-item[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  height: 2rem;\n  color: #235987 !important;\n  font-size: 0.8rem;\n  font-weight: 700 !important;\n  width: 100%;\n  min-width: 200px;\n  max-width: 280px;\n  text-transform: capitalize !important;\n}\n.nested-menu[_ngcontent-%COMP%]   button.mat-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.move[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: white;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: white;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: white;\n}\n[_ngcontent-%COMP%]:disabled {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZS1wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxtb2R1bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUNHQSx5QkFBQTtBQXNFQSxvQkFBQTtBQXdDQSxXQUFBO0FBTUEsVUFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQVFBLGtCQUFBO0FBSUEsY0FBQTtBQWVBLGVBQUE7QUFJQSxlQUFBO0FBMEJBLGtCQUFBO0FBUUEsaUJBQUE7QUFRQSw2QkFBQTtBQVFBLCtCQUFBO0FDck5BLFVBQUE7QUZLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWUY7QUFUQTtFQUNFLDZCQUFBO0VBQ0EsV0NiTTtFRGNOLG1CQUFBO0VBQ0EsdUJBQUE7QUFZRjtBQVJFO0VBQ0UseUJBQUE7QUFXSjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JDc0dnQjtFRHJHaEIsaUJBQUE7QUFXRjtBQVJBO0VBQ0UsYUFBQTtFQUNBLHFCQ3dHSztFRHZHTCxvQkFBQTtBQVdGO0FBUkE7RUFDRSxjQ1plO0FEdUJqQjtBQVBBO0VBQ0UsY0NiaUI7QUR1Qm5CO0FBTkE7RUFDRSxjQ3RCZTtBRCtCakI7QUFMQTtFQUNFLGVBQUE7QUFRRjtBQUxBOzs7OztHQUFBO0FBT0E7RUFDRSxvQ0FBQTtBQU9GO0FBSkEsK0JBQUE7QUFHSTtFQURGO0lBRUksb0JBQUE7RUFNSjtBQUNGO0FBRkE7RUFBVSxlQ2hFQTtFRGdFcUIsV0MzRXZCO0FEa0ZSO0FBTEE7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN3QmE7RUR2QmIsMkNDZ0VpQjtFRDlEakIsa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTUY7QUFKRTtFQVVJLG1CQ1hVO0VEWVYsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBSE47QUFJTTtFQUNFLHNCQ2pIQTtBRCtHUjtBQU1FO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1FO0VBQ0ksWUFBQTtBQUpOO0FBT0E7RUFDRSw0QkFBQTtBQUpGO0FBTUU7RUFDSSxtQkN4Q1U7QURvQ2hCO0FBUUU7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBTk47QUFRTTtFQUNJLHNCQ2xKRjtBRDRJUjtBQVdBO0VBQ0UsZ0JBQUE7QUFSRjtBQVVBO0VBQ0UsWUFBQTtBQVBGO0FBTUE7RUFDRSxZQUFBO0FBUEY7QUFNQTtFQUNFLFlBQUE7QUFQRjtBQVNBO0VBQ0UsWUFBQTtBQU5GIiwiZmlsZSI6ImFjdGl2ZS1wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5ldyB2YXJpYWJsZSBkZWZpbmUgKi9cclxuXHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL21peGluc1wiO1xyXG5cclxuLmNsZWFyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgcmlnaHQ6IDByZW07XHJcbn1cclxuLy9tb25pdG9yaW5nLWljb25cclxuLm1vbml0b3JpbmctaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjQTU1RTY0O1xyXG4gIGhlaWdodDogMnJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcclxuICAvLyBsZWZ0OiAzMDBweDtcclxuICBpbnB1dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4uYmlvc2Vuc29yLWlkIHtcclxuICB3aWR0aDogNHJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtNzAwO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaW5kaWNhdG9yLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiAkbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmNsb3NlLWljb24tY2VsbCB7XHJcbiAgY29sb3I6ICRyZWQtZm9udC1jb2xvcjtcclxuICBAZXh0ZW5kIC5pbmRpY2F0b3ItaWNvbjtcclxufVxyXG5cclxuLnRpY2staWNvbiB7XHJcbiAgY29sb3I6ICRncmVlbi1mb250LWNvbG9yO1xyXG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xyXG59XHJcblxyXG4uc3RvcC1tb25pdG9yaW5nIHtcclxuICBjb2xvcjogJHJlZC1mb250LWNvbG9yO1xyXG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xyXG59XHJcblxyXG4uaWNvbi1jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKi5hY3RpdmUtdGFibGUge1xyXG4gIDo6bmctZGVlcCAuc2Nyb2xsLWFzc2lzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzYwcHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufSAqL1xyXG5cclxudGFibGUubWF0LXRhYmxlIHRoZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFiLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKioqIG1lYWRpYSBxdWVyeSBidXR0b24gKioqKiovXHJcbi5idXR0b24tZ3JvdXAge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgcGFkZGluZzogMHB4IDAuNjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udG9wbGFiZWx7Zm9udC1zaXplOiAkc2l6ZS0xMjsgY29sb3I6JHdoaXRlO31cclxuXHJcbi5uZXN0ZWQtc2VsZWN0IHtcclxuICAvL0BkZWJ1ZzogMHJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctdGFibGUtcm93O1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yOyAgXHJcbiAgLy9ib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW0gMC4ycmVtIDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gXHJcbiAgLnNlbGVjdC12YWx1ZSB7XHJcbiAgICAgIC8vIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vIG1hcmdpbi10b3A6IC0wLjFyZW07XHJcbiAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAvLyBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ibHVlLWJnO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICBjb2xvcjogJHNlbGVjdC1vcHRpb24tY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgICAgLy90ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBtYXQtaWNvbntcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG4gICYuZGlzYWJsZWR7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbn1cclxuLm5lc3RlZC1tZW51IHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAmLm1hdC1tZW51LXBhbmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWUtYmc7XHJcblxyXG4gIH1cclxuXHJcbiAgYnV0dG9uLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICBjb2xvcjogJHNlbGVjdC1vcHRpb24tY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vdmV7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbjpkaXNhYmxlZHtcclxuICBjb2xvcjp3aGl0ZTtcclxufSIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIi8qbWl4aW5zICovXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRhbmltYXRpb24pIHtcbiAgLW1zLXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICB0cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtUm90YXRlKCkge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cblxuQG1peGluIGRpc3BsYXlmbGV4KCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGZsZXh2ZXJ0aWNhbCgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1peGluIHRleHQtdHJ1bmNhdGUoKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    28754:
    /*!****************************************************************************!*\
      !*** ./src/app/active-patients/admit-patients/admit-patients.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdmitPatientsComponent": function AdmitPatientsComponent() {
          return (
            /* binding */
            _AdmitPatientsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/active-patients.model */
      25720);
      /* harmony import */


      var _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admit-patient-modal/admit-patient-modal.component */
      74754);
      /* harmony import */


      var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../confirmation-dialog/confirmation-dialog.component */
      15001);
      /* harmony import */


      var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/life-signals/_models/ls-column.model */
      24856);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../patient-more-info-dialog/patient-more-info-dialog.component */
      41829);
      /* harmony import */


      var _forms_active_patients_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../forms/active-patients.form */
      27977);
      /* harmony import */


      var _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../patient-admitted-modal/patient-admitted-modal.component */
      63832);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../manager/active-patient-manager.service */
      60972);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/active-patients.service */
      65144);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services/authentication.service */
      7053);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-page-header/ls-page-header.component */
      63601);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-table/ls-table.component */
      16743);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../life-signals/_directives/ls-widget-name.directive */
      19861);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function AdmitPatientsComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r8.openAdmitPatientModalWith({
              key: "Active Patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", (ctx_r0.selectedPatients == null ? null : ctx_r0.selectedPatients.selected == null ? null : ctx_r0.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "admit-patients-module.button.admit_patient"), " ");
        }
      }

      function AdmitPatientsComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r10.openAdmitPatientModalWith({
              key: "Active Patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", (ctx_r2.selectedPatients == null ? null : ctx_r2.selectedPatients.selected == null ? null : ctx_r2.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "admit-patients-module.button.admit_patient"), " ");
        }
      }

      function AdmitPatientsComponent_mat_icon_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_mat_icon_23_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r12.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function AdmitPatientsComponent_ng_template_26_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function AdmitPatientsComponent_ng_template_26_div_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " close");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function AdmitPatientsComponent_ng_template_26_div_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " check");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function AdmitPatientsComponent_ng_template_26_div_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_ng_template_26_div_1_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);

            var row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r20.openStopMonitoringDialog(row_r14.patchId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r19.isSCorGC);
        }
      }

      function AdmitPatientsComponent_ng_template_26_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AdmitPatientsComponent_ng_template_26_div_1_mat_icon_1_Template, 2, 0, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AdmitPatientsComponent_ng_template_26_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AdmitPatientsComponent_ng_template_26_div_1_button_3_Template, 3, 1, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (row_r14 == null ? null : row_r14.patchDetails[0] == null ? null : row_r14.patchDetails[0].status) !== ctx_r16.monitoringStatus.STREAMING);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (row_r14 == null ? null : row_r14.patchDetails[0] == null ? null : row_r14.patchDetails[0].status) === ctx_r16.monitoringStatus.STREAMING);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (row_r14 == null ? null : row_r14.patchDetails[0] == null ? null : row_r14.patchDetails[0].status) === ctx_r16.monitoringStatus.STREAMING);
        }
      }

      function AdmitPatientsComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, AdmitPatientsComponent_ng_template_26_div_0_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AdmitPatientsComponent_ng_template_26_div_1_Template, 4, 3, "div", 28);
        }

        if (rf & 2) {
          var row_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !row_r14.patchId);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r14.patchId && (row_r14 == null ? null : row_r14.patchDetails == null ? null : row_r14.patchDetails.length));
        }
      }

      function AdmitPatientsComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "active-patients-module.table.activePatch"), " ");
        }
      }

      function AdmitPatientsComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r24.patchId || "-", " ");
        }
      }

      function AdmitPatientsComponent_ng_template_29_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_ng_template_29_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);

            var row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r28.deleteBiosensor(row_r25.patchDetails[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
      }

      function AdmitPatientsComponent_ng_template_29_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_ng_template_29_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);

            var row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

            return ctx_r31.openAdmitPatientModalWith({
              key: "edit-assign-patient",
              value: row_r25
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "admit-patients-module.button.assign_patient"), " ");
        }
      }

      function AdmitPatientsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, AdmitPatientsComponent_ng_template_29_button_0_Template, 3, 0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AdmitPatientsComponent_ng_template_29_button_1_Template, 3, 3, "button", 40);
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (row_r25.patchDetails == null ? null : row_r25.patchDetails.length) && (row_r25 == null ? null : row_r25.patchDetails[0] == null ? null : row_r25.patchDetails[0].status) !== ctx_r7.monitoringStatus.STREAMING && ctx_r7.isSCorGC);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.isClinicianCheck());
        }
      }

      var _AdmitPatientsComponent = /*#__PURE__*/function () {
        function _AdmitPatientsComponent(router, manager, dialog, service, authService, snackbar) {
          _classCallCheck(this, _AdmitPatientsComponent);

          this.router = router;
          this.manager = manager;
          this.dialog = dialog;
          this.service = service;
          this.authService = authService;
          this.snackbar = snackbar;
          this.selectedPatients = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__.SelectionModel(true);
          this.allPatients = new Array();
          this.unassignedPatients = new Array();
          this.patientsData = new Array();
          this.is_selected = [false];
          this.patientIdsToPass = new Array();
          this.assignPatient_Columns = [{
            id: "patchId",
            label: "Biosensor ID",
            headerClass: ["text-start"],
            style: "max-width: 240px; width: 240px;",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start", "bold-text"]
          }, {
            id: "status",
            label: "Monitoring",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }];
          this.config = {
            id: "admit-patients-table",
            rowSelectEnabled: true,
            actions: {
              show: true,
              headerLabel: "",
              "class": ["d-flex", "align-items-center", "justify-content-end", "me-3"],
              header: {
                style: "max-width: 50%; width: 50%;"
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
              active: "",
              direction: ""
            },
            tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_3__.TableState.DEFAULT
          };
          this.searchObject = {
            keyword: "",
            string: ""
          };
          this.filterStrings = new Array();
          this.tabletabs = new Array();
          this.selectedIds = [];
          this.monitoringStatus = _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.MonitoringStatus;
          this.isSCorGC = false;
          this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        }

        _createClass(_AdmitPatientsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            // this.route.queryParamMap.subscribe((params: ParamMap) => {
            //   this.selectedIds = (params.get("ids") || "").split(",");
            //   this.patientIdsToPass = this.selectedIds;
            // });
            this.modelChanged.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(function () {
              return _this10.serviceToCallWith();
            })).subscribe();
            this.initVariables();
            this.fetchTableData();
            this.reloadInterval = setInterval(function () {
              _this10.fetchTableData();
            }, 30000);
            this.unassignedPatientsSub = this.manager.selectUnassignedPatients().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(function (response) {
              _this10.error = response === null || response === void 0 ? void 0 : response.error;
              _this10.config = Object.assign(Object.assign({}, _this10.config), {
                page: Object.assign(Object.assign({}, _this10.config.page), {
                  length: (response === null || response === void 0 ? void 0 : response.unassignedPatients_total) || 0
                }),
                rowSelectEnabled: false,
                tableState: response === null || response === void 0 ? void 0 : response.tableState
              });
              _this10.unassignedPatients = (response === null || response === void 0 ? void 0 : response.UNASSIGNED_PATIENTS_DATA) || [];
            })).subscribe();
          }
        }, {
          key: "serviceToCallWith",
          value: function serviceToCallWith() {
            var ref;
            this.manager.fetchUnAssignedPatientsData(this.service.unassignedPatientsUrl(this.config, this.searchObject));
            ref = this.manager.selectUnassignedPatients();
            return ref;
          }
        }, {
          key: "search",
          value: function search() {
            var _a;

            this.searchObject.keyword = 'patchId';

            if ((_a = this.searchObject) === null || _a === void 0 ? void 0 : _a.string) {
              this.config.page.pageIndex = 0;
            }

            this.modelChanged.next(JSON.stringify(this.searchObject));
            this.selectedPatients.clear();
          }
        }, {
          key: "labelPatches",
          value: function labelPatches(row) {
            var _a;

            if ((_a = row.patchIds) === null || _a === void 0 ? void 0 : _a.length) {
              return row.patchIds.map(function (p) {
                return p.deviceId.toUpperCase();
              }).join(", ");
            } else {
              return "-";
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "initVariables",
          value: function initVariables() {
            for (var i in _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForAssignPatient) {
              this.filterStrings.push({
                text: _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient[i],
                value: i
              });
            }

            this.tabletabs.push(_models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsTabs.ASSIGN_PATIENT);
          }
        }, {
          key: "fetchTableData",
          value: function fetchTableData() {
            this.getUnassignedPatientData();
          }
        }, {
          key: "isSelected",
          value: function isSelected(row, selection) {
            return selection.selected.map(function (s) {
              return s.patchId;
            }).includes(row.patchId);
          }
        }, {
          key: "isClinicianCheck",
          value: function isClinicianCheck() {
            var role = this.authService.getRoles();

            if (role.indexOf("GC") > -1 || role.indexOf("SC") > -1) {
              this.isSCorGC = true;
            }

            return role.indexOf("GC") > -1;
          }
        }, {
          key: "resetTable",
          value: function resetTable() {
            this.searchObject = {
              keyword: null,
              string: null
            };
            this.config = Object.assign(Object.assign({}, this.config), {
              page: Object.assign(Object.assign({}, this.config.page || {}), {
                pageIndex: 0,
                length: undefined
              })
            });
          }
        }, {
          key: "getUnassignedPatientData",
          value: function getUnassignedPatientData() {
            var _a, _b, _c, _d, _e, _f, _g;

            if (!this.config.sort.active || !this.config.sort.direction) {
              this.config.sort.active = "";
              this.config.sort.direction = "";
            }

            var url = "patches/unassigned?page=".concat(this.config.page.pageIndex + 1, "&size=").concat(this.config.page.pageSize);

            if (this.config.sort.active && this.config.sort.direction) {
              url = "".concat(url, "&sortBy=").concat((_a = this.config.sort) === null || _a === void 0 ? void 0 : _a.active, ":").concat((_b = this.config.sort) === null || _b === void 0 ? void 0 : _b.direction);
            }

            if (this.searchObject && ((_c = this.searchObject) === null || _c === void 0 ? void 0 : _c.keyword) && ((_d = this.searchObject) === null || _d === void 0 ? void 0 : _d.string)) {
              url = "".concat(url, "&").concat((_f = (_e = this.searchObject) === null || _e === void 0 ? void 0 : _e.keyword) === null || _f === void 0 ? void 0 : _f.toLowerCase(), "=").concat((_g = this.searchObject) === null || _g === void 0 ? void 0 : _g.string);
            }

            this.manager.fetchUnAssignedPatientsData(url);
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            this.config = Object.assign(Object.assign({}, this.config), {
              page: Object.assign(Object.assign({}, this.config.page), {
                pageIndex: event.pageIndex,
                pageSize: event.pageSize
              })
            }); //this.selectedPatients.clear();

            this.fetchTableData();
          }
        }, {
          key: "onPatientsSelected",
          value: function onPatientsSelected(e) {
            this.selectedPatients = e;
            /* this.patientIdsToPass = new Array();
             let biosensorPatientData = (e.selected || []).filter(s => s?.activePatch !== undefined && s?.activePatch !== "" && s?.activePatch !== null);
             biosensorPatientData.forEach(e => {
               if (!this.patientIdsToPass.includes(e?.patientId))
                 this.patientIdsToPass.push(e?.patientId);
             });*/
          }
        }, {
          key: "getActivePatches",
          value: function getActivePatches(selected) {
            return (selected || []).filter(function (s) {
              return (s === null || s === void 0 ? void 0 : s.activePatch) !== undefined && (s === null || s === void 0 ? void 0 : s.activePatch) !== "" && (s === null || s === void 0 ? void 0 : s.activePatch) !== null;
            });
          }
        }, {
          key: "onSortChange",
          value: function onSortChange(event) {
            var activeKey = event.active === 'deviceIds' ? 'thirdPartyDevices' : event.active;
            this.config = Object.assign(Object.assign({}, this.config), {
              sort: {
                active: activeKey,
                direction: event.direction
              }
            }); //this.config.sort.active = event.active;
            //this.config.sort.direction = event.direction;

            this.selectedPatients.clear();
            this.fetchTableData();
          }
        }, {
          key: "goBackToSummary",
          value: function goBackToSummary() {
            this.router.navigate(["summary"]);
          }
        }, {
          key: "openAdmitPatientModalWith",
          value: function openAdmitPatientModalWith(data) {
            var _this11 = this;

            var _a;

            switch (data.key) {
              case _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsTabs.ACTIVE_PATIENT:
                this.admitPatientModal().subscribe(function (resp) {
                  if (resp) {
                    _this11.getUnassignedPatientData();

                    _this11.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_6__.PatientAdmittedModalComponent, {
                      maxWidth: "90vw",
                      //minWidth: "320px",
                      width: "520px",
                      backdropClass: "backdropBackground",
                      disableClose: true,
                      autoFocus: false,
                      data: {
                        title: 'active-patients-module.dialog.patient_admitted'
                      }
                    });
                  }
                });
                break;

              case _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.ActivePatientsTabs.ASSIGN_PATIENT:
                this.admitPatientModal({
                  patchId: this.selectedPatients.selected[0]
                }).subscribe(function (resp) {
                  if (resp) {
                    _this11.getUnassignedPatientData();

                    _this11.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_6__.PatientAdmittedModalComponent, {
                      maxWidth: "90vw",
                      //minWidth: "320px",
                      width: "520px",
                      backdropClass: "backdropBackground",
                      disableClose: true,
                      autoFocus: false,
                      data: {
                        title: 'active-patients-module.dialog.patient_assigned'
                      }
                    });
                  }
                });
                break;

              case 'edit-assign-patient':
                if (this.validateBiosensor((_a = data === null || data === void 0 ? void 0 : data.value) === null || _a === void 0 ? void 0 : _a.patchId)) {
                  this.admitPatientModal({
                    patchId: data.value
                  }).subscribe(function (resp) {
                    if (resp) {
                      _this11.getUnassignedPatientData();

                      _this11.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_6__.PatientAdmittedModalComponent, {
                        maxWidth: "90vw",
                        //minWidth: "320px",
                        width: "520px",
                        backdropClass: "backdropBackground",
                        disableClose: true,
                        autoFocus: false,
                        data: {
                          title: 'active-patients-module.dialog.patient_assigned'
                        }
                      });
                    }
                  });
                } else {
                  this.snackbar.openSnackBar('errors.invalid_patchId', 'bottom', 'center', true);
                }

                break;
            }
          }
        }, {
          key: "admitPatientModal",
          value: function admitPatientModal(data) {
            var dailogRef = this.dialog.open(_admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__.AdmitPatientModalComponent, {
              maxWidth: "90vw",
              minWidth: "320px",
              width: "900px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: Object.assign({}, data)
            });
            return dailogRef.afterClosed();
          } //  /**This function is used to open Discahrge Patient dialog */

        }, {
          key: "openDischargeGroupDialog",
          value: function openDischargeGroupDialog(patientId) {
            var _this12 = this;

            var patientIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var patient = arguments.length > 2 ? arguments[2] : undefined;

            if (patient === null || patient === void 0 ? void 0 : patient.activePatch) {
              var dischargeDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "90vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "admit-patients-module.dialog.discharge_patient",
                  message: "admit-patients-module.dialog.discharge_and_stop_monitoring"
                }
              });
              dischargeDialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this12.manager.dischargePatient(patient.patientId);
                }
              });
            } else {
              var _dischargeDialog2 = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "90vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "admit-patients-module.dialog.discharge_patient",
                  message: "admit-patients-module.dialog.discharge_patient_message"
                }
              });

              _dischargeDialog2.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  if (patientIds.length > 0) {
                    patientIds.forEach(function (patient) {
                      _this12.manager.dischargePatient(patient.patientId);

                      _this12.selectedPatients.clear();
                    });
                  } else if (patientId) {
                    _this12.manager.dischargePatient(patientId);
                  }
                }
              });
            }
          }
        }, {
          key: "getThirdPartyDevices",
          value: function getThirdPartyDevices(list) {
            if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
              var deviceIds = "";
              list.forEach(function (element) {
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
          }
        }, {
          key: "openStopMonitoringDialog",
          value: function openStopMonitoringDialog(patchId) {
            var _this13 = this;

            var stopMonitoringDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "90vw",
              // minWidth: "500px",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: "admit-patients-module.dialog.stop_monitoring",
                message: "admit-patients-module.dialog.stop_monitoring_message"
              }
            });
            stopMonitoringDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this13.stopMonitoringUnassigned(patchId);
              }
            });
          }
        }, {
          key: "userRole",
          value: function userRole() {
            if (this.authService.getRoles()[0] === 'GC') {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "openBiosensorInfoModal",
          value: function openBiosensorInfoModal(row) {
            var _this14 = this;

            this.dialog.open(_patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PatientMoreInfoDialogComponent, {
              width: "700px",
              //minWidth: "700px",
              maxWidth: "95vw",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: _toConsumableArray(row.patchIds || [])
            }).afterClosed().subscribe(function (response) {
              if (response) {
                var patient = {
                  patient_id_mrn: row.patient_id_mrn,
                  first_name: row.first_name,
                  last_name: row.last_name,
                  email: row.email,
                  country_code: row.country_code,
                  mobile: row.mobile,
                  dob: row.dob ? row.dob : "",
                  age: parseInt(row.age),
                  sex: row.sex,
                  weight: parseInt(row.weight),
                  height: parseInt(row.height),
                  country: row.country,
                  zip_code: row.zip_code,
                  street_address_1: row.street_address_1,
                  street_address_2: row.street_address_2,
                  city: row.city,
                  state: row.state,
                  em_contact_name: row.em_contact_name,
                  em_contact_country_code: row.em_contact_country_code,
                  em_contact_number: row.em_contact_number,
                  fk_prescriber: row.fk_prescriber,
                  fk_technician: row.fk_technician,
                  fk_r_doctor: row.fk_r_doctor,
                  pri_approver_id: row.pri_approver_id,
                  final_approver_id: row.final_approver_id,
                  primary_indication: row.primary_indication,
                  monitoring_duration: row.monitoring_duration,
                  order_id: row.order_id,
                  pacemaker: row.pacemaker,
                  icd: row.icd,
                  additional_info: row.additional_info,
                  prescription_id: row.prescription_id,
                  billing_indication: row.billing_indication,
                  billing_method: row.billing_method,
                  location: row.location,
                  biosensor: row.biosensor,
                  status: row.status,
                  facility_id: row.facility_id,
                  created_by: row.created_by,
                  admissionId: row.admissionId,
                  primaryContact: row.primaryContact,
                  weightUnit: row.weightUnit,
                  heightUnit: row.heightUnit,
                  prescribingPhysician: row.prescribingPhysician,
                  technicianName: row.technicianName,
                  referalPhysician: row.referalPhysician,
                  interpPhysician: row.interpPhysician,
                  prelimInterpPhysician: row.prelimInterpPhysician,
                  locationGroup: row.locationGroup,
                  doctorId: row.doctorId,
                  cGroup: row.cGroup,
                  pGroup: row.pGroup,
                  patchIds: response,
                  deviceIds: row.deviceIds,
                  createdDateTime: row.createdDateTime,
                  startedOn: (0, _forms_active_patients_form__WEBPACK_IMPORTED_MODULE_5__.epoch)(row.createdDateTime),
                  procedureDuration: (0, _forms_active_patients_form__WEBPACK_IMPORTED_MODULE_5__.convertToMinutes)(row.procedureDuration),
                  estimatedDischarge: (0, _forms_active_patients_form__WEBPACK_IMPORTED_MODULE_5__.epoch)(row.estimatedDischarge) // let patient: NewPatient = {
                  //   patientId: row.patientId,
                  //   admissionId: row.admissionId,
                  //   dob: row.dob ? row.dob : "",
                  //   age: parseInt(row.age),
                  //   phoneNo: row.phoneNo,
                  //   primaryContact:row.primaryContact,
                  //   email: row.email,
                  //   gender: row.gender,
                  //   weight: parseInt(row.weight),
                  //   height: parseInt(row.height),
                  //   weightUnit: row.weightUnit,
                  //   heightUnit: row.heightUnit,
                  //   firstName: row.firstName,            
                  //   lastName: row.lastName,
                  //   country:row.country,
                  //   zipCode:row.zipCode,
                  //   street1:row.street1,
                  //   street2:row.street2,
                  //   city:row.city,
                  //   state:row.state,
                  //   emergencyContactName:row.emergencyContactName,
                  //   emergencyContactNumber:row.emergencyContactNumber,
                  //   prescribingPhysician:row.prescribingPhysician,
                  //   technicianName:row.technicianName,
                  //   referalPhysician:row.referalPhysician,
                  //   interpPhysician:row.interpPhysician,
                  //   prelimInterpPhysician:row.prelimInterpPhysician,
                  //   locationGroup:row.locationGroup,
                  //   primaryIndication:row.primaryIndication,
                  //   monitoringDuration:row.monitoringDuration,
                  //   orderId:row.orderId,
                  //   prescriptionId:row.prescriptionId,
                  //   additionalInfo:row.additionalInfo,
                  //   billingIndication:row.billingIndication,
                  //   billingMethod:row.billingMethod,
                  //   doctorId: row.doctorId,
                  //   cGroup: row.cGroup,
                  //   pGroup: row.pGroup,
                  //   patchIds: response,
                  //   deviceIds: row.deviceIds,
                  //   createdDateTime: row.createdDateTime,
                  //   startedOn: epoch(row.createdDateTime),
                  //   procedureDuration: convertToMinutes(row.procedureDuration),
                  //   estimatedDischarge: epoch(row.estimatedDischarge)

                };

                _this14.manager.updatePatient(patient);
              }
            });
          }
        }, {
          key: "validateBiosensor",
          value: function validateBiosensor(biosensorId) {
            var patternToMatch = /^[a-zA-Z]{1}[a-zA-Z0-9]*$/;
            return patternToMatch.test(biosensorId);
          }
        }, {
          key: "deletePatch",
          value: function deletePatch(patchId) {
            var _this15 = this;

            this.service.deletePatch(patchId).subscribe(function (res) {
              _this15.fetchTableData();
            }, function (error) {
              if (error) {
                _this15.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
              }
            });
          }
        }, {
          key: "deleteBiosensor",
          value: function deleteBiosensor(biosensor) {
            var _this16 = this;

            console.log(biosensor);
            var stopMonitoringDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "90vw",
              // minWidth: "500px",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: "admit-patients-module.dialog.delete_biosensor",
                message: biosensor.status === this.monitoringStatus.STREAMING ? "admit-patients-module.dialog.stop_monitoring_and_delete" : "admit-patients-module.dialog.delete_biosensor_message"
              }
            });
            stopMonitoringDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                if (biosensor.status === _this16.monitoringStatus.STREAMING) {
                  _this16.service.stopMonitoringUnassigned([biosensor.patchId]).subscribe(function (res) {
                    if (res.status === 'OK') {
                      _this16.deletePatch(biosensor.patchId);
                    } else {
                      _this16.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                    }
                  }, function (error) {
                    if (error) {
                      _this16.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                    }
                  });
                } else {
                  _this16.deletePatch(biosensor.patchId);
                }
              }
            });
          }
        }, {
          key: "stopMonitoringUnassigned",
          value: function stopMonitoringUnassigned(patchId) {
            var _this17 = this;

            this.service.stopMonitoringUnassigned([patchId]).subscribe(function (res) {
              if (res.status === 'OK') {
                _this17.fetchTableData();
              } else {
                _this17.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
              }
            }, function (error) {
              if (error) {
                _this17.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
              }
            });
          }
        }, {
          key: "alphaNumericsOnly",
          value: function alphaNumericsOnly(event) {
            var charsOnlyPattern = /^[a-zA-Z0-9]+$/;
            var key = event.key;

            if (charsOnlyPattern.test(key)) {
              return true;
            } else {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.reloadInterval);

            if (this.unassignedPatientsSub) {
              this.unassignedPatientsSub.unsubscribe();
            }
          }
        }]);

        return _AdmitPatientsComponent;
      }();

      _AdmitPatientsComponent.ɵfac = function AdmitPatientsComponent_Factory(t) {
        return new (t || _AdmitPatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_7__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_active_patients_service__WEBPACK_IMPORTED_MODULE_8__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_10__.SnackbarService));
      };

      _AdmitPatientsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
        type: _AdmitPatientsComponent,
        selectors: [["app-admit-patients"]],
        decls: 30,
        vars: 16,
        consts: [["type", "admit_patients"], ["page-actions", ""], [1, "d-flex", "justify-content-end", "me-4"], [1, "d-lg-flex", "d-md-none", "d-sm-none", "d-none", "button-group", "my-2"], ["mat-flat-button", "", "color", "accent", "class", "mx-1", 3, "disabled", "click", 4, "ngIf"], [1, "d-block", "d-lg-none", "my-2"], ["mat-icon-button", "", 1, "border", 3, "matMenuTriggerFor"], [1, "justify-content-center"], [1, "mobile-menu", "overflow-hidden", "d-block", "d-lg-none"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click", 4, "ngIf"], [1, "px-3"], [1, "table-scroll", "without-tab-table", "comman-table-users", "head-border"], [3, "config", "selection", "data", "columns", "error", "isSelected", "Id", "selectOnlyActive", "sortChange", "page", "selected"], ["table-header", ""], [1, "my-3", "row"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-5", "col-xxl-4"], ["appearance", "fill", 1, "search-form-field"], ["autocomplete", "off", "matInput", "", "type", "text", "id", "searchString", 3, "ngModel", "ngModelChange", "keypress"], ["class", "clear-icon", 3, "click", 4, "ngIf"], ["matSuffix", "", 3, "click"], ["lsWidgetName", "status"], ["lsWidgetName", "patchIdHeading"], ["lsWidgetName", "patchId"], ["lsWidgetName", "actions"], ["mat-flat-button", "", "color", "accent", 1, "mx-1", 3, "disabled", "click"], ["mat-menu-item", "", 3, "disabled", "click"], [1, "clear-icon", 3, "click"], ["class", "d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["color", "warn", "class", "mx-1 btn-boxed btn-no-shadow", 4, "ngIf"], ["class", "tick-icon mx-1 btn-boxed btn-no-shadow", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "class", "monitoring-icon mx-1 btn-boxed btn-no-shadow", 3, "disabled", "click", 4, "ngIf"], ["color", "warn", 1, "mx-1", "btn-boxed", "btn-no-shadow"], [1, "tick-icon", "mx-1", "btn-boxed", "btn-no-shadow"], ["mat-mini-fab", "", "color", "primary", 1, "monitoring-icon", "mx-1", "btn-boxed", "btn-no-shadow", 3, "disabled", "click"], ["alt", "bio sensor icon", "src", "assets/icons/biosensor.svg", 1, "me-2"], [1, "d-flex", "justify-content-center", "align-items-center", "ps-3"], [1, "me-2", "biosensor-id"], ["mat-flat-button", "", "color", "primary", "class", "btn-boxed px-2 btn-no-shadow me-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "class", "btn-no-shadow me-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "btn-boxed", "px-2", "btn-no-shadow", "me-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "btn-no-shadow", "me-2", 3, "click"]],
        template: function AdmitPatientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ls-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, AdmitPatientsComponent_button_4_Template, 3, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-menu", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, AdmitPatientsComponent_button_11_Template, 3, 4, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ls-table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sortChange", function AdmitPatientsComponent_Template_ls_table_sortChange_14_listener($event) {
              return ctx.onSortChange($event);
            })("page", function AdmitPatientsComponent_Template_ls_table_page_14_listener($event) {
              return ctx.onPageChange($event);
            })("selected", function AdmitPatientsComponent_Template_ls_table_selected_14_listener($event) {
              return ctx.onPatientsSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](15, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AdmitPatientsComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.searchObject.string = $event;
            })("ngModelChange", function AdmitPatientsComponent_Template_input_ngModelChange_22_listener() {
              return ctx.search();
            })("keypress", function AdmitPatientsComponent_Template_input_keypress_22_listener($event) {
              return ctx.alphaNumericsOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, AdmitPatientsComponent_mat_icon_23_Template, 2, 0, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdmitPatientsComponent_Template_mat_icon_click_24_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, AdmitPatientsComponent_ng_template_26_Template, 2, 2, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, AdmitPatientsComponent_ng_template_27_Template, 3, 3, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, AdmitPatientsComponent_ng_template_28_Template, 4, 1, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, AdmitPatientsComponent_ng_template_29_Template, 2, 2, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.config)("selection", ctx.selectedPatients)("data", ctx.unassignedPatients)("columns", ctx.assignPatient_Columns)("error", ctx.error)("isSelected", ctx.isSelected)("Id", "patchId")("selectOnlyActive", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 14, "admit-patients-module.search"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.searchObject.string);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.searchObject.string);
          }
        },
        directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_11__.LsPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenu, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__.LsTableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatSuffix, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__.LsWidgetNameDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe],
        styles: [".clear-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  right: 0rem;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.biosensor-id[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  text-align: center;\n}\n.indicator-icon[_ngcontent-%COMP%], .stop-monitoring[_ngcontent-%COMP%], .tick-icon[_ngcontent-%COMP%], .close-icon-cell[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  margin-right: 0.5rem;\n}\n.close-icon-cell[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.tick-icon[_ngcontent-%COMP%] {\n  color: #17d468;\n}\n.stop-monitoring[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.monitoring-icon[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  color: #fff;\n  background: #A55E64;\n  height: 2rem !important;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #043158 !important;\n}\n.btn-boxed.px-2[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n\n@media (min-width: 992px) and (max-width: 1050px) {\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 0.65rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWl0LXBhdGllbnRzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxtb2R1bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQ0dBLHlCQUFBO0FBc0VBLG9CQUFBO0FBd0NBLFdBQUE7QUFNQSxVQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBUUEsa0JBQUE7QUFJQSxjQUFBO0FBZUEsZUFBQTtBQUlBLGVBQUE7QUEwQkEsa0JBQUE7QUFRQSxpQkFBQTtBQVFBLDZCQUFBO0FBUUEsK0JBQUE7QUNyTkEsVUFBQTtBRktBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFZRjtBQVRFO0VBQ0UseUJBQUE7QUFZSjtBQVJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBV0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxxQkNpSEs7RURoSEwsb0JBQUE7QUFXRjtBQVJBO0VBQ0UsY0NIZTtBRGNqQjtBQVBBO0VBQ0UsY0NKaUI7QURjbkI7QUFOQTtFQUNFLGNDYmU7QURzQmpCO0FBTkE7RUFDRSw2QkFBQTtFQUNBLFdDM0NNO0VENENOLG1CQUFBO0VBQ0EsdUJBQUE7QUFTRjtBQU5BOzs7OztHQUFBO0FBT0E7RUFDRSxvQ0FBQTtBQVFGO0FBTkE7RUFBZ0IsZUFBQTtBQVVoQjtBQVJBLCtCQUFBO0FBR0k7RUFERjtJQUVJLG9CQUFBO0VBVUo7QUFDRiIsImZpbGUiOiJhZG1pdC1wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5ldyB2YXJpYWJsZSBkZWZpbmUgKi9cblxuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL21peGluc1wiO1xuXG4uY2xlYXItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICByaWdodDogMHJlbTtcbn1cbi5zZWFyY2gtZm9ybS1maWVsZCB7XG4gIGlucHV0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG5cbi5iaW9zZW5zb3ItaWQge1xuICB3aWR0aDogMy41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmRpY2F0b3ItaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogJG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uY2xvc2UtaWNvbi1jZWxsIHtcbiAgY29sb3I6ICRyZWQtZm9udC1jb2xvcjtcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XG59XG5cbi50aWNrLWljb24ge1xuICBjb2xvcjogJGdyZWVuLWZvbnQtY29sb3I7XG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xufVxuXG4uc3RvcC1tb25pdG9yaW5nIHtcbiAgY29sb3I6ICRyZWQtZm9udC1jb2xvcjtcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XG59XG4ubW9uaXRvcmluZy1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNBNTVFNjQ7XG4gIGhlaWdodDogMnJlbSFpbXBvcnRhbnQ7XG59XG5cbi8qLmFjdGl2ZS10YWJsZSB7XG4gIDo6bmctZGVlcCAuc2Nyb2xsLWFzc2lzdCB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM2MHB4KSAhaW1wb3J0YW50O1xuICB9XG5cbn0gKi9cblxudGFibGUubWF0LXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYi1iZy1jb2xvciAhaW1wb3J0YW50O1xufVxuLmJ0bi1ib3hlZC5weC0ye21pbi13aWR0aDogYXV0bzt9XG5cbi8qKioqIG1lYWRpYSBxdWVyeSBidXR0b24gKioqKiovXG4uYnV0dG9uLWdyb3VwIHtcbiAgYnV0dG9uIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgIHBhZGRpbmc6IDBweCAwLjY1cmVtO1xuICAgIH1cbiAgfVxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiLyptaXhpbnMgKi9cblxuQG1peGluIHRyYW5zaXRpb24oJGFuaW1hdGlvbikge1xuICAtbXMtdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIHRyYW5zaXRpb246ICRhbmltYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm1Sb3RhdGUoKSB7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG5AbWl4aW4gZGlzcGxheWZsZXgoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleHZlcnRpY2FsKCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSgpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"]
      });
      /***/
    },

    /***/
    9622:
    /*!****************************************************************!*\
      !*** ./src/app/active-patients/archived/archived.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArchivedComponent": function ArchivedComponent() {
          return (
            /* binding */
            _ArchivedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/active-patients.model */
      25720);
      /* harmony import */


      var _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admit-patient-modal/admit-patient-modal.component */
      74754);
      /* harmony import */


      var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../confirmation-dialog/confirmation-dialog.component */
      15001);
      /* harmony import */


      var _assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../assign-group-modal/assign-group-modal.component */
      3475);
      /* harmony import */


      var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/life-signals/_models/ls-column.model */
      24856);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../patient-more-info-dialog/patient-more-info-dialog.component */
      41829);
      /* harmony import */


      var _patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../patient-details-view-more/patient-details-view-more.component */
      54122);
      /* harmony import */


      var _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../patient-admitted-modal/patient-admitted-modal.component */
      63832);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      8876);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/notifications/notifications.component */
      66557);
      /* harmony import */


      var src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/add-event/add-event.component */
      45211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../manager/active-patient-manager.service */
      60972);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/active-patients.service */
      65144);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services/authentication.service */
      7053);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../manage-group/services/manage-groups.service */
      34887);
      /* harmony import */


      var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-page-header/ls-page-header.component */
      63601);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-table/ls-table.component */
      16743);
      /* harmony import */


      var _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared/nested-dropdown/nested-dropdown.component */
      88113);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../life-signals/_directives/ls-widget-name.directive */
      19861);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function ArchivedComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ArchivedComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r14.openAdmitPatientModalWith({
              key: "add-new-patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r0.selectedPatients == null ? null : ctx_r0.selectedPatients.selected == null ? null : ctx_r0.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "archived-module.button.all"));
        }
      }

      function ArchivedComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ArchivedComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r16.openAdmitPatientModalWith({
              key: "add-new-patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r1.selectedPatients == null ? null : ctx_r1.selectedPatients.selected == null ? null : ctx_r1.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "archived-module.button.all"));
        }
      }

      function ArchivedComponent_mat_icon_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ArchivedComponent_mat_icon_44_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r18.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function ArchivedComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r20 == null ? null : row_r20.patientId);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r20 == null ? null : row_r20.name);
        }
      }

      function ArchivedComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r21 == null ? null : row_r21.name);
        }
      }

      function ArchivedComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function ArchivedComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r23 == null ? null : row_r23.name);
        }
      }

      function ArchivedComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r24 == null ? null : row_r24.name);
        }
      }

      function ArchivedComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r25 == null ? null : row_r25.name);
        }
      }

      function ArchivedComponent_ng_template_53_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "archived-module.button.edit"));
        }
      }

      function ArchivedComponent_ng_template_53_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "archived-module.button.add_notes"));
        }
      }

      function ArchivedComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "mat-menu", 45, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ArchivedComponent_ng_template_53_button_5_Template, 3, 3, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ArchivedComponent_ng_template_53_button_6_Template, 3, 3, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.isClinicianCheck());

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.isScOrGc());
        }
      }

      function ArchivedComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function ArchivedComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function ArchivedComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      var _ArchivedComponent = /*#__PURE__*/function () {
        function _ArchivedComponent(manager, dialog, service, authService, snackbar, route, manageGroupService) {
          _classCallCheck(this, _ArchivedComponent);

          this.manager = manager;
          this.dialog = dialog;
          this.service = service;
          this.authService = authService;
          this.snackbar = snackbar;
          this.route = route;
          this.manageGroupService = manageGroupService;
          this.activePatients = new Array(); // Selection Variables

          this.selectedPatients = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.SelectionModel(true);
          this.selectedIds = new Set();
          this.isPhy = false;
          this.archived_Columns = [{
            id: "patientDetails",
            label: "PATIENT DETAILS",
            headerClass: ["text-start"],
            sortable: true,
            labelClass: "fw-bold",
            cellClass: []
          }, {
            id: "location",
            label: "Location",
            headerClass: ["text-start"],
            sortable: true,
            cellClass: []
          }, {
            id: "reportTime",
            label: "report time",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "prescriber",
            label: "prescriber",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "interpreter",
            label: "interpreter",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "reportType",
            label: "report type",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "view",
            label: "view",
            sortable: false,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "print",
            label: "print",
            sortable: false,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "download",
            label: "download",
            sortable: false,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }];
          this.config = {
            id: "active-patients-table",
            rowSelectEnabled: true,
            actions: {
              show: true,
              headerLabel: "",
              "class": ["d-flex", "align-items-center", "justify-content-end"],
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
              active: "patientid",
              direction: "desc"
            },
            tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__.TableState.DEFAULT
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
          this.monitoringStatus = _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.MonitoringStatus;
          this.groupsData$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject([]);
          this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
          this.groups$ = this.groupsData$.asObservable();
          this.locationGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "PHYSICAL";
            });
          }));
          this.clinicalGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "CLINICAL";
            });
          }));
        }

        _createClass(_ArchivedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            var roles = this.authService.getRoles() || [];
            ;
            if ((roles === null || roles === void 0 ? void 0 : roles.indexOf("PHY")) > -1) this.isPhy = true;
            this.getGroupDetails();
            this.modelChanged.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(500), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(function () {
              return _this18.serviceToCallWith();
            })).subscribe();
            this.initVariables();
            this.fetchTableData();
            var panelId = sessionStorage.getItem("panelId");

            if (panelId === null || panelId === void 0 ? void 0 : panelId.length) {
              this.service.getPanelDetails(panelId).then(function (patients) {
                var _iterator3 = _createForOfIteratorHelper(patients),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var patient = _step3.value;

                    if (patient.patchId) {
                      _this18.selectedIds.add(patient.patientId);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                if (_this18.activePatients.length && _this18.selectedIds.size) {
                  var _this18$selectedPatie;

                  (_this18$selectedPatie = _this18.selectedPatients).select.apply(_this18$selectedPatie, _toConsumableArray(_this18.activePatients.filter(function (pat) {
                    return _this18.selectedIds.has(pat.patientId);
                  })));
                }
              });
            }

            this.reloadInterval = setInterval(function () {
              _this18.fetchTableData();
            }, 30000);
            this.activePatientsSub = this.manager.selectActivePatient().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (response) {
              if (response === null || response === void 0 ? void 0 : response.tableState) {
                _this18.config = Object.assign(Object.assign({}, _this18.config), {
                  tableState: response === null || response === void 0 ? void 0 : response.tableState,
                  rowSelectEnabled: true,
                  page: Object.assign(Object.assign({}, _this18.config.page), {
                    length: response === null || response === void 0 ? void 0 : response.total
                  })
                });
              }

              _this18.error = response === null || response === void 0 ? void 0 : response.error;

              if (response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA) {
                _this18.activePatients = response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA.map(function (x) {
                  var patient = Object.assign(Object.assign({}, x), {
                    name: "".concat(x.firstName, " ").concat(x.lastName),
                    weightUnit: x.weightUnit.toUpperCase(),
                    heightUnit: x.heightUnit.toUpperCase()
                  });
                  return patient;
                });

                if (_this18.activePatients.length && _this18.selectedIds.size) {
                  var _this18$selectedPatie2;

                  (_this18$selectedPatie2 = _this18.selectedPatients).select.apply(_this18$selectedPatie2, _toConsumableArray(_this18.activePatients.filter(function (pat) {
                    return _this18.selectedIds.has(pat.patientId);
                  })));
                }
              }
            })).subscribe();
          }
        }, {
          key: "serviceToCallWith",
          value: function serviceToCallWith() {
            var ref;
            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
            ref = this.manager.selectActivePatient();
            return ref;
          }
        }, {
          key: "resetAndSearch",
          value: function resetAndSearch() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "search",
          value: function search() {
            var _a;

            this.searchObject.keyword = 'searchText';

            if ((_a = this.searchObject) === null || _a === void 0 ? void 0 : _a.string) {
              this.config.page.pageIndex = 0;
            } //this.selectedPatients.clear();


            this.modelChanged.next(JSON.stringify(this.searchObject));
          }
        }, {
          key: "searchByGroup",
          value: function searchByGroup(key, groupId) {
            if (key === 'CLINICAL') {
              this.filterObject.cGroupId = groupId;
            } else {
              this.filterObject.pGroupId = groupId;
            }

            this.config.page.pageIndex = 0;
            this.activePatients = undefined;
            this.modelChanged.next(JSON.stringify(this.filterObject));
          }
        }, {
          key: "clear",
          value: function clear() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "checkCharacters",
          value: function checkCharacters(event) {
            if (this.searchObject.keyword === "PATCHID" || this.searchObject.keyword === "PATIENTID") {
              var pattern = /^[a-zA-z0-9]$/;
              var key = event.key;

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
        }, {
          key: "initVariables",
          value: function initVariables() {
            for (var i in _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient) {
              this.filterStrings.push({
                text: _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient[i],
                value: i
              });
            }
          }
        }, {
          key: "fetchTableData",
          value: function fetchTableData() {
            this.getActivePatientData();
          }
        }, {
          key: "isSelected",
          value: function isSelected(row, selection) {
            return selection.selected.map(function (s) {
              return s.patientId;
            }).includes(row.patientId);
          }
        }, {
          key: "isClinicianCheck",
          value: function isClinicianCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1;
          }
        }, {
          key: "isGcorScCheck",
          value: function isGcorScCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "getActivePatientData",
          value: function getActivePatientData() {
            if (!this.config.sort.active || !this.config.sort.direction) {
              this.config.sort.active = "patientid";
              this.config.sort.direction = "desc";
            }

            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            this.config = Object.assign(Object.assign({}, this.config), {
              page: Object.assign(Object.assign({}, this.config.page), {
                pageIndex: event.pageIndex,
                pageSize: event.pageSize
              })
            });
            this.fetchTableData();
          }
        }, {
          key: "onPatientsSelected",
          value: function onPatientsSelected(e) {
            this.selectedPatients = e;
            var selected = new Set(e.selected.map(function (pat) {
              return pat.patientId;
            }));

            var _iterator4 = _createForOfIteratorHelper(this.activePatients),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var patientId = _step4.value.patientId;

                if (selected.has(patientId)) {
                  this.selectedIds.add(patientId);
                } else if (this.selectedIds.has(patientId)) {
                  this.selectedIds["delete"](patientId);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "onSortChange",
          value: function onSortChange(event) {
            var activeKey = event.active === 'deviceIds' ? 'thirdPartyDevices' : event.active;
            this.config = Object.assign(Object.assign({}, this.config), {
              sort: {
                active: activeKey,
                direction: event.direction
              }
            });
            this.selectedPatients.clear();
            this.fetchTableData();
          }
        }, {
          key: "openBiosensorModal",
          value: function openBiosensorModal(patientId, data) {
            var _this19 = this;

            this.service.getPatientBy(patientId).subscribe(function (patient) {
              var patches = {
                activePatch: patient.data.activePatch,
                patchIds: patient.data.patchIds,
                heading: "active-patients-module.dialog.more_info",
                readOnly: !_this19.isClinicianCheck()
              };

              _this19.dialog.open(_patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PatientMoreInfoDialogComponent, {
                width: "700px",
                //minWidth: "700px",
                maxWidth: "95vw",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: patches
              }).afterClosed().subscribe(function (response) {
                if (response) {
                  data['patchIds'] = response;

                  _this19.manager.updatePatient(data).subscribe(function (res) {
                    if (res === null || res === void 0 ? void 0 : res.error) {
                      if (res.error === "PATCHES_ALREADY_IN_USE") {
                        _this19.snackbar.openSnackBar("active-patients-module.errors.patchInUse", 'bottom', 'center', true);
                      } else if (res.error === "MORE_THAN_ONE_PATCH_STREAMING") {
                        _this19.snackbar.openSnackBar("active-patients-module.errors.more_than_one_patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATCH_STATE_STREAMING") {
                        _this19.snackbar.openSnackBar("active-patients-module.errors.patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATIENT_ALREADY_DISCHARGED") {
                        _this19.snackbar.openSnackBar("errors.patient_discharged", 'bottom', 'center', true);
                      } else if (res.error === "ADMITTED_ON_TIME_IS_INVALID") {
                        _this19.snackbar.openSnackBar("active-patients-module.errors.admittedOn_invalid", 'bottom', 'center', true);
                      } else {
                        _this19.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                      }
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "openAdmitPatientModalWith",
          value: function openAdmitPatientModalWith(data) {
            var _this20 = this;

            switch (data.key) {
              case 'add-new-patient':
                this.admitPatientModal().subscribe(function (resp) {
                  if (resp) {
                    _this20.getActivePatientData();

                    _this20.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                      maxWidth: "96vw",
                      //minWidth: "320px",
                      width: "520px",
                      backdropClass: "backdropBackground",
                      disableClose: true,
                      autoFocus: false,
                      data: {
                        title: 'active-patients-module.dialog.patient_admitted'
                      }
                    });
                  }
                });
                break;

              case 'edit-active-patient':
                this.service.getPatientBy(data === null || data === void 0 ? void 0 : data.value).subscribe(function (patient) {
                  _this20.admitPatientModal({
                    activePatient: patient === null || patient === void 0 ? void 0 : patient.data,
                    mode: 'EDIT'
                  }).subscribe(function (resp) {
                    if (resp) {
                      _this20.getActivePatientData();

                      _this20.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                        maxWidth: "96vw",
                        //minWidth: "320px",
                        width: "520px",
                        backdropClass: "backdropBackground",
                        disableClose: true,
                        autoFocus: false,
                        data: {
                          title: 'active-patients-module.dialog.patient_edited'
                        }
                      });
                    }
                  });
                });
                break;
            }
          } //This function is used to open add event dialog 

        }, {
          key: "addNewEvent",
          value: function addNewEvent(patient) {
            var _a, _b;

            console.log(patient === null || patient === void 0 ? void 0 : patient.patientId);
            console.log((_a = patient === null || patient === void 0 ? void 0 : patient.patchIds[0]) === null || _a === void 0 ? void 0 : _a.startTime);
            var addEvent = this.dialog.open(src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__.AddEventComponent, {
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
        }, {
          key: "admitPatientModal",
          value: function admitPatientModal(data) {
            var dailogRef = this.dialog.open(_admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__.AdmitPatientModalComponent, {
              maxWidth: "96vw",
              minWidth: "320px",
              width: "900px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: Object.assign({}, data)
            });
            return dailogRef.afterClosed();
          }
        }, {
          key: "alertSettings",
          value: function alertSettings(selectedPatient) {
            var dailogRef = this.dialog.open(src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsComponent, {
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

        }, {
          key: "openDischargeGroupDialog",
          value: function openDischargeGroupDialog(patientId) {
            var _this21 = this;

            var patientIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var patient = arguments.length > 2 ? arguments[2] : undefined;

            if (patient === null || patient === void 0 ? void 0 : patient.activePatch) {
              var dischargeDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_and_stop_monitoring",
                  stop_biosensor: false
                }
              });
              dischargeDialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this21.manager.dischargePatient(patient.patientId);

                  _this21.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });

                  _this21.fetchTableData();
                }
              });
            } else {
              var _dischargeDialog3 = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_patient_message",
                  stop_biosensor: false
                }
              });

              _dischargeDialog3.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  if (patientIds.length > 0) {
                    patientIds.forEach(function (patient) {
                      _this21.manager.dischargePatient(patient.patientId);

                      _this21.selectedPatients.clear();
                    });
                  } else if (patientId) {
                    _this21.manager.dischargePatient(patientId);
                  }

                  _this21.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "getThirdPartyDevices",
          value: function getThirdPartyDevices(list) {
            if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
              var deviceIds = "";
              list.forEach(function (element) {
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
          }
        }, {
          key: "openStopMonitoringDialog",
          value: function openStopMonitoringDialog(patientId) {
            var _this22 = this;

            var stopMonitoringDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              // minWidth: "500px",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: "active-patients-module.dialog.stop_monitoring",
                message: "active-patients-module.dialog.stop_monitoring_message",
                stop_biosensor: true
              }
            });
            stopMonitoringDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this22.manager.stopMonitoring(patientId);
              }
            });
          } // /**This function is used to open dialog */

        }, {
          key: "openAssignGroupModal",
          value: function openAssignGroupModal(patient) {
            var _this23 = this;

            if (!this.isGcorScCheck()) {
              return;
            }

            this.dialog.open(_assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__.AssignGroupModalComponent, {
              maxWidth: "96vw",
              //minWidth: "500px",
              width: "700px",
              backdropClass: "backdropBackground",
              disableClose: true,
              panelClass: "assign-group-modal",
              data: Object.assign({}, patient)
            }).afterClosed().subscribe(function (group) {
              if (group) {
                var assignGroupObj = {
                  patientId: patient.patientId,
                  cGroup: group.cGroup,
                  pGroup: group.pGroup,
                  admissionId: patient.admissionId
                };

                _this23.manager.assignGroup(assignGroupObj);

                setTimeout(function () {
                  _this23.getActivePatientData();
                }, 500);
              }
            }); //this.getActivePatientData();
          }
        }, {
          key: "patientViewMore",
          value: function patientViewMore(row) {
            this.dialog.open(_patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__.PatientDetailsViewMoreComponent, {
              width: "900px",
              maxWidth: "96vw",
              //height:"500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: row
            });
          }
        }, {
          key: "getGroupDetails",
          value: function getGroupDetails() {
            var _this24 = this;

            this.manageGroupService.fetch().subscribe(function (groups) {
              if (groups['data'].length > 0) {
                _this24.groupsData$.next(groups['data']);
              }
            });
          }
        }, {
          key: "transferRelay",
          value: function transferRelay(activePatch, type) {
            var _this25 = this;

            var confirmDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: type === 'MPR' ? "active-patients-module.button.transfer_mpr" : "active-patients-module.button.transfer_spr",
                message: type === 'MPR' ? "active-patients-module.dialog.transfer_mpr_confirm" : "active-patients-module.dialog.transfer_spr_confirm"
              }
            });
            confirmDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this25.service.transferRelay(activePatch).subscribe(function (res) {
                  if (res.message === 'TRANSFER_REQUEST_INITIATED') {
                    _this25.snackbar.openSnackBar("active-patients-module.errors.transfer_initiated", 'bottom', 'center', true);
                  } else {
                    _this25.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                  }
                });
              }
            });
          }
        }, {
          key: "isScOrGc",
          value: function isScOrGc() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            clearInterval(this.reloadInterval);
            (_a = this.activePatientsSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return _ArchivedComponent;
      }();

      _ArchivedComponent.ɵfac = function ArchivedComponent_Factory(t) {
        return new (t || _ArchivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__.ManageGroupsService));
      };

      _ArchivedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _ArchivedComponent,
        selectors: [["app-archived"]],
        decls: 57,
        vars: 51,
        consts: [["type", "archived"], ["page-actions", ""], [1, "d-flex", "justify-content-end", "me-4"], [1, "d-lg-flex", "d-md-none", "d-sm-none", "d-none", "my-2"], ["mat-flat-button", "", "color", "blue", "class", "mx-1", 3, "disabled", "click", 4, "ngIf"], [1, "d-block", "d-lg-none", "my-2"], ["mat-icon-button", "", 1, "border", 3, "matMenuTriggerFor"], [1, "justify-content-enter"], [1, "mobile-menu", "overflow-hidden", "d-block", "d-lg-none"], ["menu", "matMenu"], [1, "px-3"], [1, "table-scroll", "without-tab-table", "comman-table-users", "head-border"], [3, "config", "selection", "data", "columns", "error", "isSelected", "Id", "selectOnlyActive", "sortChange", "page", "selected"], ["table-header", ""], [1, "my-3", "row", "align-items-end", "position-relative", "ps-0", "ps-lg-5"], [1, "mat-label", "filter-label", "d-lg-flex", "d-none", "align-items-center"], [1, "col-sm-12", "col-md-12", "col-lg-9", "col-xl-9", "col-xxl-8", "select-col", "discharge-select-dropdown"], [1, "row"], [1, "col-12", "col-sm-3", "col-md-5", "col-xl-3", "mt-0", "mt-md-2", "mt-lg-0"], ["key", "groupId", "displayKey", "name", 1, "nested-selectfilter", "bg-selectfilter", 3, "selectedValue", "label", "options", "showSelect", "selected"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-3", "col-xxl-4", "mt-2", "mt-lg-0"], ["appearance", "fill", "floatLabel", "never", 1, "search-form-field"], ["matInput", "", "type", "search", "id", "searchString", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["class", "clear-icon", 3, "click", 4, "ngIf"], ["matSuffix", "", 1, "default-cursor"], ["lsWidgetName", "patientDetails"], ["lsWidgetName", "location"], ["lsWidgetName", "reportTime"], ["lsWidgetName", "prescriber"], ["lsWidgetName", "interpreter"], ["lsWidgetName", "reportType"], ["lsWidgetName", "actions"], ["lsWidgetName", "view"], ["lsWidgetName", "print"], ["lsWidgetName", "download"], ["mat-flat-button", "", "color", "blue", 1, "mx-1", 3, "disabled", "click"], ["src", "assets/icons/download-icon.svg"], [1, "move"], ["src", "assets/icons/print_icon.png"], [1, "clear-icon", 3, "click"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "me-2"], [1, "d-flex", "justify-content-start", "align-items-center", "bold-text"], ["mat-icon-button", "", 1, "shadow-none", 3, "matMenuTriggerFor"], [1, "justify-content-center"], ["xPosition", "before", 1, "setting-card-menu", "profile-card-menu"], ["patientMenu", "matMenu"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", ""], ["type", "button"], ["src", "assets/icons/pdf.png"], ["src", "assets/icons/print.png"], ["src", "assets/icons/download.png"]],
        template: function ArchivedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ls-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, ArchivedComponent_button_4_Template, 5, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ArchivedComponent_button_5_Template, 5, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "mat-menu", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "ls-table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("sortChange", function ArchivedComponent_Template_ls_table_sortChange_14_listener($event) {
              return ctx.onSortChange($event);
            })("page", function ArchivedComponent_Template_ls_table_page_14_listener($event) {
              return ctx.onPageChange($event);
            })("selected", function ArchivedComponent_Template_ls_table_selected_14_listener($event) {
              return ctx.onPatientsSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](15, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function ArchivedComponent_Template_app_nested_dropdown_selected_23_listener($event) {
              return ctx.searchByGroup("LOCATION", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function ArchivedComponent_Template_app_nested_dropdown_selected_27_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function ArchivedComponent_Template_app_nested_dropdown_selected_31_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](33, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function ArchivedComponent_Template_app_nested_dropdown_selected_35_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](37, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](43, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function ArchivedComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.searchObject.string = $event;
            })("keyup", function ArchivedComponent_Template_input_keyup_43_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](44, ArchivedComponent_mat_icon_44_Template, 2, 0, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](46, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](47, ArchivedComponent_ng_template_47_Template, 7, 2, "ng-template", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](48, ArchivedComponent_ng_template_48_Template, 3, 1, "ng-template", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](49, ArchivedComponent_ng_template_49_Template, 6, 0, "ng-template", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](50, ArchivedComponent_ng_template_50_Template, 3, 1, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](51, ArchivedComponent_ng_template_51_Template, 3, 1, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](52, ArchivedComponent_ng_template_52_Template, 3, 1, "ng-template", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](53, ArchivedComponent_ng_template_53_Template, 7, 3, "ng-template", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](54, ArchivedComponent_ng_template_54_Template, 2, 0, "ng-template", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](55, ArchivedComponent_ng_template_55_Template, 4, 0, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](56, ArchivedComponent_ng_template_56_Template, 4, 0, "ng-template", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("config", ctx.config)("selection", ctx.selectedPatients)("data", ctx.activePatients)("columns", ctx.archived_Columns)("error", ctx.error)("isSelected", ctx.isSelected)("Id", "patientId")("selectOnlyActive", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](19, 31, "archived-module.filter"));

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.pGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](24, 33, "archived-module.location"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](25, 35, ctx.locationGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](28, 37, "archived-module.prescriber"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](29, 39, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](32, 41, "archived-module.interpreter"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](33, 43, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](36, 45, "archived-module.print_status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](37, 47, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](42, 49, "archived-module.search"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.searchObject.string);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.searchObject.string);
          }
        },
        directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__.LsPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenu, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__.LsTableComponent, _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.NestedDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatSuffix, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__.LsWidgetNameDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuItem],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe],
        styles: [".clear-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  right: 0rem;\n}\n.monitoring-icon[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  color: #fff;\n  background: #A55E64;\n  height: 2rem !important;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.biosensor-id[_ngcontent-%COMP%] {\n  width: 4rem;\n  text-align: left;\n  font-weight: 700;\n  padding-left: 5px;\n}\n.indicator-icon[_ngcontent-%COMP%], .stop-monitoring[_ngcontent-%COMP%], .tick-icon[_ngcontent-%COMP%], .close-icon-cell[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  margin-right: 0.5rem;\n}\n.close-icon-cell[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.tick-icon[_ngcontent-%COMP%] {\n  color: #17d468;\n}\n.stop-monitoring[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.icon-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #043158 !important;\n}\n\n@media (min-width: 992px) and (max-width: 1050px) {\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 0.65rem;\n  }\n}\n.move[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdmVkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxtb2R1bGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQ0dBLHlCQUFBO0FBc0VBLG9CQUFBO0FBd0NBLFdBQUE7QUFNQSxVQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBUUEsa0JBQUE7QUFJQSxjQUFBO0FBZUEsZUFBQTtBQUlBLGVBQUE7QUEwQkEsa0JBQUE7QUFRQSxpQkFBQTtBQVFBLDZCQUFBO0FBUUEsK0JBQUE7QUNyTkEsVUFBQTtBRktBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFZRjtBQVRBO0VBQ0UsNkJBQUE7RUFDQSxXQ2JNO0VEY04sbUJBQUE7RUFDQSx1QkFBQTtBQVlGO0FBVEU7RUFDRSx5QkFBQTtBQVlKO0FBVEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkN1R2dCO0VEdEdoQixpQkFBQTtBQVlGO0FBVEE7RUFDRSxhQUFBO0VBQ0EscUJDeUdLO0VEeEdMLG9CQUFBO0FBWUY7QUFUQTtFQUNFLGNDWGU7QUR1QmpCO0FBUkE7RUFDRSxjQ1ppQjtBRHVCbkI7QUFQQTtFQUNFLGNDckJlO0FEK0JqQjtBQU5BO0VBQ0UsZUFBQTtBQVNGO0FBTkE7Ozs7O0dBQUE7QUFPQTtFQUNFLG9DQUFBO0FBUUY7QUFMQSwrQkFBQTtBQUdJO0VBREY7SUFFSSxvQkFBQTtFQU9KO0FBQ0Y7QUFKQTtFQUNFLGtCQUFBO0FBT0YiLCJmaWxlIjoiYXJjaGl2ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBuZXcgdmFyaWFibGUgZGVmaW5lICovXHJcblxyXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy9taXhpbnNcIjtcclxuXHJcbi5jbGVhci1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gIHJpZ2h0OiAwcmVtO1xyXG59XHJcbi8vbW9uaXRvcmluZy1pY29uXHJcbi5tb25pdG9yaW5nLWljb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI0E1NUU2NDtcclxuICBoZWlnaHQ6IDJyZW0haW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2gtZm9ybS1maWVsZCB7XHJcbiAgaW5wdXQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuLmJpb3NlbnNvci1pZCB7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTcwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmluZGljYXRvci1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogJG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uLWNlbGwge1xyXG4gIGNvbG9yOiAkcmVkLWZvbnQtY29sb3I7XHJcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XHJcbn1cclxuXHJcbi50aWNrLWljb24ge1xyXG4gIGNvbG9yOiAkZ3JlZW4tZm9udC1jb2xvcjtcclxuICBAZXh0ZW5kIC5pbmRpY2F0b3ItaWNvbjtcclxufVxyXG5cclxuLnN0b3AtbW9uaXRvcmluZyB7XHJcbiAgY29sb3I6ICRyZWQtZm9udC1jb2xvcjtcclxuICBAZXh0ZW5kIC5pbmRpY2F0b3ItaWNvbjtcclxufVxyXG5cclxuLmljb24tY3Vyc29ye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyouYWN0aXZlLXRhYmxlIHtcclxuICA6Om5nLWRlZXAgLnNjcm9sbC1hc3Npc3Qge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM2MHB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn0gKi9cclxuXHJcbnRhYmxlLm1hdC10YWJsZSB0aGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYi1iZy1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKioqKiBtZWFkaWEgcXVlcnkgYnV0dG9uICoqKioqL1xyXG4uYnV0dG9uLWdyb3VwIHtcclxuICBidXR0b24ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAwLjY1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW92ZXtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIi8qbWl4aW5zICovXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRhbmltYXRpb24pIHtcbiAgLW1zLXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICB0cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtUm90YXRlKCkge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cblxuQG1peGluIGRpc3BsYXlmbGV4KCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGZsZXh2ZXJ0aWNhbCgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1peGluIHRleHQtdHJ1bmNhdGUoKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    3475:
    /*!************************************************************************************!*\
      !*** ./src/app/active-patients/assign-group-modal/assign-group-modal.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignGroupModalComponent": function AssignGroupModalComponent() {
          return (
            /* binding */
            _AssignGroupModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../manager/active-patient-manager.service */
      60972);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/manage-group/services/manage-groups.service */
      34887);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/nested-dropdown/nested-dropdown.component */
      88113);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function AssignGroupModalComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cgroup_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cgroup_r1.groupId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", cgroup_r1 == null ? null : cgroup_r1.name, " ");
        }
      }

      var _AssignGroupModalComponent = /*#__PURE__*/function () {
        function _AssignGroupModalComponent(data, dialogRef, manager, formBuilder, manageGroupService) {
          _classCallCheck(this, _AssignGroupModalComponent);

          this.data = data;
          this.dialogRef = dialogRef;
          this.manager = manager;
          this.formBuilder = formBuilder;
          this.manageGroupService = manageGroupService;
          this.cGroup$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
          this.selectedLocationGroup = data === null || data === void 0 ? void 0 : data.pGroup;
          this.selectedClinicalGroup = data === null || data === void 0 ? void 0 : data.cGroup;
          this.a_groups$ = this.cGroup$.asObservable();
          this.locationGroups$ = this.a_groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "PHYSICAL";
            });
          }));
          this.clinicalGroups$ = this.a_groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "CLINICAL";
            });
          }));
        }

        _createClass(_AssignGroupModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b;

            this.loadGroups();
            this.assignGroupForm = this.formBuilder.group({
              pGroup: '',
              clinicalGroup: ''
            });

            if (this.data) {
              this.setSelectedValue();
              console.log((_a = this.data) === null || _a === void 0 ? void 0 : _a.pGroup, (_b = this.data) === null || _b === void 0 ? void 0 : _b.cGroup);
            }
          }
        }, {
          key: "setSelectedValue",
          value: function setSelectedValue() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

            var pGroupId = ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.pGroup) === null || _b === void 0 ? void 0 : _b.groupId) ? (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.pGroup) === null || _d === void 0 ? void 0 : _d.groupId : (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.pGroup) === null || _f === void 0 ? void 0 : _f.id;
            var cGroupId = ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.cGroup) === null || _h === void 0 ? void 0 : _h.groupId) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.cGroup) === null || _k === void 0 ? void 0 : _k.groupId : (_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.cGroup) === null || _m === void 0 ? void 0 : _m.id;
            this.assignGroupForm.patchValue({
              pGroup: pGroupId
            });
            this.assignGroupForm.patchValue({
              clinicalGroup: cGroupId
            });
          }
        }, {
          key: "loadGroups",
          value: function loadGroups() {
            var _this26 = this;

            //this.groups$ = this.manager.fetchGroups();
            this.groupsSubscription = this.manageGroupService.fetch().subscribe(function (groups) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

              if (groups['data'].length > 0) {
                console.log(groups['data']);
                var grps = groups['data'];

                if (!grps.find(function (group) {
                  var _a, _b;

                  return group.groupId === ((_b = (_a = _this26.data) === null || _a === void 0 ? void 0 : _a.cGroup) === null || _b === void 0 ? void 0 : _b.id);
                }) && ((_b = (_a = _this26.data) === null || _a === void 0 ? void 0 : _a.cGroup) === null || _b === void 0 ? void 0 : _b.id)) {
                  var patientGroup = {
                    groupId: (_c = _this26.data) === null || _c === void 0 ? void 0 : _c.cGroup.id,
                    name: (_d = _this26.data) === null || _d === void 0 ? void 0 : _d.cGroup.name,
                    type: 'CLINICAL'
                  };
                  grps = [patientGroup].concat(_toConsumableArray(grps));
                }

                if (!grps.find(function (group) {
                  var _a, _b;

                  return group.groupId === ((_b = (_a = _this26.data) === null || _a === void 0 ? void 0 : _a.pGroup) === null || _b === void 0 ? void 0 : _b.id);
                }) && ((_f = (_e = _this26.data) === null || _e === void 0 ? void 0 : _e.pGroup) === null || _f === void 0 ? void 0 : _f.id)) {
                  var _patientGroup = {
                    groupId: (_h = (_g = _this26.data) === null || _g === void 0 ? void 0 : _g.pGroup) === null || _h === void 0 ? void 0 : _h.id,
                    name: (_k = (_j = _this26.data) === null || _j === void 0 ? void 0 : _j.pGroup) === null || _k === void 0 ? void 0 : _k.name,
                    type: 'PHYSICAL'
                  };
                  grps = [_patientGroup].concat(_toConsumableArray(grps));
                }

                _this26.cGroup$.next(grps);
              }
            });
          }
        }, {
          key: "getClinicalGroups",
          value: function getClinicalGroups() {
            return this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (groups) {
              return (groups === null || groups === void 0 ? void 0 : groups.CLINICAL_GROUPS) || [];
            }));
          }
        }, {
          key: "getLocationGroups",
          value: function getLocationGroups() {
            return this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (groups) {
              return (groups === null || groups === void 0 ? void 0 : groups.PHYSICAL_GROUPS) || [];
            }));
          }
        }, {
          key: "onLocationSelected",
          value: function onLocationSelected(event) {
            this.assignGroupForm.controls.pGroup.patchValue(event);
          }
        }, {
          key: "save",
          value: function save(formData) {
            var groupData = this.cGroup$.getValue();
            var pGroupObj = null;
            var cGroupObj = null;

            if (formData.value.pGroup === '') {
              pGroupObj = null;
            } else {
              if ((groupData === null || groupData === void 0 ? void 0 : groupData.length) > 0) {
                var filteredObj = groupData.filter(function (x) {
                  if (formData.value.pGroup === x.groupId) {
                    return x;
                  }
                });

                if (filteredObj[0]) {
                  var obj = {
                    id: filteredObj[0].groupId,
                    name: filteredObj[0].name
                  };
                  pGroupObj = obj;
                } else {
                  pGroupObj = null;
                }
              }
            }

            if (formData.value.clinicalGroup === '') {
              cGroupObj = null;
            } else {
              if ((groupData === null || groupData === void 0 ? void 0 : groupData.length) > 0) {
                var _filteredObj = groupData.filter(function (x) {
                  if (formData.value.clinicalGroup === x.groupId) {
                    return x;
                  }
                });

                if (_filteredObj[0]) {
                  var _obj = {
                    id: _filteredObj[0].groupId,
                    name: _filteredObj[0].name
                  };
                  cGroupObj = _obj;
                } else {
                  cGroupObj = null;
                }
              }
            }

            var group = {
              pGroup: pGroupObj,
              cGroup: cGroupObj
            };
            this.dialogRef.close(group);
          }
        }]);

        return _AssignGroupModalComponent;
      }();

      _AssignGroupModalComponent.ɵfac = function AssignGroupModalComponent_Factory(t) {
        return new (t || _AssignGroupModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_0__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsService));
      };

      _AssignGroupModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AssignGroupModalComponent,
        selectors: [["app-assign-group-modal"]],
        decls: 49,
        vars: 45,
        consts: [[1, "dialog-header"], [1, "assign-header"], [1, "list-item", "ms-0"], ["mat-dialog-title", ""], [1, "pid", "d-block"], [1, "list-item", "patient-group"], [1, "time-group"], [1, "mat-dialog-popup", "assign-group-dialog"], [1, "assign-group-content"], [3, "formGroup"], [1, "row", "align-items-center"], [1, "col-sm-6"], ["key", "groupId", "displayKey", "name", 1, "nested-selectfilter", "selectnested", "toplabel-no", 3, "label", "options", "showSelect", "selectedValue", "assignGroup", "selected"], ["appearance", "fill", 1, "selectfilter", "whiteselect"], ["formControlName", "clinicalGroup", "appearance", "fill", 1, "search-filter-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "me-4"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "warn", 1, "fill-btn"], ["mat-flat-button", "", "color", "primary", 1, "fill-btn", 3, "disabled", "click"]],
        template: function AssignGroupModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-dialog-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "app-nested-dropdown", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function AssignGroupModalComponent_Template_app_nested_dropdown_selected_23_listener($event) {
              return ctx.onLocationSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, AssignGroupModalComponent_mat_option_40_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-dialog-actions", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignGroupModalComponent_Template_button_click_46_listener() {
              return ctx.save(ctx.assignGroupForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 23, "active-patients-module.table.assign_group_title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 25, "dashboard-module.pid"), ". ", ctx.data.patientId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.data.firstName, " ", ctx.data.lastName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx.data == null ? null : ctx.data.pGroup == null ? null : ctx.data.pGroup.name, "", (ctx.data == null ? null : ctx.data.pGroup) && (ctx.data == null ? null : ctx.data.cGroup) ? "," : "", " ", ctx.data == null ? null : ctx.data.cGroup == null ? null : ctx.data.cGroup.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.assignGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 27, "active-patients-module.form_label.location_group"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 29, "active-patients-module.form_label.location"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 31, ctx.locationGroups$))("showSelect", true)("selectedValue", ctx.assignGroupForm == null ? null : ctx.assignGroupForm.controls == null ? null : ctx.assignGroupForm.controls.pGroup == null ? null : ctx.assignGroupForm.controls.pGroup.value)("assignGroup", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 33, "active-patients-module.form_label.clinical_group"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 35, "active-patients-module.form_label.clinical_condition"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 37, "active-patients-module.form_label.none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 39, ctx.clinicalGroups$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 41, "active-patients-module.button.cancel"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.assignGroupForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 43, "active-patients-module.button.Assign_button"), " ");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.NestedDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
        styles: [".mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%] {\n  background-color: #043c6d;\n  border-radius: 4px;\n  height: 3rem;\n  padding: 0 12px;\n  margin: auto auto 1rem;\n  width: 100%;\n}\n@media only screen and (max-width: 1199px) {\n  .mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 1rem 0.5rem;\n  }\n}\n.mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem;\n}\n.mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0rem;\n  padding: 0rem;\n}\n.mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .mat-form-field.selectfilter[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 0.5rem;\n  width: 100%;\n  max-width: 280px;\n}\n@media only screen and (max-width: 767px) {\n  .mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .mat-form-field.selectfilter[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.mat-dialog-popup.assign-group-dialog[_ngcontent-%COMP%]   .assign-group-content[_ngcontent-%COMP%]   .mat-form-field.selectfilter.disabled-field[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   span.time-group[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1fc0f3;\n}\n@media only screen and (max-width: 767px) {\n  .assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   span.time-group[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.assign-header[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi1ncm91cC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxtb2R1bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUNHQSx5QkFBQTtBQXNFQSxvQkFBQTtBQXdDQSxXQUFBO0FBTUEsVUFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQVFBLGtCQUFBO0FBSUEsY0FBQTtBQWVBLGVBQUE7QUFJQSxlQUFBO0FBMEJBLGtCQUFBO0FBUUEsaUJBQUE7QUFRQSw2QkFBQTtBQVFBLCtCQUFBO0FDck5BLFVBQUE7QUZJQSxpQkFBQTtBQUlJO0VBQ0UsZUFBQTtBQVVOO0FBUk07RUFDRSx5QkN1RWE7RUR0RWIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVVSO0FBUlE7RUFSRjtJQVNJLFlBQUE7SUFDQSxvQkFBQTtFQVdSO0FBQ0Y7QUFUUTtFQUNFLG1CQUFBO0FBV1Y7QUFSUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVVWO0FBTk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFRUjtBQU5RO0VBTkY7SUFPSSxlQUFBO0VBU1I7QUFDRjtBQVBRO0VBQ0Usb0JBQUE7RUFDQSxhQ3lJUztBRGhJbkI7QUFERTtFQUNFLGVBQUE7QUFJSjtBQUZJO0VBQ0UsbUJBQUE7QUFJTjtBQURJO0VBQ0UsbUJBQUE7QUFHTjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBQU07RUFDRSxlQ2pFUztFRGtFVCxjQ0xVO0FET2xCO0FBRFE7RUFIRjtJQUlJLGVDOURBO0VEa0VSO0FBQ0Y7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUVOIiwiZmlsZSI6ImFzc2lnbi1ncm91cC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5ldyB2YXJpYWJsZSBkZWZpbmUgKi9cbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy9fbWl4aW5zLnNjc3NcIjtcblxuLyoqIG1vZGFsIHBvcHVwICovXG5cbi5tYXQtZGlhbG9nLXBvcHVwIHtcbiAgJi5hc3NpZ24tZ3JvdXAtZGlhbG9nIHtcbiAgICAuYXNzaWduLWdyb3VwLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuXG4gICAgICAuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXRhYmxlLXJvdy1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgJHNpemUtMTI7XG4gICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQuc2VsZWN0ZmlsdGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZGlzYWJsZWQtZmllbGQge1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5LWRpc2FibGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hc3NpZ24taGVhZGVyIHtcbiAgLmxpc3QtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgaDEge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgJi50aW1lLWdyb3VwIHtcbiAgICAgICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1jb2xvci1ncm91cDtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAkc2l6ZS0xMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgfVxufSIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIi8qbWl4aW5zICovXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRhbmltYXRpb24pIHtcbiAgLW1zLXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIC1tb3otdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICB0cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtUm90YXRlKCkge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cblxuQG1peGluIGRpc3BsYXlmbGV4KCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGZsZXh2ZXJ0aWNhbCgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1peGluIHRleHQtdHJ1bmNhdGUoKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    91430:
    /*!********************************************************************************************!*\
      !*** ./src/app/active-patients/interpretation-history/interpretation-history.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InterpretationHistoryComponent": function InterpretationHistoryComponent() {
          return (
            /* binding */
            _InterpretationHistoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/active-patients.model */
      25720);
      /* harmony import */


      var _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admit-patient-modal/admit-patient-modal.component */
      74754);
      /* harmony import */


      var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../confirmation-dialog/confirmation-dialog.component */
      15001);
      /* harmony import */


      var _assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../assign-group-modal/assign-group-modal.component */
      3475);
      /* harmony import */


      var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/life-signals/_models/ls-column.model */
      24856);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../patient-more-info-dialog/patient-more-info-dialog.component */
      41829);
      /* harmony import */


      var _patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../patient-details-view-more/patient-details-view-more.component */
      54122);
      /* harmony import */


      var _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../patient-admitted-modal/patient-admitted-modal.component */
      63832);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      8876);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/notifications/notifications.component */
      66557);
      /* harmony import */


      var src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/add-event/add-event.component */
      45211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../manager/active-patient-manager.service */
      60972);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/active-patients.service */
      65144);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services/authentication.service */
      7053);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../manage-group/services/manage-groups.service */
      34887);
      /* harmony import */


      var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-page-header/ls-page-header.component */
      63601);
      /* harmony import */


      var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-table/ls-table.component */
      16743);
      /* harmony import */


      var _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared/nested-dropdown/nested-dropdown.component */
      88113);
      /* harmony import */


      var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../life-signals/_directives/ls-widget-name.directive */
      19861);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function InterpretationHistoryComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r8 == null ? null : row_r8.patientId);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r8 == null ? null : row_r8.name);
        }
      }

      function InterpretationHistoryComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r9 == null ? null : row_r9.name);
        }
      }

      function InterpretationHistoryComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function InterpretationHistoryComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r11 == null ? null : row_r11.name);
        }
      }

      function InterpretationHistoryComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r12 == null ? null : row_r12.name);
        }
      }

      function InterpretationHistoryComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r13 == null ? null : row_r13.name);
        }
      }

      function InterpretationHistoryComponent_ng_template_33_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function InterpretationHistoryComponent_ng_template_33_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);

            var row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r16.addNewEvent(row_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "interp-history-module.button.amend"), " ");
        }
      }

      function InterpretationHistoryComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, InterpretationHistoryComponent_ng_template_33_button_1_Template, 3, 3, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r6.isClinicianCheck() || ctx_r6.isPhy);
        }
      }

      function InterpretationHistoryComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      var _InterpretationHistoryComponent = /*#__PURE__*/function () {
        function _InterpretationHistoryComponent(manager, dialog, service, authService, snackbar, route, manageGroupService) {
          _classCallCheck(this, _InterpretationHistoryComponent);

          this.manager = manager;
          this.dialog = dialog;
          this.service = service;
          this.authService = authService;
          this.snackbar = snackbar;
          this.route = route;
          this.manageGroupService = manageGroupService;
          this.activePatients = new Array(); // Selection Variables

          this.selectedPatients = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.SelectionModel(true);
          this.selectedIds = new Set();
          this.isPhy = false;
          this.interpHistory_Columns = [{
            id: "patientDetails",
            label: "PATIENT DETAILS",
            headerClass: ["text-start"],
            sortable: true,
            labelClass: "fw-bold",
            cellClass: []
          }, {
            id: "reportTime",
            label: "report time",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "location",
            label: "Location",
            headerClass: ["text-start"],
            sortable: true,
            cellClass: []
          }, {
            id: "prescriber",
            label: "prescriber",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "initialInterp",
            label: "initial interpreter",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "interpDate",
            label: "interpretation date",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "printStatus",
            label: "print status",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start", "align-items-center"],
            headerClass: ["text-start"]
          }];
          this.config = {
            id: "active-patients-table",
            rowSelectEnabled: true,
            actions: {
              show: true,
              headerLabel: "",
              "class": ["d-flex", "align-items-center", "justify-content-end"],
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
              active: "patientid",
              direction: "desc"
            },
            tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__.TableState.DEFAULT
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
          this.monitoringStatus = _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.MonitoringStatus;
          this.groupsData$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject([]);
          this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
          this.groups$ = this.groupsData$.asObservable();
          this.locationGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "PHYSICAL";
            });
          }));
          this.clinicalGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "CLINICAL";
            });
          }));
        }

        _createClass(_InterpretationHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            var roles = this.authService.getRoles() || [];
            ;
            if ((roles === null || roles === void 0 ? void 0 : roles.indexOf("PHY")) > -1) this.isPhy = true;
            this.getGroupDetails();
            this.modelChanged.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(500), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(function () {
              return _this27.serviceToCallWith();
            })).subscribe();
            this.initVariables();
            this.fetchTableData();
            var panelId = sessionStorage.getItem("panelId");

            if (panelId === null || panelId === void 0 ? void 0 : panelId.length) {
              this.service.getPanelDetails(panelId).then(function (patients) {
                var _iterator5 = _createForOfIteratorHelper(patients),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var patient = _step5.value;

                    if (patient.patchId) {
                      _this27.selectedIds.add(patient.patientId);
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                if (_this27.activePatients.length && _this27.selectedIds.size) {
                  var _this27$selectedPatie;

                  (_this27$selectedPatie = _this27.selectedPatients).select.apply(_this27$selectedPatie, _toConsumableArray(_this27.activePatients.filter(function (pat) {
                    return _this27.selectedIds.has(pat.patientId);
                  })));
                }
              });
            }

            this.reloadInterval = setInterval(function () {
              _this27.fetchTableData();
            }, 30000);
            this.activePatientsSub = this.manager.selectActivePatient().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (response) {
              if (response === null || response === void 0 ? void 0 : response.tableState) {
                _this27.config = Object.assign(Object.assign({}, _this27.config), {
                  tableState: response === null || response === void 0 ? void 0 : response.tableState,
                  rowSelectEnabled: true,
                  page: Object.assign(Object.assign({}, _this27.config.page), {
                    length: response === null || response === void 0 ? void 0 : response.total
                  })
                });
              }

              _this27.error = response === null || response === void 0 ? void 0 : response.error;

              if (response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA) {
                _this27.activePatients = response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA.map(function (x) {
                  var patient = Object.assign(Object.assign({}, x), {
                    name: "".concat(x.firstName, " ").concat(x.lastName),
                    weightUnit: x.weightUnit.toUpperCase(),
                    heightUnit: x.heightUnit.toUpperCase()
                  });
                  return patient;
                });

                if (_this27.activePatients.length && _this27.selectedIds.size) {
                  var _this27$selectedPatie2;

                  (_this27$selectedPatie2 = _this27.selectedPatients).select.apply(_this27$selectedPatie2, _toConsumableArray(_this27.activePatients.filter(function (pat) {
                    return _this27.selectedIds.has(pat.patientId);
                  })));
                }
              }
            })).subscribe();
          }
        }, {
          key: "serviceToCallWith",
          value: function serviceToCallWith() {
            var ref;
            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
            ref = this.manager.selectActivePatient();
            return ref;
          }
        }, {
          key: "resetAndSearch",
          value: function resetAndSearch() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "search",
          value: function search() {
            var _a;

            this.searchObject.keyword = 'searchText';

            if ((_a = this.searchObject) === null || _a === void 0 ? void 0 : _a.string) {
              this.config.page.pageIndex = 0;
            } //this.selectedPatients.clear();


            this.modelChanged.next(JSON.stringify(this.searchObject));
          }
        }, {
          key: "searchByGroup",
          value: function searchByGroup(key, groupId) {
            if (key === 'CLINICAL') {
              this.filterObject.cGroupId = groupId;
            } else {
              this.filterObject.pGroupId = groupId;
            }

            this.config.page.pageIndex = 0;
            this.activePatients = undefined;
            this.modelChanged.next(JSON.stringify(this.filterObject));
          }
        }, {
          key: "clear",
          value: function clear() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "checkCharacters",
          value: function checkCharacters(event) {
            if (this.searchObject.keyword === "PATCHID" || this.searchObject.keyword === "PATIENTID") {
              var pattern = /^[a-zA-z0-9]$/;
              var key = event.key;

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
        }, {
          key: "initVariables",
          value: function initVariables() {
            for (var i in _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient) {
              this.filterStrings.push({
                text: _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient[i],
                value: i
              });
            }
          }
        }, {
          key: "fetchTableData",
          value: function fetchTableData() {
            this.getActivePatientData();
          }
        }, {
          key: "isSelected",
          value: function isSelected(row, selection) {
            return selection.selected.map(function (s) {
              return s.patientId;
            }).includes(row.patientId);
          }
        }, {
          key: "isClinicianCheck",
          value: function isClinicianCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1;
          }
        }, {
          key: "isGcorScCheck",
          value: function isGcorScCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "getActivePatientData",
          value: function getActivePatientData() {
            if (!this.config.sort.active || !this.config.sort.direction) {
              this.config.sort.active = "patientid";
              this.config.sort.direction = "desc";
            }

            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            this.config = Object.assign(Object.assign({}, this.config), {
              page: Object.assign(Object.assign({}, this.config.page), {
                pageIndex: event.pageIndex,
                pageSize: event.pageSize
              })
            });
            this.fetchTableData();
          }
        }, {
          key: "onPatientsSelected",
          value: function onPatientsSelected(e) {
            this.selectedPatients = e;
            var selected = new Set(e.selected.map(function (pat) {
              return pat.patientId;
            }));

            var _iterator6 = _createForOfIteratorHelper(this.activePatients),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var patientId = _step6.value.patientId;

                if (selected.has(patientId)) {
                  this.selectedIds.add(patientId);
                } else if (this.selectedIds.has(patientId)) {
                  this.selectedIds["delete"](patientId);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }, {
          key: "onSortChange",
          value: function onSortChange(event) {
            var activeKey = event.active === 'deviceIds' ? 'thirdPartyDevices' : event.active;
            this.config = Object.assign(Object.assign({}, this.config), {
              sort: {
                active: activeKey,
                direction: event.direction
              }
            });
            this.selectedPatients.clear();
            this.fetchTableData();
          }
        }, {
          key: "openBiosensorModal",
          value: function openBiosensorModal(patientId, data) {
            var _this28 = this;

            this.service.getPatientBy(patientId).subscribe(function (patient) {
              var patches = {
                activePatch: patient.data.activePatch,
                patchIds: patient.data.patchIds,
                heading: "active-patients-module.dialog.more_info",
                readOnly: !_this28.isClinicianCheck()
              };

              _this28.dialog.open(_patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PatientMoreInfoDialogComponent, {
                width: "700px",
                //minWidth: "700px",
                maxWidth: "95vw",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: patches
              }).afterClosed().subscribe(function (response) {
                if (response) {
                  data['patchIds'] = response;

                  _this28.manager.updatePatient(data).subscribe(function (res) {
                    if (res === null || res === void 0 ? void 0 : res.error) {
                      if (res.error === "PATCHES_ALREADY_IN_USE") {
                        _this28.snackbar.openSnackBar("active-patients-module.errors.patchInUse", 'bottom', 'center', true);
                      } else if (res.error === "MORE_THAN_ONE_PATCH_STREAMING") {
                        _this28.snackbar.openSnackBar("active-patients-module.errors.more_than_one_patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATCH_STATE_STREAMING") {
                        _this28.snackbar.openSnackBar("active-patients-module.errors.patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATIENT_ALREADY_DISCHARGED") {
                        _this28.snackbar.openSnackBar("errors.patient_discharged", 'bottom', 'center', true);
                      } else if (res.error === "ADMITTED_ON_TIME_IS_INVALID") {
                        _this28.snackbar.openSnackBar("active-patients-module.errors.admittedOn_invalid", 'bottom', 'center', true);
                      } else {
                        _this28.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                      }
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "openAdmitPatientModalWith",
          value: function openAdmitPatientModalWith(data) {
            var _this29 = this;

            switch (data.key) {
              case 'add-new-patient':
                this.admitPatientModal().subscribe(function (resp) {
                  if (resp) {
                    _this29.getActivePatientData();

                    _this29.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                      maxWidth: "96vw",
                      //minWidth: "320px",
                      width: "520px",
                      backdropClass: "backdropBackground",
                      disableClose: true,
                      autoFocus: false,
                      data: {
                        title: 'active-patients-module.dialog.patient_admitted'
                      }
                    });
                  }
                });
                break;

              case 'edit-active-patient':
                this.service.getPatientBy(data === null || data === void 0 ? void 0 : data.value).subscribe(function (patient) {
                  _this29.admitPatientModal({
                    activePatient: patient === null || patient === void 0 ? void 0 : patient.data,
                    mode: 'EDIT'
                  }).subscribe(function (resp) {
                    if (resp) {
                      _this29.getActivePatientData();

                      _this29.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                        maxWidth: "96vw",
                        //minWidth: "320px",
                        width: "520px",
                        backdropClass: "backdropBackground",
                        disableClose: true,
                        autoFocus: false,
                        data: {
                          title: 'active-patients-module.dialog.patient_edited'
                        }
                      });
                    }
                  });
                });
                break;
            }
          } //This function is used to open add event dialog 

        }, {
          key: "addNewEvent",
          value: function addNewEvent(patient) {
            var _a, _b;

            console.log(patient === null || patient === void 0 ? void 0 : patient.patientId);
            console.log((_a = patient === null || patient === void 0 ? void 0 : patient.patchIds[0]) === null || _a === void 0 ? void 0 : _a.startTime);
            var addEvent = this.dialog.open(src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__.AddEventComponent, {
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
        }, {
          key: "admitPatientModal",
          value: function admitPatientModal(data) {
            var dailogRef = this.dialog.open(_admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__.AdmitPatientModalComponent, {
              maxWidth: "96vw",
              minWidth: "320px",
              width: "900px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: Object.assign({}, data)
            });
            return dailogRef.afterClosed();
          }
        }, {
          key: "alertSettings",
          value: function alertSettings(selectedPatient) {
            var dailogRef = this.dialog.open(src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsComponent, {
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

        }, {
          key: "openDischargeGroupDialog",
          value: function openDischargeGroupDialog(patientId) {
            var _this30 = this;

            var patientIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var patient = arguments.length > 2 ? arguments[2] : undefined;

            if (patient === null || patient === void 0 ? void 0 : patient.activePatch) {
              var dischargeDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_and_stop_monitoring",
                  stop_biosensor: false
                }
              });
              dischargeDialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this30.manager.dischargePatient(patient.patientId);

                  _this30.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });

                  _this30.fetchTableData();
                }
              });
            } else {
              var _dischargeDialog4 = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_patient_message",
                  stop_biosensor: false
                }
              });

              _dischargeDialog4.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  if (patientIds.length > 0) {
                    patientIds.forEach(function (patient) {
                      _this30.manager.dischargePatient(patient.patientId);

                      _this30.selectedPatients.clear();
                    });
                  } else if (patientId) {
                    _this30.manager.dischargePatient(patientId);
                  }

                  _this30.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "getThirdPartyDevices",
          value: function getThirdPartyDevices(list) {
            if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
              var deviceIds = "";
              list.forEach(function (element) {
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
          }
        }, {
          key: "openStopMonitoringDialog",
          value: function openStopMonitoringDialog(patientId) {
            var _this31 = this;

            var stopMonitoringDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              // minWidth: "500px",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: "active-patients-module.dialog.stop_monitoring",
                message: "active-patients-module.dialog.stop_monitoring_message",
                stop_biosensor: true
              }
            });
            stopMonitoringDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this31.manager.stopMonitoring(patientId);
              }
            });
          } // /**This function is used to open dialog */

        }, {
          key: "openAssignGroupModal",
          value: function openAssignGroupModal(patient) {
            var _this32 = this;

            if (!this.isGcorScCheck()) {
              return;
            }

            this.dialog.open(_assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__.AssignGroupModalComponent, {
              maxWidth: "96vw",
              //minWidth: "500px",
              width: "700px",
              backdropClass: "backdropBackground",
              disableClose: true,
              panelClass: "assign-group-modal",
              data: Object.assign({}, patient)
            }).afterClosed().subscribe(function (group) {
              if (group) {
                var assignGroupObj = {
                  patientId: patient.patientId,
                  cGroup: group.cGroup,
                  pGroup: group.pGroup,
                  admissionId: patient.admissionId
                };

                _this32.manager.assignGroup(assignGroupObj);

                setTimeout(function () {
                  _this32.getActivePatientData();
                }, 500);
              }
            }); //this.getActivePatientData();
          }
        }, {
          key: "patientViewMore",
          value: function patientViewMore(row) {
            this.dialog.open(_patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__.PatientDetailsViewMoreComponent, {
              width: "900px",
              maxWidth: "96vw",
              //height:"500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: row
            });
          }
        }, {
          key: "getGroupDetails",
          value: function getGroupDetails() {
            var _this33 = this;

            this.manageGroupService.fetch().subscribe(function (groups) {
              if (groups['data'].length > 0) {
                _this33.groupsData$.next(groups['data']);
              }
            });
          }
        }, {
          key: "transferRelay",
          value: function transferRelay(activePatch, type) {
            var _this34 = this;

            var confirmDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: type === 'MPR' ? "active-patients-module.button.transfer_mpr" : "active-patients-module.button.transfer_spr",
                message: type === 'MPR' ? "active-patients-module.dialog.transfer_mpr_confirm" : "active-patients-module.dialog.transfer_spr_confirm"
              }
            });
            confirmDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this34.service.transferRelay(activePatch).subscribe(function (res) {
                  if (res.message === 'TRANSFER_REQUEST_INITIATED') {
                    _this34.snackbar.openSnackBar("active-patients-module.errors.transfer_initiated", 'bottom', 'center', true);
                  } else {
                    _this34.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                  }
                });
              }
            });
          }
        }, {
          key: "isScOrGc",
          value: function isScOrGc() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            clearInterval(this.reloadInterval);
            (_a = this.activePatientsSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return _InterpretationHistoryComponent;
      }();

      _InterpretationHistoryComponent.ɵfac = function InterpretationHistoryComponent_Factory(t) {
        return new (t || _InterpretationHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__.ManageGroupsService));
      };

      _InterpretationHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _InterpretationHistoryComponent,
        selectors: [["app-interpretation-history"]],
        decls: 35,
        vars: 43,
        consts: [["type", "interp-history"], [1, "px-3"], [1, "table-scroll", "without-tab-table", "comman-table-users", "head-border"], [3, "config", "selection", "data", "columns", "error", "isSelected", "Id", "selectOnlyActive", "sortChange", "page", "selected"], ["table-header", ""], [1, "my-3", "row", "align-items-end", "position-relative", "ps-0", "ps-lg-5"], [1, "mat-label", "filter-label", "d-lg-flex", "d-none", "align-items-center"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-9", "col-xxl-8", "select-col", "discharge-select-dropdown"], [1, "row"], [1, "col-12", "col-sm-3", "col-md-5", "col-lg-3", "mt-0", "mt-md-2", "mt-lg-0"], ["key", "groupId", "displayKey", "name", 1, "nested-selectfilter", "bg-selectfilter", 3, "selectedValue", "label", "options", "showSelect", "selected"], ["lsWidgetName", "patientDetails"], ["lsWidgetName", "location"], ["lsWidgetName", "reportTime"], ["lsWidgetName", "prescriber"], ["lsWidgetName", "initialInterp"], ["lsWidgetName", "interpDate"], ["lsWidgetName", "actions"], ["lsWidgetName", "printStatus"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "me-2"], [1, "d-flex", "justify-content-start", "align-items-center", "bold-text"], ["mat-flat-button", "", "color", "primary", "class", "btn-no-shadow mx-auto me-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "btn-no-shadow", "mx-auto", "me-2", 3, "click"], [1, "move"]],
        template: function InterpretationHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ls-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ls-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("sortChange", function InterpretationHistoryComponent_Template_ls_table_sortChange_3_listener($event) {
              return ctx.onSortChange($event);
            })("page", function InterpretationHistoryComponent_Template_ls_table_page_3_listener($event) {
              return ctx.onPageChange($event);
            })("selected", function InterpretationHistoryComponent_Template_ls_table_selected_3_listener($event) {
              return ctx.onPatientsSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "app-nested-dropdown", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function InterpretationHistoryComponent_Template_app_nested_dropdown_selected_12_listener($event) {
              return ctx.searchByGroup("LOCATION", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "app-nested-dropdown", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function InterpretationHistoryComponent_Template_app_nested_dropdown_selected_16_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "app-nested-dropdown", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function InterpretationHistoryComponent_Template_app_nested_dropdown_selected_20_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "app-nested-dropdown", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function InterpretationHistoryComponent_Template_app_nested_dropdown_selected_24_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](26, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, InterpretationHistoryComponent_ng_template_27_Template, 7, 2, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](28, InterpretationHistoryComponent_ng_template_28_Template, 3, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](29, InterpretationHistoryComponent_ng_template_29_Template, 6, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, InterpretationHistoryComponent_ng_template_30_Template, 3, 1, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, InterpretationHistoryComponent_ng_template_31_Template, 3, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, InterpretationHistoryComponent_ng_template_32_Template, 3, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, InterpretationHistoryComponent_ng_template_33_Template, 2, 1, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, InterpretationHistoryComponent_ng_template_34_Template, 2, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("config", ctx.config)("selection", ctx.selectedPatients)("data", ctx.activePatients)("columns", ctx.interpHistory_Columns)("error", ctx.error)("isSelected", ctx.isSelected)("Id", "patientId")("selectOnlyActive", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 25, "interp-history-module.filter"));

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.pGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](13, 27, "interp-history-module.location"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 29, ctx.locationGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 31, "interp-history-module.prescriber"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 33, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 35, "interp-history-module.initial_interp"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](22, 37, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](25, 39, "interp-history-module.print_status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](26, 41, ctx.clinicalGroups$))("showSelect", true);
          }
        },
        directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__.LsPageHeaderComponent, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__.LsTableComponent, _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.NestedDropdownComponent, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__.LsWidgetNameDirective, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe],
        styles: [".clear-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  right: 0rem;\n}\n.monitoring-icon[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  color: #fff;\n  background: #A55E64;\n  height: 2rem !important;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.biosensor-id[_ngcontent-%COMP%] {\n  width: 4rem;\n  text-align: left;\n  font-weight: 700;\n  padding-left: 5px;\n}\n.indicator-icon[_ngcontent-%COMP%], .stop-monitoring[_ngcontent-%COMP%], .tick-icon[_ngcontent-%COMP%], .close-icon-cell[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  margin-right: 0.5rem;\n}\n.close-icon-cell[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.tick-icon[_ngcontent-%COMP%] {\n  color: #17d468;\n}\n.stop-monitoring[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.icon-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #043158 !important;\n}\n\n@media (min-width: 992px) and (max-width: 1050px) {\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 0.65rem;\n  }\n}\n.move[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVycHJldGF0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FDR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ3JOQSxVQUFBO0FGS0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVEE7RUFDRSw2QkFBQTtFQUNBLFdDYk07RURjTixtQkFBQTtFQUNBLHVCQUFBO0FBWUY7QUFSRTtFQUNFLHlCQUFBO0FBV0o7QUFSQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQ3NHZ0I7RURyR2hCLGlCQUFBO0FBV0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxxQkN3R0s7RUR2R0wsb0JBQUE7QUFXRjtBQVJBO0VBQ0UsY0NaZTtBRHVCakI7QUFQQTtFQUNFLGNDYmlCO0FEdUJuQjtBQU5BO0VBQ0UsY0N0QmU7QUQrQmpCO0FBTEE7RUFDRSxlQUFBO0FBUUY7QUFMQTs7Ozs7R0FBQTtBQU9BO0VBQ0Usb0NBQUE7QUFPRjtBQUpBLCtCQUFBO0FBR0k7RUFERjtJQUVJLG9CQUFBO0VBTUo7QUFDRjtBQUhBO0VBQ0Usa0JBQUE7QUFNRiIsImZpbGUiOiJpbnRlcnByZXRhdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmV3IHZhcmlhYmxlIGRlZmluZSAqL1xyXG5cclxuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvbWl4aW5zXCI7XHJcblxyXG4uY2xlYXItaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcclxuICByaWdodDogMHJlbTtcclxufVxyXG4vL21vbml0b3JpbmctaWNvblxyXG4ubW9uaXRvcmluZy1pY29uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNBNTVFNjQ7XHJcbiAgaGVpZ2h0OiAycmVtIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWZvcm0tZmllbGQge1xyXG4gIC8vIGxlZnQ6IDMwMHB4O1xyXG4gIGlucHV0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcbi5iaW9zZW5zb3ItaWQge1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC03MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pbmRpY2F0b3ItaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWRlY29yYXRpb246ICRub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbi1jZWxsIHtcclxuICBjb2xvcjogJHJlZC1mb250LWNvbG9yO1xyXG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xyXG59XHJcblxyXG4udGljay1pY29uIHtcclxuICBjb2xvcjogJGdyZWVuLWZvbnQtY29sb3I7XHJcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XHJcbn1cclxuXHJcbi5zdG9wLW1vbml0b3Jpbmcge1xyXG4gIGNvbG9yOiAkcmVkLWZvbnQtY29sb3I7XHJcbiAgQGV4dGVuZCAuaW5kaWNhdG9yLWljb247XHJcbn1cclxuXHJcbi5pY29uLWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qLmFjdGl2ZS10YWJsZSB7XHJcbiAgOjpuZy1kZWVwIC5zY3JvbGwtYXNzaXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNjBweCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59ICovXHJcblxyXG50YWJsZS5tYXQtdGFibGUgdGhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YWItYmctY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqKiogbWVhZGlhIHF1ZXJ5IGJ1dHRvbiAqKioqKi9cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMC42NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1vdmV7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4iLCIkd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG5cbi8qZm9udCBjb2xvciBhbmQgZmFtaWx5ICovXG5cbiRiYXNlLWZvbnQtc2l6ZTogMTRweDtcbiRiYXNlLWZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLFxuICAgIFwiTXVsaS1SZWd1bGFyXCIsXG4gICAgc2Fucy1zZXJpZjtcbiRiYXNlLWZvbnQtY29sb3I6ICR3aGl0ZTtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTI6IDEycHg7XG4kc2l6ZS0yNDogMjRweDtcbiRzaXplLTE2OiAxNnB4O1xuJHNpemUtMTA6IDEwcHg7XG4kc2l6ZS01OiA1cHg7XG4kc2l6ZS02OiA2cHg7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTE4OiAxOHB4O1xuJHNpemUtMTU6IDE1cHg7XG4kc2l6ZS0yNzogMjdweDtcbiRjb25maXJtLWRpYWxvZy13aWR0aDogNzUwcHg7XG4kZXJyMHJfdGV4dF9jb2xvcjogI2RjMzU0NTtcbiRvcGFjaXR5LXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQpO1xuJG9wYWNpdHktYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4kcmVkLWZvbnQtY29sb3I6ICNmZjRjNGM7XG4kbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGxvdy1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRhbWJlci1mb250LWNvbG9yOiAjRkZDNzAwO1xuJGdyZWVuLWZvbnQtY29sb3I6ICMxN2Q0Njg7XG4kZGFyay1jb2xvci1vcHRpb246ICMwNDI5NGE7XG4kdGFibGUtdHItY29sb3I6IHJnYig0LCA2MCwgMTA5KTtcbiR0YWJsZS1zcGFjaW5nX2NvbG9yOiAjMDQyOTRhO1xuJHAtY29sb3I6ICMwMDQyN2NhMztcbiRyb3ctZGlzYWJsZWQ6IHJnYig0LCA2MCwgMTA5LCAwLjYpO1xuJHdoaXRlLXRleHQ6ICNmMmYyZjI7XG4kYnJvd24tY29sb3I6ICM4NzdkN2Q7XG4kYXJyb3ctY29sb3I6ICM3YzhmYTA7XG4kbGFiZWwtY29sb3I6ICM0ZWEyZWY7XG4kcmVxdXJpZWQtY29sb3I6ICNmZjY1NjU7XG4kYmxhY2stY29sb3I6ICRibGFjaztcbiRncmF5LWNvbG9yOiAjMzMzMzMzO1xuJHRpbWUtY29sb3I6ICM2N2E1ZDI7XG4kY2xvc2UtY29sb3I6ICNhZmFkYWQ7XG4kc3BvMi1jb2xvcjogIzAwZjBmZjtcbiRoZWFydHJhdGUtY29sb3I6ICMwMGZmNmQ7XG4keWVsbG93LWNvbG9yOiAjZmFmZjAwO1xuJGxpZ2h0LXRleHQtY29sb3I6ICNFQkVCRUI7XG4kc2V0dGluZy1jb2xvcjogI2UxZTFlMTtcbiRjb2xvcm5ldy15ZWxsb3c6ICNmZmY2MTg7XG4kc3RvcC1idXR0b24tY29sb3I6ICNjYTQyNDI7XG4kZXdzLWNvbG9yOiAjZmY1ODQxO1xuJGJwLWNvbG9yOiAjZmY5ODNhO1xuJGNhbmNlbC1jb2xvcjogI2ZmNDQ0NDtcbiRoaXN0b3J5LWxhYmVsLWNvbG9yOiAjYTdjN2U0O1xuJGNvbG9yLWNvZGUtbmV3OiAjYzVmZjIwO1xuJHBpbmstY29sb3I6ICNjNjAwNWY7XG4kZ3JlZW4tY29sb3I6ICMzZmZmOTE7XG4kYmx1ZS1jb2xvcjogIzFmYzBmMztcbiRjb2xvcmdyYXk6ICM2NjY2NjY7XG4kcmVkLWxhYmVsLWNvbG9yOiAjZjQ0MzM2O1xuJHNlbGVjdC1sYWJlbC1jb2xvcjogIzAyM2Y3NDtcbiRzZWxlY3Qtb3B0aW9uLWNvbG9yOiAjMjM1OTg3O1xuJHNlbGVjdC1vcHRpb24tYmc6ICNFMEVBRjI7XG4kc2VsZWN0LW9wdGlvbi1zZWxlY3RlZC1iZzogJHdoaXRlO1xuJGdyYXktY29sb3ItdGltZTogI0M0QzRDNDtcbiRibHVlLWNvbG9yLWdyb3VwOiMxZmMwZjM7XG4kdHJlbmQtdG9wQ29sb3I6IzA0M0I2QztcbiRleHBpcmVkLXZpdGFsOiAjYTlhOWE5O1xuJGluYWN0aXZlLWNvbG9yOiMxODYyQTE7XG4kc3RhdHVzLWNvbG9yLWJnOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XG4kc3RhdHVzLWNvbG9yLWJvcmRlcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cbi8qYmFja2dyb3VuZCBjb2xvciAqL1xuXG4kcHJpbWFyeS1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1wcmltYXJ5LWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRiZy13aGl0ZS1jb2xvcjogJHdoaXRlO1xuJGxpZ2h0LWJsdWUtY29sb3I6ICMwMGJiZWY7XG4kYmctdG9wYmFyLWNvbG9yOiByZ2JhKDAsIDY2LCAxMjQsIDAuNjQpO1xuJGJnLXllbGxvdy1jb2xvcjogI2YyY2Q0YjtcbiRiZy1idXR0b24tY29sb3I6ICMwMDU0OWY7XG4kYmctYnV0dG9uLWhvdmVyOiAkYmctcHJpbWFyeS1jb2xvcjtcbiRiZy10YWJsZS1yb3ctY29sb3I6ICMwNDNjNmQ7XG4kYmctc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuMTYpO1xuJGJnLWRpc2FibGUtY29sb3I6ICMyMjRjNzI7XG4kYmctdGFibGUtcm93LWFjdGl2ZS1jb2xvcjogIzFiNmRiNjtcbiRtb2RhbC1kYWlsb2ctaGVhZHN0cmlwLWNvbG9yOiAjMWM0ODcxO1xuJGJnLWlucHV0LWNvbG9yOiAjZWVlZWVlO1xuJGJnLWJ1dHRvbi1saWdodC1yZWQtY29sb3I6ICNjZDZkNmQ7XG4kbGlnaHQtYmx1ZS1iZzogI2UwZWFmMjtcbiRiZy1zbGlkZXItYmFyOiAjMDcyNTQwO1xuJGJnLWluZm8tY29sb3I6ICMwOTQ3OGU7XG4kYmctZGFzaGJvYXJkLWNvbG9yOiAjMDA0MjdjO1xuJGJnLWdyaWQtY29sb3I6ICMwMzM1NjI7XG4kYmctY2FyZC1jb2xvcjogIzA2MzA1NjtcbiRiZy1zaWduYWwtY29sb3I6ICMwNjI4NDc7XG4kYmctY29sb3ItbWF0Y2g6ICMwMzJENTI7XG4kdG9wYmF0LXN0cmlwLWNvbG9yOiAjMjU0ODY4O1xuJGJ1dHRvbi1jb2xvci1iZzogIzA1NDY4MDtcbiRiZy1tYXRjYXJkLWNvbG9yOiAjMDQzYjZkO1xuJGJnLWJhZ2UtY29sb3I6ICNhMDM0MzQ7XG4kYmctbWFuYWdlLXN0cmlwLWNvbG9yOiAjMDQyZjU1O1xuJHRhYi1iZy1jb2xvcjogIzA0MzE1ODtcbiRiZy1yZXNldC1idG46ICM0MjcwOWE7XG4kdHItYWN0aXZlLWJnLWNvbG9yOiAjMWI2ZGI2O1xuJGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4kYmctdGFibGUtcm93OiAjMDQzYzZkO1xuJGJnLWxlZnRwYW5lbC1jYXJkOiMwNTM1NjE7XG4kYmctY2FyZGJsb2NrZXItYm94OiMwMDMxNUQ7XG4kYm9yZGVyLWxpbmUtY29sb3I6IzcwRjZGRjtcblxuXG4vKiBUb2dnbGUgKi9cblxuJHRvZ2dsZS1idXR0b24tYmctb246ICM2NmE1ZGQ7XG4kdG9nZ2xlLWJ1dHRvbi1iZy1vZmY6ICMxODYyYTI7XG4kdG9nZ2xlLWJ1dHRvbi1yb3VuZC1vZmY6ICMwODJkNGU7XG5cbi8qIFRhYmxlICovXG5cbiR0YWJsZS10aGVhZC1ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kYmctZXhwYW5kZWQ6ICMwMDIxM2U7XG4kYmctdHJhbnNwYXJlbnQtcmdiYTogcmdiYSgwLCA4NCwgMTU5LCAwLjMpO1xuXG4vKiBGb250IHdlaWdodCAqL1xuXG4kZm9udC13ZWlnaHQtNjAwOiA2MDA7XG4kZm9udC13ZWlnaHQtNzAwOiA3MDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZm9udC13ZWlnaHQtNDAwOiA0MDA7XG5cbi8qYm9yZGVyLWxpbmUgKi9cblxuJGJvcmRlci1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC42NCk7XG4kYm9yZGVyLXNlYXJjaDogMXB4IHNvbGlkICRib3JkZXItc2VhcmNoLWNvbG9yO1xuJG5vbmU6IG5vbmU7XG4kYm9yZGVyLXNlcGFyYXRlLWNvbG9yOiAjYzRjNGM0O1xuJGJvcmRlci1jb2xvci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblxuLypsZXR0ZXIgc3BhY2luZyAqL1xuXG4kbGV0dGVyLXNwYWNpbmctc2l6ZTogMC4yNXB4O1xuXG4vKmJveCBzaGFkb3cgKi9cblxuJGJveC1zaGFkb3ctYnV0dG9uOiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuJGJveC1zaGFkb3ctY2FyZDogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiRib3gtc2hhZG93LWNvbG9yOiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuJGJveC1zaGFkb3ctaW5zZXQtYXJlYTogMnB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiR0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiRib3gtc2hhZG93LWFyZWE6IDBweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm94LXNoYWRvdy12YXJpYWJsZXNcblxuLypsaW5lIGhlaWdodCAqL1xuXG4kYmFzZS1saW5lLWhlaWdodDogMXJlbTtcblxuLyogRm9udCBTdHlsZSAqL1xuXG4kZm9udC1zdHlsZS1ub3JtYWw6IG5vcm1hbDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4kYm9yZGVyLXJhZGl1cy1kaXZpZGU6IDhweCA4cHggMHB4IDBweDtcbiRib3JkZXItcmlnaHQtYm90dG9tOiAwIDhweCA4cHggMDtcbiRib3JkZXItdG9wLWxlZnQ6IDhweCAwIDAgOHB4O1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktY29sb3ItY29kZTogMC42NDtcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJHJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGJhY2tncm91bmQtd2hpdGUtcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuJHJnYi1jb2xvci1jb2RlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kcmdiLXRyYW5zcGFyZW50LWJnOiByZ2JhKDAsIDg0LCAxNTksIDAuNCk7XG4kcmdiLXdhcm4tY29sb3I6IHJnYmEoMjU1LCA2OCwgNjgsIDAuMSk7XG4kcmdiYS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gcmdiYSBjb2xvciB2YXJpYWJsZXNcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktY29sb3ItY29kZTogMC42NDtcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNjU7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG5cbi8qIGZpbHRlciBzaGFkb3cgKi9cblxuJGZpbHRlci1kcm9wc2hhZG93OiBkcm9wLXNoYWRvdygwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiR2YWxpZGF0aW9uLWVycm9yLW1lc3NhZ2UtY29sb3I6ICNmZmE2OWY7XG5cbi8qIEFsZXJ0IENvbG9ycyAqL1xuXG4kYWxlcnQtbG93OiAjRkFGRjAwO1xuJGFsZXJ0LW1lZGl1bTogI2ZmYmYwMDtcbiRhbGVydC1oaWdoOiAjRkY0QzRDO1xuJGFsZXJ0LXRlY2g6ICMwMEYwRkY7XG4kYWxlcnQtdGV4dDogI0ZGRjYxODtcblxuLyogQWxlcnQgIGJhY2tncm91bmQgQ29sb3JzICovXG4kYmctYWxlcnQtbG93OiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1tZWRpdW06ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LWhpZ2g6ICByZ2JhKDIwMiwgNjYsIDY2LCAwLjIpO1xuJGJnLWFsZXJ0LXRlY2g6IHJnYmEoMCwgMjQwLCAyNTUsIDAuMik7XG4kYWN0aXZlLWJnOiAjRjRGNjZGO1xuXG5cbi8qKioqKiBNYW5hZ2UgR3JvdXAgQ29sb3IgKioqKiovXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uOiNDNUZGMjA7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uOiByZ2JhKDE5NywgMjU1LCAzMiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTojQzYwMDVGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiByZ2JhKDI0MSwgNTEsIDE0MiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjojRkZCRTE1O1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiByZ2JhKDI1NSwgMTkwLCAyMSwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzojMjZEOEZGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiByZ2JhKDM4LCAyMTYsIDI1NSwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDojNjVDOTRDO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiByZ2JhKDEwMSwgMjAxLCA3NiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTojOTg0N0ZGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiByZ2JhKDE1MiwgNzEsIDI1NSwgMC4wOCk7XG5cblxuXG4iLCIvKm1peGlucyAqL1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkYW5pbWF0aW9uKSB7XG4gIC1tcy10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtbW96LXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIC1vLXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbn1cblxuQG1peGluIHRyYW5zZm9ybVJvdGF0ZSgpIHtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG5cbkBtaXhpbiBkaXNwbGF5ZmxleCgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtaXhpbiBmbGV4dmVydGljYWwoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtaXhpbiB0ZXh0LXRydW5jYXRlKCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    45498:
    /*!************************************************************************!*\
      !*** ./src/app/active-patients/posted_final/posted-final.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PostedFinalComponent": function PostedFinalComponent() {
          return (
            /* binding */
            _PostedFinalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/active-patients.model */
      25720);
      /* harmony import */


      var _admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admit-patient-modal/admit-patient-modal.component */
      74754);
      /* harmony import */


      var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../confirmation-dialog/confirmation-dialog.component */
      15001);
      /* harmony import */


      var _assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../assign-group-modal/assign-group-modal.component */
      3475);
      /* harmony import */


      var src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/life-signals/_models/ls-column.model */
      24856);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var _patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../patient-more-info-dialog/patient-more-info-dialog.component */
      41829);
      /* harmony import */


      var _patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../patient-details-view-more/patient-details-view-more.component */
      54122);
      /* harmony import */


      var _patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../patient-admitted-modal/patient-admitted-modal.component */
      63832);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      8876);
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/notifications/notifications.component */
      66557);
      /* harmony import */


      var src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/dialogs/notifications-component/add-event/add-event.component */
      45211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../manager/active-patient-manager.service */
      60972);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/active-patients.service */
      65144);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services/authentication.service */
      7053);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../manage-group/services/manage-groups.service */
      34887);
      /* harmony import */


      var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-page-header/ls-page-header.component */
      63601);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-table/ls-table.component */
      16743);
      /* harmony import */


      var _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared/nested-dropdown/nested-dropdown.component */
      88113);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../life-signals/_directives/ls-widget-name.directive */
      19861);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function PostedFinalComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PostedFinalComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r14.openAdmitPatientModalWith({
              key: "add-new-patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r0.selectedPatients == null ? null : ctx_r0.selectedPatients.selected == null ? null : ctx_r0.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "posted-final-module.button.all"));
        }
      }

      function PostedFinalComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PostedFinalComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r16.openAdmitPatientModalWith({
              key: "add-new-patient",
              value: ""
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", (ctx_r1.selectedPatients == null ? null : ctx_r1.selectedPatients.selected == null ? null : ctx_r1.selectedPatients.selected.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "posted-final-module.button.all"));
        }
      }

      function PostedFinalComponent_mat_icon_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PostedFinalComponent_mat_icon_52_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

            return ctx_r18.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function PostedFinalComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r20 == null ? null : row_r20.patientId);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r20 == null ? null : row_r20.name);
        }
      }

      function PostedFinalComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r21 == null ? null : row_r21.phoneNo);
        }
      }

      function PostedFinalComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function PostedFinalComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r23 == null ? null : row_r23.name);
        }
      }

      function PostedFinalComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r24 == null ? null : row_r24.name);
        }
      }

      function PostedFinalComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r25 == null ? null : row_r25.name);
        }
      }

      function PostedFinalComponent_ng_template_61_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "posted-final-module.button.edit"));
        }
      }

      function PostedFinalComponent_ng_template_61_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "posted-final-module.button.add_notes"));
        }
      }

      function PostedFinalComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "mat-menu", 45, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PostedFinalComponent_ng_template_61_button_5_Template, 3, 3, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, PostedFinalComponent_ng_template_61_button_6_Template, 3, 3, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.isClinicianCheck());

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.isScOrGc());
        }
      }

      function PostedFinalComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function PostedFinalComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      function PostedFinalComponent_ng_template_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
      }

      var _PostedFinalComponent = /*#__PURE__*/function () {
        function _PostedFinalComponent(manager, dialog, service, authService, snackbar, route, manageGroupService) {
          _classCallCheck(this, _PostedFinalComponent);

          this.manager = manager;
          this.dialog = dialog;
          this.service = service;
          this.authService = authService;
          this.snackbar = snackbar;
          this.route = route;
          this.manageGroupService = manageGroupService;
          this.activePatients = new Array(); // Selection Variables

          this.selectedPatients = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.SelectionModel(true);
          this.selectedIds = new Set();
          this.isPhy = false;
          this.activePatient_Columns = [{
            id: "patientId",
            label: "PATIENT DETAILS",
            headerClass: ["text-start"],
            sortable: true,
            labelClass: "fw-bold",
            cellClass: []
          }, {
            id: "location",
            label: "Location",
            headerClass: ["text-start"],
            sortable: true,
            cellClass: []
          }, {
            id: "reportTime",
            label: "report time",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "prescriber",
            label: "prescriber",
            sortable: true,
            headerClass: ["text-start"],
            cellClass: ["d-flex", "justify-content-start"]
          }, {
            id: "interpreter",
            label: "interpreter",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "reportType",
            label: "report type",
            sortable: true,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "view",
            label: "view",
            sortable: false,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "print",
            label: "print",
            sortable: false,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }, {
            id: "download",
            label: "download",
            sortable: false,
            cellClass: ["d-flex", "justify-content-start"],
            headerClass: ["text-start"]
          }];
          this.config = {
            id: "active-patients-table",
            rowSelectEnabled: true,
            actions: {
              show: true,
              headerLabel: "",
              "class": ["d-flex", "align-items-center", "justify-content-end"],
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
              active: "patientid",
              direction: "desc"
            },
            tableState: src_app_life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__.TableState.DEFAULT
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
          this.monitoringStatus = _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.MonitoringStatus;
          this.groupsData$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject([]);
          this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
          this.groups$ = this.groupsData$.asObservable();
          this.locationGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "PHYSICAL";
            });
          }));
          this.clinicalGroups$ = this.groups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (groups) {
            return groups.filter(function (g) {
              return g.type === "CLINICAL";
            });
          }));
        }

        _createClass(_PostedFinalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            var roles = this.authService.getRoles() || [];
            ;
            if ((roles === null || roles === void 0 ? void 0 : roles.indexOf("PHY")) > -1) this.isPhy = true;
            this.getGroupDetails();
            this.modelChanged.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(500), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(function () {
              return _this35.serviceToCallWith();
            })).subscribe();
            this.initVariables();
            this.fetchTableData();
            var panelId = sessionStorage.getItem("panelId");

            if (panelId === null || panelId === void 0 ? void 0 : panelId.length) {
              this.service.getPanelDetails(panelId).then(function (patients) {
                var _iterator7 = _createForOfIteratorHelper(patients),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var patient = _step7.value;

                    if (patient.patchId) {
                      _this35.selectedIds.add(patient.patientId);
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                if (_this35.activePatients.length && _this35.selectedIds.size) {
                  var _this35$selectedPatie;

                  (_this35$selectedPatie = _this35.selectedPatients).select.apply(_this35$selectedPatie, _toConsumableArray(_this35.activePatients.filter(function (pat) {
                    return _this35.selectedIds.has(pat.patientId);
                  })));
                }
              });
            }

            this.reloadInterval = setInterval(function () {
              _this35.fetchTableData();
            }, 30000);
            this.activePatientsSub = this.manager.selectActivePatient().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (response) {
              if (response === null || response === void 0 ? void 0 : response.tableState) {
                _this35.config = Object.assign(Object.assign({}, _this35.config), {
                  tableState: response === null || response === void 0 ? void 0 : response.tableState,
                  rowSelectEnabled: true,
                  page: Object.assign(Object.assign({}, _this35.config.page), {
                    length: response === null || response === void 0 ? void 0 : response.total
                  })
                });
              }

              _this35.error = response === null || response === void 0 ? void 0 : response.error;

              if (response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA) {
                _this35.activePatients = response === null || response === void 0 ? void 0 : response.ACTIVE_PATIENTS_DATA.map(function (x) {
                  var patient = Object.assign(Object.assign({}, x), {
                    name: "".concat(x.firstName, " ").concat(x.lastName),
                    weightUnit: x.weightUnit.toUpperCase(),
                    heightUnit: x.heightUnit.toUpperCase()
                  });
                  return patient;
                });

                if (_this35.activePatients.length && _this35.selectedIds.size) {
                  var _this35$selectedPatie2;

                  (_this35$selectedPatie2 = _this35.selectedPatients).select.apply(_this35$selectedPatie2, _toConsumableArray(_this35.activePatients.filter(function (pat) {
                    return _this35.selectedIds.has(pat.patientId);
                  })));
                }
              }
            })).subscribe();
          }
        }, {
          key: "serviceToCallWith",
          value: function serviceToCallWith() {
            var ref;
            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
            ref = this.manager.selectActivePatient();
            return ref;
          }
        }, {
          key: "resetAndSearch",
          value: function resetAndSearch() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "search",
          value: function search() {
            var _a;

            this.searchObject.keyword = 'searchText';

            if ((_a = this.searchObject) === null || _a === void 0 ? void 0 : _a.string) {
              this.config.page.pageIndex = 0;
            } //this.selectedPatients.clear();


            this.modelChanged.next(JSON.stringify(this.searchObject));
          }
        }, {
          key: "searchByGroup",
          value: function searchByGroup(key, groupId) {
            if (key === 'CLINICAL') {
              this.filterObject.cGroupId = groupId;
            } else {
              this.filterObject.pGroupId = groupId;
            }

            this.config.page.pageIndex = 0;
            this.activePatients = undefined;
            this.modelChanged.next(JSON.stringify(this.filterObject));
          }
        }, {
          key: "clear",
          value: function clear() {
            this.searchObject.string = '';
            this.search();
          }
        }, {
          key: "checkCharacters",
          value: function checkCharacters(event) {
            if (this.searchObject.keyword === "PATCHID" || this.searchObject.keyword === "PATIENTID") {
              var pattern = /^[a-zA-z0-9]$/;
              var key = event.key;

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
        }, {
          key: "initVariables",
          value: function initVariables() {
            for (var i in _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient) {
              this.filterStrings.push({
                text: _models_active_patients_model__WEBPACK_IMPORTED_MODULE_0__.FilterKeysForActivePatient[i],
                value: i
              });
            }
          }
        }, {
          key: "fetchTableData",
          value: function fetchTableData() {
            this.getActivePatientData();
          }
        }, {
          key: "isSelected",
          value: function isSelected(row, selection) {
            return selection.selected.map(function (s) {
              return s.patientId;
            }).includes(row.patientId);
          }
        }, {
          key: "isClinicianCheck",
          value: function isClinicianCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1;
          }
        }, {
          key: "isGcorScCheck",
          value: function isGcorScCheck() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "getActivePatientData",
          value: function getActivePatientData() {
            if (!this.config.sort.active || !this.config.sort.direction) {
              this.config.sort.active = "patientid";
              this.config.sort.direction = "desc";
            }

            this.manager.getActivePatient(this.service.actvePatientsUrl(this.config, this.searchObject, this.filterObject));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            this.config = Object.assign(Object.assign({}, this.config), {
              page: Object.assign(Object.assign({}, this.config.page), {
                pageIndex: event.pageIndex,
                pageSize: event.pageSize
              })
            });
            this.fetchTableData();
          }
        }, {
          key: "onPatientsSelected",
          value: function onPatientsSelected(e) {
            this.selectedPatients = e;
            var selected = new Set(e.selected.map(function (pat) {
              return pat.patientId;
            }));

            var _iterator8 = _createForOfIteratorHelper(this.activePatients),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var patientId = _step8.value.patientId;

                if (selected.has(patientId)) {
                  this.selectedIds.add(patientId);
                } else if (this.selectedIds.has(patientId)) {
                  this.selectedIds["delete"](patientId);
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }, {
          key: "onSortChange",
          value: function onSortChange(event) {
            var activeKey = event.active === 'location' ? 'phoneNo' : event.active;
            this.config = Object.assign(Object.assign({}, this.config), {
              sort: {
                active: activeKey,
                direction: event.direction
              }
            });
            this.selectedPatients.clear();
            this.fetchTableData();
            console.log(activeKey);
          }
        }, {
          key: "openBiosensorModal",
          value: function openBiosensorModal(patientId, data) {
            var _this36 = this;

            this.service.getPatientBy(patientId).subscribe(function (patient) {
              var patches = {
                activePatch: patient.data.activePatch,
                patchIds: patient.data.patchIds,
                heading: "active-patients-module.dialog.more_info",
                readOnly: !_this36.isClinicianCheck()
              };

              _this36.dialog.open(_patient_more_info_dialog_patient_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PatientMoreInfoDialogComponent, {
                width: "700px",
                //minWidth: "700px",
                maxWidth: "95vw",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: patches
              }).afterClosed().subscribe(function (response) {
                if (response) {
                  data['patchIds'] = response;

                  _this36.manager.updatePatient(data).subscribe(function (res) {
                    if (res === null || res === void 0 ? void 0 : res.error) {
                      if (res.error === "PATCHES_ALREADY_IN_USE") {
                        _this36.snackbar.openSnackBar("active-patients-module.errors.patchInUse", 'bottom', 'center', true);
                      } else if (res.error === "MORE_THAN_ONE_PATCH_STREAMING") {
                        _this36.snackbar.openSnackBar("active-patients-module.errors.more_than_one_patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATCH_STATE_STREAMING") {
                        _this36.snackbar.openSnackBar("active-patients-module.errors.patch_streaming", 'bottom', 'center', true);
                      } else if (res.error === "PATIENT_ALREADY_DISCHARGED") {
                        _this36.snackbar.openSnackBar("errors.patient_discharged", 'bottom', 'center', true);
                      } else if (res.error === "ADMITTED_ON_TIME_IS_INVALID") {
                        _this36.snackbar.openSnackBar("active-patients-module.errors.admittedOn_invalid", 'bottom', 'center', true);
                      } else {
                        _this36.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                      }
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "openAdmitPatientModalWith",
          value: function openAdmitPatientModalWith(data) {
            var _this37 = this;

            switch (data.key) {
              case 'add-new-patient':
                this.admitPatientModal().subscribe(function (resp) {
                  if (resp) {
                    _this37.getActivePatientData();

                    _this37.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                      maxWidth: "96vw",
                      //minWidth: "320px",
                      width: "520px",
                      backdropClass: "backdropBackground",
                      disableClose: true,
                      autoFocus: false,
                      data: {
                        title: 'active-patients-module.dialog.patient_admitted'
                      }
                    });
                  }
                });
                break;

              case 'edit-active-patient':
                this.service.getPatientBy(data === null || data === void 0 ? void 0 : data.value).subscribe(function (patient) {
                  _this37.admitPatientModal({
                    activePatient: patient === null || patient === void 0 ? void 0 : patient.data,
                    mode: 'EDIT'
                  }).subscribe(function (resp) {
                    if (resp) {
                      _this37.getActivePatientData();

                      _this37.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                        maxWidth: "96vw",
                        //minWidth: "320px",
                        width: "520px",
                        backdropClass: "backdropBackground",
                        disableClose: true,
                        autoFocus: false,
                        data: {
                          title: 'active-patients-module.dialog.patient_edited'
                        }
                      });
                    }
                  });
                });
                break;
            }
          } //This function is used to open add event dialog 

        }, {
          key: "addNewEvent",
          value: function addNewEvent(patient) {
            var _a, _b;

            console.log(patient === null || patient === void 0 ? void 0 : patient.patientId);
            console.log((_a = patient === null || patient === void 0 ? void 0 : patient.patchIds[0]) === null || _a === void 0 ? void 0 : _a.startTime);
            var addEvent = this.dialog.open(src_app_dialogs_notifications_component_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_9__.AddEventComponent, {
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
        }, {
          key: "admitPatientModal",
          value: function admitPatientModal(data) {
            var dailogRef = this.dialog.open(_admit_patient_modal_admit_patient_modal_component__WEBPACK_IMPORTED_MODULE_1__.AdmitPatientModalComponent, {
              maxWidth: "96vw",
              minWidth: "320px",
              width: "900px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: Object.assign({}, data)
            });
            return dailogRef.afterClosed();
          }
        }, {
          key: "alertSettings",
          value: function alertSettings(selectedPatient) {
            var dailogRef = this.dialog.open(src_app_dialogs_notifications_component_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsComponent, {
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

        }, {
          key: "openDischargeGroupDialog",
          value: function openDischargeGroupDialog(patientId) {
            var _this38 = this;

            var patientIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var patient = arguments.length > 2 ? arguments[2] : undefined;

            if (patient === null || patient === void 0 ? void 0 : patient.activePatch) {
              var dischargeDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_and_stop_monitoring",
                  stop_biosensor: false
                }
              });
              dischargeDialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this38.manager.dischargePatient(patient.patientId);

                  _this38.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });

                  _this38.fetchTableData();
                }
              });
            } else {
              var _dischargeDialog5 = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
                maxWidth: "96vw",
                //minWidth: "500px",
                width: "500px",
                backdropClass: "backdropBackground",
                disableClose: true,
                data: {
                  heading: "active-patients-module.dialog.discharge_patient",
                  message: "active-patients-module.dialog.discharge_patient_message",
                  stop_biosensor: false
                }
              });

              _dischargeDialog5.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  if (patientIds.length > 0) {
                    patientIds.forEach(function (patient) {
                      _this38.manager.dischargePatient(patient.patientId);

                      _this38.selectedPatients.clear();
                    });
                  } else if (patientId) {
                    _this38.manager.dischargePatient(patientId);
                  }

                  _this38.dialog.open(_patient_admitted_modal_patient_admitted_modal_component__WEBPACK_IMPORTED_MODULE_7__.PatientAdmittedModalComponent, {
                    maxWidth: "96vw",
                    //minWidth: "320px",
                    width: "520px",
                    backdropClass: "backdropBackground",
                    disableClose: true,
                    autoFocus: false,
                    data: {
                      title: 'active-patients-module.dialog.patient_discharged'
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "getThirdPartyDevices",
          value: function getThirdPartyDevices(list) {
            if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
              var deviceIds = "";
              list.forEach(function (element) {
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
          }
        }, {
          key: "openStopMonitoringDialog",
          value: function openStopMonitoringDialog(patientId) {
            var _this39 = this;

            var stopMonitoringDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              // minWidth: "500px",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: "active-patients-module.dialog.stop_monitoring",
                message: "active-patients-module.dialog.stop_monitoring_message",
                stop_biosensor: true
              }
            });
            stopMonitoringDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this39.manager.stopMonitoring(patientId);
              }
            });
          } // /**This function is used to open dialog */

        }, {
          key: "openAssignGroupModal",
          value: function openAssignGroupModal(patient) {
            var _this40 = this;

            if (!this.isGcorScCheck()) {
              return;
            }

            this.dialog.open(_assign_group_modal_assign_group_modal_component__WEBPACK_IMPORTED_MODULE_3__.AssignGroupModalComponent, {
              maxWidth: "96vw",
              //minWidth: "500px",
              width: "700px",
              backdropClass: "backdropBackground",
              disableClose: true,
              panelClass: "assign-group-modal",
              data: Object.assign({}, patient)
            }).afterClosed().subscribe(function (group) {
              if (group) {
                var assignGroupObj = {
                  patientId: patient.patientId,
                  cGroup: group.cGroup,
                  pGroup: group.pGroup,
                  admissionId: patient.admissionId
                };

                _this40.manager.assignGroup(assignGroupObj);

                setTimeout(function () {
                  _this40.getActivePatientData();
                }, 500);
              }
            }); //this.getActivePatientData();
          }
        }, {
          key: "patientViewMore",
          value: function patientViewMore(row) {
            this.dialog.open(_patient_details_view_more_patient_details_view_more_component__WEBPACK_IMPORTED_MODULE_6__.PatientDetailsViewMoreComponent, {
              width: "900px",
              maxWidth: "96vw",
              //height:"500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: row
            });
          }
        }, {
          key: "getGroupDetails",
          value: function getGroupDetails() {
            var _this41 = this;

            this.manageGroupService.fetch().subscribe(function (groups) {
              if (groups['data'].length > 0) {
                _this41.groupsData$.next(groups['data']);
              }
            });
          }
        }, {
          key: "transferRelay",
          value: function transferRelay(activePatch, type) {
            var _this42 = this;

            var confirmDialog = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
              maxWidth: "96vw",
              width: "500px",
              backdropClass: "backdropBackground",
              disableClose: true,
              data: {
                heading: type === 'MPR' ? "active-patients-module.button.transfer_mpr" : "active-patients-module.button.transfer_spr",
                message: type === 'MPR' ? "active-patients-module.dialog.transfer_mpr_confirm" : "active-patients-module.dialog.transfer_spr_confirm"
              }
            });
            confirmDialog.afterClosed().subscribe(function (confirm) {
              if (confirm) {
                _this42.service.transferRelay(activePatch).subscribe(function (res) {
                  if (res.message === 'TRANSFER_REQUEST_INITIATED') {
                    _this42.snackbar.openSnackBar("active-patients-module.errors.transfer_initiated", 'bottom', 'center', true);
                  } else {
                    _this42.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                  }
                });
              }
            });
          }
        }, {
          key: "isScOrGc",
          value: function isScOrGc() {
            var role = this.authService.getRoles();
            return role.indexOf("GC") > -1 || role.indexOf("SC") > -1;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            clearInterval(this.reloadInterval);
            (_a = this.activePatientsSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return _PostedFinalComponent;
      }();

      _PostedFinalComponent.ɵfac = function PostedFinalComponent_Factory(t) {
        return new (t || _PostedFinalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manager_active_patient_manager_service__WEBPACK_IMPORTED_MODULE_10__.ActivePatientManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_active_patients_service__WEBPACK_IMPORTED_MODULE_11__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_manage_group_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_14__.ManageGroupsService));
      };

      _PostedFinalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _PostedFinalComponent,
        selectors: [["app-posted-final"]],
        decls: 65,
        vars: 67,
        consts: [["type", "posted_final"], ["page-actions", ""], [1, "d-flex", "justify-content-end", "me-4"], [1, "d-lg-flex", "d-md-none", "d-sm-none", "d-none", "my-2"], ["mat-flat-button", "", "color", "blue", "class", "mx-1", 3, "disabled", "click", 4, "ngIf"], [1, "d-block", "d-lg-none", "my-2"], ["mat-icon-button", "", 1, "border", 3, "matMenuTriggerFor"], [1, "justify-content-enter"], [1, "mobile-menu", "overflow-hidden", "d-block", "d-lg-none"], ["menu", "matMenu"], [1, "px-3"], [1, "table-scroll", "without-tab-table", "comman-table-users", "head-border"], [3, "config", "selection", "data", "columns", "error", "isSelected", "Id", "selectOnlyActive", "sortChange", "page", "selected"], ["table-header", ""], [1, "my-3", "row", "align-items-end", "position-relative", "ps-0", "ps-lg-5"], [1, "mat-label", "filter-label", "d-lg-flex", "d-none", "align-items-center"], [1, "col-sm-12", "col-md-12", "col-lg-9", "col-xl-9", "col-xxl-10", "select-col", "discharge-select-dropdown"], [1, "row"], [1, "col-12", "col-sm-2", "mt-0", "mt-md-2", "mt-lg-0"], ["key", "groupId", "displayKey", "name", 1, "nested-selectfilter", "bg-selectfilter", 3, "selectedValue", "label", "options", "showSelect", "selected"], [1, "col-sm-12", "col-md-12", "col-lg-3", "col-xl-3", "col-xxl-2", "mt-2", "mt-lg-0"], ["appearance", "fill", "floatLabel", "never", 1, "search-form-field"], ["matInput", "", "type", "search", "id", "searchString", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["class", "clear-icon", 3, "click", 4, "ngIf"], ["matSuffix", "", 1, "default-cursor"], ["lsWidgetName", "patient"], ["lsWidgetName", "location"], ["lsWidgetName", "reportTime"], ["lsWidgetName", "prescriber"], ["lsWidgetName", "interpreter"], ["lsWidgetName", "reportType"], ["lsWidgetName", "actions"], ["lsWidgetName", "view"], ["lsWidgetName", "print"], ["lsWidgetName", "download"], ["mat-flat-button", "", "color", "blue", 1, "mx-1", 3, "disabled", "click"], ["src", "assets/icons/download-icon.svg"], [1, "move"], ["src", "assets/icons/print_icon.png"], [1, "clear-icon", 3, "click"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "me-2"], [1, "d-flex", "justify-content-start", "align-items-center", "bold-text"], ["mat-icon-button", "", 1, "shadow-none", 3, "matMenuTriggerFor"], [1, "justify-content-center"], ["xPosition", "before", 1, "setting-card-menu", "profile-card-menu"], ["patientMenu", "matMenu"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", ""], ["type", "button"], ["src", "assets/icons/pdf.png"], ["src", "assets/icons/ecg.png"], ["src", "assets/icons/print.png"], ["src", "assets/icons/download.png"]],
        template: function PostedFinalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ls-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, PostedFinalComponent_button_4_Template, 5, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PostedFinalComponent_button_5_Template, 5, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "mat-menu", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "ls-table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("sortChange", function PostedFinalComponent_Template_ls_table_sortChange_14_listener($event) {
              return ctx.onSortChange($event);
            })("page", function PostedFinalComponent_Template_ls_table_page_14_listener($event) {
              return ctx.onPageChange($event);
            })("selected", function PostedFinalComponent_Template_ls_table_selected_14_listener($event) {
              return ctx.onPatientsSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](15, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function PostedFinalComponent_Template_app_nested_dropdown_selected_23_listener($event) {
              return ctx.searchByGroup("LOCATION", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function PostedFinalComponent_Template_app_nested_dropdown_selected_27_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function PostedFinalComponent_Template_app_nested_dropdown_selected_31_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](33, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function PostedFinalComponent_Template_app_nested_dropdown_selected_35_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](37, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function PostedFinalComponent_Template_app_nested_dropdown_selected_39_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](41, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](43, "app-nested-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selected", function PostedFinalComponent_Template_app_nested_dropdown_selected_43_listener($event) {
              return ctx.searchByGroup("CLINICAL", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](45, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](51, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function PostedFinalComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.searchObject.string = $event;
            })("keyup", function PostedFinalComponent_Template_input_keyup_51_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](52, PostedFinalComponent_mat_icon_52_Template, 2, 0, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](53, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](54, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](55, PostedFinalComponent_ng_template_55_Template, 7, 2, "ng-template", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](56, PostedFinalComponent_ng_template_56_Template, 3, 1, "ng-template", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](57, PostedFinalComponent_ng_template_57_Template, 6, 0, "ng-template", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](58, PostedFinalComponent_ng_template_58_Template, 3, 1, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](59, PostedFinalComponent_ng_template_59_Template, 3, 1, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](60, PostedFinalComponent_ng_template_60_Template, 3, 1, "ng-template", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](61, PostedFinalComponent_ng_template_61_Template, 7, 3, "ng-template", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](62, PostedFinalComponent_ng_template_62_Template, 4, 0, "ng-template", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](63, PostedFinalComponent_ng_template_63_Template, 4, 0, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](64, PostedFinalComponent_ng_template_64_Template, 4, 0, "ng-template", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isClinicianCheck());

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("config", ctx.config)("selection", ctx.selectedPatients)("data", ctx.activePatients)("columns", ctx.activePatient_Columns)("error", ctx.error)("isSelected", ctx.isSelected)("Id", "patientId")("selectOnlyActive", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](19, 39, "posted-final-module.filter"));

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.pGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](24, 41, "posted-final-module.location"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](25, 43, ctx.locationGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](28, 45, "posted-final-module.prescriber"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](29, 47, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](32, 49, "posted-final-module.interpreter"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](33, 51, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](36, 53, "posted-final-module.print_status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](37, 55, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](40, 57, "posted-final-module.print_status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](41, 59, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selectedValue", ctx.filterObject.cGroupId)("label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](44, 61, "posted-final-module.print_status"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](45, 63, ctx.clinicalGroups$))("showSelect", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](50, 65, "posted-final-module.search"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.searchObject.string);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.searchObject.string);
          }
        },
        directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_15__.LsPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenu, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_16__.LsTableComponent, _shared_nested_dropdown_nested_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.NestedDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatSuffix, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_18__.LsWidgetNameDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuItem],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe],
        styles: [".clear-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  right: 0rem;\n}\n.monitoring-icon[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  color: #fff;\n  background: #A55E64;\n  height: 2rem !important;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.biosensor-id[_ngcontent-%COMP%] {\n  width: 4rem;\n  text-align: left;\n  font-weight: 700;\n  padding-left: 5px;\n}\n.indicator-icon[_ngcontent-%COMP%], .stop-monitoring[_ngcontent-%COMP%], .tick-icon[_ngcontent-%COMP%], .close-icon-cell[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  margin-right: 0.5rem;\n}\n.close-icon-cell[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.tick-icon[_ngcontent-%COMP%] {\n  color: #17d468;\n}\n.stop-monitoring[_ngcontent-%COMP%] {\n  color: #ff4c4c;\n}\n.icon-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #043158 !important;\n}\n\n@media (min-width: 992px) and (max-width: 1050px) {\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 0.65rem;\n  }\n}\n.move[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RlZC1maW5hbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxtb2R1bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUNHQSx5QkFBQTtBQXNFQSxvQkFBQTtBQXdDQSxXQUFBO0FBTUEsVUFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQVFBLGtCQUFBO0FBSUEsY0FBQTtBQWVBLGVBQUE7QUFJQSxlQUFBO0FBMEJBLGtCQUFBO0FBUUEsaUJBQUE7QUFRQSw2QkFBQTtBQVFBLCtCQUFBO0FDck5BLFVBQUE7QUZLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWUY7QUFUQTtFQUNFLDZCQUFBO0VBQ0EsV0NiTTtFRGNOLG1CQUFBO0VBQ0EsdUJBQUE7QUFZRjtBQVRFO0VBQ0UseUJBQUE7QUFZSjtBQVRBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JDdUdnQjtFRHRHaEIsaUJBQUE7QUFZRjtBQVRBO0VBQ0UsYUFBQTtFQUNBLHFCQ3lHSztFRHhHTCxvQkFBQTtBQVlGO0FBVEE7RUFDRSxjQ1hlO0FEdUJqQjtBQVJBO0VBQ0UsY0NaaUI7QUR1Qm5CO0FBUEE7RUFDRSxjQ3JCZTtBRCtCakI7QUFOQTtFQUNFLGVBQUE7QUFTRjtBQU5BOzs7OztHQUFBO0FBT0E7RUFDRSxvQ0FBQTtBQVFGO0FBTEEsK0JBQUE7QUFHSTtFQURGO0lBRUksb0JBQUE7RUFPSjtBQUNGO0FBSkE7RUFDRSxrQkFBQTtBQU9GIiwiZmlsZSI6InBvc3RlZC1maW5hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5ldyB2YXJpYWJsZSBkZWZpbmUgKi9cclxuXHJcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL21peGluc1wiO1xyXG5cclxuLmNsZWFyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgcmlnaHQ6IDByZW07XHJcbn1cclxuLy9tb25pdG9yaW5nLWljb25cclxuLm1vbml0b3JpbmctaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjQTU1RTY0O1xyXG4gIGhlaWdodDogMnJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcclxuICBpbnB1dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4uYmlvc2Vuc29yLWlkIHtcclxuICB3aWR0aDogNHJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtNzAwO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaW5kaWNhdG9yLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiAkbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmNsb3NlLWljb24tY2VsbCB7XHJcbiAgY29sb3I6ICRyZWQtZm9udC1jb2xvcjtcclxuICBAZXh0ZW5kIC5pbmRpY2F0b3ItaWNvbjtcclxufVxyXG5cclxuLnRpY2staWNvbiB7XHJcbiAgY29sb3I6ICRncmVlbi1mb250LWNvbG9yO1xyXG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xyXG59XHJcblxyXG4uc3RvcC1tb25pdG9yaW5nIHtcclxuICBjb2xvcjogJHJlZC1mb250LWNvbG9yO1xyXG4gIEBleHRlbmQgLmluZGljYXRvci1pY29uO1xyXG59XHJcblxyXG4uaWNvbi1jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKi5hY3RpdmUtdGFibGUge1xyXG4gIDo6bmctZGVlcCAuc2Nyb2xsLWFzc2lzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzYwcHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufSAqL1xyXG5cclxudGFibGUubWF0LXRhYmxlIHRoZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFiLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qKioqIG1lYWRpYSBxdWVyeSBidXR0b24gKioqKiovXHJcbi5idXR0b24tZ3JvdXAge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgcGFkZGluZzogMHB4IDAuNjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tb3Zle1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiLyptaXhpbnMgKi9cblxuQG1peGluIHRyYW5zaXRpb24oJGFuaW1hdGlvbikge1xuICAtbXMtdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIHRyYW5zaXRpb246ICRhbmltYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm1Sb3RhdGUoKSB7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG5AbWl4aW4gZGlzcGxheWZsZXgoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleHZlcnRpY2FsKCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSgpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"]
      });
      /***/
    },

    /***/
    50:
    /*!******************************************************************!*\
      !*** ./src/app/active-patients/store/active-patients.effects.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActivePatientsEffects": function ActivePatientsEffects() {
          return (
            /* binding */
            _ActivePatientsEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      20275);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      85816);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./active-patients.actions */
      59315);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_active_patients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/active-patients.service */
      65144);

      var _ActivePatientsEffects = /*#__PURE__*/_createClass(function _ActivePatientsEffects(activePatientsService, actions$) {
        var _this43 = this;

        _classCallCheck(this, _ActivePatientsEffects);

        this.activePatientsService = activePatientsService;
        this.actions$ = actions$;
        this.loadActivePatientsRequestEffect$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_ACTIVE_PATIENTS_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (action) {
            return _this43.activePatientsService.getAll(action.payload.url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              var _a, _b;

              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadActivePatientsSuccessAction({
                data: {
                  patients: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.items,
                  total: (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.total
                }
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadActivePatientsFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.loadUnAssignedPatientsRequestEffect$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_UNASSIGNED_PATIENTS_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (action) {
            return _this43.activePatientsService.getUnassignedPatients(action.payload.url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              var _a, _b;

              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadUnassignedPatientsSuccessAction({
                data: {
                  items: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.items,
                  total: (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.total
                }
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadUnassignedPatientsFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.loadDoctorsRequestEffect$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_DOCTORS_LIST_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadDoctorsListRequestAction()), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (action) {
            return _this43.activePatientsService.getDoctorsList().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (doctors) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadDoctorsListSuccessAction({
                doctors: doctors
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.LoadDoctorsListFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.createNewPatientEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.CREATE_NEW_PATIENT_REQUEST), // startWith(new featureActions.createNewPatientRequestAction()),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.savePatient(data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (newPatient) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.CreateNewPatientSuccessAction({
                newPatient: newPatient
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.CreateNewPatientFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.updatePatientEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UPDATE_PATIENT_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.updatePatient(data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.UpdatePatientSuccessAction({
                updatedData: response.data
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.UpdatePatientFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.updatePatientGroupEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.ASSIGN_GROUP_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.assignGroup(data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.AssignGroupSuccessAction({
                updatedData: response
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.AssignGroupFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.stopMonitoringEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.STOP_MONITORING_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.stopProcedure(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (patient) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.StopMonitoringSuccessAction({
                patient: patient
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.StopMonitoringFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.dischargePatientEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.DISCHARGE_PATIENT_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.dischargePatient(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (dischargedPatient) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.DischargePatientSuccessAction({
                dischargedPatient: dischargedPatient
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.DischargePatientFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.setSelectedPatientIdsEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_SELECTED_PATIENTS_IDs_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.setSelectedPatientIds(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (patientIds) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedPatientIdsSuccessAction({
                patientIds: patientIds
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedPatientIdsFailureAction({
                error: error
              }));
            }));
          }));
        });
        this.setSelectedtabEffects$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this43.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_SELECTED_TAB_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (data) {
            return _this43.activePatientsService.setSelectedTab(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (selectedTab) {
              return new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedTabSuccessAction({
                selectedTab: selectedTab
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _active_patients_actions__WEBPACK_IMPORTED_MODULE_0__.SetSelectedTabFailureAction({
                error: error
              }));
            }));
          }));
        });
      });

      _ActivePatientsEffects.ɵfac = function ActivePatientsEffects_Factory(t) {
        return new (t || _ActivePatientsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_active_patients_service__WEBPACK_IMPORTED_MODULE_1__.ActivePatientsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions));
      };

      _ActivePatientsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _ActivePatientsEffects,
        factory: _ActivePatientsEffects.ɵfac
      });
      /***/
    },

    /***/
    18610:
    /*!*******************************************************************!*\
      !*** ./src/app/pipe/epochToHumanDate/epoch-to-human-date.pipe.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EpochToHumanDatePipe": function EpochToHumanDatePipe() {
          return (
            /* binding */
            _EpochToHumanDatePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EpochToHumanDatePipe = /*#__PURE__*/function () {
        function _EpochToHumanDatePipe() {
          _classCallCheck(this, _EpochToHumanDatePipe);
        }

        _createClass(_EpochToHumanDatePipe, [{
          key: "transform",
          value: function transform(value) {
            if (value) {
              var humanReadableDate = new Date(value * 1000);
              var formattedDate = "".concat(this.getMonthName(humanReadableDate.getMonth()), " ").concat(humanReadableDate.getDate(), " , ").concat(humanReadableDate.getFullYear(), " /\n                          ").concat(humanReadableDate.getHours(), ":").concat(humanReadableDate.getMinutes());
              return formattedDate;
            } else {
              return '-';
            }
          }
        }, {
          key: "getMonthName",
          value: function getMonthName(idx) {
            switch (idx) {
              case 0:
                return 'Jan';

              case 1:
                return 'Feb';

              case 2:
                return 'Mar';

              case 3:
                return 'Apr';

              case 4:
                return 'May';

              case 5:
                return 'Jun';

              case 6:
                return 'Jul';

              case 7:
                return 'Aug';

              case 8:
                return 'Sep';

              case 9:
                return 'Oct';

              case 10:
                return 'Nov';

              case 11:
                return 'Dec';
            }
          }
        }]);

        return _EpochToHumanDatePipe;
      }();

      _EpochToHumanDatePipe.ɵfac = function EpochToHumanDatePipe_Factory(t) {
        return new (t || _EpochToHumanDatePipe)();
      };

      _EpochToHumanDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "epochToHumanDate",
        type: _EpochToHumanDatePipe,
        pure: true
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_active-patients_active-patients_module_ts-es5.js.map