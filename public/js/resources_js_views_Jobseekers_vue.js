(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Jobseekers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Jobseekers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Jobseekers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Jobseekers",
  data: function data() {
    return {
      jobseekers: {},
      resume_file: "",
      profile_image: "",
      modalForName: "",
      modalForCode: 0,
      jobseeker: {}
    };
  },
  created: function created() {
    this.getJobseekers();
  },
  computed: {
    getJobseekersLength: function getJobseekersLength() {
      return this.jobseekers.length;
    }
  },
  methods: {
    handleResumeFileUpload: function handleResumeFileUpload() {
      this.resume_file = this.$refs.resumefile.files[0]; //we got file and set it to resumefile
    },
    handleImageFileUpload: function handleImageFileUpload() {
      this.profile_image = this.$refs.imageFile.files[0]; //we got file and set it to imageFile
    },
    goToJobSeekerPublicProfile: function goToJobSeekerPublicProfile(jobseeker_id) {
      this.$router.push({
        path: "/jobseeker-profile/".concat(jobseeker_id)
      });
    },
    getJobseekers: function getJobseekers() {
      var _this = this;

      this.$Progress.start();
      this.$http.get("jobseekers").then(function (response) {
        _this.jobseekers = response.data.data;

        _this.$Progress.finish();
      })["catch"](function (error) {
        console.log(error.response.data.data);

        _this.$Progress.fail();
      });
    },
    callFunc: function callFunc() {
      if (this.modalForCode == 0) {
        this.createJobseeker();
        console.log("Add Jobseeker");
      } else if (this.modalForCode == 1) {
        this.updateJobseeker();
        console.log("Update Jobseeker");
      }
    },
    showAddModal: function showAddModal() {
      this.modalForName = "Add new Jobseeker";
      this.modalForCode = 0; //0 for add

      this.jobseeker = []; // this.errors = ""; //clearing errors
      // // Vue.set(this.modalForCode,0);

      this.$bvModal.show("bv-modal-add-jobseeker");
    },
    //will get id from emitter from the compoent
    editJobseeker: function editJobseeker(job_id) {
      var _this2 = this;

      this.$Progress.start();
      this.modalForName = "Edit Jobseeker";
      this.modalForCode = 1; // 1 for Edit

      this.$bvModal.show("bv-modal-add-jobseeker");
      this.$http.get("admin/jobseeker/" + job_id).then(function (response) {
        // console.log(response.data.data);
        _this2.jobseeker = response.data.data[0];

        _this2.$Progress.finish();
      })["catch"](function (error) {
        _this2.$toast.error(error.response.data.message, {
          timeout: 2000
        });

        _this2.$Progress.fail();
      });
    },
    deleteJobseeker: function deleteJobseeker(employer_id) {
      var _this3 = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          _this3.$Progress.start();

          var formData = new FormData();
          formData.append("jobseeker_id", jobseeker_id);

          _this3.$http.post("admin/delete-jobseeker", formData).then(function (response) {
            var message = response.data.message; // let status = response.data.status;

            _this3.$swal("Info", message, "success"); // console.log(response.data.data);


            _this3.getJobseekers();

            _this3.$Progress.finish();
          })["catch"](function (error) {
            // console.log(error.response.data);
            _this3.$toast.error(error.response.data.message, {
              timeout: 2000
            });

            _this3.$Progress.fail();
          });
        }
      });
    },
    updateJobseeker: function updateJobseeker() {
      var _this4 = this;

      this.$Progress.start();
      var formData = new FormData();
      formData.append("_METHOD", "post");
      formData.append("name", this.jobseeker.name);
      formData.append("email", this.jobseeker.email);
      formData.append("jobseeker_id", this.jobseeker.id);
      formData.append("password", this.jobseeker.password);
      formData.append("address", this.jobseeker.address);
      formData.append("phone", this.jobseeker.phone);
      formData.append("title", this.jobseeker.title);
      formData.append("skills", this.jobseeker.skills);
      formData.append("qualification", this.jobseeker.qualification);
      formData.append("cover_letter", this.jobseeker.cover_letter);
      formData.append("website", this.jobseeker.website);
      formData.append("socail_urls", this.jobseeker.socail_urls);
      formData.append("gender", this.jobseeker.gender);
      formData.append("resume_file", this.resume_file);
      formData.append("profile_image", this.profile_image);
      console.log(formData);
      this.$http.post("admin/update-jobseeker", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        // console.log(response.data);
        var message = response.data.message; // let status = response.data.status;

        _this4.$swal("Info", message, "success");

        _this4.$bvModal.hide("bv-modal-add-jobseeker"); ///will load new infos from api->server->database


        _this4.getJobseekers();

        _this4.$Progress.finish();
      })["catch"](function (error) {
        // console.log(error.response.data);
        _this4.$toast.error(error.response.data.message, {
          timeout: 2000
        });

        _this4.$Progress.fail();
      });
    },
    createJobseeker: function createJobseeker() {
      var _this5 = this;

      this.$Progress.start();
      var formData = new FormData();
      formData.append("_METHOD", "post");
      formData.append("name", this.jobseeker.name);
      formData.append("email", this.jobseeker.email);
      formData.append("password", this.jobseeker.password);
      formData.append("address", this.jobseeker.address);
      formData.append("phone", this.jobseeker.phone);
      formData.append("title", this.jobseeker.title);
      formData.append("skills", this.jobseeker.skills);
      formData.append("qualification", this.jobseeker.qualification);
      formData.append("cover_letter", this.jobseeker.cover_letter);
      formData.append("website", this.jobseeker.website);
      formData.append("socail_urls", this.jobseeker.socail_urls);
      formData.append("gender", this.jobseeker.gender);
      formData.append("resume_file", this.resume_file);
      formData.append("profile_image", this.profile_image);
      console.log(formData);
      this.$http.post("admin/create-jobseeker", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        // console.log(response.data);
        var message = response.data.message; // let status = response.data.status;

        _this5.$swal("Info", message, "success");

        _this5.$bvModal.hide("bv-modal-add-jobseeker"); ///will load new infos from api->server->database


        _this5.getJobseekers();

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

/***/ "./resources/js/views/Jobseekers.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Jobseekers.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Jobseekers_vue_vue_type_template_id_43438920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jobseekers.vue?vue&type=template&id=43438920& */ "./resources/js/views/Jobseekers.vue?vue&type=template&id=43438920&");
/* harmony import */ var _Jobseekers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jobseekers.vue?vue&type=script&lang=js& */ "./resources/js/views/Jobseekers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Jobseekers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Jobseekers_vue_vue_type_template_id_43438920___WEBPACK_IMPORTED_MODULE_0__.render,
  _Jobseekers_vue_vue_type_template_id_43438920___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Jobseekers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Jobseekers.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Jobseekers.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobseekers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Jobseekers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Jobseekers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobseekers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Jobseekers.vue?vue&type=template&id=43438920&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Jobseekers.vue?vue&type=template&id=43438920& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobseekers_vue_vue_type_template_id_43438920___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobseekers_vue_vue_type_template_id_43438920___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobseekers_vue_vue_type_template_id_43438920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Jobseekers.vue?vue&type=template&id=43438920& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Jobseekers.vue?vue&type=template&id=43438920&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Jobseekers.vue?vue&type=template&id=43438920&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Jobseekers.vue?vue&type=template&id=43438920& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "jobseekers" }, [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("h5", { staticClass: "card-title" }, [
            _vm._v("The available Jobseekers")
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
            [_vm._v("\n                Add Jobseeker\n            ")]
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
                id: "bv-modal-add-jobseeker",
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
                _c("div", { staticClass: "col-md-10" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.jobseeker.name,
                                expression: "jobseeker.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Your name please"
                            },
                            domProps: { value: _vm.jobseeker.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.jobseeker,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.jobseeker.email,
                                expression: "jobseeker.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              placeholder: "Your email please"
                            },
                            domProps: { value: _vm.jobseeker.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.jobseeker,
                                  "email",
                                  $event.target.value
                                )
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
                                value: _vm.jobseeker.password,
                                expression: "jobseeker.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              placeholder: "Your password please"
                            },
                            domProps: { value: _vm.jobseeker.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.jobseeker,
                                  "password",
                                  $event.target.value
                                )
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
                                value: _vm.jobseeker.address,
                                expression: "jobseeker.address"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Your address please"
                            },
                            domProps: { value: _vm.jobseeker.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.jobseeker,
                                  "address",
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Skills")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.jobseeker.skills,
                                expression: "jobseeker.skills"
                              }
                            ],
                            staticClass: "form-control",
                            domProps: { value: _vm.jobseeker.skills },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.jobseeker,
                                  "skills",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Short Cover")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.jobseeker.cover_letter,
                                expression: "jobseeker.cover_letter"
                              }
                            ],
                            staticClass: "form-control",
                            domProps: { value: _vm.jobseeker.cover_letter },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.jobseeker,
                                  "cover_letter",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("b-form-group", {
                          attrs: { label: "Gender" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var ariaDescribedby = ref.ariaDescribedby
                                return [
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: {
                                        "aria-describedby": ariaDescribedby,
                                        value: "Male"
                                      },
                                      model: {
                                        value: _vm.jobseeker.gender,
                                        callback: function($$v) {
                                          _vm.$set(_vm.jobseeker, "gender", $$v)
                                        },
                                        expression: "jobseeker.gender"
                                      }
                                    },
                                    [_vm._v("Male")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: {
                                        "aria-describedby": ariaDescribedby,
                                        value: "Female"
                                      },
                                      model: {
                                        value: _vm.jobseeker.gender,
                                        callback: function($$v) {
                                          _vm.$set(_vm.jobseeker, "gender", $$v)
                                        },
                                        expression: "jobseeker.gender"
                                      }
                                    },
                                    [_vm._v("Female")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: {
                                        "aria-describedby": ariaDescribedby,
                                        value: "Others"
                                      },
                                      model: {
                                        value: _vm.jobseeker.gender,
                                        callback: function($$v) {
                                          _vm.$set(_vm.jobseeker, "gender", $$v)
                                        },
                                        expression: "jobseeker.gender"
                                      }
                                    },
                                    [_vm._v("Others")]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Title")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.jobseeker.title,
                              expression: "jobseeker.title"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Your title please eg. Java Developer"
                          },
                          domProps: { value: _vm.jobseeker.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.jobseeker,
                                "title",
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
                              value: _vm.jobseeker.phone,
                              expression: "jobseeker.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Your phone please"
                          },
                          domProps: { value: _vm.jobseeker.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.jobseeker,
                                "phone",
                                $event.target.value
                              )
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
                              value: _vm.jobseeker.website,
                              expression: "jobseeker.website"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Your website please"
                          },
                          domProps: { value: _vm.jobseeker.website },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.jobseeker,
                                "website",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Qualification")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.jobseeker.qualification,
                              expression: "jobseeker.qualification"
                            }
                          ],
                          staticClass: "form-control",
                          domProps: { value: _vm.jobseeker.qualification },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.jobseeker,
                                "qualification",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Resume File")]),
                        _vm._v(" "),
                        _c("input", {
                          ref: "resumefile",
                          staticClass: "form-control",
                          attrs: { type: "file", id: "resumefile" },
                          on: {
                            change: function($event) {
                              return _vm.handleResumeFileUpload()
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
                              value: _vm.jobseeker.socail_urls,
                              expression: "jobseeker.socail_urls"
                            }
                          ],
                          staticClass: "form-control",
                          domProps: { value: _vm.jobseeker.socail_urls },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.jobseeker,
                                "socail_urls",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
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
                    _vm._l(_vm.jobseekers, function(jobseeker) {
                      return _c("tbody", { key: jobseeker.id }, [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(jobseeker.id))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass: "custom-link",
                                on: {
                                  click: function($event) {
                                    return _vm.goToJobSeekerPublicProfile(
                                      jobseeker.id
                                    )
                                  }
                                }
                              },
                              [_vm._v(_vm._s(jobseeker.name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(jobseeker.title))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(jobseeker.address))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(jobseeker.email))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(jobseeker.gender))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(jobseeker.status))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm._f("formatDateEnd")(jobseeker.last_login)
                                ) +
                                "\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(jobseeker.phone))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: jobseeker.resume_file,
                                  target: "_blank"
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "bx bx-file",
                                  staticStyle: { "font-size": "30px" }
                                })
                              ]
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
                                    return _vm.editJobseeker(jobseeker.id)
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
                                    return _vm.deleteJobseeker(jobseeker.id)
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
            _vm._s(_vm.getJobseekersLength) +
            " Jobseekers\n        "
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
        _vm._v(" Jobseekers")
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
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Gender")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Login")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Resume")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);