(function () {
  "use strict";

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunklife_line"] = self["webpackChunklife_line"] || []).push([["default-src_app_manage-group_manage-group_module_ts"], {
    /***/
    85443:
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseTreeControl": function BaseTreeControl() {
          return (
            /* binding */
            _BaseTreeControl
          );
        },

        /* harmony export */
        "CDK_TREE_NODE_OUTLET_NODE": function CDK_TREE_NODE_OUTLET_NODE() {
          return (
            /* binding */
            _CDK_TREE_NODE_OUTLET_NODE
          );
        },

        /* harmony export */
        "CdkNestedTreeNode": function CdkNestedTreeNode() {
          return (
            /* binding */
            _CdkNestedTreeNode
          );
        },

        /* harmony export */
        "CdkTree": function CdkTree() {
          return (
            /* binding */
            _CdkTree
          );
        },

        /* harmony export */
        "CdkTreeModule": function CdkTreeModule() {
          return (
            /* binding */
            _CdkTreeModule
          );
        },

        /* harmony export */
        "CdkTreeNode": function CdkTreeNode() {
          return (
            /* binding */
            _CdkTreeNode
          );
        },

        /* harmony export */
        "CdkTreeNodeDef": function CdkTreeNodeDef() {
          return (
            /* binding */
            _CdkTreeNodeDef
          );
        },

        /* harmony export */
        "CdkTreeNodeOutlet": function CdkTreeNodeOutlet() {
          return (
            /* binding */
            _CdkTreeNodeOutlet
          );
        },

        /* harmony export */
        "CdkTreeNodeOutletContext": function CdkTreeNodeOutletContext() {
          return (
            /* binding */
            _CdkTreeNodeOutletContext
          );
        },

        /* harmony export */
        "CdkTreeNodePadding": function CdkTreeNodePadding() {
          return (
            /* binding */
            _CdkTreeNodePadding
          );
        },

        /* harmony export */
        "CdkTreeNodeToggle": function CdkTreeNodeToggle() {
          return (
            /* binding */
            _CdkTreeNodeToggle
          );
        },

        /* harmony export */
        "FlatTreeControl": function FlatTreeControl() {
          return (
            /* binding */
            _FlatTreeControl
          );
        },

        /* harmony export */
        "NestedTreeControl": function NestedTreeControl() {
          return (
            /* binding */
            _NestedTreeControl
          );
        },

        /* harmony export */
        "getTreeControlFunctionsMissingError": function getTreeControlFunctionsMissingError() {
          return (
            /* binding */
            _getTreeControlFunctionsMissingError
          );
        },

        /* harmony export */
        "getTreeControlMissingError": function getTreeControlMissingError() {
          return (
            /* binding */
            _getTreeControlMissingError
          );
        },

        /* harmony export */
        "getTreeMissingMatchingNodeDefError": function getTreeMissingMatchingNodeDefError() {
          return (
            /* binding */
            _getTreeMissingMatchingNodeDefError
          );
        },

        /* harmony export */
        "getTreeMultipleDefaultNodeDefsError": function getTreeMultipleDefaultNodeDefsError() {
          return (
            /* binding */
            _getTreeMultipleDefaultNodeDefsError
          );
        },

        /* harmony export */
        "getTreeNoValidDataSourceError": function getTreeNoValidDataSourceError() {
          return (
            /* binding */
            _getTreeNoValidDataSourceError
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      64674);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */


      var _BaseTreeControl = /*#__PURE__*/function () {
        function _BaseTreeControl() {
          _classCallCheck(this, _BaseTreeControl);

          /** A selection model with multi-selection to track expansion status. */
          this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.SelectionModel(true);
        }
        /** Toggles one single data node's expanded/collapsed state. */


        _createClass(_BaseTreeControl, [{
          key: "toggle",
          value: function toggle(dataNode) {
            this.expansionModel.toggle(this._trackByValue(dataNode));
          }
          /** Expands one single data node. */

        }, {
          key: "expand",
          value: function expand(dataNode) {
            this.expansionModel.select(this._trackByValue(dataNode));
          }
          /** Collapses one single data node. */

        }, {
          key: "collapse",
          value: function collapse(dataNode) {
            this.expansionModel.deselect(this._trackByValue(dataNode));
          }
          /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */

        }, {
          key: "isExpanded",
          value: function isExpanded(dataNode) {
            return this.expansionModel.isSelected(this._trackByValue(dataNode));
          }
          /** Toggles a subtree rooted at `node` recursively. */

        }, {
          key: "toggleDescendants",
          value: function toggleDescendants(dataNode) {
            this.expansionModel.isSelected(this._trackByValue(dataNode)) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
          }
          /** Collapse all dataNodes in the tree. */

        }, {
          key: "collapseAll",
          value: function collapseAll() {
            this.expansionModel.clear();
          }
          /** Expands a subtree rooted at given data node recursively. */

        }, {
          key: "expandDescendants",
          value: function expandDescendants(dataNode) {
            var _this$expansionModel,
                _this = this;

            var toBeProcessed = [dataNode];
            toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

            (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, _toConsumableArray(toBeProcessed.map(function (value) {
              return _this._trackByValue(value);
            })));
          }
          /** Collapses a subtree rooted at given data node recursively. */

        }, {
          key: "collapseDescendants",
          value: function collapseDescendants(dataNode) {
            var _this$expansionModel2,
                _this2 = this;

            var toBeProcessed = [dataNode];
            toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

            (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, _toConsumableArray(toBeProcessed.map(function (value) {
              return _this2._trackByValue(value);
            })));
          }
        }, {
          key: "_trackByValue",
          value: function _trackByValue(value) {
            return this.trackBy ? this.trackBy(value) : value;
          }
        }]);

        return _BaseTreeControl;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */


      var _FlatTreeControl = /*#__PURE__*/function (_BaseTreeControl2) {
        _inherits(_FlatTreeControl, _BaseTreeControl2);

        var _super = _createSuper(_FlatTreeControl);

        /** Construct with flat tree data node functions getLevel and isExpandable. */
        function _FlatTreeControl(getLevel, isExpandable, options) {
          var _this3;

          _classCallCheck(this, _FlatTreeControl);

          _this3 = _super.call(this);
          _this3.getLevel = getLevel;
          _this3.isExpandable = isExpandable;
          _this3.options = options;

          if (_this3.options) {
            _this3.trackBy = _this3.options.trackBy;
          }

          return _this3;
        }
        /**
         * Gets a list of the data node's subtree of descendent data nodes.
         *
         * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
         * with correct levels.
         */


        _createClass(_FlatTreeControl, [{
          key: "getDescendants",
          value: function getDescendants(dataNode) {
            var startIndex = this.dataNodes.indexOf(dataNode);
            var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
            // The level of descendants of a tree node must be greater than the level of the given
            // tree node.
            // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
            // If we reach a node whose level is greater than the level of the tree node, we hit a
            // sibling of an ancestor.

            for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
              results.push(this.dataNodes[i]);
            }

            return results;
          }
          /**
           * Expands all data nodes in the tree.
           *
           * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
           * data nodes of the tree.
           */

        }, {
          key: "expandAll",
          value: function expandAll() {
            var _this$expansionModel3,
                _this4 = this;

            (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes.map(function (node) {
              return _this4._trackByValue(node);
            })));
          }
        }]);

        return _FlatTreeControl;
      }(_BaseTreeControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */


      var _NestedTreeControl = /*#__PURE__*/function (_BaseTreeControl3) {
        _inherits(_NestedTreeControl, _BaseTreeControl3);

        var _super2 = _createSuper(_NestedTreeControl);

        /** Construct with nested tree function getChildren. */
        function _NestedTreeControl(getChildren, options) {
          var _this5;

          _classCallCheck(this, _NestedTreeControl);

          _this5 = _super2.call(this);
          _this5.getChildren = getChildren;
          _this5.options = options;

          if (_this5.options) {
            _this5.trackBy = _this5.options.trackBy;
          }

          return _this5;
        }
        /**
         * Expands all dataNodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
         * data nodes of the tree.
         */


        _createClass(_NestedTreeControl, [{
          key: "expandAll",
          value: function expandAll() {
            var _this6 = this,
                _this$expansionModel4;

            this.expansionModel.clear();
            var allNodes = this.dataNodes.reduce(function (accumulator, dataNode) {
              return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this6.getDescendants(dataNode)), [dataNode]);
            }, []);

            (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes.map(function (node) {
              return _this6._trackByValue(node);
            })));
          }
          /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */

        }, {
          key: "getDescendants",
          value: function getDescendants(dataNode) {
            var descendants = [];

            this._getDescendants(descendants, dataNode); // Remove the node itself


            return descendants.splice(1);
          }
          /** A helper function to get descendants recursively. */

        }, {
          key: "_getDescendants",
          value: function _getDescendants(descendants, dataNode) {
            var _this7 = this;

            descendants.push(dataNode);
            var childrenNodes = this.getChildren(dataNode);

            if (Array.isArray(childrenNodes)) {
              childrenNodes.forEach(function (child) {
                return _this7._getDescendants(descendants, child);
              });
            } else if ((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(childrenNodes)) {
              // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
              // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
              childrenNodes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(Boolean)).subscribe(function (children) {
                var _iterator = _createForOfIteratorHelper(children),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var child = _step.value;

                    _this7._getDescendants(descendants, child);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            }
          }
        }]);

        return _NestedTreeControl;
      }(_BaseTreeControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide a `CdkTreeNode` to its outlet.
       * Used primarily to avoid circular imports.
       * @docs-private
       */


      var _CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('CDK_TREE_NODE_OUTLET_NODE');
      /**
       * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
       * inside the outlet.
       */


      var _CdkTreeNodeOutlet = /*#__PURE__*/_createClass(function _CdkTreeNodeOutlet(viewContainer, _node) {
        _classCallCheck(this, _CdkTreeNodeOutlet);

        this.viewContainer = viewContainer;
        this._node = _node;
      });

      _CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
        return new (t || _CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CDK_TREE_NODE_OUTLET_NODE, 8));
      };

      _CdkTreeNodeOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _CdkTreeNodeOutlet,
        selectors: [["", "cdkTreeNodeOutlet", ""]]
      });

      _CdkTreeNodeOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [_CDK_TREE_NODE_OUTLET_NODE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTreeNodeOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: '[cdkTreeNodeOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
              args: [_CDK_TREE_NODE_OUTLET_NODE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Context provided to the tree node component. */


      var _CdkTreeNodeOutletContext = /*#__PURE__*/_createClass(function _CdkTreeNodeOutletContext(data) {
        _classCallCheck(this, _CdkTreeNodeOutletContext);

        this.$implicit = data;
      });
      /**
       * Data node definition for the CdkTree.
       * Captures the node's template and a when predicate that describes when this node should be used.
       */


      var _CdkTreeNodeDef = /*#__PURE__*/_createClass(
      /** @docs-private */
      function _CdkTreeNodeDef(template) {
        _classCallCheck(this, _CdkTreeNodeDef);

        this.template = template;
      });

      _CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
        return new (t || _CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef));
      };

      _CdkTreeNodeDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _CdkTreeNodeDef,
        selectors: [["", "cdkTreeNodeDef", ""]],
        inputs: {
          when: ["cdkTreeNodeDefWhen", "when"]
        }
      });

      _CdkTreeNodeDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTreeNodeDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: '[cdkTreeNodeDef]',
            inputs: ['when: cdkTreeNodeDefWhen']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when there is no usable data.
       * @docs-private
       */


      function _getTreeNoValidDataSourceError() {
        return Error("A valid data source must be provided.");
      }
      /**
       * Returns an error to be thrown when there are multiple nodes that are missing a when function.
       * @docs-private
       */


      function _getTreeMultipleDefaultNodeDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching node defs for a particular set of data.
       * @docs-private
       */


      function _getTreeMissingMatchingNodeDefError() {
        return Error("Could not find a matching node definition for the provided node data.");
      }
      /**
       * Returns an error to be thrown when there are tree control.
       * @docs-private
       */


      function _getTreeControlMissingError() {
        return Error("Could not find a tree control for the tree.");
      }
      /**
       * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
       * @docs-private
       */


      function _getTreeControlFunctionsMissingError() {
        return Error("Could not find functions for nested/flat tree in tree control.");
      }
      /**
       * CDK tree component that connects with a data source to retrieve data of type `T` and renders
       * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
       */


      var _CdkTree = /*#__PURE__*/function () {
        function _CdkTree(_differs, _changeDetectorRef) {
          _classCallCheck(this, _CdkTree);

          this._differs = _differs;
          this._changeDetectorRef = _changeDetectorRef;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /** Level of nodes */

          this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
          //     Remove the MAX_VALUE in viewChange

          /**
           * Stream containing the latest information on what rows are being displayed on screen.
           * Can be used by the data source to as a heuristic of what data should be provided.
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({
            start: 0,
            end: Number.MAX_VALUE
          });
        }
        /**
         * Provides a stream containing the latest data array to render. Influenced by the tree's
         * stream of view window (what dataNodes are currently on screen).
         * Data source can be an observable of data array, or a data array to render.
         */


        _createClass(_CdkTree, [{
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._dataDiffer = this._differs.find([]).create(this.trackBy);

            if (!this.treeControl && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getTreeControlMissingError();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._nodeOutlet.viewContainer.clear();

            this.viewChange.complete();

            this._onDestroy.next();

            this._onDestroy.complete();

            if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
              this.dataSource.disconnect(this);
            }

            if (this._dataSubscription) {
              this._dataSubscription.unsubscribe();

              this._dataSubscription = null;
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var defaultNodeDefs = this._nodeDefs.filter(function (def) {
              return !def.when;
            });

            if (defaultNodeDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getTreeMultipleDefaultNodeDefsError();
            }

            this._defaultNodeDef = defaultNodeDefs[0];

            if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
              this._observeRenderChanges();
            }
          } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
          //     and nested trees.

          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the node outlet. Otherwise start listening for new data.
           */

        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
              this.dataSource.disconnect(this);
            }

            if (this._dataSubscription) {
              this._dataSubscription.unsubscribe();

              this._dataSubscription = null;
            } // Remove the all dataNodes if there is now no data source


            if (!dataSource) {
              this._nodeOutlet.viewContainer.clear();
            }

            this._dataSource = dataSource;

            if (this._nodeDefs) {
              this._observeRenderChanges();
            }
          }
          /** Set up a subscription for the data provided by the data source. */

        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this8 = this;

            var dataStream;

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this._dataSource)) {
              dataStream = this._dataSource.connect(this);
            } else if ((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(this._dataSource)) {
              dataStream = this._dataSource;
            } else if (Array.isArray(this._dataSource)) {
              dataStream = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._dataSource);
            }

            if (dataStream) {
              this._dataSubscription = dataStream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy)).subscribe(function (data) {
                return _this8.renderNodeChanges(data);
              });
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw _getTreeNoValidDataSourceError();
            }
          }
          /** Check for changes made in the data and render each change (node added/removed/moved). */

        }, {
          key: "renderNodeChanges",
          value: function renderNodeChanges(data) {
            var _this9 = this;

            var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
            var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
            var parentData = arguments.length > 3 ? arguments[3] : undefined;
            var changes = dataDiffer.diff(data);

            if (!changes) {
              return;
            }

            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
              if (item.previousIndex == null) {
                _this9.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
              } else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);

                _this9._levels["delete"](item.item);
              } else {
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
              }
            });

            this._changeDetectorRef.detectChanges();
          }
          /**
           * Finds the matching node definition that should be used for this node data. If there is only
           * one node definition, it is returned. Otherwise, find the node definition that has a when
           * predicate that returns true with the data. If none return true, return the default node
           * definition.
           */

        }, {
          key: "_getNodeDef",
          value: function _getNodeDef(data, i) {
            if (this._nodeDefs.length === 1) {
              return this._nodeDefs.first;
            }

            var nodeDef = this._nodeDefs.find(function (def) {
              return def.when && def.when(i, data);
            }) || this._defaultNodeDef;

            if (!nodeDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getTreeMissingMatchingNodeDefError();
            }

            return nodeDef;
          }
          /**
           * Create the embedded view for the data node template and place it in the correct index location
           * within the data node view container.
           */

        }, {
          key: "insertNode",
          value: function insertNode(nodeData, index, viewContainer, parentData) {
            var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view


            var context = new _CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
            // Otherwise, use the level of parent node.

            if (this.treeControl.getLevel) {
              context.level = this.treeControl.getLevel(nodeData);
            } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
              context.level = this._levels.get(parentData) + 1;
            } else {
              context.level = 0;
            }

            this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet


            var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
            container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
            // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
            //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

            if (_CdkTreeNode.mostRecentTreeNode) {
              _CdkTreeNode.mostRecentTreeNode.data = nodeData;
            }
          }
        }]);

        return _CdkTree;
      }();

      _CdkTree.ɵfac = function CdkTree_Factory(t) {
        return new (t || _CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
      };

      _CdkTree.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _CdkTree,
        selectors: [["cdk-tree"]],
        contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _CdkTreeNodeDef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
          }
        },
        viewQuery: function CdkTree_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_CdkTreeNodeOutlet, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
          }
        },
        hostAttrs: ["role", "tree", 1, "cdk-tree"],
        inputs: {
          dataSource: "dataSource",
          treeControl: "treeControl",
          trackBy: "trackBy"
        },
        exportAs: ["cdkTree"],
        decls: 1,
        vars: 0,
        consts: [["cdkTreeNodeOutlet", ""]],
        template: function CdkTree_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkTreeNodeOutlet],
        encapsulation: 2
      });

      _CdkTree.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
        }];
      };

      _CdkTree.propDecorators = {
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        treeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_CdkTreeNodeOutlet, {
            "static": true
          }]
        }],
        _nodeDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
          args: [_CdkTreeNodeDef, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTree, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
          args: [{
            selector: 'cdk-tree',
            exportAs: 'cdkTree',
            template: "<ng-container cdkTreeNodeOutlet></ng-container>",
            host: {
              'class': 'cdk-tree',
              'role': 'tree'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
            // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
            // The view for `CdkTree` consists entirely of templates declared in other views. As they are
            // declared elsewhere, they are checked when their declaration points are checked.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.Default
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
          }];
        }, {
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
          }],
          treeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
          }],
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
          }],
          _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
            args: [_CdkTreeNodeOutlet, {
              "static": true
            }]
          }],
          _nodeDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
            args: [_CdkTreeNodeDef, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Tree node for CdkTree. It contains the data in the tree node.
       */


      var _CdkTreeNode = /*#__PURE__*/function () {
        function _CdkTreeNode(_elementRef, _tree) {
          _classCallCheck(this, _CdkTreeNode);

          this._elementRef = _elementRef;
          this._tree = _tree;
          /** Subject that emits when the component has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /** Emits when the node's data has changed. */

          this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          _CdkTreeNode.mostRecentTreeNode = this; // The classes are directly added here instead of in the host property because classes on
          // the host property are not inherited with View Engine. It is not set as a @HostBinding because
          // it is not set by the time it's children nodes try to read the class from it.
          // TODO: move to host after View Engine deprecation

          this._elementRef.nativeElement.classList.add('cdk-tree-node');

          this.role = 'treeitem';
        }
        /**
         * The role of the tree node.
         * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
         *   removed in a future version.
         * @breaking-change 12.0.0 Remove this input
         */


        _createClass(_CdkTreeNode, [{
          key: "role",
          get: function get() {
            return 'treeitem';
          },
          set: function set(_role) {
            // TODO: move to host after View Engine deprecation
            this._elementRef.nativeElement.setAttribute('role', _role);
          }
          /** The tree node's data. */

        }, {
          key: "data",
          get: function get() {
            return this._data;
          },
          set: function set(value) {
            if (value !== this._data) {
              this._data = value;

              this._setRoleFromData();

              this._dataChanges.next();
            }
          }
        }, {
          key: "isExpanded",
          get: function get() {
            return this._tree.treeControl.isExpanded(this._data);
          }
        }, {
          key: "_setExpanded",
          value: function _setExpanded(_expanded) {
            this._isAriaExpanded = _expanded;

            this._elementRef.nativeElement.setAttribute('aria-expanded', "".concat(_expanded));
          }
        }, {
          key: "level",
          get: function get() {
            // If the treeControl has a getLevel method, use it to get the level. Otherwise read the
            // aria-level off the parent node and use it as the level for this node (note aria-level is
            // 1-indexed, while this property is 0-indexed, so we don't need to increment).
            return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);

            this._elementRef.nativeElement.setAttribute('aria-level', "".concat(this.level + 1));
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            // aria-expanded is be set here because the expanded state is stored in the tree control and
            // the node isn't aware when the state is changed.
            // It is not set using a @HostBinding because they sometimes get lost with Mixin based classes.
            // TODO: move to host after View Engine deprecation
            if (this.isExpanded != this._isAriaExpanded) {
              this._setExpanded(this.isExpanded);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // If this is the last tree node being destroyed,
            // clear out the reference to avoid leaking memory.
            if (_CdkTreeNode.mostRecentTreeNode === this) {
              _CdkTreeNode.mostRecentTreeNode = null;
            }

            this._dataChanges.complete();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Focuses the menu item. Implements for FocusableOption. */

        }, {
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          } // TODO: role should eventually just be set in the component host

        }, {
          key: "_setRoleFromData",
          value: function _setRoleFromData() {
            if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getTreeControlFunctionsMissingError();
            }

            this.role = 'treeitem';
          }
        }]);

        return _CdkTreeNode;
      }();

      _CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
        return new (t || _CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CdkTree));
      };

      _CdkTreeNode.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _CdkTreeNode,
        selectors: [["cdk-tree-node"]],
        inputs: {
          role: "role"
        },
        exportAs: ["cdkTreeNode"]
      });
      /**
       * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
       * in `CdkTree` and set the data to it.
       */

      _CdkTreeNode.mostRecentTreeNode = null;

      _CdkTreeNode.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
        }, {
          type: _CdkTree
        }];
      };

      _CdkTreeNode.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTreeNode, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: 'cdk-tree-node',
            exportAs: 'cdkTreeNode'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
          }, {
            type: _CdkTree
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
          }]
        });
      })();

      function getParentNodeAriaLevel(nodeElement) {
        var parent = nodeElement.parentElement;

        while (parent && !isNodeElement(parent)) {
          parent = parent.parentElement;
        }

        if (!parent) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw Error('Incorrect tree structure containing detached node.');
          } else {
            return -1;
          }
        } else if (parent.classList.contains('cdk-nested-tree-node')) {
          return (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(parent.getAttribute('aria-level'));
        } else {
          // The ancestor element is the cdk-tree itself
          return 0;
        }
      }

      function isNodeElement(element) {
        var classList = element.classList;
        return !!((classList === null || classList === void 0 ? void 0 : classList.contains('cdk-nested-tree-node')) || (classList === null || classList === void 0 ? void 0 : classList.contains('cdk-tree')));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Nested node is a child of `<cdk-tree>`. It works with nested tree.
       * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
       * be added in the `cdkTreeNodeOutlet` in tree node template.
       * The children of node will be automatically added to `cdkTreeNodeOutlet`.
       */


      var _CdkNestedTreeNode = /*#__PURE__*/function (_CdkTreeNode2) {
        _inherits(_CdkNestedTreeNode, _CdkTreeNode2);

        var _super3 = _createSuper(_CdkNestedTreeNode);

        function _CdkNestedTreeNode(elementRef, tree, _differs) {
          var _this10;

          _classCallCheck(this, _CdkNestedTreeNode);

          _this10 = _super3.call(this, elementRef, tree);
          _this10._differs = _differs; // The classes are directly added here instead of in the host property because classes on
          // the host property are not inherited with View Engine. It is not set as a @HostBinding because
          // it is not set by the time it's children nodes try to read the class from it.
          // TODO: move to host after View Engine deprecation

          elementRef.nativeElement.classList.add('cdk-nested-tree-node');
          return _this10;
        }

        _createClass(_CdkNestedTreeNode, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this11 = this;

            this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

            if (!this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getTreeControlFunctionsMissingError();
            }

            var childrenNodes = this._tree.treeControl.getChildren(this.data);

            if (Array.isArray(childrenNodes)) {
              this.updateChildrenNodes(childrenNodes);
            } else if ((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(childrenNodes)) {
              childrenNodes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(function (result) {
                return _this11.updateChildrenNodes(result);
              });
            }

            this.nodeOutlet.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(function () {
              return _this11.updateChildrenNodes();
            });
          } // This is a workaround for https://github.com/angular/angular/issues/23091
          // In aot mode, the lifecycle hooks from parent class are not called.

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            _get(_getPrototypeOf(_CdkNestedTreeNode.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            _get(_getPrototypeOf(_CdkNestedTreeNode.prototype), "ngDoCheck", this).call(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._clear();

            _get(_getPrototypeOf(_CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
          }
          /** Add children dataNodes to the NodeOutlet */

        }, {
          key: "updateChildrenNodes",
          value: function updateChildrenNodes(children) {
            var outlet = this._getNodeOutlet();

            if (children) {
              this._children = children;
            }

            if (outlet && this._children) {
              var viewContainer = outlet.viewContainer;

              this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
            } else {
              // Reset the data differ if there's no children nodes displayed
              this._dataDiffer.diff([]);
            }
          }
          /** Clear the children dataNodes. */

        }, {
          key: "_clear",
          value: function _clear() {
            var outlet = this._getNodeOutlet();

            if (outlet) {
              outlet.viewContainer.clear();

              this._dataDiffer.diff([]);
            }
          }
          /** Gets the outlet for the current node. */

        }, {
          key: "_getNodeOutlet",
          value: function _getNodeOutlet() {
            var _this12 = this;

            var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
            // that we don't pick up the outlet of a child node by accident.

            return outlets && outlets.find(function (outlet) {
              return !outlet._node || outlet._node === _this12;
            });
          }
        }]);

        return _CdkNestedTreeNode;
      }(_CdkTreeNode);

      _CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
        return new (t || _CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers));
      };

      _CdkNestedTreeNode.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _CdkNestedTreeNode,
        selectors: [["cdk-nested-tree-node"]],
        contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _CdkTreeNodeOutlet, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
          }
        },
        inputs: {
          role: "role",
          disabled: "disabled",
          tabIndex: "tabIndex"
        },
        exportAs: ["cdkNestedTreeNode"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _CdkTreeNode,
          useExisting: _CdkNestedTreeNode
        }, {
          provide: _CDK_TREE_NODE_OUTLET_NODE,
          useExisting: _CdkNestedTreeNode
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkNestedTreeNode.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
        }, {
          type: _CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers
        }];
      };

      _CdkNestedTreeNode.propDecorators = {
        nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
          args: [_CdkTreeNodeOutlet, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkNestedTreeNode, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: 'cdk-nested-tree-node',
            exportAs: 'cdkNestedTreeNode',
            inputs: ['role', 'disabled', 'tabIndex'],
            providers: [{
              provide: _CdkTreeNode,
              useExisting: _CdkNestedTreeNode
            }, {
              provide: _CDK_TREE_NODE_OUTLET_NODE,
              useExisting: _CdkNestedTreeNode
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
          }, {
            type: _CdkTree
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers
          }];
        }, {
          nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
            args: [_CdkTreeNodeOutlet, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Regex used to split a string on its CSS units. */


      var cssUnitPattern = /([A-Za-z%]+)$/;
      /**
       * Indent for the children tree dataNodes.
       * This directive will add left-padding to the node to show hierarchy.
       */

      var _CdkTreeNodePadding = /*#__PURE__*/function () {
        function _CdkTreeNodePadding(_treeNode, _tree, _element, _dir) {
          var _this13 = this;

          _classCallCheck(this, _CdkTreeNodePadding);

          this._treeNode = _treeNode;
          this._tree = _tree;
          this._element = _element;
          this._dir = _dir;
          /** Subject that emits when the component has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /** CSS units used for the indentation value. */

          this.indentUnits = 'px';
          this._indent = 40;

          this._setPadding();

          if (_dir) {
            _dir.change.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(function () {
              return _this13._setPadding(true);
            });
          } // In Ivy the indentation binding might be set before the tree node's data has been added,
          // which means that we'll miss the first render. We have to subscribe to changes in the
          // data to ensure that everything is up to date.


          _treeNode._dataChanges.subscribe(function () {
            return _this13._setPadding();
          });
        }
        /** The level of depth of the tree node. The padding will be `level * indent` pixels. */


        _createClass(_CdkTreeNodePadding, [{
          key: "level",
          get: function get() {
            return this._level;
          },
          set: function set(value) {
            this._setLevelInput(value);
          }
          /**
           * The indent for each level. Can be a number or a CSS string.
           * Default number 40px from material design menu sub-menu spec.
           */

        }, {
          key: "indent",
          get: function get() {
            return this._indent;
          },
          set: function set(indent) {
            this._setIndentInput(indent);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** The padding indent value for the tree node. Returns a string with px numbers if not null. */

        }, {
          key: "_paddingIndent",
          value: function _paddingIndent() {
            var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
            var level = this._level == null ? nodeLevel : this._level;
            return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
          }
        }, {
          key: "_setPadding",
          value: function _setPadding() {
            var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var padding = this._paddingIndent();

            if (padding !== this._currentPadding || forceChange) {
              var element = this._element.nativeElement;
              var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
              var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
              element.style[paddingProp] = padding || '';
              element.style[resetProp] = '';
              this._currentPadding = padding;
            }
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setLevelInput",
          value: function _setLevelInput(value) {
            // Set to null as the fallback value so that _setPadding can fall back to the node level if the
            // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
            // they set 0 explicitly.
            this._level = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value, null);

            this._setPadding();
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setIndentInput",
          value: function _setIndentInput(indent) {
            var value = indent;
            var units = 'px';

            if (typeof indent === 'string') {
              var parts = indent.split(cssUnitPattern);
              value = parts[0];
              units = parts[1] || units;
            }

            this.indentUnits = units;
            this._indent = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value);

            this._setPadding();
          }
        }]);

        return _CdkTreeNodePadding;
      }();

      _CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
        return new (t || _CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8));
      };

      _CdkTreeNodePadding.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _CdkTreeNodePadding,
        selectors: [["", "cdkTreeNodePadding", ""]],
        inputs: {
          level: ["cdkTreeNodePadding", "level"],
          indent: ["cdkTreeNodePaddingIndent", "indent"]
        }
      });

      _CdkTreeNodePadding.ctorParameters = function () {
        return [{
          type: _CdkTreeNode
        }, {
          type: _CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
          }]
        }];
      };

      _CdkTreeNodePadding.propDecorators = {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['cdkTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['cdkTreeNodePaddingIndent']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTreeNodePadding, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: '[cdkTreeNodePadding]'
          }]
        }], function () {
          return [{
            type: _CdkTreeNode
          }, {
            type: _CdkTree
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
            }]
          }];
        }, {
          level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
            args: ['cdkTreeNodePadding']
          }],
          indent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
            args: ['cdkTreeNodePaddingIndent']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Node toggle to expand/collapse the node.
       */


      var _CdkTreeNodeToggle = /*#__PURE__*/function () {
        function _CdkTreeNodeToggle(_tree, _treeNode) {
          _classCallCheck(this, _CdkTreeNodeToggle);

          this._tree = _tree;
          this._treeNode = _treeNode;
          this._recursive = false;
        }
        /** Whether expand/collapse the node recursively. */


        _createClass(_CdkTreeNodeToggle, [{
          key: "recursive",
          get: function get() {
            return this._recursive;
          },
          set: function set(value) {
            this._recursive = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_toggle",
          value: function _toggle(event) {
            this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
            event.stopPropagation();
          }
        }]);

        return _CdkTreeNodeToggle;
      }();

      _CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
        return new (t || _CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CdkTreeNode));
      };

      _CdkTreeNodeToggle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _CdkTreeNodeToggle,
        selectors: [["", "cdkTreeNodeToggle", ""]],
        hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
              return ctx._toggle($event);
            });
          }
        },
        inputs: {
          recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
        }
      });

      _CdkTreeNodeToggle.ctorParameters = function () {
        return [{
          type: _CdkTree
        }, {
          type: _CdkTreeNode
        }];
      };

      _CdkTreeNodeToggle.propDecorators = {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['cdkTreeNodeToggleRecursive']
        }],
        _toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
          args: ['click', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTreeNodeToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: '[cdkTreeNodeToggle]'
          }]
        }], function () {
          return [{
            type: _CdkTree
          }, {
            type: _CdkTreeNode
          }];
        }, {
          recursive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
            args: ['cdkTreeNodeToggleRecursive']
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
            args: ['click', ['$event']]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [_CdkNestedTreeNode, _CdkTreeNodeDef, _CdkTreeNodePadding, _CdkTreeNodeToggle, _CdkTree, _CdkTreeNode, _CdkTreeNodeOutlet];

      var _CdkTreeModule = /*#__PURE__*/_createClass(function _CdkTreeModule() {
        _classCallCheck(this, _CdkTreeModule);
      });

      _CdkTreeModule.ɵfac = function CdkTreeModule_Factory(t) {
        return new (t || _CdkTreeModule)();
      };

      _CdkTreeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _CdkTreeModule
      });
      _CdkTreeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_CdkTreeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
          args: [{
            exports: EXPORTED_DECLARATIONS,
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_CdkTreeModule, {
          declarations: [_CdkNestedTreeNode, _CdkTreeNodeDef, _CdkTreeNodePadding, _CdkTreeNodeToggle, _CdkTree, _CdkTreeNode, _CdkTreeNodeOutlet],
          exports: [_CdkNestedTreeNode, _CdkTreeNodeDef, _CdkTreeNodePadding, _CdkTreeNodeToggle, _CdkTree, _CdkTreeNode, _CdkTreeNodeOutlet]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    75473:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatNestedTreeNode": function MatNestedTreeNode() {
          return (
            /* binding */
            _MatNestedTreeNode
          );
        },

        /* harmony export */
        "MatTree": function MatTree() {
          return (
            /* binding */
            _MatTree
          );
        },

        /* harmony export */
        "MatTreeFlatDataSource": function MatTreeFlatDataSource() {
          return (
            /* binding */
            _MatTreeFlatDataSource
          );
        },

        /* harmony export */
        "MatTreeFlattener": function MatTreeFlattener() {
          return (
            /* binding */
            _MatTreeFlattener
          );
        },

        /* harmony export */
        "MatTreeModule": function MatTreeModule() {
          return (
            /* binding */
            _MatTreeModule
          );
        },

        /* harmony export */
        "MatTreeNestedDataSource": function MatTreeNestedDataSource() {
          return (
            /* binding */
            _MatTreeNestedDataSource
          );
        },

        /* harmony export */
        "MatTreeNode": function MatTreeNode() {
          return (
            /* binding */
            _MatTreeNode
          );
        },

        /* harmony export */
        "MatTreeNodeDef": function MatTreeNodeDef() {
          return (
            /* binding */
            _MatTreeNodeDef
          );
        },

        /* harmony export */
        "MatTreeNodeOutlet": function MatTreeNodeOutlet() {
          return (
            /* binding */
            _MatTreeNodeOutlet
          );
        },

        /* harmony export */
        "MatTreeNodePadding": function MatTreeNodePadding() {
          return (
            /* binding */
            _MatTreeNodePadding
          );
        },

        /* harmony export */
        "MatTreeNodeToggle": function MatTreeNodeToggle() {
          return (
            /* binding */
            _MatTreeNodeToggle
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      85443);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      89919);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatTreeNodeBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode));
      /**
       * Wrapper for the CdkTree node with Material design styles.
       */


      var _MatTreeNode = /*#__PURE__*/function (_MatTreeNodeBase2) {
        _inherits(_MatTreeNode, _MatTreeNodeBase2);

        var _super4 = _createSuper(_MatTreeNode);

        function _MatTreeNode(elementRef, tree, tabIndex) {
          var _this14;

          _classCallCheck(this, _MatTreeNode);

          _this14 = _super4.call(this, elementRef, tree);
          _this14.tabIndex = Number(tabIndex) || 0; // The classes are directly added here instead of in the host property because classes on
          // the host property are not inherited with View Engine. It is not set as a @HostBinding because
          // it is not set by the time it's children nodes try to read the class from it.
          // TODO: move to host after View Engine deprecation

          elementRef.nativeElement.classList.add('mat-tree-node');
          return _this14;
        } // This is a workaround for https://github.com/angular/angular/issues/23091
        // In aot mode, the lifecycle hooks from parent class are not called.


        _createClass(_MatTreeNode, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _get(_getPrototypeOf(_MatTreeNode.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            _get(_getPrototypeOf(_MatTreeNode.prototype), "ngDoCheck", this).call(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatTreeNode.prototype), "ngOnDestroy", this).call(this);
          }
        }]);

        return _MatTreeNode;
      }(_MatTreeNodeBase);

      _MatTreeNode.ɵfac = function MatTreeNode_Factory(t) {
        return new (t || _MatTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'));
      };

      _MatTreeNode.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTreeNode,
        selectors: [["mat-tree-node"]],
        inputs: {
          role: "role",
          disabled: "disabled",
          tabIndex: "tabIndex"
        },
        exportAs: ["matTreeNode"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
          useExisting: _MatTreeNode
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTreeNode.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
            args: ['tabindex']
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTreeNode, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: 'mat-tree-node',
            exportAs: 'matTreeNode',
            inputs: ['role', 'disabled', 'tabIndex'],
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
              useExisting: _MatTreeNode
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
              args: ['tabindex']
            }]
          }];
        }, null);
      })();
      /**
       * Wrapper for the CdkTree node definition with Material design styles.
       * Captures the node's template and a when predicate that describes when this node should be used.
       */


      var _MatTreeNodeDef = /*#__PURE__*/function (_angular_cdk_tree__WE) {
        _inherits(_MatTreeNodeDef, _angular_cdk_tree__WE);

        var _super5 = _createSuper(_MatTreeNodeDef);

        function _MatTreeNodeDef() {
          _classCallCheck(this, _MatTreeNodeDef);

          return _super5.apply(this, arguments);
        }

        return _createClass(_MatTreeNodeDef);
      }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef);

      _MatTreeNodeDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatTreeNodeDef_BaseFactory;
        return function MatTreeNodeDef_Factory(t) {
          return (ɵMatTreeNodeDef_BaseFactory || (ɵMatTreeNodeDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_MatTreeNodeDef)))(t || _MatTreeNodeDef);
        };
      }();

      _MatTreeNodeDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTreeNodeDef,
        selectors: [["", "matTreeNodeDef", ""]],
        inputs: {
          when: ["matTreeNodeDefWhen", "when"],
          data: ["matTreeNode", "data"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef,
          useExisting: _MatTreeNodeDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });
      _MatTreeNodeDef.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTreeNode']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTreeNodeDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[matTreeNodeDef]',
            inputs: ['when: matTreeNodeDefWhen'],
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef,
              useExisting: _MatTreeNodeDef
            }]
          }]
        }], null, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTreeNode']
          }]
        });
      })();
      /**
       * Wrapper for the CdkTree nested node with Material design styles.
       */


      var _MatNestedTreeNode = /*#__PURE__*/function (_angular_cdk_tree__WE2) {
        _inherits(_MatNestedTreeNode, _angular_cdk_tree__WE2);

        var _super6 = _createSuper(_MatNestedTreeNode);

        function _MatNestedTreeNode(elementRef, tree, differs, tabIndex) {
          var _this15;

          _classCallCheck(this, _MatNestedTreeNode);

          _this15 = _super6.call(this, elementRef, tree, differs);
          _this15._disabled = false;
          _this15.tabIndex = Number(tabIndex) || 0; // The classes are directly added here instead of in the host property because classes on
          // the host property are not inherited with View Engine. It is not set as a @HostBinding because
          // it is not set by the time it's children nodes try to read the class from it.
          // TODO: move to host after View Engine deprecation

          elementRef.nativeElement.classList.add('mat-nested-tree-node');
          return _this15;
        }
        /** Whether the node is disabled. */


        _createClass(_MatNestedTreeNode, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
          /** Tabindex for the node. */

        }, {
          key: "tabIndex",
          get: function get() {
            return this.disabled ? -1 : this._tabIndex;
          },
          set: function set(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : 0;
          } // This is a workaround for https://github.com/angular/angular/issues/19145
          // In aot mode, the lifecycle hooks from parent class are not called.
          // TODO(tinayuangao): Remove when the angular issue #19145 is fixed

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            _get(_getPrototypeOf(_MatNestedTreeNode.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            _get(_getPrototypeOf(_MatNestedTreeNode.prototype), "ngDoCheck", this).call(this);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            _get(_getPrototypeOf(_MatNestedTreeNode.prototype), "ngAfterContentInit", this).call(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
          }
        }]);

        return _MatNestedTreeNode;
      }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode);

      _MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) {
        return new (t || _MatNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'));
      };

      _MatNestedTreeNode.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatNestedTreeNode,
        selectors: [["mat-nested-tree-node"]],
        inputs: {
          role: "role",
          disabled: "disabled",
          tabIndex: "tabIndex",
          node: ["matNestedTreeNode", "node"]
        },
        exportAs: ["matNestedTreeNode"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode,
          useExisting: _MatNestedTreeNode
        }, {
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
          useExisting: _MatNestedTreeNode
        }, {
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE,
          useExisting: _MatNestedTreeNode
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatNestedTreeNode.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.IterableDiffers
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
            args: ['tabindex']
          }]
        }];
      };

      _MatNestedTreeNode.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matNestedTreeNode']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatNestedTreeNode, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: 'mat-nested-tree-node',
            exportAs: 'matNestedTreeNode',
            inputs: ['role', 'disabled', 'tabIndex'],
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode,
              useExisting: _MatNestedTreeNode
            }, {
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
              useExisting: _MatNestedTreeNode
            }, {
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE,
              useExisting: _MatNestedTreeNode
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.IterableDiffers
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
              args: ['tabindex']
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matNestedTreeNode']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Wrapper for the CdkTree padding with Material design styles.
       */


      var _MatTreeNodePadding = /*#__PURE__*/function (_angular_cdk_tree__WE3) {
        _inherits(_MatTreeNodePadding, _angular_cdk_tree__WE3);

        var _super7 = _createSuper(_MatTreeNodePadding);

        function _MatTreeNodePadding() {
          _classCallCheck(this, _MatTreeNodePadding);

          return _super7.apply(this, arguments);
        }

        _createClass(_MatTreeNodePadding, [{
          key: "level",
          get:
          /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
          function get() {
            return this._level;
          },
          set: function set(value) {
            this._setLevelInput(value);
          }
          /** The indent for each level. Default number 40px from material design menu sub-menu spec. */

        }, {
          key: "indent",
          get: function get() {
            return this._indent;
          },
          set: function set(indent) {
            this._setIndentInput(indent);
          }
        }]);

        return _MatTreeNodePadding;
      }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding);

      _MatTreeNodePadding.ɵfac = /*@__PURE__*/function () {
        var ɵMatTreeNodePadding_BaseFactory;
        return function MatTreeNodePadding_Factory(t) {
          return (ɵMatTreeNodePadding_BaseFactory || (ɵMatTreeNodePadding_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_MatTreeNodePadding)))(t || _MatTreeNodePadding);
        };
      }();

      _MatTreeNodePadding.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTreeNodePadding,
        selectors: [["", "matTreeNodePadding", ""]],
        inputs: {
          level: ["matTreeNodePadding", "level"],
          indent: ["matTreeNodePaddingIndent", "indent"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding,
          useExisting: _MatTreeNodePadding
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });
      _MatTreeNodePadding.propDecorators = {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTreeNodePaddingIndent']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTreeNodePadding, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[matTreeNodePadding]',
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding,
              useExisting: _MatTreeNodePadding
            }]
          }]
        }], null, {
          level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTreeNodePadding']
          }],
          indent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTreeNodePaddingIndent']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
       * inside the outlet.
       */


      var _MatTreeNodeOutlet = /*#__PURE__*/_createClass(function _MatTreeNodeOutlet(viewContainer, _node) {
        _classCallCheck(this, _MatTreeNodeOutlet);

        this.viewContainer = viewContainer;
        this._node = _node;
      });

      _MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) {
        return new (t || _MatTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE, 8));
      };

      _MatTreeNodeOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTreeNodeOutlet,
        selectors: [["", "matTreeNodeOutlet", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet,
          useExisting: _MatTreeNodeOutlet
        }])]
      });

      _MatTreeNodeOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTreeNodeOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[matTreeNodeOutlet]',
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet,
              useExisting: _MatTreeNodeOutlet
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Wrapper for the CdkTable with Material design styles.
       */


      var _MatTree = /*#__PURE__*/function (_angular_cdk_tree__WE4) {
        _inherits(_MatTree, _angular_cdk_tree__WE4);

        var _super8 = _createSuper(_MatTree);

        function _MatTree() {
          _classCallCheck(this, _MatTree);

          return _super8.apply(this, arguments);
        }

        return _createClass(_MatTree);
      }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree);

      _MatTree.ɵfac = /*@__PURE__*/function () {
        var ɵMatTree_BaseFactory;
        return function MatTree_Factory(t) {
          return (ɵMatTree_BaseFactory || (ɵMatTree_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_MatTree)))(t || _MatTree);
        };
      }();

      _MatTree.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MatTree,
        selectors: [["mat-tree"]],
        viewQuery: function MatTree_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_MatTreeNodeOutlet, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
          }
        },
        hostAttrs: ["role", "tree", 1, "mat-tree", "cdk-tree"],
        exportAs: ["matTree"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree,
          useExisting: _MatTree
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["matTreeNodeOutlet", ""]],
        template: function MatTree_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_MatTreeNodeOutlet],
        styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],
        encapsulation: 2
      });
      _MatTree.propDecorators = {
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: [_MatTreeNodeOutlet, {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTree, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mat-tree',
            exportAs: 'matTree',
            template: "<ng-container matTreeNodeOutlet></ng-container>",
            host: {
              // The 'cdk-tree' class needs to be included here because classes set in the host in the
              // parent class are not inherited with View Engine. The 'cdk-tree' class in CdkTreeNode has
              // to be set in the host because:
              // if it is set as a @HostBinding it is not set by the time the tree nodes try to read the
              // class from it.
              // the ElementRef is not available in the constructor so the class can't be applied directly
              // without a breaking constructor change.
              'class': 'mat-tree cdk-tree',
              'role': 'tree'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
            // See note on CdkTree for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.Default,
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree,
              useExisting: _MatTree
            }],
            styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
          }]
        }], null, {
          _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: [_MatTreeNodeOutlet, {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Wrapper for the CdkTree's toggle with Material design styles.
       */
      // tslint:disable-next-line: coercion-types


      var _MatTreeNodeToggle = /*#__PURE__*/function (_angular_cdk_tree__WE5) {
        _inherits(_MatTreeNodeToggle, _angular_cdk_tree__WE5);

        var _super9 = _createSuper(_MatTreeNodeToggle);

        function _MatTreeNodeToggle() {
          _classCallCheck(this, _MatTreeNodeToggle);

          return _super9.apply(this, arguments);
        }

        _createClass(_MatTreeNodeToggle, [{
          key: "recursive",
          get: function get() {
            return this._recursive;
          },
          set: function set(value) {
            // TODO: when we remove support for ViewEngine, change this setter to an input
            // alias in the decorator metadata.
            this._recursive = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }]);

        return _MatTreeNodeToggle;
      }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle);

      _MatTreeNodeToggle.ɵfac = /*@__PURE__*/function () {
        var ɵMatTreeNodeToggle_BaseFactory;
        return function MatTreeNodeToggle_Factory(t) {
          return (ɵMatTreeNodeToggle_BaseFactory || (ɵMatTreeNodeToggle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_MatTreeNodeToggle)))(t || _MatTreeNodeToggle);
        };
      }();

      _MatTreeNodeToggle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTreeNodeToggle,
        selectors: [["", "matTreeNodeToggle", ""]],
        inputs: {
          recursive: ["matTreeNodeToggleRecursive", "recursive"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle,
          useExisting: _MatTreeNodeToggle
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });
      _MatTreeNodeToggle.propDecorators = {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTreeNodeToggleRecursive']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTreeNodeToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[matTreeNodeToggle]',
            providers: [{
              provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle,
              useExisting: _MatTreeNodeToggle
            }]
          }]
        }], null, {
          recursive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTreeNodeToggleRecursive']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_TREE_DIRECTIVES = [_MatNestedTreeNode, _MatTreeNodeDef, _MatTreeNodePadding, _MatTreeNodeToggle, _MatTree, _MatTreeNode, _MatTreeNodeOutlet];

      var _MatTreeModule = /*#__PURE__*/_createClass(function _MatTreeModule() {
        _classCallCheck(this, _MatTreeModule);
      });

      _MatTreeModule.ɵfac = function MatTreeModule_Factory(t) {
        return new (t || _MatTreeModule)();
      };

      _MatTreeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MatTreeModule
      });
      _MatTreeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTreeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, MAT_TREE_DIRECTIVES],
            declarations: MAT_TREE_DIRECTIVES
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatTreeModule, {
          declarations: function declarations() {
            return [_MatNestedTreeNode, _MatTreeNodeDef, _MatTreeNodePadding, _MatTreeNodeToggle, _MatTree, _MatTreeNode, _MatTreeNodeOutlet];
          },
          imports: function imports() {
            return [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _MatNestedTreeNode, _MatTreeNodeDef, _MatTreeNodePadding, _MatTreeNodeToggle, _MatTree, _MatTreeNode, _MatTreeNodeOutlet];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Tree flattener to convert a normal type of node to node with children & level information.
       * Transform nested nodes of type `T` to flattened nodes of type `F`.
       *
       * For example, the input data of type `T` is nested, and contains its children data:
       *   SomeNode: {
       *     key: 'Fruits',
       *     children: [
       *       NodeOne: {
       *         key: 'Apple',
       *       },
       *       NodeTwo: {
       *        key: 'Pear',
       *      }
       *    ]
       *  }
       *  After flattener flatten the tree, the structure will become
       *  SomeNode: {
       *    key: 'Fruits',
       *    expandable: true,
       *    level: 1
       *  },
       *  NodeOne: {
       *    key: 'Apple',
       *    expandable: false,
       *    level: 2
       *  },
       *  NodeTwo: {
       *   key: 'Pear',
       *   expandable: false,
       *   level: 2
       * }
       * and the output flattened type is `F` with additional information.
       */


      var _MatTreeFlattener = /*#__PURE__*/function () {
        function _MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
          _classCallCheck(this, _MatTreeFlattener);

          this.transformFunction = transformFunction;
          this.getLevel = getLevel;
          this.isExpandable = isExpandable;
          this.getChildren = getChildren;
        }

        _createClass(_MatTreeFlattener, [{
          key: "_flattenNode",
          value: function _flattenNode(node, level, resultNodes, parentMap) {
            var _this16 = this;

            var flatNode = this.transformFunction(node, level);
            resultNodes.push(flatNode);

            if (this.isExpandable(flatNode)) {
              var childrenNodes = this.getChildren(node);

              if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                  this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                } else {
                  childrenNodes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(function (children) {
                    _this16._flattenChildren(children, level, resultNodes, parentMap);
                  });
                }
              }
            }

            return resultNodes;
          }
        }, {
          key: "_flattenChildren",
          value: function _flattenChildren(children, level, resultNodes, parentMap) {
            var _this17 = this;

            children.forEach(function (child, index) {
              var childParentMap = parentMap.slice();
              childParentMap.push(index != children.length - 1);

              _this17._flattenNode(child, level + 1, resultNodes, childParentMap);
            });
          }
          /**
           * Flatten a list of node type T to flattened version of node F.
           * Please note that type T may be nested, and the length of `structuredData` may be different
           * from that of returned list `F[]`.
           */

        }, {
          key: "flattenNodes",
          value: function flattenNodes(structuredData) {
            var _this18 = this;

            var resultNodes = [];
            structuredData.forEach(function (node) {
              return _this18._flattenNode(node, 0, resultNodes, []);
            });
            return resultNodes;
          }
          /**
           * Expand flattened node with current expansion status.
           * The returned list may have different length.
           */

        }, {
          key: "expandFlattenedNodes",
          value: function expandFlattenedNodes(nodes, treeControl) {
            var _this19 = this;

            var results = [];
            var currentExpand = [];
            currentExpand[0] = true;
            nodes.forEach(function (node) {
              var expand = true;

              for (var i = 0; i <= _this19.getLevel(node); i++) {
                expand = expand && currentExpand[i];
              }

              if (expand) {
                results.push(node);
              }

              if (_this19.isExpandable(node)) {
                currentExpand[_this19.getLevel(node) + 1] = treeControl.isExpanded(node);
              }
            });
            return results;
          }
        }]);

        return _MatTreeFlattener;
      }();
      /**
       * Data source for flat tree.
       * The data source need to handle expansion/collapsion of the tree node and change the data feed
       * to `MatTree`.
       * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
       * to type `F` for `MatTree` to consume.
       */


      var _MatTreeFlatDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(_MatTreeFlatDataSource, _angular_cdk_collecti);

        var _super10 = _createSuper(_MatTreeFlatDataSource);

        function _MatTreeFlatDataSource(_treeControl, _treeFlattener, initialData) {
          var _this20;

          _classCallCheck(this, _MatTreeFlatDataSource);

          _this20 = _super10.call(this);
          _this20._treeControl = _treeControl;
          _this20._treeFlattener = _treeFlattener;
          _this20._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
          _this20._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
          _this20._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);

          if (initialData) {
            // Assign the data through the constructor to ensure that all of the logic is executed.
            _this20.data = initialData;
          }

          return _this20;
        }

        _createClass(_MatTreeFlatDataSource, [{
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(value) {
            this._data.next(value);

            this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

            this._treeControl.dataNodes = this._flattenedData.value;
          }
        }, {
          key: "connect",
          value: function connect(collectionViewer) {
            var _this21 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function () {
              _this21._expandedData.next(_this21._treeFlattener.expandFlattenedNodes(_this21._flattenedData.value, _this21._treeControl));

              return _this21._expandedData.value;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {// no op
          }
        }]);

        return _MatTreeFlatDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Data source for nested tree.
       *
       * The data source for nested tree doesn't have to consider node flattener, or the way to expand
       * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
       */


      var _MatTreeNestedDataSource = /*#__PURE__*/function (_angular_cdk_collecti2) {
        _inherits(_MatTreeNestedDataSource, _angular_cdk_collecti2);

        var _super11 = _createSuper(_MatTreeNestedDataSource);

        function _MatTreeNestedDataSource() {
          var _this22;

          _classCallCheck(this, _MatTreeNestedDataSource);

          _this22 = _super11.apply(this, arguments);
          _this22._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
          return _this22;
        }
        /**
         * Data for the nested tree
         */


        _createClass(_MatTreeNestedDataSource, [{
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(value) {
            this._data.next(value);
          }
        }, {
          key: "connect",
          value: function connect(collectionViewer) {
            var _this23 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge).apply(void 0, [collectionViewer.viewChange, this._data]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function () {
              return _this23.data;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {// no op
          }
        }]);

        return _MatTreeNestedDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    82926:
    /*!*************************************************************!*\
      !*** ./src/app/manage-group/manage-group-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageGroupRoutingModule": function ManageGroupRoutingModule() {
          return (
            /* binding */
            _ManageGroupRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../guards/auth.guard */
      95107);
      /* harmony import */


      var _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./manage-groups/manage-groups.component */
      10194);
      /* harmony import */


      var _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../enum/roles.enum */
      66489);
      /* harmony import */


      var _shared_root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/root/root.component */
      59596);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _shared_root_root_component__WEBPACK_IMPORTED_MODULE_3__.RootComponent,
        children: [{
          path: "",
          component: _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsComponent,
          canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
          data: {
            roles: [_enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.CLINICAL_FACILITY_ADMIN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.CLINICAL_FACILITY_ADMIN_CLONE, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.GENERAL_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.SUPERVISORY_CLINICIAN, _enum_roles_enum__WEBPACK_IMPORTED_MODULE_2__.UserRoles.PHYSICIAN]
          }
        }]
      }];

      var _ManageGroupRoutingModule = /*#__PURE__*/_createClass(function _ManageGroupRoutingModule() {
        _classCallCheck(this, _ManageGroupRoutingModule);
      });

      _ManageGroupRoutingModule.ɵfac = function ManageGroupRoutingModule_Factory(t) {
        return new (t || _ManageGroupRoutingModule)();
      };

      _ManageGroupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ManageGroupRoutingModule
      });
      _ManageGroupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ManageGroupRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    62395:
    /*!*****************************************************!*\
      !*** ./src/app/manage-group/manage-group.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageGroupModule": function ManageGroupModule() {
          return (
            /* binding */
            _ManageGroupModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./manage-groups/manage-groups.component */
      10194);
      /* harmony import */


      var _manage_group_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-group-routing.module */
      82926);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tree */
      75473);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _store_manage_groups_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./store/manage-groups.reducer */
      4620);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngrx/effects */
      20275);
      /* harmony import */


      var _store_manage_groups_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./store/manage-groups.effects */
      42230);
      /* harmony import */


      var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../i18n/i18n.module */
      73401);
      /* harmony import */


      var _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../life-signals/life-signals.module */
      13169);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _sub_group_child_sub_group_child_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sub-group-child/sub-group-child.component */
      49044);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ManageGroupModule = /*#__PURE__*/_createClass(function _ManageGroupModule() {
        _classCallCheck(this, _ManageGroupModule);
      });

      _ManageGroupModule.ɵfac = function ManageGroupModule_Factory(t) {
        return new (t || _ManageGroupModule)();
      };

      _ManageGroupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _ManageGroupModule
      });
      _ManageGroupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _manage_group_routing_module__WEBPACK_IMPORTED_MODULE_2__.ManageGroupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_5__.I18nModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreModule.forFeature(_store_manage_groups_reducer__WEBPACK_IMPORTED_MODULE_3__.manageGroupFeatureKey, _store_manage_groups_reducer__WEBPACK_IMPORTED_MODULE_3__.GroupsReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsModule.forFeature([_store_manage_groups_effects__WEBPACK_IMPORTED_MODULE_4__.ManageGroupsEffects]), _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_6__.LifeSignalsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_ManageGroupModule, {
          declarations: [_manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsComponent, _sub_group_child_sub_group_child_component__WEBPACK_IMPORTED_MODULE_7__.SubGroupChildComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _manage_group_routing_module__WEBPACK_IMPORTED_MODULE_2__.ManageGroupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_5__.I18nModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsFeatureModule, _life_signals_life_signals_module__WEBPACK_IMPORTED_MODULE_6__.LifeSignalsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule]
        });
      })();
      /***/

    },

    /***/
    10194:
    /*!***********************************************************************!*\
      !*** ./src/app/manage-group/manage-groups/manage-groups.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageGroupsComponent": function ManageGroupsComponent() {
          return (
            /* binding */
            _ManageGroupsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _models_manage_groups_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/manage-groups.model */
      59068);
      /* harmony import */


      var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/confirm-dialog/confirm-dialog.component */
      22887);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _managers_manage_groups_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../managers/manage-groups-manager.service */
      31106);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services/authentication.service */
      7053);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../life-signals/_components/ls-page-header/ls-page-header.component */
      63601);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _sub_group_child_sub_group_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../sub-group-child/sub-group-child.component */
      49044);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function ManageGroupsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_div_9_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r4.toggleAddPgroup("ROOT");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "manage-group-module.button.add_level"), " ");
        }
      }

      function ManageGroupsComponent_mat_progress_spinner_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-spinner", 13);
        }
      }

      function ManageGroupsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "manage-group-module.no_location_groups"), " ");
        }
      }

      function ManageGroupsComponent_ng_container_13_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_span_2_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r16.cancelAdd(pGroupItem_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_span_3_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r19.confirmDelete(pGroupItem_r6 == null ? null : pGroupItem_r6.groupId, "PHYSICAL");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_h2_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", pGroupItem_r6.name, " ");
        }
      }

      function ManageGroupsComponent_ng_container_13_div_5_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_div_5_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r25.savePGroup(pGroupItem_r6, "root");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_div_5_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_div_5_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r28.cancelEdit(pGroupItem_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ManageGroupsComponent_ng_container_13_div_5_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            return pGroupItem_r6.name = $event;
          })("keypress", function ManageGroupsComponent_ng_container_13_div_5_Template_input_keypress_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r34.alphaNumericsOnly($event);
          })("paste", function ManageGroupsComponent_ng_container_13_div_5_Template_input_paste_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r35.alphaNumericsOnPaste($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ManageGroupsComponent_ng_container_13_div_5_button_3_Template, 3, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ManageGroupsComponent_ng_container_13_div_5_button_4_Template, 3, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", pGroupItem_r6.name)("maxLength", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (pGroupItem_r6 == null ? null : pGroupItem_r6.name == null ? null : pGroupItem_r6.name.trim().length) && (pGroupItem_r6 == null ? null : pGroupItem_r6.name) !== (pGroupItem_r6 == null ? null : pGroupItem_r6.tempName) && ctx_r11.validateName(pGroupItem_r6 == null ? null : pGroupItem_r6.name == null ? null : pGroupItem_r6.name.toUpperCase()));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pGroupItem_r6 == null ? null : pGroupItem_r6.groupId);
        }
      }

      function ManageGroupsComponent_ng_container_13_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_span_6_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r37.editSubGroup(pGroupItem_r6, "ROOT");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r40.toggleAddPgroup(pGroupItem_r6.groupId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_button_8_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_button_8_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ManageGroupsComponent_ng_container_13_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageGroupsComponent_ng_container_13_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);

            var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            !pGroupItem_r6.expanded ? ctx_r45.keepOpen = pGroupItem_r6.groupId : ctx_r45.keepOpen = null;
            return pGroupItem_r6.expanded = !pGroupItem_r6.expanded;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ManageGroupsComponent_ng_container_13_button_8_mat_icon_1_Template, 2, 0, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ManageGroupsComponent_ng_container_13_button_8_mat_icon_2_Template, 2, 0, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !pGroupItem_r6.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pGroupItem_r6.expanded);
        }
      }

      function ManageGroupsComponent_ng_container_13_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-sub-group-child", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updateGroups", function ManageGroupsComponent_ng_container_13_div_9_Template_app_sub_group_child_updateGroups_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r49.onUpdateGroups($event);
          })("getGroups", function ManageGroupsComponent_ng_container_13_div_9_Template_app_sub_group_child_getGroups_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r51.onGetGroups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pGroupItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("level", 1)("pGroups", ctx_r15.pGroups)("isCreationAllowed", ctx_r15.isCreationAllowed)("pGroupItem", pGroupItem_r6);
        }
      }

      function ManageGroupsComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ManageGroupsComponent_ng_container_13_span_2_Template, 3, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ManageGroupsComponent_ng_container_13_span_3_Template, 3, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ManageGroupsComponent_ng_container_13_h2_4_Template, 2, 1, "h2", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ManageGroupsComponent_ng_container_13_div_5_Template, 5, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ManageGroupsComponent_ng_container_13_span_6_Template, 3, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ManageGroupsComponent_ng_container_13_button_7_Template, 3, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ManageGroupsComponent_ng_container_13_button_8_Template, 3, 2, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ManageGroupsComponent_ng_container_13_div_9_Template, 2, 4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var pGroupItem_r6 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var tmp_5_0;
          var tmp_6_0;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && !(pGroupItem_r6 == null ? null : pGroupItem_r6.groupId));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && !(pGroupItem_r6 == null ? null : pGroupItem_r6.hasChildren) && (pGroupItem_r6 == null ? null : pGroupItem_r6.groupId));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(pGroupItem_r6 == null ? null : pGroupItem_r6.isShow));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pGroupItem_r6 == null ? null : pGroupItem_r6.isShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && !(pGroupItem_r6 == null ? null : pGroupItem_r6.isShow));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && pGroupItem_r6.groupId && (!(pGroupItem_r6 == null ? null : pGroupItem_r6.hasChildren) || !((tmp_5_0 = ctx_r3.getSubPGroups(pGroupItem_r6 == null ? null : pGroupItem_r6.groupId)) == null ? null : tmp_5_0.length)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (pGroupItem_r6 == null ? null : pGroupItem_r6.hasChildren) && ((tmp_6_0 = ctx_r3.getSubPGroups(pGroupItem_r6 == null ? null : pGroupItem_r6.groupId)) == null ? null : tmp_6_0.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!(pGroupItem_r6 == null ? null : pGroupItem_r6.expanded));
        }
      }

      var _ManageGroupsComponent = /*#__PURE__*/function () {
        function _ManageGroupsComponent(router, manager, authSevice, snackbar, dialog) {
          _classCallCheck(this, _ManageGroupsComponent);

          this.router = router;
          this.manager = manager;
          this.authSevice = authSevice;
          this.snackbar = snackbar;
          this.dialog = dialog;
          this.isCreationAllowed = false;
          this.loading = true;
          this.tempName = null;
          this.cGroups = [];
          this.pGroups = [];
        }

        _createClass(_ManageGroupsComponent, [{
          key: "isAuthorisedUser",
          value: function isAuthorisedUser() {
            if (this.authSevice.getRoles().indexOf('CFA') > -1 || this.authSevice.getRoles().indexOf('CFAC') > -1) {
              this.isCreationAllowed = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isAuthorisedUser();
            this.getGroups();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a, _b;

            (_a = this.manageGroupSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this.loaderSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          }
        }, {
          key: "toggleAddPgroup",
          value: function toggleAddPgroup(parentId) {
            if (!this.pGroups.some(function (g) {
              return !g.groupId && g.parent === parentId;
            })) {
              if (parentId !== 'ROOT') {
                this.pGroups.find(function (g) {
                  return g.groupId === parentId;
                }).expanded = true;
                this.pGroups.find(function (g) {
                  return g.groupId === parentId;
                }).hasChildren = true;
              }

              this.pGroups = [{
                name: "",
                parent: parentId,
                type: "physical",
                isShow: true
              }].concat(_toConsumableArray(this.pGroups));
            }
          }
        }, {
          key: "onUpdateGroups",
          value: function onUpdateGroups(groups) {
            this.pGroups = _toConsumableArray(groups);
          }
        }, {
          key: "toggleAddCgroup",
          value: function toggleAddCgroup(parentId) {
            this.cGroups = [{
              name: "",
              parent: parentId,
              type: "clinical",
              isShow: true
            }].concat(_toConsumableArray(this.cGroups));
          }
        }, {
          key: "savePGroup",
          value: function savePGroup(obj, parent) {
            var _this24 = this;

            obj.parent = parent;
            var ob = {
              name: this.capitalizeText(obj.name),
              parent: obj.parent,
              type: "physical",
              facility_id: "test" // facilityId: this.pGroups[this.pGroups.length - 1].facilityId

            };

            if (obj.groupId) {
              ob.groupId = obj.groupId;
              this.manager.updateGroup(ob).subscribe(function (r) {
                if (r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this24.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this24.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            } else {
              this.manager.saveGroup(ob).subscribe(function (r) {
                if (r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this24.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this24.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            }
          }
        }, {
          key: "saveCGroup",
          value: function saveCGroup(obj, parent) {
            var _this25 = this;

            obj.parent = parent;
            var ob = {
              name: this.capitalizeText(obj.name),
              parent: "root",
              type: "clinical",
              facility_id: "test"
            };

            if (obj.groupId) {
              ob.groupId = obj.groupId;
              this.manager.updateGroup(ob);
            } else {
              this.manager.saveGroup(ob).subscribe(function (r) {
                if (r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this25.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this25.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            }
          }
        }, {
          key: "cancelAdd",
          value: function cancelAdd(groupItem) {
            groupItem.isShow = false;

            if (groupItem.type === "PHYSICAL") {
              if (groupItem.parent !== 'ROOT') {
                if (!this.pGroups.find(function (g) {
                  return g.parent === groupItem.parent;
                })) {
                  this.pGroups.find(function (g) {
                    return g.groupId === groupItem.parent;
                  }).hasChildren = false;
                  this.pGroups.find(function (g) {
                    return g.groupId === groupItem.parent;
                  }).expanded = false;
                }
              }

              this.pGroups = this.pGroups.filter(function (g) {
                return g.groupId;
              });
            } else if (groupItem.type === "clinical") {
              this.cGroups = this.cGroups.filter(function (g) {
                return g.groupId;
              });
            }
          }
        }, {
          key: "saveSubPGroup",
          value: function saveSubPGroup(obj, parentId) {
            var _this26 = this;

            delete obj.isShow;
            obj.parent = parentId;

            if (!obj.groupId) {
              var ob = {
                name: this.capitalizeText(obj.name),
                parent: parentId,
                type: obj.type,
                groupId: null
              };
              this.manager.saveGroup(ob).subscribe(function (r) {
                if (r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this26.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this26.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            } else {
              var _ob = {
                name: this.capitalizeText(obj.name),
                parent: parentId,
                type: obj.type,
                groupId: obj.groupId
              };
              this.manager.updateGroup(_ob).subscribe(function (r) {
                if (r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this26.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this26.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            }
          }
        }, {
          key: "editGroup",
          value: function editGroup(groupItem) {
            this.tempName = groupItem.name;
            groupItem.tempName = groupItem.name;
            groupItem.isShow = true;
          }
        }, {
          key: "cancelEdit",
          value: function cancelEdit(groupItem) {
            groupItem.name = groupItem.tempName;
            groupItem.isShow = false;
          }
        }, {
          key: "editSubGroup",
          value: function editSubGroup(groupItem, parentId) {
            this.tempName = groupItem.name;
            groupItem.tempName = groupItem.name;
            groupItem.isShow = true;
            groupItem.parent = parentId;
          }
        }, {
          key: "onGetGroups",
          value: function onGetGroups() {
            console.log('reload');
            this.getGroups();
          }
        }, {
          key: "deletePGroupItem",
          value: function deletePGroupItem(groupId) {
            var _this27 = this;

            if (groupId) {
              this.manager.removeGroup(groupId).subscribe(function (r) {
                if (r.error) {
                  _this27.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                } else {// this.pGroups = [...this.pGroups.filter(g => g.groupId !== groupId)];
                }
              });
            } else {
              this.pGroups = this.pGroups.filter(function (g) {
                return g.groupId;
              });
            }

            setTimeout(function () {
              _this27.getGroups();
            }, 200);
          }
        }, {
          key: "deleteCGroupItem",
          value: function deleteCGroupItem(groupId) {
            var _this28 = this;

            if (groupId) {
              this.manager.removeGroup(groupId).subscribe(function (r) {
                if (r.error) {
                  _this28.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                } else {//this.cGroups = this.cGroups.filter(g => g.groupId !== groupId);
                }
              });
            } else {
              this.cGroups = this.cGroups.filter(function (g) {
                return g.groupId;
              });
            }

            setTimeout(function () {
              _this28.getGroups();
            }, 200);
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(groupId, type) {
            var _this29 = this;

            var confirm = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
              maxWidth: "85vw",
              height: "auto",
              maxHeight: "90vh",
              data: {
                body: {
                  title: "manage-group-module.delete_group",
                  text: "manage-group-module.confirm_delete_group"
                }
              },
              disableClose: true
            });
            confirm.afterClosed().subscribe(function (data) {
              if (data) {
                if (type === 'physical') {
                  _this29.deletePGroupItem(groupId);
                } else {
                  _this29.deleteCGroupItem(groupId);
                }
              }
            });
          }
        }, {
          key: "goBackToSummary",
          value: function goBackToSummary() {
            this.router.navigate(["summary"]);
          }
        }, {
          key: "getGroups",
          value: function getGroups() {
            var _this30 = this;

            this.manageGroups$ = this.manager.fetchGroups();
            this.manageGroupSubscription = this.manageGroups$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              var cGroups = ((x === null || x === void 0 ? void 0 : x.CLINICAL_GROUPS) || []).map(function (y) {
                return Object.assign(Object.assign({}, y), {
                  isShow: false
                });
              });
              _this30.cGroups = cGroups.map(function (g) {
                return Object.assign({}, g);
              });
              var pGroups = ((x === null || x === void 0 ? void 0 : x.PHYSICAL_GROUPS) || []).map(function (y) {
                return Object.assign(Object.assign({}, y), {
                  isShow: false
                });
              });
              _this30.pGroups = _toConsumableArray(pGroups.filter(function (p) {
                return !p.deleted;
              }).map(function (g) {
                var _a;

                return Object.assign(Object.assign({}, g), {
                  expanded: ((_a = _this30.pGroups.find(function (group) {
                    return group.groupId === g.groupId;
                  })) === null || _a === void 0 ? void 0 : _a.expanded) || false,
                  hasChildren: !!(pGroups === null || pGroups === void 0 ? void 0 : pGroups.find(function (group) {
                    return group.parent === g.groupId;
                  }))
                });
              }));
              console.log(_this30.pGroups);
            })).subscribe();
            this.loaderSubscription = this.manager.getLoadedStatus().subscribe(function (loaded) {
              _this30.loading = !loaded;
            });
          }
        }, {
          key: "getSubPGroups",
          value: function getSubPGroups(parentId) {
            var _this31 = this;

            var groups = (this.pGroups || []).filter(function (g) {
              return g.parent === parentId;
            });

            if (parentId === 'ROOT') {
              this.pGroups.forEach(function (group) {
                if (group.parent !== 'ROOT' && !_this31.pGroups.find(function (grp) {
                  return grp.groupId === group.parent;
                })) {
                  groups.push(group);
                }
              });
            }

            return groups;
          }
        }, {
          key: "getSubCGroups",
          value: function getSubCGroups(parentId) {
            return (this.cGroups || []).filter(function (g) {
              return g.parent === parentId;
            });
          }
        }, {
          key: "alphaNumericsOnly",
          value: function alphaNumericsOnly(event) {
            var charsOnlyPattern = /^[a-zA-Z0-9-_ ]+$/;
            var key = event.key;

            if (charsOnlyPattern.test(key)) {
              return true;
            } else {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "validateName",
          value: function validateName(groupName) {
            return _models_manage_groups_model__WEBPACK_IMPORTED_MODULE_0__.groupNamePattern.test(groupName) && _models_manage_groups_model__WEBPACK_IMPORTED_MODULE_0__.restrictedGroupNames.indexOf(groupName) === -1;
          }
        }, {
          key: "alphaNumericsOnPaste",
          value: function alphaNumericsOnPaste(event) {
            var regex = /^[a-zA-Z0-9-_ ]+$/;
            var pasteData = event.clipboardData.getData('text');

            if (!regex.test(pasteData)) {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "capitalizeText",
          value: function capitalizeText(name) {
            //let transform = name.toLowerCase();
            return name.replace(/\w\S*/g, function (w) {
              return w.replace(/^\w/, function (c) {
                return c.toUpperCase();
              });
            });
          }
        }]);

        return _ManageGroupsComponent;
      }();

      _ManageGroupsComponent.ɵfac = function ManageGroupsComponent_Factory(t) {
        return new (t || _ManageGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_managers_manage_groups_manager_service__WEBPACK_IMPORTED_MODULE_2__.ManageGroupsManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
      };

      _ManageGroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ManageGroupsComponent,
        selectors: [["app-manage-groups"]],
        decls: 14,
        vars: 7,
        consts: [["type", "manage_groups"], [1, "container-fuild"], [1, "mat-tree-grpup"], [1, "manage-group"], [1, "display-flex", "d-flex", "flex-column", "justify-content-start", "align-items-start"], [1, "mt-0", "mb-2", "label-group"], ["class", "add-items my-2", 4, "ngIf"], ["class", "mt-3 d-flex align-self-center justify-self-center small-spinner", "color", "accent", "mode", "indeterminate", "strokeWidth", "2", "diameter", "40", 4, "ngIf"], ["class", "my-2", 4, "ngIf"], [1, "group-listing"], [4, "ngFor", "ngForOf"], [1, "add-items", "my-2"], ["mat-stroked-button", "", 1, "small-button", 3, "click"], ["color", "accent", "mode", "indeterminate", "strokeWidth", "2", "diameter", "40", 1, "mt-3", "d-flex", "align-self-center", "justify-self-center", "small-spinner"], [1, "my-2"], [1, "my-1", "manage-card"], ["class", "delete-icon", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "nested-group d-flex align-items-center", 4, "ngIf"], ["class", "edit-icon", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "style", "position: absolute; right: 1rem", "class", "btn-sml-boxed", "color", "primary", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "class", "btn-sml-boxed expand-boxed-btn", "color", "primary", 3, "click", 4, "ngIf"], ["class", "manage-nested d-flex flex-column", 4, "ngIf"], [1, "delete-icon", 3, "click"], [1, "nested-group", "d-flex", "align-items-center"], [1, "ms-3", "input-group"], ["type", "text", "placeholder", "Group Name", "autocomplete", "off", 1, "px-2", "form-control", "edit-form-control", "me-2", 3, "ngModel", "maxLength", "ngModelChange", "keypress", "paste"], ["mat-mini-fab", "", "color", "primary", "class", "mx-2 btn-sml-boxed btn-no-shadow primary-button", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "mx-2", "btn-sml-boxed", "btn-no-shadow", "primary-button", 3, "click"], [1, "edit-icon", 3, "click"], ["mat-mini-fab", "", "color", "primary", 1, "btn-sml-boxed", 2, "position", "absolute", "right", "1rem", 3, "click"], ["mat-mini-fab", "", "color", "primary", 1, "btn-sml-boxed", "expand-boxed-btn", 3, "click"], [1, "manage-nested", "d-flex", "flex-column"], [1, "w-100", 3, "level", "pGroups", "isCreationAllowed", "pGroupItem", "updateGroups", "getGroups"]],
        template: function ManageGroupsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ls-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ManageGroupsComponent_div_9_Template, 4, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ManageGroupsComponent_mat_progress_spinner_10_Template, 1, 0, "mat-progress-spinner", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ManageGroupsComponent_div_11_Template, 3, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ManageGroupsComponent_ng_container_13_Template, 10, 8, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 5, "manage-group-module.label.location"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isCreationAllowed);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.pGroups == null ? null : ctx.pGroups.length) && !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.getSubPGroups("ROOT"));
          }
        },
        directives: [_life_signals_components_ls_page_header_ls_page_header_component__WEBPACK_IMPORTED_MODULE_5__.LsPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _sub_group_child_sub_group_child_component__WEBPACK_IMPORTED_MODULE_6__.SubGroupChildComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
        styles: [".mat-tree-grpup[_ngcontent-%COMP%] {\n  padding: 2.5rem 0rem 2.5rem;\n}\n@media only screen and (max-width: 767px) {\n  .mat-tree-grpup[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n.edit-form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: capitalize;\n}\n.manage-card[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  position: relative;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n}\n.small-button[_ngcontent-%COMP%] {\n  font-size: 8px;\n  height: 1.25rem;\n  line-height: 1;\n  min-height: auto;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.manage-group[_ngcontent-%COMP%] {\n  \n}\n.manage-group[_ngcontent-%COMP%]   .display-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.manage-group[_ngcontent-%COMP%]   .display-flex[_ngcontent-%COMP%]   .label-group[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-transform: uppercase;\n  padding: 0.4rem 0.5rem;\n  border-radius: 0.25rem;\n  border: 1px solid white;\n}\n.manage-group[_ngcontent-%COMP%]   .display-flex[_ngcontent-%COMP%]   .label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-radius: 0.25rem;\n  font-weight: 600;\n}\n.manage-group[_ngcontent-%COMP%]   .display-flex[_ngcontent-%COMP%]   .add-items[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #C5FF20;\n  color: #C5FF20;\n  background: rgba(197, 255, 32, 0.08);\n  text-transform: uppercase;\n  box-shadow: none;\n}\n.manage-group[_ngcontent-%COMP%]   .add-level-button[_ngcontent-%COMP%] {\n  border: 1px solid #c6005f;\n  position: absolute !important;\n  left: 2rem;\n  font-size: 0.8rem;\n  background-color: transparent;\n  color: #c6005f;\n  padding: 0.2rem 0.5rem;\n  border-radius: 0.25rem;\n  z-index: 9000;\n}\n@media only screen and (max-width: 479px) {\n  .manage-group[_ngcontent-%COMP%]   .add-level-button[_ngcontent-%COMP%] {\n    left: 0px;\n    margin-left: 0 !important;\n  }\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%] {\n  position: relative;\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0rem;\n  position: initial;\n  border-left: none;\n  position: relative;\n}\n@media only screen and (max-width: 479px) {\n  .manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%] {\n    margin-left: 6rem;\n    width: calc(100% - 6rem);\n  }\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%] {\n  background-color: #042f55;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  border-left: 4px solid #c6005f;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 20px;\n  width: 100%;\n  position: relative;\n}\n@media only screen and (max-width: 767px) {\n  .manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%] {\n    padding-right: 1rem;\n  }\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  margin: 0rem 1rem;\n  width: auto;\n  max-width: 300px;\n}\n@media only screen and (max-width: 767px) {\n  .manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 26px;\n  box-shadow: inset 2px 1px 5px rgba(0, 0, 0, 0.25);\n  border-radius: 0.25rem;\n  border: 0.5px solid #666666;\n  background-color: #fff;\n  font-size: 12px;\n  color: #666666;\n  font-weight: 700;\n}\n@media only screen and (max-width: 479px) {\n  .manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  min-width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px;\n}\n.manage-group[_ngcontent-%COMP%]   .manage-nested[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   .nested-group[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1ncm91cHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1vZHVsZXNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FDR0EseUJBQUE7QUFzRUEsb0JBQUE7QUF3Q0EsV0FBQTtBQU1BLFVBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFRQSxrQkFBQTtBQUlBLGNBQUE7QUFlQSxlQUFBO0FBSUEsZUFBQTtBQTBCQSxrQkFBQTtBQVFBLGlCQUFBO0FBUUEsNkJBQUE7QUFRQSwrQkFBQTtBQ3JOQSxVQUFBO0FGSUEsb0JBQUE7QUFDQTtFQUNFLDJCQUFBO0FBYUY7QUFYRTtFQUhGO0lBSUksbUJBQUE7RUFjRjtBQUNGO0FBWkE7RUFDRSxxQ0FBQTtBQWVGO0FBWkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFlRjtBQVpBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWVGO0FBWkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFlRjtBQVpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZUY7QUFaQTtFQStCRSxlQUFBO0FBZkY7QUFmRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWlCSjtBQWZJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkN5RFU7RUR4RFYsdUJBQUE7QUFpQk47QUFmTTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkNtRFE7RURsRFIsZ0JDdUVVO0FEdERsQjtBQVpNO0VBQ0UseUJBQUE7RUFDQSxjQ3VKZTtFRHRKZixvQ0N1Sm1CO0VEdEpuQix5QkFBQTtFQUNBLGdCQUFBO0FBY1I7QUFSRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNDdEJTO0VEdUJULHNCQUFBO0VBQ0Esc0JDMEJZO0VEekJaLGFBQUE7QUFVSjtBQVJJO0VBWEY7SUFZSSxTQUFBO0lBQ0EseUJBQUE7RUFXSjtBQUNGO0FBUkU7RUFFRSxrQkFBQTtBQVNKO0FBUEk7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNOO0FBUE07RUFSRjtJQVVJLGlCQUFBO0lBQ0Esd0JBQUE7RUFTTjtBQUNGO0FBUE07RUFDRSx5QkNOZ0I7RUNuRnRCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VGeUZNLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0NtQ1U7RURsQ1YsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQ2xHRTtFRG1HRixXQUFBO0VBQ0Esa0JBQUE7QUFXUjtBQVRRO0VBWkY7SUFhSSxtQkFBQTtFQVlSO0FBQ0Y7QUFWUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBWVY7QUFWVTtFQUxGO0lBTUksZUFBQTtFQWFWO0FBQ0Y7QUFWVTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkMvQkk7RURnQ0osMkJBQUE7RUFDQSxzQkMzSUo7RUQ0SUksZUNqSUY7RURrSUUsY0NsRkE7RURtRkEsZ0JDZE07QUQwQmxCO0FBVlk7RUFYRjtJQVlJLFdBQUE7RUFhWjtBQUNGO0FBVFE7RUFDRSxlQUFBO0VFcElSLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VGb0lRLFlBQUE7QUFhVjtBQVhVO0VBQ0UsZUFBQTtFRXpJVixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRnVKRiIsImZpbGUiOiJtYW5hZ2UtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmV3IHZhcmlhYmxlIGRlZmluZSAqL1xuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19taXhpbnNcIjtcblxuLyoqIG1hbmFuZ2UgZ3JvdXAgKiovXG4ubWF0LXRyZWUtZ3JwdXAge1xuICBwYWRkaW5nOiAyLjVyZW0gMHJlbSAyLjVyZW07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgfVxufVxuaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1hbmFnZS1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tYW5hZ2UtZ3JvdXAge1xuICAuZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5sYWJlbC1ncm91cCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtaXRlbXMge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjtcbiAgICAgICAgY29sb3I6ICRkZWZhdWx0LW1hbmFnZS1idXR0b247XG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b247XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqKiBuZXN0ZWQgKioqL1xuICAuYWRkLWxldmVsLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHBpbmstY29sb3I7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMnJlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHBpbmstY29sb3I7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICB6LWluZGV4OiA5MDAwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWFuYWdlLW5lc3RlZCB7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubWFuYWdlLWNhcmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcblxuICAgICAgICBtYXJnaW4tbGVmdDogNnJlbTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZyZW0pO1xuICAgICAgfVxuXG4gICAgICAubmVzdGVkLWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjtcbiAgICAgICAgQGluY2x1ZGUgZGlzcGxheWZsZXgoKTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRwaW5rLWNvbG9yO1xuICAgICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jYXJkO1xuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRzaXplLTIwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICAgIG1hcmdpbjogMHJlbSAxcmVtO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICRib3gtc2hhZG93LWluc2V0LWFyZWE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgJGNvbG9yZ3JheTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWZvbnQtY29sb3I7XG4gICAgICAgICAgICBmb250LXNpemU6ICRzaXplLTEyO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcmdyYXk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTcwMDtcblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJpbWFyeS1idXR0b24ge1xuICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICBAaW5jbHVkZSBkaXNwbGF5ZmxleCgpO1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBAaW5jbHVkZSBkaXNwbGF5ZmxleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiLyptaXhpbnMgKi9cblxuQG1peGluIHRyYW5zaXRpb24oJGFuaW1hdGlvbikge1xuICAtbXMtdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIHRyYW5zaXRpb246ICRhbmltYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm1Sb3RhdGUoKSB7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG5AbWl4aW4gZGlzcGxheWZsZXgoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleHZlcnRpY2FsKCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSgpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"]
      });
      /***/
    },

    /***/
    31106:
    /*!************************************************************************!*\
      !*** ./src/app/manage-group/managers/manage-groups-manager.service.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageGroupsManagerService": function ManageGroupsManagerService() {
          return (
            /* binding */
            _ManageGroupsManagerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../store */
      24910);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      17562);

      var _ManageGroupsManagerService = /*#__PURE__*/function () {
        function _ManageGroupsManagerService(store$) {
          _classCallCheck(this, _ManageGroupsManagerService);

          this.store$ = store$;
        }

        _createClass(_ManageGroupsManagerService, [{
          key: "saveGroup",
          value: function saveGroup(groupData) {
            this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreActions.SaveGroupRequestAction(groupData));
            return this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreSelectors.saveGroup);
          }
        }, {
          key: "updateGroup",
          value: function updateGroup(groupData) {
            this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreActions.UpdateGroupRequestAction(groupData));
            return this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreSelectors.saveGroup);
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(groupId) {
            this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreActions.RemoveGroupRequestAction(groupId));
            return this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreSelectors.removeGroup);
          }
        }, {
          key: "fetchGroups",
          value: function fetchGroups() {
            this.store$.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreActions.LoadGroupsRequestAction());
            return this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreSelectors.selectGroupsList);
          }
        }, {
          key: "getLoadedStatus",
          value: function getLoadedStatus() {
            return this.store$.select(_store__WEBPACK_IMPORTED_MODULE_0__.ManageGroupsStoreSelectors.groupsLoaded);
          }
        }]);

        return _ManageGroupsManagerService;
      }();

      _ManageGroupsManagerService.ɵfac = function ManageGroupsManagerService_Factory(t) {
        return new (t || _ManageGroupsManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
      };

      _ManageGroupsManagerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ManageGroupsManagerService,
        factory: _ManageGroupsManagerService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    42230:
    /*!*************************************************************!*\
      !*** ./src/app/manage-group/store/manage-groups.effects.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageGroupsEffects": function ManageGroupsEffects() {
          return (
            /* binding */
            _ManageGroupsEffects
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
      96958);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-groups.actions */
      74114);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_manage_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/manage-groups.service */
      34887);

      var _ManageGroupsEffects = /*#__PURE__*/_createClass(function _ManageGroupsEffects(manageGroupService, actions$) {
        var _this32 = this;

        _classCallCheck(this, _ManageGroupsEffects);

        this.manageGroupService = manageGroupService;
        this.actions$ = actions$;
        this.loadGroups$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          console.log("calling");
          return _this32.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.LOAD_GROUPS_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(function () {
            return _this32.manageGroupService.fetch().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (groups) {
              return new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.LoadGroupsSuccessAction({
                groups: groups.data
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.LoadGroupsFailureAction(error));
            }));
          }));
        });
        this.saveGroup$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this32.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SAVE_GROUP_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(function (data) {
            return _this32.manageGroupService.save(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (group) {
              return new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.SaveGroupSuccessAction({
                group: group
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.SaveGroupFailureAction(error));
            }));
          }));
        });
        this.updateGroup$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this32.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UPDATE_GROUP_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(function (data) {
            return _this32.manageGroupService.update(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (group) {
              return new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateGroupSuccessAction({
                group: group
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateGroupFailureAction(error));
            }));
          }));
        });
        this.removeGroup$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this32.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.REMOVE_GROUP_REQUEST), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(function (data) {
            return _this32.manageGroupService.remove(data.payload).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (group) {
              return new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveGroupSuccessAction({
                group: group
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _manage_groups_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveGroupFailureAction(error));
            }));
          }));
        });
      });

      _ManageGroupsEffects.ɵfac = function ManageGroupsEffects_Factory(t) {
        return new (t || _ManageGroupsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_1__.ManageGroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions));
      };

      _ManageGroupsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _ManageGroupsEffects,
        factory: _ManageGroupsEffects.ɵfac
      });
      /***/
    },

    /***/
    49044:
    /*!***************************************************************************!*\
      !*** ./src/app/manage-group/sub-group-child/sub-group-child.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubGroupChildComponent": function SubGroupChildComponent() {
          return (
            /* binding */
            _SubGroupChildComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _models_manage_groups_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/manage-groups.model */
      59068);
      /* harmony import */


      var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/confirm-dialog/confirm-dialog.component */
      22887);
      /* harmony import */


      var _managers_manage_groups_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../managers/manage-groups-manager.service */
      31106);
      /* harmony import */


      var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services/snackbar.service */
      45832);
      /* harmony import */


      var _services_manage_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/manage-groups.service */
      34887);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r15.toggleAddPgroup(ctx_r15.pGroupItem == null ? null : ctx_r15.pGroupItem.groupId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("level" + ctx_r4.level);
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_span_5_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.cancelAdd(subItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_span_6_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r20.confirmDelete(subItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r23.toggleAddPgroup(subItem_r1 == null ? null : subItem_r1.groupId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_h2_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", subItem_r1 == null ? null : subItem_r1.name, " ", subItem_r1 == null ? null : subItem_r1.deleted, " ");
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_input_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SubGroupChildComponent_mat_card_0_ng_container_1_input_10_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            return subItem_r1.name = $event;
          })("keypress", function SubGroupChildComponent_mat_card_0_ng_container_1_input_10_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r30.alphaNumericsOnly($event);
          })("paste", function SubGroupChildComponent_mat_card_0_ng_container_1_input_10_Template_input_paste_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r31.alphaNumericsOnPaste($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", subItem_r1.name)("maxLength", 32);
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_span_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_span_11_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r33.editSubGroup(subItem_r1, ctx_r33.pGroupItem == null ? null : ctx_r33.pGroupItem.groupId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r36.cancelEdit(subItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r39.saveSubPGroup(subItem_r1, ctx_r39.pGroupItem == null ? null : ctx_r39.pGroupItem.groupId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_14_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_14_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubGroupChildComponent_mat_card_0_ng_container_1_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);

            var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            !subItem_r1.expanded ? ctx_r44.keepOpen = subItem_r1.groupId : ctx_r44.keepOpen = null;
            return subItem_r1.expanded = !subItem_r1.expanded;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubGroupChildComponent_mat_card_0_ng_container_1_button_14_mat_icon_1_Template, 2, 0, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SubGroupChildComponent_mat_card_0_ng_container_1_button_14_mat_icon_2_Template, 2, 0, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !subItem_r1.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subItem_r1.expanded);
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-sub-group-child", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("updateGroups", function SubGroupChildComponent_mat_card_0_ng_container_1_div_15_Template_app_sub_group_child_updateGroups_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r48.updateGroups;
          })("getGroups", function SubGroupChildComponent_mat_card_0_ng_container_1_div_15_Template_app_sub_group_child_getGroups_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r50.getGroups;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pGroups", ctx_r14.pGroups)("isCreationAllowed", ctx_r14.isCreationAllowed)("level", ctx_r14.level + 1)("pGroupItem", subItem_r1);
        }
      }

      function SubGroupChildComponent_mat_card_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SubGroupChildComponent_mat_card_0_ng_container_1_button_3_Template, 2, 2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SubGroupChildComponent_mat_card_0_ng_container_1_span_5_Template, 3, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SubGroupChildComponent_mat_card_0_ng_container_1_span_6_Template, 3, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SubGroupChildComponent_mat_card_0_ng_container_1_button_7_Template, 3, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SubGroupChildComponent_mat_card_0_ng_container_1_h2_8_Template, 2, 2, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SubGroupChildComponent_mat_card_0_ng_container_1_input_10_Template, 1, 2, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SubGroupChildComponent_mat_card_0_ng_container_1_span_11_Template, 3, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SubGroupChildComponent_mat_card_0_ng_container_1_button_12_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SubGroupChildComponent_mat_card_0_ng_container_1_button_13_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SubGroupChildComponent_mat_card_0_ng_container_1_button_14_Template, 3, 2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SubGroupChildComponent_mat_card_0_ng_container_1_div_15_Template, 2, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var i_r2 = ctx_r52.index;
          var subItem_r1 = ctx_r52.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var tmp_5_0;
          var tmp_11_0;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"]("margin-left: " + ctx_r3.level * 7 + "rem; width: calc(100% - " + ctx_r3.level * 7 + "rem);");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("level" + ctx_r3.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && i_r2 === 0 && (subItem_r1 == null ? null : subItem_r1.groupId));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && !(subItem_r1 == null ? null : subItem_r1.groupId));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && (subItem_r1 == null ? null : subItem_r1.groupId) && !(subItem_r1 == null ? null : subItem_r1.hasChildren));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && (subItem_r1 == null ? null : subItem_r1.groupId) && (!(subItem_r1 == null ? null : subItem_r1.hasChildren) || !((tmp_5_0 = ctx_r3.getSubPGroups(subItem_r1 == null ? null : subItem_r1.groupId)) == null ? null : tmp_5_0.length)) && ctx_r3.level < 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(subItem_r1 == null ? null : subItem_r1.isShow));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subItem_r1 == null ? null : subItem_r1.isShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isCreationAllowed && !(subItem_r1 == null ? null : subItem_r1.isShow));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (subItem_r1 == null ? null : subItem_r1.groupId) && (subItem_r1 == null ? null : subItem_r1.isShow));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (subItem_r1 == null ? null : subItem_r1.name == null ? null : subItem_r1.name.trim().length) && (subItem_r1 == null ? null : subItem_r1.tempName) !== (subItem_r1 == null ? null : subItem_r1.name) && (subItem_r1 == null ? null : subItem_r1.isShow) && ctx_r3.validateName(subItem_r1 == null ? null : subItem_r1.name == null ? null : subItem_r1.name.toUpperCase()));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (subItem_r1 == null ? null : subItem_r1.hasChildren) && ((tmp_11_0 = ctx_r3.getSubPGroups(subItem_r1 == null ? null : subItem_r1.groupId)) == null ? null : tmp_11_0.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!(subItem_r1 == null ? null : subItem_r1.expanded));
        }
      }

      function SubGroupChildComponent_mat_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubGroupChildComponent_mat_card_0_ng_container_1_Template, 16, 15, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(subItem_r1 == null ? null : subItem_r1.deleted));
        }
      }

      var _SubGroupChildComponent = /*#__PURE__*/function () {
        function _SubGroupChildComponent(manager, snackbar, service, dialog) {
          _classCallCheck(this, _SubGroupChildComponent);

          this.manager = manager;
          this.snackbar = snackbar;
          this.service = service;
          this.dialog = dialog;
          this.pGroups = [];
          this.keepOpen = false;
          this.getGroups = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.updateGroups = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        }

        _createClass(_SubGroupChildComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getSubPGroups",
          value: function getSubPGroups(parentId) {
            var _this33 = this;

            var groups = (this.pGroups || []).filter(function (g) {
              return g.parent === parentId;
            });

            if (parentId === 'ROOT') {
              this.pGroups.forEach(function (group) {
                if (group.parent !== 'ROOT' && !_this33.pGroups.find(function (grp) {
                  return grp.groupId === group.parent;
                })) {
                  if (!group.deleted) groups.push(group);
                }
              });
            }

            return groups;
          }
        }, {
          key: "onUpdateGroups",
          value: function onUpdateGroups(event) {
            this.getGroups.emit(event);
          }
        }, {
          key: "getEmptyGroup",
          value: function getEmptyGroup() {
            return this.pGroups.filter(function (a) {
              return !a.groupId;
            });
          }
        }, {
          key: "validateName",
          value: function validateName(groupName) {
            return _models_manage_groups_model__WEBPACK_IMPORTED_MODULE_0__.groupNamePattern.test(groupName) && _models_manage_groups_model__WEBPACK_IMPORTED_MODULE_0__.restrictedGroupNames.indexOf(groupName) === -1;
          }
        }, {
          key: "toggleAddPgroup",
          value: function toggleAddPgroup(parentId) {
            console.log(parentId);
            console.log(this.pGroups);

            if (parentId !== 'ROOT') {
              var group = this.pGroups.find(function (g) {
                return g.groupId === parentId;
              });
              group.expanded = true;
              group.hasChildren = true;
            }

            if (!this.pGroups.some(function (g) {
              return !(g === null || g === void 0 ? void 0 : g.groupId) && g.parent === parentId;
            })) {
              this.pGroups = [{
                name: "",
                parent: parentId,
                type: "physical",
                isShow: true
              }].concat(_toConsumableArray(this.pGroups));
              this.updateGroups.emit(this.pGroups);
            } else {
              this.pGroups.find(function (g) {
                return !(g === null || g === void 0 ? void 0 : g.groupId) && g.parent === parentId;
              }).isShow = true;
            }
          }
        }, {
          key: "cancelAdd",
          value: function cancelAdd(groupItem) {
            groupItem.isShow = false;
            this.pGroups = _toConsumableArray(this.pGroups.filter(function (g) {
              return (g === null || g === void 0 ? void 0 : g.groupId) || g.parent !== groupItem.parent;
            }));

            if (groupItem.parent !== 'ROOT') {
              if (!this.pGroups.find(function (g) {
                return g.parent === groupItem.parent;
              })) {
                this.pGroups.find(function (g) {
                  return g.groupId === groupItem.parent;
                }).hasChildren = false;
                this.pGroups.find(function (g) {
                  return g.groupId === groupItem.parent;
                }).expanded = false;
              }
            }

            this.updateGroups.emit(this.pGroups);
          }
        }, {
          key: "deletePGroupItem",
          value: function deletePGroupItem(groupItem) {
            var _this34 = this;

            var groupId = groupItem.groupId;

            if (groupId) {
              this.service.remove(groupId).subscribe(function (res) {
                console.log(res);

                if (res.status === 'OK') {
                  _this34.manager.fetchGroups();
                } else {
                  _this34.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                }
              }, function (error) {
                if (error) {
                  _this34.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                }
              });
            } else {
              this.pGroups = _toConsumableArray(this.pGroups.filter(function (g) {
                return g.groupId;
              }));
              this.updateGroups.emit(this.pGroups);
            }
          }
        }, {
          key: "alphaNumericsOnly",
          value: function alphaNumericsOnly(event) {
            var charsOnlyPattern = /^[a-zA-Z0-9-_ ]+$/;
            var key = event.key;

            if (charsOnlyPattern.test(key)) {
              return true;
            } else {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "alphaNumericsOnPaste",
          value: function alphaNumericsOnPaste(event) {
            var regex = /^[a-zA-Z0-9-_ ]+$/;
            var pasteData = event.clipboardData.getData('text');

            if (!regex.test(pasteData)) {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "capitalizeText",
          value: function capitalizeText(name) {
            //let transform = name.toLowerCase();
            return name.replace(/\w\S*/g, function (w) {
              return w.replace(/^\w/, function (c) {
                return c.toUpperCase();
              });
            });
          }
        }, {
          key: "editSubGroup",
          value: function editSubGroup(groupItem, parentId) {
            this.tempName = groupItem.name;
            groupItem.tempName = groupItem.name;
            groupItem.isShow = true;
            groupItem.parent = parentId;
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(groupItem) {
            var _this35 = this;

            var confirm = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
              maxWidth: "85vw",
              height: "auto",
              maxHeight: "90vh",
              data: {
                body: {
                  title: "manage-group-module.delete_group",
                  text: "manage-group-module.confirm_delete_group"
                }
              },
              disableClose: true
            });
            confirm.afterClosed().subscribe(function (data) {
              if (data) {
                _this35.deletePGroupItem(groupItem);
              }
            });
          }
        }, {
          key: "saveSubPGroup",
          value: function saveSubPGroup(obj, parentId) {
            var _this36 = this;

            delete obj.isShow;
            obj.parent = parentId;

            if (!obj.groupId) {
              var ob = {
                name: this.capitalizeText(obj.name),
                parent: parentId,
                type: obj.type,
                facility_id: "test"
              };
              this.manager.saveGroup(ob).subscribe(function (r) {
                if (r === null || r === void 0 ? void 0 : r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this36.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this36.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            } else {
              var _ob2 = {
                name: this.capitalizeText(obj.name),
                parent: parentId,
                type: obj.type,
                groupId: obj.groupId,
                facility_id: "test"
              };
              this.manager.updateGroup(_ob2).subscribe(function (r) {
                if (r === null || r === void 0 ? void 0 : r.error) {
                  if (r.error === 'DUPLICATE_GROUP_NAME') {
                    _this36.snackbar.openCustomSnackBar('errors.DUPLICATE_GROUP_NAME', 'bottom', 'center', true);
                  } else {
                    _this36.snackbar.openCustomSnackBar('errors.err_generic_message', 'bottom', 'center', true);
                  }
                }
              });
            }
          }
        }, {
          key: "cancelEdit",
          value: function cancelEdit(groupItem) {
            groupItem.name = groupItem.tempName;
            groupItem.isShow = false;
          }
        }]);

        return _SubGroupChildComponent;
      }();

      _SubGroupChildComponent.ɵfac = function SubGroupChildComponent_Factory(t) {
        return new (t || _SubGroupChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_managers_manage_groups_manager_service__WEBPACK_IMPORTED_MODULE_2__.ManageGroupsManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_manage_groups_service__WEBPACK_IMPORTED_MODULE_4__.ManageGroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
      };

      _SubGroupChildComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _SubGroupChildComponent,
        selectors: [["app-sub-group-child"]],
        inputs: {
          pGroups: "pGroups",
          isCreationAllowed: "isCreationAllowed",
          pGroupItem: "pGroupItem",
          level: "level"
        },
        outputs: {
          getGroups: "getGroups",
          updateGroups: "updateGroups"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "d-flex align-items-center flex-column p-0 w-100 sub-card", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "flex-column", "p-0", "w-100", "sub-card"], [4, "ngIf"], [1, "d-flex", "w-100", "align-items-center"], [1, "w-100", "nested-group", "d-flex", "align-items-center", "position-relative"], ["mat-stroked-button", "", "class", "mx-2 add-small-button", 3, "class", "click", 4, "ngIf"], [1, "p-2", "m-0", "my-1", "w-100", "manage-card", "input-group"], ["class", "delete-icon", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "style", "position: absolute; right: 1rem", "class", "btn-sml-boxed", "color", "primary", 3, "click", 4, "ngIf"], ["style", "white-space: nowrap", 4, "ngIf"], [1, "ms-3", "d-flex", "justify-content-start", "align-items-center", "input-group"], ["type", "text", "class", "px-2 form-control edit-form-control  me-2", "placeholder", "Group Name", "required", "true", "autocomplete", "off", 3, "ngModel", "maxLength", "ngModelChange", "keypress", "paste", 4, "ngIf"], ["class", "edit-icon", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "class", "mx-2 btn-sml-boxed btn-no-shadow primary-button", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "class", "btn-sml-boxed expand-boxed-btn", "color", "primary", 3, "click", 4, "ngIf"], ["class", "d-flex w-100 align-items-center", 4, "ngIf"], ["mat-stroked-button", "", 1, "mx-2", "add-small-button", 3, "click"], [1, "delete-icon", 3, "click"], ["mat-mini-fab", "", "color", "primary", 1, "btn-sml-boxed", 2, "position", "absolute", "right", "1rem", 3, "click"], [2, "white-space", "nowrap"], ["type", "text", "placeholder", "Group Name", "required", "true", "autocomplete", "off", 1, "px-2", "form-control", "edit-form-control", "me-2", 3, "ngModel", "maxLength", "ngModelChange", "keypress", "paste"], [1, "edit-icon", 3, "click"], ["mat-mini-fab", "", "color", "primary", 1, "mx-2", "btn-sml-boxed", "btn-no-shadow", "primary-button", 3, "click"], ["mat-mini-fab", "", "color", "primary", 1, "btn-sml-boxed", "expand-boxed-btn", 3, "click"], [1, "w-100", 3, "pGroups", "isCreationAllowed", "level", "pGroupItem", "updateGroups", "getGroups"]],
        template: function SubGroupChildComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SubGroupChildComponent_mat_card_0_Template, 2, 1, "mat-card", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.getSubPGroups(ctx.pGroupItem == null ? null : ctx.pGroupItem.groupId));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _SubGroupChildComponent],
        styles: [".edit-form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: capitalize;\n}\nh2[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n\n.sub-card[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n}\n.add-btn[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 10px;\n}\n.nested-group[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 326px;\n  margin-right: 0;\n}\n@media only screen and (max-width: 767px) {\n  .nested-group[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n@media only screen and (max-width: 448px) {\n  .nested-group[_ngcontent-%COMP%]   .manage-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 80px;\n    font-size: 14px;\n    padding-right: 0;\n  }\n}\n\n.add-small-button[_ngcontent-%COMP%] {\n  font-size: 8px;\n  height: 1.25rem;\n  line-height: 1;\n  min-height: auto;\n  padding: 2px 8px;\n  border-radius: 4px;\n  position: absolute;\n  left: -5rem;\n  top: 0;\n  bottom: 0px;\n  margin: auto;\n}\n.add-small-button.level1[_ngcontent-%COMP%] {\n  border: 1px solid #C6005F;\n  color: #C6005F;\n  background: rgba(241, 51, 142, 0.08);\n}\n.add-small-button.level2[_ngcontent-%COMP%] {\n  border: 1px solid #FFBE15;\n  color: #FFBE15;\n  background: rgba(255, 190, 21, 0.08);\n}\n.add-small-button.level3[_ngcontent-%COMP%] {\n  border: 1px solid #26D8FF;\n  color: #26D8FF;\n  background: rgba(38, 216, 255, 0.08);\n}\n.add-small-button.level4[_ngcontent-%COMP%] {\n  border: 1px solid #65C94C;\n  color: #65C94C;\n  background: rgba(101, 201, 76, 0.08);\n}\n.add-small-button.level5[_ngcontent-%COMP%] {\n  border: 1px solid #9847FF;\n  color: #9847FF;\n  background: rgba(152, 71, 255, 0.08);\n}\n.add-small-button.level6[_ngcontent-%COMP%] {\n  border: 1px solid #C6005F;\n  color: #C6005F;\n  background: rgba(241, 51, 142, 0.08);\n}\n\n@media only screen and (max-width: 800px) {\n  .nested-group[_ngcontent-%COMP%] {\n    margin-left: 5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1ncm91cC1jaGlsZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcbW9kdWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxtb2R1bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUNHQSx5QkFBQTtBQXNFQSxvQkFBQTtBQXdDQSxXQUFBO0FBTUEsVUFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQVFBLGtCQUFBO0FBSUEsY0FBQTtBQWVBLGVBQUE7QUFJQSxlQUFBO0FBMEJBLGtCQUFBO0FBUUEsaUJBQUE7QUFRQSw2QkFBQTtBQVFBLCtCQUFBO0FDck5BLFVBQUE7QUZJQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQWFKO0FBWEE7RUFDSSxxQ0FBQTtBQWNKO0FBWEEsZUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdDQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQWFKO0FBUFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFVWjtBQVJZO0VBSko7SUFNUSxnQkFBQTtFQVVkO0FBQ0Y7QUFSWTtFQVRKO0lBVVEsZUFBQTtJQUNBLGVDaEVDO0lEaUVELGdCQUFBO0VBV2Q7QUFDRjtBQUhBLDhCQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjtBQUhJO0VBQ0kseUJBQUE7RUFDQSxjQ3lIdUI7RUR4SHZCLG9DQ3lIMkI7QURwSG5DO0FBRkk7RUFDSSx5QkFBQTtFQUNBLGNDc0h1QjtFRHJIdkIsb0NDc0gyQjtBRGxIbkM7QUFESTtFQUNJLHlCQUFBO0VBQ0EsY0NtSHVCO0VEbEh2QixvQ0NtSDJCO0FEaEhuQztBQUFJO0VBQ0kseUJBQUE7RUFDQSxjQ2dIdUI7RUQvR3ZCLG9DQ2dIMkI7QUQ5R25DO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLGNDNkd1QjtFRDVHdkIsb0NDNkcyQjtBRDVHbkM7QUFFSTtFQUNJLHlCQUFBO0VBQ0EsY0MyRnVCO0VEMUZ2QixvQ0MyRjJCO0FEM0ZuQztBQUtBLDhCQUFBO0FBRUE7RUFDSTtJQUNJLDRCQUFBO0VBSE47QUFDRiIsImZpbGUiOiJzdWItZ3JvdXAtY2hpbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBuZXcgdmFyaWFibGUgZGVmaW5lICovXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21vZHVsZXMvX21peGluc1wiO1xuXG4uZWRpdC1mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplIWltcG9ydGFudDtcbn1cblxuLyoqKiBuZXN0ZWQgKioqL1xuLyouYWRkLWxldmVsLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMnJlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIHotaW5kZXg6IDkwMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmxldmVsMSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwaW5rLWNvbG9yO1xuICAgICAgICBjb2xvcjogJHBpbmstY29sb3I7XG4gICAgfVxuXG4gICAgJi5sZXZlbDIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW4tY29sb3I7XG4gICAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XG4gICAgfVxuXG4gICAgJi5sZXZlbDMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZS1jb2xvcjtcbiAgICAgICAgY29sb3I6ICRibHVlLWNvbG9yO1xuICAgIH1cbn0qL1xuXG4uc3ViLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hZGQtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5uZXN0ZWQtZ3JvdXAge1xuICAgIC5tYW5hZ2UtY2FyZCB7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDhweCkge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuXG4vKioqIGFkZCBsZXZlbCBidXR0b24gY2FzZSAqKiovXG4uYWRkLXNtYWxsLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC01cmVtO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG5cblxuICAgICYubGV2ZWwxIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xO1xuICAgICAgICBjb2xvcjogJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE7XG4gICAgfVxuXG4gICAgJi5sZXZlbDIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI7XG4gICAgICAgIGNvbG9yOiAkZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjtcbiAgICB9XG5cbiAgICAmLmxldmVsMyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMztcbiAgICAgICAgY29sb3I6ICRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMztcbiAgICAgICAgYmFja2dyb3VuZDogJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0zO1xuICAgIH1cblxuICAgICYubGV2ZWw0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00O1xuICAgICAgICBjb2xvcjogJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC00O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ7XG4gICAgfVxuXG4gICAgJi5sZXZlbDUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU7XG4gICAgICAgIGNvbG9yOiAkZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTtcbiAgICB9XG5cbiAgICAmLmxldmVsNiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTtcbiAgICAgICAgY29sb3I6ICRkZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTtcbiAgICAgICAgYmFja2dyb3VuZDogJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbi1sZXZlbC0xO1xuICAgIH1cblxufVxuXG4vKioqIGFkZCBsZXZlbCBidXR0b24gY2FzZSAqKiovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubmVzdGVkLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cblxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4vKmZvbnQgY29sb3IgYW5kIGZhbWlseSAqL1xuXG4kYmFzZS1mb250LXNpemU6IDE0cHg7XG4kYmFzZS1mb250LWZhbWlseTogXCJNdWxpc2hcIixcbiAgICBcIk11bGktUmVndWxhclwiLFxuICAgIHNhbnMtc2VyaWY7XG4kYmFzZS1mb250LWNvbG9yOiAkd2hpdGU7XG4kc2l6ZS0yMDogMjBweDtcbiRzaXplLTEyOiAxMnB4O1xuJHNpemUtMjQ6IDI0cHg7XG4kc2l6ZS0xNjogMTZweDtcbiRzaXplLTEwOiAxMHB4O1xuJHNpemUtNTogNXB4O1xuJHNpemUtNjogNnB4O1xuJHNpemUtMjA6IDIwcHg7XG4kc2l6ZS0xODogMThweDtcbiRzaXplLTE1OiAxNXB4O1xuJHNpemUtMjc6IDI3cHg7XG4kY29uZmlybS1kaWFsb2ctd2lkdGg6IDc1MHB4O1xuJGVycjByX3RleHRfY29sb3I6ICNkYzM1NDU7XG4kb3BhY2l0eS13aGl0ZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbiRvcGFjaXR5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuJHJlZC1mb250LWNvbG9yOiAjZmY0YzRjO1xuJG1lZGl1bS1wcmlvcml0eS1jb2xvcjogI0ZBRkYwMDtcbiRsb3ctcHJpb3JpdHktY29sb3I6ICNGQUZGMDA7XG4kYW1iZXItZm9udC1jb2xvcjogI0ZGQzcwMDtcbiRncmVlbi1mb250LWNvbG9yOiAjMTdkNDY4O1xuJGRhcmstY29sb3Itb3B0aW9uOiAjMDQyOTRhO1xuJHRhYmxlLXRyLWNvbG9yOiByZ2IoNCwgNjAsIDEwOSk7XG4kdGFibGUtc3BhY2luZ19jb2xvcjogIzA0Mjk0YTtcbiRwLWNvbG9yOiAjMDA0MjdjYTM7XG4kcm93LWRpc2FibGVkOiByZ2IoNCwgNjAsIDEwOSwgMC42KTtcbiR3aGl0ZS10ZXh0OiAjZjJmMmYyO1xuJGJyb3duLWNvbG9yOiAjODc3ZDdkO1xuJGFycm93LWNvbG9yOiAjN2M4ZmEwO1xuJGxhYmVsLWNvbG9yOiAjNGVhMmVmO1xuJHJlcXVyaWVkLWNvbG9yOiAjZmY2NTY1O1xuJGJsYWNrLWNvbG9yOiAkYmxhY2s7XG4kZ3JheS1jb2xvcjogIzMzMzMzMztcbiR0aW1lLWNvbG9yOiAjNjdhNWQyO1xuJGNsb3NlLWNvbG9yOiAjYWZhZGFkO1xuJHNwbzItY29sb3I6ICMwMGYwZmY7XG4kaGVhcnRyYXRlLWNvbG9yOiAjMDBmZjZkO1xuJHllbGxvdy1jb2xvcjogI2ZhZmYwMDtcbiRsaWdodC10ZXh0LWNvbG9yOiAjRUJFQkVCO1xuJHNldHRpbmctY29sb3I6ICNlMWUxZTE7XG4kY29sb3JuZXcteWVsbG93OiAjZmZmNjE4O1xuJHN0b3AtYnV0dG9uLWNvbG9yOiAjY2E0MjQyO1xuJGV3cy1jb2xvcjogI2ZmNTg0MTtcbiRicC1jb2xvcjogI2ZmOTgzYTtcbiRjYW5jZWwtY29sb3I6ICNmZjQ0NDQ7XG4kaGlzdG9yeS1sYWJlbC1jb2xvcjogI2E3YzdlNDtcbiRjb2xvci1jb2RlLW5ldzogI2M1ZmYyMDtcbiRwaW5rLWNvbG9yOiAjYzYwMDVmO1xuJGdyZWVuLWNvbG9yOiAjM2ZmZjkxO1xuJGJsdWUtY29sb3I6ICMxZmMwZjM7XG4kY29sb3JncmF5OiAjNjY2NjY2O1xuJHJlZC1sYWJlbC1jb2xvcjogI2Y0NDMzNjtcbiRzZWxlY3QtbGFiZWwtY29sb3I6ICMwMjNmNzQ7XG4kc2VsZWN0LW9wdGlvbi1jb2xvcjogIzIzNTk4NztcbiRzZWxlY3Qtb3B0aW9uLWJnOiAjRTBFQUYyO1xuJHNlbGVjdC1vcHRpb24tc2VsZWN0ZWQtYmc6ICR3aGl0ZTtcbiRncmF5LWNvbG9yLXRpbWU6ICNDNEM0QzQ7XG4kYmx1ZS1jb2xvci1ncm91cDojMWZjMGYzO1xuJHRyZW5kLXRvcENvbG9yOiMwNDNCNkM7XG4kZXhwaXJlZC12aXRhbDogI2E5YTlhOTtcbiRpbmFjdGl2ZS1jb2xvcjojMTg2MkExO1xuJHN0YXR1cy1jb2xvci1iZzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuJHN0YXR1cy1jb2xvci1ib3JkZXI6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4vKmJhY2tncm91bmQgY29sb3IgKi9cblxuJHByaW1hcnktY29sb3I6ICMwMDU0OWY7XG4kYmctcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYmctd2hpdGUtY29sb3I6ICR3aGl0ZTtcbiRsaWdodC1ibHVlLWNvbG9yOiAjMDBiYmVmO1xuJGJnLXRvcGJhci1jb2xvcjogcmdiYSgwLCA2NiwgMTI0LCAwLjY0KTtcbiRiZy15ZWxsb3ctY29sb3I6ICNmMmNkNGI7XG4kYmctYnV0dG9uLWNvbG9yOiAjMDA1NDlmO1xuJGJnLWJ1dHRvbi1ob3ZlcjogJGJnLXByaW1hcnktY29sb3I7XG4kYmctdGFibGUtcm93LWNvbG9yOiAjMDQzYzZkO1xuJGJnLXNlYXJjaC1jb2xvcjogcmdiYSgxMjMsIDE5MywgMjU1LCAwLjE2KTtcbiRiZy1kaXNhYmxlLWNvbG9yOiAjMjI0YzcyO1xuJGJnLXRhYmxlLXJvdy1hY3RpdmUtY29sb3I6ICMxYjZkYjY7XG4kbW9kYWwtZGFpbG9nLWhlYWRzdHJpcC1jb2xvcjogIzFjNDg3MTtcbiRiZy1pbnB1dC1jb2xvcjogI2VlZWVlZTtcbiRiZy1idXR0b24tbGlnaHQtcmVkLWNvbG9yOiAjY2Q2ZDZkO1xuJGxpZ2h0LWJsdWUtYmc6ICNlMGVhZjI7XG4kYmctc2xpZGVyLWJhcjogIzA3MjU0MDtcbiRiZy1pbmZvLWNvbG9yOiAjMDk0NzhlO1xuJGJnLWRhc2hib2FyZC1jb2xvcjogIzAwNDI3YztcbiRiZy1ncmlkLWNvbG9yOiAjMDMzNTYyO1xuJGJnLWNhcmQtY29sb3I6ICMwNjMwNTY7XG4kYmctc2lnbmFsLWNvbG9yOiAjMDYyODQ3O1xuJGJnLWNvbG9yLW1hdGNoOiAjMDMyRDUyO1xuJHRvcGJhdC1zdHJpcC1jb2xvcjogIzI1NDg2ODtcbiRidXR0b24tY29sb3ItYmc6ICMwNTQ2ODA7XG4kYmctbWF0Y2FyZC1jb2xvcjogIzA0M2I2ZDtcbiRiZy1iYWdlLWNvbG9yOiAjYTAzNDM0O1xuJGJnLW1hbmFnZS1zdHJpcC1jb2xvcjogIzA0MmY1NTtcbiR0YWItYmctY29sb3I6ICMwNDMxNTg7XG4kYmctcmVzZXQtYnRuOiAjNDI3MDlhO1xuJHRyLWFjdGl2ZS1iZy1jb2xvcjogIzFiNmRiNjtcbiRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuJGJnLXRhYmxlLXJvdzogIzA0M2M2ZDtcbiRiZy1sZWZ0cGFuZWwtY2FyZDojMDUzNTYxO1xuJGJnLWNhcmRibG9ja2VyLWJveDojMDAzMTVEO1xuJGJvcmRlci1saW5lLWNvbG9yOiM3MEY2RkY7XG5cblxuLyogVG9nZ2xlICovXG5cbiR0b2dnbGUtYnV0dG9uLWJnLW9uOiAjNjZhNWRkO1xuJHRvZ2dsZS1idXR0b24tYmctb2ZmOiAjMTg2MmEyO1xuJHRvZ2dsZS1idXR0b24tcm91bmQtb2ZmOiAjMDgyZDRlO1xuXG4vKiBUYWJsZSAqL1xuXG4kdGFibGUtdGhlYWQtYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJGJnLWV4cGFuZGVkOiAjMDAyMTNlO1xuJGJnLXRyYW5zcGFyZW50LXJnYmE6IHJnYmEoMCwgODQsIDE1OSwgMC4zKTtcblxuLyogRm9udCB3ZWlnaHQgKi9cblxuJGZvbnQtd2VpZ2h0LTYwMDogNjAwO1xuJGZvbnQtd2VpZ2h0LTcwMDogNzAwO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGZvbnQtd2VpZ2h0LTQwMDogNDAwO1xuXG4vKmJvcmRlci1saW5lICovXG5cbiRib3JkZXItc2VhcmNoLWNvbG9yOiByZ2JhKDEyMywgMTkzLCAyNTUsIDAuNjQpO1xuJGJvcmRlci1zZWFyY2g6IDFweCBzb2xpZCAkYm9yZGVyLXNlYXJjaC1jb2xvcjtcbiRub25lOiBub25lO1xuJGJvcmRlci1zZXBhcmF0ZS1jb2xvcjogI2M0YzRjNDtcbiRib3JkZXItY29sb3ItYm90dG9tOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbi8qbGV0dGVyIHNwYWNpbmcgKi9cblxuJGxldHRlci1zcGFjaW5nLXNpemU6IDAuMjVweDtcblxuLypib3ggc2hhZG93ICovXG5cbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiRib3gtc2hhZG93LWNhcmQ6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYm94LXNoYWRvdy1jb2xvcjogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRib3gtc2hhZG93LWluc2V0LWFyZWE6IDJweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4kYm94LXNoYWRvdy1hcmVhOiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbi8vIHNjc3MtZG9jcy1zdGFydCBib3gtc2hhZG93LXZhcmlhYmxlc1xuJGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbi8qbGluZSBoZWlnaHQgKi9cblxuJGJhc2UtbGluZS1oZWlnaHQ6IDFyZW07XG5cbi8qIEZvbnQgU3R5bGUgKi9cblxuJGZvbnQtc3R5bGUtbm9ybWFsOiBub3JtYWw7XG4vLyBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXMtZGl2aWRlOiA4cHggOHB4IDBweCAwcHg7XG4kYm9yZGVyLXJpZ2h0LWJvdHRvbTogMCA4cHggOHB4IDA7XG4kYm9yZGVyLXRvcC1sZWZ0OiA4cHggMCAwIDhweDtcbi8vIGJvcmRlci1yYWRpdXMtdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRyZ2ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRiYWNrZ3JvdW5kLXdoaXRlLXJnYi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiRyZ2ItY29sb3ItY29kZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuJHJnYi10cmFuc3BhcmVudC1iZzogcmdiYSgwLCA4NCwgMTU5LCAwLjQpO1xuJHJnYi13YXJuLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDY4LCAwLjEpO1xuJHJnYmEtd2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIHJnYmEgY29sb3IgdmFyaWFibGVzXG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWNvbG9yLWNvZGU6IDAuNjQ7XG4vL29wYWNpdHkgY29sb3IgdmFyaWFibGVcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjY1O1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuJGJhY2tncm91bmQtZ3JhZGllbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGJnLXNsaWRlci1iYXIgMCUsIHJnYmEoNywgMzcsIDY0LCAwKSA1OC44NiUpO1xuLy9ncmFkaWVudCBjb2xvciB2YXJpYWJsZVxuXG4vKiBmaWx0ZXIgc2hhZG93ICovXG5cbiRmaWx0ZXItZHJvcHNoYWRvdzogZHJvcC1zaGFkb3coMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kYmFja2dyb3VuZC1ncmFkaWVudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkYmctc2xpZGVyLWJhciAwJSwgcmdiYSg3LCAzNywgNjQsIDApIDU4Ljg2JSk7XG4vL2dyYWRpZW50IGNvbG9yIHZhcmlhYmxlXG4kdmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLWNvbG9yOiAjZmZhNjlmO1xuXG4vKiBBbGVydCBDb2xvcnMgKi9cblxuJGFsZXJ0LWxvdzogI0ZBRkYwMDtcbiRhbGVydC1tZWRpdW06ICNmZmJmMDA7XG4kYWxlcnQtaGlnaDogI0ZGNEM0QztcbiRhbGVydC10ZWNoOiAjMDBGMEZGO1xuJGFsZXJ0LXRleHQ6ICNGRkY2MTg7XG5cbi8qIEFsZXJ0ICBiYWNrZ3JvdW5kIENvbG9ycyAqL1xuJGJnLWFsZXJ0LWxvdzogIHJnYmEoMjUwLCAyNTUsIDAsIDAuMik7XG4kYmctYWxlcnQtbWVkaXVtOiAgcmdiYSgyNTAsIDI1NSwgMCwgMC4yKTtcbiRiZy1hbGVydC1oaWdoOiAgcmdiYSgyMDIsIDY2LCA2NiwgMC4yKTtcbiRiZy1hbGVydC10ZWNoOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuJGFjdGl2ZS1iZzogI0Y0RjY2RjtcblxuXG4vKioqKiogTWFuYWdlIEdyb3VwIENvbG9yICoqKioqL1xuJGRlZmF1bHQtbWFuYWdlLWJ1dHRvbjojQzVGRjIwO1xuJGJnLWRlZmF1bHQtbWFuYWdlLWJ1dHRvbjogcmdiYSgxOTcsIDI1NSwgMzIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTE6I0M2MDA1RjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMTogcmdiYSgyNDEsIDUxLCAxNDIsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTI6I0ZGQkUxNTtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMjogcmdiYSgyNTUsIDE5MCwgMjEsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTM6IzI2RDhGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtMzogcmdiYSgzOCwgMjE2LCAyNTUsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTQ6IzY1Qzk0QztcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNDogcmdiYSgxMDEsIDIwMSwgNzYsIDAuMDgpO1xuXG4kZGVmYXVsdC1tYW5hZ2UtYnV0dG9uLWxldmVsLTU6Izk4NDdGRjtcbiRiZy1kZWZhdWx0LW1hbmFnZS1idXR0b24tbGV2ZWwtNTogcmdiYSgxNTIsIDcxLCAyNTUsIDAuMDgpO1xuXG5cblxuIiwiLyptaXhpbnMgKi9cblxuQG1peGluIHRyYW5zaXRpb24oJGFuaW1hdGlvbikge1xuICAtbXMtdHJhbnNpdGlvbjogJGFuaW1hdGlvbjtcbiAgLW1vei10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtby10cmFuc2l0aW9uOiAkYW5pbWF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhbmltYXRpb247XG4gIHRyYW5zaXRpb246ICRhbmltYXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm1Sb3RhdGUoKSB7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG5AbWl4aW4gZGlzcGxheWZsZXgoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleHZlcnRpY2FsKCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSgpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_manage-group_manage-group_module_ts-es5.js.map