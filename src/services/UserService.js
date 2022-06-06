import Api from "./api";
let hierarchy_id = `1`;
const UserService = {
  LoginUser(payload) {
    return Api().post(`/admin/login`, payload);
  },
  AddEditUsers(payload) {
    return Api().post(`/admin/addEditUsers/${hierarchy_id}`, payload);
  },
  GetUserList(payload) {
  return Api().get(`/admin/getUserList/${hierarchy_id}`, payload);
  },
  LinkRelation(payload) {
    return Api().post(`/admin/linkRelation/${payload.user_id}/${hierarchy_id}`, payload);
    },
  DeLinkRelation(payload) {
     return Api().post(`/admin/deattachRelation/${payload.user_id}/${hierarchy_id}`, payload);
  },
  
};

export default UserService;
