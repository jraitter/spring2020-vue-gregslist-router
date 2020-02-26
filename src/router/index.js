import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CarDetails from "../views/CarDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/car/:carId",
    name: "CarDetails",
    component: CarDetails
  },
  {
    // NOTE sends user back to home on bad address
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
