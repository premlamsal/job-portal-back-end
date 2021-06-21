import Vue from "vue";
import store from "./store";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import App from "./App.vue";
import router from "./router";

//axios
import Axios from "axios";
//axios config
Axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json"
};

Axios.defaults.baseURL = "https://jobmalai.test/api/v1/";

// const instance = Axios.create({
//   baseURL: "https://jobmalai.test/api/v1/",
// });
Vue.prototype.$http = Axios;
//axios config
//end of axios

///moment
import moment from "moment";

Vue.filter("formatDateStart", function(value) {
    if (value) {
        return moment(String(value))
            .startOf("day")
            .fromNow();
    }
});

Vue.filter("formatDateEnd", function(value) {
    if (value) {
        return moment(String(value))
            .endOf("day")
            .fromNow();
    }
});

//moment

//sweert alert 2
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);
//sweert alert 2

//vue toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
});

//end of toastification

import VueProgressBar from "vue-progressbar";
const options = {
    color: "#87e7eb",
    failedColor: "#874b4b",
    thickness: "3px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300
    },
    autoRevert: true,
    location: "top",
    inverse: false
};

Vue.use(VueProgressBar, options);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
