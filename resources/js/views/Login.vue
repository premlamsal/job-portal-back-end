<template>
    <div>
        <div class="">
            <div class="container">
                <div class="row mt-5">
                    <div class="login mt-5 col-md-5 mx-auto p-5">
                        <h2 class="theme-color">Login</h2>
                        <div class="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Enter email"
                                v-model="user.email"
                            />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                v-model="user.password"
                            />
                        </div>
                        <h5 style="color:red">{{ message.commonError }}</h5>

                        <button class="btn btn-primary" @click="login()">
                            Login
                        </button>
                        <br />
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-md-5 mx-auto">
                        <div class="footer-login-dashboard">
                            <span
                                >All rights reserved. &copy; BatikLeaf's
                                production
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            errors: {},

            canSubmit: "",
            loggedInUser: {},
            loggedInUserToken: "",
            message: {
                commonError: ""
            }
        };
    },
    created() {},
    methods: {
        login() {
            this.message.commonError = "";
            this.$Progress.start();

            let formData = new FormData();
            formData.append("_METHOD", "POST");
            formData.append("email", this.user.email);
            formData.append("password", this.user.password);
            //hit login api
            this.$http
                .post("admin/login", formData)
                .then(response => {
                    //can use vuex for auth login
                    this.loggedInUser = response.data.data.user;
                    this.loggedInUser.type ='admin';
                    this.loggedInUserToken = response.data.data.token;

                    let payload;
                    payload = {
                        user: this.loggedInUser,
                        token: this.loggedInUserToken
                    };

                    this.$store
                        .dispatch("auth/setAuthToken", payload)
                        .then(() => {
                            // console.log(this.loggedInUserToken);

                            this.$toast.success("Welcome");

                            const token = this.loggedInUserToken; //accessing getter from action
                            this.$http.defaults.headers.common = {
                                Authorization: `Bearer ${token}`
                            };
                            this.$http.defaults.headers.common["Accept"] =
                                "application/json";
                            this.$router.push("/dashboard");
                        });
                    this.$Progress.finish();

                    //after login code
                })
                .catch(error => {
                    // console.log(error.response.data.message);
                    this.message.commonError = error.response.data.message;
                    this.errors = error.response.data.errors;
                    // if (this.errors["email"][0]) {
                    //     this.msg.emailMessage = this.errors["email"][0];
                    // }
                    // if (this.errors["password"][0]) {
                    //     this.msg.passwordMessage = this.errors["password"][0];
                    // }
                    // console.log(error.response.data.errors['email'].[0])
                    this.$Progress.fail();
                });
        }
    }
};
</script>
<style>
.login {
    background: #fff;
    border-radius: 12px;
}
.home_content {
    overflow: hidden !important;
}
.footer-login-dashboard {
    text-align: center;
}
</style>
