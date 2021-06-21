<template>
    <div class="applications">
        <div class="card">
            <div class="card-header">
                <h4><i class="bx bx-briefcase"></i> Applications</h4>
            </div>

            <div class="card-body">
                <h5 class="card-title">The available Applications</h5>
                <p></p>
                <p class="card-text">
                    You can manage the following data from the actions buttons
                </p>

                <div class="row">
                    <div class="col-md-12">
                        <div class="table-custom-data">
                            <table class="table table-bordered table-hover">
                                <thead class="thead-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>For the Post of</th>
                                        <th>Jobsseker/ Applicant</th>
                                        <th>Employer</th>
                                        <th>Applied at</th>
                                        <th>Application Status</th>
                                        <th>Job Deadline</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                    v-for="application in applications"
                                    v-bind:key="application.id"
                                >
                                    <tr>
                                        <td>{{ application.id }}</td>
                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="
                                                    goToJobDetail(
                                                        application.job.id
                                                    )
                                                "
                                                >{{
                                                    application.job.title
                                                }}</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="
                                                    goToJobSeekerPublicProfile(
                                                        application.jobseeker.id
                                                    )
                                                "
                                                >{{
                                                    application.jobseeker.name
                                                }}</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="custom-link"
                                                @click="
                                                    goToEmployerPublicProfile(
                                                        application.job.employer
                                                            .id
                                                    )
                                                "
                                                >{{
                                                    application.job.employer
                                                        .name
                                                }}</span
                                            >
                                        </td>
                                        <td>
                                            {{
                                                application.created_at
                                                    | formatDateStart
                                            }}
                                        </td>
                                        <td>
                                            {{ application.status }}
                                        </td>

                                        <td
                                            v-bind:class="{
                                                'table-danger':
                                                    application.job.isExpired
                                            }"
                                        >
                                            {{
                                                application.job.deadline
                                                    | formatDateEnd
                                            }}
                                        </td>

                                        <td>
                                            <button
                                                class="btn btn-danger"
                                                @click="
                                                    cancelApplication(
                                                        application.id,
                                                        application.jobseeker.id
                                                    )
                                                "
                                            >
                                                Cancel Application
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
                Found {{ getApplicationsLength }} Jobs
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Applications",
    data() {
        return {
            applications: {}
        };
    },
    created() {
        this.getApplications();
    },

    methods: {
        cancelApplication(application_id, jobseeker_id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!"
            }).then(result => {
                this.$Progress.start();
                if (result.value) {
                    let formData = new FormData();
                    formData.append("application_id", application_id);
                    formData.append("jobseeker_id", jobseeker_id);
                    this.$http
                        .post("admin/cancel-application", formData)
                        .then(response => {
                            let message = response.data.message;
                            // let status = response.data.status;
                            this.$swal("Info", message, "success");
                            this.getApplications();
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
        goToEmployerPublicProfile(employer_id) {
            this.$router.push({ path: `/employer-profile/${employer_id}` });
        },
        goToJobSeekerPublicProfile(jobseeker_id) {
            this.$router.push({ path: `/jobseeker-profile/${jobseeker_id}` });
        },
        goToJobDetail(job_id) {
            this.$router.push({ path: `/job-detail/${job_id}` });
        },
        getApplications: function() {
            this.$Progress.start();
            this.$http
                .get("admin/applications")
                .then(response => {
                    this.applications = response.data.data;
                    this.$Progress.finish();
                })
                .catch(error => {
                    console.log(error.response.data.data);
                    this.$Progress.fail();
                });
        }
    },
    computed: {
        getApplicationsLength() {
            return this.applications.length;
        }
    }
};
</script>
