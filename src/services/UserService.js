import Api from "./api";

const UserService = {
  LoginUser(payload) {
    return Api().post(`/admin/login`, payload);
  },
  AddEditUsers(payload) {
    let hierarchy_id = `1`;

    return Api().post(`/admin/addEditUsers/${hierarchy_id}`, payload);
  },
};

export default UserService;
