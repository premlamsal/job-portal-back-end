(self["webpackChunk"] = self["webpackChunk"] || []).push([["jobdetail"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Jobs",
  data: function data() {
    return {
      job_id: "2",
      job: {
        employer: {}
      }
    };
  },
  watch: {
    $route: function $route() {
      this.getIdFromUrl();
    }
  },
  created: function created() {
    this.getJobDetail();
  },
  computed: {},
  methods: {
    getIdFromUrl: function getIdFromUrl() {
      this.job_id = this.$route.params.id; //get book slug from the url.

      this.getJobDetail();
    },
    goToJobDetail: function goToJobDetail(job_id) {
      this.$router.push({
        path: "/job-detail/".concat(job_id)
      });
    },
    goToEmployerPublicProfile: function goToEmployerPublicProfile(employer_id) {
      this.$router.push({
        path: "/employer-profile/".concat(employer_id)
      });
    },
    getJobDetail: function getJobDetail() {
      var _this = this;

      this.$Progress.start();
      this.$http.get("job/" + this.job_id).then(function (response) {
        // console.log(response.data.data);
        _this.job = response.data.data[0];

        _this.$Progress.finish();
      })["catch"](function (error) {
        _this.$toast.error(error.response.data.message, {
          timeout: 2000
        });

        _this.$Progress.fail();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.single-job-items {\r\n    padding: 36px 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    transition: 0.4s;\n}\n.single-job-items .job-items {\r\n    display: flex;\r\n    flex-wrap: wrap;\n}\n.single-job-items .company-img img {\r\n    overflow: hidden;\r\n    float: left;\r\n    margin-right: 32px;\r\n    z-index: 999;\n}\na,\r\nbutton {\r\n    color: #fff;\r\n    outline: medium none;\n}\n.single-job-items .job-tittle a h4 {\r\n    color: #28395a;\r\n    font-size: 24px;\r\n    transition: 0.4s;\n}\n.single-job-items .job-tittle ul li {\r\n    display: inline-block;\r\n    margin-right: 48px;\r\n    font-size: 15px;\r\n    color: #808080;\r\n    line-height: 1.8;\n}\nli {\r\n    list-style: none;\n}\nul {\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.single-job-items .job-tittle ul li i {\r\n    font-size: 14px;\r\n    color: #bbbbbb;\r\n    margin-right: 10px;\n}\n.fa-map-marker-alt:before {\r\n    content: \"\\f3c5\";\n}\n.single-job-items .job-tittle ul li:last-child {\r\n    margin-right: 0px;\n}\np {\r\n    font-family: \"Muli\", sans-serif;\r\n    color: #506172;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n    margin-bottom: 15px;\r\n    font-weight: normal;\n}\n.post-details3 {\r\n    padding: 30px 30px 30px 30px;\r\n    border: 1px solid #ededed;\n}\n.post-details3 ul li {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 12px;\n}\n.post-details4 p {\r\n    margin-bottom: 30px;\r\n    display: block;\n}\n.post-details4 ul li span {\r\n    color: #5b5c6e;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    padding-left: 18px;\n}\n.single-job-items:hover {\r\n    box-shadow: 0px 22px 57px 0px #eee;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/views/JobDetail.vue":
/*!******************************************!*\
  !*** ./resources/js/views/JobDetail.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JobDetail_vue_vue_type_template_id_6ad0c95f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobDetail.vue?vue&type=template&id=6ad0c95f& */ "./resources/js/views/JobDetail.vue?vue&type=template&id=6ad0c95f&");
/* harmony import */ var _JobDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/JobDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _JobDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobDetail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _JobDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _JobDetail_vue_vue_type_template_id_6ad0c95f___WEBPACK_IMPORTED_MODULE_0__.render,
  _JobDetail_vue_vue_type_template_id_6ad0c95f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/JobDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/JobDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/JobDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/JobDetail.vue?vue&type=template&id=6ad0c95f&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/JobDetail.vue?vue&type=template&id=6ad0c95f& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_template_id_6ad0c95f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_template_id_6ad0c95f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_template_id_6ad0c95f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobDetail.vue?vue&type=template&id=6ad0c95f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=template&id=6ad0c95f&");


/***/ }),

/***/ "./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=template&id=6ad0c95f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=template&id=6ad0c95f& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "featured-jobs" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h4", [
          _c("i", { staticClass: "bx bx-briefcase" }),
          _vm._v(
            " Job Details of\n                " +
              _vm._s(_vm.job.title) +
              "\n            "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "job-post-company pt-120 pb-120 mt-5 mb-5" },
              [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row justify-content-between" }, [
                    _c("div", { staticClass: "col-xl-7 col-lg-8" }, [
                      _c("div", { staticClass: "single-job-items mb-5" }, [
                        _c("div", { staticClass: "job-items" }, [
                          _c(
                            "div",
                            { staticClass: "company-img company-img-details" },
                            [
                              _c("img", {
                                attrs: {
                                  src: _vm.job.employer.profile_image,
                                  alt: "",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "job-tittle" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("h4", [_vm._v(_vm._s(_vm.job.title))])
                            ]),
                            _vm._v(" "),
                            _c("ul", [
                              _c("li", [
                                _vm._v(
                                  "\n                                                        " +
                                    _vm._s(_vm.job.employer.name) +
                                    "\n                                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("i", { staticClass: "bx bx-map" }),
                                _vm._v(
                                  _vm._s(_vm.job.location) +
                                    "\n                                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "\n                                                        " +
                                    _vm._s(_vm.job.salary) +
                                    "\n                                                    "
                                )
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "job-post-details" }, [
                        _c("div", { staticClass: "post-details1 mb-5" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                                " +
                                _vm._s(_vm.job.description) +
                                "\n                                            "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "post-details2 mb-5" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                                " +
                                _vm._s(_vm.job.skills) +
                                "\n                                            "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-4 col-lg-4" }, [
                      _c("div", { staticClass: "post-details3 mb-5" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("ul", [
                          _c("li", [
                            _vm._v(
                              "\n                                                Posted date :\n                                                "
                            ),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatDateStart")(_vm.job.created_at)
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                                Location :\n                                                "
                            ),
                            _c("span", [_vm._v(_vm._s(_vm.job.location))])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                                Vacancy :\n                                                "
                            ),
                            _c("span", [_vm._v(_vm._s(_vm.job.open_positions))])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                                Job nature :\n                                                "
                            ),
                            _c("span", [_vm._v(_vm._s(_vm.job.type))])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                                Salary :\n                                                "
                            ),
                            _c("span", [_vm._v("$" + _vm._s(_vm.job.salary))])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                                Application date :\n                                                "
                            ),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatDateEnd")(_vm.job.deadline)
                                )
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "post-details4 mb-5" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.job.employer.name))]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                            " +
                              _vm._s(_vm.job.employer.slogan) +
                              "\n                                        "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer text-muted" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small-section-tittle" }, [
      _c("h4", [_vm._v("Job Description")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small-section-tittle" }, [
      _c("h4", [_vm._v("Skills")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small-section-tittle" }, [
      _c("h4", [_vm._v("Job Overview")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small-section-tittle" }, [
      _c("h4", [_vm._v("Company Information")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JobDetail.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4f7b5779", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);