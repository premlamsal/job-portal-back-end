<template>
    <div class="dashboard">
        <h2>Dashboard</h2>
        <div class="row">
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span> {{dashInfo.jobs}} <br />Job<span v-if="dashInfo.jobs>1">s</span></span>
                        <b-icon icon="briefcase" scale="3"></b-icon>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span
                            >{{dashInfo.employers}} <br />
                            Employer<span v-if="dashInfo.employers>1">s</span></span
                        >
                        <b-icon icon="shop" scale="3"></b-icon>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span>{{dashInfo.jobseekers}} <br />Jobseeker<span v-if="dashInfo.jobseekers>1">s</span></span>
                        <b-icon icon="people" scale="3"></b-icon>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span>{{dashInfo.featuredjobs}} <br /> Featured Job<span v-if="dashInfo.featuredjobs>1">s</span></span>
                        <b-icon icon="front" scale="3"></b-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Dashboard",
    data() {
        return {
            dashInfo: {}
        };
    },
    created() {
        this.getDashInfo();
    },
    methods: {
        getDashInfo() {
            this.$Progress.start();

            this.$http
                .get("admin/dash-info")
                .then(response => {
                    // this.dashInfo = JSON.parse(response.data.data);
                    this.dashInfo =response.data.data;
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
.card-dashboard {
    background: #fff;
    color: #101010;
    border: 1px solid #673ab74d;
    position: relative;
}
.b-icon {
    position: absolute;
    right: 13%;
    top: 37%;
    color: #673ab7;
}
.card-dashboard span {
    font-size: 20px;
}
</style>
