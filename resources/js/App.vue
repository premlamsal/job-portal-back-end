<template>
    <div class="app">
        <div
            class="sidebar"
            v-bind:class="{ active: isActiveSidebar }"
            v-if="getUser.name && getUser.type == 'admin'"
        >
            <div class="logo_content">
                <div class="logo">
                    <div class="logo_name">Batik Leaf</div>
                </div>
                <i class="bx bx-menu" id="btn" @click="showSideBar()"></i>
            </div>
            <ul class="nav_list">
                <li>
                    <router-link to="/dashboard">
                        <i class="bx bx-grid-alt"></i>
                        <span class="links_name">Dashboard</span>
                    </router-link>
                    <span class="tooltip">Dashboard</span>
                </li>
                <li>
                    <router-link to="/jobs">
                        <i class="bx bx-briefcase"></i>
                        <span class="links_name">Jobs</span>
                    </router-link>
                    <span class="tooltip">Jobs</span>
                </li>
                <li>
                    <router-link to="/employers">
                        <i class="bx bx-store"></i>
                        <span class="links_name">Employers</span>
                    </router-link>
                    <span class="tooltip">Employers</span>
                </li>

                <li>
                    <router-link to="/jobseekers">
                        <i class="bx bx-group"></i>
                        <span class="links_name">Jobseekers</span>
                    </router-link>
                    <span class="tooltip">Jobseekers</span>
                </li>

                <li>
                    <router-link to="/applications">
                        <i class="bx bx-envelope"></i>
                        <span class="links_name">Applications</span>
                    </router-link>
                    <span class="tooltip">Applications</span>
                </li>

                <li>
                    <router-link to="/settings">
                        <i class="bx bx-cog"></i>
                        <span class="links_name">Setting</span>
                        <span class="tooltip">Settings</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="home_content">
            <!-- render router view here -->
            <b-navbar
                type="light"
                variant="top-nav"
                v-if="getUser.name && getUser.type == 'admin'"
            >
                <b-navbar-brand href="#">JobMalai</b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>{{getUser.name}}</em>
                            </template>
                            <b-dropdown-item @click="logout()">LogOut</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>

            <div class="router-view-box">
                <router-view></router-view>
                <!-- set progressbar -->
                <vue-progress-bar></vue-progress-bar>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "App",
    components: {},
    data() {
        return {
            isActiveSidebar: true
        };
    },
    computed: {
        ...mapGetters({
            getUser: "auth/getUser",
            getToken: "auth/getToken"
        }),

        isValidUser() {}
    },
    methods: {
        showSideBar() {
            if (this.isActiveSidebar) {
                this.isActiveSidebar = false;
            } else {
                this.isActiveSidebar = true;
            }
        },
        logout() {
            const token = this.getToken; //accessing getter from action
            this.$http.defaults.headers.common = {
                Authorization: `Bearer ${token}`
            };
            this.$http.defaults.headers.common["Accept"] = "application/json";

            this.$http
                .post("admin/logout")
                .then(response => {
                    console.log(response.data);
                    this.$store.dispatch("auth/removeAuthToken");
                    this.$toast("Logged Out ", {
                        timeout: 2000
                    });
                    this.$router.push("/login");
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
    }
};
</script>

<style>
@import url("https://fonts.cdnfonts.com/css/futura-lt-bt");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Futura Lt BT", sans-serif;
}
body {
    background: #e4e9f7;
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
}
::selection {
    color: #fff;
    background: #11101d;
}
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 78px;
    background: #673ab7;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;
}
.sidebar.active {
    width: 240px;
}
.sidebar .logo_content .logo {
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
}
.sidebar.active .logo_content .logo {
    opacity: 1;
    pointer-events: none;
}
.logo_content .logo i {
    font-size: 28px;
    margin-right: 5px;
}
.logo_content .logo .logo_name {
    font-size: 20px;
    font-weight: 400;
}
.sidebar #btn {
    position: absolute;
    color: #fff;
    top: 6px;
    left: 50%;
    font-size: 22px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
}
.sidebar.active #btn {
    left: 90%;
}
.sidebar ul {
    margin-top: 20px;
}
.sidebar ul li {
    position: relative;
    height: 50px;
    width: 100%;
    margin: 0 5px;
    list-style: none;
    line-height: 50px;
    margin: 5px 0;
}
.sidebar ul li .tooltip {
    position: absolute;
    left: 125px;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    height: 35px;
    width: 120px;
    background: #fff;
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
    display: block;
}
.sidebar.active ul li .tooltip {
    display: none;
}
.sidebar ul li:hover .tooltip {
    transition: all 0.5s ease;
    opacity: 1;
    top: 50%;
}
.sidebar ul li input {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    background: #864ee8;
    padding-left: 50px;
    font-size: 18px;
    color: #e4e9f7;
}
.sidebar ul li .bx-search {
    position: absolute;
    z-index: 99;
    color: #fff;
    font-size: 22px;
    transition: all 0.5 ease;
}
.sidebar ul li .bx-search:hover {
    background: #fff;
    color: #1d1b31;
}
.sidebar ul li a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 12px;
    white-space: nowrap;
    transition: all 0.4s ease;
}
.sidebar ul li a:hover {
    color: #11101d;
    background: #fff;
}
.sidebar ul li i {
    font-size: 18px;
    font-weight: 400;
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
}
.sidebar .links_name {
    font-size: 18px;
    font-weight: 400;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}
.sidebar.active .links_name {
    transition: 0s;
    opacity: 1;
    pointer-events: auto;
}
.router-view-box {
    padding: 2em;
}
.home_content {
    position: absolute;
    height: 100%;
    width: calc(100% - 78px);
    left: 78px;
    background: #e4e9f7;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2px);
    transition: all 0.5s ease;
}
.sidebar.active ~ .home_content {
    z-index: 100;
}

.sidebar.active ~ .home_content {
    width: calc(100% - 240px);
    left: 240px;
}
.bg-top-nav {
    background: #f7f7f7 !important;
}
.bg-theme {
    background-color: #673ab7 !important;
}

.router-link-active {
    color: #11101d !important;
    background: #fff !important;
}
.card {
    border-radius: 12px !important;
    box-shadow: 3px 2px 8px -2px #673ab7;
}
.card-body {
    border-radius: 12px !important;
}
.card-footer {
    border-bottom-left-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
}
.card-header {
    background: #673ab7 !important;
    color: white;
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important;
}

.btn-primary {
    color: #fff !important;
    background-color: #673ab7 !important;
    border-color: #673ab7 !important;
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
    color: #fff !important;
    background-color: #673ab7 !important;
    border-color: #673ab7 !important;
}
.custom-link {
    cursor: pointer;
    text-decoration: underline;
}
.custom-link:hover {
    color: #673ab7;
}
.home_content {
    overflow: scroll!important;
}
</style>
