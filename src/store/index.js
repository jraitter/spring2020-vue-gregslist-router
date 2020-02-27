import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    jobs: [],
    activeJob: {},
    houses: [],
    activeHouse: {}
  },
  mutations: {

    //NOTE first argument of a mutationn is always the state
    // the second is always the payload
    setCars(state, cars) {
      state.cars = cars;
    },
    addCar(state, car) {
      state.cars.push(car);
    },
    removeCar(state, id) {
      state.cars = state.cars.filter(c => c._id != id);
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
    setJobs(state, payload) {
      state.jobs = payload;
    },
    addJob(state, payload) {
      state.jobs.push(payload);
    },
    removeJob(state, id) {
      state.jobs = state.jobs.filter(j => j._id != id);
    },
    setActiveJob(state, payload) {
      state.activeJob = payload;
    },
    setHouses(state, payload) {
      state.houses = payload;
    },
    addHouse(state, payload) {
      state.houses.push(payload);
    },
    removeHouse(state, id) {
      state.houses = state.houses.filter(h => h._id != id);
    },
    setActiveHouse(state, payload) {
      state.activeHouse = payload;
    }
  },
  actions: {
    //NOTE the first argument of an action is always an object, destructuring allows us to only grab what we need
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars");
        //NOTE Commits trigger mutations by name (first arguement), and provide a payload (second argument)
        // you may only pass two arguments the name of the mutation and the payload
        commit("setCars", res.data.data); //NOTE the res.data.data is the sandbox api way of providing data
      } catch (error) {
        console.error(error);
      }
    },
    async getCarById({ commit, dispatch }, id) {
      try {
        let res = await _api.get("cars/" + id);
        commit("setActiveCar", res.data.data); //NOTE the res.data.data is the sandbox api way of providing data
      } catch (error) {
        console.error(error);
        // NOTE Push changes the route to the provided route by name
        router.push({ name: "CarsHome" });
      }
    },
    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _api.post("cars", newCar);
        // dispatch("getCars");
        commit("addCar", res.data.data);
        // NOTE after the car is created, send them to the car details page for that car
        router.push({
          name: "CarDetails",
          params: { carId: res.data.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.delete(`cars/${carId}`);
        // dispatch("getCars");
        commit("removeCar", carId);
        commit("setActiveCar", {});
      } catch (error) {
        console.error(error);
      }
    },
    setActiveCar({ commit }, car) {
      commit("setActiveCar", car);
    },
    async getJobs({ commit }) {
      try {
        let res = await _api.get("jobs");
        commit("setJobs", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getJobById({ commit, dispatch }, id) {
      try {
        let res = await _api.get("jobs/" + id);
        commit("setActiveJob", res.data.data); //NOTE the res.data.data is the sandbox api way of providing data
      } catch (error) {
        console.error(error);
        // NOTE Push changes the route to the provided route by name
        router.push({ name: "JobsHome" });
      }
    },
    async createJob({ commit, dispatch }, newJob) {
      try {
        let res = await _api.post("jobs", newJob);
        // dispatch("getJobs");
        commit("addJob", res.data.data);
        // NOTE after the job is created, send them to the job details page for that job
        router.push({
          name: "JobDetails",
          params: { jobId: res.data.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteJob({ commit, dispatch }, jobId) {
      try {
        let res = await _api.delete(`jobs/${jobId}`);
        // dispatch("getJobs");
        commit("removeJob", jobId);
        commit("setActiveJob", {});
        // NOTE after the job is deleted, send them to the job home page for that job
        router.push({ name: "JobsHome" });
      } catch (error) {
        console.error(error);
      }
    },
    setActiveJob({ commit }, job) {
      commit("setActiveJob", job);
    },

    async getHouses({ commit }) {
      try {
        let res = await _api.get("houses");
        commit("setHouses", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getHouseById({ commit, dispatch }, id) {
      try {
        let res = await _api.get("houses/" + id);
        commit("setActiveHouse", res.data.data); //NOTE the res.data.data is the sandbox api way of providing data
      } catch (error) {
        console.error(error);
        // NOTE Push changes the route to the provided route by name
        router.push({ name: "HousesHome" });
      }
    },
    async createHouse({ commit, dispatch }, newHouse) {
      try {
        let res = await _api.post("houses", newHouse);
        // dispatch("getHouses");
        commit("addHouse", res.data.data);
        // NOTE after the house is created, send them to the house details page for that house
        router.push({
          name: "HouseDetails",
          params: { houseId: res.data.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteHouse({ commit, dispatch }, houseId) {
      try {
        let res = await _api.delete(`houses/${houseId}`);
        // dispatch("getHouses");
        commit("removeHouse", houseId);
        commit("setActiveHouse", {});
        // NOTE after the house is deleted, send them to the house home page for that house
        router.push({ name: "HousesHome" });
      } catch (error) {
        console.error(error);
      }
    },
    setActiveHouse({ commit }, house) {
      commit("setActiveHouse", house);
    }
  }
});
