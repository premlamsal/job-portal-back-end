<template>
    <div class="settings">
        <div class="card">
            <div class="card-header">
                <h4>Settings</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title">Some tweaks for Application</h5>
                <div class="row">
                    <div class="form-box col-md-5">
                        <div class="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.app_name"
                                placeholder="Enter application name"
                            />
                        </div>
                        <div class="form-group">
                            <label>Slogan</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.app_slogan"
                                placeholder="Enter application slogan"
                            />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                class="form-control"
                                v-model="app.email"
                                placeholder="Enter application email"
                            />
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <textarea
                                class="form-control"
                                v-model="app.address"
                                placeholder="Enter application address"
                            ></textarea>
                        </div>

                        <div class="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.phone"
                                placeholder="Enter phone"
                           />
                        </div>
                         <div class="form-group">
                            <label>Mobile</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.mobile"
                                placeholder="Enter mobile"
                           />
                        </div>
                        <div class="form-group">
                            <label>Facebook Url</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.facebook"
                                placeholder="Enter Facebook url"
                            />
                        </div>
                         <div class="form-group">
                            <label>Twitter Url</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.twitter"
                                placeholder="Enter Twitter url"
                            />
                        </div>
                         <div class="form-group">
                            <label>Youtube Url</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.youtube"
                                placeholder="Enter Youtube url"
                            />
                        </div>
                         <div class="form-group">
                            <label>Github Url</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="app.github"
                                placeholder="Enter github url"
                            />
                        </div>
                        <div class="form-group">
                            <label>Copyright Text</label>
                            <textarea
                                class="form-control"
                                v-model="app.copyright_text"
                                placeholder="Enter application copyright text(make it short)"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <label>Logo(only .png file)</label>
                            <input
                                type="file"
                                ref="logoFile"
                                v-on:change="handleLogoFileUpload()"
                            />
                            <div class="form-group">
                                <img
                                    :src="app.app_logo"
                                    width="100"
                                    height="100"
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Favicon Icon (only .ico file)</label>
                            <input
                                type="file"
                                ref="iconFile"
                                v-on:change="handleIconFileUpload()"
                            />
                            <div class="form-group">
                                <img
                                    :src="app.app_icon"
                                    width="60"
                                    height="60"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" @click="updateAppInfo()">
                    Update
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Settings",
    data() {
        return {
            app: {},
            icon_file: "",
            logo_image: ""
        };
    },
    created() {
        this.getAppInfo();
    },
    methods: {
        getAppInfo() {
            this.$Progress.start();
            this.$http
                .get("admin/appinfoadmin")
                .then(response => {
                    this.app = response.data.data[0];
                    this.$Progress.finish();
                })
                .catch(error => {
                    console.log(error.response.data.data);
                    this.$Progress.fail();
                });
        },
        handleIconFileUpload() {
            this.icon_file = this.$refs.iconFile.files[0];
        },
        handleLogoFileUpload() {
            this.logo_image = this.$refs.logoFile.files[0];
        },
        updateAppInfo() {
            this.$Progress.start();
            let formData = new FormData();
            formData.append("_METHOD", "post");
            formData.append("app_name", this.app.app_name);
            formData.append("email", this.app.email);
            formData.append("app_slogan", this.app.app_slogan);
            formData.append("app_logo", this.app.logo_image);
            formData.append("address", this.app.address);
            formData.append("phone", this.app.phone);
            formData.append("mobile", this.app.mobile);
            formData.append("email", this.app.email);
            formData.append("facebook", this.app.facebook);
            formData.append("youtube", this.app.youtube);
            formData.append("twitter", this.app.twitter);
            formData.append("github", this.app.github);
            formData.append("copyright_text", this.app.copyright_text);
            formData.append("app_icon", this.app.icon_file);
            this.$http
                .post("admin/updateappinfo", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    // console.log(response.data);

                    let message = response.data.message;
                    this.$swal("Info", message, "success");
                    ///will load new infos from api->server->database
                    this.getAppInfo();
                    this.$Progress.finish();
                })
                .catch(error => {
                    // console.log(error.response.data);
                    this.$toast.error(error.response.data.message, {
                        timeout: 2000
                    });
                    this.$Progress.fail();
                });
        }
    }
};
</script>
