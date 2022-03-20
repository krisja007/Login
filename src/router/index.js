import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Detail from "../components/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "/detail/:id",
        name: "detail",
        component: Detail,
      },
    ],
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
