<template>
    <div class="featured-jobs">
        <div class="card">
            <div class="card-header">
                <h4>
                    <i class="bx bx-briefcase"></i> Details of
                    {{ jobseeker.name }}
                </h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="jobseeker-profile-section mt-5 mb-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row">
                                            <div
                                                class="col-md-10 single-application"
                                            >
                                                <img
                                                    class="jobseeker-profile-image-application"
                                                    :src="
                                                        jobseeker.profile_image
                                                    "
                                                    @click="
                                                        goToJobSeekerPublicProfile(
                                                            jobseeker.id
                                                        )
                                                    "
                                                />
                                                <h2
                                                    class="theme-color pointer"
                                                    @click="
                                                        goToJobSeekerPublicProfile(
                                                            jobseeker.id
                                                        )
                                                    "
                                                >
                                                    {{ jobseeker.name }}
                                                </h2>
                                                <span class="theme-color">{{
                                                    jobseeker.title
                                                }}</span>
                                                <br />
                                                <span class="theme-color"
                                                    >Email: </span
                                                ><span>
                                                    {{ jobseeker.email }}</span
                                                >
                                                <br />
                                                <span class="theme-color"
                                                    >Address: </span
                                                ><span>
                                                    {{
                                                        jobseeker.address
                                                    }}</span
                                                >
                                                <br />
                                                <span class="theme-color"
                                                    >Phone: </span
                                                ><span>
                                                    {{ jobseeker.phone }}</span
                                                >
                                                <br />
                                                <span class="theme-color"
                                                    >Website:
                                                </span>
                                                <a :href="jobseeker.website">{{
                                                    jobseeker.website
                                                }}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-8"
                                        style="text-align: center"
                                    >
                                        <div class="row mt-5 mb-5">
                                            <div class="col-md-12">
                                                <div class="jobseeker-detail">
                                                    <h3 class="theme-color">
                                                        Skills
                                                    </h3>
                                                    <p class="pt-3 pb-3">
                                                        {{ jobseeker.skills }}
                                                    </p>
                                                </div>
                                                <div class="jobseeker-detail">
                                                    <h3 class="theme-color">
                                                        Qualification
                                                    </h3>
                                                    <p class="pt-3 pb-3">
                                                        {{
                                                            jobseeker.qualification
                                                        }}
                                                    </p>
                                                </div>
                                                <div class="jobseeker-detail">
                                                    <h3 class="theme-color">
                                                        Cover
                                                    </h3>
                                                    <p class="pt-3 pb-3">
                                                        {{ jobseeker.cover }}
                                                    </p>
                                                </div>
                                                <div class="jobseeker-detail">
                                                    <h3 class="theme-color">
                                                        Social Links
                                                    </h3>
                                                    <p class="pt-3 pb-3">
                                                        {{
                                                            jobseeker.social_urls
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "JobseekerProfile",
    components: {},
    data() {
        return {
            jobseeker_id: "",
            jobseeker: {}
        };
    },
    created() {
        this.getIdFromUrl();
        this.getJobseekerProfile();
    },
    methods: {
        getIdFromUrl() {
            this.jobseeker_id = this.$route.params.id; //get book slug from the url.
        },
        getJobseekerProfile() {
            this.$Progress.start();
            this.$http
                .get("jobseeker-public-profile/" + this.jobseeker_id)
                .then(response => {
                    // console.log(response.data);
                    this.jobseeker = response.data.data;
                    this.$Progress.finish();
                })
                .catch(error => {
                    console.log(error.response.data);
                    this.$Progress.fail();
                });
        }
    }
};
</script>

<style>
.jobseeker-detail {
}
.pointer {
    cursor: pointer;
}
.custom-control {
    display: inline;
    padding-left: 2.5rem;
}
.single-application {
    border: 1px solid #673ab747;
    box-shadow: 2px 3px 2px 1px #eee;
    padding: 1em;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    margin: 1em;
    text-align: center;
}
.single-application:hover {
    box-shadow: 2px 3px 14px 1px #673ab747;
}
img.jobseeker-profile-image-application {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
