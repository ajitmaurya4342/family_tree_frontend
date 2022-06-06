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
                            @input="genderChange"
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
                            @input="genderChange"
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
                              @input="marriedChange"
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
                            @input="marriedChange"
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
                          >Update Profile</vmd-button
                        >
                      </div>



                      
                    </form>
                    
                       <div v-if="show_relation">
                       <div class="pb-0 card-header bg-transparent mt-4">
                       <h4 class="font-weight-bolder">Link Your Relation</h4>
                        </div>



                       <div class="d-flex mb-2 mt-4" v-if="this.gender=='Male'">
                        <span>Relation&nbsp;</span>
                        <div class="form-check">
                          <input
                            
                            id="sonof"
                            name="is_son_of"
                            class="form-check-input"
                            type="radio"
                            value="Y"
                            @input="MaleRelation"
                            v-model="is_son_of"
                          />
                          <label class="custom-control-label" for="sonof">
                            Son of Shroff Family 
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="sonofs"
                            name="is_son_of"
                            class="form-check-input"
                            type="radio"
                            value="N"
                            @input="MaleRelation"
                            v-model="is_son_of"
                          />
                          <label
                            class="custom-control-label"
                            for="sonofs"
                          >
                            Husband of Shroff Family
                          </label>
                        </div>
                      </div>

                       <div class="d-flex mb-2 mt-4" v-if="this.gender=='Female'">
                        <span>Relation&nbsp;</span>
                        <div class="form-check">
                          <input
                            
                            id="daughterOf"
                            name="is_son_of"
                            class="form-check-input"
                            type="radio"
                            value="Y"
                            v-model="is_daughter_of"
                               @input="FemaleRelation"
                          />
                          <label class="custom-control-label" for="daughterOf">
                            Daughter of Shroff Family  
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="daughterofs"
                            name="is_son_of"
                            class="form-check-input"
                            type="radio"
                            value="N"
                            v-model="is_daughter_of"
                               @input="FemaleRelation"

                          />
                          <label
                            class="custom-control-label"
                            for="daughterofs"
                          >
                            Wife of Shroff Family
                          </label>
                        </div>
                      </div>

                        <div class="d-flex mb-2 mt-4 mb-5" v-if="this.is_son_of || this.is_daughter_of">
                        <label>Select Relation :</label>
                         <Multiselect
                            v-model="parent_detail"
                            :options="user_list_with_level"
                            :label="full_name"
                            :track-by="user_id"
                            :searchable="true"
                          />
                        
                        </div>

                      <div class="text-center" v-if="parent_detail">
                        <vmd-button
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          @click="linkRelation"
                          
                          size="lg"
                          >Link Your Relation</vmd-button
                        >
                      </div>

                        </div>

                    
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
import Multiselect from '@vueform/multiselect'

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
      originalGender:"",
      originalMarried:"",
      show_relation:true,
      is_married: "N",
      relation_linked:"",
      is_son_of:"",
      is_daughter_of:"",
      is_parent_id:"",
      parent_detail:"",
      user_list_with_level:[],
      temp_user_list_with_level:[],
      user_list: [],
      tempUser: [],
      linked_relation: [],
      not_linked_relation: [],
      searchValue: "",
      current_user: {},
      is_male:false,

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
    Multiselect
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
   MaleRelation(parentId){

      setTimeout(()=>{
         console.log(this.gender,"Male")
         let temparray=[...this.temp_user_list_with_level]
        if(this.is_son_of=='Y'){
          this.user_list_with_level=temparray
        }else{
          this.user_list_with_level=temparray.filter(z=>{
            return z.gender=='Female'
          })
        }
        if(!parentId){
         this.parent_detail=""

        }
         this.$forceUpdate()
      },100)
     

    },
     FemaleRelation(parentId){

      setTimeout(()=>{
         console.log(this.is_daughter_of,"Female")
        
         let temparray=[...this.temp_user_list_with_level]
        if(this.is_daughter_of=='Y'){
          this.user_list_with_level=temparray
        }else{
          this.user_list_with_level=temparray.filter(z=>{
            return z.gender=='Male' && z.is_married=='Y'
          })
        }
          this.$forceUpdate()
         if(!parentId){
         this.parent_detail=""

        }
      },100)
     

    },
    
    genderChange(){

      setTimeout(()=>{
         console.log(this.gender)
        if(this.originalGender==this.gender){
          console.log("Gender Change")
          this.show_relation=true;
        }else{
          this.show_relation=false;
        }

      },100)
     

    },
    marriedChange(){

      setTimeout(()=>{
         console.log(this.is_married)
        if(this.originalMarried==this.is_married){
          console.log("Married Change")
          this.show_relation=true;
        }else{
          this.show_relation=false;
        }

      },100)
     

    },
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
       this.temp_user_list_with_level=this.tempUser.filter(z=>{
        return z.user_level  && z.is_married=='Y'
      })
      console.log(this.temp_user_list_with_level,"teeeee---")
      this.user_list_with_level=this.tempUser.filter(z=>{
        return z.user_level   && z.is_married=='Y'
      })

      let current_user_id = this.$route.query.user_id;
      let user = this.user_list.filter((u) => u.user_id == current_user_id)[0];
      this.current_user = user;
      console.log({ current_user_id, user });

      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.email = user.email;
      this.phone_number = user.phone_number;
      this.gender = user.gender;
      this.originalGender = user.gender;
      this.is_married = user.is_married;
      this.originalMarried = user.is_married;
      this.description = user.description;
      this.dob = new Date(user.dob);

      this.is_male= user.gender=='Male'

      //Relation Related
      console.log(user,"parent_detail")
      if(user.relation_linked){
      this.is_son_of=user.is_son_of
      this.is_daughter_of=user.is_daughter_of
      }

      if(this.is_male && this.is_son_of=='Y'){
         this.is_daughter_of="";
        let parent_detail=this.user_list.filter(_z=>{
          return _z.user_id==user.parent_id
        })
        if(parent_detail.length>0){
          this.parent_detail=parent_detail[0].user_id
        }
       
      }

      console.log(this.is_male , this.is_daughter_of,this.is_son_of)
      if(!this.is_male && this.is_daughter_of=='Y'){
        this.is_son_of="";
        console.log(user.parent_id,"Parent_Id")
        let parent_detail=this.user_list.filter(_z=>{
          return _z.user_id==user.parent_id
        })
        if(parent_detail.length>0){
                this.parent_detail=parent_detail[0].user_id
        }
       
      }

        if( this.is_son_of=='N'){
             this.is_daughter_of="";
        let wife_detail=this.user_list.filter(_z=>{
          return _z.husband_id==user.user_id
        })
        if(wife_detail.length>0){
            this.parent_detail=wife_detail[0].user_id
        }
       
      }

        if(this.is_daughter_of=='N'){
             this.is_son_of="";
        let husband_detail=this.user_list.filter(_z=>{
          return _z.wife_id==user.user_id
        })
        if(husband_detail.length>0){
            this.parent_detail=husband_detail[0].user_id
        }
       
      }

      if(this.gender=='Male'){
       this.MaleRelation( this.parent_detail);
      }else{
        this.FemaleRelation( this.parent_detail);
      }

      console.log(this.parent_detail,"husband_detail",this.is_son_of,this.is_daughter_of)

      
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
              if(!this.show_relation){
                 UserService.DeLinkRelation({user_id:data?.Records?.[0].user_id})
                  .then(({ data }) => {
                   window.location.reload()
                  });

              }
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
     linkRelation: function () {
       let payload = {
         user_id: this.current_user.user_id
        };
     console.log(this.is_son_of)
      if(this.is_son_of=='Y'){
            payload["parent_id"]=this.parent_detail
            payload["is_son_of"]=this.is_son_of
        }else  if(this.is_son_of=='N'){
            payload["wife_id"]=this.parent_detail
            payload["is_son_of"]=this.is_son_of
        }else if(this.is_daughter_of=='Y'){
            payload["parent_id"]=this.parent_detail
            payload["is_daughter_of"]=this.is_daughter_of
        }else if(this.is_daughter_of=='N'){
            payload["wife_id"]=this.parent_detail
            payload["is_daughter_of"]=this.is_daughter_of
        }

        UserService.LinkRelation(payload)
          .then(({ data }) => {
            if (data?.status) {
              this.toast.info(data?.message);
               window.location.reload()
               
            } else {
              this.toast.info(data.message);
              return;
            }

            return data;
          })
          .catch((err) => {
            console.log({ err });
          });
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
