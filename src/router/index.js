import Vue from "vue";
import VueRouter from "vue-router";
const Dashboard = () =>
  import(/* webpackChunkName: "Dashboard" */ "../pages/Dashboard.vue");

const About = () =>
  import(/* webpackChunkName: "About" */ "../pages/About.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
