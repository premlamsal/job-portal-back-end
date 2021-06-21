(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_FeaturedJobs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FeaturedJobs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FeaturedJobs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FeaturedJobs",
  data: function data() {
    return {
      jobs: {}
    };
  },
  created: function created() {
    this.getJob();
  },
  computed: {},
  methods: {
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
    getJobs: function getJobs() {
      var _this = this;

      this.$http.get("featured-jobs").then(function (response) {
        _this.jobs = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/FeaturedJobs.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/FeaturedJobs.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeaturedJobs_vue_vue_type_template_id_6c26377a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedJobs.vue?vue&type=template&id=6c26377a& */ "./resources/js/views/FeaturedJobs.vue?vue&type=template&id=6c26377a&");
/* harmony import */ var _FeaturedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedJobs.vue?vue&type=script&lang=js& */ "./resources/js/views/FeaturedJobs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FeaturedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FeaturedJobs_vue_vue_type_template_id_6c26377a___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeaturedJobs_vue_vue_type_template_id_6c26377a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FeaturedJobs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/FeaturedJobs.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/FeaturedJobs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeaturedJobs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FeaturedJobs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/FeaturedJobs.vue?vue&type=template&id=6c26377a&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/FeaturedJobs.vue?vue&type=template&id=6c26377a& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedJobs_vue_vue_type_template_id_6c26377a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedJobs_vue_vue_type_template_id_6c26377a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedJobs_vue_vue_type_template_id_6c26377a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeaturedJobs.vue?vue&type=template&id=6c26377a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FeaturedJobs.vue?vue&type=template&id=6c26377a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FeaturedJobs.vue?vue&type=template&id=6c26377a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FeaturedJobs.vue?vue&type=template&id=6c26377a& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [_vm._v("The available Jobs")]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(
            "\n                You can manage the following data from the actions buttons\n            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "table-custom-data" }, [
              _c(
                "table",
                { staticClass: "table table-bordered table-hover" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._l(_vm.jobs, function(job) {
                    return _c("tbody", { key: job.id }, [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(job.id))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              staticClass: "custom-link",
                              on: {
                                click: function($event) {
                                  return _vm.goToJobDetail(job.id)
                                }
                              }
                            },
                            [_vm._v(_vm._s(job.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              staticClass: "custom-link",
                              on: {
                                click: function($event) {
                                  return _vm.goToEmployerPublicProfile(
                                    job.employer.id
                                  )
                                }
                              }
                            },
                            [_vm._v(_vm._s(job.employer.name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(job.location))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(
                                _vm._f("formatDateStart")(job.created_at)
                              ) +
                              "\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            class: {
                              "table-danger": job.isExpired
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm._f("formatDateEnd")(job.deadline)) +
                                "\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(2, true)
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer text-muted" }, [
        _vm._v(
          "\n            Found " + _vm._s(_vm.getJobsLength) + " Jobs\n        "
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("i", { staticClass: "bx bx-briefcase" }),
        _vm._v(" Featured Jobs")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Employer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", [_vm._v("Posted")]),
        _vm._v(" "),
        _c("th", [_vm._v("Deadline")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c(
        "button",
        {
          staticClass: "btn btn-success",
          staticStyle: { "margin-right": "5px" }
        },
        [
          _vm._v(
            "\n                                            Edit\n                                        "
          )
        ]
      ),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-danger" }, [
        _vm._v(
          "\n                                            Delete\n                                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);