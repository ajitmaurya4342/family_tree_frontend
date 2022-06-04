import Api from "./api";

const UserService = {
  LoginUser(payload) {
    return Api().post(`/admin/login`, payload);
  },
};

export default UserService;
