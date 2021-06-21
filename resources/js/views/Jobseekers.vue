<template>
    <div class="jobseekers">
        <div class="card">
            <div class="card-header">
                <h4><i class="bx bx-briefcase"></i> Jobseekers</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title">The available Jobseekers</h5>
                <button class="btn btn-warning" @click="showAddModal()">
                    Add Jobseeker
                </button>
                <p class="card-text">
                    You can manage the following data from the actions buttons
                </p>
                <!-- add job modal start -->
                <b-modal id="bv-modal-add-jobseeker" hide-footer size="lg">
                    <template v-slot:modal-title>
                        <span class="text-primary">{{ modalForName }}</span>
                    </template>
                    <div class="d-block">
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your name please"
                                            v-model="jobseeker.name"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Your email please"
                                            v-model="jobseeker.email"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Your password please"
                                            v-model="jobseeker.password"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your address please"
                                            v-model="jobseeker.address"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Profile Image</label>
                                        <input
                                            type="file"
                                            id="imageFile"
                                            ref="imageFile"
                                            v-on:change="
                                                handleImageFileUpload()
                                            "
                                            class="form-control"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Skills</label>
                                        <textarea
                                            class="form-control"
                                            v-model="jobseeker.skills"
                                        ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Short Cover</label>
                                        <textarea
                                            class="form-control"
                                            v-model="jobseeker.cover_letter"
                                        ></textarea>
                                    </div>
                                    <b-form-group
                                        label="Gender"
                                        v-slot="{ ariaDescribedby }"
                                    >
                                        <b-form-radio
                                            :aria-describedby="ariaDescribedby"
                                            value="Male"
                                            v-model="jobseeker.gender"
                                            >Male</b-form-radio
                                        >
                                        <b-form-radio
                                            :aria-describedby="ariaDescribedby"
                                            value="Female"
                                            v-model="jobseeker.gender"
                                            >Female</b-form-radio
                                        >
                                        <b-form-radio
                                            :aria-describedby="ariaDescribedby"
                                            value="Others"
                                            v-model="jobseeker.gender"
                                            >Others</b-form-radio
                                        >
                                    </b-form-group>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your title please eg. Java Developer"
                                            v-model="jobseeker.title"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your phone please"
                                            v-model="jobseeker.phone"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Website</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your website please"
                                            v-model="jobseeker.website"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Qualification</label>
                                        <textarea
                                            class="form-control"
                                            v-model="jobseeker.qualification"
                                        ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Resume File</label>

                                        <input
                                            type="file"
                                            id="resumefile"
                                            ref="resumefile"
                                            v-on:change="
                                                handleResumeFileUpload()
                                            "
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Socail Url</label>
                                        <textarea
                                            class="form-control"
                                            v-model="jobseeker.socail_urls"
                                        >
                                        </textarea>
                                    </div>
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
                                        <th>Title</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Last Login</th>
                                        <th>Phone</th>
                                        <th>Resume</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                    v-for="jobseeker in jobseekers"
                                    v-bind:key="jobseeker.id"
                                >
                                    <tr>
                                        <td>{{ jobseeker.id }}</td>

                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="
                                                    goToJobSeekerPublicProfile(
                                                        jobseeker.id
                                                    )
                                                "
                                                >{{ jobseeker.name }}</span
                                            >
                                        </td>
                                        <td>{{ jobseeker.title }}</td>
                                        <td>{{ jobseeker.address }}</td>
                                        <td>{{ jobseeker.email }}</td>
                                        <td>{{ jobseeker.gender }}</td>
                                        <td>{{ jobseeker.status }}</td>
                                        <td>
                                            {{
                                                jobseeker.last_login
                                                    | formatDateEnd
                                            }}
                                        </td>

                                        <td>{{ jobseeker.phone }}</td>
                                        <td>
                                            <a
                                                :href="jobseeker.resume_file"
                                                target="_blank"
                                                ><i
                                                    class="bx bx-file"
                                                    style="font-size:30px"
                                                ></i
                                            ></a>
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-success"
                                                style="margin-right:5px"
                                                @click="
                                                    editJobseeker(jobseeker.id)
                                                "
                                            >
                                                Edit
                                            </button>
                                            <button
                                                @click="
                                                    deleteJobseeker(
                                                        jobseeker.id
                                                    )
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
                Found {{ getJobseekersLength }} Jobseekers
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Jobseekers",
    data() {
        return {
            jobseekers: {},
            resume_file: "",
            profile_image: "",
            modalForName: "",
            modalForCode: 0,
            jobseeker: {}
        };
    },
    created() {
        this.getJobseekers();
    },
    computed: {
        getJobseekersLength() {
            return this.jobseekers.length;
        }
    },
    methods: {
        handleResumeFileUpload() {
            this.resume_file = this.$refs.resumefile.files[0];
            //we got file and set it to resumefile
        },
        handleImageFileUpload() {
            this.profile_image = this.$refs.imageFile.files[0];
            //we got file and set it to imageFile
        },
        goToJobSeekerPublicProfile(jobseeker_id) {
            this.$router.push({ path: `/jobseeker-profile/${jobseeker_id}` });
        },
        getJobseekers: function() {
            this.$Progress.start();
            this.$http
                .get("jobseekers")
                .then(response => {
                    this.jobseekers = response.data.data;
                    this.$Progress.finish();
                })
                .catch(error => {
                    console.log(error.response.data.data);
                    this.$Progress.fail();
                });
        },
        callFunc() {
            if (this.modalForCode == 0) {
                this.createJobseeker();
                console.log("Add Jobseeker");
            } else if (this.modalForCode == 1) {
                this.updateJobseeker();
                console.log("Update Jobseeker");
            }
        },
        showAddModal() {
            this.modalForName = "Add new Jobseeker";
            this.modalForCode = 0; //0 for add

            this.jobseeker = [];
            // this.errors = ""; //clearing errors
            // // Vue.set(this.modalForCode,0);
            this.$bvModal.show("bv-modal-add-jobseeker");
        },
        //will get id from emitter from the compoent
        editJobseeker(job_id) {
            this.$Progress.start();
            this.modalForName = "Edit Jobseeker";
            this.modalForCode = 1; // 1 for Edit
            this.$bvModal.show("bv-modal-add-jobseeker");

            this.$http
                .get("admin/jobseeker/" + job_id)
                .then(response => {
                    // console.log(response.data.data);
                    this.jobseeker = response.data.data[0];
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        deleteJobseeker(employer_id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    let formData = new FormData();
                    formData.append("jobseeker_id", jobseeker_id);

                    this.$http
                        .post("admin/delete-jobseeker", formData)
                        .then(response => {
                            let message = response.data.message;
                            // let status = response.data.status;
                            this.$swal("Info", message, "success");
                            // console.log(response.data.data);
                            this.getJobseekers();
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
        updateJobseeker() {
            this.$Progress.start();
            let formData = new FormData();
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
            this.$http
                .post("admin/update-jobseeker", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    // console.log(response.data);

                    let message = response.data.message;
                    // let status = response.data.status;
                    this.$swal("Info", message, "success");

                    this.$bvModal.hide("bv-modal-add-jobseeker");

                    ///will load new infos from api->server->database
                    this.getJobseekers();
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
        createJobseeker() {
            this.$Progress.start();
            let formData = new FormData();
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
            this.$http
                .post("admin/create-jobseeker", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    // console.log(response.data);

                    let message = response.data.message;
                    // let status = response.data.status;
                    this.$swal("Info", message, "success");
                    this.$bvModal.hide("bv-modal-add-jobseeker");

                    ///will load new infos from api->server->database
                    this.getJobseekers();
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
