"use strict";
(self["webpackChunklife_line"] = self["webpackChunklife_line"] || []).push([["default-src_app_dialogs_notifications-component_notifications_notifications_component_ts"],{

/***/ 45211:
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/add-event/add-event.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEventComponent": function() { return /* binding */ AddEventComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _validators_custom_validator_at_least_once_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../validators/custom-validator-at-least-once.validator */ 98809);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alert-configuration.service */ 26430);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-pick-datetime */ 42910);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/text-field */ 7085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function AddEventComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.note"), " ");
} }
function AddEventComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddEventComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEventComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.selectTab("event"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEventComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.selectTab("note"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.selectedTab === "event" ? "select-btn-active" : "select-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "alert_config_module.add_event.event"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.selectedTab === "note" ? "select-btn-active" : "select-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "alert_config_module.note"), " ");
} }
function AddEventComponent_div_6_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddEventComponent_div_6_div_2_div_6_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r20.onSymptomChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symptom_r19 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", symptom_r19)("checked", (ctx_r16.addEventForm == null ? null : ctx_r16.addEventForm.value == null ? null : ctx_r16.addEventForm.value.symptoms == null ? null : ctx_r16.addEventForm.value.symptoms.indexOf(symptom_r19)) !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", symptom_r19, " ");
} }
function AddEventComponent_div_6_div_2_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.symptoms_invalid"), " ");
} }
function AddEventComponent_div_6_div_2_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.symptoms_invalid"), " ");
} }
function AddEventComponent_div_6_div_2_div_8_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.symptoms_required"), " ");
} }
function AddEventComponent_div_6_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddEventComponent_div_6_div_2_div_8_mat_error_4_Template, 3, 3, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddEventComponent_div_6_div_2_div_8_mat_error_5_Template, 3, 3, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r18.f.manualSymptom == null ? null : ctx_r18.f.manualSymptom.errors == null ? null : ctx_r18.f.manualSymptom.errors.required) && !(ctx_r18.f.manualSymptom == null ? null : ctx_r18.f.manualSymptom.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.submitted && (ctx_r18.f.manualSymptom == null ? null : ctx_r18.f.manualSymptom.errors == null ? null : ctx_r18.f.manualSymptom.errors.required));
} }
function AddEventComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddEventComponent_div_6_div_2_div_6_Template, 3, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddEventComponent_div_6_div_2_mat_error_7_Template, 3, 3, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddEventComponent_div_6_div_2_div_8_Template, 6, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "alert_config_module.add_event.record_symptoms"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r11.symptoms);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r11.f.symptoms == null ? null : ctx_r11.f.symptoms.errors == null ? null : ctx_r11.f.symptoms.errors.required) && !(ctx_r11.f.symptoms == null ? null : ctx_r11.f.symptoms.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.addEventForm == null ? null : ctx_r11.addEventForm.value == null ? null : ctx_r11.addEventForm.value.symptoms == null ? null : ctx_r11.addEventForm.value.symptoms.indexOf("Other")) !== -1);
} }
function AddEventComponent_div_6_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddEventComponent_div_6_div_3_div_6_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r28.onActivityChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r27 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", act_r27)("checked", (ctx_r24.addEventForm == null ? null : ctx_r24.addEventForm.value == null ? null : ctx_r24.addEventForm.value.activity == null ? null : ctx_r24.addEventForm.value.activity.indexOf(act_r27)) !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", act_r27, " ");
} }
function AddEventComponent_div_6_div_3_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.activity_required"), " ");
} }
function AddEventComponent_div_6_div_3_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.activity_invalid"), " ");
} }
function AddEventComponent_div_6_div_3_div_8_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.enter_activity"), " ");
} }
function AddEventComponent_div_6_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddEventComponent_div_6_div_3_div_8_mat_error_4_Template, 3, 3, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddEventComponent_div_6_div_3_div_8_mat_error_5_Template, 3, 3, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r26.f.manualActivity == null ? null : ctx_r26.f.manualActivity.errors == null ? null : ctx_r26.f.manualActivity.errors.required) && !(ctx_r26.f.manualActivity == null ? null : ctx_r26.f.manualActivity.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r26.submitted && (ctx_r26.f.manualActivity == null ? null : ctx_r26.f.manualActivity.errors == null ? null : ctx_r26.f.manualActivity.errors.required));
} }
function AddEventComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddEventComponent_div_6_div_3_div_6_Template, 3, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddEventComponent_div_6_div_3_mat_error_7_Template, 3, 3, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddEventComponent_div_6_div_3_div_8_Template, 6, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "alert_config_module.add_event.select_activity"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.submitted && !(ctx_r12.addEventForm == null ? null : (tmp_2_0 = ctx_r12.addEventForm.get("activity")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length) && (ctx_r12.addEventForm == null ? null : (tmp_2_0 = ctx_r12.addEventForm.get("symptoms")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r12.addEventForm == null ? null : ctx_r12.addEventForm.value == null ? null : ctx_r12.addEventForm.value.activity == null ? null : ctx_r12.addEventForm.value.activity.indexOf("Other")) !== -1);
} }
function AddEventComponent_div_6_div_4_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.note_required"), " ");
} }
function AddEventComponent_div_6_div_4_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.note_pattern"), " ");
} }
function AddEventComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddEventComponent_div_6_div_4_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddEventComponent_div_6_div_4_mat_error_8_Template, 3, 3, "mat-error", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddEventComponent_div_6_div_4_mat_error_9_Template, 3, 3, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "alert_config_module.add_event.record_note"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r13.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.submitted && (ctx_r13.f.note == null ? null : ctx_r13.f.note.errors == null ? null : ctx_r13.f.note.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r13.f.note == null ? null : ctx_r13.f.note.errors == null ? null : ctx_r13.f.note.errors.required) && (ctx_r13.f.note == null ? null : ctx_r13.f.note.errors == null ? null : ctx_r13.f.note.errors.pattern));
} }
function AddEventComponent_div_6_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.time_required"), " ");
} }
function AddEventComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddEventComponent_div_6_div_2_Template, 9, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddEventComponent_div_6_div_3_Template, 9, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddEventComponent_div_6_div_4_Template, 10, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddEventComponent_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.currentTime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "access_time_filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "owl-date-time", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AddEventComponent_div_6_mat_error_17_Template, 3, 3, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.addEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.selectedTab === "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.selectedTab === "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.selectedTab === "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 16, "alert_config_module.add_event.time"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx_r3.patchStartedTime())("max", ctx_r3.getCurrentDate())("owlDateTime", _r14)("owlDateTimeTrigger", _r14)("ngModel", ctx_r3.currentTime)("disabled", ctx_r3.editEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("owlDateTimeTrigger", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hour12Timer", false)("pickerType", "timer")("disabled", ctx_r3.editEvent || ctx_r3.addNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.time == null ? null : ctx_r3.f.time.errors == null ? null : ctx_r3.f.time.errors.required);
} }
function AddEventComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "textarea", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddEventComponent_div_7_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.recordedTime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "owl-date-time", 55, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 11, "alert_config_module.recorded_note"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", true)("value", ctx_r4.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 13, "alert_config_module.add_event.time"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("max", ctx_r4.getCurrentDate())("owlDateTime", _r38)("owlDateTimeTrigger", _r38)("ngModel", ctx_r4.recordedTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("owlDateTimeTrigger", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hour12Timer", false)("disabled", true);
} }
function AddEventComponent_mat_error_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.event_note_required"));
} }
function AddEventComponent_mat_error_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.note_required"));
} }
function AddEventComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEventComponent_mat_error_9_span_1_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddEventComponent_mat_error_9_span_2_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.addNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.addNote);
} }
function AddEventComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "manage_users_module.adduser.cancelbutton"), " ");
} }
function AddEventComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEventComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r43.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "manage_users_module.adduser.savebutton"), " ");
} }
class AddEventComponent {
    constructor(formBuilder, dialogRef, data, service, userPreference, snackbar) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.userPreference = userPreference;
        this.snackbar = snackbar;
        this.submitted = false;
        this.selectedTab = "event";
        this.recordedNote = false;
        this.notes = "";
        this.patchStarted = null;
        this.editEvent = false;
        this.addNote = false;
        this.note = '';
        this.Events = ['Lightheadedness / Dizziness', 'Passed out', 'Chest Pain / Tightness', 'Palpitation / High Heart Rate', 'Fluttering in chest',
            'No Symptom', 'Other'];
        this.symptoms = [
            "Heart Racing",
            "Anxious",
            "Chest Discomfort / Pain",
            "Heart Fluttering",
            "Palpitation",
            "Feeling Weak/Faint",
            "Dizziness",
            "Short of Breath",
            "Tired / Fatigued",
            "None / Accidental Push",
            "Other"
        ];
        this.activity = [
            "Normal routine",
            "Walking",
            "Sitting",
            "Lying down",
            "Exercising",
            "Jogging or running",
            "Sleeping",
            "Smoking",
            "Stair Climbing",
            "Eating",
            "Fast Walking",
            "Other"
        ];
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.recordedNote = (_a = this.data) === null || _a === void 0 ? void 0 : _a.recordedNote;
        this.addNote = (_b = this.data) === null || _b === void 0 ? void 0 : _b.addNote;
        this.editEvent = (_c = this.data) === null || _c === void 0 ? void 0 : _c.editEvent;
        this.patientId = (_d = this.data) === null || _d === void 0 ? void 0 : _d.patientId;
        this.patchStarted = (_e = this.data) === null || _e === void 0 ? void 0 : _e.patchStarted;
        this.timeZoneOffset = this.userPreference.getUserTimeZone();
        this.timeZone = sessionStorage.getItem('timezone');
        this.currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: this.timeZone }));
        if (this.recordedNote) {
            this.selectedTab = "recordedNote";
            this.notes = (_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.event) === null || _g === void 0 ? void 0 : _g.notes;
            this.recordedTime = new Date(new Date(((_h = this.data) === null || _h === void 0 ? void 0 : _h.event.alertTime) * 1000).toLocaleString("en-US", { timeZone: this.timeZone }));
        }
        if (this.addNote) {
            this.selectedTab = 'note';
        }
        this.addEventForm = this.formBuilder.group({
            symptoms: this.formBuilder.array([]),
            activity: this.formBuilder.array([]),
            time: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            ],
            note: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9]{1}[°%&.()/a-zA-Z0-9 ',-:\n]*$")],
            ],
            manualSymptom: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9]{1}[°%&.()/a-zA-Z0-9 ,-:]*$")]],
            manualActivity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9]{1}[°%&.()/a-zA-Z0-9 ,-:]*$")]],
        }, { validator: (0,_validators_custom_validator_at_least_once_validator__WEBPACK_IMPORTED_MODULE_0__.atLeastOne)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, ["symptoms", "note"]) });
        if ((_j = this.data) === null || _j === void 0 ? void 0 : _j.event) {
            this.currentTime = new Date(new Date(((_k = this.data) === null || _k === void 0 ? void 0 : _k.event.alertTime) * 1000).toLocaleString("en-US", { timeZone: this.timeZone }));
            this.note = (_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.event) === null || _m === void 0 ? void 0 : _m.notes;
        }
    }
    onSymptomChange(e) {
        const symptomsArray = this.addEventForm.get('symptoms');
        if (e === null || e === void 0 ? void 0 : e.checked) {
            symptomsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(e.source.value));
        }
        else {
            let i = 0;
            symptomsArray.controls.forEach((item) => {
                if (item.value == e.source.value) {
                    symptomsArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    onActivityChange(e) {
        const activityArray = this.addEventForm.get('activity');
        if (e === null || e === void 0 ? void 0 : e.checked) {
            activityArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(e.source.value));
        }
        else {
            let i = 0;
            activityArray.controls.forEach((item) => {
                if (item.value == e.source.value) {
                    activityArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    charsOnly(event) {
        let charsOnlyPattern = /^[a-zA-Z]$/;
        let key = event.key;
        if (charsOnlyPattern.test(key)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    get f() {
        return this.addEventForm.controls;
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        this.submitted = true;
        if (((_c = (_b = (_a = this.addEventForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.symptoms) === null || _c === void 0 ? void 0 : _c.indexOf('Other')) !== -1) {
            this.addEventForm.controls['manualSymptom'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9]{1}[°%&.()/a-zA-Z0-9 ,-:]*$")]);
        }
        else {
            this.addEventForm.controls['manualSymptom'].clearValidators();
        }
        if (((_f = (_e = (_d = this.addEventForm) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.activity) === null || _f === void 0 ? void 0 : _f.indexOf('Other')) !== -1) {
            this.addEventForm.controls['manualActivity'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9]{1}[°%&.()/a-zA-Z0-9 ,-:]*$")]);
        }
        else {
            this.addEventForm.controls['manualActivity'].clearValidators();
        }
        this.addEventForm.controls['manualActivity'].updateValueAndValidity();
        this.addEventForm.controls['manualSymptom'].updateValueAndValidity();
        if (this.addEventForm.invalid || (!((_j = (_h = (_g = this.addEventForm) === null || _g === void 0 ? void 0 : _g.get('activity')) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.length) && ((_m = (_l = (_k = this.addEventForm) === null || _k === void 0 ? void 0 : _k.get('symptoms')) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.length))) {
            this.addEventForm.markAllAsTouched();
            return;
        }
        else {
            let formData = this.addEventForm.value;
            let date = formData.time.toDateString() + ' ' + formData.time.getHours() + ':'
                + formData.time.getMinutes() + ':'
                + formData.time.getSeconds() + " " + this.timeZoneOffset;
            let event;
            let manualSymptomIndex = formData.symptoms.indexOf('Other');
            if (manualSymptomIndex > -1) {
                formData.symptoms[manualSymptomIndex] = formData.manualSymptom;
            }
            let manualActivityIndex = formData.activity.indexOf('Other');
            if (manualActivityIndex > -1) {
                formData.activity[manualActivityIndex] = formData.manualActivity;
            }
            if (this.editEvent) {
                event = Object.assign(Object.assign({}, (_o = this.data) === null || _o === void 0 ? void 0 : _o.event), { symptoms: formData.symptoms, activity: formData.activity, notes: (formData === null || formData === void 0 ? void 0 : formData.note) || ((_q = (_p = this.data) === null || _p === void 0 ? void 0 : _p.event) === null || _q === void 0 ? void 0 : _q.notes) });
                console.log(event);
            }
            else if (this.addNote) {
                event = Object.assign(Object.assign({}, (_r = this.data) === null || _r === void 0 ? void 0 : _r.event), { notes: formData.note });
            }
            else {
                event = {
                    symptoms: formData.symptoms,
                    activity: formData.activity,
                    notes: formData.note,
                    alertTime: Date.parse(date) / 1000,
                    patientId: this.patientId
                };
            }
            this.service.addEvent(event).subscribe(res => {
                console.log('res', res);
                if (res.status === 'OK') {
                    //this.snackbar.openSnackBar("alert_config_module.messages.add_event_success", 'bottom', 'center', true);
                    this.dialogRef.close(true);
                }
            }, error => {
                console.log(error);
                if (error) {
                    this.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                }
            });
        }
    }
    getCurrentDate() {
        return new Date(new Date().toLocaleString("en-US", { timeZone: this.timeZone }));
    }
    patchStartedTime() {
        return new Date(new Date(this.patchStarted).toLocaleString("en-US", { timeZone: this.timeZone }));
    }
    selectTab(tab) {
        this.submitted = false;
        this.selectedTab = tab;
    }
}
AddEventComponent.ɵfac = function AddEventComponent_Factory(t) { return new (t || AddEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_2__.UserPreferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService)); };
AddEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddEventComponent, selectors: [["app-add-event"]], decls: 13, vars: 8, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "dialog-header", "patientalert-dialog-header"], ["mat-dialog-title", "", "class", "mx-2 pb-2", 4, "ngIf"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "btn-group-area button-card-area d-flex", 4, "ngIf"], [1, "py-2", "mat-dialog-popup"], [1, "scroll-assist"], [4, "ngIf"], [1, "error-message"], ["class", "mt-2", 4, "ngIf"], ["matDialogActions", "", "align", "right", 1, "me-4", "pe-2"], ["mat-flat-button", "", "mat-dialog-close", "", "class", "fill-btn", "color", "warn", 4, "ngIf"], ["mat-flat-button", "", "class", "fill-btn", "color", "primary", 3, "click", 4, "ngIf"], ["mat-dialog-title", "", 1, "mx-2", "pb-2"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "btn-group-area", "button-card-area", "d-flex"], ["mat-button", "", 3, "ngClass", "click"], [1, "dialog-form", 3, "formGroup"], ["class", "row form-row", 4, "ngIf"], [1, "row", "form-row"], [1, "col-3", "align-items-center"], [1, "matlabel", "pt-2"], [1, "col-9", "text-end"], ["appearance", "fill", 1, "time-input", "formfield-control"], ["matInput", "", "type", "text", "formControlName", "time", "autocomplete", "off", "readonly", "", 1, "form-control", 3, "min", "max", "owlDateTime", "owlDateTimeTrigger", "ngModel", "disabled", "ngModelChange"], ["matSuffix", "", 1, "cursor-pointer", "material-icons-outlined", 3, "owlDateTimeTrigger"], [3, "hour12Timer", "pickerType", "disabled"], ["dt", ""], [1, "px-3"], [1, "matlabel", "fw-bold", "my-2"], [1, "row"], ["class", "col-md-6 my-1", 4, "ngFor", "ngForOf"], ["class", "px-3", 4, "ngIf"], [1, "col-md-6", "my-1"], [3, "value", "checked", "change"], [1, "col-md-12", "my-1"], ["type", "text", "formControlName", "manualSymptom", "placeholder", "Enter Symptom", "maxlength", "128", 1, "py-1", "text-input"], ["class", "my-1", 4, "ngIf"], [1, "my-1"], ["type", "text", "formControlName", "manualActivity", "placeholder", "Enter Activity", "maxlength", "128", 1, "py-1", "text-input"], [1, "px-3", "pb-2"], [1, "matlabel"], [1, "notification-textarea"], ["matInput", "", "cdkTextareaAutosize", "", "formControlName", "note", "maxlength", "300", 1, "p-2", "text-area", 3, "ngModel", "ngModelChange"], ["class", "required-text py-1", 4, "ngIf"], ["class", "text-wrap", 4, "ngIf"], [1, "required-text", "py-1"], [1, "text-wrap"], [1, "dialog-form"], [1, "notification-textarea", "textarea-note"], ["matInput", "", "cdkTextareaAutosize", "", 1, "p-2", "text-area", 3, "readonly", "value"], [1, "col-md-3", "align-items-center"], [1, "matlabel", "pt-3"], [1, "col-md-9", "text-end"], ["matInput", "", "type", "text", "autocomplete", "off", "readonly", "", 1, "form-control", 3, "max", "owlDateTime", "owlDateTimeTrigger", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "owlDateTimeTrigger"], [3, "hour12Timer", "disabled"], [1, "mt-2"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "warn", 1, "fill-btn"], ["mat-flat-button", "", "color", "primary", 1, "fill-btn", 3, "click"]], template: function AddEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEventComponent_h1_1_Template, 3, 3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddEventComponent_button_2_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddEventComponent_div_3_Template, 7, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddEventComponent_div_6_Template, 18, 18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddEventComponent_div_7_Template, 22, 15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddEventComponent_mat_error_9_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddEventComponent_button_11_Template, 3, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddEventComponent_button_12_Template, 3, 3, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.recordedNote || ctx.addNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.recordedNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.recordedNote && !ctx.addNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedTab === "event" || ctx.selectedTab === "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedTab === "recordedNote");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && !(ctx.addEventForm == null ? null : (tmp_5_0 = ctx.addEventForm.get("symptoms")) == null ? null : tmp_5_0.value == null ? null : tmp_5_0.value.length) && !(ctx.addEventForm == null ? null : (tmp_5_0 = ctx.addEventForm.get("note")) == null ? null : tmp_5_0.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.recordedNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.recordedNote);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__.OwlDateTimeInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__.NativeElementInjectorDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__.OwlDateTimeTriggerDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__.OwlDateTimeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__.CdkTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".form-row[_ngcontent-%COMP%] {\n  background-color: #043c6d;\n  padding: 10px;\n  margin: 0 0 0.5rem;\n  border-radius: 4px;\n}\n  .mat-dialog-container {\n  background-color: #04294a;\n}\n.text-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.matlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-style: 16px !important;\n}\n.time-control[_ngcontent-%COMP%] {\n  position: relative;\n}\n.time-control[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0px;\n  right: 0.5rem;\n  content: \"\";\n  background-image: url('timer-icon.svg');\n  background-repeat: no-repeat;\n  height: 1rem;\n  width: 1rem;\n  margin: auto;\n  bottom: 0;\n  background-size: 1rem;\n}\n.mat-dialog-popup[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .matlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  font-weight: 600;\n  text-transform: capitalize;\n  opacity: 1;\n  padding-bottom: 5px;\n  padding-top: 10px;\n}\n.mat-dialog-popup[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .time-input[_ngcontent-%COMP%] {\n  width: 11.3rem;\n  margin: 0px;\n}\n@media (max-width: 400px) {\n  .mat-dialog-popup[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .time-input[_ngcontent-%COMP%] {\n    width: 10rem;\n  }\n}\n.mat-dialog-popup[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .time-input[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #666666 !important;\n}\n.select-btn[_ngcontent-%COMP%] {\n  padding: 5px 40px;\n  background: #023f74;\n  border-radius: 8px;\n  margin: 7px 7px 0px 0px;\n  height: 40px;\n  font-weight: 600;\n}\n.select-btn-active[_ngcontent-%COMP%] {\n  padding: 5px 40px;\n  background: #023f74;\n  border-radius: 8px 8px 0px 0px;\n  margin: 0px 7px 0px 0px;\n  height: 56px;\n  font-weight: 600;\n}\n.button-card-area[_ngcontent-%COMP%]   button.select-btn-active[_ngcontent-%COMP%] {\n  background: #023f74;\n}\n.required-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.scroll-assist[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.text-area[_ngcontent-%COMP%] {\n  height: 26rem !important;\n}\n.textarea-note[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\n  height: 8rem !important;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  background: #00549f;\n  min-height: 35px;\n}\n.dialog-header.patientalert-dialog-header[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  opacity: 1 !important;\n}\n.time-field[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.owl-dt-container-disabled[_ngcontent-%COMP%], .owl-dt-trigger-disabled[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\nbutton.fill-btn[_ngcontent-%COMP%] {\n  min-width: 10rem;\n}\n@media (max-width: 499px) {\n  button.fill-btn[_ngcontent-%COMP%] {\n    min-width: 7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsImFkZC1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSx5QkFBQTtBQXNFQSxvQkFBQTtBQXdDQSxXQUFBO0FBTUEsVUFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQVFBLGtCQUFBO0FBSUEsY0FBQTtBQWVBLGVBQUE7QUFJQSxlQUFBO0FBMEJBLGtCQUFBO0FBUUEsaUJBQUE7QUFRQSw2QkFBQTtBQVFBLCtCQUFBO0FDbk5BO0VBQ0UseUJEZ0ZtQjtFQy9FbkIsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFhRjtBQVhBO0VBQ0UseUJEcUJrQjtBQ1BwQjtBQVpBO0VBQ0UsV0FBQTtBQWVGO0FBYkE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBZ0JGO0FBZEE7RUFDRSxrQkFBQTtBQWlCRjtBQWZFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBaUJKO0FBVEk7RUFDRSxlRHBDVztFQ3FDWCxXRDFDRTtFQzJDRixnQkRvRlk7RUNuRlosMEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVlOO0FBVEk7RUFDRSxjQUFBO0VBSUEsV0FBQTtBQVFOO0FBWE07RUFGRjtJQUdJLFlBQUE7RUFjTjtBQUNGO0FBWk07RUFDRSx5QkFBQTtBQWNSO0FBTkE7RUFDRSxpQkFBQTtFQUNBLG1CRE5tQjtFQ09uQixrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBU0Y7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsbUJEZm1CO0VDZ0JuQiw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBU0Y7QUFMRTtFQUNFLG1CRHhCaUI7QUNnQ3JCO0FBRkE7RUFDRSxlRGpGUTtBQ3NGVjtBQUhBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQU1GO0FBSEE7RUFDQSx3QkFBQTtBQU1BO0FBRkU7RUFDRSx1QkFBQTtBQUtKO0FBREE7RUFDRSxtQkQ3QmdCO0VDOEJoQixnQkFBQTtBQUlGO0FBRkU7RUFDRSw0QkFBQTtBQUlKO0FBQUE7RUFDRSxpQ0FBQTtFQUNBLHFCQUFBO0FBR0Y7QUFBQTtFQUNFLG9CQUFBO0FBR0Y7QUFBQTs7RUFFRSxxQkFBQTtBQUdGO0FBREEsaUJBQUE7QUFDQTtFQUFnQixnQkFBQTtBQUtoQjtBQUhFO0VBRkY7SUFHSSxlQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJhZGQtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG5cbi8qZm9udCBjb2xvciBhbmQgZmFtaWx5ICovXG5cbiRiYXNlLWZvbnQtc2l6ZTogMTRweDtcbiRiYXNlLWZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLFxuICAgIFwiTXVsaS1SZWd1bGFyXCIsXG4gICAgc2Fucy1zZXJpZjtcbiRiYXNlLWZvbnQtY29sb3I6ICR3aGl0ZTtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTI6IDEycHg7XG4kc2l6ZS0yNDogMjRweDtcbiRzaXplLTE2OiAxNnB4O1xuJHNpemUtMTA6IDEwcHg7XG4kc2l6ZS01OiA1cHg7XG4kc2l6ZS02OiA2cHg7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTE4OiAxOHB4O1xuJHNpemUtMTU6IDE1cHg7XG4kc2l6ZS0yNzogMjdweDtcbiRjb25maXJtLWRpYWxvZy13aWR0aDogNzUwcHg7XG4kZXJyMHJfdGV4dF9jb2xvcjogI2RjMzU0NTtcbiRvcGFjaXR5LXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQpO1xuJG9wYWNpdHktYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4kcmVkLWZvbnQtY29sb3I6ICNmZjRjNGM7XG4kbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGxvdy1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRhbWJlci1mb250LWNvbG9yOiAjRkZDNzAwO1xuJGdyZWVuLWZvbnQtY29sb3I6ICMxN2Q0Njg7XG4kZGFyay1jb2xvci1vcHRpb246ICMwNDI5NGE7XG4kdGFibGUtdHItY29sb3I6IHJnYig0LCA2MCwgMTA5KTtcbiR0YWJsZS1zcGFjaW5nX2NvbG9yOiAjMDQyOTRhO1xuJHAtY29sb3I6ICMwMDQyN2NhMztcbiRyb3ctZGlzYWJsZWQ6IHJnYig0LCA2MCwgMTA5LCAwLjYpO1xuJHdoaXRlLXRleHQ6ICNmMmYyZjI7XG4kYnJvd24tY29sb3I6ICM4NzdkN2Q7XG4kYXJyb3ctY29sb3I6ICM3YzhmYTA7XG4kbGFiZWwtY29sb3I6ICM0ZWEyZWY7XG4kcmVxdXJpZWQtY29sb3I6ICNmZjY1NjU7XG4kYmxhY2stY29sb3I6ICRibGFjaztcbiRncmF5LWNvbG9yOiAjMzMzMzMzO1xuJHRpbWUtY29sb3I6ICM2N2E1ZDI7XG4kY2xvc2UtY29sb3I6ICNhZmFkYWQ7XG4kc3BvMi1jb2xvcjogIzAwZjBmZjtcbiRoZWFydHJhdGUtY29sb3I6ICMwMGZmNmQ7XG4keWVsbG93LWNvbG9yOiAjZmFmZjAwO1xuJGxpZ2h0LXRleHQtY29sb3I6ICNFQkVCRUI7XG4kc2V0dGluZy1jb2xvcjogI2UxZTFlMTtcbiRjb2xvcm5ldy15ZWxsb3c6ICNmZmY2MTg7XG4kc3RvcC1idXR0b24tY29sb3I6ICNjYTQyNDI7XG4kZXdzLWNvbG9yOiAjZmY1ODQxO1xuJGJwLWNvbG9yOiAjZmY5ODNhO1xuJGNhbmNlbC1jb2xvcjogI2ZmNDQ0NDtcbiRoaXN0b3J5LWxhYmVsLWNvbG9yOiAjYTdjN2U0O1xuJGNvbG9yLWNvZGUtbmV3OiAjYzVmZjIwO1xuJHBpbmstY29sb3I6ICNjNjAwNWY7XG4kZ3JlZW4tY29sb3I6ICMzZmZmOTE7XG4kYmx1ZS1jb2xvcjogIzFmYzBmMztcbiRjb2xvcmdyYXk6ICM2NjY2NjY7XG4kcmVkLWxhYmVsLWNvbG9yOiAjZjQ0MzM2O1xuJHNlbGVjdC1sYWJlbC1jb2xvcjogIzAyM2Y3NDtcbiRzZWxlY3Qtb3B0aW9uLWNvbG9yOiAjMjM1OTg3O1xuJHNlbGVjdC1vcHRpb24tYmc6ICNFMEVBRjI7XG4kc2VsZWN0LW9wdGlvbi1zZWxlY3RlZC1iZzogJHdoaXRlO1xuJGdyYXktY29sb3ItdGltZTogI0M0QzRDNDtcbiRibHVlLWNvbG9yLWdyb3VwOiMxZmMwZjM7XG4kdHJlbmQtdG9wQ29sb3I6IzA0M0I2QztcbiRleHBpcmVkLXZpdGFsOiAjYTlhOWE5O1xuJGluYWN0aXZlLWNvbG9yOiMxODYyQTE7XG4kc3RhdHVzLWNvbG9yLWJnOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XG4kc3RhdHVzLWNvbG9yLWJvcmRlcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cbi8qYmFja2dyb3VuZCBjb2xvciAqL1xuXG4kcHJpbWFyeS1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1wcmltYXJ5LWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRiZy13aGl0ZS1jb2xvcjogJHdoaXRlO1xuJGxpZ2h0LWJsdWUtY29sb3I6ICMwMGJiZWY7XG4kYmctdG9wYmFyLWNvbG9yOiByZ2JhKDAsIDY2LCAxMjQsIDAuNjQpO1xuJGJnLXllbGxvdy1jb2xvcjogI2YyY2Q0YjtcbiRiZy1idXR0b24tY29sb3I6ICMwMDU0OWY7XG4kYmctYnV0dG9uLWhvdmVyOiAkYmctcHJpbWFyeS1jb2xvcjtcbiRiZy10YWJsZS1yb3ctY29sb3I6ICMwNDNjNmQ7XG4kYmctc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuMTYpO1xuJGJnLWRpc2FibGUtY29sb3I6ICMyMjRjNzI7XG4kYmctdGFibGUtcm93LWFjdGl2ZS1jb2xvcjogIzFiNmRiNjtcbiRtb2RhbC1kYWlsb2ctaGVhZHN0cmlwLWNvbG9yOiAjMWM0ODcxO1xuJGJnLWlucHV0LWNvbG9yOiAjZWVlZWVlO1xuJGJnLWJ1dHRvbi1saWdodC1yZWQtY29sb3I6ICNjZDZkNmQ7XG4kbGlnaHQtYmx1ZS1iZzogI2UwZWFmMjtcbiRiZy1zbGlkZXItYmFyOiAjMDcyNTQwO1xuJGJnLWluZm8tY29sb3I6ICMwOTQ3OGU7XG4kYmctZGFzaGJvYXJkLWNvbG9yOiAjMDA0MjdjO1xuJGJnLWdyaWQtY29sb3I6ICMwMzM1NjI7XG4kYmctY2FyZC1jb2xvcjogIzA2MzA1NjtcbiRiZy1zaWduYWwtY29sb3I6ICMwNjI4NDc7XG4kYmctY29sb3ItbWF0Y2g6ICMwMzJENTI7XG4kdG9wYmF0LXN0cmlwLWNvbG9yOiAjMjU0ODY4O1xuJGJ1dHRvbi1jb2xvci1iZzogIzA1NDY4MDtcbiRiZy1tYXRjYXJkLWNvbG9yOiAjMDQzYjZkO1xuJGJnLWJhZ2UtY29sb3I6ICNhMDM0MzQ7XG4kYmctbWFuYWdlLXN0cmlwLWNvbG9yOiAjMDQyZjU1O1xuJHRhYi1iZy1jb2xvcjogIzA0MzE1ODtcbiRiZy1yZXNldC1idG46ICM0MjcwOWE7XG4kdHItYWN0aXZlLWJnLWNvbG9yOiAjMWI2ZGI2O1xuJGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4kYmctdGFibGUtcm93OiAjMDQzYzZkO1xuJGJnLWxlZnRwYW5lbC1jYXJkOiMwNTM1NjE7XG4kYmctY2FyZGJsb2NrZXItYm94OiMwMDMxNUQ7XG4kYm9yZGVyLWxpbmUtY29sb3I6IzcwRjZGRjtcblxuXG4vKiBUb2dnbGUgKi9cblxuJHRvZ2dsZS1idXR0b24tYmctb246ICM2NmE1ZGQ7XG4kdG9nZ2xlLWJ1dHRvbi1iZy1vZmY6ICMxODYyYTI7XG4kdG9nZ2xlLWJ1dHRvbi1yb3VuZC1vZmY6ICMwODJkNGU7XG5cbi8qIFRhYmxlICovXG5cbiR0YWJsZS10aGVhZC1ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kYmctZXhwYW5kZWQ6ICMwMDIxM2U7XG4kYmctdHJhbnNwYXJlbnQtcmdiYTogcmdiYSgwLCA4NCwgMTU5LCAwLjMpO1xuXG4vKiBGb250IHdlaWdodCAqL1xuXG4kZm9udC13ZWlnaHQtNjAwOiA2MDA7XG4kZm9udC13ZWlnaHQtNzAwOiA3MDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZm9udC13ZWlnaHQtNDAwOiA0MDA7XG5cbi8qYm9yZGVyLWxpbmUgKi9cblxuJGJvcmRlci1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC42NCk7XG4kYm9yZGVyLXNlYXJjaDogMXB4IHNvbGlkICRib3JkZXItc2VhcmNoLWNvbG9yO1xuJG5vbmU6IG5vbmU7XG4kYm9yZGVyLXNlcGFyYXRlLWNvbG9yOiAjYzRjNGM0O1xuJGJvcmRlci1jb2xvci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblxuLypsZXR0ZXIgc3BhY2luZyAqL1xuXG4kbGV0dGVyLXNwYWNpbmctc2l6ZTogMC4yNXB4O1xuXG4vKmJveCBzaGFkb3cgKi9cblxuJGJveC1zaGFkb3ctYnV0dG9uOiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuJGJveC1zaGFkb3ctY2FyZDogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiRib3gtc2hhZG93LWNvbG9yOiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuJGJveC1zaGFkb3ctaW5zZXQtYXJlYTogMnB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiR0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiRib3gtc2hhZG93LWFyZWE6IDBweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm94LXNoYWRvdy12YXJpYWJsZXNcblxuLypsaW5lIGhlaWdodCAqL1xuXG4kYmFzZS1saW5lLWhlaWdodDogMXJlbTtcblxuLyogRm9udCBTdHlsZSAqL1xuXG4kZm9udC1zdHlsZS1ub3JtYWw6IG5vcm1hbDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4kYm9yZGVyLXJhZGl1cy1kaXZpZGU6IDhweCA4cHggMHB4IDBweDtcbiRib3JkZXItcmlnaHQtYm90dG9tOiAwIDhweCA4cHggMDtcbiRib3JkZXItdG9wLWxlZnQ6IDhweCAwIDAgOHB4O1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktY29sb3ItY29kZTogMC42NDtcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJHJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGJhY2tncm91bmQtd2hpdGUtcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuJHJnYi1jb2xvci1jb2RlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kcmdiLXRyYW5zcGFyZW50LWJnOiByZ2JhKDAsIDg0LCAxNTksIDAuNCk7XG4kcmdiLXdhcm4tY29sb3I6IHJnYmEoMjU1LCA2OCwgNjgsIDAuMSk7XG4kcmdiYS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gcmdiYSBjb2xvciB2YXJpYWJsZXNcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktY29sb3ItY29kZTogMC42NDtcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNjU7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG5cbi8qIGZpbHRlciBzaGFkb3cgKi9cblxuJGZpbHRlci1kcm9wc2hhZG93OiBkcm9wLXNoYWRvdygwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiR2YWxpZGF0aW9uLWVycm9yLW1lc3NhZ2UtY29sb3I6ICNmZmE2OWY7XG5cbi8qIEFsZXJ0IENvbG9ycyAqL1xuXG4kYWxlcnQtbG93OiAjRkFGRjAwO1xuJGFsZXJ0LW1lZGl1bTogI2ZmYmYwMDtcbiRhbGVydC1oaWdoOiAjRkY0QzRDO1xuJGFsZXJ0LXRlY2g6ICMwMEYwRkY7XG4kYWxlcnQtdGV4dDogI0ZGRjYxODtcblxuLyogQWxlcnQgIGJhY2tncm91bmQgQ29sb3JzICovXG4kYmctYWxlcnQtbG93OiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1tZWRpdW06ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LWhpZ2g6ICByZ2JhKDIwMiwgNjYsIDY2LCAwLjIpO1xuJGJnLWFsZXJ0LXRlY2g6IHJnYmEoMCwgMjQwLCAyNTUsIDAuMik7XG4kYWN0aXZlLWJnOiAjRjRGNjZGO1xuXG5cbi8qKioqKiBNYW5hZ2UgR3JvdXAgQ29sb3IgKioqKiovXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uOiNDNUZGMjA7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uOiByZ2JhKDE5NywgMjU1LCAzMiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTojQzYwMDVGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiByZ2JhKDI0MSwgNTEsIDE0MiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjojRkZCRTE1O1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiByZ2JhKDI1NSwgMTkwLCAyMSwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzojMjZEOEZGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiByZ2JhKDM4LCAyMTYsIDI1NSwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDojNjVDOTRDO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiByZ2JhKDEwMSwgMjAxLCA3NiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTojOTg0N0ZGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiByZ2JhKDE1MiwgNzEsIDI1NSwgMC4wOCk7XG5cblxuXG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvdmFyaWFibGVzXCI7XG5cbi5mb3JtLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy10YWJsZS1yb3ctY29sb3I7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstY29sb3Itb3B0aW9uIDtcbn1cbi50ZXh0LWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0bGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiAkc2l6ZS0xNiAhaW1wb3J0YW50O1xufVxuLnRpbWUtY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDAuNXJlbTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy90aW1lci1pY29uLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMXJlbTtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG5cblxuLm1hdC1kaWFsb2ctcG9wdXAge1xuICAuZGlhbG9nLWZvcm0ge1xuICAgIC5tYXRsYWJlbCB7XG4gICAgICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAudGltZS1pbnB1dCB7XG4gICAgICB3aWR0aDogMTEuM3JlbTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICB9XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiRjb2xvcmdyYXkgICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgIFxuICAgIH1cblxuICB9XG59XG5cbi5zZWxlY3QtYnRuIHtcbiAgcGFkZGluZzogNXB4IDQwcHg7XG4gIGJhY2tncm91bmQ6ICRzZWxlY3QtbGFiZWwtY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiA3cHggN3B4IDBweCAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlbGVjdC1idG4tYWN0aXZlIHtcbiAgcGFkZGluZzogNXB4IDQwcHg7XG4gIGJhY2tncm91bmQ6ICRzZWxlY3QtbGFiZWwtY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgbWFyZ2luOiAwcHggN3B4IDBweCAwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ1dHRvbi1jYXJkLWFyZWEge1xuICBidXR0b24uc2VsZWN0LWJ0bi1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICRzZWxlY3QtbGFiZWwtY29sb3I7XG4gIH1cbn1cblxuXG5cbi5yZXF1aXJlZC10ZXh0IHtcbiAgZm9udC1zaXplOiAkc2l6ZS0xMjtcbn1cbi5zY3JvbGwtYXNzaXN0IHtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50ZXh0LWFyZWEge1xuaGVpZ2h0OiAyNnJlbSAhaW1wb3J0YW50O1xufVxuXG4udGV4dGFyZWEtbm90ZXtcbiAgLnRleHQtYXJlYSB7XG4gICAgaGVpZ2h0OiA4cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbi5kaWFsb2ctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogJGJnLWJ1dHRvbi1jb2xvcjtcbiAgbWluLWhlaWdodDogMzVweDtcblxuICAmLnBhdGllbnRhbGVydC1kaWFsb2ctaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lLWZpZWxkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5vd2wtZHQtY29udGFpbmVyLWRpc2FibGVkLFxuLm93bC1kdC10cmlnZ2VyLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLyoqKiogYnV0dG9uICoqKiovXG5idXR0b24uZmlsbC1idG57bWluLXdpZHRoOiAxMHJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDk5cHgpIHtcbiAgICBtaW4td2lkdGg6IDdyZW07XG5cbiAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 5178:
/*!**************************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/alert-destination/alert-destination.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDestinationComponent": function() { return /* binding */ AlertDestinationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/helpers */ 15585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _shared_matselect_withsearch_matselect_withsearch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/matselect-withsearch/matselect-withsearch.component */ 97014);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function AlertDestinationComponent_table_0_span_14_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "alert-destination.user_disabled"));
} }
function AlertDestinationComponent_table_0_span_14_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_span_14_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r13.openDialog("sms", i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AlertDestinationComponent_table_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AlertDestinationComponent_table_0_span_14_mat_label_2_Template, 3, 3, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AlertDestinationComponent_table_0_span_14_mat_icon_4_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx_r1.alertDestinationSettings.AlertSMSEnabled ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (contact_r9 == null ? null : contact_r9.isActive) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", contact_r9.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isEditAccess);
} }
function AlertDestinationComponent_table_0_td_15_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-matselect-withsearch", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueUpdated", function AlertDestinationComponent_table_0_td_15_span_3_Template_app_matselect_withsearch_valueUpdated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r19.userSelected("sms", $event); })("reload", function AlertDestinationComponent_table_0_td_15_span_3_Template_app_matselect_withsearch_reload_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r21.reloadContactList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r16.alertDestinationSettings.AlertSMSEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", "alert-destination.select_user")("disabled", !ctx_r16.alertDestinationSettings.AlertSMSEnabled)("key", "displayName")("items", ctx_r16.activePhoneNoLists)("backendSearch", true);
} }
function AlertDestinationComponent_table_0_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AlertDestinationComponent_table_0_td_15_span_3_Template, 3, 8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_td_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r22.addContactDropdownList("sms"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.alertDestinationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.smsContactList.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r2.alertDestinationSettings.AlertSMSEnabled);
} }
function AlertDestinationComponent_table_0_span_24_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "alert-destination.user_disabled"));
} }
function AlertDestinationComponent_table_0_span_24_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_span_24_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.openDialog("whatsapp", i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "delete_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AlertDestinationComponent_table_0_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AlertDestinationComponent_table_0_span_24_mat_label_2_Template, 3, 3, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AlertDestinationComponent_table_0_span_24_mat_icon_4_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r24 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx_r3.alertDestinationSettings.AlertWhatsAppEnabled ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (contact_r24 == null ? null : contact_r24.isActive) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", contact_r24.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isEditAccess);
} }
function AlertDestinationComponent_table_0_td_25_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-matselect-withsearch", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueUpdated", function AlertDestinationComponent_table_0_td_25_span_3_Template_app_matselect_withsearch_valueUpdated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r34.userSelected("whatsapp", $event); })("reload", function AlertDestinationComponent_table_0_td_25_span_3_Template_app_matselect_withsearch_reload_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r36.reloadContactList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r33 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r31.alertDestinationSettings.AlertWhatsAppEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", "alert-destination.select_user")("disabled", !ctx_r31.alertDestinationSettings.AlertWhatsAppEnabled)("key", "displayName")("items", ctx_r31.activePhoneNoLists)("backendSearch", true);
} }
function AlertDestinationComponent_table_0_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AlertDestinationComponent_table_0_td_25_span_3_Template, 3, 8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_td_25_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r37.addContactDropdownList("whatsapp"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r4.alertDestinationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.whatsAppContactList.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r4.alertDestinationSettings.AlertWhatsAppEnabled);
} }
function AlertDestinationComponent_table_0_span_34_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "alert-destination.user_disabled"));
} }
function AlertDestinationComponent_table_0_span_34_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_span_34_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r43.openDialog("email", i_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AlertDestinationComponent_table_0_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AlertDestinationComponent_table_0_span_34_mat_label_2_Template, 3, 3, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AlertDestinationComponent_table_0_span_34_mat_icon_4_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r39 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx_r5.alertDestinationSettings.AlertEmailEnabled ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (contact_r39 == null ? null : contact_r39.isActive) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", contact_r39.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.isEditAccess);
} }
function AlertDestinationComponent_table_0_td_35_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-matselect-withsearch", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueUpdated", function AlertDestinationComponent_table_0_td_35_span_3_Template_app_matselect_withsearch_valueUpdated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r49.userSelected("email", $event); })("reload", function AlertDestinationComponent_table_0_td_35_span_3_Template_app_matselect_withsearch_reload_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r51.reloadContactList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r48 = ctx.index;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r46.alertDestinationSettings.AlertEmailEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", "alert-destination.select_user")("disabled", !ctx_r46.alertDestinationSettings.AlertEmailEnabled)("key", "displayName")("items", ctx_r46.activeEmailLists)("backendSearch", true);
} }
function AlertDestinationComponent_table_0_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AlertDestinationComponent_table_0_td_35_span_3_Template, 3, 8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_td_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r52.addContactDropdownList("email"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.alertDestinationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.emailContactList.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r6.alertDestinationSettings.AlertEmailEnabled);
} }
function AlertDestinationComponent_table_0_span_44_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "alert-destination.user_disabled"));
} }
function AlertDestinationComponent_table_0_span_44_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_span_44_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r58.openDialog("caregiver", i_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "delete_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AlertDestinationComponent_table_0_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AlertDestinationComponent_table_0_span_44_mat_label_2_Template, 3, 3, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AlertDestinationComponent_table_0_span_44_mat_icon_4_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r54 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx_r7.alertDestinationSettings.AlertCaregiverAppEnabled ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (contact_r54 == null ? null : contact_r54.isActive) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", contact_r54.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.isEditAccess);
} }
function AlertDestinationComponent_table_0_td_45_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-matselect-withsearch", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueUpdated", function AlertDestinationComponent_table_0_td_45_span_3_Template_app_matselect_withsearch_valueUpdated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r64.userSelected("caregiver", $event); })("reload", function AlertDestinationComponent_table_0_td_45_span_3_Template_app_matselect_withsearch_reload_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r66.reloadContactList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r63 = ctx.index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r61.alertDestinationSettings.AlertCaregiverAppEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", "alert-destination.select_user")("disabled", !ctx_r61.alertDestinationSettings.AlertCaregiverAppEnabled)("key", "displayName")("items", ctx_r61.activeContactLists)("backendSearch", true);
} }
function AlertDestinationComponent_table_0_td_45_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AlertDestinationComponent_table_0_td_45_span_3_Template, 3, 8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AlertDestinationComponent_table_0_td_45_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r67.addContactDropdownList("caregiver"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r8.alertDestinationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.caregiverAppContactList.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r8.alertDestinationSettings.AlertCaregiverAppEnabled);
} }
function AlertDestinationComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-slide-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r69.toggle($event); })("ngModelChange", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r71.alertDestinationSettings.AlertSMSEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AlertDestinationComponent_table_0_span_14_Template, 5, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, AlertDestinationComponent_table_0_td_15_Template, 7, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-slide-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r72.toggle($event); })("ngModelChange", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r73.alertDestinationSettings.AlertWhatsAppEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, AlertDestinationComponent_table_0_span_24_Template, 5, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, AlertDestinationComponent_table_0_td_25_Template, 7, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-slide-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r74.toggle($event); })("ngModelChange", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r75.alertDestinationSettings.AlertEmailEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, AlertDestinationComponent_table_0_span_34_Template, 5, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, AlertDestinationComponent_table_0_td_35_Template, 7, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-slide-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r76.toggle($event); })("ngModelChange", function AlertDestinationComponent_table_0_Template_mat_slide_toggle_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r77.alertDestinationSettings.AlertCaregiverAppEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, AlertDestinationComponent_table_0_span_44_Template, 5, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, AlertDestinationComponent_table_0_td_45_Template, 7, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.isEditAccess)("ngModel", ctx_r0.alertDestinationSettings.AlertSMSEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 21, "alert-destination.sms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.contactListsSMS);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isEditAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.isEditAccess)("ngModel", ctx_r0.alertDestinationSettings.AlertWhatsAppEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 23, "alert-destination.whatsapp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.contactListsWhatsApp);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isEditAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.isEditAccess)("ngModel", ctx_r0.alertDestinationSettings.AlertEmailEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 25, "alert-destination.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.contactListsEMAIL);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isEditAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.isEditAccess)("ngModel", ctx_r0.alertDestinationSettings.AlertCaregiverAppEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 27, "alert-destination.capp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.contactListsCaregiverApp);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isEditAccess);
} }
class AlertDestinationComponent {
    constructor(commonService, router, dialog, snackbar, autheticationService, store$, formBuilder) {
        this.commonService = commonService;
        this.router = router;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.autheticationService = autheticationService;
        this.store$ = store$;
        this.formBuilder = formBuilder;
        this.reloadData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(true);
        this.updateDestination = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.subscriptions = [];
        this.selectedTab = "parameter";
        this.cfId = "";
        this.GroupId = "";
        this.patientId = "PATALDRT1";
        this.alertId = null;
        this.accessRoles = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles;
        this.clinicalFacilityGroupId = null;
        this.alertDestId = null;
        this.AlertDestId = "";
        this.destinationAlertAccess = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles.ALERT_CONFIGURATIONS.ALERT_DESTINATIONS;
        this.isEditAccess = false;
        this.isPHYGCUser = false;
        this.contactLists = [];
        this.activeContactLists = [];
        this.activePhoneNoLists = [];
        this.activeEmailLists = [];
        this.contactListsSMS = [];
        this.contactListsWhatsApp = [];
        this.contactListsEMAIL = [];
        this.contactListsCaregiverApp = [];
    }
    ngOnInit() {
        this.alertDestinationForm = this.formBuilder.group({
            smsContactList: this.formBuilder.array([]),
            whatsAppContactList: this.formBuilder.array([]),
            emailContactList: this.formBuilder.array([]),
            caregiverAppContactList: this.formBuilder.array([]),
        });
        this.cfId = this.autheticationService.getCfId();
        this.roles = this.autheticationService.getRoles();
        this.setDefaultData();
        this.contactLists$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreSelectors.getClinicalFacilityContacts);
        if ((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.isAllowedRole)(this.destinationAlertAccess["PATIENT"]["EDIT"], this.roles)) {
            this.isEditAccess = true;
        }
        this.contactLists$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreSelectors.getClinicalFacilityContacts);
        this.subscriptions.push(this.commonService.destinationAlertEditHide.subscribe((isHide) => {
            if (isHide) {
                this.alertDestinationSettings = JSON.parse(JSON.stringify(this.alertDestinationSettingsCopy));
                this.setDefaultContactListData(this.alertDestinationSettings);
                this.updateDestination.emit(JSON.stringify(this.alertDestinationSettings));
            }
        }));
        this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreSelectors.getDestinationAlertConfigurations).subscribe(data => {
            this.setDefaultContactListData(this.alertDestinationSettings);
        });
        this.contactLists$.subscribe((data) => {
            this.contactLists = data.map((x) => {
                return Object.assign(Object.assign({}, x), { displayName: `${x.firstName} ${x.lastName}` });
            });
            this.activeContactLists = this.contactLists.filter(user => (user === null || user === void 0 ? void 0 : user.isActive) === true);
            this.activePhoneNoLists = this.activeContactLists.filter(user => user === null || user === void 0 ? void 0 : user.phoneNo);
            this.activeEmailLists = this.activeContactLists.filter(user => user === null || user === void 0 ? void 0 : user.email);
        });
        this.setDefaultContactListData(this.alertDestinationSettings);
    }
    ngOnChanges(changes) {
        //this.setDefaultContactListData(this.alertDestinationSettings);
    }
    getUrserIds(type) {
        const ids = [];
        let list = [];
        switch (type) {
            case "sms":
                list = this.contactListsSMS;
                break;
            case "whatsapp":
                list = this.contactListsWhatsApp;
                break;
            case "email":
                list = this.contactListsEMAIL;
                break;
            case "caregiver":
                list = this.contactListsCaregiverApp;
                break;
            default:
                break;
        }
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            ids.push(element.userId);
        }
        return ids;
    }
    get smsContactList() {
        return this.alertDestinationForm.get("smsContactList");
    }
    get whatsAppContactList() {
        return this.alertDestinationForm.get("whatsAppContactList");
    }
    get emailContactList() {
        return this.alertDestinationForm.get("emailContactList");
    }
    get caregiverAppContactList() {
        return this.alertDestinationForm.get("caregiverAppContactList");
    }
    addContactDropdownList(type, isDefault = false) {
        var _a, _b, _c, _d;
        switch (type) {
            case "sms":
                const smsContactList = this.alertDestinationForm.controls
                    .smsContactList;
                if (isDefault) {
                    smsContactList.push(this.formBuilder.group({
                        user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    }));
                }
                else {
                    if (this.selectedSmsContact) {
                        if (!((_a = this.contactListsSMS) === null || _a === void 0 ? void 0 : _a.find((e) => {
                            return (e.userId === this.selectedSmsContact.userId);
                        }))) {
                            this.contactListsSMS.push(this.selectedSmsContact);
                            smsContactList.push(this.formBuilder.group({
                                user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                            }));
                            smsContactList.removeAt(0);
                            this.selectedSmsContact = '';
                            this.updated();
                        }
                        else {
                            this.snackbar.openCustomSnackBar("User already added", 'bottom', 'center');
                        }
                    }
                    else {
                        this.snackbar.openCustomSnackBar("Please select user", 'bottom', 'center');
                    }
                }
                break;
            case "email":
                const emailContactList = this.alertDestinationForm.controls
                    .emailContactList;
                if (isDefault) {
                    emailContactList.push(this.formBuilder.group({
                        user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    }));
                }
                else {
                    if (this.selectedEmailContact) {
                        if (!((_b = this.contactListsEMAIL) === null || _b === void 0 ? void 0 : _b.find((e) => {
                            return (e.userId === this.selectedEmailContact.userId);
                        }))) {
                            this.contactListsEMAIL.push(this.selectedEmailContact);
                            emailContactList.push(this.formBuilder.group({
                                user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                            }));
                            emailContactList.removeAt(0);
                            this.selectedEmailContact = '';
                            this.updated();
                        }
                        else {
                            this.snackbar.openCustomSnackBar("User already added", 'bottom', 'center');
                        }
                    }
                    else {
                        this.snackbar.openCustomSnackBar("Please select user", 'bottom', 'center');
                    }
                }
                break;
            case "whatsapp":
                const whatsAppContactList = this.alertDestinationForm.controls
                    .whatsAppContactList;
                if (isDefault) {
                    whatsAppContactList.push(this.formBuilder.group({
                        user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    }));
                }
                else {
                    if (this.selectedWhatsappContact) {
                        if (!((_c = this.contactListsWhatsApp) === null || _c === void 0 ? void 0 : _c.find((e) => {
                            return (e.userId === this.selectedWhatsappContact.userId);
                        }))) {
                            this.contactListsWhatsApp.push(this.selectedWhatsappContact);
                            whatsAppContactList.push(this.formBuilder.group({
                                user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                            }));
                            whatsAppContactList.removeAt(0);
                            this.selectedWhatsappContact = '';
                            this.updated();
                        }
                        else {
                            this.snackbar.openCustomSnackBar("User already added", 'bottom', 'center');
                        }
                    }
                    else {
                        this.snackbar.openCustomSnackBar("Please select user", 'bottom', 'center');
                    }
                }
                break;
            case "caregiver":
                const caregiverAppContactList = this.alertDestinationForm.controls
                    .caregiverAppContactList;
                if (isDefault) {
                    caregiverAppContactList.push(this.formBuilder.group({
                        user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    }));
                }
                else {
                    if (this.selectedCaregiverContact) {
                        if (!((_d = this.contactListsCaregiverApp) === null || _d === void 0 ? void 0 : _d.find((e) => {
                            return (e.userId === this.selectedCaregiverContact.userId);
                        }))) {
                            this.contactListsCaregiverApp.push(this.selectedCaregiverContact);
                            caregiverAppContactList.push(this.formBuilder.group({
                                user: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                            }));
                            caregiverAppContactList.removeAt(0);
                            this.selectedCaregiverContact = '';
                            this.updated();
                        }
                        else {
                            this.snackbar.openCustomSnackBar("User already added", 'bottom', 'center');
                        }
                    }
                    else {
                        this.snackbar.openCustomSnackBar("Please select user", 'bottom', 'center');
                    }
                }
                break;
            default:
                break;
        }
    }
    userSelected(type, value) {
        switch (type) {
            case 'sms': {
                this.selectedSmsContact = value;
                break;
            }
            case 'whatsapp': {
                this.selectedWhatsappContact = value;
                break;
            }
            case 'email': {
                this.selectedEmailContact = value;
                break;
            }
            case "caregiver": {
                this.selectedCaregiverContact = value;
                break;
            }
            default: break;
        }
    }
    setDefaultData() {
        this.addContactDropdownList("sms", true);
        this.addContactDropdownList("email", true);
        this.addContactDropdownList("whatsapp", true);
        this.addContactDropdownList("caregiver", true);
    }
    openDialog(type, index) {
        const SaveChanges = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
            maxWidth: "95vw",
            maxHeight: "95vh",
            data: {
                body: {
                    title: "shared.confirm_text",
                    text: "additional_devices.confirm_delete",
                },
            },
            disableClose: true,
        });
        SaveChanges.afterClosed().subscribe((data) => {
            if (data) {
                this.removeContactSelected(type, index);
            }
        });
    }
    removeContactSelected(type, index) {
        switch (type) {
            case "sms":
                this.contactListsSMS.splice(index, 1);
                break;
            case "whatsapp":
                this.contactListsWhatsApp.splice(index, 1);
                break;
            case "email":
                this.contactListsEMAIL.splice(index, 1);
                break;
            case "caregiver":
                this.contactListsCaregiverApp.splice(index, 1);
                break;
            default:
                break;
        }
        this.updated();
    }
    setDefaultContactListData(setting) {
        var _a, _b, _c, _d;
        if (setting && Array.isArray(setting.AlertSMS)) {
            this.contactListsSMS = [];
            (_a = setting.AlertSMS) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
                var _a;
                const contact = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.find((e) => {
                    return e.userId === element;
                });
                if (contact) {
                    this.contactListsSMS.push(contact);
                }
            });
        }
        else {
            this.contactListsSMS = [];
        }
        if (setting && Array.isArray(setting.AlertWhatsApp)) {
            this.contactListsWhatsApp = [];
            (_b = setting.AlertWhatsApp) === null || _b === void 0 ? void 0 : _b.forEach((element) => {
                var _a;
                const contact = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.find((e) => {
                    return e.userId === element;
                });
                if (contact) {
                    this.contactListsWhatsApp.push(contact);
                }
            });
        }
        else {
            this.contactListsWhatsApp = [];
        }
        if (setting && Array.isArray(setting.AlertEmail)) {
            this.contactListsEMAIL = [];
            (_c = setting.AlertEmail) === null || _c === void 0 ? void 0 : _c.forEach((element) => {
                var _a;
                const contact = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.find((e) => {
                    return e.userId === element;
                });
                if (contact) {
                    this.contactListsEMAIL.push(contact);
                }
            });
        }
        else {
            this.contactListsEMAIL = [];
        }
        if (setting && Array.isArray(setting.AlertCaregiverApp)) {
            this.contactListsCaregiverApp = [];
            (_d = setting.AlertCaregiverApp) === null || _d === void 0 ? void 0 : _d.forEach((element) => {
                var _a;
                const contact = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.find((e) => {
                    return e.userId === element;
                });
                if (contact) {
                    this.contactListsCaregiverApp.push(contact);
                }
            });
        }
        else {
            this.contactListsCaregiverApp = [];
        }
    }
    navigateUrl(url) {
        this.router.navigate([url]).then();
    }
    selectTab(value) {
        if (this.selectedTab !== value) {
            this.commonService.setSettingsAlertActionButtons(false);
        }
        this.selectedTab = value;
    }
    toggle(event) {
        this.updated();
    }
    updated() {
        let destinationSettings = JSON.parse(JSON.stringify(this.alertDestinationSettings));
        destinationSettings.AlertCaregiverApp =
            this.getUrserIds("caregiver");
        destinationSettings.AlertEmail =
            this.getUrserIds("email");
        destinationSettings.AlertSMS = this.getUrserIds("sms");
        destinationSettings.AlertWhatsApp =
            this.getUrserIds("whatsapp");
        this.updateDestination.emit(JSON.stringify(destinationSettings));
    }
    reloadContactList(searchString) {
        let url = `clinical-facilities/contacts?size=1000&page=1&searchText=${searchString}`;
        this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreActions.loadClinicalFacilityContactsRequestAction({ url }));
    }
}
AlertDestinationComponent.ɵfac = function AlertDestinationComponent_Factory(t) { return new (t || AlertDestinationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
AlertDestinationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AlertDestinationComponent, selectors: [["app-alert-destination"]], inputs: { alertDestinationSettings: "alertDestinationSettings", alertDestinationSettingsCopy: "alertDestinationSettingsCopy", alertType: "alertType", userData: "userData" }, outputs: { reloadData: "reloadData", updateDestination: "updateDestination" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["mat-table", "", "class", "table destination-table", "aria-label", "Table", 4, "ngIf"], ["mat-table", "", "aria-label", "Table", 1, "table", "destination-table"], ["colspan", "3", 1, "ps-4"], [1, "d-flex", "align-items-center"], [1, "mx-3", 3, "disabled", "ngModel", "change", "ngModelChange"], [1, "ms-3", "fw-700"], [1, "text-end", "pt-1"], [4, "ngFor", "ngForOf"], ["class", "text-center py-1", 4, "ngIf"], ["appearance", "fill", 1, "input-icon-field", "me-2", "mb-1", 3, "ngClass"], [4, "ngIf"], ["matInput", "", "disabled", "", 3, "value"], ["class", "mr-1", "matSuffix", "", 3, "click", 4, "ngIf"], ["matSuffix", "", 1, "mr-1", 3, "click"], [1, "text-center", "py-1"], [3, "formGroup"], ["formArrayName", "smsContactList", 1, "d-flex", "align-items-center", "justify-content-end"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "primary", 1, "btn-boxed", "me-3", "btn-no-shadow", 3, "disabled", "click"], [3, "formGroupName"], [1, "msg-select", "me-3"], [1, "destination-search-filter", 3, "placeholder", "disabled", "key", "items", "backendSearch", "valueUpdated", "reload"], ["formArrayName", "whatsAppContactList", 1, "d-flex", "align-items-center", "justify-content-end"], ["formArrayName", "emailContactList", 1, "d-flex", "align-items-center", "justify-content-end"], ["formArrayName", "caregiverAppContactList", 1, "d-flex", "align-items-center", "justify-content-end"]], template: function AlertDestinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AlertDestinationComponent_table_0_Template, 46, 29, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.alertDestinationSettings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_14__.NativeElementInjectorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _shared_matselect_withsearch_matselect_withsearch_component__WEBPACK_IMPORTED_MODULE_6__.MatselectWithsearchComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 7px solid #043158 !important;\n  border-collapse: separate !important;\n  background: #00427c;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7 !important;\n}\n.alert-dialog-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.alert-dialog-content[_ngcontent-%COMP%]   .input-icon-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.alert-dialog-content[_ngcontent-%COMP%]   .input-icon-field[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #235987;\n}\n@media only screen and (max-width: 767px) {\n  .table-responsive-sm[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n}\n.destination-table.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n  padding-bottom: 0.8rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsImFsZXJ0LWRlc3RpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHlCQUFBO0FBc0VBLG9CQUFBO0FBd0NBLFdBQUE7QUFNQSxVQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBUUEsa0JBQUE7QUFJQSxjQUFBO0FBZUEsZUFBQTtBQUlBLGVBQUE7QUEwQkEsa0JBQUE7QUFRQSxpQkFBQTtBQVFBLDZCQUFBO0FBUUEsK0JBQUE7QUNuTkE7Ozs7Ozs7O0VBQUE7QUFTQTtFQUNFLFdBQUE7QUFhRjtBQVhBO0VBQ0UsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CRDRFbUI7QUM5RHJCO0FBWkE7RUFDRSx1QkFBQTtBQWVGO0FBYkE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBZ0JGO0FBYkE7RUFDRSxVQUFBO0FBZ0JGO0FBZEk7RUFDRSx5QkFBQTtBQWdCTjtBQWRJO0VBQ0UsY0FBQTtBQWdCTjtBQVpBO0VBQ0U7SUFDRSxjQUFBO0VBZUY7QUFDRjtBQVRNO0VBQ0Usa0RBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBV1IiLCJmaWxlIjoiYWxlcnQtZGVzdGluYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG5cbi8qZm9udCBjb2xvciBhbmQgZmFtaWx5ICovXG5cbiRiYXNlLWZvbnQtc2l6ZTogMTRweDtcbiRiYXNlLWZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLFxuICAgIFwiTXVsaS1SZWd1bGFyXCIsXG4gICAgc2Fucy1zZXJpZjtcbiRiYXNlLWZvbnQtY29sb3I6ICR3aGl0ZTtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTI6IDEycHg7XG4kc2l6ZS0yNDogMjRweDtcbiRzaXplLTE2OiAxNnB4O1xuJHNpemUtMTA6IDEwcHg7XG4kc2l6ZS01OiA1cHg7XG4kc2l6ZS02OiA2cHg7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTE4OiAxOHB4O1xuJHNpemUtMTU6IDE1cHg7XG4kc2l6ZS0yNzogMjdweDtcbiRjb25maXJtLWRpYWxvZy13aWR0aDogNzUwcHg7XG4kZXJyMHJfdGV4dF9jb2xvcjogI2RjMzU0NTtcbiRvcGFjaXR5LXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQpO1xuJG9wYWNpdHktYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4kcmVkLWZvbnQtY29sb3I6ICNmZjRjNGM7XG4kbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGxvdy1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRhbWJlci1mb250LWNvbG9yOiAjRkZDNzAwO1xuJGdyZWVuLWZvbnQtY29sb3I6ICMxN2Q0Njg7XG4kZGFyay1jb2xvci1vcHRpb246ICMwNDI5NGE7XG4kdGFibGUtdHItY29sb3I6IHJnYig0LCA2MCwgMTA5KTtcbiR0YWJsZS1zcGFjaW5nX2NvbG9yOiAjMDQyOTRhO1xuJHAtY29sb3I6ICMwMDQyN2NhMztcbiRyb3ctZGlzYWJsZWQ6IHJnYig0LCA2MCwgMTA5LCAwLjYpO1xuJHdoaXRlLXRleHQ6ICNmMmYyZjI7XG4kYnJvd24tY29sb3I6ICM4NzdkN2Q7XG4kYXJyb3ctY29sb3I6ICM3YzhmYTA7XG4kbGFiZWwtY29sb3I6ICM0ZWEyZWY7XG4kcmVxdXJpZWQtY29sb3I6ICNmZjY1NjU7XG4kYmxhY2stY29sb3I6ICRibGFjaztcbiRncmF5LWNvbG9yOiAjMzMzMzMzO1xuJHRpbWUtY29sb3I6ICM2N2E1ZDI7XG4kY2xvc2UtY29sb3I6ICNhZmFkYWQ7XG4kc3BvMi1jb2xvcjogIzAwZjBmZjtcbiRoZWFydHJhdGUtY29sb3I6ICMwMGZmNmQ7XG4keWVsbG93LWNvbG9yOiAjZmFmZjAwO1xuJGxpZ2h0LXRleHQtY29sb3I6ICNFQkVCRUI7XG4kc2V0dGluZy1jb2xvcjogI2UxZTFlMTtcbiRjb2xvcm5ldy15ZWxsb3c6ICNmZmY2MTg7XG4kc3RvcC1idXR0b24tY29sb3I6ICNjYTQyNDI7XG4kZXdzLWNvbG9yOiAjZmY1ODQxO1xuJGJwLWNvbG9yOiAjZmY5ODNhO1xuJGNhbmNlbC1jb2xvcjogI2ZmNDQ0NDtcbiRoaXN0b3J5LWxhYmVsLWNvbG9yOiAjYTdjN2U0O1xuJGNvbG9yLWNvZGUtbmV3OiAjYzVmZjIwO1xuJHBpbmstY29sb3I6ICNjNjAwNWY7XG4kZ3JlZW4tY29sb3I6ICMzZmZmOTE7XG4kYmx1ZS1jb2xvcjogIzFmYzBmMztcbiRjb2xvcmdyYXk6ICM2NjY2NjY7XG4kcmVkLWxhYmVsLWNvbG9yOiAjZjQ0MzM2O1xuJHNlbGVjdC1sYWJlbC1jb2xvcjogIzAyM2Y3NDtcbiRzZWxlY3Qtb3B0aW9uLWNvbG9yOiAjMjM1OTg3O1xuJHNlbGVjdC1vcHRpb24tYmc6ICNFMEVBRjI7XG4kc2VsZWN0LW9wdGlvbi1zZWxlY3RlZC1iZzogJHdoaXRlO1xuJGdyYXktY29sb3ItdGltZTogI0M0QzRDNDtcbiRibHVlLWNvbG9yLWdyb3VwOiMxZmMwZjM7XG4kdHJlbmQtdG9wQ29sb3I6IzA0M0I2QztcbiRleHBpcmVkLXZpdGFsOiAjYTlhOWE5O1xuJGluYWN0aXZlLWNvbG9yOiMxODYyQTE7XG4kc3RhdHVzLWNvbG9yLWJnOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XG4kc3RhdHVzLWNvbG9yLWJvcmRlcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cbi8qYmFja2dyb3VuZCBjb2xvciAqL1xuXG4kcHJpbWFyeS1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1wcmltYXJ5LWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRiZy13aGl0ZS1jb2xvcjogJHdoaXRlO1xuJGxpZ2h0LWJsdWUtY29sb3I6ICMwMGJiZWY7XG4kYmctdG9wYmFyLWNvbG9yOiByZ2JhKDAsIDY2LCAxMjQsIDAuNjQpO1xuJGJnLXllbGxvdy1jb2xvcjogI2YyY2Q0YjtcbiRiZy1idXR0b24tY29sb3I6ICMwMDU0OWY7XG4kYmctYnV0dG9uLWhvdmVyOiAkYmctcHJpbWFyeS1jb2xvcjtcbiRiZy10YWJsZS1yb3ctY29sb3I6ICMwNDNjNmQ7XG4kYmctc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuMTYpO1xuJGJnLWRpc2FibGUtY29sb3I6ICMyMjRjNzI7XG4kYmctdGFibGUtcm93LWFjdGl2ZS1jb2xvcjogIzFiNmRiNjtcbiRtb2RhbC1kYWlsb2ctaGVhZHN0cmlwLWNvbG9yOiAjMWM0ODcxO1xuJGJnLWlucHV0LWNvbG9yOiAjZWVlZWVlO1xuJGJnLWJ1dHRvbi1saWdodC1yZWQtY29sb3I6ICNjZDZkNmQ7XG4kbGlnaHQtYmx1ZS1iZzogI2UwZWFmMjtcbiRiZy1zbGlkZXItYmFyOiAjMDcyNTQwO1xuJGJnLWluZm8tY29sb3I6ICMwOTQ3OGU7XG4kYmctZGFzaGJvYXJkLWNvbG9yOiAjMDA0MjdjO1xuJGJnLWdyaWQtY29sb3I6ICMwMzM1NjI7XG4kYmctY2FyZC1jb2xvcjogIzA2MzA1NjtcbiRiZy1zaWduYWwtY29sb3I6ICMwNjI4NDc7XG4kYmctY29sb3ItbWF0Y2g6ICMwMzJENTI7XG4kdG9wYmF0LXN0cmlwLWNvbG9yOiAjMjU0ODY4O1xuJGJ1dHRvbi1jb2xvci1iZzogIzA1NDY4MDtcbiRiZy1tYXRjYXJkLWNvbG9yOiAjMDQzYjZkO1xuJGJnLWJhZ2UtY29sb3I6ICNhMDM0MzQ7XG4kYmctbWFuYWdlLXN0cmlwLWNvbG9yOiAjMDQyZjU1O1xuJHRhYi1iZy1jb2xvcjogIzA0MzE1ODtcbiRiZy1yZXNldC1idG46ICM0MjcwOWE7XG4kdHItYWN0aXZlLWJnLWNvbG9yOiAjMWI2ZGI2O1xuJGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4kYmctdGFibGUtcm93OiAjMDQzYzZkO1xuJGJnLWxlZnRwYW5lbC1jYXJkOiMwNTM1NjE7XG4kYmctY2FyZGJsb2NrZXItYm94OiMwMDMxNUQ7XG4kYm9yZGVyLWxpbmUtY29sb3I6IzcwRjZGRjtcblxuXG4vKiBUb2dnbGUgKi9cblxuJHRvZ2dsZS1idXR0b24tYmctb246ICM2NmE1ZGQ7XG4kdG9nZ2xlLWJ1dHRvbi1iZy1vZmY6ICMxODYyYTI7XG4kdG9nZ2xlLWJ1dHRvbi1yb3VuZC1vZmY6ICMwODJkNGU7XG5cbi8qIFRhYmxlICovXG5cbiR0YWJsZS10aGVhZC1ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kYmctZXhwYW5kZWQ6ICMwMDIxM2U7XG4kYmctdHJhbnNwYXJlbnQtcmdiYTogcmdiYSgwLCA4NCwgMTU5LCAwLjMpO1xuXG4vKiBGb250IHdlaWdodCAqL1xuXG4kZm9udC13ZWlnaHQtNjAwOiA2MDA7XG4kZm9udC13ZWlnaHQtNzAwOiA3MDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZm9udC13ZWlnaHQtNDAwOiA0MDA7XG5cbi8qYm9yZGVyLWxpbmUgKi9cblxuJGJvcmRlci1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC42NCk7XG4kYm9yZGVyLXNlYXJjaDogMXB4IHNvbGlkICRib3JkZXItc2VhcmNoLWNvbG9yO1xuJG5vbmU6IG5vbmU7XG4kYm9yZGVyLXNlcGFyYXRlLWNvbG9yOiAjYzRjNGM0O1xuJGJvcmRlci1jb2xvci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblxuLypsZXR0ZXIgc3BhY2luZyAqL1xuXG4kbGV0dGVyLXNwYWNpbmctc2l6ZTogMC4yNXB4O1xuXG4vKmJveCBzaGFkb3cgKi9cblxuJGJveC1zaGFkb3ctYnV0dG9uOiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuJGJveC1zaGFkb3ctY2FyZDogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiRib3gtc2hhZG93LWNvbG9yOiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuJGJveC1zaGFkb3ctaW5zZXQtYXJlYTogMnB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiR0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiRib3gtc2hhZG93LWFyZWE6IDBweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm94LXNoYWRvdy12YXJpYWJsZXNcblxuLypsaW5lIGhlaWdodCAqL1xuXG4kYmFzZS1saW5lLWhlaWdodDogMXJlbTtcblxuLyogRm9udCBTdHlsZSAqL1xuXG4kZm9udC1zdHlsZS1ub3JtYWw6IG5vcm1hbDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4kYm9yZGVyLXJhZGl1cy1kaXZpZGU6IDhweCA4cHggMHB4IDBweDtcbiRib3JkZXItcmlnaHQtYm90dG9tOiAwIDhweCA4cHggMDtcbiRib3JkZXItdG9wLWxlZnQ6IDhweCAwIDAgOHB4O1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktY29sb3ItY29kZTogMC42NDtcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJHJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGJhY2tncm91bmQtd2hpdGUtcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuJHJnYi1jb2xvci1jb2RlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4kcmdiLXRyYW5zcGFyZW50LWJnOiByZ2JhKDAsIDg0LCAxNTksIDAuNCk7XG4kcmdiLXdhcm4tY29sb3I6IHJnYmEoMjU1LCA2OCwgNjgsIDAuMSk7XG4kcmdiYS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gcmdiYSBjb2xvciB2YXJpYWJsZXNcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktY29sb3ItY29kZTogMC42NDtcbi8vb3BhY2l0eSBjb2xvciB2YXJpYWJsZVxuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNjU7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG5cbi8qIGZpbHRlciBzaGFkb3cgKi9cblxuJGZpbHRlci1kcm9wc2hhZG93OiBkcm9wLXNoYWRvdygwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiR2YWxpZGF0aW9uLWVycm9yLW1lc3NhZ2UtY29sb3I6ICNmZmE2OWY7XG5cbi8qIEFsZXJ0IENvbG9ycyAqL1xuXG4kYWxlcnQtbG93OiAjRkFGRjAwO1xuJGFsZXJ0LW1lZGl1bTogI2ZmYmYwMDtcbiRhbGVydC1oaWdoOiAjRkY0QzRDO1xuJGFsZXJ0LXRlY2g6ICMwMEYwRkY7XG4kYWxlcnQtdGV4dDogI0ZGRjYxODtcblxuLyogQWxlcnQgIGJhY2tncm91bmQgQ29sb3JzICovXG4kYmctYWxlcnQtbG93OiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1tZWRpdW06ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LWhpZ2g6ICByZ2JhKDIwMiwgNjYsIDY2LCAwLjIpO1xuJGJnLWFsZXJ0LXRlY2g6IHJnYmEoMCwgMjQwLCAyNTUsIDAuMik7XG4kYWN0aXZlLWJnOiAjRjRGNjZGO1xuXG5cbi8qKioqKiBNYW5hZ2UgR3JvdXAgQ29sb3IgKioqKiovXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uOiNDNUZGMjA7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uOiByZ2JhKDE5NywgMjU1LCAzMiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTojQzYwMDVGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiByZ2JhKDI0MSwgNTEsIDE0MiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjojRkZCRTE1O1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiByZ2JhKDI1NSwgMTkwLCAyMSwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzojMjZEOEZGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiByZ2JhKDM4LCAyMTYsIDI1NSwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDojNjVDOTRDO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiByZ2JhKDEwMSwgMjAxLCA3NiwgMC4wOCk7XG5cbiRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTojOTg0N0ZGO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiByZ2JhKDE1MiwgNzEsIDI1NSwgMC4wOCk7XG5cblxuXG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvdmFyaWFibGVzXCI7XG5cbi8qLm1zZy1zZWxlY3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xufSovXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICR0YWItYmctY29sb3IgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAkYmctZGFzaGJvYXJkLWNvbG9yO1xufVxudGQge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjchaW1wb3J0YW50O1xufVxuXG4uYWxlcnQtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICAuaW5wdXQtaWNvbi1maWVsZCB7XG4gICAgaW5wdXQge1xuICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgXG4gICAgfVxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBjb2xvcjogIzIzNTk4NztcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUtc20ge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbi5kZXN0aW5hdGlvbi10YWJsZS50YWJsZSB7XG4gIHRoZWFkIHtcbiAgICB0ciB7XG4gICAgICB0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkb3BhY2l0eS1iZy1jb2xvcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 37821:
/*!**************************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/arrhythmia-alerts/arrhythmia-alerts.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrhythmiaAlertsComponent": function() { return /* binding */ ArrhythmiaAlertsComponent; }
/* harmony export */ });
/* harmony import */ var C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 80151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/helpers */ 15585);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/common.service */ 5620);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _services_backendapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/backendapi.service */ 68493);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/alert-configuration.service */ 26430);
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../patient-details/patient-details.component */ 67138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../life-signals/_components/ls-table/ls-table.component */ 16743);
/* harmony import */ var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../life-signals/_directives/ls-widget-name.directive */ 19861);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






























function ArrhythmiaAlertsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ArrhythmiaAlertsComponent_div_3_ng_template_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const config_r11 = restoredCtx.$implicit;
      return config_r11.Enabled = $event;
    })("change", function ArrhythmiaAlertsComponent_div_3_ng_template_2_Template_mat_slide_toggle_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const config_r11 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r14.toggle(config_r11 == null ? null : config_r11.index);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r11.Enabled)("disabled", !ctx_r3.isEditAccess);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" (", config_r15.unit, ")");
  }
}

const _c0 = function () {
  return ["SINUS_TACHYCARDIA", "SINUS_BRADYCARDIA", "PVC_RATE", "PAC_RATE"];
};

function ArrhythmiaAlertsComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ArrhythmiaAlertsComponent_div_3_ng_template_3_span_1_Template, 2, 1, "span", 19);
  }

  if (rf & 2) {
    const config_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r15.alert, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c0).includes(config_r15.key));
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r18.LowThr, " ");
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r24.numericsOnly(config_r18.key, $event);
    })("paste", function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_paste_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return ctx_r27.alertService.checkForSpecialCharacters($event);
    })("ngModelChange", function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return config_r18.LowThr = $event;
    })("change", function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r30.parameterThresholdChanged(config_r18.index, "LowThr", ctx_r30.parameterMinMax[config_r18.key]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r18.LowThr)("min", ctx_r22.parameterMinMax[config_r18.key]["MIN"]["LowThr"])("max", ctx_r22.parameterMinMax[config_r18.key]["MAX"]["LowThr"]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_span_2_Template, 2, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r19.editThreshold[config_r18 == null ? null : config_r18.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r19.editThreshold[config_r18 == null ? null : config_r18.index]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ArrhythmiaAlertsComponent_div_3_ng_template_4_span_0_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ArrhythmiaAlertsComponent_div_3_ng_template_4_span_1_Template, 2, 0, "span", 21);
  }

  if (rf & 2) {
    const config_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c0).includes(config_r18.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c0).includes(config_r18.key));
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const config_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r39.showHideEdit(config_r34 == null ? null : config_r34.index, "threshold");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !config_r34.Enabled);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_1_button_1_Template, 3, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r36.editThreshold[config_r34 == null ? null : config_r34.index] && ctx_r36.isEditAccess);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r46);
      const config_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r44.showHideEdit(config_r34 == null ? null : config_r34.index, "threshold");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_span_2_Template, 4, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r35.editThreshold[config_r34 == null ? null : config_r34.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r35.editThreshold[config_r34 == null ? null : config_r34.index]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ArrhythmiaAlertsComponent_div_3_ng_template_5_span_0_Template, 3, 2, "span", 21);
  }

  if (rf & 2) {
    const config_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c0).includes(config_r34.key));
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_6__svg_circle_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "circle", 32);
  }

  if (rf & 2) {
    const config_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("stroke", ctx_r49.priorityHexCode[config_r48.Priority]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](config_r48.Priority);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_6_span_6_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const priority_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", priority_r55.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", priority_r55.label, " ");
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ArrhythmiaAlertsComponent_div_3_ng_template_6_span_6_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58);
      const config_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      return config_r48.Priority = $event;
    })("selectionChange", function ArrhythmiaAlertsComponent_div_3_ng_template_6_span_6_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r59.updated();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_6_span_6_mat_option_2_Template, 2, 2, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r48.Priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r51.alertPriority);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "circle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ArrhythmiaAlertsComponent_div_3_ng_template_6__svg_circle_3_Template, 1, 1, "circle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ArrhythmiaAlertsComponent_div_3_ng_template_6_span_5_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ArrhythmiaAlertsComponent_div_3_ng_template_6_span_6_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r48 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("fill", ctx_r7.priorityHexCode[config_r48.Priority]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (config_r48.Priority == null ? null : config_r48.Priority.toUpperCase()) !== "LOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r7.editPrior[config_r48.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.editPrior[config_r48.index]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_7_span_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_div_3_ng_template_7_span_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67);
      const config_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r65.showHideEdit(config_r61.index, "priority");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !config_r61.Enabled);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ArrhythmiaAlertsComponent_div_3_ng_template_7_span_2_button_1_Template, 3, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r62.isEditAccess);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_div_3_ng_template_7_span_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r71);
      const config_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r69.showHideEdit(config_r61.index, "priority");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_7_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ArrhythmiaAlertsComponent_div_3_ng_template_7_span_3_Template, 4, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const config_r61 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r8.editPrior[config_r61.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.editPrior[config_r61.index]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r72.CondDelay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "alert_config_module.secs"));
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function ArrhythmiaAlertsComponent_div_3_ng_template_8_div_4_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r77.numericsOnly(config_r72.key, $event);
    })("paste", function ArrhythmiaAlertsComponent_div_3_ng_template_8_div_4_Template_input_paste_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r80.alertService.checkForSpecialCharacters($event);
    })("change", function ArrhythmiaAlertsComponent_div_3_ng_template_8_div_4_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r81.parameterThresholdChanged(config_r72.index, "CondDelay", ctx_r81.parameterMinMax[config_r72.key]);
    })("ngModelChange", function ArrhythmiaAlertsComponent_div_3_ng_template_8_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      return config_r72.CondDelay = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("min", ctx_r74.parameterMinMax[config_r72.key]["MIN"]["CondDelay"])("max", ctx_r74.parameterMinMax[config_r72.key]["MAX"]["CondDelay"])("ngModel", config_r72.CondDelay);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90);
      const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r88.showHideEdit(config_r72.index, "delay");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !config_r72.Enabled);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r94);
      const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r92.showHideEdit(config_r72.index, "delay");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_button_2_Template, 3, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_button_3_Template, 3, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const config_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r75.editDelay[config_r72.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r75.editDelay[config_r72.index]);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ArrhythmiaAlertsComponent_div_3_ng_template_8_div_3_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ArrhythmiaAlertsComponent_div_3_ng_template_8_div_4_Template, 2, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ArrhythmiaAlertsComponent_div_3_ng_template_8_ng_container_5_Template, 4, 2, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r72 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r9.editDelay[config_r72.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.editDelay[config_r72.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.isEditAccess);
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_9_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](2, 1, ctx_r97.masterData.modifiedDateTime + "+0000", "MMM dd, yyyy " + ctx_r97.timeFmt, ctx_r97.timeZone), " ");
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("by ", ctx_r98.masterData.modifiedBy, "");
  }
}

function ArrhythmiaAlertsComponent_div_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ArrhythmiaAlertsComponent_div_3_ng_template_9_span_0_Template, 3, 5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_9_span_2_Template, 2, 1, "span", 21);
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.masterData == null ? null : ctx_r10.masterData.modifiedDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r10.isBlank(ctx_r10.masterData.modifiedBy));
  }
}

function ArrhythmiaAlertsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ls-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("configChange", function ArrhythmiaAlertsComponent_div_3_Template_ls_table_configChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r99.config = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_3_ng_template_2_Template, 2, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ArrhythmiaAlertsComponent_div_3_ng_template_3_Template, 2, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ArrhythmiaAlertsComponent_div_3_ng_template_4_Template, 2, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ArrhythmiaAlertsComponent_div_3_ng_template_5_Template, 1, 2, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ArrhythmiaAlertsComponent_div_3_ng_template_6_Template, 7, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ArrhythmiaAlertsComponent_div_3_ng_template_7_Template, 4, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ArrhythmiaAlertsComponent_div_3_ng_template_8_Template, 6, 3, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ArrhythmiaAlertsComponent_div_3_ng_template_9_Template, 3, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r1.config)("columns", ctx_r1.columns)("data", ctx_r1.parameterAlertSettings);
  }
}

function ArrhythmiaAlertsComponent_mat_dialog_actions_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_mat_dialog_actions_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r103.openDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "alert_config_module.reset_to_default"));
  }
}

function ArrhythmiaAlertsComponent_mat_dialog_actions_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_mat_dialog_actions_4_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r105.handleAlertSettingsEditCancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ArrhythmiaAlertsComponent_mat_dialog_actions_4_ng_template_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r107.handleAlertSettingsSave();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "alert_config_module.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 4, "alert_config_module.save"));
  }
}

function ArrhythmiaAlertsComponent_mat_dialog_actions_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-dialog-actions", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_mat_dialog_actions_4_button_2_Template, 6, 3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ArrhythmiaAlertsComponent_mat_dialog_actions_4_ng_template_4_Template, 9, 6, "ng-template", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isShowResetButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.showActionButtons);
  }
}

class ArrhythmiaAlertsComponent {
  constructor(dialog, commonService, userPreference, snackbar, backendApiService, autheticationService, store$, alertService) {
    this.dialog = dialog;
    this.commonService = commonService;
    this.userPreference = userPreference;
    this.snackbar = snackbar;
    this.backendApiService = backendApiService;
    this.autheticationService = autheticationService;
    this.store$ = store$;
    this.alertService = alertService;
    this.subscriptions = [];
    this.reloadData = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter(true);
    this.loading = false;
    this.priorityHexCode = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.priorityColorCode;
    this.alertPriority = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.arrhythmiaAlertPriorityOptions;
    this.parameterAlert = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.ArrhythmiaParameterAlertItems;
    this.parameterAlertSettings = [];
    this.parameterAlertSettingsCopy = [];
    this.masterData = {};
    this.parameterAlertAccess = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles.ALERT_CONFIGURATIONS.ARRHYTHMIA_ALERT;
    this.isEditAccess = false;
    this.showActionButtons = false;
    this.isShowResetButton = false;
    this.selectedTab = "parameter";
    this.alertSettings = {};
    this.cfId = "";
    this.alertId = null;
    this.accessRoles = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles;
    this.clinicalFacilityGroupId = null;
    this.GroupId = "";
    this.patientId = "PATALDRT1";
    this.timeFmt = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.customization.timeFormat;
    this.loader = true;
    this.config = {
      id: "alert_config_module",
      rowSelectEnabled: false,
      translate: true,
      translateKey: "alert_config_module"
    };
    this.columns = [{
      id: "enabled",
      label: "",
      sortable: false,
      style: "width: 70px"
    }, {
      id: "alerts",
      sortable: false,
      headerClass: ["align-left"],
      cellClass: ["fw-700"],
      style: "min-width: 200px"
    }, {
      id: "threshold",
      sortable: false,
      headerClass: ["align-center"],
      cellClass: ["text-center"],
      style: "width: 160px"
    }, {
      id: "editThreshold",
      sortable: false,
      headerClass: ["align-left"],
      style: "width: 50px"
    }, {
      id: "priority",
      sortable: false,
      headerClass: ["align-right"],
      style: "width: 180px;",
      cellClass: ["text-end"]
    }, {
      id: "editPriority",
      sortable: false,
      headerClass: ["align-left"],
      style: "width: 50px"
    }, {
      id: "delayTime",
      sortable: false,
      headerClass: ["align-center"],
      style: "width: 180px;",
      cellClass: ["text-end"]
    }, {
      id: "modified",
      sortable: false,
      headerClass: ["align-left"],
      //style: "min-width: 200px",
      cellClass: ["text-start"]
    }];
    this.editThreshold = [false];
    this.editPrior = [false];
    this.editDelay = [false]; // Fetch alert settings - API Call

    this.getSettings = () => {
      this.loading = true;
      let patientId = encodeURIComponent(this.patientId);
      let url = `arrhythmia-alert-settings/patient/${this.cfId}/${patientId}`;
      this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreActions.loadArrhythmiaAlertConfigurationRequestAction({
        url
      }));
      this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
        this.error = data;
      });
    }; ////

  }

  ngOnInit() {
    this.postures = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.postures;
    this.roles = this.autheticationService.getRoles();
    this.timeZone = this.userPreference.getUserTimeZone();
    this.userPreferenceUnit = this.userPreference.getUserUnitSystem();

    if (this.userPreferenceUnit === 'IS') {
      this.tempConvFunction = this.userPreference.convertFtoC;
    } else {
      this.tempConvFunction = temp => temp;
    }

    this.parameterMinMax = this.alertService.getParameterMinMax();
    this.cfId = this.autheticationService.getCfId();
    this.patientId = this.patientData.patientId;
    this.alertSettings$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getArrhythmiaAlertConfigurations);
    this.alertSettingsStatus$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationStatus);
    this.alertSettingsMessage$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationMessage);
    this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
      var _a;

      this.error = data;

      if (((_a = data === null || data === void 0 ? void 0 : data.error) === null || _a === void 0 ? void 0 : _a.errorMessage) === 'ACCESS_DENIED') {
        this.snackbar.openCustomSnackBar('alert_config_module.messages.access_denied', 'bottom', 'center', true);
      }
    });
    this.loaderSubscription = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getLoaderStatus).subscribe(loaded => {
      this.loader = !loaded;
    });
    this.getSettings();
    this.alertSettings$.subscribe(data => {
      //this.loader = false;
      this.lastUpdated = new Date().toUTCString();
      this.commonService.setSettingsAlertActionButtons(false);
      this.commonService.setArrhythmiaParameterAlertEditSubmit(false);
      this.hideParameterEdit();
      this.masterData = Object.assign({}, data);
      this.masterData.GroupId = "";
      this.masterData.PatientId = this.patientId;
      this.masterData.FacilityId = this.cfId;
      this.masterData.AlertId = "";
      const alerts = [];
      this.parameterAlert.forEach((element, i) => {
        if (data === null || data === void 0 ? void 0 : data.Setting[element.key]) {
          const settings = data.Setting[element.key];
          alerts.push(Object.assign(Object.assign({}, settings), {
            alert: element.alerts,
            unit: element.unit,
            key: element.key,
            index: i
          }));
        }
      });
      this.parameterAlertSettings = alerts;
      this.parameterAlertSettingsCopy = JSON.parse(JSON.stringify(alerts));
      this.loading = false;
    }, err => {
      this.loading = false;
    });
    this.commonService.settingsAlertActionButtonsShow.subscribe(isShow => {
      if (this.showActionButtons !== isShow) {
        this.showActionButtons = isShow;
      }
    });
    this.alertSettings$.subscribe(data => {
      var _a;

      this.alertSettings = Object.assign({}, data);
      this.alertId = this.alertSettings.ArrhythmiaId;
      this.isShowResetButton = (_a = this.alertSettings) === null || _a === void 0 ? void 0 : _a.IsForPatient;
    });

    if ((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.isAllowedRole)(this.parameterAlertAccess["EDIT"], this.roles)) {
      this.isEditAccess = true;
    }

    this.subscriptions.push(this.commonService.arrhythmiaParameterAlertEditHide.subscribe(isHide => {
      if (isHide) {
        this.parameterAlertSettings = JSON.parse(JSON.stringify(this.parameterAlertSettingsCopy));
        this.hideParameterEdit();
      }
    }));
    this.subscriptions.push(this.commonService.arrhythmiaParameterAlertEditSubmit.subscribe(isSubmit => {
      if (isSubmit) {
        this.updateParameterSettings();
      }
    }));
  }

  openDialog() {
    const SaveChanges = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        body: {
          title: "shared.confirm_text",
          text: "additional_devices.confirm_reset"
        }
      },
      disableClose: true
    });
    SaveChanges.afterClosed().subscribe(data => {
      if (data) {
        this.handleFactoryReset();
      }
    });
  }

  showEdit(index) {
    this.editThreshold[index] = true;
  }

  hideEdit(index) {
    this.editThreshold[index] = false;
  }

  showEditPrior(index) {
    this.editPrior[index] = true;
  }

  hideEditPrior(index) {
    this.editPrior[index] = false;
  }

  showEditDelay(index) {
    this.editDelay[index] = true;
  }

  hideEditDelay(index) {
    this.editDelay[index] = false;
  } // Hide all active edit buttons


  hideParameterEdit() {
    this.editThreshold = [false];
    this.editPrior = [false];
    this.editDelay = [false];
  }

  toggle(i) {
    this.editThreshold[i] = false;
    this.editPrior[i] = false;
    this.editDelay[i] = false;
    this.updated();
  } // Show and Hide Table Edit fields


  showHideEdit(index, type) {
    switch (type) {
      case "threshold":
        this.editThreshold[index] = !this.editThreshold[index];
        break;

      case "priority":
        this.editPrior[index] = !this.editPrior[index];
        break;

      case "delay":
        this.editDelay[index] = !this.editDelay[index];
        break;

      default:
        break;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
  }

  updateParameterSettings() {
    var _this = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const parameterAlert = {};
      let settings = [..._this.parameterAlertSettings];
      settings.forEach(element => {
        parameterAlert[element.key] = {
          Enabled: element.Enabled,
          Priority: element.Priority,
          LowThr: element.LowThr,
          HighThr: element.HighThr,
          Thr: element.Thr,
          CondDelay: parseInt(element.CondDelay)
        };
      });
      const payload = Object.assign({}, _this.masterData);
      payload["Setting"] = parameterAlert;
      delete payload["auditloginfotype"];
      let patientId = encodeURIComponent(_this.patientId);
      let url = `arrhythmia-alert-settings/patient-edit/${_this.cfId}/${patientId}`;

      try {
        const resp = yield _this.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.dataApiUrl + url, payload).toPromise();

        if (resp.status === "OK") {
          _this.reloadData.emit();

          _this.snackbar.openCustomSnackBar('Settings has been updated successfully', 'bottom', 'center');

          _this.commonService.setSettingsAlertActionButtons(false);

          _this.commonService.setArrhythmiaParameterAlertEditSubmit(false);

          _this.hideParameterEdit();

          _this.getSettings();
        }
      } catch (error) {
        _this.error = error;
      }
    })();
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsEditCancel() {
    this.parameterAlertSettings = JSON.parse(JSON.stringify(this.parameterAlertSettingsCopy));
    this.commonService.setSettingsAlertActionButtons(false);
    this.commonService.setArrhythmiaParameterAlertEditSubmit(false);
    this.hideParameterEdit();
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsSave() {
    this.updateParameterSettings();
  } // Handle alert setting factory reset action


  handleFactoryReset() {
    var _this2 = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const patientId = encodeURIComponent(_this2.patientId);
      const url = `arrhythmia-alert-settings/patient-reset/${_this2.cfId}/${patientId}/${_this2.alertId}`;

      try {
        const resp = yield _this2.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.dataApiUrl + url, {}).toPromise();

        if (resp.status === "OK") {
          _this2.snackbar.openCustomSnackBar("alert_config_module.reset_success", 'bottom', 'center', true);

          _this2.getSettings();
        }
      } catch (error) {
        _this2.snackbar.openCustomSnackBar("alert_config_module.reset_error", 'bottom', 'center', true);
      }
    })();
  }

  selectTab(value) {
    if (this.selectedTab !== value) {
      this.commonService.setSettingsAlertActionButtons(false);
    }

    this.selectedTab = value;
  }

  checkRole(allowedRoles, userRoles) {
    if (allowedRoles.some(ai => userRoles.includes(ai))) {
      return true;
    } else {
      return false;
    }
  } // Threshold input filed validation


  parameterThresholdChanged(index, key, minMax) {
    const keyMapping = {
      LowThr: "invalid_low_threshold",
      HighThr: "invalid_high_threshold",
      CondDelay: "invalid_delay_time",
      Thr: "invalid_threshold"
    };
    this.updated();

    if (this.parameterAlertSettings[index][key] < minMax["MIN"][key] || this.parameterAlertSettings[index][key] > minMax["MAX"][key]) {
      this.parameterAlertSettings[index][key] = this.parameterAlertSettingsCopy[index][key];
      let range = `${minMax["MIN"][key]} & ${minMax["MAX"][key]}`;
      let translate_txt = "alert_config_module.messages." + keyMapping[key];
      this.snackbar.openCustomSnackBar(translate_txt, 'bottom', 'center', true, '', range);
      this.commonService.setSettingsAlertActionButtons(false); // to do specific error message
    }
  }

  isBlank(str) {
    return !str || 0 === str.length || str === " " || str === "null" || str === "undefined";
  }

  updated() {
    if (JSON.stringify(this.parameterAlertSettings) !== JSON.stringify(this.parameterAlertSettingsCopy)) {
      this.commonService.setSettingsAlertActionButtons(true);
    } else {
      this.commonService.setSettingsAlertActionButtons(false);
    }
  }

  limitdelay(event) {
    if (event.key === '.') {
      event.preventDefault();
    }

    if (event.target.value.toString().length > 5) {
      event.target.value = event.target.value.substr(0, 5);
    }
  }

  numericsOnly(control, event) {
    let numericsOnlyPattern = /^[0-9_]$/;
    let key = event.key;

    if (numericsOnlyPattern.test(key)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}

ArrhythmiaAlertsComponent.ɵfac = function ArrhythmiaAlertsComponent_Factory(t) {
  return new (t || ArrhythmiaAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_6__.UserPreferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_backendapi_service__WEBPACK_IMPORTED_MODULE_8__.BackendApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_10__.AlertConfigurationsService));
};

ArrhythmiaAlertsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ArrhythmiaAlertsComponent,
  selectors: [["app-arrhythmia-alerts"]],
  inputs: {
    patientData: "patientData"
  },
  outputs: {
    reloadData: "reloadData"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "container-fuild"], [3, "patientData", "updated"], ["class", "loading-indicator", 4, "ngIf"], ["class", "inside-div head-border comman-table-users bg-thead-color", 4, "ngIf"], ["class", "row px-1", 4, "ngIf"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "inside-div", "head-border", "comman-table-users", "bg-thead-color"], [3, "config", "columns", "data", "configChange"], ["lsWidgetName", "enabled"], ["lsWidgetName", "alerts"], ["lsWidgetName", "threshold"], ["lsWidgetName", "editThreshold"], ["lsWidgetName", "priority"], ["lsWidgetName", "editPriority"], ["lsWidgetName", "delayTime"], ["lsWidgetName", "modified"], [1, "d-flex", "align-items-center"], [1, "ms-1", "me-2", 3, "ngModel", "disabled", "ngModelChange", "change"], ["class", "fw-normal", 4, "ngIf"], [1, "fw-normal"], [4, "ngIf"], ["class", "d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center"], ["matInput", "", "digitOnly", "", "autocomplete", "off", "type", "number", 1, "text-input-box", "py-1", "me-1", 3, "ngModel", "min", "max", "keypress", "paste", "ngModelChange", "change"], ["mat-mini-fab", "", "color", "primary", "class", "btn-boxed btn-no-shadow", 3, "disabled", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "btn-boxed", "btn-no-shadow", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "btn-boxed", "btn-no-shadow", 3, "click"], [1, "me-2"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "16", "cy", "16", "r", "8"], ["cx", "16", "cy", "16", "r", "12", "stroke-width", "2", "stroke-dasharray", "4 4", 4, "ngIf"], ["cx", "16", "cy", "16", "r", "12", "stroke-width", "2", "stroke-dasharray", "4 4"], ["placeholder", "Select", 1, "priority-drop-down", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "d-flex", "justify-content-around", "align-items-center"], [1, "d-flex", "ack-column", "justify-content-center", "align-items-center"], [1, "nowrap-align", "d-flex", "justify-content-center", "align-items-center"], ["class", "text-value align-items-center justify-content-end", 4, "ngIf"], [1, "text-value", "align-items-center", "justify-content-end"], ["matInput", "", "autocomplete", "off", "type", "number", "digitOnly", "", "size", "4", 1, "text-input-box", "py-1", 3, "min", "max", "ngModel", "keypress", "paste", "change", "ngModelChange"], [1, "ms-2", "edit"], ["mat-mini-fab", "", "color", "primary", "class", "btn-boxed btn-no-shadow", 3, "click", 4, "ngIf"], [1, "row", "px-1"], [1, "col-lg-6"], ["mat-flat-button", "", "class", "reset_btn_bg px-2", 3, "click", 4, "ngIf"], [1, "col-lg-6", "text-end"], [3, "ngIf"], ["mat-flat-button", "", 1, "reset_btn_bg", "px-2", 3, "click"], [1, "ps-1"], ["mat-flat-button", "", "color", "warn", 1, "fill-btn", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "fill-btn", 3, "click"]],
  template: function ArrhythmiaAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-patient-details", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ArrhythmiaAlertsComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ArrhythmiaAlertsComponent_div_3_Template, 10, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ArrhythmiaAlertsComponent_mat_dialog_actions_4_Template, 5, 2, "mat-dialog-actions", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("patientData", ctx.patientData)("updated", ctx.lastUpdated);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loader && ctx.isEditAccess);
    }
  },
  directives: [_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_11__.PatientDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__.LsTableComponent, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__.LsWidgetNameDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__.NativeElementInjectorDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".mat-sel[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.text-input-box[_ngcontent-%COMP%] {\n  width: 50px !important;\n  height: 26px !important;\n  background: white;\n  box-sizing: border-box;\n  color: black;\n  border-radius: 4px;\n  font-size: 14px;\n  border: 1px solid rgba(123, 193, 255, 0.64);\n  text-align: center;\n}\n.priority-drop-down[_ngcontent-%COMP%] {\n  width: 90px;\n  border: none !important;\n  padding: 2px;\n  text-align: left;\n  background: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.reset_btn_bg[_ngcontent-%COMP%] {\n  background: #42709a;\n}\n.text-value[_ngcontent-%COMP%] {\n  width: 60px;\n  text-align: right;\n}\n.alert-dialog-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsImFycmh5dGhtaWEtYWxlcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHlCQUFBO0FBc0VBLG9CQUFBO0FBd0NBLFdBQUE7QUFNQSxVQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBUUEsa0JBQUE7QUFJQSxjQUFBO0FBZUEsZUFBQTtBQUlBLGVBQUE7QUEwQkEsa0JBQUE7QUFRQSxpQkFBQTtBQVFBLDZCQUFBO0FBUUEsK0JBQUE7QUNwTkE7Ozs7RUFBQTtBQUtBOztFQUFBO0FBR0E7RUFDRSxZQUFBO0FBY0Y7QUFaQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFlRjtBQWJBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JENUJNO0VDNkJOLDJDRHVIaUI7RUN0SGpCLHNCRDRFYztBQzVEaEI7QUFkQTtFQUNFLG1CRHVFYTtBQ3REZjtBQWZBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBa0JGO0FBaEJBO0VBQXNCLFVBQUE7QUFvQnRCIiwiZmlsZSI6ImFycmh5dGhtaWEtYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuLyo6Om5nLWRlZXAge1xuICAuc2Nyb2xsLWFzc2lzdCB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KSAhaW1wb3J0YW50O1xuICB9XG59Ki9cbi8qLmluc2lkZS1kaXYge1xuICBoZWlnaHQ6IDMwMHB4O1xufSovXG4ubWF0LXNlbCB7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi50ZXh0LWlucHV0LWJveCB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjZweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByaW9yaXR5LWRyb3AtZG93biB7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cbi5yZXNldF9idG5fYmcge1xuICBiYWNrZ3JvdW5kOiAkYmctcmVzZXQtYnRuO1xufVxuLnRleHQtdmFsdWV7XG4gIHdpZHRoOiA2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hbGVydC1kaWFsb2ctY29udGVudHtwYWRkaW5nOiAwO31cblxuIl19 */"]
});

/***/ }),

/***/ 39503:
/*!******************************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/destination-setting/destination-setting.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinationSettingComponent": function() { return /* binding */ DestinationSettingComponent; }
/* harmony export */ });
/* harmony import */ var C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 80151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _services_backendapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/backendapi.service */ 68493);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patient-details/patient-details.component */ 67138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _alert_destination_alert_destination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert-destination/alert-destination.component */ 5178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function DestinationSettingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function DestinationSettingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-alert-destination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("updateDestination", function DestinationSettingComponent_div_3_Template_app_alert_destination_updateDestination_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r4.valueUpdated($event, "clinical");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-alert-destination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("updateDestination", function DestinationSettingComponent_div_3_Template_app_alert_destination_updateDestination_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r6.valueUpdated($event, "tech");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alertType", "Clinical")("alertDestinationSettings", ctx_r1.alertDestinationSettings.Setting)("alertDestinationSettingsCopy", ctx_r1.alertDestinationSettingsCopy.Setting)("userData", ctx_r1.alertDestinationSettings == null ? null : ctx_r1.alertDestinationSettings.UserData);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alertType", "Technical")("alertDestinationSettings", ctx_r1.alertDestinationSettings.SettingTech)("alertDestinationSettingsCopy", ctx_r1.alertDestinationSettingsCopy.SettingTech)("userData", ctx_r1.alertDestinationSettings == null ? null : ctx_r1.alertDestinationSettings.UserData);
  }
}

function DestinationSettingComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DestinationSettingComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r7.openDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 1, "alert_config_module.reset_to_default"));
  }
}

function DestinationSettingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DestinationSettingComponent_ng_template_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r9.handleAlertSettingsEditCancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DestinationSettingComponent_ng_template_8_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r11.handleAlertSettingsSave();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "alert_config_module.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 4, "alert_config_module.save"));
  }
}

class DestinationSettingComponent {
  constructor(commonService, router, dialog, snackbar, backendApiService, autheticationService, store$) {
    this.commonService = commonService;
    this.router = router;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.backendApiService = backendApiService;
    this.autheticationService = autheticationService;
    this.store$ = store$;
    this.cfId = "";
    this.alertGroupId = null;
    this.subscriptions = [];
    this.reloadData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(true);
    this.alertSettings = {};
    this.loader = true;
    this.isPHYGCUser = false;
    this.showActionButtons = false;
    this.isShowResetButton = false;
    this.loading = false;
  }

  ngOnInit() {
    this.cfId = this.autheticationService.getCfId();
    this.roles = this.autheticationService.getRoles();
    this.patientId = this.patientData.patientId;
    this.fetchContactList();
    this.alertDestinationSettings$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getDestinationAlertConfigurations);
    this.alertSettingsStatus$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getAlertConfigurationStatus);
    this.alertSettingsMessage$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getAlertConfigurationMessage);
    this.loaderSubscription = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getLoaderStatus).subscribe(loaded => {
      this.loader = !loaded;
    });
    this.getAlertDestinationSettings();

    if (["PHY", "GC"].some(ai => this.roles.includes(ai))) {
      this.isPHYGCUser = true; // this.isShowResetButton = false;
    }

    if (["PHY", "SC"].some(ai => this.roles.includes(ai))) {
      // this.isPHYGCUser = true;
      this.isShowResetButton = false;
    }

    this.alertDestinationSettings$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getDestinationAlertConfigurations);
    this.alertDestinationSettings$.subscribe(data => {
      var _a, _b, _c;

      console.log(data);
      this.alertDestinationSettings = Object.assign({}, data);
      this.alertDestinationSettings.UserData = (_b = (_a = this.alertDestinationSettings) === null || _a === void 0 ? void 0 : _a.UserData) === null || _b === void 0 ? void 0 : _b.map(user => {
        return Object.assign(Object.assign({}, user), {
          displayName: `${user === null || user === void 0 ? void 0 : user.firstName} ${user === null || user === void 0 ? void 0 : user.lastName}`,
          userId: user.id
        });
      });

      if (this.alertDestinationSettings.PatientId !== this.patientId) {
        this.alertDestinationSettings.AlertDestId = '';
      }

      this.alertDestinationSettings.PatientId = this.patientId;
      this.alertDestinationSettings.FacilityId = this.cfId;
      this.alertDestinationSettings.GroupId = ""; //this.alertDestinationSettings.AlertDestId = "";

      this.alertDestinationSettingsCopy = JSON.parse(JSON.stringify(this.alertDestinationSettings));
      this.isShowResetButton = (_c = this.alertDestinationSettings) === null || _c === void 0 ? void 0 : _c.IsForPatient;
    });
    this.subscriptions.push(this.commonService.destinationAlertEditSubmit.subscribe(isSubmit => {
      if (isSubmit) {
        this.handleAlertSettingsSave();
      }
    }));
    this.commonService.settingsAlertActionButtonsShow.subscribe(isShow => {
      if (this.showActionButtons !== isShow) {
        this.showActionButtons = isShow;
      }
    });
  }

  handleFactoryReset() {
    var _this = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const patientId = encodeURIComponent(_this.patientId);
      const url = `alert-settings/patient-reset/alert-destination-settings/${_this.cfId}/${patientId}`;

      try {
        const resp = yield _this.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.dataApiUrl + url, {}).toPromise();

        if (resp.status === "OK") {
          _this.snackbar.openCustomSnackBar("alert_config_module.reset_success", 'bottom', 'center', true);

          _this.getAlertDestinationSettings();
        }
      } catch (error) {
        _this.snackbar.openCustomSnackBar("alert_config_module.reset_error", 'bottom', 'center', true);

        console.log(_this.error);
      }
    })();
  }

  openDialog() {
    const SaveChanges = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        body: {
          title: "shared.confirm_text",
          text: "additional_devices.confirm_reset"
        }
      },
      disableClose: true
    });
    SaveChanges.afterClosed().subscribe(data => {
      if (data) {
        this.handleFactoryReset();
      }
    });
  }

  fetchContactList() {
    let url = "clinical-facilities/contacts?page=1&size=1000";
    this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreActions.loadClinicalFacilityContactsRequestAction({
      url
    }));
    this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
      var _a;

      if (((_a = data === null || data === void 0 ? void 0 : data.error) === null || _a === void 0 ? void 0 : _a.errorMessage) === 'ACCESS_DENIED') {
        this.snackbar.openCustomSnackBar("alert_config_module.messages.access_denied", 'bottom', 'center', true);
      }
    });
  }

  getAlertDestinationSettings() {
    this.loading = true;
    let patientId = encodeURIComponent(this.patientId);
    const url = `alert-settings/patient/${this.cfId}/${patientId}/alert-destination-settings`;
    this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreActions.loadDestinationAlertConfigurationRequestAction({
      url
    }));
    this.store$.select(_store__WEBPACK_IMPORTED_MODULE_1__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
      this.error = data;
    });
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsSave() {
    var _this2 = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const url = `alert-settings/patient-edit/alert-destination-settings`;
        const resp = yield _this2.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.dataApiUrl + url, _this2.alertDestinationSettings).toPromise();

        if (resp.status === "OK") {
          _this2.snackbar.openCustomSnackBar("Settings has been updated successfully", 'bottom', 'center');

          _this2.getAlertDestinationSettings();

          _this2.commonService.setSettingsAlertActionButtons(false);

          _this2.commonService.setDestinationAlertEditSubmit(false);
        }
      } catch (error) {}
    })();
  }

  valueUpdated(event, type) {
    if (type === 'clinical') {
      this.alertDestinationSettings.Setting = JSON.parse(event);
    } else {
      this.alertDestinationSettings.SettingTech = JSON.parse(event);
    }

    if (JSON.stringify(this.alertDestinationSettings) !== JSON.stringify(this.alertDestinationSettingsCopy)) {
      this.commonService.setSettingsAlertActionButtons(true);
    } else {
      this.commonService.setSettingsAlertActionButtons(false);
    }
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsEditCancel() {
    this.commonService.setSettingsAlertActionButtons(false);
    this.commonService.setDestinationAlertEditHide(true);
  } // root Alert Destination Settings


  ngOnDestroy() {
    this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
  }

}

DestinationSettingComponent.ɵfac = function DestinationSettingComponent_Factory(t) {
  return new (t || DestinationSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_backendapi_service__WEBPACK_IMPORTED_MODULE_6__.BackendApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store));
};

DestinationSettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: DestinationSettingComponent,
  selectors: [["app-destination-setting"]],
  inputs: {
    patientData: "patientData"
  },
  outputs: {
    reloadData: "reloadData"
  },
  decls: 9,
  vars: 5,
  consts: [[1, "alert-dialog-content"], [3, "patientData"], ["class", "loading-indicator", 4, "ngIf"], ["class", "inside-div head-border alert-destination-table comman-table-users bg-thead-color", 4, "ngIf"], [1, "row", "px-1"], [1, "col-lg-6"], ["mat-flat-button", "", "class", "reset_btn_bg mb-2 mb-md-0 px-2", 3, "click", 4, "ngIf"], [1, "col-lg-6", "text-end"], [3, "ngIf"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "inside-div", "head-border", "alert-destination-table", "comman-table-users", "bg-thead-color"], [3, "alertType", "alertDestinationSettings", "alertDestinationSettingsCopy", "userData", "updateDestination"], ["mat-flat-button", "", 1, "reset_btn_bg", "mb-2", "mb-md-0", "px-2", 3, "click"], [1, "fw-normal"], [1, "ps-1"], ["mat-flat-button", "", "color", "warn", 1, "fill-btn", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "fill-btn", 3, "click"]],
  template: function DestinationSettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-dialog-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-patient-details", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DestinationSettingComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DestinationSettingComponent_div_3_Template, 3, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-dialog-actions", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, DestinationSettingComponent_button_6_Template, 6, 3, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, DestinationSettingComponent_ng_template_8_Template, 8, 6, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("patientData", ctx.patientData);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loader && ctx.isShowResetButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showActionButtons);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_8__.PatientDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _alert_destination_alert_destination_component__WEBPACK_IMPORTED_MODULE_9__.AlertDestinationComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: [".alert-dialog-content[_ngcontent-%COMP%] {\n  max-height: 100vh;\n}\n.reset_btn_bg[_ngcontent-%COMP%] {\n  background: #42709a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsImRlc3RpbmF0aW9uLXNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ25OQTs7O0VBQUE7QUFLQTtFQUNJLGlCQUFBO0FBWUo7QUFSQTtFQUNJLG1CRDJGVztBQ2hGZiIsImZpbGUiOiJkZXN0aW5hdGlvbi1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuXG4vKi5hbGVydC1kZXN0aW5hdGlvbi10YWJsZSB7XG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0qL1xuXG4uYWxlcnQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuXG59XG5cbi5yZXNldF9idG5fYmcge1xuICAgIGJhY2tncm91bmQ6ICRiZy1yZXNldC1idG47XG4gIH0iXX0= */"]
});

/***/ }),

/***/ 16447:
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/event-list/event-list.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListComponent": function() { return /* binding */ EventListComponent; }
/* harmony export */ });
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-event/add-event.component */ 45211);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../life-signals/_models/ls-column.model */ 24856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert-configuration.service */ 26430);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../patient-details/patient-details.component */ 67138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _life_signals_components_ls_paginator_ls_paginator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../life-signals/_components/ls-paginator/ls-paginator.component */ 76407);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function EventListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](event_r4.alertType);
} }
function EventListComponent_div_4_tr_29_span_5_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EventListComponent_div_4_tr_29_span_5_span_1_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symptom_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", i_r23 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](symptom_r22);
} }
function EventListComponent_div_4_tr_29_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EventListComponent_div_4_tr_29_span_5_span_1_Template, 4, 2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", event_r4 == null ? null : event_r4.symptoms);
} }
function EventListComponent_div_4_tr_29_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EventListComponent_div_4_tr_29_span_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r26.editEvent(event_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "alert_config_module.add_event.add_label"), " ");
} }
function EventListComponent_div_4_tr_29_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_9_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_9_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](activity_r30);
} }
function EventListComponent_div_4_tr_29_span_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EventListComponent_div_4_tr_29_span_9_span_1_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, EventListComponent_div_4_tr_29_span_9_span_1_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", i_r31 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", activity_r30);
} }
function EventListComponent_div_4_tr_29_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EventListComponent_div_4_tr_29_span_9_span_1_Template, 3, 2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", event_r4 == null ? null : event_r4.activity);
} }
function EventListComponent_div_4_tr_29_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_img_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EventListComponent_div_4_tr_29_img_12_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r36.recordedNote(event_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EventListComponent_div_4_tr_29_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41); const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r39.addNote(event_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "note_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EventListComponent_div_4_tr_29_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](2, 1, (event_r4 == null ? null : event_r4.acknowledgedOn) * 1000, "MMM dd, " + ctx_r16.timeFmt, ctx_r16.timeZone), "");
} }
function EventListComponent_div_4_tr_29_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("by ", event_r4 == null ? null : event_r4.acknowledgedBy, "");
} }
function EventListComponent_div_4_tr_29_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EventListComponent_div_4_tr_29_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46); const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r44.acknowledge(event_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "alert_config_module.alertfreq_acknowledge"), " ");
} }
function EventListComponent_div_4_tr_29_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "alert_config_module.acknowledge"), " ");
} }
function EventListComponent_div_4_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function EventListComponent_div_4_tr_29_Template_mat_checkbox_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r48); const event_r4 = restoredCtx.$implicit; return event_r4.checked = $event; })("change", function EventListComponent_div_4_tr_29_Template_mat_checkbox_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r48); const event_r4 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r49.onCheckboxChange($event, event_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, EventListComponent_div_4_tr_29_span_4_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, EventListComponent_div_4_tr_29_span_5_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, EventListComponent_div_4_tr_29_span_6_Template, 4, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, EventListComponent_div_4_tr_29_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, EventListComponent_div_4_tr_29_span_9_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, EventListComponent_div_4_tr_29_span_10_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, EventListComponent_div_4_tr_29_img_12_Template, 1, 0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, EventListComponent_div_4_tr_29_mat_icon_13_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, EventListComponent_div_4_tr_29_span_14_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, EventListComponent_div_4_tr_29_span_20_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, EventListComponent_div_4_tr_29_span_21_Template, 3, 5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, EventListComponent_div_4_tr_29_span_22_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, EventListComponent_div_4_tr_29_button_24_Template, 3, 3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, EventListComponent_div_4_tr_29_button_25_Template, 3, 4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (event_r4 == null ? null : event_r4.ack) || (event_r4 == null ? null : event_r4.mandatoryNote))("ngModel", event_r4.checked)("checked", event_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", event_r4 == null ? null : event_r4.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.alertType) && (event_r4 == null ? null : event_r4.symptoms == null ? null : event_r4.symptoms.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.alertType) && !(event_r4 == null ? null : event_r4.symptoms == null ? null : event_r4.symptoms.length) && ctx_r2.editAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.alertType) && !(event_r4 == null ? null : event_r4.symptoms == null ? null : event_r4.symptoms.length) && !ctx_r2.editAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", event_r4 == null ? null : event_r4.activity == null ? null : event_r4.activity.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.activity == null ? null : event_r4.activity.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", event_r4 == null ? null : event_r4.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.notes) && !(event_r4 == null ? null : event_r4.ack));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.notes) && (event_r4 == null ? null : event_r4.ack));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](18, 18, event_r4.alertTime * 1000, "MMM dd, " + ctx_r2.timeFmt, ctx_r2.timeZone), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(event_r4 == null ? null : event_r4.acknowledgedOn));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", event_r4 == null ? null : event_r4.acknowledgedOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", event_r4 == null ? null : event_r4.acknowledgedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (event_r4 == null ? null : event_r4.ack) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (event_r4 == null ? null : event_r4.ack) === true);
} }
function EventListComponent_div_4_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "alert_config_module.messages.no_data"));
} }
function EventListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function EventListComponent_div_4_Template_mat_checkbox_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r50.checkAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, EventListComponent_div_4_tr_29_Template, 26, 22, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, EventListComponent_div_4_div_30_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EventListComponent_div_4_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r52.downloadLog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.unAcknowledged)("checked", ctx_r1.selectedEvents.length !== 0 && ctx_r1.selectedEvents.length === ctx_r1.unAcknowledged)("indeterminate", ctx_r1.selectedEvents.length !== 0 && ctx_r1.selectedEvents.length < ctx_r1.unAcknowledged);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 12, "alert_config_module.symptoms_title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 14, "alert_config_module.activity_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 16, "alert_config_module.note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 18, "alert_config_module.event_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 20, "alert_config_module.log"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 22, "alert_config_module.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.patientEventList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.eventListCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 24, "alert_config_module.download_log"), " ");
} }
class EventListComponent {
    constructor(dialog, alertService, store$, userPreference, snackbar, autheticationService) {
        this.dialog = dialog;
        this.alertService = alertService;
        this.store$ = store$;
        this.userPreference = userPreference;
        this.snackbar = snackbar;
        this.autheticationService = autheticationService;
        this.timeFmt = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.customization.timeFormat;
        this.loader = true;
        this.editlabel = [false];
        this.selectedEvents = [];
        this.unAcknowledged = 0;
        this.editAccess = false;
        this.config = {
            page: {
                pageSize: 10,
                pageIndex: 0,
                length: null
            },
            tableState: _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_4__.TableState.DEFAULT
        };
    }
    ngOnInit() {
        var _a, _b;
        this.timeZone = this.userPreference.getUserTimeZone();
        this.roles = this.autheticationService.getRoles() || [];
        if (((_a = this.roles) === null || _a === void 0 ? void 0 : _a.indexOf("GC")) > -1 || ((_b = this.roles) === null || _b === void 0 ? void 0 : _b.indexOf("PHY")) > -1) {
            this.editAccess = true;
        }
        this.patientId = this.patientData.patientId;
        this.eventList$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getEventList);
        this.getEventList();
        // this.reloadInterval = setInterval(() => {
        //   this.getEventList();
        // }, 30000);
        this.eventList$.subscribe(res => {
            this.lastUpdated = new Date().toUTCString();
            this.unAcknowledged = 0;
            this.selectedEvents = [];
            console.log(res);
            this.patientEventList = res.map(event => {
                var _a, _b, _c, _d;
                if (!event.ack && ((event === null || event === void 0 ? void 0 : event.notes) || ((_a = event === null || event === void 0 ? void 0 : event.symptoms) === null || _a === void 0 ? void 0 : _a.length) || ((_b = event === null || event === void 0 ? void 0 : event.activity) === null || _b === void 0 ? void 0 : _b.length))) {
                    this.unAcknowledged++;
                }
                return Object.assign(Object.assign({}, event), { checked: false, mandatoryNote: (!(event === null || event === void 0 ? void 0 : event.notes) && !((_c = event === null || event === void 0 ? void 0 : event.symptoms) === null || _c === void 0 ? void 0 : _c.length) && !((_d = event === null || event === void 0 ? void 0 : event.activity) === null || _d === void 0 ? void 0 : _d.length)) || false });
            });
            console.log(this.patientEventList);
        });
        this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getEventListCount).subscribe(count => {
            this.eventListCount = count;
            this.config.page.length = count;
        });
        this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getTableState).subscribe(state => {
            this.config.tableState = state;
        });
        this.store$
            .select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getEventListLoader)
            .subscribe((loaded) => {
            if (loaded) {
                this.loader = false;
            }
        });
    }
    getEventList() {
        let param = {
            patientId: this.patientId,
            page: this.config.page.pageIndex,
            pageSize: this.config.page.pageSize
        };
        this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreActions.LoadEventListRequestAction({ params: param }));
        this.loaderSubscription = this.store$
            .select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getEventListLoader)
            .subscribe((loaded) => {
            if (loaded) {
                this.loader = false;
            }
        });
    }
    showEdit(index) {
        this.editlabel[index] = true;
    }
    addNewEvent() {
        var _a;
        const addEvent = this.dialog.open(_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_0__.AddEventComponent, {
            width: "600px",
            maxWidth: "98vw",
            height: "100%",
            maxHeight: "100vh",
            panelClass: "add-event-container",
            //maxHeight: "95vh",
            //height: "530px",
            // height: "auto",
            //minHeight: "100px",
            //maxHeight: "90vh",
            data: { patientId: this.patientId, patchStarted: (_a = this.patientData) === null || _a === void 0 ? void 0 : _a.started },
            disableClose: true,
        });
        addEvent.afterClosed().subscribe((data) => {
            console.log(data);
            if (data) {
                this.getEventList();
            }
        });
    }
    editEvent(event) {
        const addEvent = this.dialog.open(_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_0__.AddEventComponent, {
            width: "600px",
            //maxWidth: "98vw",
            //maxHeight: "95vh",
            //height: "530px",
            maxWidth: "96vw",
            height: "100%",
            maxHeight: "100vh",
            panelClass: "add-event-container",
            data: { editEvent: true, event: event },
            disableClose: true,
        });
        addEvent.afterClosed().subscribe((data) => {
            if (data) {
                this.getEventList();
            }
        });
    }
    getRelativeTime(timestamp) {
        let date = new Date();
        const currentTimestamp = (date.getTime()) / 1000;
        const difference = currentTimestamp - timestamp;
        let output = ``;
        if (difference > 0 && difference < 60) {
            // Less than a minute has passed:
            output = `${Math.round(difference)} secs ago`;
        }
        else if (difference < 3600) {
            // Less than an hour has passed:
            output = `${Math.floor(difference / 60)} mins ago`;
        }
        else if (difference < 86400) {
            // Less than a day has passed:
            output = `${Math.floor(difference / 3600)} hrs ago`;
        }
        else if (difference < 2620800) {
            // Less than a month has passed:
            let relativeTime = Math.floor(difference / 86400);
            if (relativeTime === 1) {
                output = `${Math.floor(difference / 86400)} day ago`;
            }
            else {
                output = `${Math.floor(difference / 86400)} days ago`;
            }
        }
        return output;
    }
    openConfirmDialog() {
        const SaveChanges = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "95vw",
            maxHeight: "95vh",
            data: {
                body: {
                    title: "alert_config_module.messages.acknowledge_events",
                    text: "alert_config_module.add_event.confirm_acknowledge",
                },
            },
            disableClose: true,
        });
        SaveChanges.afterClosed().subscribe((data) => {
            if (data) {
                let body = {
                    patientId: this.patientId,
                    ids: this.selectedEvents
                };
                this.alertService.acknowledgeEvent(body)
                    .subscribe(res => {
                    console.log(res);
                    if (res.status === 'OK') {
                        this.loader = true;
                        this.getEventList();
                    }
                }, error => {
                    if (error) {
                        this.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                    }
                });
            }
        });
    }
    recordedNote(event) {
        const addEvent = this.dialog.open(_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_0__.AddEventComponent, {
            width: "600px",
            //maxWidth: "98vw",
            //maxHeight: "95vh",
            //height: "530px",
            maxWidth: "96vw",
            height: "400px",
            //maxHeight:"100vh",
            //panelClass: "add-event-container",
            data: { recordedNote: true, event: event },
            disableClose: true,
        });
        addEvent.afterClosed().subscribe((data) => {
            console.log(data);
        });
    }
    addNote(event) {
        const addEvent = this.dialog.open(_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_0__.AddEventComponent, {
            width: "600px",
            //maxWidth: "98vw",
            //maxHeight: "95vh",
            //height: "530px",
            maxWidth: "96vw",
            height: "100%",
            maxHeight: "100vh",
            panelClass: "add-event-container",
            data: { addNote: true, event: event },
            disableClose: true,
        });
        addEvent.afterClosed().subscribe((data) => {
            if (data) {
                this.getEventList();
            }
        });
    }
    acknowledge(event) {
        console.log(event);
        let body = {
            patientId: this.patientId,
            ids: [event.id]
        };
        if (event === null || event === void 0 ? void 0 : event.mandatoryNote) {
            this.addNote(event);
        }
        else {
            this.alertService.acknowledgeEvent(body)
                .subscribe(res => {
                console.log(res);
                if (res.status === 'OK') {
                    this.loader = true;
                    this.getEventList();
                }
            }, error => {
                if (error) {
                    this.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
                }
            });
        }
    }
    onCheckboxChange(event, id) {
        if (event.checked) {
            this.selectedEvents = [...this.selectedEvents, id];
        }
        else {
            let i = this.selectedEvents.indexOf(id);
            this.selectedEvents.splice(i, 1);
        }
    }
    checkAll(event) {
        this.selectedEvents = [];
        this.patientEventList.forEach(eve => {
            if (event.checked) {
                if (!eve.ack && !eve.mandatoryNote) {
                    eve.checked = true;
                    this.selectedEvents = [...this.selectedEvents, eve.id];
                }
            }
            else {
                eve.checked = false;
            }
        });
        console.log(this.selectedEvents);
    }
    addEventName(index, event) {
        this.editlabel[index] = false;
        event.alertType = event.alertName;
        this.alertService.addEvent(event)
            .subscribe(res => {
            if (res.status === 'OK') {
                this.loader = true;
                this.getEventList();
            }
        }, error => {
            if (error) {
                this.snackbar.openSnackBar("errors.err_generic_message", 'bottom', 'center', true);
            }
        });
    }
    onPaste(event) {
        let clipboardData = event.clipboardData;
        let key = clipboardData.getData('text');
        let charsOnlyPattern = /^[a-zA-Z0-9 ]+$/;
        if (charsOnlyPattern.test(key)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    eventLabelValid(eventLabel) {
        let pattern = /^[a-zA-Z0-9]{1}[a-zA-Z0-9 ]*$/;
        return pattern.test(eventLabel);
    }
    cancelEdit(index) {
        this.editlabel[index] = false;
        this.getEventList();
    }
    onPage(event) {
        this.config = Object.assign(Object.assign({}, this.config), { page: Object.assign(Object.assign({}, this.config.page), { pageIndex: event.pageIndex, pageSize: event.pageSize }) });
        this.getEventList();
    }
    downloadLog() {
        this.alertService.downloadEventLog(this.patientId).subscribe(data => {
            var blobUrl = URL.createObjectURL(data);
            var link = document.createElement("a");
            link.href = blobUrl;
            link.download = "EventLog-" + this.patientId + ".pdf";
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    }
    ngOnDestroy() {
        clearInterval(this.reloadInterval);
    }
}
EventListComponent.ɵfac = function EventListComponent_Factory(t) { return new (t || EventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_5__.AlertConfigurationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_6__.UserPreferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService)); };
EventListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EventListComponent, selectors: [["app-event-list"]], inputs: { patientData: "patientData" }, decls: 5, vars: 12, consts: [[1, "container-fluid"], [3, "patientData", "tab", "activeEvents", "eventEditAccess", "updated", "addEvent", "acknowledgeAllEvents"], ["class", "loading-indicator", 4, "ngIf"], ["showFirstLastButtons", "", 1, "sticky-paginator", 3, "length", "pageSize", "pageLength", "pageIndex", "tableState", "page"], ["class", "inside-div table-responsive-md head-border comman-table-users bg-thead-color", 4, "ngIf"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "inside-div", "table-responsive-md", "head-border", "comman-table-users", "bg-thead-color"], [1, "event-scroll-assist"], ["aria-label", "Table", 1, "mat-table"], [1, "thead-row"], [1, "text-start", "event-col", "text-uppercase"], [3, "disabled", "checked", "indeterminate", "change"], [1, "ps-4"], ["src", "../../../../assets/icons/sort-icon.svg", "alt", "sort-icon", "width", "20", "height", "17"], [1, "text-start"], [1, "d-flex", "justify-content-center"], [2, "display", "contents"], ["src", "../../assets/icons/sort-icon.svg", "alt", "sort-icon", "width", "24", "height", "20"], ["class", "tbody-row tbody-row-lower", 4, "ngFor", "ngForOf"], ["class", "text-center my-3", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "my-2", "text-uppercase", 3, "click"], [1, "tbody-row", "tbody-row-lower"], [1, "event-col"], [1, "d-flex", "align-items-center"], [1, "pe-4", 3, "disabled", "ngModel", "checked", "ngModelChange", "change"], ["class", "event-label", 4, "ngIf"], [4, "ngIf"], ["class", "ps-2", 4, "ngIf"], [1, "px-2"], ["class", "cursor-pointer note-icon", "src", "../../../../assets/icons/note.png", 3, "click", 4, "ngIf"], ["class", "cursor-pointer", "fontSet", "material-icons-outlined", 3, "click", 4, "ngIf"], ["class", "ackdata", 4, "ngIf"], [1, "text-center", "px-2"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "disabled", 4, "ngIf"], [1, "event-label"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "click"], [1, "ps-2"], ["src", "../../../../assets/icons/note.png", 1, "cursor-pointer", "note-icon", 3, "click"], ["fontSet", "material-icons-outlined", 1, "cursor-pointer", 3, "click"], [1, "ackdata"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "disabled"], [1, "text-center", "my-3"]], template: function EventListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-patient-details", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("addEvent", function EventListComponent_Template_app_patient_details_addEvent_1_listener() { return ctx.addNewEvent(); })("acknowledgeAllEvents", function EventListComponent_Template_app_patient_details_acknowledgeAllEvents_1_listener() { return ctx.openConfirmDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, EventListComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ls-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("page", function EventListComponent_Template_ls_paginator_page_3_listener($event) { return ctx.onPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, EventListComponent_div_4_Template, 36, 26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("patientData", ctx.patientData)("tab", "eventList")("activeEvents", ctx.selectedEvents.length)("eventEditAccess", ctx.editAccess)("updated", ctx.lastUpdated);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("length", ctx.config == null ? null : ctx.config.page == null ? null : ctx.config.page.length)("pageSize", ctx.config == null ? null : ctx.config.page == null ? null : ctx.config.page.pageSize)("pageLength", ctx.patientEventList == null ? null : ctx.patientEventList.length)("pageIndex", ctx.config == null ? null : ctx.config.page == null ? null : ctx.config.page.pageIndex)("tableState", ctx.config == null ? null : ctx.config.tableState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.loader);
    } }, directives: [_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_9__.PatientDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _life_signals_components_ls_paginator_ls_paginator_component__WEBPACK_IMPORTED_MODULE_10__.LsPaginatorComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_20__.NativeElementInjectorDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".label-top[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 14px;\n  line-height: 20px;\n  \n  text-align: center;\n  color: #fff;\n}\n.note-icon[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n.number-top[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 30px;\n  color: #fff;\n}\n.span1[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  position: fixed;\n  color: white;\n}\n.span2[_ngcontent-%COMP%] {\n  position: fixed;\n  color: white;\n  margin-left: 95px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  \n  letter-spacing: 0.25px;\n}\n.span3[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 20px;\n  \n  letter-spacing: 0.25px;\n  color: #67a5d2;\n}\n.span4[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 20px;\n}\n.vl[_ngcontent-%COMP%] {\n  position: fixed;\n  margin-left: 80px;\n  border-left: 0.1px solid white;\n  height: 38px;\n}\n.vl[_ngcontent-%COMP%]   .hourtxt[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold !important;\n  font-size: 14px;\n  line-height: 16px;\n}\n.ackdata[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n  line-height: 1rem;\n}\n\n.last-updated[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  letter-spacing: 0.25px;\n  color: #fff;\n  opacity: 0.8;\n}\n.btn-add-event[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 40px !important;\n  margin-left: 20px;\n  margin-top: 0 !important;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n}\n.tbody-row[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 16px;\n  align-items: center;\n  letter-spacing: 0.05em;\n  border: none;\n  padding: 10px !important;\n}\n.thead-row[_ngcontent-%COMP%] {\n  border-radius: 8px 0px 0px 0px;\n  padding-left: 20px !important;\n}\nthead[_ngcontent-%COMP%] {\n  padding-bottom: 5px !important;\n}\n.tbody-row-upper[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.editbtn[_ngcontent-%COMP%] {\n  width: 27px !important;\n  height: 27px !important;\n  background: #00549f;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.16);\n  border-radius: 0.25rem;\n  margin-left: 10px;\n  border: none;\n}\n.edit-box[_ngcontent-%COMP%] {\n  width: 150px !important;\n  height: 30px !important;\n  background: white;\n  box-sizing: border-box;\n  border-radius: 0.25rem;\n  padding: 5px;\n  border: 1px solid rgba(123, 193, 255, 0.64);\n  color: #023f74;\n}\n.event-label[_ngcontent-%COMP%] {\n  white-space: normal;\n  min-width: 300px;\n  display: block;\n}\n.tbody-row-lower[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-top: 5px solid rgba(4, 60, 109, 0.4);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 7px solid #043158 !important;\n  font-size: 14px;\n}\n.thead-event-number[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  color: #fff;\n}\n.btn-table-header[_ngcontent-%COMP%] {\n  width: 165px;\n  height: 32px;\n  \n  \n  background: #00549f;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  border: none;\n  margin-right: 20px;\n}\n.btn-class[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 3px;\n  margin-right: 10px;\n}\n.btn-class1[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 3px;\n  margin-right: 10px;\n  margin-bottom: 10px !important;\n}\n.event-col[_ngcontent-%COMP%] {\n  padding-left: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsImV2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ25OQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUVBLFdEVk07QUNxQlI7QUFUQTtFQUNFLGdCQUFBO0FBWUY7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRHBCTTtBQ2lDUjtBQVZBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWFGO0FBVkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtBQVdGO0FBUkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxzQkFBQTtFQUVBLGNEVlc7QUNtQmI7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFTRjtBQU5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBU0Y7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFTSjtBQUxBO0VBQ0UsZURsRVE7RUNtRVIsY0FBQTtFQUNFLGlCQUFBO0FBUUo7QUFMQTs7RUFBQTtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXRDdGTTtFQzhGTixZQUFBO0FBT0Y7QUFKQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFPRjtBQUpBO0VBR0UsV0FBQTtFQUNBLGNBQUE7QUFLRjtBQURBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUlGO0FBREE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0FBSUY7QUFEQTtFQUVFLDhCQUFBO0FBR0Y7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkQ1RGdCO0VDNkRoQiwyQ0RJa0I7RUNIbEIsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFHRjtBQUFBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0RwQmM7RUNxQmQsY0QvRm1CO0FDa0dyQjtBQUFBO0VBQ0UsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtBQUVGO0FBQ0E7RUFDRSwyQ0FBQTtFQUNBLGVEeEtlO0FDMEtqQjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLFdEdExNO0FDdUxSO0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkQ3R2dCO0VDOEdoQiwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQUY7QUFHQTtFQUNFLDZCQUFBO0FBQUY7QUFHQTs7RUFBQSIsImZpbGUiOiJldmVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuXG4ubGFiZWwtdG9wIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBjb2xvcjogJHdoaXRlO1xufVxuLm5vdGUtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ubnVtYmVyLXRvcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zcGFuMSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwYW4yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA5NXB4O1xuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC8qIG9yIDE0MyUgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xufVxuXG4uc3BhbjMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDI1MCUgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuXG4gIGNvbG9yOiAkdGltZS1jb2xvcjtcbn1cblxuLnNwYW40IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4udmwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBib3JkZXItbGVmdDogMC4xcHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogMzhweDtcblxuICAuaG91cnR4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG59XG5cbi5hY2tkYXRhIHtcbiAgZm9udC1zaXplOiAkc2l6ZS0xMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG59XG5cbi8qLmluc2lkZS1kaXYge1xuICBoZWlnaHQ6IDM1MHB4O1xufSovXG5cbi5sYXN0LXVwZGF0ZWQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5idG4tYWRkLWV2ZW50IHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAvL2JvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIC8vYm9yZGVyLXNwYWNpbmc6IDAgLjdlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAvL3BhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4udGJvZHktcm93IHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnRoZWFkLXJvdyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRoZWFkIHtcbiAgLy9ib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50Ym9keS1yb3ctdXBwZXIge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uZWRpdGJ0biB7XG4gIHdpZHRoOiAyN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAkYmctYnV0dG9uLWNvbG9yO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1idXR0b247XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5lZGl0LWJveCB7XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAkYm9yZGVyLXNlYXJjaDtcbiAgY29sb3I6ICRzZWxlY3QtbGFiZWwtY29sb3I7XG59XG5cbi5ldmVudC1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8vd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRib2R5LXJvdy1sb3dlciB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDQsIDYwLCAxMDksIDAuNCk7XG59XG5cbnRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICR0YWItYmctY29sb3IgICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xufVxuXG4udGhlYWQtZXZlbnQtbnVtYmVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcblxuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uYnRuLXRhYmxlLWhlYWRlciB7XG4gIHdpZHRoOiAxNjVweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAvKiBsZWZ0OiAxMDc2cHg7ICovXG4gIC8qIHRvcDogMTA5cHg7ICovXG4gIGJhY2tncm91bmQ6ICRiZy1idXR0b24tY29sb3I7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYigwIDAgMCAvIDI1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cblxuLmJ0bi1jbGFzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5idG4tY2xhc3MxIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZXZlbnQtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qdGhlYWQgdGgge1xuIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59Ki9cblxuXG4iXX0= */"] });


/***/ }),

/***/ 91180:
/*!**************************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/notification-list/notification-list.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListComponent": function() { return /* binding */ NotificationListComponent; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/helpers */ 15585);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert-configuration.service */ 26430);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);


















function NotificationListComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r0.patientData == null ? null : ctx_r0.patientData.firstName) + " ", "");
} }
function NotificationListComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.patientData == null ? null : ctx_r1.patientData.lastName);
} }
function NotificationListComponent_span_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function NotificationListComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NotificationListComponent_span_15_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.patientData.pGroup == null ? null : ctx_r2.patientData.pGroup.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.patientData == null ? null : ctx_r2.patientData.pGroup) && (ctx_r2.patientData == null ? null : ctx_r2.patientData.cGroup));
} }
function NotificationListComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.patientData.cGroup == null ? null : ctx_r3.patientData.cGroup.name, " ");
} }
function NotificationListComponent_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Last updated ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r4.lastUpdated + "+0000", "MMM dd, yyyy / " + ctx_r4.timeFmt, ctx_r4.timeZone), " ");
} }
function NotificationListComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { background: a0 }; };
const _c1 = function (a0) { return { color: a0 }; };
function NotificationListComponent_div_35_tbody_25_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function NotificationListComponent_div_35_tbody_25_tr_1_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const alert_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r14.checkAll(alert_r10.key, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationListComponent_div_35_tbody_25_tr_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const alert_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.acknowledgeAll(alert_r10.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, alert_r10.key === "HR" ? "rgba(116, 255, 172, 0.4)" : "rgba(60, 209, 255, 0.2)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, alert_r10.key === "HR" ? "#4FFF96" : "#32CFFF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", alert_r10.selected.length !== 0 && alert_r10.selected.length === alert_r10.unAck)("indeterminate", alert_r10.selected.length !== 0 && alert_r10.selected.length < alert_r10.unAck)("disabled", !(alert_r10 == null ? null : alert_r10.unAck));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](alert_r10.alert);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("( ", alert_r10.selected.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, "alert_config_module.selected"), " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !(alert_r10 == null ? null : alert_r10.selected == null ? null : alert_r10.selected.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 12, "alert_config_module.acknowledge_all"), " ");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r22.getAlertType(rowItem_r20.alertKey, rowItem_r20.alertType, rowItem_r20.setting[1], rowItem_r20.setting[2]));
} }
function NotificationListComponent_div_35_tbody_25_tr_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r23.postures[rowItem_r20.alertVal], " ");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "alert_config_module.active"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](7, 5, (rowItem_r20 == null ? null : rowItem_r20.alertTimeFrom) / 1000000, "MMM dd, yyyy " + ctx_r24.timeFmt, ctx_r24.timeZone), " to");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 9, "alert_config_module.now"), " ");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r25.getRelativeTime((rowItem_r20 == null ? null : rowItem_r20.alertTime) / 1000000000), " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](5, 3, (rowItem_r20 == null ? null : rowItem_r20.alertTimeFrom) / 1000000, "MMM dd, " + ctx_r25.timeFmt, ctx_r25.timeZone), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](6, 7, (rowItem_r20 == null ? null : rowItem_r20.alertTime) / 1000000, "MMM dd, " + ctx_r25.timeFmt, ctx_r25.timeZone), "");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_div_10__svg_circle_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "circle", 73);
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("stroke", ctx_r37.priorityHexCode[rowItem_r20 == null ? null : rowItem_r20.setting[0]]);
} }
function NotificationListComponent_div_35_tbody_25_tr_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "circle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NotificationListComponent_div_35_tbody_25_tr_2_div_10__svg_circle_3_Template, 1, 1, "circle", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("fill", ctx_r26.priorityHexCode[rowItem_r20 == null ? null : rowItem_r20.setting[0]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.setting[0].toUpperCase()) !== "LOW");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowItem_r20 == null ? null : rowItem_r20.setting[0]);
} }
function NotificationListComponent_div_35_tbody_25_tr_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, (rowItem_r20 == null ? null : rowItem_r20.acknowledgedOn) * 1000, "MMM dd, " + ctx_r28.timeFmt, ctx_r28.timeZone || "-"), "");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("by ", rowItem_r20.acknowledgedBy, "");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function NotificationListComponent_div_35_tbody_25_tr_2_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationListComponent_div_35_tbody_25_tr_2_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const rowItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r43.acknwoledge(rowItem_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "alert_config_module.alertfreq_acknowledge"), " ");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "alert_config_module.acknowledge"), " ");
} }
function NotificationListComponent_div_35_tbody_25_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-checkbox", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function NotificationListComponent_div_35_tbody_25_tr_2_Template_mat_checkbox_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const rowItem_r20 = restoredCtx.$implicit; return rowItem_r20.checked = $event; })("change", function NotificationListComponent_div_35_tbody_25_tr_2_Template_mat_checkbox_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const rowItem_r20 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r48.onCheckboxChange(rowItem_r20.alertKey, $event, rowItem_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NotificationListComponent_div_35_tbody_25_tr_2_div_3_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, NotificationListComponent_div_35_tbody_25_tr_2_div_4_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NotificationListComponent_div_35_tbody_25_tr_2_span_7_Template, 11, 11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NotificationListComponent_div_35_tbody_25_tr_2_span_8_Template, 7, 11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, NotificationListComponent_div_35_tbody_25_tr_2_div_10_Template, 4, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, NotificationListComponent_div_35_tbody_25_tr_2_span_11_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NotificationListComponent_div_35_tbody_25_tr_2_span_13_Template, 3, 5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, NotificationListComponent_div_35_tbody_25_tr_2_span_15_Template, 2, 1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NotificationListComponent_div_35_tbody_25_tr_2_span_16_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, NotificationListComponent_div_35_tbody_25_tr_2_button_19_Template, 3, 3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, NotificationListComponent_div_35_tbody_25_tr_2_button_20_Template, 3, 4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowItem_r20 = ctx.$implicit;
    const alert_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", rowItem_r20.ack === true)("ngModel", rowItem_r20.checked)("checked", rowItem_r20.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.setting == null ? null : rowItem_r20.setting.length) && alert_r10.key !== "POSTURE_ALERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alert_r10.key === "POSTURE_ALERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.active) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.active) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowItem_r20 == null ? null : rowItem_r20.setting == null ? null : rowItem_r20.setting.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowItem_r20 == null ? null : rowItem_r20.setting == null ? null : rowItem_r20.setting.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.ack) && (rowItem_r20 == null ? null : rowItem_r20.acknowledgedOn));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.ack) && (rowItem_r20 == null ? null : rowItem_r20.acknowledgedBy));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(rowItem_r20 == null ? null : rowItem_r20.ack) || !(rowItem_r20 == null ? null : rowItem_r20.acknowledgedOn));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.ack) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowItem_r20 == null ? null : rowItem_r20.ack) === true);
} }
function NotificationListComponent_div_35_tbody_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NotificationListComponent_div_35_tbody_25_tr_1_Template, 15, 18, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NotificationListComponent_div_35_tbody_25_tr_2_Template, 21, 14, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alert_r10 == null ? null : alert_r10.items == null ? null : alert_r10.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", alert_r10.items);
} }
function NotificationListComponent_div_35_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "alert_config_module.messages.no_data"));
} }
function NotificationListComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationListComponent_div_35_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r50.sort("alertTime", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, NotificationListComponent_div_35_tbody_25_Template, 3, 2, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, NotificationListComponent_div_35_div_26_Template, 4, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationListComponent_div_35_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r52.downloadLog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, "alert_config_module.alerts"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r6.sortBy === "alertTime" ? "" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 12, "alert_config_module.time_duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 14, "alert_config_module.priority"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 16, "alert_config_module.acknowledged_by"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 18, "alert_config_module.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r6.sortBy === "status" ? "" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.alertHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.totalAlerts === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 20, "alert_config_module.download_log"), " ");
} }
class NotificationListComponent {
    constructor(alertService, store$, userPreference, translate, snackbar, dialog) {
        this.alertService = alertService;
        this.store$ = store$;
        this.userPreference = userPreference;
        this.translate = translate;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.priorityHexCode = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.priorityColorCode;
        this.tab = 'alerts';
        this.alertHistory = [];
        this.timeFmt = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.customization.timeFormat;
        this.loader = true;
        this.current = 0;
        this.unAcknowledged = 0;
        this.allActiveAlerts = [];
        this.totalAlerts = 0;
        this.sortBy = 'alertTime';
        this.sortDirection = 'desc';
        this.userPreferenceUnit = "SI";
        this.autorefresh = false;
    }
    ngOnInit() {
        this.postures = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.postures;
        this.patientId = this.patientData.patientId;
        this.timeZone = this.userPreference.getUserTimeZone();
        this.userPreferenceUnit = this.userPreference.getUserUnitSystem();
        this.alerts = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.AlertHistoryItems;
        this.getAlerts();
        this.reloadInterval = setInterval(() => {
            this.getAlerts();
        }, 30000);
        this.alertHistory$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreSelectors.getAlertHistory);
        this.alertHistory$.subscribe(res => {
            console.log(res);
            this.lastUpdated = new Date().toUTCString();
            this.current = 0;
            this.totalAlerts = 0;
            this.unAcknowledged = 0;
            this.allActiveAlerts = [];
            this.alertHistory = [];
            let alertHistory = res.topAlerts;
            this.alerts.forEach((element) => {
                var _a;
                this.alertHistory.push({
                    key: element.key,
                    alert: element.alerts,
                    items: (res === null || res === void 0 ? void 0 : res.topAlerts) ? ((_a = alertHistory === null || alertHistory === void 0 ? void 0 : alertHistory.find(alertType => alertType.alertKey === element.key)) === null || _a === void 0 ? void 0 : _a.topN) || [] : [],
                    selected: [],
                    activeSelected: false,
                    unAck: 0
                });
            });
            this.alertHistory.forEach(alert => {
                var _a;
                alert.items = this.alertService.sortAlerts(alert.items);
                (_a = alert === null || alert === void 0 ? void 0 : alert.items) === null || _a === void 0 ? void 0 : _a.forEach(ele => {
                    this.totalAlerts++;
                    ele = Object.assign(Object.assign({}, ele), { checked: false });
                    if (ele.active) {
                        this.current++;
                    }
                    if (!ele.ack) {
                        this.unAcknowledged++;
                        alert.unAck++;
                    }
                    if (!ele.ack) {
                        this.allActiveAlerts.push(ele);
                    }
                });
            });
            this.count = {
                current: this.current,
                unAcknowledged: this.unAcknowledged
            };
        });
    }
    getAlerts() {
        let param = {
            patientId: this.patientId
        };
        this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreActions.LoadAlertHistoryRequestAction({ params: param }));
        this.loaderSubscription = this.store$
            .select(_store__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationStoreSelectors.getAlertHistoryLoader)
            .subscribe((loaded) => {
            if (loaded) {
                this.loader = false;
            }
        });
    }
    getRelativeTime(timestamp) {
        let date = new Date();
        const currentTimestamp = (date.getTime()) / 1000;
        const difference = currentTimestamp - timestamp;
        let output = ``;
        if (difference > 0 && difference < 60) {
            // Less than a minute has passed:
            output = `${Math.round(difference)} secs ago`;
        }
        else if (difference < 3600) {
            // Less than an hour has passed:
            output = `${Math.floor(difference / 60)} mins ago`;
        }
        else if (difference < 86400) {
            // Less than a day has passed:
            output = `${Math.floor(difference / 3600)} hrs ago`;
        }
        else if (difference < 2620800) {
            // Less than a month has passed:
            let relativeTime = Math.floor(difference / 86400);
            if (relativeTime === 1) {
                output = `${Math.floor(difference / 86400)} day ago`;
            }
            else {
                output = `${Math.floor(difference / 86400)} days ago`;
            }
        }
        return output;
    }
    onCheckboxChange(key, event, alertRow) {
        this.alertHistory.forEach(alert => {
            if (alert.key === key) {
                if (event.checked) {
                    if (alertRow.active) {
                        alert.activeSelected = true;
                    }
                    alert.selected = [...alert.selected, alertRow];
                }
                else {
                    if (alertRow.active) {
                        alert.activeSelected = false;
                    }
                    let i = alert.selected.indexOf(alertRow);
                    alert.selected.splice(i, 1);
                }
            }
        });
    }
    checkAll(key, event) {
        this.alertHistory.forEach(alert => {
            if (alert.key === key) {
                alert.selected = [];
                alert.items.forEach(item => {
                    if (!item.ack) {
                        item.checked = event.checked;
                        if (event.checked) {
                            if (item.active) {
                                alert.activeSelected = true;
                            }
                            alert.selected = [...alert.selected, item];
                        }
                        else {
                            alert.selected = [];
                            alert.activeSelected = false;
                        }
                    }
                });
            }
        });
    }
    acknowledgeAll(key) {
        this.alertHistory.forEach(alert => {
            if (alert.key === key) {
                let body = {
                    "alertAckInfo": alert.selected,
                    "forActive": alert.activeSelected
                };
                this.alertService.acknowledgeAlert(body)
                    .subscribe((res) => {
                    if (res.status === 'OK') {
                        this.loader = true;
                        this.getAlerts();
                        this.snackbar.openCustomSnackBar("alert_config_module.messages." + res.message, 'bottom', 'center', true);
                    }
                });
            }
        });
    }
    acknwoledge(alert) {
        let body = {
            "alertAckInfo": [alert],
            "forActive": alert.active
        };
        this.alertService.acknowledgeAlert(body)
            .subscribe((res) => {
            console.log(res);
            if (res.status === 'OK') {
                this.loader = true;
                this.getAlerts();
                this.snackbar.openCustomSnackBar("alert_config_module.messages." + res.message, 'bottom', 'center', true);
            }
        });
    }
    getAlertType(alertKey, type, highThr, lowThr) {
        let alertType = '';
        let alertValue = '';
        if (alertKey === 'SKINTEMP' || alertKey === 'BODYTEMP') {
            highThr = (highThr / 100) / 10;
            lowThr = (lowThr / 100) / 10;
            if (this.userPreferenceUnit === 'IS') {
                highThr = this.userPreference.convertCtoF(highThr);
                lowThr = this.userPreference.convertCtoF(lowThr);
            }
        }
        if (/low/i.test(type)) {
            alertType = "below";
            alertValue = lowThr;
        }
        else if (/high/i.test(type)) {
            alertType = "above";
            alertValue = highThr;
        }
        this.translate.get('alert_config_module.' + alertType).subscribe((tran) => {
            alertType = tran + " " + alertValue;
        });
        return alertType;
    }
    acknowledgeAllType() {
        let body = {
            "alertAckInfo": this.allActiveAlerts,
            "forActive": true
        };
        this.alertService.acknowledgeAlert(body)
            .subscribe((res) => {
            console.log(res);
            if (res.status === 'OK') {
                this.loader = true;
                this.getAlerts();
                this.snackbar.openCustomSnackBar("alert_config_module.messages." + res.message, 'bottom', 'center', true);
            }
        });
    }
    downloadLog() {
        this.alertService.downloadAlertLog(this.patientId).subscribe(data => {
            var blobUrl = URL.createObjectURL(data);
            var link = document.createElement("a"); // Or maybe get it from the current document
            link.href = blobUrl;
            // link.innerHTML = "Download Log";
            link.download = "AlertLog-" + this.patientId + ".pdf";
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    }
    anyActive() {
        return this.allActiveAlerts.length > 0;
    }
    sort(active, dir) {
        this.sortBy = active;
        this.sortDirection = dir;
        this.getAlerts();
    }
    openConfirmDialog() {
        const SaveChanges = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
            maxWidth: "95vw",
            maxHeight: "95vh",
            data: {
                body: {
                    title: "alert_config_module.messages.acknowledge_alerts",
                    text: "alert_config_module.messages.confirm_acknowledge",
                },
            },
            disableClose: true,
        });
        SaveChanges.afterClosed().subscribe((data) => {
            if (data) {
                this.acknowledgeAllType();
            }
        });
    }
    ngOnDestroy() {
        clearInterval(this.reloadInterval);
    }
}
NotificationListComponent.ɵfac = function NotificationListComponent_Factory(t) { return new (t || NotificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_4__.AlertConfigurationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_5__.UserPreferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
NotificationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NotificationListComponent, selectors: [["app-notification-list"]], inputs: { patientData: "patientData" }, decls: 36, vars: 18, consts: [[1, "container-fluid", "p-3"], [1, "row"], [1, "col-md-8", "col-lg-8", "col-xl-7"], [1, "d-flex", "flex-wrap", "align-items-center", "patient-details"], [1, "patient-id", "px-2"], ["src", "assets/icons/biosensor.svg", "alt", "biosensor", "width", "28", "height", "31", 1, "header-tab-icon", "me-2"], [1, "d-block", "pid"], [1, "px-2", "me-auto", "w-max-20"], [1, "d-block", "pb-2", "text-truncate"], ["class", "patient-name", 4, "ngIf"], ["class", "small-tag remote-tag", 4, "ngIf"], ["class", "small-tag sepsis-tag", 4, "ngIf"], [1, "justify-content-end", "py-1"], [1, "mx-2"], [1, "alert-count"], [1, "mx-2", "ms-3"], [1, "text-center", "text-md-end", "col-md-4", "col-lg-4", "col-xl-5"], ["class", "mx-2 py-1 time-stamp", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "mx-2", "py-1", "text-uppercase", "alert-acknowledged-btn", 3, "disabled", "click"], ["class", "loading-indicator", 4, "ngIf"], [1, "container-fluid"], ["class", "inside-div head-border comman-table-users bg-thead-color", 4, "ngIf"], [1, "patient-name"], [1, "small-tag", "remote-tag"], [4, "ngIf"], [1, "small-tag", "sepsis-tag"], [1, "mx-2", "py-1", "time-stamp"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "inside-div", "head-border", "comman-table-users", "bg-thead-color"], [1, "table-responsive-sm", "alert-scroll-assist"], ["aria-label", "Table", 1, "mat-table"], [1, "text-center"], [2, "display", "contents", 3, "click"], [3, "ngClass"], [1, "text-start"], [2, "text-align", "initial !important"], ["scope", "", 1, "d-flex", "justify-content-center"], [2, "display", "contents"], ["src", "../../assets/icons/sort-icon.svg", "alt", "sort-icon", "width", "24", "height", "20", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "text-center my-3", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "my-2", "text-uppercase", 3, "click"], ["class", "tbody-row-head py-1", 3, "ngStyle", 4, "ngIf"], ["class", "tbody-row-inner", 4, "ngFor", "ngForOf"], [1, "tbody-row-head", "py-1", 3, "ngStyle"], [1, "tbody-head-text", 3, "ngStyle"], [1, "mx-2", 3, "checked", "indeterminate", "disabled", "change"], [1, "mx-2", "text-uppercase"], [2, "font-size", "12px"], [1, "d-flex", "justify-content-center", "btn-class"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "text-uppercase", 3, "disabled", "click"], [1, "tbody-row-inner"], [1, "mx-4", 3, "disabled", "ngModel", "checked", "ngModelChange", "change"], ["class", "alert-level", 4, "ngIf"], ["class", "px-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-start", "time-interval-text"], [1, "priority-text"], ["style", "display: contents", 4, "ngIf"], ["class", "mx-3 mt-1", 4, "ngIf"], ["class", "px-2", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "disabled", 4, "ngIf"], [1, "alert-level"], [1, "px-3"], ["type", "button", "mat-flat-button", "", "color", "accent", 1, "text-uppercase"], [1, "ms-3", "time-duration"], [1, "fw-bold", "hourtxt", "text-uppercase"], [1, "time-duration"], [1, "fw-bold", "hourtxt"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "16", "cy", "16", "r", "8"], ["cx", "16", "cy", "16", "r", "12", "stroke-width", "2", "stroke-dasharray", "4 4", 4, "ngIf"], ["cx", "16", "cy", "16", "r", "12", "stroke-width", "2", "stroke-dasharray", "4 4"], [1, "mx-3", "mt-1"], [1, "px-2"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-flat-button", "", "type", "button", "color", "primary", 3, "disabled"], [1, "text-center", "my-3"]], template: function NotificationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NotificationListComponent_span_13_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, NotificationListComponent_span_14_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, NotificationListComponent_span_15_Template, 3, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NotificationListComponent_span_16_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Unacknowledged");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, NotificationListComponent_label_29_Template, 3, 5, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationListComponent_Template_button_click_30_listener() { return ctx.openConfirmDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, NotificationListComponent_div_33_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, NotificationListComponent_div_35_Template, 32, 22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.patientData == null ? null : ctx.patientData.patchId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 14, "dashboard-module.pid"), " ", ctx.patientData == null ? null : ctx.patientData.patientId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.pGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.cGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.count.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.count.unAcknowledged);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.lastUpdated);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.anyActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 16, "alert_config_module.acknowledge_all"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_17__.NativeElementInjectorDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".span1[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  position: fixed;\n  color: white;\n}\n.span2[_ngcontent-%COMP%] {\n  position: fixed;\n  color: white;\n  margin-left: 95px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  \n  letter-spacing: 0.25px;\n}\n.span3[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 20px;\n  \n  letter-spacing: 0.25px;\n  color: #67a5d2;\n}\n.span4[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 20px;\n}\n.vl[_ngcontent-%COMP%] {\n  position: fixed;\n  margin-left: 80px;\n  border-left: 0.1px solid white;\n  height: 38px;\n}\n\n.last-updated[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  letter-spacing: 0.25px;\n  color: #fff;\n  opacity: 0.8;\n}\n.label-top[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 14px;\n  line-height: 20px;\n  \n  text-align: center;\n  color: #fff;\n}\n.number-top[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 30px;\n  color: #fff;\n}\n.hourtxt[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold !important;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: capitalize;\n}\n.btn-class[_ngcontent-%COMP%] {\n  text-align: right !important;\n  padding-right: 32px;\n}\n.btn-table-row-header[_ngcontent-%COMP%] {\n  width: 173px;\n  height: 32px;\n  padding: 8px 10px;\n  \n  \n  background: #00549f;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  border: none;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n}\n.btn-table-row-header1[_ngcontent-%COMP%] {\n  width: 134px !important;\n  height: 40px;\n  padding: 8px 10px;\n  \n  \n  background: #00549f;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n}\n.alert-level[_ngcontent-%COMP%] {\n  width: auto !important;\n  background: #42709a;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.16);\n  border-radius: 0.25rem;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 16px;\n  color: #fff;\n  padding: 7px;\n  margin-left: 10px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n}\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n.time-interval-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 16px;\n  \n  color: #fff;\n}\n.active-inactive[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #f4f76f;\n  border: 1px solid #fcff5e;\n  box-sizing: border-box;\n  border-radius: 2px;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 10px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: #333333;\n  display: inline-grid;\n  margin-left: 14px;\n  \n  \n}\n.time-duration[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.priority-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  \n  letter-spacing: 0.05em;\n  color: #fff;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.patient-id[_ngcontent-%COMP%] {\n  border-right: 1px solid #fff;\n}\n.patient-details[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.time-group[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.alert-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.pid[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.patient-id[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n.time-stamp[_ngcontent-%COMP%] {\n  font-weight: 400;\n  opacity: 0.8;\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .time-stamp[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.small-tag[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1fc0f3;\n}\n@media only screen and (max-width: 1200px) {\n  .small-tag[_ngcontent-%COMP%] {\n    display: block;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n.w-max-20[_ngcontent-%COMP%] {\n  max-width: 20rem;\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .w-max-20[_ngcontent-%COMP%] {\n    max-width: 14rem;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .w-max-20[_ngcontent-%COMP%] {\n    max-width: 8rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .patient-details[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0;\n  }\n  .patient-details[_ngcontent-%COMP%]   .me-auto[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n  .patient-details[_ngcontent-%COMP%]   .w-max-20[_ngcontent-%COMP%] {\n    max-width: 60%;\n  }\n}\n.alert-acknowledged-btn[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.comman-table-users[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.tbody-row-head[_ngcontent-%COMP%] {\n  height: 2.75rem;\n}\n.comman-table-users[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.tbody-row-head[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsIm5vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHlCQUFBO0FBc0VBLG9CQUFBO0FBd0NBLFdBQUE7QUFNQSxVQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBUUEsa0JBQUE7QUFJQSxjQUFBO0FBZUEsZUFBQTtBQUlBLGVBQUE7QUEwQkEsa0JBQUE7QUFRQSxpQkFBQTtBQVFBLDZCQUFBO0FBUUEsK0JBQUE7QUNuTkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBYUY7QUFWQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0FBV0Y7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLHNCQUFBO0VBRUEsY0RXVztBQ0ZiO0FBTkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBU0Y7QUFOQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQVNGO0FBTkE7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0QxRE07RUMyRE4sWUFBQTtBQVNGO0FBTkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7RUFFQSxXRHRFTTtBQzZFUjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdEOUVNO0FDcUZSO0FBSkE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFPRjtBQUpBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQU9GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRG5CZ0I7RUNvQmhCLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1GO0FBSEE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkRwQ2dCO0VDcUNoQiwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLRjtBQURBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDRGNrQjtFQ2JsQixzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRDNJTTtFQzRJTixZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUdGO0FBQUE7RUFDRSxjQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdEL0pNO0FDa0tSO0FBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNEdElXO0VDdUlYLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdENUxNO0FDOExSO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUVBLFdEdk1NO0FDd01SO0FBRUE7O0VBQUE7QUFHQTtFQUNFLFlBQUE7QUFDRjtBQUVBO0VBQ0UsNEJBQUE7QUFDRjtBQUVBO0VBQ0UsaUJEcE1RO0FDcU1WO0FBRUE7RUFDRSxlRDVNUTtBQzZNVjtBQUVBO0VBQ0UsZUQ1TVE7QUM2TVY7QUFFQSw2QkFBQTtBQUNBO0VBQ0UsZURyTlE7QUNzTlY7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUhGO0lBSUksZURyT007RUN3T1I7QUFDRjtBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCRHRIZ0I7QUN5SGxCO0FBQUE7RUFDRSxlRHJQZTtFQ3NQZixjRHpMZ0I7QUM0TGxCO0FBRkU7RUFIRjtJQUlJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGO0FBREEsNkJBQUE7QUFDQTtFQUNFLGdCQUFBO0FBSUY7QUFIRTtFQUZGO0lBR0ksZ0JBQUE7RUFNRjtBQUNGO0FBTEU7RUFMRjtJQU1JLGVBQUE7RUFRRjtBQUNGO0FBSEE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsVUFBQTtFQU1GO0VBSkU7SUFDRSxvQkFBQTtFQU1KO0VBSkU7SUFDRSxjQUFBO0VBTUo7QUFDRjtBQUFBO0VBQ0UsbUJBQUE7QUFFRjtBQUlNO0VBQ0UsZUFBQTtBQURSO0FBRVE7RUFDRSxrQkFBQTtBQUFWO0FBU0E7OztFQUFBIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuXG4uc3BhbjEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGFuMiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogOTVweDtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAvKiBvciAxNDMlICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbn1cblxuLnNwYW4zIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyNTAlICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcblxuICBjb2xvcjogJHRpbWUtY29sb3I7XG59XG5cbi5zcGFuNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnZsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgYm9yZGVyLWxlZnQ6IDAuMXB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDM4cHg7XG59XG5cbi8qLmluc2lkZS1kaXYge1xuICBoZWlnaHQ6IDM1MHB4O1xufSovXG4ubGFzdC11cGRhdGVkIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubGFiZWwtdG9wIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBjb2xvcjogJHdoaXRlO1xufVxuXG4ubnVtYmVyLXRvcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5ob3VydHh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJ0bi1jbGFzcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG59XG5cbi5idG4tdGFibGUtcm93LWhlYWRlciB7XG4gIHdpZHRoOiAxNzNweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgLyogbGVmdDogMTA3NnB4OyAqL1xuICAvKiB0b3A6IDEwOXB4OyAqL1xuICBiYWNrZ3JvdW5kOiAkYmctYnV0dG9uLWNvbG9yO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2IoMCAwIDAgLyAyNSUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5idG4tdGFibGUtcm93LWhlYWRlcjEge1xuICB3aWR0aDogMTM0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgLyogbGVmdDogMTA3NnB4OyAqL1xuICAvKiB0b3A6IDEwOXB4OyAqL1xuICBiYWNrZ3JvdW5kOiAkYmctYnV0dG9uLWNvbG9yO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2IoMCAwIDAgLyAyNSUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi5hbGVydC1sZXZlbCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0MjcwOWE7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWJ1dHRvbjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEycHg7XG59XG5cbi50aW1lLWludGVydmFsLXRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgODklICovXG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5hY3RpdmUtaW5hY3RpdmUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmNGY3NmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2ZmNWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogJGdyYXktY29sb3I7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgLyogZmxleC1ncm93OiAwOyAqL1xuICAvKiBtYXJnaW46IDBweCAxMHB4OyovXG59XG5cbi50aW1lLWR1cmF0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4ucHJpb3JpdHktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDExNCUgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcblxuICBjb2xvcjogJHdoaXRlO1xufVxuXG4vKnRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn0qL1xuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucGF0aWVudC1pZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR3aGl0ZTtcbn1cblxuLnBhdGllbnQtZGV0YWlscyB7XG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZS0xODtcbn1cblxuLnRpbWUtZ3JvdXAge1xuICBmb250LXNpemU6ICRzaXplLTEwO1xufVxuXG4uYWxlcnQtY291bnQge1xuICBmb250LXNpemU6ICRzaXplLTE4O1xufVxuXG4vKioqIGFsZXJ0IE1vZGFsIERpYWxvZyAqKioqKi9cbi5waWQge1xuICBmb250LXNpemU6ICRzaXplLTEwO1xufVxuXG4ucGF0aWVudC1pZCBzdHJvbmcge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLXN0YW1wIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC44O1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIGZvbnQtc2l6ZTogJHNpemUtMTI7XG4gIH1cbn1cblxuLnBhdGllbnQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC03MDA7XG59XG5cbi5zbWFsbC10YWcge1xuICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcbiAgY29sb3I6ICRibHVlLWNvbG9yLWdyb3VwO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB9XG59XG5cbi8qKiogYWxlcnQgTW9kYWwgRGlhbG9nICoqKioqL1xuLnctbWF4LTIwIHtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWF4LXdpZHRoOiAxNHJlbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIG1heC13aWR0aDogOHJlbTtcbiAgfVxuXG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucGF0aWVudC1kZXRhaWxzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLm1lLWF1dG8ge1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC53LW1heC0yMCB7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcblxuXG4gICAgfVxuICB9XG59XG5cbi5hbGVydC1hY2tub3dsZWRnZWQtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmNvbW1hbi10YWJsZS11c2VycyB7XG4gIHRhYmxlIHtcbiAgICB0Ym9keSB7XG4gICAgICB0ci50Ym9keS1yb3ctaGVhZCB7XG4gICAgICAgIGhlaWdodDogMi43NXJlbTtcbiAgICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG59XG5cbi8qLmFsZXJ0LXNjcm9sbC1hc3Npc3Qge1xuICBtYXgtaGVpZ2h0OiAyMnJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0qLyJdfQ== */"] });


/***/ }),

/***/ 66557:
/*!******************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/notifications/notifications.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": function() { return /* binding */ NotificationsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification-list/notification-list.component */ 91180);
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-list/event-list.component */ 16447);
/* harmony import */ var _parameter_alerts_parameter_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameter-alerts/parameter-alerts.component */ 60987);
/* harmony import */ var _arrhythmia_alerts_arrhythmia_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../arrhythmia-alerts/arrhythmia-alerts.component */ 37821);
/* harmony import */ var _technical_alerts_technical_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../technical-alerts/technical-alerts.component */ 19447);
/* harmony import */ var _destination_setting_destination_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../destination-setting/destination-setting.component */ 39503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function NotificationsComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-notification-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("patientData", ctx_r1.patientData);
} }
function NotificationsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-event-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("patientData", ctx_r2.patientData);
} }
function NotificationsComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-parameter-alerts", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("patientData", ctx_r3.patientData);
} }
function NotificationsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-arrhythmia-alerts", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("patientData", ctx_r4.patientData);
} }
function NotificationsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-technical-alerts", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("patientData", ctx_r5.patientData);
} }
function NotificationsComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-destination-setting", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("patientData", ctx_r6.patientData);
} }
class NotificationsComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedTab = "notificationsList";
        this.openEventTab = true;
    }
    ngOnInit() {
        var _a;
        this.patientData = this.data.patientData;
        this.openEventTab = this.data.add_event;
        this.selectedTab = (_a = this.data) === null || _a === void 0 ? void 0 : _a.selectedTab;
    }
    closeDialog() {
        this.dialogRef.close();
    }
    selectTab(value) {
        this.selectedTab = value;
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 65, vars: 30, consts: [["id", "patientAlertSettings"], [1, "dialog-header", "patientalert-dialog-header"], [1, "mx-3", "d-lg-flex", "d-md-flex", "d-sm-none", "d-none", "flex-wrap", "btn-group-area"], ["mat-button", "", 3, "ngClass", "click"], ["src", "assets/icons/notification-icon-red.svg", "alt", "notification-icon-red", "width", "24", "height", "24", 1, "header-tab-icon"], [1, "header-tab-icon"], ["src", "assets/icons/biosensor.svg", "alt", "biosensor", "width", "18", "height", "16", 1, "header-tab-icon"], [1, "d-block", "d-lg-none", "d-md-none"], ["mat-icon-button", "", 1, "border", "mb-2", 3, "matMenuTriggerFor"], [1, "justify-content-center"], [1, "mobile-menu", "alert-configuration-menu", "overflow-hidden", "d-block", "d-lg-none"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "menu-tab-icon"], [1, "close-icon", "mt-2", "mt-md-0", "me-2", "me-md-0"], ["aria-hidden", "false", "aria-label", "close icon", 1, "cursor-pointer", 3, "click"], [4, "ngIf"], [3, "patientData"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_3_listener() { return ctx.selectTab("notificationsList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Alerts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_6_listener() { return ctx.selectTab("eventList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Event List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_11_listener() { return ctx.selectTab("parameterAlerts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_16_listener() { return ctx.selectTab("technicalAlerts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_21_listener() { return ctx.selectTab("alertDestination"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-menu", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_32_listener() { return ctx.selectTab("notificationsList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " Alerts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_35_listener() { return ctx.selectTab("eventList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Event List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_40_listener() { return ctx.selectTab("parameterAlerts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_45_listener() { return ctx.selectTab("technicalAlerts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_50_listener() { return ctx.selectTab("alertDestination"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_mat_icon_click_56_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, NotificationsComponent_div_59_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, NotificationsComponent_div_60_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, NotificationsComponent_div_61_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, NotificationsComponent_div_62_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, NotificationsComponent_div_63_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, NotificationsComponent_div_64_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedTab === "notificationsList" ? "select-btn-active select-btn-active-notif" : "select-btn select-btn-notif");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedTab === "eventList" ? "select-btn-active" : "select-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedTab === "parameterAlerts" ? "select-btn-active" : "select-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 18, "alert_config_module.configure_parameter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedTab === "technicalAlerts" ? "select-btn-active" : "select-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 20, "alert_config_module.configure_technical"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedTab === "alertDestination" ? "select-btn-active" : "select-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 22, "alert_config_module.configure_destination"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](44, 24, "alert_config_module.configure_parameter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 26, "alert_config_module.configure_technical"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 28, "alert_config_module.configure_destination"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab === "notificationsList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab === "eventList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab === "parameterAlerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab === "arrhythmiaAlerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab === "technicalAlerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab === "alertDestination");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_0__.NotificationListComponent, _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_1__.EventListComponent, _parameter_alerts_parameter_alerts_component__WEBPACK_IMPORTED_MODULE_2__.ParameterAlertsComponent, _arrhythmia_alerts_arrhythmia_alerts_component__WEBPACK_IMPORTED_MODULE_3__.ArrhythmiaAlertsComponent, _technical_alerts_technical_alerts_component__WEBPACK_IMPORTED_MODULE_4__.TechnicalAlertsComponent, _destination_setting_destination_setting_component__WEBPACK_IMPORTED_MODULE_5__.DestinationSettingComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".dialog-header[_ngcontent-%COMP%] {\n  background: #00549f;\n  min-height: 45px;\n}\n.dialog-header.patientalert-dialog-header[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.mat-typography[_ngcontent-%COMP%] {\n  margin: 10px 20px !important;\n}\n.menu-tab-icon[_ngcontent-%COMP%] {\n  color: #00549f;\n}\ntd[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white !important;\n  background: #00549f;\n  border-radius: 0.25rem;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 16px;\n  align-items: center;\n  letter-spacing: 0.05em;\n  border: none;\n  padding: 5px 10px;\n}\n.select-btn-notif[_ngcontent-%COMP%] {\n  background: rgba(107, 35, 35, 0.7);\n}\n.select-btn[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background: #023f74;\n  border-radius: 8px;\n  margin: 7px 7px 0px 0px;\n  height: 40px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.select-btn.select-btn-notif[_ngcontent-%COMP%] {\n  background: rgba(107, 35, 35, 0.4) !important;\n}\n.select-btn-active[_ngcontent-%COMP%] {\n  background: #043158 !important;\n  padding: 5px 10px;\n  background: #023f74;\n  border-radius: 8px 8px 0px 0px;\n  margin: 7px 7px 0px 0px;\n  height: 55px;\n  font-weight: 600;\n}\n.select-btn-active.select-btn-active-notif[_ngcontent-%COMP%] {\n  background: rgba(107, 35, 35, 0.4) !important;\n}\n.close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  right: 1px;\n  color: #fff;\n  padding: 8px 10px 0px 0px;\n}\n.header-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 1100px) {\n  .select-btn-active[_ngcontent-%COMP%] {\n    border-radius: 8px !important;\n    margin: 7px 7px 7px 0px !important;\n    height: 40px !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1214px) {\n  .btn-group-area[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .btn-group-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 4px 12px;\n  }\n}\n@media (min-width: 768px) and (max-width: 1200px) {\n  .btn-group-area[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 0 -0.2rem !important;\n  }\n  .btn-group-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: calc(150px - 0.5rem);\n    margin: 0 0.2rem 0.4rem !important;\n    display: flex;\n    height: 2.5rem;\n    border-radius: 4px;\n    font-size: 12px;\n  }\n}\n@media (min-width: 768px) and (max-width: 1200px) and (min-width: 768px) and (max-width: 991px) {\n  .btn-group-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: calc(138px - 0.5rem);\n  }\n}\n@media only screen and (max-width: 767px) {\n  #patientAlertSettings[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding-bottom: 1.5rem;\n  }\n  #patientAlertSettings[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.5rem 0 !important;\n  }\n  #patientAlertSettings[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  #patientAlertSettings[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n    padding: 0;\n    right: 0;\n  }\n\n  .btn-group-area[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 0 -0.2rem !important;\n  }\n  .btn-group-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: calc(50% - 0.5rem);\n    margin: 0 0.2rem 0.4rem !important;\n    display: flex;\n    height: 2.5rem;\n    border-radius: 4px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsIm5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ3BOQTtFQUNFLG1CRCtFZ0I7RUM5RWhCLGdCQUFBO0FBY0Y7QUFaRTtFQUNFLDRCQUFBO0FBY0o7QUFWQTtFQUNFLDRCQUFBO0FBYUY7QUFYQTtFQUNFLGNEbUVnQjtBQ3JEbEI7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkR3RGM7RUN2RGQsc0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWNGO0FBWkE7RUFDRSxrQ0FBQTtBQWVGO0FBWkE7RUFDRSxpQkFBQTtFQUNBLG1CRHdCbUI7RUN2Qm5CLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWVGO0FBZEU7RUFDRSw2Q0FBQTtBQWdCSjtBQVpBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRFVtQjtFQ1RuQiw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZUY7QUFkRTtFQUNFLDZDQUFBO0FBZ0JKO0FBWkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0RqRU07RUNrRU4seUJBQUE7QUFlRjtBQWJBO0VBQ0UsaUJBQUE7QUFnQkY7QUFiQTtFQUNFLGFBQUE7QUFnQkY7QUFkQTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxrQ0FBQTtJQUNBLHVCQUFBO0VBaUJGO0FBQ0Y7QUFmQTtFQUNFO0lBQ0UseUJBQUE7RUFpQkY7RUFoQkU7SUFDRSxpQkFBQTtFQWtCSjtBQUNGO0FBYkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSw0QkFBQTtFQWVGO0VBZEU7SUFFRSwyQkFBQTtJQUlBLGtDQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGVEakdJO0VDNkdSO0FBQ0Y7QUFwQk07RUFIRjtJQUlJLDJCQUFBO0VBdUJOO0FBQ0Y7QUFSQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQVVGO0VBVEU7SUFDRSxtQ0FBQTtFQVdKO0VBUkU7SUFDRSx1QkFBQTtFQVVKO0VBUEU7SUFDRSxVQUFBO0lBQ0EsUUFBQTtFQVNKOztFQUxBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLDRCQUFBO0VBUUY7RUFQRTtJQUNFLHlCQUFBO0lBQ0Esa0NBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUQxSUk7RUNtSlI7QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuLmRpYWxvZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAkYmctYnV0dG9uLWNvbG9yO1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuXG4gICYucGF0aWVudGFsZXJ0LWRpYWxvZy1oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1hdC10eXBvZ3JhcGh5IHtcbiAgbWFyZ2luOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbn1cbi5tZW51LXRhYi1pY29uIHtcbiAgY29sb3I6ICRiZy1idXR0b24tY29sb3I7XG59XG50ZCAudGFibGUtcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogJGJnLXByaW1hcnktY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNlbGVjdC1idG4tbm90aWYge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNywgMzUsIDM1LCAwLjcpO1xufVxuXG4uc2VsZWN0LWJ0biB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAkc2VsZWN0LWxhYmVsLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogN3B4IDdweCAwcHggMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICYuc2VsZWN0LWJ0bi1ub3RpZiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDcsIDM1LCAzNSwgMC40KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zZWxlY3QtYnRuLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICR0YWItYmctY29sb3IgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICRzZWxlY3QtbGFiZWwtY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgbWFyZ2luOiA3cHggN3B4IDBweCAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgJi5zZWxlY3QtYnRuLWFjdGl2ZS1ub3RpZiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDcsIDM1LCAzNSwgMC40KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDFweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDEwcHggMHB4IDBweDtcbn1cbi5oZWFkZXItdGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuc2VsZWN0LWJ0bi1hY3RpdmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogN3B4IDdweCA3cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMTRweCkge1xuICAuYnRuLWdyb3VwLWFyZWEge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYnRuLWdyb3VwLWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiAwIC0wLjJyZW0gIWltcG9ydGFudDtcbiAgICBidXR0b24ge1xuICAgICAgLy93aWR0aDogY2FsYygzMy4zMyUgLSAwLjVyZW0pO1xuICAgICAgd2lkdGg6IGNhbGMoMTUwcHggLSAwLjVyZW0pO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICB3aWR0aDogY2FsYygxMzhweCAtIDAuNXJlbSk7XG4gICAgICB9XG4gICAgICBtYXJnaW46IDAgMC4ycmVtIDAuNHJlbSAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAkc2l6ZS0xMjtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI3BhdGllbnRBbGVydFNldHRpbmdzIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgLmRpYWxvZy1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBhdGllbnQtZGV0YWlscyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1ncm91cC1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogMCAtMC4ycmVtICFpbXBvcnRhbnQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDAuNXJlbSk7XG4gICAgICBtYXJnaW46IDAgMC4ycmVtIDAuNHJlbSAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAkc2l6ZS0xMjtcbiAgICB9XG4gIH1cbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ 60987:
/*!************************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/parameter-alerts/parameter-alerts.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterAlertsComponent": function() { return /* binding */ ParameterAlertsComponent; }
/* harmony export */ });
/* harmony import */ var C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 80151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/helpers */ 15585);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/common.service */ 5620);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _services_backendapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/backendapi.service */ 68493);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/alert-configuration.service */ 26430);
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../patient-details/patient-details.component */ 67138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../life-signals/_components/ls-table/ls-table.component */ 16743);
/* harmony import */ var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../life-signals/_directives/ls-widget-name.directive */ 19861);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






























function ParameterAlertsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ParameterAlertsComponent_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ParameterAlertsComponent_div_3_ng_template_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const config_r11 = restoredCtx.$implicit;
      return config_r11.Enabled = $event;
    })("change", function ParameterAlertsComponent_div_3_ng_template_2_Template_mat_slide_toggle_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const config_r11 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r14.toggle(config_r11 == null ? null : config_r11.index);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r11.Enabled)("disabled", !ctx_r3.isEditAccess);
  }
}

function ParameterAlertsComponent_div_3_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("(", config_r15.unit, ")");
  }
}

function ParameterAlertsComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_3_span_1_Template, 2, 1, "span", 19);
  }

  if (rf & 2) {
    const config_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r15.alert, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r15.key !== "POSTURE_ALERT");
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "alert_config_module.or"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("> ", config_r18.HighThr, " ");
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_4_span_0_span_1_span_2_Template, 5, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r18.LowThr, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r18.key !== "SPO2");
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "alert_config_module.or"));
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template_input_keypress_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r28.numericsOnly(config_r18.key, $event);
    })("keydown", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r31.limitChar(config_r18.key, $event);
    })("paste", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
      return ctx_r33.alertService.checkForSpecialCharacters($event);
    })("ngModelChange", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      return config_r18.HighThr = $event;
    })("change", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template_input_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r36.parameterThresholdChanged(config_r18.index, "HighThr", ctx_r36.parameterMinMax[config_r18.key]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r18.HighThr)("min", ctx_r27.parameterMinMax[config_r18.key]["MIN"]["HighThr"])("max", ctx_r27.parameterMinMax[config_r18.key]["MAX"]["HighThr"])("step", config_r18.key === "BODYTEMP" || config_r18.key === "SKINTEMP" ? config_r18.unit === "\u00B0C" ? 0.1 : 0.2 : 1);
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r39.numericsOnly(config_r18.key, $event);
    })("keydown", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r42.limitChar(config_r18.key, $event);
    })("paste", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_paste_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return ctx_r44.alertService.checkForSpecialCharacters($event);
    })("ngModelChange", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return config_r18.LowThr = $event;
    })("change", function ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r47.parameterThresholdChanged(config_r18.index, "LowThr", ctx_r47.parameterMinMax[config_r18.key]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_span_3_Template, 5, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_input_4_Template, 1, 4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r18.LowThr)("min", ctx_r22.parameterMinMax[config_r18.key]["MIN"]["LowThr"])("max", ctx_r22.parameterMinMax[config_r18.key]["MAX"]["LowThr"])("step", config_r18.key === "BODYTEMP" || config_r18.key === "SKINTEMP" ? config_r18.unit === "\u00B0C" ? 0.1 : 0.2 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r18.key !== "SPO2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r18.key !== "SPO2");
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_4_span_0_span_1_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_4_span_0_span_2_Template, 5, 6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r19.editThreshold[config_r18 == null ? null : config_r18.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r19.editThreshold[config_r18 == null ? null : config_r18.index]);
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ParameterAlertsComponent_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ParameterAlertsComponent_div_3_ng_template_4_span_0_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_4_span_1_Template, 2, 0, "span", 21);
  }

  if (rf & 2) {
    const config_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r18.key !== "POSTURE_ALERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r18.key === "POSTURE_ALERT");
  }
}

function ParameterAlertsComponent_div_3_ng_template_5_span_0_span_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_div_3_ng_template_5_span_0_span_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58);
      const config_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r56.showHideEdit(config_r51 == null ? null : config_r51.index, "threshold");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !config_r51.Enabled);
  }
}

function ParameterAlertsComponent_div_3_ng_template_5_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_5_span_0_span_1_button_1_Template, 3, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r53.editThreshold[config_r51 == null ? null : config_r51.index] && ctx_r53.isEditAccess);
  }
}

function ParameterAlertsComponent_div_3_ng_template_5_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_div_3_ng_template_5_span_0_span_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r63);
      const config_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r61.showHideEdit(config_r51 == null ? null : config_r51.index, "threshold");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ParameterAlertsComponent_div_3_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_5_span_0_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_5_span_0_span_2_Template, 4, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r52.editThreshold[config_r51 == null ? null : config_r51.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r52.editThreshold[config_r51 == null ? null : config_r51.index]);
  }
}

function ParameterAlertsComponent_div_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ParameterAlertsComponent_div_3_ng_template_5_span_0_Template, 3, 2, "span", 21);
  }

  if (rf & 2) {
    const config_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r51.key !== "POSTURE_ALERT");
  }
}

function ParameterAlertsComponent_div_3_ng_template_6__svg_circle_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "circle", 36);
  }

  if (rf & 2) {
    const config_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("stroke", ctx_r66.priorityHexCode[config_r65.Priority]);
  }
}

function ParameterAlertsComponent_div_3_ng_template_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](config_r65.Priority);
  }
}

function ParameterAlertsComponent_div_3_ng_template_6_span_6_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const priority_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", priority_r72.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", priority_r72.label, " ");
  }
}

function ParameterAlertsComponent_div_3_ng_template_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ParameterAlertsComponent_div_3_ng_template_6_span_6_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75);
      const config_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      return config_r65.Priority = $event;
    })("selectionChange", function ParameterAlertsComponent_div_3_ng_template_6_span_6_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r76.updated();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_6_span_6_mat_option_2_Template, 2, 2, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r65.Priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r68.alertPriority);
  }
}

function ParameterAlertsComponent_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "circle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_6__svg_circle_3_Template, 1, 1, "circle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ParameterAlertsComponent_div_3_ng_template_6_span_5_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ParameterAlertsComponent_div_3_ng_template_6_span_6_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r65 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("fill", ctx_r7.priorityHexCode[config_r65.Priority]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (config_r65.Priority == null ? null : config_r65.Priority.toUpperCase()) !== "LOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r7.editPrior[config_r65.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.editPrior[config_r65.index]);
  }
}

function ParameterAlertsComponent_div_3_ng_template_7_span_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_div_3_ng_template_7_span_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r84);
      const config_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r82.showHideEdit(config_r78.index, "priority");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !config_r78.Enabled);
  }
}

function ParameterAlertsComponent_div_3_ng_template_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_7_span_2_button_1_Template, 3, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r79.isEditAccess);
  }
}

function ParameterAlertsComponent_div_3_ng_template_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_div_3_ng_template_7_span_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88);
      const config_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r86.showHideEdit(config_r78.index, "priority");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ParameterAlertsComponent_div_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_7_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_7_span_3_Template, 4, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const config_r78 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r8.editPrior[config_r78.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.editPrior[config_r78.index]);
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "alert_config_module.secs"));
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "alert_config_module.hrs"));
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_8_div_0_div_3_span_2_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_8_div_0_div_3_span_3_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r89.CondDelay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r89.key !== "POSTURE_ALERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r89.key === "POSTURE_ALERT");
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_4_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r98.numericsOnly(config_r89.key, $event);
    })("paste", function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_4_Template_input_paste_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return ctx_r101.alertService.checkForSpecialCharacters($event);
    })("change", function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_4_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r102.parameterThresholdChanged(config_r89.index, "CondDelay", ctx_r102.parameterMinMax[config_r89.key]);
    })("ngModelChange", function ParameterAlertsComponent_div_3_ng_template_8_div_0_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return config_r89.CondDelay = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("min", ctx_r93.parameterMinMax[config_r89.key]["MIN"]["CondDelay"])("max", ctx_r93.parameterMinMax[config_r89.key]["MAX"]["CondDelay"])("ngModel", config_r89.CondDelay);
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r111);
      const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r109.showHideEdit(config_r89.index, "delay");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !config_r89.Enabled);
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r115);
      const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r113.showHideEdit(config_r89.index, "delay");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_button_2_Template, 3, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_button_3_Template, 3, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r94.editDelay[config_r89.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r94.editDelay[config_r89.index]);
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_8_div_0_div_3_Template, 4, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ParameterAlertsComponent_div_3_ng_template_8_div_0_div_4_Template, 2, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ParameterAlertsComponent_div_3_ng_template_8_div_0_ng_container_5_Template, 4, 2, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r90.editDelay[config_r89.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r90.editDelay[config_r89.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r90.isEditAccess);
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function ParameterAlertsComponent_div_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ParameterAlertsComponent_div_3_ng_template_8_div_0_Template, 6, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ParameterAlertsComponent_div_3_ng_template_8_div_1_Template, 2, 0, "div", 40);
  }

  if (rf & 2) {
    const config_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r89.key !== "BPSYS" && config_r89.key !== "BPDIA" && config_r89.key !== "BP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", config_r89.key === "BPSYS" || config_r89.key === "BPDIA" || config_r89.key === "BP");
  }
}

function ParameterAlertsComponent_div_3_ng_template_9_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](2, 1, ctx_r119.masterData.modifiedDateTime + "+0000", "MMM dd, yyyy " + ctx_r119.timeFmt, ctx_r119.timeZone), " ");
  }
}

function ParameterAlertsComponent_div_3_ng_template_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("by ", ctx_r120.masterData.modifiedBy, "");
  }
}

function ParameterAlertsComponent_div_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ParameterAlertsComponent_div_3_ng_template_9_span_0_Template, 3, 5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_9_span_2_Template, 2, 1, "span", 21);
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.masterData == null ? null : ctx_r10.masterData.modifiedDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r10.isBlank(ctx_r10.masterData.modifiedBy));
  }
}

function ParameterAlertsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ls-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("configChange", function ParameterAlertsComponent_div_3_Template_ls_table_configChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r122);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r121.config = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_3_ng_template_2_Template, 2, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_ng_template_3_Template, 2, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ParameterAlertsComponent_div_3_ng_template_4_Template, 2, 2, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ParameterAlertsComponent_div_3_ng_template_5_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ParameterAlertsComponent_div_3_ng_template_6_Template, 7, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ParameterAlertsComponent_div_3_ng_template_7_Template, 4, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ParameterAlertsComponent_div_3_ng_template_8_Template, 2, 2, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, ParameterAlertsComponent_div_3_ng_template_9_Template, 3, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r1.config)("columns", ctx_r1.columns)("data", ctx_r1.parameterAlertSettings);
  }
}

function ParameterAlertsComponent_mat_dialog_actions_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_mat_dialog_actions_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r126);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r125.openDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "alert_config_module.reset_to_default"));
  }
}

function ParameterAlertsComponent_mat_dialog_actions_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_mat_dialog_actions_4_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r127.handleAlertSettingsEditCancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ParameterAlertsComponent_mat_dialog_actions_4_ng_template_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r129.handleAlertSettingsSave();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "alert_config_module.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 4, "alert_config_module.save"));
  }
}

function ParameterAlertsComponent_mat_dialog_actions_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-dialog-actions", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_mat_dialog_actions_4_button_2_Template, 6, 3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ParameterAlertsComponent_mat_dialog_actions_4_ng_template_4_Template, 9, 6, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isShowResetButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.showActionButtons);
  }
}

class ParameterAlertsComponent {
  constructor(dialog, commonService, userPreference, snackbar, backendApiService, autheticationService, store$, alertService) {
    this.dialog = dialog;
    this.commonService = commonService;
    this.userPreference = userPreference;
    this.snackbar = snackbar;
    this.backendApiService = backendApiService;
    this.autheticationService = autheticationService;
    this.store$ = store$;
    this.alertService = alertService;
    this.subscriptions = [];
    this.reloadData = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter(true);
    this.loading = false;
    this.priorityHexCode = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.priorityColorCode;
    this.alertPriority = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.alertPriorityOptions;
    this.parameterAlert = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.parameterAlertItems;
    this.parameterAlertSettings = [];
    this.parameterAlertSettingsCopy = [];
    this.masterData = {};
    this.parameterAlertAccess = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles.ALERT_CONFIGURATIONS.PARAMETER_ALERT;
    this.isEditAccess = false;
    this.showActionButtons = false;
    this.isShowResetButton = false;
    this.selectedTab = "parameter";
    this.alertSettings = {};
    this.cfId = "";
    this.alertId = null;
    this.accessRoles = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles;
    this.clinicalFacilityGroupId = null;
    this.GroupId = "";
    this.patientId = "PATALDRT1";
    this.timeFmt = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.customization.timeFormat;
    this.loader = true;
    this.config = {
      id: "alert_config_module",
      rowSelectEnabled: false,
      translate: true,
      translateKey: "alert_config_module"
    };
    this.columns = [{
      id: "enabled",
      label: "",
      sortable: false,
      style: "width: 70px"
    }, {
      id: "alerts",
      sortable: false,
      headerClass: ["align-left"],
      cellClass: ["fw-700"],
      style: "min-width: 200px"
    }, {
      id: "threshold",
      sortable: false,
      headerClass: ["align-center"],
      cellClass: ["text-center"],
      style: "width: 160px"
    }, {
      id: "editThreshold",
      sortable: false,
      headerClass: ["align-left"],
      style: "width: 50px"
    }, {
      id: "priority",
      sortable: false,
      headerClass: ["align-right"],
      style: "width: 134px;",
      cellClass: ["text-end"]
    }, {
      id: "editPriority",
      sortable: false,
      headerClass: ["align-left"],
      style: "width: 50px"
    }, {
      id: "delayTime",
      sortable: false,
      headerClass: ["align-center"],
      style: "width: 180px;",
      cellClass: ["text-end"]
    }, {
      id: "modified",
      sortable: false,
      headerClass: ["align-left"],
      //style: "min-width: 200px",
      cellClass: ["text-start"]
    }];
    this.editThreshold = [false];
    this.editPrior = [false];
    this.editDelay = [false]; // Fetch alert settings - API Call

    this.getSettings = () => {
      this.loading = true;
      let patientId = encodeURIComponent(this.patientId);
      let url = `alert-settings/patient/${this.cfId}/${patientId}`;
      this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreActions.loadAlertConfigurationRequestAction({
        url
      }));
      this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
        this.error = data;
      });
    };
  }

  ngOnInit() {
    this.postures = _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.postures;
    this.roles = this.autheticationService.getRoles();
    this.timeZone = this.userPreference.getUserTimeZone();
    this.userPreferenceUnit = this.userPreference.getUserUnitSystem();

    if (this.userPreferenceUnit === 'IS') {
      this.tempConvFunction = this.userPreference.convertFtoC;
    } else {
      this.tempConvFunction = temp => temp;
    }

    this.parameterMinMax = this.alertService.getParameterMinMax();
    this.cfId = this.autheticationService.getCfId();
    this.patientId = this.patientData.patientId;
    this.alertSettings$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurations);
    this.alertSettingsStatus$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationStatus);
    this.alertSettingsMessage$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationMessage);
    this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
      var _a;

      this.error = data;

      if (((_a = data === null || data === void 0 ? void 0 : data.error) === null || _a === void 0 ? void 0 : _a.errorMessage) === 'ACCESS_DENIED') {
        this.snackbar.openCustomSnackBar('alert_config_module.messages.access_denied', 'bottom', 'center', true);
      }
    });
    this.loaderSubscription = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getLoaderStatus).subscribe(loaded => {
      this.loader = !loaded;
    });
    this.getSettings();
    this.alertSettings$.subscribe(data => {
      //this.loader = false;
      this.lastUpdated = new Date().toUTCString();
      this.commonService.setSettingsAlertActionButtons(false);
      this.commonService.setParameterAlertEditSubmit(false);
      this.hideParameterEdit();
      this.masterData = Object.assign({}, data);
      this.masterData.GroupId = "";
      this.masterData.PatientId = this.patientId;
      this.masterData.FacilityId = this.cfId;
      this.masterData.AlertId = "";
      const alerts = [];
      this.parameterAlert.forEach((element, i) => {
        var _a, _b;

        if ((_b = (_a = data === null || data === void 0 ? void 0 : data.Setting) === null || _a === void 0 ? void 0 : _a.Param) === null || _b === void 0 ? void 0 : _b.PhyParam[element.key]) {
          const settings = data.Setting.Param.PhyParam[element.key];
          alerts.push(Object.assign(Object.assign({}, settings), {
            alert: element.alerts,
            unit: element.unit,
            key: element.key,
            index: i
          }));
        }
      });

      if (this.userPreferenceUnit === 'SI') {
        alerts.forEach(setting => {
          if (setting.key === 'BODYTEMP' || setting.key === 'SKINTEMP') {
            setting.LowThr = Math.round(setting.LowThr / 100) / 10;
            setting.HighThr = Math.round(setting.HighThr / 100) / 10;
            setting.unit = "°C";
          }
        });
      } else {
        alerts.forEach(setting => {
          if (setting.key === 'BODYTEMP' || setting.key === 'SKINTEMP') {
            setting.LowThr = this.userPreference.convertCtoF(setting.LowThr / 1000);
            setting.HighThr = this.userPreference.convertCtoF(setting.HighThr / 1000);
            setting.unit = "°F";
          }
        });
      }

      this.parameterAlertSettings = alerts;
      this.parameterAlertSettingsCopy = JSON.parse(JSON.stringify(alerts));
      this.loading = false;
    }, err => {
      this.loading = false;
    });
    this.commonService.settingsAlertActionButtonsShow.subscribe(isShow => {
      if (this.showActionButtons !== isShow) {
        this.showActionButtons = isShow;
      }
    });
    this.alertSettings$.subscribe(data => {
      var _a;

      this.alertSettings = Object.assign({}, data);
      this.alertId = this.alertSettings.AlertId;
      this.isShowResetButton = (_a = this.alertSettings) === null || _a === void 0 ? void 0 : _a.IsForPatient;
    });

    if ((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.isAllowedRole)(this.parameterAlertAccess["EDIT"], this.roles)) {
      this.isEditAccess = true;
    }

    this.subscriptions.push(this.commonService.parameterAlertEditHide.subscribe(isHide => {
      if (isHide) {
        this.parameterAlertSettings = JSON.parse(JSON.stringify(this.parameterAlertSettingsCopy));
        this.hideParameterEdit();
      }
    }));
    this.subscriptions.push(this.commonService.parameterAlertEditSubmit.subscribe(isSubmit => {
      if (isSubmit) {
        this.updateParameterSettings();
      }
    }));
  }

  openDialog() {
    const SaveChanges = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        body: {
          title: "shared.confirm_text",
          text: "additional_devices.confirm_reset"
        }
      },
      disableClose: true
    });
    SaveChanges.afterClosed().subscribe(data => {
      if (data) {
        this.handleFactoryReset();
      }
    });
  }

  showEdit(index) {
    this.editThreshold[index] = true;
  }

  hideEdit(index) {
    this.editThreshold[index] = false;
  }

  showEditPrior(index) {
    this.editPrior[index] = true;
  }

  hideEditPrior(index) {
    this.editPrior[index] = false;
  }

  showEditDelay(index) {
    this.editDelay[index] = true;
  }

  hideEditDelay(index) {
    this.editDelay[index] = false;
  } // Hide all active edit buttons


  hideParameterEdit() {
    this.editThreshold = [false];
    this.editPrior = [false];
    this.editDelay = [false];
  }

  toggle(i) {
    this.editThreshold[i] = false;
    this.editPrior[i] = false;
    this.editDelay[i] = false;
    this.updated();
  } // Show and Hide Table Edit fields


  showHideEdit(index, type) {
    switch (type) {
      case "threshold":
        this.editThreshold[index] = !this.editThreshold[index];
        break;

      case "priority":
        this.editPrior[index] = !this.editPrior[index];
        break;

      case "delay":
        this.editDelay[index] = !this.editDelay[index];
        break;

      default:
        break;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
  }

  updateParameterSettings() {
    var _this = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const parameterAlert = {};
      let settings = [..._this.parameterAlertSettings];
      settings = settings.map(setting => setting.key === 'BODYTEMP' || setting.key === 'SKINTEMP' ? Object.assign(Object.assign({}, setting), {
        LowThr: Math.floor(_this.tempConvFunction(setting.LowThr) * 1000),
        HighThr: Math.floor(_this.tempConvFunction(setting.HighThr) * 1000)
      }) : setting); // settings = settings.map(setting =>
      //     setting.key === 'POSTURE_ALERT' ? { ...setting, LowThr: setting.HighThr,
      //       } : setting
      // );

      settings.forEach(element => {
        parameterAlert[element.key] = {
          Enabled: element.Enabled,
          Priority: element.Priority,
          LowThr: element.LowThr,
          HighThr: element.HighThr,
          CondDelay: parseInt(element.CondDelay)
        };
      });
      const payload = Object.assign({}, _this.masterData);
      payload["Setting"]["Param"]["PhyParam"] = parameterAlert;
      delete payload["auditloginfotype"];
      let patientId = encodeURIComponent(_this.patientId);
      let url = `alert-settings/patient-edit/${_this.cfId}/${patientId}`;

      try {
        const resp = yield _this.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.dataApiUrl + url, payload).toPromise();

        if (resp.status === "OK") {
          _this.reloadData.emit();

          _this.snackbar.openCustomSnackBar('Settings has been updated successfully', 'bottom', 'center');

          _this.commonService.setSettingsAlertActionButtons(false);

          _this.commonService.setParameterAlertEditSubmit(false);

          _this.hideParameterEdit();

          _this.getSettings();
        }
      } catch (error) {
        _this.error = error;
      }
    })();
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsEditCancel() {
    this.parameterAlertSettings = JSON.parse(JSON.stringify(this.parameterAlertSettingsCopy));
    this.commonService.setSettingsAlertActionButtons(false);
    this.commonService.setParameterAlertEditSubmit(false);
    this.hideParameterEdit();
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsSave() {
    this.updateParameterSettings();
  } // Handle alert setting factory reset action


  handleFactoryReset() {
    var _this2 = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const patientId = encodeURIComponent(_this2.patientId);
      const url = `alert-settings/patient-reset/${_this2.cfId}/${patientId}/${_this2.alertId}`;

      try {
        const resp = yield _this2.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.dataApiUrl + url, {}).toPromise();

        if (resp.status === "OK") {
          _this2.snackbar.openCustomSnackBar("alert_config_module.reset_success", 'bottom', 'center', true);

          _this2.getSettings();
        }
      } catch (error) {
        _this2.snackbar.openCustomSnackBar("alert_config_module.reset_error", 'bottom', 'center', true);
      }
    })();
  }

  selectTab(value) {
    if (this.selectedTab !== value) {
      this.commonService.setSettingsAlertActionButtons(false);
    }

    this.selectedTab = value;
  }

  checkRole(allowedRoles, userRoles) {
    if (allowedRoles.some(ai => userRoles.includes(ai))) {
      return true;
    } else {
      return false;
    }
  } // Threshold input filed validation


  parameterThresholdChanged(index, key, minMax) {
    const keyMapping = {
      LowThr: "invalid_low_threshold",
      HighThr: "invalid_high_threshold",
      CondDelay: "invalid_delay_time"
    };
    this.updated();

    if (this.parameterAlertSettings[index][key] < minMax["MIN"][key] || this.parameterAlertSettings[index][key] > minMax["MAX"][key]) {
      this.parameterAlertSettings[index][key] = this.parameterAlertSettingsCopy[index][key];
      let range = `${minMax["MIN"][key]} & ${minMax["MAX"][key]}`;
      let translate_txt = "alert_config_module.messages." + keyMapping[key];
      this.snackbar.openCustomSnackBar(translate_txt, 'bottom', 'center', true, '', range);
      this.commonService.setSettingsAlertActionButtons(false); // to do specific error message
    }

    if (key === "LowThr") {
      if (this.parameterAlertSettings[index][key] >= this.parameterAlertSettings[index]["HighThr"]) {
        this.parameterAlertSettings[index][key] = this.parameterAlertSettingsCopy[index][key];
        this.snackbar.openCustomSnackBar('alert_config_module.messages.incorrect_low_threshold', 'bottom', 'center', true);
        this.commonService.setSettingsAlertActionButtons(false);
      }
    }

    if (key === "HighThr") {
      if (this.parameterAlertSettings[index][key] <= this.parameterAlertSettings[index]["LowThr"]) {
        this.parameterAlertSettings[index][key] = this.parameterAlertSettingsCopy[index][key];
        this.snackbar.openCustomSnackBar('alert_config_module.messages.incorrect_high_threshold', 'bottom', 'center', true);
        this.commonService.setSettingsAlertActionButtons(false);
      }
    }
  }

  isBlank(str) {
    return !str || 0 === str.length || str === " " || str === "null" || str === "undefined";
  }

  limitChar(control, event) {
    if (control === 'BODYTEMP' || control === 'SKINTEMP') {
      if (event.target.value.toString().length > 5) {
        event.target.value = event.target.value.substr(0, 5);
      }
    } else {
      if (event.key === '.') {
        event.preventDefault();
      }
    }
  }

  updated() {
    if (JSON.stringify(this.parameterAlertSettings) !== JSON.stringify(this.parameterAlertSettingsCopy)) {
      this.commonService.setSettingsAlertActionButtons(true);
    } else {
      this.commonService.setSettingsAlertActionButtons(false);
    }
  }

  limitdelay(event) {
    if (event.key === '.') {
      event.preventDefault();
    }

    if (event.target.value.toString().length > 5) {
      event.target.value = event.target.value.substr(0, 5);
    }
  }

  numericsOnly(control, event) {
    let numericsOnlyPattern = /^[0-9]$/;
    let key = event.key;

    if (control === 'BODYTEMP' || control === 'SKINTEMP') {
      return true;
    } else {
      if (numericsOnlyPattern.test(key)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    }
  }

}

ParameterAlertsComponent.ɵfac = function ParameterAlertsComponent_Factory(t) {
  return new (t || ParameterAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_6__.UserPreferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_backendapi_service__WEBPACK_IMPORTED_MODULE_8__.BackendApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_10__.AlertConfigurationsService));
};

ParameterAlertsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ParameterAlertsComponent,
  selectors: [["app-parameter-alerts"]],
  inputs: {
    patientData: "patientData"
  },
  outputs: {
    reloadData: "reloadData"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "container-fuild"], [3, "patientData", "updated"], ["class", "loading-indicator", 4, "ngIf"], ["class", "inside-div head-border comman-table-users bg-thead-color", 4, "ngIf"], ["class", "row px-1", 4, "ngIf"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "inside-div", "head-border", "comman-table-users", "bg-thead-color"], [3, "config", "columns", "data", "configChange"], ["lsWidgetName", "enabled"], ["lsWidgetName", "alerts"], ["lsWidgetName", "threshold"], ["lsWidgetName", "editThreshold"], ["lsWidgetName", "priority"], ["lsWidgetName", "editPriority"], ["lsWidgetName", "delayTime"], ["lsWidgetName", "modified"], [1, "d-flex", "align-items-center"], [1, "ms-1", "me-2", 3, "ngModel", "disabled", "ngModelChange", "change"], ["class", "fw-normal", 4, "ngIf"], [1, "fw-normal"], [4, "ngIf"], ["class", "d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "fw-700"], [1, "d-flex", "align-items-center", "justify-content-center"], ["matInput", "", "digitOnly", "", "autocomplete", "off", "type", "number", 1, "text-input-box", "py-1", "me-1", 3, "ngModel", "min", "max", "step", "keypress", "keydown", "paste", "ngModelChange", "change"], ["autocomplete", "off", "matInput", "", "digitOnly", "", "class", "text-input-box py-1 ms-1", "type", "number", 3, "ngModel", "min", "max", "step", "keypress", "keydown", "paste", "ngModelChange", "change", 4, "ngIf"], [1, "ms-1"], ["autocomplete", "off", "matInput", "", "digitOnly", "", "type", "number", 1, "text-input-box", "py-1", "ms-1", 3, "ngModel", "min", "max", "step", "keypress", "keydown", "paste", "ngModelChange", "change"], ["mat-mini-fab", "", "color", "primary", "class", "btn-boxed btn-no-shadow", 3, "disabled", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "btn-boxed", "btn-no-shadow", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "btn-boxed", "btn-no-shadow", 3, "click"], [1, "me-2"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "16", "cy", "16", "r", "8"], ["cx", "16", "cy", "16", "r", "12", "stroke-width", "2", "stroke-dasharray", "4 4", 4, "ngIf"], ["cx", "16", "cy", "16", "r", "12", "stroke-width", "2", "stroke-dasharray", "4 4"], ["placeholder", "Select", 1, "priority-drop-down", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "d-flex justify-content-around align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-around", "align-items-center"], [1, "d-flex", "ack-column", "justify-content-center", "align-items-center"], [1, "nowrap-align", "d-flex", "justify-content-center", "align-items-center"], ["class", "text-value align-items-center justify-content-end", 4, "ngIf"], [1, "text-value", "align-items-center", "justify-content-end"], ["matInput", "", "autocomplete", "off", "type", "number", "digitOnly", "", "size", "4", 1, "text-input-box", "py-1", 3, "min", "max", "ngModel", "keypress", "paste", "change", "ngModelChange"], [1, "ms-2", "edit"], ["mat-mini-fab", "", "color", "primary", "class", "btn-boxed btn-no-shadow", 3, "click", 4, "ngIf"], [1, "row", "px-1"], [1, "col-lg-6"], ["mat-flat-button", "", "class", "reset_btn_bg mb-2 mb-md-0 px-2", 3, "click", 4, "ngIf"], [1, "col-lg-6", "text-end"], [3, "ngIf"], ["mat-flat-button", "", 1, "reset_btn_bg", "mb-2", "mb-md-0", "px-2", 3, "click"], [1, "ps-1"], ["mat-flat-button", "", "color", "warn", 1, "fill-btn", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "fill-btn", 3, "click"]],
  template: function ParameterAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-patient-details", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ParameterAlertsComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ParameterAlertsComponent_div_3_Template, 10, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ParameterAlertsComponent_mat_dialog_actions_4_Template, 5, 2, "mat-dialog-actions", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("patientData", ctx.patientData)("updated", ctx.lastUpdated);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loader && ctx.isEditAccess);
    }
  },
  directives: [_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_11__.PatientDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__.LsTableComponent, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__.LsWidgetNameDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__.NativeElementInjectorDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".mat-sel[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.text-input-box[_ngcontent-%COMP%] {\n  width: 50px !important;\n  height: 26px !important;\n  background: white;\n  box-sizing: border-box;\n  color: black;\n  border-radius: 4px;\n  font-size: 14px;\n  border: 1px solid rgba(123, 193, 255, 0.64);\n  text-align: center;\n}\n.priority-drop-down[_ngcontent-%COMP%] {\n  width: 90px;\n  border: none !important;\n  padding: 0px 10px;\n  text-align: left;\n  height: 2.3rem;\n  background: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.reset_btn_bg[_ngcontent-%COMP%] {\n  background: #42709a;\n}\n.text-value[_ngcontent-%COMP%] {\n  width: 60px;\n  text-align: right;\n}\n.alert-dialog-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsInBhcmFtZXRlci1hbGVydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ3BOQTs7OztFQUFBO0FBS0E7O0VBQUE7QUFHQTtFQUNFLFlBQUE7QUFjRjtBQVpBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQWVGO0FBYkE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCRDdCTTtFQzhCTiwyQ0RzSGlCO0VDckhqQixzQkQyRWM7QUMzRGhCO0FBYkE7RUFDRSxtQkRxRWE7QUNyRGY7QUFkQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQWlCRjtBQWZBO0VBQXNCLFVBQUE7QUFtQnRCO0FBakJFO0VBQ0UseUJBQUE7QUFvQkoiLCJmaWxlIjoicGFyYW1ldGVyLWFsZXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy92YXJpYWJsZXNcIjtcbi8qOjpuZy1kZWVwIHtcbiAgLnNjcm9sbC1hc3Npc3Qge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCkgIWltcG9ydGFudDtcbiAgfVxufSovXG4vKi5pbnNpZGUtZGl2IHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0qL1xuLm1hdC1zZWwge1xuICB3aWR0aDogMTMwcHg7XG59XG4udGV4dC1pbnB1dC1ib3gge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTIzLCAxOTMsIDI1NSwgMC42NCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcmlvcml0eS1kcm9wLWRvd24ge1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6Mi4zcmVtO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cblxuLnJlc2V0X2J0bl9iZyB7XG4gIGJhY2tncm91bmQ6ICRiZy1yZXNldC1idG47XG59XG4udGV4dC12YWx1ZXtcbiAgd2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFsZXJ0LWRpYWxvZy1jb250ZW50e3BhZGRpbmc6IDA7fVxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgaW5wdXQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 67138:
/*!**********************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/patient-details/patient-details.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientDetailsComponent": function() { return /* binding */ PatientDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function PatientDetailsComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r0.patientData == null ? null : ctx_r0.patientData.firstName) + " ", "");
} }
function PatientDetailsComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.patientData == null ? null : ctx_r1.patientData.lastName);
} }
function PatientDetailsComponent_span_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PatientDetailsComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PatientDetailsComponent_span_16_span_2_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.patientData.pGroup == null ? null : ctx_r2.patientData.pGroup.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.patientData == null ? null : ctx_r2.patientData.pGroup) && (ctx_r2.patientData == null ? null : ctx_r2.patientData.cGroup));
} }
function PatientDetailsComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.patientData.cGroup == null ? null : ctx_r3.patientData.cGroup.name, " ");
} }
function PatientDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Unacknowledged");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.count.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.count.unAcknowledged);
} }
function PatientDetailsComponent_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Last updated ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, ctx_r5.updated + "+0000", "MMM dd, yyyy / " + ctx_r5.timeFmt, ctx_r5.timeZone), " ");
} }
function PatientDetailsComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientDetailsComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.acknowledgeAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r6.activeAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "alert_config_module.acknowledge_all"), " ");
} }
function PatientDetailsComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientDetailsComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.addNewEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "alert_config_module.add_event.new_event"), " ");
} }
function PatientDetailsComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientDetailsComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.acknowledgeAllEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r8.activeEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "alert_config_module.alertfreq_acknowledge"), " ");
} }
class PatientDetailsComponent {
    constructor(userPreference) {
        this.userPreference = userPreference;
        this.acknowledgeAllType = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.acknowledgeAllEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.eventEditAccess = false;
        this.count = {
            current: 0,
            unAcknowledged: 0
        };
        this.activeAlert = false;
        this.timeFmt = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.customization.timeFormat;
    }
    ngOnInit() {
        this.timeZone = this.userPreference.getUserTimeZone();
    }
    acknowledgeAll() {
        this.acknowledgeAllType.emit();
    }
    addNewEvent() {
        this.addEvent.emit();
    }
    acknowledgeAllEvent() {
        this.acknowledgeAllEvents.emit();
    }
}
PatientDetailsComponent.ɵfac = function PatientDetailsComponent_Factory(t) { return new (t || PatientDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_1__.UserPreferenceService)); };
PatientDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PatientDetailsComponent, selectors: [["app-patient-details"]], inputs: { patientData: "patientData", updated: "updated", activeEvents: "activeEvents", eventEditAccess: "eventEditAccess", count: "count", tab: "tab", activeAlert: "activeAlert" }, outputs: { acknowledgeAllType: "acknowledgeAllType", acknowledgeAllEvents: "acknowledgeAllEvents", addEvent: "addEvent" }, decls: 24, vars: 14, consts: [[1, "container-fluid", "py-3", "pb-1"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "flex-wrap", "align-items-center", "patient-details"], [1, "patient-id", "px-2"], ["src", "assets/icons/biosensor.svg", "alt", "biosensor", "width", "28", "height", "31", 1, "header-tab-icon", "me-2"], [1, "d-block", "pid"], [1, "px-2", "me-auto", "w-max-20"], [1, "d-block", "pb-2", "text-truncate"], ["class", "patient-name", 4, "ngIf"], ["class", "small-tag remote-tag", 4, "ngIf"], ["class", "small-tag sepsis-tag", 4, "ngIf"], ["class", "justify-content-end py-1", 4, "ngIf"], [1, "text-center", "text-md-end", "col-md-6", "patient-right-detail"], ["class", "mx-1 time-stamp fw-normal  py-1", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", "class", "mx-1 py-1 text-uppercase", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "accent", "class", "mx-2 my-1 text-uppercase", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "type", "button", "color", "primary", "class", "me-1 my-1 text-uppercase", 3, "disabled", "click", 4, "ngIf"], [1, "patient-name"], [1, "small-tag", "remote-tag"], [4, "ngIf"], [1, "small-tag", "sepsis-tag"], [1, "justify-content-end", "py-1"], [1, "mx-2"], [1, "alert-count"], [1, "mx-2", "ms-3"], [1, "mx-1", "time-stamp", "fw-normal", "py-1"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "mx-1", "py-1", "text-uppercase", 3, "disabled", "click"], ["mat-flat-button", "", "type", "button", "color", "accent", 1, "mx-2", "my-1", "text-uppercase", 3, "click"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "me-1", "my-1", "text-uppercase", 3, "disabled", "click"]], template: function PatientDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PatientDetailsComponent_span_14_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PatientDetailsComponent_span_15_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PatientDetailsComponent_span_16_Template, 3, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PatientDetailsComponent_span_17_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PatientDetailsComponent_div_18_Template, 11, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PatientDetailsComponent_label_20_Template, 3, 5, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PatientDetailsComponent_button_21_Template, 3, 4, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PatientDetailsComponent_button_22_Template, 3, 3, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, PatientDetailsComponent_button_23_Template, 3, 4, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.patientData == null ? null : ctx.patientData.patchId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, "dashboard-module.pid"), " ", ctx.patientData == null ? null : ctx.patientData.patientId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.pGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patientData == null ? null : ctx.patientData.cGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tab === "alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.updated == null ? null : ctx.updated.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tab === "alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tab === "eventList" && ctx.eventEditAccess && (ctx.patientData == null ? null : ctx.patientData.addEvent));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tab === "eventList");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".patient-id[_ngcontent-%COMP%] {\n  border-right: 1px solid #fff;\n}\n.patient-details[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.time-group[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.alert-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.pid[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.small-tag[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1fc0f3;\n}\n@media only screen and (max-width: 992px) {\n  .small-tag[_ngcontent-%COMP%] {\n    display: block;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n\n.patient-details[_ngcontent-%COMP%]   .patient-id[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n.time-stamp[_ngcontent-%COMP%] {\n  font-weight: 400;\n  opacity: 0.8;\n}\n.patient-right-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 10rem;\n}\n@media (min-width: 768px) and (max-width: 992px) {\n  .patient-right-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 8.75rem;\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .patient-right-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 7.8rem;\n    font-size: 12px;\n    min-width: auto;\n    margin: 0px !important;\n    margin-right: 5px !important;\n  }\n  .patient-right-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n  }\n}\n@media only screen and (max-width: 1300px) {\n  .patient-right-detail[_ngcontent-%COMP%]   .time-stamp[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.w-max-20[_ngcontent-%COMP%] {\n  max-width: 20rem;\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .w-max-20[_ngcontent-%COMP%] {\n    max-width: 14rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .patient-details[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0;\n  }\n  .patient-details[_ngcontent-%COMP%]   .me-auto[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n  .patient-details[_ngcontent-%COMP%]   .w-max-20[_ngcontent-%COMP%] {\n    max-width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsInBhdGllbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSx5QkFBQTtBQXNFQSxvQkFBQTtBQXdDQSxXQUFBO0FBTUEsVUFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQVFBLGtCQUFBO0FBSUEsY0FBQTtBQWVBLGVBQUE7QUFJQSxlQUFBO0FBMEJBLGtCQUFBO0FBUUEsaUJBQUE7QUFRQSw2QkFBQTtBQVFBLCtCQUFBO0FDbk5BO0VBQ0UsNEJBQUE7QUFhRjtBQVZBO0VBQ0UsaUJEV1E7QUNFVjtBQVZBO0VBQ0UsZURHUTtBQ1VWO0FBVkE7RUFDRSxlREdRO0FDVVY7QUFWQSw2QkFBQTtBQUNBO0VBQ0UsZUROUTtBQ21CVjtBQVZBO0VBQ0UsZUFBQTtFQUNBLGdCRHVHZ0I7QUMxRmxCO0FBVkE7RUFDRSxlRHhCZTtFQ3lCZixjRG9DZ0I7QUN2QmxCO0FBWEU7RUFKRjtJQUtJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFjRjtBQUNGO0FBVEEsNkJBQUE7QUFFQSxzQkFBQTtBQUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVVKO0FBTkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFTRjtBQUhFO0VBQ0UsZ0JBQUE7QUFNSjtBQUpJO0VBSEY7SUFJSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGVEeERJO0VDK0RSO0FBQ0Y7QUFMSTtFQVRGO0lBVUksYUFBQTtJQUNBLGVEN0RJO0lDOERKLGVBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0VBUUo7RUFOSTtJQUFhLGVBQUE7RUFTakI7QUFDRjtBQUpJO0VBREY7SUFFSSxjQUFBO0VBT0o7QUFDRjtBQURBO0VBQ0UsZ0JBQUE7QUFJRjtBQUZFO0VBSEY7SUFJSSxnQkFBQTtFQUtGO0FBQ0Y7QUFEQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxVQUFBO0VBSUY7RUFGRTtJQUNFLG9CQUFBO0VBSUo7RUFERTtJQUNFLGNBQUE7RUFHSjtBQUNGIiwiZmlsZSI6InBhdGllbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy92YXJpYWJsZXNcIjtcblxuLnBhdGllbnQtaWQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkd2hpdGU7XG59XG5cbi5wYXRpZW50LWRldGFpbHMge1xuICBsaW5lLWhlaWdodDogJHNpemUtMTg7XG59XG5cbi50aW1lLWdyb3VwIHtcbiAgZm9udC1zaXplOiAkc2l6ZS0xMDtcbn1cblxuLmFsZXJ0LWNvdW50IHtcbiAgZm9udC1zaXplOiAkc2l6ZS0xODtcbn1cblxuLyoqKiBhbGVydCBNb2RhbCBEaWFsb2cgKioqKiovXG4ucGlkIHtcbiAgZm9udC1zaXplOiAkc2l6ZS0xMDtcbn1cblxuLnBhdGllbnQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC03MDA7XG59XG5cbi5zbWFsbC10YWcge1xuICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcbiAgY29sb3I6ICRibHVlLWNvbG9yLWdyb3VwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgfVxuXG59XG5cbi8qKiogYWxlcnQgTW9kYWwgRGlhbG9nICoqKioqL1xuXG4vKioqIGFsZXJ0IG1vZGFsICoqKioqL1xuLnBhdGllbnQtZGV0YWlscyB7XG4gIC5wYXRpZW50LWlkIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4udGltZS1zdGFtcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuODtcblxufVxuXG4ucGF0aWVudC1yaWdodC1kZXRhaWwge1xuXG4gIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiAxMHJlbTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICB3aWR0aDogOC43NXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogJHNpemUtMTI7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDcuOHJlbTtcbiAgICAgIGZvbnQtc2l6ZTogJHNpemUtMTI7XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcblxuICAgICAgJjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDogMDt9XG5cbiAgICB9XG4gIH1cblxuICAudGltZS1zdGFtcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICB9XG5cbn1cblxuLnctbWF4LTIwIHtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIG1heC13aWR0aDogMTRyZW07XG4gIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wYXRpZW50LWRldGFpbHMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAubWUtYXV0byB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudy1tYXgtMjAge1xuICAgICAgbWF4LXdpZHRoOiA2MCU7XG5cblxuICAgIH1cbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 26430:
/*!*****************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/services/alert-configuration.service.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertConfigurationsService": function() { return /* binding */ AlertConfigurationsService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 75428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_backendapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/backendapi.service */ 68493);







class AlertConfigurationsService {
    constructor(http, backendApiService) {
        this.http = http;
        this.backendApiService = backendApiService;
    }
    getAlertSettings(url) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'X-Skip-Interceptor': '',
            'Access-Control-Allow-Origin': '*',
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { headers: authHeaders });
    }
    getArrhythmiaAlertSettings(url) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'X-Skip-Interceptor': '',
            'Access-Control-Allow-Origin': '*',
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { headers: authHeaders });
    }
    getSettings(url) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            "X-Skip-Interceptor": "",
            "Access-Control-Allow-Origin": "*",
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, {
            headers: authHeaders,
        });
    }
    getGroups(cfId) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            "X-Skip-Interceptor": "",
            "Access-Control-Allow-Origin": "*",
        });
        const url = "clinical-facilities/" + cfId + "/groups";
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { headers: authHeaders })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    updateSettings(body) {
        const url = "patients/misc-settings";
        console.log("update", body);
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    downloadAlertLog(patientId) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + "patients/" + patientId + "/alert-log";
        return this.backendApiService
            .downloadBlob(url);
    }
    downloadEventLog(patientId) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + "patients/" + patientId + "/event-log";
        return this.backendApiService.downloadBlob(url);
    }
    resetSettings(url) {
        console.log(url);
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, "")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // Root destination alert fetch api
    getAlertDestinationSettings(url) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'X-Skip-Interceptor': '',
            'Access-Control-Allow-Origin': '*',
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { headers: authHeaders });
    }
    getClinicalFacilityContacts(url) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'X-Skip-Interceptor': '',
            'Access-Control-Allow-Origin': '*',
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { headers: authHeaders }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        // Client-side error.
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
            // Server-side error.
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(errorMessage);
    }
    getParameterMinMax() {
        var _a;
        let userPreferenceUnit = (_a = JSON.parse(sessionStorage.getItem('userPreference'))) === null || _a === void 0 ? void 0 : _a.units;
        return {
            HR: {
                MIN: {
                    HighThr: 60,
                    CondDelay: 5,
                    LowThr: 30,
                },
                MAX: {
                    HighThr: 250,
                    CondDelay: 300,
                    LowThr: 160,
                },
            },
            RR: {
                MIN: {
                    HighThr: 10,
                    CondDelay: 30,
                    LowThr: 6,
                },
                MAX: {
                    HighThr: 60,
                    CondDelay: 300,
                    LowThr: 55,
                },
            },
            SPO2: {
                MIN: {
                    HighThr: 95,
                    CondDelay: 60,
                    LowThr: 70,
                },
                MAX: {
                    HighThr: 100,
                    CondDelay: 300,
                    LowThr: 95,
                },
            },
            BODYTEMP: {
                MIN: {
                    HighThr: userPreferenceUnit === 'SI' ? 37 : 98.6,
                    CondDelay: 20,
                    LowThr: userPreferenceUnit === 'SI' ? 32 : 89.6,
                },
                MAX: {
                    HighThr: userPreferenceUnit === 'SI' ? 43 : 109.4,
                    CondDelay: 300,
                    LowThr: userPreferenceUnit === 'SI' ? 36 : 96.8,
                },
            },
            BPSYS: {
                MIN: {
                    HighThr: 75,
                    CondDelay: 1,
                    LowThr: 35,
                },
                MAX: {
                    HighThr: 240,
                    LowThr: 150,
                    CondDelay: 300,
                },
            },
            BPDIA: {
                MIN: {
                    HighThr: 50,
                    LowThr: 15,
                    CondDelay: 1,
                },
                MAX: {
                    HighThr: 180,
                    LowThr: 50,
                    CondDelay: 300,
                },
            },
            BP: {
                MIN: {
                    HighThr: 70,
                    LowThr: 25,
                    CondDelay: 1,
                },
                MAX: {
                    HighThr: 200,
                    LowThr: 125,
                    CondDelay: 300,
                },
            },
            PR: {
                MIN: {
                    HighThr: 60,
                    CondDelay: 20,
                    LowThr: 30,
                },
                MAX: {
                    HighThr: 250,
                    CondDelay: 300,
                    LowThr: 120,
                },
            },
            SKINTEMP: {
                MIN: {
                    HighThr: userPreferenceUnit === 'SI' ? 20 : 68,
                    CondDelay: 20,
                    LowThr: userPreferenceUnit === 'SI' ? 15 : 59,
                },
                MAX: {
                    HighThr: userPreferenceUnit === 'SI' ? 45 : 113,
                    CondDelay: 300,
                    LowThr: userPreferenceUnit === 'SI' ? 34.4 : 94,
                },
            },
            POSTURE_ALERT: {
                MIN: {
                    HighThr: '',
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: '',
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            //------------------------
            SINUS_BRADYCARDIA: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: 30,
                },
                MAX: {
                    HighThr: 50,
                    CondDelay: 168,
                    LowThr: 60,
                },
            },
            SINUS_TACHYCARDIA: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: 100,
                },
                MAX: {
                    HighThr: 100,
                    CondDelay: 168,
                    LowThr: 250,
                },
            },
            VENTRICULAR_FLUTTER: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            VENTRICULAR_TACHYCARDIA: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            IDIOVENTRICULAR_RYTHM: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            SUPRAVENTRICULAR_TACHYCARDIA: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            AFIB_FLUTTER: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            JUNCTIONAL_TACHYCARDIA: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            FIRST_DEGREE_AV_BLOCK: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            SECOND_DEGREE_AV_BLOCK_TYPE_I: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            SECOND_DEGREE_AV_BLOCK_TYPE_II: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            PAUSE: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            V_COUPLET: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            V_TRIGEMINY: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            V_BIGEMINY: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            PVC_RATE: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: 1,
                },
                MAX: {
                    HighThr: 10,
                    CondDelay: 168,
                    LowThr: 99,
                },
            },
            PAC_RATE: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: 1,
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: 99,
                },
            },
            PVC: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
            PAC: {
                MIN: {
                    HighThr: 0,
                    CondDelay: 2,
                    LowThr: '',
                },
                MAX: {
                    HighThr: 20,
                    CondDelay: 168,
                    LowThr: '',
                },
            },
        };
    }
    alertHistory(param) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        // Begin assigning parameters
        let patientId = encodeURIComponent(param.patientId);
        const url = `alerts/param/${patientId}`;
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    acknowledgeAlert(body) {
        const url = "alerts/acknowledge";
        return this.backendApiService
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    eventList(param) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        let patientId = encodeURIComponent(param.patientId);
        let page = param.page + 1;
        let pageSize = param.pageSize;
        const url = `patients/${patientId}/events?page=${page}&size=${pageSize}`;
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    addEvent(event) {
        const url = "patients/patient-events";
        return this.backendApiService
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, event)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    acknowledgeEvent(id) {
        const url = "patients/ack-event";
        return this.backendApiService
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    alphaNumericsOnly(event) {
        let charsOnlyPattern = /^[a-zA-Z0-9_ ]+$/;
        let key = event.key;
        if (charsOnlyPattern.test(key)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    alphaNumericsOnlySpecialCases(event) {
        let charsOnlyPattern = /^[a-zA-Z0-9 ]+$/;
        let key = event.key;
        if (charsOnlyPattern.test(key)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    checkForSpecialCharacters(event) {
        let clipboardData = event.clipboardData;
        let key = clipboardData.getData('text');
        let charsOnlyPattern = /^[0-9]+$/;
        if (charsOnlyPattern.test(key)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    sortAlerts(alerts) {
        return alerts.sort((a, b) => {
            if (a['alertTimeFrom'] > b['alertTimeFrom'])
                return -1;
            else if (a['alertTimeFrom'] < b['alertTimeFrom'])
                return 1;
            else
                return 0;
        });
    }
    forwardAlert(payload) {
        const url = "alerts/forward";
        return this.backendApiService
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataApiUrl + url, payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
}
AlertConfigurationsService.ɵfac = function AlertConfigurationsService_Factory(t) { return new (t || AlertConfigurationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_backendapi_service__WEBPACK_IMPORTED_MODULE_1__.BackendApiService)); };
AlertConfigurationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AlertConfigurationsService, factory: AlertConfigurationsService.ɵfac });


/***/ }),

/***/ 27776:
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/store/alert-configuration.actions.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadArrhythmiaAlertConfigurationRequestAction": function() { return /* binding */ loadArrhythmiaAlertConfigurationRequestAction; },
/* harmony export */   "loadArrhythmiaAlertConfigurationFailureAction": function() { return /* binding */ loadArrhythmiaAlertConfigurationFailureAction; },
/* harmony export */   "loadArrhythmiaAlertConfigurationSuccessAction": function() { return /* binding */ loadArrhythmiaAlertConfigurationSuccessAction; },
/* harmony export */   "loadAlertConfigurationRequestAction": function() { return /* binding */ loadAlertConfigurationRequestAction; },
/* harmony export */   "loadAlertConfigurationFailureAction": function() { return /* binding */ loadAlertConfigurationFailureAction; },
/* harmony export */   "loadAlertConfigurationSuccessAction": function() { return /* binding */ loadAlertConfigurationSuccessAction; },
/* harmony export */   "updateAlertConfigurationRequestAction": function() { return /* binding */ updateAlertConfigurationRequestAction; },
/* harmony export */   "updateAlertConfigurationFailureAction": function() { return /* binding */ updateAlertConfigurationFailureAction; },
/* harmony export */   "updateAlertConfigurationSuccessAction": function() { return /* binding */ updateAlertConfigurationSuccessAction; },
/* harmony export */   "resetAlertConfigurationRequestAction": function() { return /* binding */ resetAlertConfigurationRequestAction; },
/* harmony export */   "resetAlertConfigurationFailureAction": function() { return /* binding */ resetAlertConfigurationFailureAction; },
/* harmony export */   "resetAlertConfigurationSuccessAction": function() { return /* binding */ resetAlertConfigurationSuccessAction; },
/* harmony export */   "loadDestinationAlertConfigurationSuccessAction": function() { return /* binding */ loadDestinationAlertConfigurationSuccessAction; },
/* harmony export */   "loadDestinationAlertConfigurationFailureAction": function() { return /* binding */ loadDestinationAlertConfigurationFailureAction; },
/* harmony export */   "loadDestinationAlertConfigurationRequestAction": function() { return /* binding */ loadDestinationAlertConfigurationRequestAction; },
/* harmony export */   "loadClinicalFacilityContactsRequestAction": function() { return /* binding */ loadClinicalFacilityContactsRequestAction; },
/* harmony export */   "loadClinicalFacilityContactsFailureAction": function() { return /* binding */ loadClinicalFacilityContactsFailureAction; },
/* harmony export */   "loadClinicalFacilityContactsSuccessAction": function() { return /* binding */ loadClinicalFacilityContactsSuccessAction; },
/* harmony export */   "loadMiscellaneousSettingsRequestAction": function() { return /* binding */ loadMiscellaneousSettingsRequestAction; },
/* harmony export */   "loadMiscellaneousSettingsFailureAction": function() { return /* binding */ loadMiscellaneousSettingsFailureAction; },
/* harmony export */   "loadMiscellaneousSettingsSuccessAction": function() { return /* binding */ loadMiscellaneousSettingsSuccessAction; },
/* harmony export */   "updateMiscellaneousSettingsRequestAction": function() { return /* binding */ updateMiscellaneousSettingsRequestAction; },
/* harmony export */   "updateMiscellaneousSettingsFailureAction": function() { return /* binding */ updateMiscellaneousSettingsFailureAction; },
/* harmony export */   "updateMiscellaneousSettingsSuccessAction": function() { return /* binding */ updateMiscellaneousSettingsSuccessAction; },
/* harmony export */   "resetMiscellaneousSettingsRequestAction": function() { return /* binding */ resetMiscellaneousSettingsRequestAction; },
/* harmony export */   "resetMiscellaneousSettingsFailureAction": function() { return /* binding */ resetMiscellaneousSettingsFailureAction; },
/* harmony export */   "resetMiscellaneousSettingsSuccessAction": function() { return /* binding */ resetMiscellaneousSettingsSuccessAction; },
/* harmony export */   "LoadAlertHistoryRequestAction": function() { return /* binding */ LoadAlertHistoryRequestAction; },
/* harmony export */   "LoadAlertHistoryFailureAction": function() { return /* binding */ LoadAlertHistoryFailureAction; },
/* harmony export */   "LoadAlertHistorySuccessAction": function() { return /* binding */ LoadAlertHistorySuccessAction; },
/* harmony export */   "LoadEventListRequestAction": function() { return /* binding */ LoadEventListRequestAction; },
/* harmony export */   "LoadEventListFailureAction": function() { return /* binding */ LoadEventListFailureAction; },
/* harmony export */   "LoadEventListSuccessAction": function() { return /* binding */ LoadEventListSuccessAction; }
/* harmony export */ });
/* harmony import */ var _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-configuration.types */ 55737);

class loadArrhythmiaAlertConfigurationRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_REQUEST;
    }
}
class loadArrhythmiaAlertConfigurationFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_FAILURE;
    }
}
class loadArrhythmiaAlertConfigurationSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_SUCCESS;
    }
}
class loadAlertConfigurationRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ALERT_CONFIGURATION_REQUEST;
    }
}
class loadAlertConfigurationFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ALERT_CONFIGURATION_FAILURE;
    }
}
class loadAlertConfigurationSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ALERT_CONFIGURATION_SUCCESS;
    }
}
class updateAlertConfigurationRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_ALERT_CONFIGURATION_REQUEST;
    }
}
class updateAlertConfigurationFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_ALERT_CONFIGURATION_FAILURE;
    }
}
class updateAlertConfigurationSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_ALERT_CONFIGURATION_SUCCESS;
    }
}
class resetAlertConfigurationRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_ALERT_CONFIGURATION_REQUEST;
    }
}
class resetAlertConfigurationFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_ALERT_CONFIGURATION_FAILURE;
    }
}
class resetAlertConfigurationSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_ALERT_CONFIGURATION_SUCCESS;
    }
}
class loadDestinationAlertConfigurationSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_DESTINATION_ALERT_CONFIGURATION_SUCCESS;
    }
}
class loadDestinationAlertConfigurationFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_DESTINATION_ALERT_CONFIGURATION_FAILURE;
    }
}
class loadDestinationAlertConfigurationRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_DESTINATION_ALERT_CONFIGURATION_REQUEST;
    }
}
class loadClinicalFacilityContactsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.CF_CONATCT_LIST_REQUEST;
    }
}
class loadClinicalFacilityContactsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.CF_CONATCT_LIST_FAILURE;
    }
}
class loadClinicalFacilityContactsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.CF_CONATCT_LIST_SUCCESS;
    }
}
//miscellaneoous actions
class loadMiscellaneousSettingsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_MISCELLANEOUS_SETTINGS_REQUEST;
    }
}
class loadMiscellaneousSettingsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_MISCELLANEOUS_SETTINGS_FAILURE;
    }
}
class loadMiscellaneousSettingsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_MISCELLANEOUS_SETTINGS_SUCCESS;
    }
}
class updateMiscellaneousSettingsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_MISCELLANEOUS_SETTINGS_REQUEST;
    }
}
class updateMiscellaneousSettingsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_MISCELLANEOUS_SETTINGS_FAILURE;
    }
}
class updateMiscellaneousSettingsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_MISCELLANEOUS_SETTINGS_SUCCESS;
    }
}
class resetMiscellaneousSettingsRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_MISCELLANEOUS_SETTINGS_REQUEST;
    }
}
class resetMiscellaneousSettingsFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_MISCELLANEOUS_SETTINGS_FAILURE;
    }
}
class resetMiscellaneousSettingsSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_MISCELLANEOUS_SETTINGS_SUCCESS;
    }
}
class LoadAlertHistoryRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.ALERT_HISTORY_REQUEST;
    }
}
class LoadAlertHistoryFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.ALERT_HISTORY_FAILURE;
    }
}
class LoadAlertHistorySuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.ALERT_HISTORY_SUCCESS;
    }
}
class LoadEventListRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.EVENT_LIST_REQUEST;
    }
}
class LoadEventListFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.EVENT_LIST_FAILURE;
    }
}
class LoadEventListSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.EVENT_LIST_SUCCESS;
    }
}


/***/ }),

/***/ 99440:
/*!*************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/store/alert-configuration.models.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 20597:
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/store/alert-configuration.reducer.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patientAlertConfigurationKey": function() { return /* binding */ patientAlertConfigurationKey; },
/* harmony export */   "AlertConfigurationReducer": function() { return /* binding */ AlertConfigurationReducer; }
/* harmony export */ });
/* harmony import */ var _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-configuration.types */ 55737);
/* harmony import */ var _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../life-signals/_models/ls-column.model */ 24856);


const initialAlertConfigurationState = {
    arrhythmiaConfigurations: {
        ArrhythmiaId: "",
        Setting: {
            SINUS_BRADYCARDIA: {
                Enabled: true,
                Priority: "HIGH",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            SINUS_TACHYCARDIA: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            VENTRICULAR_FLUTTER: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            VENTRICULAR_TACHYCARDIA: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            IDIOVENTRICULAR_RYTHM: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            SUPRAVENTRICULAR_TACHYCARDIA: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            AFIB_FLUTTER: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            JUNCTIONAL_TACHYCARDIA: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            FIRST_DEGREE_AV_BLOCK: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            SECOND_DEGREE_AV_BLOCK_TYPE_I: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            SECOND_DEGREE_AV_BLOCK_TYPE_II: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            PAUSE: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            V_COUPLET: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            V_BIGEMINY: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            V_TRIGEMINY: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            PVC_RATE: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            PAC_RATE: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            PVC: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
            PAC: {
                Enabled: true,
                Priority: "",
                LowThr: 0,
                HighThr: 0,
                CondDelay: 0,
                HighUnit: "",
                LowUnit: "",
                Thr: 0,
            },
        },
        FacilityId: "",
        FacilityName: "",
        PatientId: "",
        GroupId: "",
        IsForPatient: true,
        createdDateTime: "",
        modifiedDateTime: "",
    },
    alert_configurations: {
        AlertId: "",
        FacilityId: "",
        FacilityName: "",
        GroupId: "",
        IsForPatient: false,
        PatientId: "",
        modifiedDateTime: "",
        Setting: {
            Param: {
                PhyParam: {
                    HR: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    RR: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    PR: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    SPO2: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    BPSYS: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    BPDIA: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    BP: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    SKINTEMP: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    BODYTEMP: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                    CardiacStandStill: {
                        Enabled: false,
                        Priority: "",
                        LowThr: 0,
                        HighThr: 0,
                        CondDelay: 0
                    },
                },
                TechParam: {
                    LEAD_OFF: {
                        Enabled: false,
                    },
                    BIOSENSOR_DISCONNECTED: {
                        Enabled: false,
                    },
                    RELAY_DISCONNECTED: {
                        Enabled: false,
                    },
                    LOW_BATTERY: {
                        Enabled: false,
                    },
                    COMPUTE_HR_ERROR: {
                        Enabled: false,
                    },
                    COMPUTE_RR_ERROR: {
                        Enabled: false,
                    },
                    COMPUTE_SPO2_ERROR: {
                        Enabled: false,
                    },
                    COMPUTE_BODY_TEMP_ERROR: {
                        Enabled: false,
                    },
                },
            },
            Common: {
                PhyCommon: {
                    HIGH: {
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                        Percentage_UnAck: 0,
                        Percentage_Ack: 0,
                    },
                    MEDIUM: {
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                        Percentage_UnAck: 0,
                        Percentage_Ack: 0,
                    },
                    LOW: {
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                        Percentage_UnAck: 0,
                        Percentage_Ack: 0,
                    },
                },
                TechCommon: {
                    LEAD_OFF: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    BIOSENSOR_DISCONNECTED: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    RELAY_DISCONNECTED: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    LOW_BATTERY: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    COMPUTE_HR_ERROR: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    COMPUTE_RR_ERROR: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    COMPUTE_SPO2_ERROR: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                    COMPUTE_BODY_TEMP_ERROR: {
                        CondDelay: 0,
                        Frequency_UnAck: 0,
                        Frequency_Ack: 0,
                    },
                },
            },
        },
        auditloginfotype: {
            CreatedBy: "",
            CreatedById: "",
            ModifiedBy: "",
            ModifiedById: "",
            CreatedDateTime: "",
            ModifiedDateTime: "",
        },
    },
    error: '',
    status: '',
    message: '',
    loaded: false,
    historyLoaded: false,
    tableState: _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__.TableState.DEFAULT,
    MISCELLANEOUS_SETTINGS_DATA: {
        thirdPartyDeviceSettings: [],
        ecgFilterSettings: {
            ecgFilterSetting: '',
            isActive: false
        },
        bioSensorConfigSettings: [],
        otherSettings: {
            autoGeneratePatientId: false,
            enableAccessToSPPHY: false,
            facilityName: '',
            facilityLogo: '',
            emr: ''
        },
        facilityId: '0',
        groupId: '0',
        patientId: '0',
        alertId: '0',
        miscSettingsId: "",
        modifiedDateTime: ""
    },
    alert_destinations: {
        AlertDestId: '',
        FacilityId: '',
        GroupId: '',
        PatientId: '',
        Setting: {
            AlertSMS: '',
            AlertWhatsApp: '',
            AlertEmail: '',
            AlertCaregiverApp: '',
            AlertSMSEnabled: false,
            AlertWhatsAppEnabled: false,
            AlertEmailEnabled: false,
            AlertCaregiverAppEnabled: false,
        },
        SettingTech: {
            AlertSMS: '',
            AlertWhatsApp: '',
            AlertEmail: '',
            AlertCaregiverApp: '',
            AlertSMSEnabled: false,
            AlertWhatsAppEnabled: false,
            AlertEmailEnabled: false,
            AlertCaregiverAppEnabled: false,
        },
        UserData: [],
        auditloginfotype: {
            CreatedBy: '',
            CreatedById: '',
            ModifiedBy: '',
            ModifiedById: '',
            CreatedDateTime: '',
            ModifiedDateTime: ''
        },
        NotificationMessage: ''
    },
    groupIdSelected: null,
    contacts: [],
    alert_history: {
        patientId: "",
        topAlerts: []
    },
    event_list: [],
    eventListLoaded: false,
    eventListCount: 0
};
const patientAlertConfigurationKey = "patientAlertConfiguration";
function AlertConfigurationReducer(state = initialAlertConfigurationState, action) {
    switch (action.type) {
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, loaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_SUCCESS: {
            return Object.assign(Object.assign({}, state), { arrhythmiaConfigurations: action.payload.data.data, message: action.payload.data.message, status: action.payload.data.status, loaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ALERT_CONFIGURATION_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, loaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ALERT_CONFIGURATION_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_ALERT_CONFIGURATION_SUCCESS: {
            return Object.assign(Object.assign({}, state), { alert_configurations: action.payload.data.data, message: action.payload.data.message, status: action.payload.data.status, loaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_DESTINATION_ALERT_CONFIGURATION_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, loaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_DESTINATION_ALERT_CONFIGURATION_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_DESTINATION_ALERT_CONFIGURATION_SUCCESS: {
            return Object.assign(Object.assign({}, state), { alert_destinations: action.payload.data.data, message: action.payload.data.message, status: action.payload.data.status, loaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.CF_CONATCT_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { contacts: action.payload.data.data });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.CF_CONATCT_LIST_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.CF_CONATCT_LIST_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_MISCELLANEOUS_SETTINGS_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, loaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_MISCELLANEOUS_SETTINGS_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.LOAD_MISCELLANEOUS_SETTINGS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { MISCELLANEOUS_SETTINGS_DATA: action.payload.data.data, message: action.payload.data.message, status: action.payload.data.status, loaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_MISCELLANEOUS_SETTINGS_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, loaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_MISCELLANEOUS_SETTINGS_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.UPDATE_MISCELLANEOUS_SETTINGS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { MISCELLANEOUS_SETTINGS_DATA: action.payload.data.data, message: action.payload.data.message, status: action.payload.data.status, loaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_MISCELLANEOUS_SETTINGS_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, loaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_MISCELLANEOUS_SETTINGS_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.RESET_MISCELLANEOUS_SETTINGS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { MISCELLANEOUS_SETTINGS_DATA: action.payload.data.data, message: action.payload.data.message, status: action.payload.data.status, loaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.ALERT_HISTORY_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, historyLoaded: false });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.ALERT_HISTORY_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.ALERT_HISTORY_SUCCESS: {
            return Object.assign(Object.assign({}, state), { alert_history: action.payload.data.data, historyLoaded: true });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.EVENT_LIST_REQUEST: {
            return Object.assign(Object.assign({}, state), { error: null, eventListLoaded: false, tableState: _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__.TableState.LOADING });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.EVENT_LIST_FAILURE: {
            return Object.assign(Object.assign({}, state), { error: action.payload, tableState: _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__.TableState.FAILURE });
        }
        case _alert_configuration_types__WEBPACK_IMPORTED_MODULE_0__.AlertConfigurationActionTypes.EVENT_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { event_list: action.payload.data.data.items, eventListLoaded: true, eventListCount: action.payload.data.data.total, tableState: _life_signals_models_ls_column_model__WEBPACK_IMPORTED_MODULE_1__.TableState.SUCCESS });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ 89530:
/*!***************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/store/alert-configuration.selector.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertConfigurations": function() { return /* binding */ getAlertConfigurations; },
/* harmony export */   "getArrhythmiaAlertConfigurations": function() { return /* binding */ getArrhythmiaAlertConfigurations; },
/* harmony export */   "getDestinationAlertConfigurations": function() { return /* binding */ getDestinationAlertConfigurations; },
/* harmony export */   "getAlertConfigurationError": function() { return /* binding */ getAlertConfigurationError; },
/* harmony export */   "getAlertConfigurationStatus": function() { return /* binding */ getAlertConfigurationStatus; },
/* harmony export */   "getAlertConfigurationMessage": function() { return /* binding */ getAlertConfigurationMessage; },
/* harmony export */   "getAlertGroupId": function() { return /* binding */ getAlertGroupId; },
/* harmony export */   "getClinicalFacilityContacts": function() { return /* binding */ getClinicalFacilityContacts; },
/* harmony export */   "getMiscellaneousSettings": function() { return /* binding */ getMiscellaneousSettings; },
/* harmony export */   "getMiscellaneousError": function() { return /* binding */ getMiscellaneousError; },
/* harmony export */   "getMiscellaneousStatus": function() { return /* binding */ getMiscellaneousStatus; },
/* harmony export */   "getMiscellaneousMessage": function() { return /* binding */ getMiscellaneousMessage; },
/* harmony export */   "getLoaderStatus": function() { return /* binding */ getLoaderStatus; },
/* harmony export */   "getAlertHistory": function() { return /* binding */ getAlertHistory; },
/* harmony export */   "getAlertHistoryLoader": function() { return /* binding */ getAlertHistoryLoader; },
/* harmony export */   "getEventList": function() { return /* binding */ getEventList; },
/* harmony export */   "getEventListLoader": function() { return /* binding */ getEventListLoader; },
/* harmony export */   "getEventListCount": function() { return /* binding */ getEventListCount; },
/* harmony export */   "getTableState": function() { return /* binding */ getTableState; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _alert_configuration_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-configuration.reducer */ 20597);


const getAlertConfigurationsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_alert_configuration_reducer__WEBPACK_IMPORTED_MODULE_0__.patientAlertConfigurationKey);
const getAlertConfigurations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state === null || state === void 0 ? void 0 : state.alert_configurations);
const getArrhythmiaAlertConfigurations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state === null || state === void 0 ? void 0 : state.arrhythmiaConfigurations);
const getDestinationAlertConfigurations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state === null || state === void 0 ? void 0 : state.alert_destinations);
const getAlertConfigurationError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state.error);
const getAlertConfigurationStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state.status);
const getAlertConfigurationMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state.message);
const getAlertGroupId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state === null || state === void 0 ? void 0 : state.groupIdSelected);
const getClinicalFacilityContacts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state === null || state === void 0 ? void 0 : state.contacts);
const getMiscellaneousSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.MISCELLANEOUS_SETTINGS_DATA);
const getMiscellaneousError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state.error);
const getMiscellaneousStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state.status);
const getMiscellaneousMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state.message);
const getLoaderStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, (state) => state === null || state === void 0 ? void 0 : state.loaded);
const getAlertHistory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.alert_history);
const getAlertHistoryLoader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.historyLoaded);
const getEventList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.event_list);
const getEventListLoader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.eventListLoaded);
const getEventListCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.eventListCount);
const getTableState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAlertConfigurationsState, state => state === null || state === void 0 ? void 0 : state.tableState);


/***/ }),

/***/ 55737:
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/store/alert-configuration.types.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertConfigurationActionTypes": function() { return /* binding */ AlertConfigurationActionTypes; }
/* harmony export */ });
var AlertConfigurationActionTypes;
(function (AlertConfigurationActionTypes) {
    AlertConfigurationActionTypes["LOAD_ALERT_CONFIGURATION_REQUEST"] = "[ALERTSCONFIGURATION] Load alert configuration request";
    AlertConfigurationActionTypes["LOAD_ALERT_CONFIGURATION_FAILURE"] = "[ALERTSCONFIGURATION] Load alert configuration Failure";
    AlertConfigurationActionTypes["LOAD_ALERT_CONFIGURATION_SUCCESS"] = "[ALERTSCONFIGURATION] Load alert configuration Success";
    AlertConfigurationActionTypes["LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_REQUEST"] = "[ARRHYTHMIAALERTSCONFIGURATION] Arrhythmia load alert configuration request";
    AlertConfigurationActionTypes["LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_FAILURE"] = "[ARRHYTHMIAALERTSCONFIGURATION] Arrhythmia load alert configuration Failure";
    AlertConfigurationActionTypes["LOAD_ARRHYTHMIA_ALERT_CONFIGURATION_SUCCESS"] = "[ARRHYTHMIAALERTSCONFIGURATION] Arrhythmia load alert configuration Success";
    AlertConfigurationActionTypes["UPDATE_ALERT_CONFIGURATION_REQUEST"] = "[ALERTSCONFIGURATION] Update alert configuration request";
    AlertConfigurationActionTypes["UPDATE_ALERT_CONFIGURATION_FAILURE"] = "[ALERTSCONFIGURATION] Update alert configuration Failure";
    AlertConfigurationActionTypes["UPDATE_ALERT_CONFIGURATION_SUCCESS"] = "[ALERTSCONFIGURATION] Update alert configuration Success";
    AlertConfigurationActionTypes["RESET_ALERT_CONFIGURATION_REQUEST"] = "[ALERTSCONFIGURATION] Reset alert configuration request";
    AlertConfigurationActionTypes["RESET_ALERT_CONFIGURATION_FAILURE"] = "[ALERTSCONFIGURATION] Reset alert configuration Failure";
    AlertConfigurationActionTypes["RESET_ALERT_CONFIGURATION_SUCCESS"] = "[ALERTSCONFIGURATION] Reset alert configuration Success";
    AlertConfigurationActionTypes["LOAD_DESTINATION_ALERT_CONFIGURATION_SUCCESS"] = "[ALERTSCONFIGURATION] Load Destination Alert Configuration Success";
    AlertConfigurationActionTypes["LOAD_DESTINATION_ALERT_CONFIGURATION_REQUEST"] = "[ALERTSCONFIGURATION] Load Destination Alert Configuration Request";
    AlertConfigurationActionTypes["LOAD_DESTINATION_ALERT_CONFIGURATION_FAILURE"] = "[ALERTSCONFIGURATION] Load Destination Alert Configuration Failure";
    AlertConfigurationActionTypes["CF_CONATCT_LIST_REQUEST"] = "[ALERTSCONFIGURATION] CF Contact list Request";
    AlertConfigurationActionTypes["CF_CONATCT_LIST_FAILURE"] = "[ALERTSCONFIGURATION] CF Contact list Failure";
    AlertConfigurationActionTypes["CF_CONATCT_LIST_SUCCESS"] = "[ALERTSCONFIGURATION] CF Contact list Success";
    AlertConfigurationActionTypes["LOAD_MISCELLANEOUS_SETTINGS_REQUEST"] = "[MISCELLANEOUSSETTINGS] Load miscellaneous settings request";
    AlertConfigurationActionTypes["LOAD_MISCELLANEOUS_SETTINGS_FAILURE"] = "[MISCELLANEOUSSETTINGS] Load miscellaneous settings Failure";
    AlertConfigurationActionTypes["LOAD_MISCELLANEOUS_SETTINGS_SUCCESS"] = "[MISCELLANEOUSSETTINGS] Load miscellaneous settings Success";
    AlertConfigurationActionTypes["UPDATE_MISCELLANEOUS_SETTINGS_REQUEST"] = "[MISCELLANEOUSSETTINGS] Update miscellaneous settings request";
    AlertConfigurationActionTypes["UPDATE_MISCELLANEOUS_SETTINGS_FAILURE"] = "[MISCELLANEOUSSETTINGS] Update miscellaneous settings Failure";
    AlertConfigurationActionTypes["UPDATE_MISCELLANEOUS_SETTINGS_SUCCESS"] = "[MISCELLANEOUSSETTINGS] Update miscellaneous settings Success";
    AlertConfigurationActionTypes["RESET_MISCELLANEOUS_SETTINGS_REQUEST"] = "[MISCELLANEOUSSETTINGS] Reset miscellaneous settings request";
    AlertConfigurationActionTypes["RESET_MISCELLANEOUS_SETTINGS_FAILURE"] = "[MISCELLANEOUSSETTINGS] Reset miscellaneous settings Failure";
    AlertConfigurationActionTypes["RESET_MISCELLANEOUS_SETTINGS_SUCCESS"] = "[MISCELLANEOUSSETTINGS] Reset miscellaneous settings Success";
    AlertConfigurationActionTypes["ALERT_HISTORY_REQUEST"] = "[ALERT HISTORY] Alert History Request";
    AlertConfigurationActionTypes["ALERT_HISTORY_SUCCESS"] = "[ALERT HISTORY] Alert History Success";
    AlertConfigurationActionTypes["ALERT_HISTORY_FAILURE"] = "[ALERT HISTORY] Alert History Failure";
    AlertConfigurationActionTypes["EVENT_LIST_REQUEST"] = "[EVENT LIST] Event List Request";
    AlertConfigurationActionTypes["EVENT_LIST_SUCCESS"] = "[EVENT LIST] Event List Success";
    AlertConfigurationActionTypes["EVENT_LIST_FAILURE"] = "[EVENT LIST] Event List Failure";
})(AlertConfigurationActionTypes || (AlertConfigurationActionTypes = {}));


/***/ }),

/***/ 95237:
/*!****************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/store/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertConfigurationStoreActions": function() { return /* reexport module object */ _alert_configuration_actions__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "AlertConfigurationStoreSelectors": function() { return /* reexport module object */ _alert_configuration_selector__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "AlertConfigurationStoreState": function() { return /* reexport module object */ _alert_configuration_reducer__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "AlertConfigurationModels": function() { return /* reexport module object */ _alert_configuration_models__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "AlertConfigurationActionTypes": function() { return /* reexport module object */ _alert_configuration_types__WEBPACK_IMPORTED_MODULE_4__; }
/* harmony export */ });
/* harmony import */ var _alert_configuration_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-configuration.actions */ 27776);
/* harmony import */ var _alert_configuration_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-configuration.selector */ 89530);
/* harmony import */ var _alert_configuration_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-configuration.reducer */ 20597);
/* harmony import */ var _alert_configuration_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-configuration.models */ 99440);
/* harmony import */ var _alert_configuration_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-configuration.types */ 55737);








/***/ }),

/***/ 19447:
/*!************************************************************************************************!*\
  !*** ./src/app/dialogs/notifications-component/technical-alerts/technical-alerts.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalAlertsComponent": function() { return /* binding */ TechnicalAlertsComponent; }
/* harmony export */ });
/* harmony import */ var C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 80151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/helpers */ 15585);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ 95237);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _services_user_preference_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/user-preference.service */ 43909);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/common.service */ 5620);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _services_backendapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/backendapi.service */ 68493);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/authentication.service */ 7053);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/snackbar.service */ 45832);
/* harmony import */ var _services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/alert-configuration.service */ 26430);
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../patient-details/patient-details.component */ 67138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../life-signals/_components/ls-table/ls-table.component */ 16743);
/* harmony import */ var _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../life-signals/_directives/ls-widget-name.directive */ 19861);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



























function TechnicalAlertsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function TechnicalAlertsComponent_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TechnicalAlertsComponent_div_3_ng_template_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const config_r8 = restoredCtx.$implicit;
      return config_r8.Enabled = $event;
    })("change", function TechnicalAlertsComponent_div_3_ng_template_2_Template_mat_slide_toggle_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const config_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r11.toggle(config_r8 == null ? null : config_r8.index);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", config_r8.Enabled)("disabled", !ctx_r3.isEditAccess);
  }
}

function TechnicalAlertsComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const config_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", config_r12.alert, " ");
  }
}

function TechnicalAlertsComponent_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "alert_config_module.acknowledge"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 4, "alert_config_module.unacknowledge"), " ");
  }
}

function TechnicalAlertsComponent_div_3_ng_template_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const technicalAlertConfig_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", technicalAlertConfig_r14.Frequency_Ack, " ", technicalAlertConfig_r14.units !== "Mins" ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "alert_config_module.mins") : technicalAlertConfig_r14.units, " ");
  }
}

function TechnicalAlertsComponent_div_3_ng_template_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const technicalAlertConfig_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", technicalAlertConfig_r14.Frequency_UnAck, " ", technicalAlertConfig_r14.units !== "Mins" ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "alert_config_module.mins") : technicalAlertConfig_r14.units, " ");
  }
}

function TechnicalAlertsComponent_div_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, TechnicalAlertsComponent_div_3_ng_template_5_div_3_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, TechnicalAlertsComponent_div_3_ng_template_5_div_6_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const technicalAlertConfig_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r6.editAlertFrequency[technicalAlertConfig_r14 == null ? null : technicalAlertConfig_r14.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r6.editAlertFrequencyUnAck[technicalAlertConfig_r14 == null ? null : technicalAlertConfig_r14.index]);
  }
}

function TechnicalAlertsComponent_div_3_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](2, 1, ctx_r20.masterData.modifiedDateTime + "+0000", "MMM dd, yyyy " + ctx_r20.timeFmt, ctx_r20.timeZone), " ");
  }
}

function TechnicalAlertsComponent_div_3_ng_template_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("by ", ctx_r21.masterData.modifiedBy, "");
  }
}

function TechnicalAlertsComponent_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TechnicalAlertsComponent_div_3_ng_template_6_span_0_Template, 3, 5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, TechnicalAlertsComponent_div_3_ng_template_6_span_2_Template, 2, 1, "span", 22);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.masterData == null ? null : ctx_r7.masterData.modifiedDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r7.isBlank(ctx_r7.masterData.modifiedBy));
  }
}

function TechnicalAlertsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ls-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("configChange", function TechnicalAlertsComponent_div_3_Template_ls_table_configChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r22.config = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, TechnicalAlertsComponent_div_3_ng_template_2_Template, 2, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, TechnicalAlertsComponent_div_3_ng_template_3_Template, 1, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, TechnicalAlertsComponent_div_3_ng_template_4_Template, 7, 6, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, TechnicalAlertsComponent_div_3_ng_template_5_Template, 7, 2, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, TechnicalAlertsComponent_div_3_ng_template_6_Template, 3, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r1.config)("columns", ctx_r1.columns)("data", ctx_r1.technicalAlertSettings);
  }
}

function TechnicalAlertsComponent_mat_dialog_actions_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TechnicalAlertsComponent_mat_dialog_actions_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r26.openDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "alert_config_module.reset_to_default"));
  }
}

function TechnicalAlertsComponent_mat_dialog_actions_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TechnicalAlertsComponent_mat_dialog_actions_4_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r28.handleAlertSettingsEditCancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TechnicalAlertsComponent_mat_dialog_actions_4_ng_template_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r30.handleAlertSettingsSave();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "alert_config_module.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 4, "alert_config_module.save"));
  }
}

function TechnicalAlertsComponent_mat_dialog_actions_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-dialog-actions", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, TechnicalAlertsComponent_mat_dialog_actions_4_button_2_Template, 6, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, TechnicalAlertsComponent_mat_dialog_actions_4_ng_template_4_Template, 9, 6, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isShowResetButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.showActionButtons);
  }
}

class TechnicalAlertsComponent {
  constructor(userPreference, commonService, dialog, backendApiService, autheticationService, store$, snackbar, alertService) {
    this.userPreference = userPreference;
    this.commonService = commonService;
    this.dialog = dialog;
    this.backendApiService = backendApiService;
    this.autheticationService = autheticationService;
    this.store$ = store$;
    this.snackbar = snackbar;
    this.alertService = alertService;
    this.subscriptions = [];
    this.reloadData = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter(true);
    this.config = {
      id: "alert_config_module",
      rowSelectEnabled: false,
      translate: true,
      translateKey: "alert_config_module",
      showExtraHeader: true
    };
    this.columns = [{
      id: "enabled",
      label: "",
      sortable: false,
      style: "width: 70px"
    }, {
      id: "alerts",
      sortable: false,
      headerClass: ["align-left"],
      cellClass: ["fw-700"],
      style: "min-width: 250px"
    }, {
      id: "alert_freq",
      sortable: false,
      headerClass: ["align-center"],
      cellClass: ["text-center"],
      extraHeaderClass: ["text-start"] //style: "width: 360px;",

    }, {
      id: "modified",
      sortable: false,
      headerClass: ["align-left"],
      //style: "min-width: 200px",
      cellClass: ["text-start"]
    }];
    this.editAlertFrequency = [false];
    this.editAlertFrequencyUnAck = [false];
    this.editDelaytime = [false];
    this.technicalAlertAccess = src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles.ALERT_CONFIGURATIONS.TECHNICAL_ALERT;
    this.isEditAccess = false;
    this.selectedTab = "parameter";
    this.showActionButtons = false;
    this.isShowResetButton = false;
    this.technicalAlert = src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.technicalAlertItems;
    this.masterData = {};
    this.technicalAlertSettings = [];
    this.technicalAlertSettingsCopy = [];
    this.cfId = "";
    this.alertId = null;
    this.GroupId = "";
    this.alertSettings = {};
    this.accessRoles = src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.uiAccessRoles;
    this.clinicalFacilityGroupId = null;
    this.patientId = "PATALDRT1";
    this.technicalAlertMinMax = src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.alertConfigMinMaxValues.technicalAlert;
    this.timeFmt = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.customization.timeFormat;
    this.loader = true;

    this.getSettings = () => {
      let patientId = encodeURIComponent(this.patientId);
      let url = `alert-settings/patient/${this.cfId}/${patientId}`;
      this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreActions.loadAlertConfigurationRequestAction({
        url
      }));
      this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationError).subscribe(data => {
        var _a;

        this.error = data;

        if (((_a = data === null || data === void 0 ? void 0 : data.error) === null || _a === void 0 ? void 0 : _a.errorMessage) === 'ACCESS_DENIED') {
          this.snackbar.openCustomSnackBar("alert_config_module.messages.access_denied", 'bottom', 'center', true);
        }
      });
    };
  }

  ngOnInit() {
    this.roles = this.autheticationService.getRoles();
    this.timeZone = this.userPreference.getUserTimeZone();
    this.cfId = this.autheticationService.getCfId();
    this.patientId = this.patientData.patientId;
    this.alertSettings$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurations);
    this.alertSettingsStatus$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationStatus);
    this.alertSettingsMessage$ = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getAlertConfigurationMessage);
    this.loaderSubscription = this.store$.select(_store__WEBPACK_IMPORTED_MODULE_2__.AlertConfigurationStoreSelectors.getLoaderStatus).subscribe(loaded => {
      this.loader = !loaded;
    });
    this.getSettings();
    this.alertSettings$.subscribe(data => {
      //this.loader = false;
      this.lastUpdated = new Date().toUTCString();
      this.masterData = Object.assign({}, data);
      this.masterData.GroupId = "";
      this.masterData.PatientId = this.patientId;
      this.masterData.FacilityId = this.cfId;
      this.masterData.AlertId = "";
      const alerts = [];
      this.technicalAlert.forEach((element, i) => {
        const settings = data.Setting.Param.TechParam[element.key];

        if (settings) {
          alerts.push(Object.assign(Object.assign(Object.assign({}, settings), this.masterData.Setting.Common.TechCommon[element.key]), {
            alert: element.alerts,
            unit: element.unit,
            units: element.units,
            key: element.key,
            index: i
          }));
        }
      });
      this.technicalAlertSettings = alerts;
      this.technicalAlertSettingsCopy = JSON.parse(JSON.stringify(alerts));
    });
    this.commonService.settingsAlertActionButtonsShow.subscribe(isShow => {
      if (this.showActionButtons !== isShow) {
        this.showActionButtons = isShow;
      }
    });
    this.alertSettings$.subscribe(data => {
      var _a;

      this.commonService.setSettingsAlertActionButtons(false);
      this.commonService.setTechnicalAlertEditSubmit(false);
      this.hideTechnicalAlertEdit();
      this.alertSettings = Object.assign({}, data);
      this.alertId = this.alertSettings.AlertId;
      this.isShowResetButton = (_a = this.alertSettings) === null || _a === void 0 ? void 0 : _a.IsForPatient;
    });

    if ((0,src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.isAllowedRole)(this.technicalAlertAccess["EDIT"], this.roles)) {
      this.isEditAccess = true;
    }

    this.subscriptions.push(this.commonService.technicalAlertEditHide.subscribe(isHide => {
      if (isHide) {
        this.technicalAlertSettings = JSON.parse(JSON.stringify(this.technicalAlertSettingsCopy));
        this.hideTechnicalAlertEdit();
      }
    }));
    this.subscriptions.push(this.commonService.technicalAlertEditSubmit.subscribe(isSubmit => {
      if (isSubmit) {
        this.updateTechnicalSettings();
      }
    }));
  }

  openDialog() {
    const SaveChanges = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        body: {
          title: "shared.confirm_text",
          text: "additional_devices.confirm_reset"
        }
      },
      disableClose: true
    });
    SaveChanges.afterClosed().subscribe(data => {
      if (data) {
        this.handleFactoryReset();
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
  }

  showEditAlertFrequency(index) {
    this.editAlertFrequency[index] = true;
  }

  hideEditAlertFrequency(index) {
    this.editAlertFrequency[index] = false;
  }

  showEditAlertFrequencyUnAck(index) {
    this.editAlertFrequencyUnAck[index] = true;
  }

  hideEditAlertFrequencyUnAck(index) {
    this.editAlertFrequencyUnAck[index] = false;
  }

  showEditDelaytime(index) {
    this.editDelaytime[index] = true;
  }

  hideEditDelaytime(index) {
    this.editDelaytime[index] = false;
  } // Hide all active edit buttons


  hideTechnicalAlertEdit() {
    this.editAlertFrequency = [false];
    this.editDelaytime = [false];
    this.editAlertFrequencyUnAck = [false];
  }

  updateTechnicalSettings() {
    var _this = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      const technicalParameter = {};
      const technicalCommonParameter = {};

      _this.technicalAlertSettings.forEach(element => {
        technicalParameter[element.key] = {
          Enabled: element.Enabled
        };
        technicalCommonParameter[element.key] = {
          CondDelay: parseInt(element.CondDelay),
          Frequency_UnAck: parseInt(element.Frequency_UnAck),
          Frequency_Ack: parseInt(element.Frequency_Ack)
        };
      });

      const payload = Object.assign({}, _this.masterData);
      payload["Setting"]["Param"]["TechParam"] = technicalParameter;
      payload.Setting = (payload === null || payload === void 0 ? void 0 : payload.Setting) || {};
      payload.Setting.Common = ((_a = payload.Setting) === null || _a === void 0 ? void 0 : _a.Common) || {};
      payload.Setting.Common.TechCommon = technicalCommonParameter;
      delete payload["auditloginfotype"];
      let patientId = encodeURIComponent(_this.patientId);
      let url = `alert-settings/patient-edit/${_this.cfId}/${patientId}`;

      try {
        const resp = yield _this.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.dataApiUrl + url, payload).toPromise();

        if (resp.status === "OK") {
          _this.reloadData.emit();

          _this.snackbar.openCustomSnackBar("Settings has been updated successfully", 'bottom', 'center');

          _this.commonService.setSettingsAlertActionButtons(false);

          _this.commonService.setTechnicalAlertEditSubmit(false);

          _this.hideTechnicalAlertEdit();

          _this.getSettings();
        }
      } catch (error) {}
    })();
  } // Show and Hide Table Edit fields


  showHideEdit(index, type) {
    switch (type) {
      case "alertFrequencyACK":
        this.editAlertFrequency[index] = !this.editAlertFrequency[index];
        break;

      case "alertFrequencyNACK":
        this.editAlertFrequencyUnAck[index] = !this.editAlertFrequencyUnAck[index];
        break;

      case "delay":
        this.editDelaytime[index] = !this.editDelaytime[index];
        break;

      default:
        break;
    }
  }

  toggle(i) {
    this.editAlertFrequency[i] = false;
    this.editDelaytime[i] = false;
    this.editAlertFrequencyUnAck[i] = false;
    this.updated();
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsEditCancel() {
    this.commonService.setSettingsAlertActionButtons(false);
    this.commonService.setTechnicalAlertEditSubmit(false);
    this.hideTechnicalAlertEdit();
    this.technicalAlertSettings = JSON.parse(JSON.stringify(this.technicalAlertSettingsCopy));
  } // Handle Alert Settings Edit Cancel Button


  handleAlertSettingsSave() {
    this.updateTechnicalSettings();
  } // Handle alert setting factory reset action


  handleFactoryReset() {
    var _this2 = this;

    return (0,C_work_projects_ECGVue_test_XVue_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const patientId = encodeURIComponent(_this2.patientId);
      const url = `alert-settings/patient-reset/${_this2.cfId}/${patientId}/${_this2.alertId}`;

      try {
        const resp = yield _this2.backendApiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.dataApiUrl + url, {}).toPromise();

        if (resp.status === "OK") {
          _this2.snackbar.openCustomSnackBar("alert_config_module.reset_success", 'bottom', 'center', true);

          _this2.getSettings();
        }
      } catch (error) {
        _this2.snackbar.openCustomSnackBar("alert_config_module.reset_error", 'bottom', 'center', true);
      }
    })();
  } // input filed validation


  technicalParamInputChanged(index, key, minMax) {
    const keyMapping = {
      Frequency_Ack: "invalid_alertfreq_ack",
      Frequency_UnAck: "invalid_alertfreq_unack",
      CondDelay: "invalid_delay_time"
    };
    this.updated();

    if (this.technicalAlertSettings[index][key] < minMax["MIN"][key] || this.technicalAlertSettings[index][key] > minMax["MAX"][key]) {
      this.technicalAlertSettings[index][key] = this.technicalAlertSettingsCopy[index][key];
      let range = `${minMax["MIN"][key]} & ${minMax["MAX"][key]}`;
      this.snackbar.openCustomSnackBar("alert_config_module.messages.incorrect_alertfreq_ack", 'bottom', 'center', true, '', range);
      this.commonService.setSettingsAlertActionButtons(false);
    }

    if (key === "Frequency_Ack") {
      if (this.technicalAlertSettings[index][key] <= this.technicalAlertSettings[index]["Frequency_UnAck"]) {
        this.technicalAlertSettings[index][key] = this.technicalAlertSettingsCopy[index][key];
        this.snackbar.openCustomSnackBar("alert_config_module.messages.incorrect_alertfreq_ack", 'bottom', 'center', true);
        this.commonService.setSettingsAlertActionButtons(false);
      }
    }

    if (key === "Frequency_UnAck") {
      if (this.technicalAlertSettings[index][key] >= this.technicalAlertSettings[index]["Frequency_Ack"]) {
        this.technicalAlertSettings[index][key] = this.technicalAlertSettingsCopy[index][key];
        this.snackbar.openCustomSnackBar("alert_config_module.messages.incorrect_alertfreq_unack", 'bottom', 'center', true);
        this.commonService.setSettingsAlertActionButtons(false);
      }
    }
  }

  isBlank(str) {
    return !str || 0 === str.length || str === " " || str === "null" || str === "undefined";
  }

  numericsOnly(control, event) {
    let numericsOnlyPattern = /^[0-9_]$/;
    let key = event.key;

    if (numericsOnlyPattern.test(key)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  updated() {
    if (JSON.stringify(this.technicalAlertSettings) !== JSON.stringify(this.technicalAlertSettingsCopy)) {
      this.commonService.setSettingsAlertActionButtons(true);
    } else {
      this.commonService.setSettingsAlertActionButtons(false);
    }
  }

}

TechnicalAlertsComponent.ɵfac = function TechnicalAlertsComponent_Factory(t) {
  return new (t || TechnicalAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_user_preference_service__WEBPACK_IMPORTED_MODULE_5__.UserPreferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_backendapi_service__WEBPACK_IMPORTED_MODULE_7__.BackendApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_alert_configuration_service__WEBPACK_IMPORTED_MODULE_10__.AlertConfigurationsService));
};

TechnicalAlertsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: TechnicalAlertsComponent,
  selectors: [["app-technical-alerts"]],
  inputs: {
    patientData: "patientData"
  },
  outputs: {
    reloadData: "reloadData"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "container-fuild"], [3, "patientData", "updated"], ["class", "loading-indicator", 4, "ngIf"], ["class", "inside-div head-border  comman-table-users bg-thead-color", 4, "ngIf"], ["class", "row px-1", 4, "ngIf"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "inside-div", "head-border", "comman-table-users", "bg-thead-color"], [1, "fixed-header-relative", 3, "config", "columns", "data", "configChange"], ["lsWidgetName", "enabled"], ["lsWidgetName", "alerts"], ["lsWidgetName", "alert_freqExtraHeader"], ["lsWidgetName", "alert_freq"], ["lsWidgetName", "modified"], [1, "d-flex", "align-items-center"], [1, "ms-1", "me-2", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "d-flex", "ack-column", "align-items-center", "justify-content-center"], [1, "d-flex", "ack-column", "justify-content-center", "align-items-center"], [1, "nowrap-align", "d-flex", "justify-content-center", "align-items-center"], ["class", "text-value align-items-center justify-content-start", 4, "ngIf"], [1, "text-value", "align-items-center", "justify-content-start"], [4, "ngIf"], [1, "row", "px-1"], [1, "col-lg-6"], ["mat-flat-button", "", "class", "btn reset_btn_bg mb-2 mb-md-0 px-2", 3, "click", 4, "ngIf"], [1, "col-lg-6", "text-end"], [3, "ngIf"], ["mat-flat-button", "", 1, "btn", "reset_btn_bg", "mb-2", "mb-md-0", "px-2", 3, "click"], [1, "fw-normal"], [1, "btn-clr", "ps-1"], ["mat-flat-button", "", "color", "warn", 1, "fill-btn", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "fill-btn", 3, "click"]],
  template: function TechnicalAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-patient-details", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, TechnicalAlertsComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, TechnicalAlertsComponent_div_3_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, TechnicalAlertsComponent_mat_dialog_actions_4_Template, 5, 2, "mat-dialog-actions", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("patientData", ctx.patientData)("updated", ctx.lastUpdated);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loader && ctx.isEditAccess);
    }
  },
  directives: [_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_11__.PatientDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _life_signals_components_ls_table_ls_table_component__WEBPACK_IMPORTED_MODULE_12__.LsTableComponent, _life_signals_directives_ls_widget_name_directive__WEBPACK_IMPORTED_MODULE_13__.LsWidgetNameDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__.NativeElementInjectorDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".text-input-box[_ngcontent-%COMP%] {\n  color: black;\n  border-radius: 0.25rem;\n  border-color: #fff;\n  width: 55px;\n  text-align: center;\n  background-color: #fff;\n}\n\n.reset_btn_bg[_ngcontent-%COMP%] {\n  background: #42709a;\n}\n\n.alert-dialog-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.search-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsInRlY2huaWNhbC1hbGVydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ25OQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCRExNO0VDTU4sV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JEUk07QUNxQlI7QUFYQTs7RUFBQTtBQUlBO0VBQ0UsbUJEeUZhO0FDNUVmO0FBWEE7OztFQUFBO0FBSUE7RUFBc0IsVUFBQTtBQWV0QjtBQWJFO0VBQ0UseUJBQUE7QUFnQkoiLCJmaWxlIjoidGVjaG5pY2FsLWFsZXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuLypmb250IGNvbG9yIGFuZCBmYW1pbHkgKi9cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4O1xuJGJhc2UtZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsXG4gICAgXCJNdWxpLVJlZ3VsYXJcIixcbiAgICBzYW5zLXNlcmlmO1xuJGJhc2UtZm9udC1jb2xvcjogJHdoaXRlO1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xMjogMTJweDtcbiRzaXplLTI0OiAyNHB4O1xuJHNpemUtMTY6IDE2cHg7XG4kc2l6ZS0xMDogMTBweDtcbiRzaXplLTU6IDVweDtcbiRzaXplLTY6IDZweDtcbiRzaXplLTIwOiAyMHB4O1xuJHNpemUtMTg6IDE4cHg7XG4kc2l6ZS0xNTogMTVweDtcbiRzaXplLTI3OiAyN3B4O1xuJGNvbmZpcm0tZGlhbG9nLXdpZHRoOiA3NTBweDtcbiRlcnIwcl90ZXh0X2NvbG9yOiAjZGMzNTQ1O1xuJG9wYWNpdHktd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NCk7XG4kb3BhY2l0eS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiRyZWQtZm9udC1jb2xvcjogI2ZmNGM0YztcbiRtZWRpdW0tcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kbG93LXByaW9yaXR5LWNvbG9yOiAjRkFGRjAwO1xuJGFtYmVyLWZvbnQtY29sb3I6ICNGRkM3MDA7XG4kZ3JlZW4tZm9udC1jb2xvcjogIzE3ZDQ2ODtcbiRkYXJrLWNvbG9yLW9wdGlvbjogIzA0Mjk0YTtcbiR0YWJsZS10ci1jb2xvcjogcmdiKDQsIDYwLCAxMDkpO1xuJHRhYmxlLXNwYWNpbmdfY29sb3I6ICMwNDI5NGE7XG4kcC1jb2xvcjogIzAwNDI3Y2EzO1xuJHJvdy1kaXNhYmxlZDogcmdiKDQsIDYwLCAxMDksIDAuNik7XG4kd2hpdGUtdGV4dDogI2YyZjJmMjtcbiRicm93bi1jb2xvcjogIzg3N2Q3ZDtcbiRhcnJvdy1jb2xvcjogIzdjOGZhMDtcbiRsYWJlbC1jb2xvcjogIzRlYTJlZjtcbiRyZXF1cmllZC1jb2xvcjogI2ZmNjU2NTtcbiRibGFjay1jb2xvcjogJGJsYWNrO1xuJGdyYXktY29sb3I6ICMzMzMzMzM7XG4kdGltZS1jb2xvcjogIzY3YTVkMjtcbiRjbG9zZS1jb2xvcjogI2FmYWRhZDtcbiRzcG8yLWNvbG9yOiAjMDBmMGZmO1xuJGhlYXJ0cmF0ZS1jb2xvcjogIzAwZmY2ZDtcbiR5ZWxsb3ctY29sb3I6ICNmYWZmMDA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI0VCRUJFQjtcbiRzZXR0aW5nLWNvbG9yOiAjZTFlMWUxO1xuJGNvbG9ybmV3LXllbGxvdzogI2ZmZjYxODtcbiRzdG9wLWJ1dHRvbi1jb2xvcjogI2NhNDI0MjtcbiRld3MtY29sb3I6ICNmZjU4NDE7XG4kYnAtY29sb3I6ICNmZjk4M2E7XG4kY2FuY2VsLWNvbG9yOiAjZmY0NDQ0O1xuJGhpc3RvcnktbGFiZWwtY29sb3I6ICNhN2M3ZTQ7XG4kY29sb3ItY29kZS1uZXc6ICNjNWZmMjA7XG4kcGluay1jb2xvcjogI2M2MDA1ZjtcbiRncmVlbi1jb2xvcjogIzNmZmY5MTtcbiRibHVlLWNvbG9yOiAjMWZjMGYzO1xuJGNvbG9yZ3JheTogIzY2NjY2NjtcbiRyZWQtbGFiZWwtY29sb3I6ICNmNDQzMzY7XG4kc2VsZWN0LWxhYmVsLWNvbG9yOiAjMDIzZjc0O1xuJHNlbGVjdC1vcHRpb24tY29sb3I6ICMyMzU5ODc7XG4kc2VsZWN0LW9wdGlvbi1iZzogI0UwRUFGMjtcbiRzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJnOiAkd2hpdGU7XG4kZ3JheS1jb2xvci10aW1lOiAjQzRDNEM0O1xuJGJsdWUtY29sb3ItZ3JvdXA6IzFmYzBmMztcbiR0cmVuZC10b3BDb2xvcjojMDQzQjZDO1xuJGV4cGlyZWQtdml0YWw6ICNhOWE5YTk7XG4kaW5hY3RpdmUtY29sb3I6IzE4NjJBMTtcbiRzdGF0dXMtY29sb3ItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiRzdGF0dXMtY29sb3ItYm9yZGVyOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuLypiYWNrZ3JvdW5kIGNvbG9yICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjMDA1NDlmO1xuJGJnLXByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJnLXdoaXRlLWNvbG9yOiAkd2hpdGU7XG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwYmJlZjtcbiRiZy10b3BiYXItY29sb3I6IHJnYmEoMCwgNjYsIDEyNCwgMC42NCk7XG4kYmcteWVsbG93LWNvbG9yOiAjZjJjZDRiO1xuJGJnLWJ1dHRvbi1jb2xvcjogIzAwNTQ5ZjtcbiRiZy1idXR0b24taG92ZXI6ICRiZy1wcmltYXJ5LWNvbG9yO1xuJGJnLXRhYmxlLXJvdy1jb2xvcjogIzA0M2M2ZDtcbiRiZy1zZWFyY2gtY29sb3I6IHJnYmEoMTIzLCAxOTMsIDI1NSwgMC4xNik7XG4kYmctZGlzYWJsZS1jb2xvcjogIzIyNGM3MjtcbiRiZy10YWJsZS1yb3ctYWN0aXZlLWNvbG9yOiAjMWI2ZGI2O1xuJG1vZGFsLWRhaWxvZy1oZWFkc3RyaXAtY29sb3I6ICMxYzQ4NzE7XG4kYmctaW5wdXQtY29sb3I6ICNlZWVlZWU7XG4kYmctYnV0dG9uLWxpZ2h0LXJlZC1jb2xvcjogI2NkNmQ2ZDtcbiRsaWdodC1ibHVlLWJnOiAjZTBlYWYyO1xuJGJnLXNsaWRlci1iYXI6ICMwNzI1NDA7XG4kYmctaW5mby1jb2xvcjogIzA5NDc4ZTtcbiRiZy1kYXNoYm9hcmQtY29sb3I6ICMwMDQyN2M7XG4kYmctZ3JpZC1jb2xvcjogIzAzMzU2MjtcbiRiZy1jYXJkLWNvbG9yOiAjMDYzMDU2O1xuJGJnLXNpZ25hbC1jb2xvcjogIzA2Mjg0NztcbiRiZy1jb2xvci1tYXRjaDogIzAzMkQ1MjtcbiR0b3BiYXQtc3RyaXAtY29sb3I6ICMyNTQ4Njg7XG4kYnV0dG9uLWNvbG9yLWJnOiAjMDU0NjgwO1xuJGJnLW1hdGNhcmQtY29sb3I6ICMwNDNiNmQ7XG4kYmctYmFnZS1jb2xvcjogI2EwMzQzNDtcbiRiZy1tYW5hZ2Utc3RyaXAtY29sb3I6ICMwNDJmNTU7XG4kdGFiLWJnLWNvbG9yOiAjMDQzMTU4O1xuJGJnLXJlc2V0LWJ0bjogIzQyNzA5YTtcbiR0ci1hY3RpdmUtYmctY29sb3I6ICMxYjZkYjY7XG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiRiZy10YWJsZS1yb3c6ICMwNDNjNmQ7XG4kYmctbGVmdHBhbmVsLWNhcmQ6IzA1MzU2MTtcbiRiZy1jYXJkYmxvY2tlci1ib3g6IzAwMzE1RDtcbiRib3JkZXItbGluZS1jb2xvcjojNzBGNkZGO1xuXG5cbi8qIFRvZ2dsZSAqL1xuXG4kdG9nZ2xlLWJ1dHRvbi1iZy1vbjogIzY2YTVkZDtcbiR0b2dnbGUtYnV0dG9uLWJnLW9mZjogIzE4NjJhMjtcbiR0b2dnbGUtYnV0dG9uLXJvdW5kLW9mZjogIzA4MmQ0ZTtcblxuLyogVGFibGUgKi9cblxuJHRhYmxlLXRoZWFkLWJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRiZy1leHBhbmRlZDogIzAwMjEzZTtcbiRiZy10cmFuc3BhcmVudC1yZ2JhOiByZ2JhKDAsIDg0LCAxNTksIDAuMyk7XG5cbi8qIEZvbnQgd2VpZ2h0ICovXG5cbiRmb250LXdlaWdodC02MDA6IDYwMDtcbiRmb250LXdlaWdodC03MDA6IDcwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRmb250LXdlaWdodC00MDA6IDQwMDtcblxuLypib3JkZXItbGluZSAqL1xuXG4kYm9yZGVyLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjY0KTtcbiRib3JkZXItc2VhcmNoOiAxcHggc29saWQgJGJvcmRlci1zZWFyY2gtY29sb3I7XG4kbm9uZTogbm9uZTtcbiRib3JkZXItc2VwYXJhdGUtY29sb3I6ICNjNGM0YzQ7XG4kYm9yZGVyLWNvbG9yLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4vKmxldHRlciBzcGFjaW5nICovXG5cbiRsZXR0ZXItc3BhY2luZy1zaXplOiAwLjI1cHg7XG5cbi8qYm94IHNoYWRvdyAqL1xuXG4kYm94LXNoYWRvdy1idXR0b246IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4kYm94LXNoYWRvdy1jYXJkOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJveC1zaGFkb3ctY29sb3I6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kYm94LXNoYWRvdy1pbnNldC1hcmVhOiAycHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuJGJveC1zaGFkb3ctYXJlYTogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm94LXNoYWRvdy12YXJpYWJsZXNcbiRib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgMC4xNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3gtc2hhZG93LXZhcmlhYmxlc1xuXG4vKmxpbmUgaGVpZ2h0ICovXG5cbiRiYXNlLWxpbmUtaGVpZ2h0OiAxcmVtO1xuXG4vKiBGb250IFN0eWxlICovXG5cbiRmb250LXN0eWxlLW5vcm1hbDogbm9ybWFsO1xuLy8gYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzLWRpdmlkZTogOHB4IDhweCAwcHggMHB4O1xuJGJvcmRlci1yaWdodC1ib3R0b206IDAgOHB4IDhweCAwO1xuJGJvcmRlci10b3AtbGVmdDogOHB4IDAgMCA4cHg7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kcmdiLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kYmFja2dyb3VuZC13aGl0ZS1yZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4kcmdiLWNvbG9yLWNvZGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiRyZ2ItdHJhbnNwYXJlbnQtYmc6IHJnYmEoMCwgODQsIDE1OSwgMC40KTtcbiRyZ2Itd2Fybi1jb2xvcjogcmdiYSgyNTUsIDY4LCA2OCwgMC4xKTtcbiRyZ2JhLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyByZ2JhIGNvbG9yIHZhcmlhYmxlc1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1jb2xvci1jb2RlOiAwLjY0O1xuLy9vcGFjaXR5IGNvbG9yIHZhcmlhYmxlXG4kb3BhY2l0eS1kaXNhYmxlZDogMC42NTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcbiRiYWNrZ3JvdW5kLWdyYWRpZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiZy1zbGlkZXItYmFyIDAlLCByZ2JhKDcsIDM3LCA2NCwgMCkgNTguODYlKTtcbi8vZ3JhZGllbnQgY29sb3IgdmFyaWFibGVcblxuLyogZmlsdGVyIHNoYWRvdyAqL1xuXG4kZmlsdGVyLWRyb3BzaGFkb3c6IGRyb3Atc2hhZG93KDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNikpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJHZhbGlkYXRpb24tZXJyb3ItbWVzc2FnZS1jb2xvcjogI2ZmYTY5ZjtcblxuLyogQWxlcnQgQ29sb3JzICovXG5cbiRhbGVydC1sb3c6ICNGQUZGMDA7XG4kYWxlcnQtbWVkaXVtOiAjZmZiZjAwO1xuJGFsZXJ0LWhpZ2g6ICNGRjRDNEM7XG4kYWxlcnQtdGVjaDogIzAwRjBGRjtcbiRhbGVydC10ZXh0OiAjRkZGNjE4O1xuXG4vKiBBbGVydCAgYmFja2dyb3VuZCBDb2xvcnMgKi9cbiRiZy1hbGVydC1sb3c6ICByZ2JhKDI1MCwgMjU1LCAwLCAwLjIpO1xuJGJnLWFsZXJ0LW1lZGl1bTogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtaGlnaDogIHJnYmEoMjAyLCA2NiwgNjYsIDAuMik7XG4kYmctYWxlcnQtdGVjaDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiRhY3RpdmUtYmc6ICNGNEY2NkY7XG5cblxuLyoqKioqIE1hbmFnZSBHcm91cCBDb2xvciAqKioqKi9cbiRkZWZhdWx0LW1hbmFnZS1idXR0b246I0M1RkYyMDtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b246IHJnYmEoMTk3LCAyNTUsIDMyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xOiNDNjAwNUY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6IHJnYmEoMjQxLCA1MSwgMTQyLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0yOiNGRkJFMTU7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6IHJnYmEoMjU1LCAxOTAsIDIxLCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zOiMyNkQ4RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IHJnYmEoMzgsIDIxNiwgMjU1LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00OiM2NUM5NEM7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IHJnYmEoMTAxLCAyMDEsIDc2LCAwLjA4KTtcblxuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC01OiM5ODQ3RkY7XG4kYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6IHJnYmEoMTUyLCA3MSwgMjU1LCAwLjA4KTtcblxuXG5cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbW9kdWxlcy92YXJpYWJsZXNcIjtcblxuLnRleHQtaW5wdXQtYm94IHsgIFxuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1jb2xvcjogJHdoaXRlO1xuICB3aWR0aDogNTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG59XG4vKi5pbnNpZGUtZGl2IHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0qL1xuXG4ucmVzZXRfYnRuX2JnIHtcbiAgYmFja2dyb3VuZDogJGJnLXJlc2V0LWJ0bjtcbn1cbi8qLnRleHQtdmFsdWV7XG4gIHdpZHRoOiA2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0qL1xuLmFsZXJ0LWRpYWxvZy1jb250ZW50e3BhZGRpbmc6IDA7fVxuLnNlYXJjaC1mb3JtLWZpZWxkIHsgXG4gIGlucHV0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": function() { return /* binding */ CommonService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class CommonService {
    constructor() {
        this.hidePrameterAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.parameterAlertEditHide = this.hidePrameterAlertEdit.asObservable();
        this.hideArrhythmiaPrameterAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.arrhythmiaParameterAlertEditHide = this.hideArrhythmiaPrameterAlertEdit.asObservable();
        this.hideTechnicalAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.technicalAlertEditHide = this.hideTechnicalAlertEdit.asObservable();
        this.hidePriorityAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.priorityAlertEditHide = this.hidePriorityAlertEdit.asObservable();
        this.showSettingsAlertActionButtons = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.settingsAlertActionButtonsShow = this.showSettingsAlertActionButtons.asObservable();
        this.savePrameterAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.parameterAlertEditSubmit = this.savePrameterAlertEdit.asObservable();
        this.saveArrhythmiaPrameterAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.arrhythmiaParameterAlertEditSubmit = this.saveArrhythmiaPrameterAlertEdit.asObservable();
        this.saveTechnicalAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.technicalAlertEditSubmit = this.saveTechnicalAlertEdit.asObservable();
        this.savePriorityAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.priorityAlertEditSubmit = this.savePriorityAlertEdit.asObservable();
        this.hideDestinationAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.destinationAlertEditHide = this.hideDestinationAlertEdit.asObservable();
        this.hideNotificationAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.notificationAlertEditHide = this.hideNotificationAlertEdit.asObservable();
        this.saveNotificationAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.notificationAlertEditSubmit = this.saveNotificationAlertEdit.asObservable();
        this.saveDestinationAlertEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.destinationAlertEditSubmit = this.saveDestinationAlertEdit.asObservable();
    }
    setParameterAlertEditHide(isHide) {
        this.hidePrameterAlertEdit.next(isHide);
    }
    setArrhythmiaParameterAlertEditHide(isHide) {
        this.hidePrameterAlertEdit.next(isHide);
    }
    setTechnicalAlertEditHide(isHide) {
        this.hideTechnicalAlertEdit.next(isHide);
    }
    setPriorityAlertEditHide(isHide) {
        this.hidePriorityAlertEdit.next(isHide);
    }
    setSettingsAlertActionButtons(isShow) {
        this.showSettingsAlertActionButtons.next(isShow);
    }
    setParameterAlertEditSubmit(isSubmit) {
        this.savePrameterAlertEdit.next(isSubmit);
    }
    setArrhythmiaParameterAlertEditSubmit(isSubmit) {
        this.saveArrhythmiaPrameterAlertEdit.next(isSubmit);
    }
    setTechnicalAlertEditSubmit(isSubmit) {
        this.saveTechnicalAlertEdit.next(isSubmit);
    }
    setPriorityAlertEditSubmit(isSubmit) {
        this.savePriorityAlertEdit.next(isSubmit);
    }
    setDestinationAlertEditHide(isHide) {
        this.hideDestinationAlertEdit.next(isHide);
    }
    setNotificationAlertEditHide(isHide) {
        this.hideNotificationAlertEdit.next(isHide);
    }
    setNotificationAlertEditSubmit(isSubmit) {
        this.saveNotificationAlertEdit.next(isSubmit);
    }
    setDestinationAlertEditSubmit(isSubmit) {
        this.saveDestinationAlertEdit.next(isSubmit);
    }
    convertSecToHrs(seconds) {
        return seconds / 3600;
    }
    convertHrtoSecs(hours) {
        return hours * 3600;
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 98809:
/*!************************************************************************!*\
  !*** ./src/app/validators/custom-validator-at-least-once.validator.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "atLeastOne": function() { return /* binding */ atLeastOne; }
/* harmony export */ });
const atLeastOne = (validator, controls = null) => (group) => {
    if (!controls) {
        controls = Object.keys(group.controls);
    }
    const hasAtLeastOne = group &&
        group.controls &&
        controls.some((k) => !validator(group.controls[k]));
    return hasAtLeastOne
        ? null
        : {
            atLeastOne: true,
        };
};


/***/ })

}]);
//# sourceMappingURL=default-src_app_dialogs_notifications-component_notifications_notifications_component_ts-es2017.js.map