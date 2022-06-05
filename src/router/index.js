import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/MyProfile.vue";
import MyProfile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    // beforeEnter: (to, from, next) => {
    //   console.log('beforeEnter', {to, from})
    //   let user = localStorage.getItem("user");
    //   if (user) return next();
    //   else return next("/sign-in");
    // },
    redirect: (args) => {
      console.log("redirect", { args });
      let user = localStorage.getItem("user");

      return user ? "/dashboard" : "/sign-in";
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/myprofile",
    name: "MyProfile",
    component: MyProfile,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user");
  console.log({ user, from: { ...from }, to: { ...to } });

  if (user) {
    console.log("next");
    return next();
  } else if (from.fullPath === "/sign-in" && to.fullPath === "/sign-up") {
    console.log("sing-in to sign-up");
    return next();
  } else if (from.fullPath === "/" && to.fullPath === "/sign-up") {
    console.log("/ to sign-up");
    return next();
  } else if (!user && to.fullPath !== "/sign-in") {
    console.log("sign-in");
    return next({ path: "/sign-in" });
  }

  return next();
});

export default router;
