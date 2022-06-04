<template>
  <navbar btnBackground="bg-gradient-success" v-if="false" />
  <div
    class="page-header align-items-start min-vh-100"
    :style="{
      backgroundImage: `url(${require('@/assets/img/illustrations/photo-1497294815431-9365093b7331.jpg')})`,
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Sign in
                </h4>
                <div class="row mt-3" v-if="isSocialLoginEnabled">
                  <div class="col-2 text-center ms-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-facebook text-white text-lg"></i>
                    </a>
                  </div>
                  <div class="col-2 text-center px-1">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-github text-white text-lg"></i>
                    </a>
                  </div>
                  <div class="col-2 text-center me-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-google text-white text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3">
                <div class="mb-3">
                  <vmd-input
                    v-model="user_name"
                    id="user_name"
                    type="text"
                    label="User Name"
                    name="User_Name"
                    :error="error.length > 0"
                  />
                </div>
                <div class="mb-3">
                  <vmd-input
                    v-model="password"
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    :error="error.length > 0"
                  />
                </div>
                <vmd-switch
                  id="rememberMe"
                  name="rememberMe"
                  v-if="isSocialLoginEnabled"
                  >Remember me</vmd-switch
                >
                <div class="text-center">
                  <vmd-button
                    @click.stop.prevent="submitLogin"
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    >Sign in</vmd-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  Don't have an account?
                  <router-link
                    :to="{ name: 'SignUp' }"
                    class="text-success text-gradient font-weight-bold"
                    >Sign up</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              made with
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
          </div>
          <div class="col-12 col-md-6" v-if="false">
            <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
            >
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  class="nav-link text-white"
                  target="_blank"
                  >Creative Tim</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link text-white"
                  target="_blank"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  class="nav-link text-white"
                  target="_blank"
                  >Blog</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  class="nav-link pe-0 text-white"
                  target="_blank"
                  >License</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import VmdInput from "@/components/VmdInput.vue";
import VmdSwitch from "@/components/VmdSwitch.vue";
import VmdButton from "@/components/VmdButton.vue";
import { mapMutations } from "vuex";
import UserService from "@/services/UserService";

export default {
  name: "sign-in",
  components: {
    Navbar,
    VmdInput,
    VmdSwitch,
    VmdButton,
  },
  data() {
    return {
      isSocialLoginEnabled: false,
      submitted: false,
      error: "",
      user_name: "",
      password: "",
    };
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    async submitLogin(args) {
      this.submitted = false;
      this.error = "";

      try {
        this.submitted = true;
        let { data } = await UserService.LoginUser({
          user_name: this.user_name,
          password: this.password,
        });

        if (!data?.status) {
          this.error = data?.message || "Something went wrong!";
          return false;
        }

        localStorage.setItem("user", JSON.stringify(data?.Records?.[0]));

        await this.$router.replace({ path: "/dashboard" });
      } catch (e) {
        this.error = "Something went wrong!";
        console.log("Err", e);
      } finally {
        this.submitted = false;
      }
    },
  },
};
</script>
