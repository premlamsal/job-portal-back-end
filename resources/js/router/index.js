import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";
import Jobs from "../views/Jobs.vue";
import store from "../store";

// import DashboardHome from "../views/DashboardHome.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: "/jobs",
        name: "jobs",
        component: () => import("../views/Jobs.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/jobseekers",
        name: "jobseekers",
        component: () => import("../views/Jobseekers.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/employers",
        name: "employers",
        component: () => import("../views/Employers.vue"),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: "/settings",
        name: "settings",
        component: () => import("../views/Settings.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/applications",
        name: "applications",
        component: () => import("../views/Applications.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/job-detail/:id",
        name: "JobDetail",
        // route level code-splitting

        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "jobdetail" */ "../views/JobDetail.vue"
            ),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/jobseeker-profile/:id",
        name: "JobSeekerPublicProfile",
        // route level code-splitting

        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "employerprofile" */ "../views/JobseekerProfile.vue"
            ),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/employer-profile/:id",
        name: "EmployerPublicProfile",
        // route level code-splitting

        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "employerprofile" */ "../views/EmployerProfile.vue"
            ),
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    let type=store.getters["auth/getUser"].type;
    if (type =='admin') {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            next();
            return;
        } else {
            if (to.name == "Login" || to.name === "Register") {
                    next("/dashboard");
                    return;
            } else {
                next();
                return;
            }
        }
    } else {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            next("/login");
            return;
        }
        next();
        return;
    } //end of auth/getToken
});

export default router;
