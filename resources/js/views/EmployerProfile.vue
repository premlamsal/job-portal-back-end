<template>
    <div class="featured-jobs">
        <div class="card">
            <div class="card-header">
                <h4>
                    <i class="bx bx-briefcase"></i> Details of
                    {{ employer.name }}
                </h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="employer-profile-section mt-5 mb-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <img
                                                    :src="employer.profile_image"
                                                    class="img-fluid img-thumbnail"
                                                   
                                                />
                                            </div>
                                            <div class="col-md-7">
                                                <h3 class="theme-color">
                                                    {{ employer.name }}
                                                </h3>
                                                <h6>{{ employer.slogan }}</h6>
                                                <h6>{{ employer.address }}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a
                                            class="border-btn2 mt-3"
                                            :href="employer.website"
                                            >Visit Website</a
                                        >
                                    </div>
                                </div>
                                <div class="row mt-5 mb-5">
                                    <div class="col-md-12">
                                        <div class="employer-detail">
                                            <p class="pt-3 pb-3">
                                                {{ employer.description }}
                                            </p>
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
    name: "EmployerProfile",
    components: {},
    data() {
        return {
            emp_id: "",
            employer: {}
        };
    },
    created() {
        this.getIdFromUrl();
        this.getEmployerProfile();
    },
    methods: {
        getIdFromUrl() {
            this.emp_id = this.$route.params.id; //get book slug from the url.
        },
        getEmployerProfile() {
            this.$Progress.start();
            this.$http
                .get("employer-public-profile/" + this.emp_id)
                .then(response => {
                    // console.log(response.data);
                    this.employer = response.data.data;
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
