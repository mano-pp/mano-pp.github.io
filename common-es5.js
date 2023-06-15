(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunklife_line"] = self["webpackChunklife_line"] || []).push([["common"], {
    /***/
    1973:
    /*!**********************************************!*\
      !*** ./src/app/interfaces/user.interface.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserErrors": function UserErrors() {
          return (
            /* binding */
            _UserErrors
          );
        }
        /* harmony export */

      });

      var _UserErrors;

      (function (UserErrors) {
        UserErrors["EMAIL_OR_PHONE_ALREADY_EXIST"] = "EMAIL_OR_PHONE_ALREADY_EXIST";
      })(_UserErrors || (_UserErrors = {}));
      /***/

    },

    /***/
    15591:
    /*!*****************************************************!*\
      !*** ./src/app/shared/_services/spinner.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpinnerService": function SpinnerService() {
          return (
            /* binding */
            _SpinnerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SpinnerService = /*#__PURE__*/function () {
        function _SpinnerService() {
          _classCallCheck(this, _SpinnerService);
        }

        _createClass(_SpinnerService, [{
          key: "show",
          value: function show() {}
        }, {
          key: "hide",
          value: function hide() {}
        }]);

        return _SpinnerService;
      }();

      _SpinnerService.ɵfac = function SpinnerService_Factory(t) {
        return new (t || _SpinnerService)();
      };

      _SpinnerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SpinnerService,
        factory: _SpinnerService.ɵfac,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map