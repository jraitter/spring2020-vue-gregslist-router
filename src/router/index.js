import Vue from "vue";
import VueRouter from "vue-router";
import CarsHome from "../views/CarsHome.vue";
import CarDetails from "../views/CarDetails.vue";
import JobsHome from "../views/JobsHome.vue"
import JobDetails from "../views/JobDetails.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CarsHome",
    component: CarsHome
  },
  {
    path: "/car/:carId",
    name: "CarDetails",
    component: CarDetails
  },
  {
    path: "/job",
    name: "JobsHome",
    component: JobsHome
  },
  {
    path: "/job/:jobId",
    name: "JobDetails",
    component: JobDetails
  },
  {
    // NOTE sends user back to root/home on bad address
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
