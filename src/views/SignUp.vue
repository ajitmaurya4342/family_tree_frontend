<template>
  <div class="bg-white">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <navbar
            v-if="false"
            isBlur="blur my-3 py-2 mt-4 start-0 end-0 mx-4 shadow blur border-radius-lg"
            btnBackground="bg-gradient-success"
            v-bind:darkMode="true"
          />
        </div>
      </div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
              >
                <div
                  class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                  :style="{
                    backgroundImage: `url(${require('@/assets/img/illustrations/illustration-signin.jpg')})`,
                  }"
                ></div>
              </div>
              <div
                class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">Sign Up</h4>
                    <p class="mb-0">
                      Enter your email and password to register
                    </p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="register">
                      <div class="mb-4">
                        <div
                          :class="`input-group input-group-outline ${
                            !first_name ? ` ` : `is-filled `
                          } ${!first_nameError ? ` ` : `is-invalid `}`"
                        >
                          <label class="form-label">{{ "First Name" }}</label>
                          <input
                            autocomplete="false"
                            id="first_name"
                            name="first_name"
                            type="text"
                            class="form-control form-control-lg"
                            v-model="first_name"
                          />
                        </div>
                        <span
                          class="position-absolute"
                          v-if="first_nameError"
                          >{{ first_nameError }}</span
                        >
                      </div>

                      <div class="mb-4">
                        <div
                          :class="`input-group input-group-outline ${
                            !last_name ? ` ` : `is-filled `
                          } ${!last_nameError ? ` ` : `is-invalid `}`"
                        >
                          <label class="form-label">{{ "Last Name" }}</label>
                          <input
                            autocomplete="false"
                            id="last_name"
                            name="last_name"
                            type="text"
                            class="form-control form-control-lg"
                            v-model="last_name"
                          />
                        </div>
                        <span class="position-absolute" v-if="last_nameError">{{
                          last_nameError
                        }}</span>
                      </div>

                      <vmd-checkbox
                        v-if="false"
                        id="flexCheckDefault"
                        class="font-weight-light"
                        checked
                      >
                        I agree the
                        <a
                          href="../../../pages/privacy.html"
                          class="text-dark font-weight-bolder"
                          >Terms and Conditions</a
                        >
                      </vmd-checkbox>
                      <div class="text-center">
                        <vmd-button
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          fullWidth
                          size="lg"
                          >Sign Up</vmd-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Don't have an account?
                      <router-link
                        :to="{ name: 'SignIn' }"
                        class="text-success text-gradient font-weight-bold"
                        >Sign In</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import VmdInput from "@/components/VmdInput.vue";
import VmdCheckbox from "@/components/VmdCheckbox.vue";
import VmdButton from "@/components/VmdButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";
import { Field, Form, ErrorMessage, useForm, useField } from "vee-validate";

export default {
  name: "sign-up",
  components: {
    Navbar,
    // VmdInput,
    VmdCheckbox,
    VmdButton,
  },
  setup(props) {
    let { handleSubmit, formMeta, isSubmitting, resetForm } = useForm({
      validationSchema: {
        first_name: "required|min:8",
        last_name: "required|min:8",
      },
      initialValues: {
        first_name: "",
        last_name: "",
      },
    });
    const {
      value: first_name,
      errorMessage: first_nameError,
      meta: first_namemeta,
    } = useField("first_name", undefined, { label: "First Name" });
    const {
      value: last_name,
      errorMessage: last_nameError,
      meta: last_namemeta,
    } = useField("last_name", undefined, { label: "Last Name" });

    const validate = handleSubmit(
      function validate(values) {
        if (values === undefined) return false;
        return values;
      },
      function onInvalidSubmit({ values, errors, results }) {
        console.log({
          values, // current form values
          errors, // a map of field names and their first error message
          results, // a detailed map of field names and their validation results
        });
        // resetForm();
      }
    );

    return {
      validate,
      isSubmitting,
      resetForm,
      first_name,
      first_nameError,
      last_name,
      last_nameError,
    };
  },
  data() {
    return {
      submitted: false,
    };
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    register: function () {
      this.validate().then((values) => {
        if (!values) return;
        console.log({ values });
      });
    },
  },
};
</script>
