<template>
    <div class="jobs">
        <div class="card">
            <div class="card-header">
                <h4><i class="bx bx-briefcase"></i> Jobs</h4>
            </div>

            <div class="card-body">
                <h5 class="card-title">The available Jobs</h5>
                <p>
                    <button class="btn btn-warning" @click="showAddModal()">
                        Add a Job
                    </button>
                </p>
                <p class="card-text">
                    You can manage the following data from the actions buttons
                </p>

                <!-- add job modal start -->
                <b-modal id="bv-modal-add-job" hide-footer hide-footer size="lg">
                    <template v-slot:modal-title>
                        <span class="text-primary">{{ modalForName }}</span>
                    </template>
                     <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="hidden" v-model="job.id" />
                    <label>Job Title</label>
                    <input
                      type="text"
                      placeholder="Job Title"
                      v-model="job.title"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Job Category</label>
                    <template>
                      <select class="form-control" v-model="job.category_id">
                        <option
                          selected=""
                          v-for="category in categories"
                          :value="category.id"
                          v-bind:key="category.id"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                      <span v-if="errors.category_id" :class="['errorText']">{{
                        errors.category_id[0]
                      }}</span>
                    </template>
                  </div>

                  <div class="form-group">
                    <label>Job description</label>
                    <textarea
                      v-model="job.description"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Required Skills</label>
                    <textarea
                      v-model="job.skills"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Salary</label>
                    <input
                      type="text"
                      placeholder="Job Salary"
                      class="form-control"
                      v-model="job.salary"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Deadline</label>
                    <input
                      type="date"
                      placeholder="Job Deadline"
                      class="form-control"
                      v-model="job.deadline"
                    />
                  </div>
                  <div class="form-group">
                    <label>Open Positions</label>
                    <input
                      type="text"
                      placeholder="Open Positions"
                      v-model="job.open_position"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="Location"
                      class="form-control"
                      v-model="job.location"
                    />
                  </div>
                  <div class="form-group">
                    <label>Job Type</label>
                    <select v-model="job.type" class="form-control">
                      <option>Select Job Type</option>
                      <option value="full_time">Full Time</option>
                      <option value="part_time">Part Time</option>
                      <option value="remote">Remote</option>
                      <option value="project_basis">Project Basis</option>
                      <option value="freelance">Frelance</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Job Experience</label>
                    <select v-model="job.experience" class="form-control">
                      <option>Select Experience</option>
                      <option value="1-2">1-2 Years</option>
                      <option value="2-3">2-3 Years</option>
                      <option value="3-6">3-6 Years</option>
                      <option value="6-more">6- more</option>
                      <option value="freelance">Frelance</option>
                    </select>
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
                                        <th>Title</th>
                                        <th>Employer</th>
                                        <th>Location</th>
                                        <th>Posted</th>
                                        <th>Deadline</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody v-for="job in jobs" v-bind:key="job.id">
                                    <tr>
                                        <td>{{ job.id }}</td>
                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="goToJobDetail(job.id)"
                                                >{{ job.title }}</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="
                                                    goToEmployerPublicProfile(
                                                        job.employer.id
                                                    )
                                                "
                                                >{{ job.employer.name }}</span
                                            >
                                        </td>
                                        <td>{{ job.location }}</td>
                                        <td>
                                            {{
                                                job.created_at | formatDateStart
                                            }}
                                        </td>

                                        <td
                                            v-bind:class="{
                                                'table-danger': job.isExpired
                                            }"
                                        >
                                            {{ job.deadline | formatDateEnd }}
                                        </td>
                                        <td>
                                            {{ job.status }}
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-warning"
                                                style="margin-right: 5px"
                                                @click="closeJob(job.id)"
                                                v-if="job.status === 'active'"
                                            >
                                                Mark as Closed
                                            </button>
                                            <button
                                                class="btn btn-warning"
                                                style="margin-right: 5px"
                                                @click="activeJob(job.id)"
                                                v-if="job.status === 'closed'"
                                            >
                                                Mark as Active
                                            </button>
                                            <button
                                                class="btn btn-primary"
                                                style="margin-right: 5px"
                                                @click="
                                                    editJob(
                                                        job.id,
                                                        job.employer.id
                                                    )
                                                "
                                            >
                                                Edit
                                            </button>
                                            <button
                                                class="btn btn-danger"
                                                @click="
                                                    deleteJob(
                                                        job.id,
                                                        job.employer_id
                                                    )
                                                "
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
                Found {{ getJobsLength }} Jobs
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Jobs",
    data() {
        return {
            jobs: {},
            modalForName: "",
            modalForCode: 0,
            job: {},
            categories: [],
            errors: [],
            employers: {}
        };
    },
    created() {
        this.getJobs();
        this.getCategories();
        this.getEmployers();
    },

    methods: {
        getCategories() {
            this.$Progress.start();
            this.$http
                .get("categories")
                .then(response => {
                    this.categories = response.data.data;
                    // console.log(response.data);
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        getEmployers() {
            this.$Progress.start();
            this.$http
                .get("employers")
                .then(response => {
                    this.employers = response.data.data;
                    // console.log(response.data);
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        callFunc() {
            if (this.modalForCode == 0) {
                this.createJob();
                console.log("Add Job");
            } else if (this.modalForCode == 1) {
                this.updateJob();
                console.log("Update Job");
            }
        },
        showAddModal() {
            this.modalForName = "Add new Job";
            this.modalForCode = 0; //0 for add

            this.job = [];
            // this.errors = ""; //clearing errors
            // // Vue.set(this.modalForCode,0);
            this.$bvModal.show("bv-modal-add-job");
        },
        createJob() {
            this.$Progress.start();
            let formData = new FormData();
            formData.append("title", this.job.title);
            formData.append("category_id", this.job.category_id);
            formData.append("description", this.job.description);
            formData.append("skills", this.job.skills);
            formData.append("experience", this.job.experience);
            formData.append("salary", this.job.salary);
            formData.append("deadline", this.job.deadline);
            formData.append("location", this.job.location);
            formData.append("open_position", this.job.open_position);
            formData.append("type", this.job.type);

            this.$http
                .post("admin/create-job", formData)
                .then(response => {
                    let message = response.data.message;
                    // let status = response.data.status;
                    this.$swal("Info", message, "success");
                    // this.jobs = response.data.data;
                    this.getEmployerJobs();
                    this.$bvModal.hide("bv-modal-add-job");
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        //will get id from emitter from the compoent
        editJob(job_id) {
            this.$Progress.start();
            this.modalForName = "Edit Job";
            this.modalForCode = 1; // 1 for Edit
            this.$bvModal.show("bv-modal-add-job");

            this.$http
                .get("job/" + job_id)
                .then(response => {
                    // console.log(response.data.data);
                    this.job = response.data.data[0];
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },

        updateJob() {
            this.$Progress.start();
            let formData = new FormData();
            formData.append("title", this.job.title);
            formData.append("category_id", this.job.category_id);
            formData.append("description", this.job.description);
            formData.append("skills", this.job.skills);
            formData.append("salary", this.job.salary);
            formData.append("experience", this.job.experience);
            formData.append("deadline", this.job.deadline);
            formData.append("employer_id", this.job.employer_id);
            formData.append("location", this.job.location);
            formData.append("open_position", this.job.open_position);
            formData.append("type", this.job.type);
            formData.append("job_id", this.job.id);

            this.$http
                .post("admin/update-job", formData)
                .then(response => {
                    let message = response.data.message;
                    // let status = response.data.status;
                    this.$swal("Info", message, "success");
                    // this.jobs = response.data.data;
                    this.getJobs();
                    this.$bvModal.hide("bv-modal-add-job");
                    this.$Progress.finish();
                })
                .catch(error => {
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        },
        deleteJob(job_id, employer_id) {
            let currObj = this;
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
                    formData.append("job_id", job_id);
                    formData.append("employer_id", employer_id);

                    this.$http
                        .post("admin/delete-job", formData)
                        .then(response => {
                            let message = response.data.message;
                            // let status = response.data.status;
                            this.$swal("Info", message, "success");
                            // console.log(response.data.data);
                            this.getJobs();
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
        closeJob(job_id, employer_id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, close this job!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    let formData = new FormData();
                    formData.append("_METHOD", "put");
                    formData.append("job_id", job_id);
                    formData.append("employer_id", employer_id);

                    this.$http
                        .post("admin/close-job", formData)
                        .then(response => {
                            let message = response.data.message;
                            // let status = response.data.status;
                            this.$swal("Info", message, "success");
                            // this.job = response.data.data;
                            this.getJobs();
                            this.$Progress.finish();
                        })
                        .catch(error => {
                            this.$toast.error(error.response.data.message, {
                                timeout: 2000
                            });
                            this.$Progress.fail();
                        });
                }
            });
        },
        activeJob(job_id, employer_id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, active this job!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    let formData = new FormData();
                    formData.append("_METHOD", "put");
                    formData.append("job_id", job_id);
                    formData.append("employer_id", employer_id);

                    this.$http
                        .post("employer/active-job", formData)
                        .then(response => {
                            let message = response.data.message;
                            // let status = response.data.status;
                            this.$swal("Info", message, "success");
                            // this.job = response.data.data;
                            this.getJobs();
                            this.$Progress.finish();
                        })
                        .catch(error => {
                            this.$toast.error(error.response.data.message, {
                                timeout: 2000
                            });
                            this.$Progress.fail();
                        });
                }
            });
        },
        goToJobDetail(job_id) {
            this.$router.push({ path: `/job-detail/${job_id}` });
        },
        goToEmployerPublicProfile(employer_id) {
            this.$router.push({ path: `/employer-profile/${employer_id}` });
        },
        getJobs: function() {
            this.$Progress.start();
            this.$http
                .get("jobs")
                .then(response => {
                    this.jobs = response.data.data;
                    this.$Progress.finish();
                })
                .catch(error => {
                    console.log(error.response.data.data);
                    this.$Progress.fail();
                });
        }
    },
    computed: {
        getJobsLength() {
            return this.jobs.length;
        }
        // isJobExpired() {
        //     let now = new Date();
        //     now.setHours(0, 0, 0, 0);
        //     if (this.job.deadline < now) {
        //         console.log("Expired");
        //     } else {
        //         console.log("Not Expired");
        //     }
        // },
    }
};
</script>
