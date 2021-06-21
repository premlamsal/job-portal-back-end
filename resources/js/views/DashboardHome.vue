<template>
    <div class="dashboard">
        <h2>Dashboard</h2>
        <div class="row">
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span> 200 <br />Jobs</span>
                        <b-icon icon="briefcase" scale="3"></b-icon>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span
                            >100 <br />
                            Employers</span
                        >
                        <b-icon icon="shop" scale="3"></b-icon>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span>200 <br />Candidates</span>
                        <b-icon icon="people" scale="3"></b-icon>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-dashboard">
                    <div class="card-body">
                        <span>20 <br />Featured Jobs</span>
                        <b-icon icon="front" scale="3"></b-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DashboardHome"
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

