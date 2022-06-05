<template>
  <div class="container-fluid">
    <div
      class="page-header min-height-300 border-radius-xl mt-4"
      :style="{
        backgroundImage: `url(${require('@/assets/img/illustrations/photo-1531512073830-ba890ca4eba2.jpg')})`,
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="card card-body mx-3 mx-md-4 mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="@/assets/img/marie.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">
              {{ current_user.first_name }} {{ current_user.last_name }}
            </h5>
            <p class="mb-0 font-weight-normal text-sm">
              {{ current_user.email }}
            </p>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0"></div>
        </div>
      </div>
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-xl-8 col-lg-7 col-md-6 d-flex flex-column ms-auto me-auto ms-lg-auto"
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">User details</h4>
                    <p class="mb-0">Update your details</p>
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
                      <div class="mb-4">
                        <div
                          :class="`input-group input-group-outline ${
                            !description ? ` ` : `is-filled `
                          }`"
                        >
                          <label class="form-label">{{ "Description" }}</label>
                          <input
                            autocomplete="false"
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            class="form-control form-control-lg"
                            v-model.trim="description"
                          />
                        </div>
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
                          >Save</vmd-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProfileInfoCard from "./components/ProfileInfoCard.vue";
import DefaultProjectCard from "./components/DefaultProjectCard.vue";
import VmdSwitch from "@/components/VmdSwitch.vue";
import VmdAvatar from "@/components/VmdAvatar.vue";
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import UserService from "@/services/UserService";
import { useToast } from "vue-toastification";
import { useField, useForm } from "vee-validate";
import { format, isValid } from "date-fns";
import Navbar from "@/examples/PageLayout/Navbar";
import VmdCheckbox from "@/components/VmdCheckbox";
import VmdButton from "@/components/VmdButton";
import Datepicker from "@vuepic/vue-datepicker";
import { mapMutations } from "vuex";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile-overview",
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
        description() {
          return true;
        },
      },
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        dob: "",
        description: "",
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
    const {
      value: description,
      errorMessage: descriptionError,
      meta: descriptionmeta,
    } = useField("description", undefined, { label: "Description" });

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
      description,
      descriptionError,
    };
  },
  data() {
    return {
      submitted: false,
      gender: "Male",
      is_married: "N",

      user_list: [],
      tempUser: [],
      linked_relation: [],
      not_linked_relation: [],
      searchValue: "",
      current_user: {},

      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
    };
  },
  components: {
    // ProfileInfoCard,
    // DefaultProjectCard,
    // VmdSwitch,
    // VmdAvatar,
    VmdCheckbox,
    VmdButton,
    Datepicker,
  },
  computed: {
    checkIsAdminLogin() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) return false;
      return user?.is_admin == "Y";
    },
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    if (!this.checkIsAdminLogin) {
      this.toggleSidebar();
      body.classList.remove("bg-gray-100");
    }
  },
  beforeMount() {
    if (!this.checkIsAdminLogin) {
      this.toggleSidebar();
      body.classList.add("bg-gray-100");
    }

    this.getUserList();
  },
  methods: {
    ...mapMutations([
      "toggleSidebar",
      "toggleEveryDisplay",
      "toggleHideConfig",
    ]),
    async getUserList() {
      console.log("getUserList");

      let { data } = await UserService.GetUserList();

      this.tempUser = data.Records.filter((z) => {
        return z.user_id > 1;
      });

      this.linked_relation = this.tempUser.filter((z) => {
        return z.relation;
      });

      this.not_linked_relation = this.tempUser.filter((z) => {
        return z.relation == "";
      });

      this.user_list = [...this.not_linked_relation, ...this.linked_relation];

      let current_user_id = this.$route.query.user_id;
      let user = this.user_list.filter((u) => u.user_id == current_user_id)[0];
      this.current_user = user;
      console.log({ current_user_id, user });

      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.email = user.email;
      this.phone_number = user.phone_number;
      this.gender = user.gender;
      this.is_married = user.is_married;
      this.description = user.description;
      this.dob = new Date(user.dob);
    },
    register: function () {
      this.validate().then((values) => {
        if (!values) {
          this.toast.info("Please complete the form");
          return;
        }

        let payload = {
          ...this.current_user,
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
              this.toast.info(data?.message);
            } else {
              this.toast.info(data.message);
              return;
            }
            console.log({ data: { ...data } });

            return data;
          })
          .catch((err) => {
            console.log({ err });
          });
      });
    },
  },
};
</script>
