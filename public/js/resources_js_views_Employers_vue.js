(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Employers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employers.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Employers",
  data: function data() {
    return {
      employers: {},
      employer: {},
      modalForName: "",
      modalForCode: 0,
      profile_image: ""
    };
  },
  created: function created() {
    this.getEmployers();
  },
  computed: {
    getEmployersLength: function getEmployersLength() {
      return this.employers.length;
    }
  },
  methods: {
    handleImageFileUpload: function handleImageFileUpload() {
      this.profile_image = this.$refs.imageFile.files[0]; //we got file and set it to imageFile
    },
    callFunc: function callFunc() {
      if (this.modalForCode == 0) {
        this.createEmployer();
        console.log("Add Employer");
      } else if (this.modalForCode == 1) {
        this.updateEmployer();
        console.log("Update Employer");
      }
    },
    showAddModal: function showAddModal() {
      this.modalForName = "Add Employer";
      this.modalForCode = 0; //0 for add

      this.employer = []; // this.errors = ""; //clearing errors
      // // Vue.set(this.modalForCode,0);

      this.$bvModal.show("bv-modal-add-employer");
    },
    goToEmployerPublicProfile: function goToEmployerPublicProfile(employer_id) {
      this.$router.push({
        path: "/employer-profile/".concat(employer_id)
      });
    },
    //will get id from emitter from the compoent
    editEmployer: function editEmployer(employer_id) {
      var _this = this;

      this.$Progress.start();
      this.modalForName = "Edit Employer";
      this.modalForCode = 1; // 1 for Edit

      this.$bvModal.show("bv-modal-add-employer");
      this.$http.get("admin/employer/" + employer_id).then(function (response) {
        // console.log(response.data.data);
        _this.employer = response.data.data[0];

        _this.$Progress.finish();
      })["catch"](function (error) {
        _this.$toast.error(error.response.data.message, {
          timeout: 2000
        });

        _this.$Progress.fail();
      });
    },
    getEmployers: function getEmployers() {
      var _this2 = this;

      this.$Progress.start();
      this.$http.get("employers").then(function (response) {
        _this2.employers = response.data.data;

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error.response.data.data);

        _this2.$Progress.fail();
      });
    },
    createEmployer: function createEmployer() {
      var _this3 = this;

      this.$Progress.start();
      var formData = new FormData();
      formData.append("_METHOD", "post");
      formData.append("name", this.employer.name);
      formData.append("email", this.employer.email);
      formData.append("address", this.employer.address);
      formData.append("slogan", this.employer.slogan);
      formData.append("password", this.employer.password);
      formData.append("phone", this.employer.phone);
      formData.append("active", this.employer.active);
      formData.append("description", this.employer.description);
      formData.append("company_type", this.employer.company_type);
      formData.append("technologies_using", this.employer.technologies_using);
      formData.append("socail_urls", this.employer.socail_urls);
      formData.append("profile_image", this.profile_image);
      console.log(formData);
      this.$http.post("admin/create-employer", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        // console.log(response.data);
        var message = response.data.message; // let status = response.data.status;

        _this3.$bvModal.hide("bv-modal-add-employer");

        _this3.$swal("Info", message, "success"); ///will load new infos from api->server->database


        _this3.getEmployers();

        _this3.$Progress.finish();
      })["catch"](function (error) {
        // console.log(error.response.data);
        _this3.$toast.error(error.response.data.message, {
          timeout: 2000
        });

        _this3.$Progress.fail();
      });
    },
    deleteEmployer: function deleteEmployer(employer_id) {
      var _this4 = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          _this4.$Progress.start();

          var formData = new FormData();
          formData.append("employer_id", employer_id);

          _this4.$http.post("admin/delete-employer", formData).then(function (response) {
            var message = response.data.message; // let status = response.data.status;

            _this4.$swal("Info", message, "success"); // console.log(response.data.data);


            _this4.getEmployers();

            _this4.$Progress.finish();
          })["catch"](function (error) {
            // console.log(error.response.data);
            _this4.$toast.error(error.response.data.message, {
              timeout: 2000
            });

            _this4.$Progress.fail();
          });
        }
      });
    },
    updateEmployer: function updateEmployer() {
      var _this5 = this;

      this.$Progress.start();
      var formData = new FormData();
      formData.append("_METHOD", "post");
      formData.append("name", this.employer.name);
      formData.append("email", this.employer.email);
      formData.append("password", this.employer.password);
      formData.append("address", this.employer.address);
      formData.append("slogan", this.employer.slogan);
      formData.append("employer_id", this.employer.id);
      formData.append("phone", this.employer.phone);
      formData.append("password", this.employer.password);
      formData.append("active", this.employer.active);
      formData.append("description", this.employer.description);
      formData.append("company_type", this.employer.company_type);
      formData.append("technologies_using", this.employer.technologies_using);
      formData.append("socail_urls", this.employer.socail_urls);
      formData.append("profile_image", this.profile_image);
      console.log(formData);
      this.$http.post("admin/update-employer", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        // console.log(response.data);
        var message = response.data.message; // let status = response.data.status;

        _this5.$bvModal.hide("bv-modal-add-employer");

        _this5.$swal("Info", message, "success"); ///will load new infos from api->server->database


        _this5.getEmployers();

        _this5.$Progress.finish();
      })["catch"](function (error) {
        // console.log(error.response.data);
        _this5.$toast.error(error.response.data.message, {
          timeout: 2000
        });

        _this5.$Progress.fail();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Employers.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Employers.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Employers_vue_vue_type_template_id_8f7991ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employers.vue?vue&type=template&id=8f7991ee& */ "./resources/js/views/Employers.vue?vue&type=template&id=8f7991ee&");
/* harmony import */ var _Employers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employers.vue?vue&type=script&lang=js& */ "./resources/js/views/Employers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Employers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Employers_vue_vue_type_template_id_8f7991ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _Employers_vue_vue_type_template_id_8f7991ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Employers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Employers.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Employers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Employers.vue?vue&type=template&id=8f7991ee&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Employers.vue?vue&type=template&id=8f7991ee& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employers_vue_vue_type_template_id_8f7991ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employers_vue_vue_type_template_id_8f7991ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employers_vue_vue_type_template_id_8f7991ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employers.vue?vue&type=template&id=8f7991ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employers.vue?vue&type=template&id=8f7991ee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employers.vue?vue&type=template&id=8f7991ee&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employers.vue?vue&type=template&id=8f7991ee& ***!
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
  return _c("div", { staticClass: "employers" }, [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("h5", { staticClass: "card-title" }, [
            _vm._v("The available Employers")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-warning",
              on: {
                click: function($event) {
                  return _vm.showAddModal()
                }
              }
            },
            [_vm._v("\n                Add Employer\n            ")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "card-text" }, [
            _vm._v(
              "\n                You can manage the following data from the actions buttons\n            "
            )
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                id: "bv-modal-add-employer",
                "hide-footer": "",
                size: "lg"
              },
              scopedSlots: _vm._u([
                {
                  key: "modal-title",
                  fn: function() {
                    return [
                      _c("span", { staticClass: "text-primary" }, [
                        _vm._v(_vm._s(_vm.modalForName))
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "d-block" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.name,
                            expression: "employer.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Your name please"
                        },
                        domProps: { value: _vm.employer.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.employer, "name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.address,
                            expression: "employer.address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Your address please"
                        },
                        domProps: { value: _vm.employer.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Slogan")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.slogan,
                            expression: "employer.slogan"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Your slogan please"
                        },
                        domProps: { value: _vm.employer.slogan },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "slogan",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Company Type")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.company_type,
                            expression: "employer.company_type"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Your website please"
                        },
                        domProps: { value: _vm.employer.company_type },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "company_type",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Description ")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.description,
                            expression: "employer.description"
                          }
                        ],
                        staticClass: "form-control",
                        domProps: { value: _vm.employer.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Profile Image")]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "imageFile",
                        staticClass: "form-control",
                        attrs: { type: "file", id: "imageFile" },
                        on: {
                          change: function($event) {
                            return _vm.handleImageFileUpload()
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.email,
                            expression: "employer.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          placeholder: "Your email please"
                        },
                        domProps: { value: _vm.employer.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.employer, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Password")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.password,
                            expression: "employer.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          placeholder: "Your password please"
                        },
                        domProps: { value: _vm.employer.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Phone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.phone,
                            expression: "employer.phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Your phone please"
                        },
                        domProps: { value: _vm.employer.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.employer, "phone", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Website")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.website,
                            expression: "employer.website"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Your website please"
                        },
                        domProps: { value: _vm.employer.website },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "website",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Socail Url")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.socail_urls,
                            expression: "employer.socail_urls"
                          }
                        ],
                        staticClass: "form-control",
                        domProps: { value: _vm.employer.socail_urls },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "socail_urls",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Technologies Using ")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employer.technologies_using,
                            expression: "employer.technologies_using"
                          }
                        ],
                        staticClass: "form-control",
                        domProps: { value: _vm.employer.technologies_using },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.employer,
                              "technologies_using",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-primary mt-3",
                  attrs: { block: "" },
                  on: { click: _vm.callFunc }
                },
                [_vm._v(_vm._s(_vm.modalForName))]
              )
            ],
            1
          ),
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
                    _vm._l(_vm.employers, function(employer) {
                      return _c("tbody", { key: employer.id }, [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(employer.id))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass: "custom-link",
                                on: {
                                  click: function($event) {
                                    return _vm.goToEmployerPublicProfile(
                                      employer.id
                                    )
                                  }
                                }
                              },
                              [_vm._v(_vm._s(employer.name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(employer.description))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(employer.address))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(employer.company_type))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(employer.phone))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                    \n                                    \n                                    " +
                                _vm._s(employer.status) +
                                "\n                                    \n                                    \n                                    \n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                staticStyle: { "margin-right": "5px" },
                                on: {
                                  click: function($event) {
                                    return _vm.editEmployer(employer.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Edit\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteEmployer(employer.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Delete\n                                        "
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
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer text-muted" }, [
        _vm._v(
          "\n            Found " +
            _vm._s(_vm.getEmployersLength) +
            " Employers\n        "
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
        _vm._v(" Employers")
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);