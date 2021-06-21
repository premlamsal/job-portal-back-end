<template>
    <div>
        <div class="sidebar" v-bind:class="{ active: isActiveSidebar }" v-if="getUser.name">
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
    </div>
</template>
<script>
export default {
    name: "Nav",
     data() {
        return {
            isActiveSidebar: true
        };
    },
    methods: {
        showSideBar() {
            if (this.isActiveSidebar) {
                this.isActiveSidebar = false;
            } else {
                this.isActiveSidebar = true;
            }
        }
    }
    
};
</script>
<style></style>
