(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Applications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Applications.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Applications.vue?vue&type=script&lang=js& ***!
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
  name: "Applications",
  data: function data() {
    return {
      applications: {}
    };
  },
  created: function created() {
    this.getApplications();
  },
  methods: {
    cancelApplication: function cancelApplication(application_id, jobseeker_id) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then(function (result) {
        _this.$Progress.start();

        if (result.value) {
          var formData = new FormData();
          formData.append("application_id", application_id);
          formData.append("jobseeker_id", jobseeker_id);

          _this.$http.post("admin/cancel-application", formData).then(function (response) {
            var message = response.data.message; // let status = response.data.status;

            _this.$swal("Info", message, "success");

            _this.getApplications();

            _this.$Progress.finish();
          })["catch"](function (error) {
            _this.$toast.error(error.response.data.message, {
              timeout: 2000
            });

            _this.$Progress.fail();
          });
        }
      });
    },
    goToEmployerPublicProfile: function goToEmployerPublicProfile(employer_id) {
      this.$router.push({
        path: "/employer-profile/".concat(employer_id)
      });
    },
    goToJobSeekerPublicProfile: function goToJobSeekerPublicProfile(jobseeker_id) {
      this.$router.push({
        path: "/jobseeker-profile/".concat(jobseeker_id)
      });
    },
    goToJobDetail: function goToJobDetail(job_id) {
      this.$router.push({
        path: "/job-detail/".concat(job_id)
      });
    },
    getApplications: function getApplications() {
      var _this2 = this;

      this.$Progress.start();
      this.$http.get("admin/applications").then(function (response) {
        _this2.applications = response.data.data;

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error.response.data.data);

        _this2.$Progress.fail();
      });
    }
  },
  computed: {
    getApplicationsLength: function getApplicationsLength() {
      return this.applications.length;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Applications.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Applications.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Applications_vue_vue_type_template_id_0c8d4442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Applications.vue?vue&type=template&id=0c8d4442& */ "./resources/js/views/Applications.vue?vue&type=template&id=0c8d4442&");
/* harmony import */ var _Applications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Applications.vue?vue&type=script&lang=js& */ "./resources/js/views/Applications.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Applications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Applications_vue_vue_type_template_id_0c8d4442___WEBPACK_IMPORTED_MODULE_0__.render,
  _Applications_vue_vue_type_template_id_0c8d4442___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Applications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Applications.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Applications.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Applications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Applications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Applications.vue?vue&type=template&id=0c8d4442&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Applications.vue?vue&type=template&id=0c8d4442& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_vue_vue_type_template_id_0c8d4442___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_vue_vue_type_template_id_0c8d4442___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_vue_vue_type_template_id_0c8d4442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Applications.vue?vue&type=template&id=0c8d4442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Applications.vue?vue&type=template&id=0c8d4442&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Applications.vue?vue&type=template&id=0c8d4442&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Applications.vue?vue&type=template&id=0c8d4442& ***!
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
  return _c("div", { staticClass: "applications" }, [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v("The available Applications")
        ]),
        _vm._v(" "),
        _c("p"),
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
                  _vm._l(_vm.applications, function(application) {
                    return _c("tbody", { key: application.id }, [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(application.id))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              staticClass: "custom-link",
                              on: {
                                click: function($event) {
                                  return _vm.goToJobDetail(application.job.id)
                                }
                              }
                            },
                            [_vm._v(_vm._s(application.job.title))]
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
                                  return _vm.goToJobSeekerPublicProfile(
                                    application.jobseeker.id
                                  )
                                }
                              }
                            },
                            [_vm._v(_vm._s(application.jobseeker.name))]
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
                                    application.job.employer.id
                                  )
                                }
                              }
                            },
                            [_vm._v(_vm._s(application.job.employer.name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(
                                _vm._f("formatDateStart")(
                                  application.created_at
                                )
                              ) +
                              "\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(application.status) +
                              "\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            class: {
                              "table-danger": application.job.isExpired
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm._f("formatDateEnd")(
                                    application.job.deadline
                                  )
                                ) +
                                "\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.cancelApplication(
                                    application.id,
                                    application.jobseeker.id
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Cancel Application\n                                        "
                              )
                            ]
                          )
                        ])
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
          "\n            Found " +
            _vm._s(_vm.getApplicationsLength) +
            " Jobs\n        "
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
        _vm._v(" Applications")
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
        _c("th", [_vm._v("For the Post of")]),
        _vm._v(" "),
        _c("th", [_vm._v("Jobsseker/ Applicant")]),
        _vm._v(" "),
        _c("th", [_vm._v("Employer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Applied at")]),
        _vm._v(" "),
        _c("th", [_vm._v("Application Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job Deadline")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);