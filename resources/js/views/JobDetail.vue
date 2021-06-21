<template>
    <div class="featured-jobs">
        <div class="card">
            <div class="card-header">
                <h4>
                    <i class="bx bx-briefcase"></i> Job Details of
                    {{ job.title }}
                </h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="job-post-company pt-120 pb-120 mt-5 mb-5">
                            <div class="container">
                                <div class="row justify-content-between">
                                    <!-- Left Content -->
                                    <div class="col-xl-7 col-lg-8">
                                        <!-- job single -->
                                        <div class="single-job-items mb-5">
                                            <div class="job-items">
                                                <div
                                                    class="company-img company-img-details"
                                                >
                                                    <img
                                                        :src="
                                                            job.employer
                                                                .profile_image
                                                        "
                                                        alt=""
                                                        width="100"
                                                        height="100"
                                                    />
                                                </div>
                                                <div class="job-tittle">
                                                    <a href="#">
                                                        <h4>{{ job.title }}</h4>
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            {{
                                                                job.employer
                                                                    .name
                                                            }}
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="bx bx-map"
                                                            ></i
                                                            >{{ job.location }}
                                                        </li>
                                                        <li>
                                                            {{ job.salary }}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- job single End -->

                                        <div class="job-post-details">
                                            <div class="post-details1 mb-5">
                                                <!-- Small Section Tittle -->
                                                <div
                                                    class="small-section-tittle"
                                                >
                                                    <h4>Job Description</h4>
                                                </div>
                                                <p>
                                                    {{ job.description }}
                                                </p>
                                            </div>

                                            <div class="post-details2 mb-5">
                                                <!-- Small Section Tittle -->
                                                <div
                                                    class="small-section-tittle"
                                                >
                                                    <h4>Skills</h4>
                                                </div>
                                                <p>
                                                    {{ job.skills }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Right Content -->
                                    <div class="col-xl-4 col-lg-4">
                                        <div class="post-details3 mb-5">
                                            <!-- Small Section Tittle -->
                                            <div class="small-section-tittle">
                                                <h4>Job Overview</h4>
                                            </div>
                                            <ul>
                                                <li>
                                                    Posted date :
                                                    <span>{{
                                                        job.created_at
                                                            | formatDateStart
                                                    }}</span>
                                                </li>
                                                <li>
                                                    Location :
                                                    <span>{{
                                                        job.location
                                                    }}</span>
                                                </li>
                                                <li>
                                                    Vacancy :
                                                    <span>{{
                                                        job.open_positions
                                                    }}</span>
                                                </li>
                                                <li>
                                                    Job nature :
                                                    <span>{{ job.type }}</span>
                                                </li>
                                                <li>
                                                    Salary :
                                                    <span
                                                        >${{ job.salary }}</span
                                                    >
                                                </li>
                                                <li>
                                                    Application date :
                                                    <span>{{
                                                        job.deadline
                                                            | formatDateEnd
                                                    }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="post-details4 mb-5">
                                            <!-- Small Section Tittle -->
                                            <div class="small-section-tittle">
                                                <h4>Company Information</h4>
                                            </div>
                                            <span>{{ job.employer.name }}</span>
                                            <p>
                                                {{ job.employer.slogan }}
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
    name: "Jobs",
    data() {
        return {
            job_id: "2",
            job: {
                employer: {}
            }
        };
    },
    watch: {
        $route: function() {
            this.getIdFromUrl();
        }
    },
    created() {
        this.getJobDetail();
    },
    computed: {},
    methods: {
        getIdFromUrl() {
            this.job_id = this.$route.params.id; //get book slug from the url.
            this.getJobDetail();
        },
        goToJobDetail(job_id) {
            this.$router.push({ path: `/job-detail/${job_id}` });
        },
        goToEmployerPublicProfile(employer_id) {
            this.$router.push({ path: `/employer-profile/${employer_id}` });
        },
        getJobDetail() {
            this.$Progress.start();
            this.$http
                .get("job/" + this.job_id)
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
        }
    }
};
</script>

<style>
.single-job-items {
    padding: 36px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
}
.single-job-items .job-items {
    display: flex;
    flex-wrap: wrap;
}
.single-job-items .company-img img {
    overflow: hidden;
    float: left;
    margin-right: 32px;
    z-index: 999;
}
a,
button {
    color: #fff;
    outline: medium none;
}
.single-job-items .job-tittle a h4 {
    color: #28395a;
    font-size: 24px;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
}
.single-job-items .job-tittle ul li {
    display: inline-block;
    margin-right: 48px;
    font-size: 15px;
    color: #808080;
    line-height: 1.8;
}
li {
    list-style: none;
}
ul {
    margin: 0px;
    padding: 0px;
}
.single-job-items .job-tittle ul li i {
    font-size: 14px;
    color: #bbbbbb;
    margin-right: 10px;
}
.fa-map-marker-alt:before {
    content: "\f3c5";
}
.single-job-items .job-tittle ul li:last-child {
    margin-right: 0px;
}
p {
    font-family: "Muli", sans-serif;
    color: #506172;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: normal;
}
.post-details3 {
    padding: 30px 30px 30px 30px;
    border: 1px solid #ededed;
}
.post-details3 ul li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}
.post-details4 p {
    margin-bottom: 30px;
    display: block;
}
.post-details4 ul li span {
    color: #5b5c6e;
    font-weight: 400;
    font-size: 16px;
    display: inline-block;
    padding-left: 18px;
}

.single-job-items:hover {
    box-shadow: 0px 22px 57px 0px #eee;
}
</style>
