<template>
  <div class="py-4 container-fluid">
  <div class="row" v-if="checkIsAdminLogin">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Users table</h6>
            </div>
            <div class="mb-3 mt-3">
                  <vmd-input
                    v-model="searchValue"
                    id="user_name"
                    type="text"
                    label="Search User"
                    @input="onSearchUser"

                  />
                </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0" >
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      User Name
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                     Email

                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Relation Linked
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Date of Birth
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody v-if="user_list.length">
                  <tr v-for="(user,index) in user_list" :key="index">
                    <td>
                      <div class="d-flex px-2 py-1" >
                        <div>
                          <img
                            src="../assets/img/team-2.jpg"
                            v-if="user.picture"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                          />
                          <i class="material-icons me-sm-2" v-else> account_circle </i>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{user.first_name}} {{user.last_name}}</h6>
                          <p class="text-xs text-secondary mb-0">

                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">      {{user.email}} </p>
                    </td>
                    <td class="align-middle text-center text-sm font-weight-bold">
                     <span :style="!user.relation_linked?'color:red':''"> {{ user.relation}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        > {{user.dob}}</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        @click="gotoEditUser(user)"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
import UserService from "@/services/UserService";
import VmdInput from "@/components/VmdInput.vue";

export default {
  name: "dashboard-default",
  data() {
    return {
      user_list:[],
      tempUser:[],
      linked_relation:[],
      not_linked_relation:[],
      searchValue:""
    };
  },
  computed:{
    checkIsAdminLogin(){
      let storage=JSON.parse(localStorage.getItem("user"))
      return storage.is_admin=='Y' || true
    }

  },
  beforeMount(){
   this.getUserList()
  },
  components: {
    VmdInput
  },
  methods:{
    gotoEditUser(user) {
      console.log({ user });
      this.$router.push({
        path: "/myprofile",
        query: {
          user_id: user.user_id,
        },
      });
    },
   async getUserList(){
       let { data } = await UserService.GetUserList();

       this.tempUser=data.Records.filter(z=>{
         return z.user_id>1
       })

      this.linked_relation=this.tempUser.filter(z=>{
        return z.relation
      })
        this.not_linked_relation=this.tempUser.filter(z=>{
        return z.relation==""
      })
      this.user_list=[...this.not_linked_relation,...this.linked_relation]

    },

    onSearchUser: function(value) {
      if (this.searchValue && this.searchValue.length > 0) {
        let search_value = this.searchValue.toLowerCase();
        let check_array = [
          "email",
          "phone_no",
          "full_name",
          "relation",
          "dob"
        ];
        this.user_list = this.tempUser.filter(x => {
          let obj = {};
          let check = false;
          check_array.map(y => {
            if (typeof x[y] == "object") {
              obj[y] = JSON.stringify(x[y])
                .toLowerCase()
                .includes(search_value);
            } else {

              obj[y] = x[y]?(x[y]).toLowerCase().includes(search_value):"";
            }
            console.log(check, obj[y])
            if (!check && obj[y]) {
              check = true;
            }
          });
          return check;
        });
        // console.log(users)
      } else {
        this.user_list = [...this.unlinked_relation,...this.linked_relation];
      }
    }
  }
};
</script>
