<template>
    <div class="employers">
        <div class="card">
            <div class="card-header">
                <h4><i class="bx bx-briefcase"></i> Employers</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title">The available Employers</h5>
                <button class="btn btn-warning" @click="showAddModal()">
                    Add Employer
                </button>

                <p class="card-text">
                    You can manage the following data from the actions buttons
                </p>

                <!-- add job modal start -->
                <b-modal id="bv-modal-add-employer" hide-footer size="lg">
                    <template v-slot:modal-title>
                        <span class="text-primary">{{ modalForName }}</span>
                    </template>
                    <div class="d-block">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your name please"
                                        v-model="employer.name"
                                    />
                                </div>

                                <div class="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your address please"
                                        v-model="employer.address"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Slogan</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your slogan please"
                                        v-model="employer.slogan"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Company Type</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your website please"
                                        v-model="employer.company_type"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Description </label>
                                    <textarea
                                        class="form-control"
                                        v-model="employer.description"
                                    ></textarea>
                                </div>

                                <div class="form-group">
                                    <label>Profile Image</label>
                                    <input
                                        type="file"
                                        id="imageFile"
                                        ref="imageFile"
                                        v-on:change="handleImageFileUpload()"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Your email please"
                                        v-model="employer.email"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Your password please"
                                        v-model="employer.password"
                                    />
                                </div>

                                <div class="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your phone please"
                                        v-model="employer.phone"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Website</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your website please"
                                        v-model="employer.website"
                                    />
                                </div>

                                <div class="form-group">
                                    <label>Socail Url</label>
                                    <textarea
                                        class="form-control"
                                        v-model="employer.socail_urls"
                                    >
                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <label>Technologies Using </label>
                                    <textarea
                                        class="form-control"
                                        v-model="employer.technologies_using"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b-button
                        class="btn-primary mt-3"
                        block
                        @click="callFunc"
                        >{{ modalForName }}</b-button
                    >
                </b-modal>
                <!-- add job modal end-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-custom-data">
                            <table class="table table-bordered table-hover">
                                <thead class="thead-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Address</th>
                                        <th>Type</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                    v-for="employer in employers"
                                    v-bind:key="employer.id"
                                >
                                    <tr>
                                        <td>{{ employer.id }}</td>
                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="
                                                    goToEmployerPublicProfile(
                                                        employer.id
                                                    )
                                                "
                                                >{{ employer.name }}</span
                                            >
                                        </td>
                                        <td>{{ employer.description }}</td>
                                        <td>{{ employer.address }}</td>
                                        <td>{{ employer.company_type }}</td>
                                        <td>{{ employer.phone }}</td>
                                        
                                        <td>
                                        
                                        
                                        {{ employer.status }}
                                        
                                        
                                        
                                        </td>

                                        <td>
                                            <button
                                                class="btn btn-success"
                                                style="margin-right:5px"
                                                @click="
                                                    editEmployer(employer.id)
                                                "
                                            >
                                                Edit
                                            </button>
                                            <button
                                                @click="
                                                    deleteEmployer(employer.id)
                                                "
                                                class="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                Found {{ getEmployersLength }} Employers
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Employers",
    data() {
        return {
            employers: {},
            employer: {},
            modalForName: "",
            modalForCode: 0,
            profile_image: ""
        };
    },
    created() {
        this.getEmployers();
    },
    computed: {
        getEmployersLength() {
            return this.employers.length;
        }
    },
    methods: {
        handleImageFileUpload() {
            this.profile_image = this.$refs.imageFile.files[0];
            //we got file and set it to imageFile
        },
        callFunc() {
            if (this.modalForCode == 0) {
                this.createEmployer();
                console.log("Add Employer");
            } else if (this.modalForCode == 1) {
                this.updateEmployer();
                console.log("Update Employer");
            }
        },
        showAddModal() {
            this.modalForName = "Add Employer";
            this.modalForCode = 0; //0 for add

            this.employer = [];
            // this.errors = ""; //clearing errors
            // // Vue.set(this.modalForCode,0);
            this.$bvModal.show("bv-modal-add-employer");
        },
        goToEmployerPublicProfile(employer_id) {
            this.$router.push({ path: `/employer-profile/${employer_id}` });
        },
        //will get id from emitter from the compoent
        editEmployer(employer_id) {
            this.$Progress.start();
            this.modalForName = "Edit Employer";
            this.modalForCode = 1; // 1 for Edit
            this.$bvModal.show("bv-modal-add-employer");

            this.$http
                .get("admin/employer/" + employer_id)
                .then(response => {
                    // console.log(response.data.data);
                    this.employer = response.data.data[0];
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        getEmployers: function() {
            this.$Progress.start();
            this.$http
                .get("employers")
                .then(response => {
                    this.employers = response.data.data;
                    this.$Progress.finish();
                })
                .catch(error => {
                    console.log(error.response.data.data);
                    this.$Progress.fail();
                });
        },
        createEmployer() {
            this.$Progress.start();
            let formData = new FormData();
            formData.append("_METHOD", "post");
            formData.append("name", this.employer.name);
            formData.append("email", this.employer.email);
            formData.append("address", this.employer.address);
            formData.append("slogan", this.employer.slogan);
            formData.append("password", this.employer.password);
            formData.append("phone", this.employer.phone);
            formData.append("active",this.employer.active);
            formData.append("description", this.employer.description);
            formData.append("company_type", this.employer.company_type);
            formData.append(
                "technologies_using",
                this.employer.technologies_using
            );
            formData.append("socail_urls", this.employer.socail_urls);
            formData.append("profile_image", this.profile_image);
            console.log(formData);
            this.$http
                .post("admin/create-employer", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    // console.log(response.data);
                    let message = response.data.message;
                    // let status = response.data.status;
                    this.$bvModal.hide("bv-modal-add-employer");

                    this.$swal("Info", message, "success");
                    ///will load new infos from api->server->database
                    this.getEmployers();
                    this.$Progress.finish();
                })
                .catch(error => {
                    // console.log(error.response.data);
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        deleteEmployer(employer_id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
               icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    let formData = new FormData();
                    formData.append("employer_id", employer_id);

                    this.$http
                        .post("admin/delete-employer", formData)
                        .then(response => {
                            let message = response.data.message;
                            // let status = response.data.status;
                            this.$swal("Info", message, "success");
                            // console.log(response.data.data);
                            this.getEmployers();
                            this.$Progress.finish();
                        })
                        .catch(error => {
                            // console.log(error.response.data);
                            this.$toast.error(error.response.data.message, {
                                timeout: 2000
                            });
                            this.$Progress.fail();
                        });
                }
            });
        },
        updateEmployer() {
            this.$Progress.start();
            let formData = new FormData();
            formData.append("_METHOD", "post");
            formData.append("name", this.employer.name);
            formData.append("email", this.employer.email);
            formData.append("password", this.employer.password);
            formData.append("address", this.employer.address);
            formData.append("slogan", this.employer.slogan);
            formData.append("employer_id", this.employer.id);
            formData.append("phone", this.employer.phone);
            formData.append("password", this.employer.password);
            formData.append("active",this.employer.active);
            formData.append("description", this.employer.description);
            formData.append("company_type", this.employer.company_type);
            formData.append(
                "technologies_using",
                this.employer.technologies_using
            );
            formData.append("socail_urls", this.employer.socail_urls);
            formData.append("profile_image", this.profile_image);
            console.log(formData);
            this.$http
                .post("admin/update-employer", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    // console.log(response.data);
                    let message = response.data.message;
                    // let status = response.data.status;
                    this.$bvModal.hide("bv-modal-add-employer");

                    this.$swal("Info", message, "success");
                    ///will load new infos from api->server->database
                    this.getEmployers();
                    this.$Progress.finish();
                })
                .catch(error => {
                    // console.log(error.response.data);
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        }
    }
};
</script>
