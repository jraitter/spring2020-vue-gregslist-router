import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import CarsHome from "../views/CarsHome.vue";
import CarDetails from "../views/CarDetails.vue";
import JobsHome from "../views/JobsHome.vue"
import JobDetails from "../views/JobDetails.vue"
import HousesHome from "../views/HousesHome.vue"
import HouseDetails from "../views/HouseDetails.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/car",
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
    path: "/house",
    name: "HousesHome",
    component: HousesHome
  },
  {
    path: "/house/:houseId",
    name: "HouseDetails",
    component: HouseDetails
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
