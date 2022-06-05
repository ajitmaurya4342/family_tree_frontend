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
                            v-model.trim="first_name"
                          />
                        </div>
                        <span
                          class="position-absolute"
                          style="font-size: small"
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
                            v-model.trim="last_name"
                          />
                        </div>
                        <span
                          class="position-absolute"
                          style="font-size: small"
                          v-if="last_nameError"
                          >{{ last_nameError }}</span
                        >
                      </div>
                      <div class="mb-4">
                        <div
                          :class="`input-group input-group-outline ${
                            !email ? ` ` : `is-filled `
                          } ${!emailError ? ` ` : `is-invalid `}`"
                        >
                          <label class="form-label">{{ "Email" }}</label>
                          <input
                            autocomplete="false"
                            id="email"
                            name="email"
                            type="text"
                            class="form-control form-control-lg"
                            v-model.trim="email"
                          />
                        </div>
                        <span
                          class="position-absolute"
                          style="font-size: small"
                          v-if="emailError"
                          >{{ emailError }}</span
                        >
                      </div>
                      <div class="mb-4">
                        <div
                          :class="`input-group input-group-outline ${
                            !phone_number ? ` ` : `is-filled `
                          } ${!phone_numberError ? ` ` : `is-invalid `}`"
                        >
                          <label class="form-label">{{ "Phone number" }}</label>
                          <input
                            autocomplete="false"
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            class="form-control form-control-lg"
                            v-model.number="phone_number"
                          />
                        </div>
                        <span
                          class="position-absolute"
                          style="font-size: small"
                          v-if="phone_numberError"
                          >{{ phone_numberError }}</span
                        >
                      </div>
                      <div class="d-flex mb-2">
                        <span>Gender&nbsp;</span>
                        <div class="form-check">
                          <input
                            checked
                            id="genderMale"
                            name="gender"
                            class="form-check-input"
                            type="radio"
                            value="Male"
                            v-model="gender"
                          />
                          <label class="custom-control-label" for="genderMale">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="genderFemale"
                            name="gender"
                            class="form-check-input"
                            type="radio"
                            value="Female"
                            v-model="gender"
                          />
                          <label
                            class="custom-control-label"
                            for="genderFemale"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <span>Marital Status&nbsp;</span>
                        <div class="form-check">
                          <input
                            checked
                            id="married"
                            name="married"
                            class="form-check-input"
                            type="radio"
                            value="Y"
                            v-model="is_married"
                          />
                          <label class="custom-control-label" for="married">
                            Married
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            checked
                            id="unmarried"
                            name="married"
                            class="form-check-input"
                            type="radio"
                            value="N"
                            v-model="is_married"
                          />
                          <label class="custom-control-label" for="unmarried">
                            Unmarried
                          </label>
                        </div>
                      </div>

                      <div class="mb-2">
                        <Datepicker
                          v-model="dob"
                          autoApply
                          placeholder="Birthday"
                          format="yyyy-MM-dd"
                          :enableTimePicker="false"
                        >
                        </Datepicker>
                        <span
                          class="position-absolute"
                          style="font-size: small"
                          v-if="dobError"
                          >{{ dobError }}</span
                        >
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
                      Already registered?
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
import Datepicker from "@vuepic/vue-datepicker";
import { isValid, format } from "date-fns";
import { useToast } from "vue-toastification";

import UserService from "@/services/UserService";

export default {
  name: "sign-up",
  components: {
    Navbar,
    // VmdInput,
    VmdCheckbox,
    VmdButton,
    Datepicker,
  },
  setup(props, context) {
    const toast = useToast();

    let { handleSubmit, formMeta, isSubmitting, resetForm } = useForm({
      validationSchema: {
        first_name: "required|min:1",
        last_name: "required|min:1",
        email: "required|email",
        phone_number: "required|integer|between:1000000000,9999999999",
        dob(value) {
          return isValid(value);
        },
      },
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        dob: "",
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
    const {
      value: email,
      errorMessage: emailError,
      meta: emailmeta,
    } = useField("email", undefined, { label: "Email" });
    const {
      value: phone_number,
      errorMessage: phone_numberError,
      meta: phone_numbermeta,
    } = useField("phone_number", undefined, { label: "Phone number" });
    const {
      value: dob,
      errorMessage: dobError,
      meta: dobmeta,
    } = useField("dob", undefined, { label: "Birthday" });

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
      toast,
      validate,
      isSubmitting,
      resetForm,
      first_name,
      first_nameError,
      last_name,
      last_nameError,
      email,
      emailError,
      phone_number,
      phone_numberError,
      dob,
      dobError,
    };
  },
  data() {
    return {
      submitted: false,
      gender: "Male",
      is_married: "N",
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
        if (!values) {
          this.toast.info("Please complete the form");
          return;
        }

        let payload = {
          ...values,
          gender: this.gender,
          is_married: this.is_married,
        };
        payload.dob = format(payload.dob, "yyyy-MM-dd");

        console.log({ payload });

        UserService.AddEditUsers(payload)
          .then(({ data }) => {
            if (data?.status) {
              localStorage.setItem("user", JSON.stringify(data?.Records?.[0]));
            } else {
              this.toast.info(data.message);
              return;
            }
            console.log({ data: { ...data } });

            return data;
          })
          .then((data) => {
            if (!data) return
            return this.$router.replace({ path: "/dashboard" });
          })
          .catch((err) => {
            console.log({ err });
          });
      });
    },
  },
};
</script>
